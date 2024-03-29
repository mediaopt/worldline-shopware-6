<?php declare(strict_types=1);

/**
 * @author Mediaopt GmbH
 * @package MoptWorldline\Controller
 */

namespace MoptWorldline\Controller\Payment;

use MoptWorldline\Adapter\WorldlineSDKAdapter;
use MoptWorldline\Bootstrap\Form;
use OnlinePayments\Sdk\Webhooks\InMemorySecretKeyStore;
use OnlinePayments\Sdk\Webhooks\WebhooksHelper;
use MoptWorldline\Service\AdminTranslate;
use MoptWorldline\Service\PaymentHandler;
use Shopware\Core\Checkout\Order\Aggregate\OrderTransaction\OrderTransactionStateHandler;
use Shopware\Core\Checkout\Payment\Cart\PaymentHandler\AsynchronousPaymentHandlerInterface;
use Shopware\Core\Checkout\Payment\Exception\CustomerCanceledAsyncPaymentException;
use Shopware\Core\Checkout\Payment\Exception\InvalidTransactionException;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;
use Monolog\Logger;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @RouteScope(scopes={"storefront"})
 */
class PaymentWebhookController extends AbstractController
{
    private RouterInterface $router;
    private EntityRepositoryInterface $orderRepository;
    private EntityRepositoryInterface $customerRepository;
    private AsynchronousPaymentHandlerInterface $paymentHandler;
    private OrderTransactionStateHandler $transactionStateHandler;
    private SystemConfigService $systemConfigService;
    private Logger $logger;
    private TranslatorInterface $translator;

    public function __construct(
        SystemConfigService                 $systemConfigService,
        EntityRepositoryInterface           $orderRepository,
        EntityRepositoryInterface           $customerRepository,
        AsynchronousPaymentHandlerInterface $paymentHandler,
        OrderTransactionStateHandler        $transactionStateHandler,
        RouterInterface                     $router,
        Logger                              $logger,
        TranslatorInterface                 $translator
    )
    {
        $this->systemConfigService = $systemConfigService;
        $this->orderRepository = $orderRepository;
        $this->customerRepository = $customerRepository;
        $this->paymentHandler = $paymentHandler;
        $this->transactionStateHandler = $transactionStateHandler;
        $this->router = $router;
        $this->logger = $logger;
        $this->translator = $translator;
    }

    /**
     * @Route(
     *     "/worldline/payment/webhook",
     *     name="worldline.payment.webhook",
     *     defaults={"csrf_protected"=false},
     *     methods={"POST"}
     * )
     * @param Request $request
     * @param SalesChannelContext $salesChannelContext
     * @return Response
     * @throws \Exception
     */
    public function webhook(Request $request, SalesChannelContext $salesChannelContext): Response
    {
        $data = $this->parseRequest($request, $salesChannelContext->getSalesChannelId());
        if ($data === false) {
            return new Response();
        }

        try {
            $order = PaymentHandler::getOrder(
                $salesChannelContext->getContext(),
                $this->orderRepository,
                $data['hostedCheckoutId']
            );
        } catch (\Exception $e) {
            $this->log($e->getMessage(), $request->request->all());
            return new Response();
        }

        $paymentHandler = new PaymentHandler(
            $this->systemConfigService,
            $this->logger,
            $order,
            $this->translator,
            $this->orderRepository,
            $this->customerRepository,
            $salesChannelContext->getContext(),
            $this->transactionStateHandler
        );
        $paymentHandler->logWebhook($request->request->all());

        $paymentHandler->updatePaymentStatus($data['hostedCheckoutId']);

        return new Response();
    }

    /**
     * @param Request $request
     * @param string $salesChannelId
     * @return array|false
     */
    private function parseRequest(Request $request, string $salesChannelId)
    {
        // Get rid of additional array level
        $headers = $request->headers->all();
        foreach ($headers as $key => $header) {
            $headers[$key] = $header[0];
        }

        $adapter = new WorldlineSDKAdapter($this->systemConfigService, $this->logger, $salesChannelId);
        $keys = new InMemorySecretKeyStore($adapter->getWebhookCredentials());
        $helper = new WebhooksHelper($keys);

        try {
            //Request validation
            $event = $helper->unmarshal($request->getContent(), $headers);

            $payment = $event->getPayment();
            if (is_null($payment)) {
                $this->log('errorWithWebhookRequest', [$request->getContent(), $request->headers->all()]);
                return false;
            }

            $paymentId = $payment->getId();
            $paymentId = explode('_', $paymentId);
            $hostedCheckoutId = $paymentId[0];
            $statusCode = $event->getPayment()->getStatusOutput()->getStatusCode();
        } catch (\Exception $e) {
            $this->log($e->getMessage(), [$request->getContent(), $request->headers->all()]);
            return false;
        }

        return [
            'hostedCheckoutId' => $hostedCheckoutId,
            'statusCode' => $statusCode
        ];
    }

    /**
     * @param $message
     * @param $additionalData
     * @return void
     */
    private function log($message, $additionalData)
    {
        $this->logger->addRecord(
            Logger::ERROR,
            AdminTranslate::trans($this->translator->getLocale(), $message),
            [
                'source' => 'Worldline',
                'additionalData' => $additionalData,
            ]
        );
    }
}
