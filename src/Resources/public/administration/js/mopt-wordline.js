!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/bundles/moptwordline/",n(n.s="T5UO")}({"6XLv":function(t){t.exports=JSON.parse('{"api-test-button":{"title":"API Test","success":"Connection was successfully tested.","error":"Connection could not be established. Please check the access data.","button":"Test connection"},"check-status-button":{"title":"Status check","success":"Status was successfully updated.","error":"Connection could not be established. Please check the access data.","button":"Check status"},"capture-payment-button":{"title":"Capture payment","success":"Payment was successfully captured.","error":"Connection could not be established. Please check the access data.","button":"Capture payment"},"cancel-payment-button":{"title":"Cancel payment","success":"Payment was successfully canceled.","error":"Connection could not be established. Please check the access data.","button":"Cancel payment"},"refund-payment-button":{"title":"Refund payment","success":"Payment was successfully refunded.","error":"Connection could not be established. Please check the access data.","button":"Refund payment"},"forwardToPaymentHandler":"Forwarding to payment handler.","errorWithConfirmRedirect":"Error. Redirecting to confirm page.","buildingOrder":"Building order","started":"Started","captureRequested":"captureRequested","gettingPaymentStatus":"gettingPaymentStatus","tryingToCapture":"tryingToCapture","unsupportedStatus":"unsupportedStatus","wordline-order":{"detail":{"cardLabel":"Wordline transaction control","bundleSelectLabel":"Associated bundles","bundleSelectPlaceholder":"Add bundle..."}}}')},"6wHS":function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=a(t);if(e){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=Shopware.Classes.ApiService,l=Shopware.Application,f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(l,t);var e,n,i,a=s(l);function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"api-test";return o(this,l),a.call(this,t,e,n)}return e=l,(n=[{key:"check",value:function(t){var e=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/test-connection"),t,{headers:e}).then((function(t){return u.handleResponse(t)}))}}])&&r(e.prototype,n),i&&r(e,i),l}(u);l.addServiceProvider("apiTest",(function(t){var e=l.getContainer("init");return new f(e.httpClient,t.loginService)}))},GUHC:function(t){t.exports=JSON.parse('{"api-test-button":{"title":"API Test","success":"Verbindung wurde erfolgreich getestet.","error":"Verbindung konnte nicht hergestellt werden. Bitte prüfe die Zugangsdaten.","button":"Test Verbindung"}}')},NML8:function(t,e){t.exports='{% block sw_order_detail_base_custom_fields %}\n    {% parent() %}\n    <sw-card :title="$t(\'wordline-order.detail.cardLabel\')"\n             :isLoading="isLoading">\n        <sw-button-process\n            :isLoading="isLoading"\n            :processSuccess="isSaveSuccessful"\n            @click="statusCheck"\n        >{{ $tc(\'check-status-button.button\') }}</sw-button-process>\n\n        <sw-button-process\n            :isLoading="isLoading"\n            :processSuccess="isSaveSuccessful"\n            @click="capture"\n        >{{ $tc(\'capture-payment-button.button\') }}</sw-button-process>\n\n        <sw-button-process\n            :isLoading="isLoading"\n            :processSuccess="isSaveSuccessful"\n            @click="cancel"\n        >{{ $tc(\'cancel-payment-button.button\') }}</sw-button-process>\n\n        <sw-button-process\n            :isLoading="isLoading"\n            :processSuccess="isSaveSuccessful"\n            @click="refund"\n        >{{ $tc(\'refund-payment-button.button\') }}</sw-button-process>\n    </sw-card>\n{% endblock %}\n'},T5UO:function(t,e,n){"use strict";n.r(e);n("6wHS"),n("t5Oc");var o=n("p9rz"),r=n.n(o),c=Shopware,s=c.Component,i=c.Mixin;s.register("api-test-button",{template:r.a,props:["label"],inject:["apiTest"],mixins:[i.getByName("notification")],data:function(){return{isLoading:!1,isSaveSuccessful:!1}},computed:{pluginConfig:function(){for(var t=this.$parent;void 0===t.actualConfigData;)t=t.$parent;return{"сonfigData":t.actualConfigData,salesChannelId:t.currentSalesChannelId}}},methods:{saveFinish:function(){this.isSaveSuccessful=!1},check:function(){var t=this;this.isLoading=!0,this.apiTest.check(this.pluginConfig).then((function(e){e.success?(t.isSaveSuccessful=!0,t.createNotificationSuccess({title:t.$tc("api-test-button.title"),message:t.$tc("api-test-button.success")}),document.querySelector(".sw-extension-config__save-action").click()):t.createNotificationError({title:t.$tc("api-test-button.title"),message:t.$tc("api-test-button.error")+e.message}),t.isLoading=!1}))}}});var a=n("NML8"),u=n.n(a);Shopware.Component.override("sw-order-detail-base",{template:u.a,inject:["transactionsControl"],data:function(){return{isLoading:!1,isSaveSuccessful:!1}},computed:{pluginConfig:function(){return{url:window.location.href}}},methods:{statusCheck:function(){var t=this;this.isLoading=!0,this.transactionsControl.statusCheck(this.pluginConfig).then((function(e){e.success?(t.isSaveSuccessful=!0,t.createNotificationSuccess({title:t.$tc("check-status-button.title"),message:t.$tc("check-status-button.success")}),location.reload()):t.createNotificationError({title:t.$tc("check-status-button.title"),message:t.$tc("check-status-button.error")+e.message}),t.isLoading=!1}))},capture:function(){var t=this;this.isLoading=!0,this.transactionsControl.capture(this.pluginConfig).then((function(e){e.success?(t.isSaveSuccessful=!0,t.createNotificationSuccess({title:t.$tc("capture-payment-button.title"),message:t.$tc("capture-payment-button.success")}),location.reload()):t.createNotificationError({title:t.$tc("capture-payment-button.title"),message:t.$tc("capture-payment-button.error")+e.message}),t.isLoading=!1}))},cancel:function(){var t=this;this.isLoading=!0,this.transactionsControl.cancel(this.pluginConfig).then((function(e){e.success?(t.isSaveSuccessful=!0,t.createNotificationSuccess({title:t.$tc("cancel-payment-button.title"),message:t.$tc("cancel-payment-button.success")}),location.reload()):t.createNotificationError({title:t.$tc("cancel-payment-button.title"),message:t.$tc("cancel-payment-button.error")+e.message}),t.isLoading=!1}))},refund:function(){var t=this;this.isLoading=!0,this.transactionsControl.refund(this.pluginConfig).then((function(e){e.success?(t.isSaveSuccessful=!0,t.createNotificationSuccess({title:t.$tc("refund-payment-button.title"),message:t.$tc("refund-payment-button.success")}),location.reload()):t.createNotificationError({title:t.$tc("refund-payment-button.title"),message:t.$tc("refund-payment-button.error")+e.message}),t.isLoading=!1}))}}});var l=n("GUHC"),f=n("6XLv");Shopware.Locale.extend("de-DE",l),Shopware.Locale.extend("en-GB",f)},p9rz:function(t,e){t.exports='<div>\n    <br/>\n    <sw-button-process\n        :isLoading="isLoading"\n        :processSuccess="isSaveSuccessful"\n        @process-finish="saveFinish"\n        @click="check"\n    >{{ $tc(\'api-test-button.button\') }}</sw-button-process>\n    <br/>\n    <br/>\n</div>\n'},t5Oc:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=a(t);if(e){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=Shopware.Classes.ApiService,l=Shopware.Application,f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(l,t);var e,n,i,a=s(l);function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"transactions-control";return o(this,l),a.call(this,t,e,n)}return e=l,(n=[{key:"statusCheck",value:function(t){var e=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/status"),t,{headers:e}).then((function(t){return u.handleResponse(t)}))}},{key:"capture",value:function(t){var e=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/capture"),t,{headers:e}).then((function(t){return u.handleResponse(t)}))}},{key:"cancel",value:function(t){var e=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/cancel"),t,{headers:e}).then((function(t){return u.handleResponse(t)}))}},{key:"refund",value:function(t){var e=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/refund"),t,{headers:e}).then((function(t){return u.handleResponse(t)}))}}])&&r(e.prototype,n),i&&r(e,i),l}(u);l.addServiceProvider("transactionsControl",(function(t){var e=l.getContainer("init");return new f(e.httpClient,t.loginService)}))}});
//# sourceMappingURL=mopt-wordline.js.map