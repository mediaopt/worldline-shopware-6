!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/moptworldline/",n(n.s="Amj0")}({"7AqV":function(e,t,n){var o=n("nLnJ");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("SZ7m").default)("6991214e",o,!0,{})},A04l:function(e,t){e.exports='<div>\n    <br/>\n    <sw-button-process\n        :isLoading="isLoading"\n        :processSuccess="isSaveSuccessful"\n        @process-finish="saveFinish"\n        @click="check"\n    >{{ $tc(\'api-test-button.button\') }}</sw-button-process>\n    <br/>\n    <br/>\n</div>\n'},Amj0:function(e,t,n){"use strict";n.r(t);n("dHgz"),n("wXSU");var o=n("A04l"),r=n.n(o),s=Shopware,a=s.Component,i=s.Mixin;a.register("api-test-button",{template:r.a,props:["label"],inject:["apiTest"],mixins:[i.getByName("notification")],data:function(){return{isLoading:!1,isSaveSuccessful:!1}},computed:{pluginConfig:function(){for(var e=this.$parent;void 0===e.actualConfigData;)e=e.$parent;return{"сonfigData":e.actualConfigData,salesChannelId:e.currentSalesChannelId}}},methods:{saveFinish:function(){this.isSaveSuccessful=!1},check:function(){var e=this;this.isLoading=!0,this.apiTest.check(this.pluginConfig).then((function(t){t.success?(e.isSaveSuccessful=!0,e.createNotificationSuccess({title:e.$tc("api-test-button.title"),message:e.$tc("api-test-button.success")}),document.querySelector(".sw-extension-config__save-action").click()):e.createNotificationError({title:e.$tc("api-test-button.title"),message:e.$tc("api-test-button.error")+t.message}),e.isLoading=!1}))}}});var c=n("Zk0b"),u=n.n(c),l=(n("7AqV"),Shopware),d=l.Component,p=l.Mixin;d.register("payment-method-button",{template:u.a,props:["label"],inject:["apiTest"],mixins:[p.getByName("notification")],data:function(){return{isLoading:!1,isSaveSuccessful:!1}},computed:{pluginConfig:function(){for(var e=this.$parent;void 0===e.actualConfigData;)e=e.$parent;return{"сonfigData":e.actualConfigData,salesChannelId:e.currentSalesChannelId,responseArray:this.createPaymentMethodsArray()}}},methods:{getSalesChannelId:function(){for(var e=this.$parent;void 0===e.currentSalesChannelId;)e=e.$parent;return e.currentSalesChannelId},selectCheckbox:function(){document.querySelectorAll(".paymentMethod").forEach((function(e,t,n){(0===t||e.checked!=n[0].checked)&&e.click()}))},createPaymentMethodsArray:function(){var e=[];return document.querySelectorAll(".payment-method--container").forEach((function(t){e.push({id:t.children[0].children[0].id,status:t.children[0].children[0].checked,internalId:t.children[0].children[0].getAttribute("internalId")})})),e},saveButton:function(){var e=this;this.apiTest.savemethod({data:this.createPaymentMethodsArray(),salesChannelId:this.getSalesChannelId()}).then((function(t){t.success?(e.isSaveSuccessful=!0,e.createNotificationSuccess({title:e.$tc("payment-method-button.APITitle"),message:e.$tc("payment-method-button.success")})):e.createNotificationError({title:e.$tc("payment-method-button.APITitle"),message:e.$tc("payment-method-button.errorAPI")+t.message}),e.isLoading=!1}))},display:function(e){document.querySelector(".border-inner").innerHTML=e},renderPaymentMethods:function(e){if(e.length<=5&&(document.querySelector(".select-all").innerHTML=""),0==e.length)this.display('<p class="innerText">'.concat(this.$tc("payment-method-button.requestEmpty"),"</p>"));else{var t=e.map((function(e){return'<div class="payment-method--container">\n                    <label class="switch">\n                      <input type="checkbox" id="'.concat(e.id,'" internalId="').concat(e.internalId,'" class="paymentMethod" ').concat(e.isCreated?"checked":"",'>\n                      <span class="slider round"></span>\n                    </label>\n                    <img src="').concat(e.logo,'">\n                    <label for="').concat(e.label,'">\n                    ').concat(e.label,"</label>\n                    </div>")})).join(" ");this.display(t)}},getPaymentMethods:function(){var e=this;this.display('<p class="innerText">'.concat(this.$tc("payment-method-button.request"),"</p>")),this.isLoading=!0,this.apiTest.check(this.pluginConfig).then((function(t){t.success?e.renderPaymentMethods(t.paymentMethods):(e.display('<p class="innerText">'.concat(e.$tc("payment-method-button.error"),"</p>")),e.createNotificationError({title:e.$tc("payment-method-button.title"),message:e.$tc("payment-method-button.error")+t.message})),e.isLoading=!1})).catch((function(t){e.display('<p class="innerText">'.concat(e.$tc("payment-method-button.error"),"</p>"))}))}},mounted:function(){this.getPaymentMethods()}});var f=n("jMmf"),h=n.n(f);Shopware.Component.override("sw-order-detail-base",{template:h.a,inject:["transactionsControl"],data:function(){return{isLoading:!1,isSaveSuccessful:!1}},computed:{pluginConfig:function(){return{url:window.location.href}}},methods:{statusCheck:function(){var e=this;this.isLoading=!0,this.transactionsControl.statusCheck(this.pluginConfig).then((function(t){t.success?(e.isSaveSuccessful=!0,e.createNotificationSuccess({title:e.$tc("check-status-button.title"),message:e.$tc("check-status-button.success")}),location.reload()):e.createNotificationError({title:e.$tc("check-status-button.title"),message:e.$tc("check-status-button.error")+t.message}),e.isLoading=!1}))},capture:function(){var e=this;this.isLoading=!0,this.transactionsControl.capture(this.pluginConfig).then((function(t){t.success?(e.isSaveSuccessful=!0,e.createNotificationSuccess({title:e.$tc("capture-payment-button.title"),message:e.$tc("capture-payment-button.success")}),location.reload()):e.createNotificationError({title:e.$tc("capture-payment-button.title"),message:e.$tc("capture-payment-button.error")+t.message}),e.isLoading=!1}))},cancel:function(){var e=this;this.isLoading=!0,this.transactionsControl.cancel(this.pluginConfig).then((function(t){t.success?(e.isSaveSuccessful=!0,e.createNotificationSuccess({title:e.$tc("cancel-payment-button.title"),message:e.$tc("cancel-payment-button.success")}),location.reload()):e.createNotificationError({title:e.$tc("cancel-payment-button.title"),message:e.$tc("cancel-payment-button.error")+t.message}),e.isLoading=!1}))},refund:function(){var e=this;this.isLoading=!0,this.transactionsControl.refund(this.pluginConfig).then((function(t){t.success?(e.isSaveSuccessful=!0,e.createNotificationSuccess({title:e.$tc("refund-payment-button.title"),message:e.$tc("refund-payment-button.success")}),location.reload()):e.createNotificationError({title:e.$tc("refund-payment-button.title"),message:e.$tc("refund-payment-button.error")+t.message}),e.isLoading=!1}))}}});var m=n("rhm/"),b=n("mdsp");Shopware.Locale.extend("de-DE",m),Shopware.Locale.extend("en-GB",b)},SZ7m:function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},r=0;r<t.length;r++){var s=t[r],a=s[0],i={id:e+":"+r,css:s[1],media:s[2],sourceMap:s[3]};o[a]?o[a].parts.push(i):n.push(o[a]={id:a,parts:[i]})}return n}n.r(t),n.d(t,"default",(function(){return h}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,u=!1,l=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,r){u=n,d=r||{};var a=o(e,t);return m(a),function(t){for(var n=[],r=0;r<a.length;r++){var i=a[r];(c=s[i.id]).refs--,n.push(c)}t?m(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete s[c.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],o=s[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(y(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(y(n.parts[r]));s[n.id]={id:n.id,refs:1,parts:a}}}}function b(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function y(e){var t,n,o=document.querySelector("style["+p+'~="'+e.id+'"]');if(o){if(u)return l;o.parentNode.removeChild(o)}if(f){var r=c++;o=i||(i=b()),t=S.bind(null,o,r,!1),n=S.bind(null,o,r,!0)}else o=b(),t=C.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var g,v=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function S(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var s=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function C(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),d.ssrId&&e.setAttribute(p,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},Zk0b:function(e,t){e.exports='<div class="component">\n    <div class="headline">\n        <label>{{ $tc(\'payment-method-button.headline\') }}</label>\n    </div>\n    <div class="border">\n        <div class="subline">\n            <p class="subline">{{ $tc(\'payment-method-button.subline\') }}</p>\n            <p @click="selectCheckbox" class="select-all">{{ $tc(\'payment-method-button.selectAll\') }}</p>\n        </div>\n        <div class="border-inner">\n        </div>\n        <div class="button-container">\n            <sw-button-process\n                :isLoading="isLoading"\n                @click="saveButton"\n            >{{ $tc(\'payment-method-button.save\') }}</sw-button-process>\n        </div>\n    </div>\n</div>\n'},dHgz:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=Shopware.Classes.ApiService,l=Shopware.Application,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,i,c=a(l);function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"api-test";return o(this,l),c.call(this,e,t,n)}return t=l,(n=[{key:"check",value:function(e){var t=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/test-connection"),e,{headers:t}).then((function(e){return u.handleResponse(e)}))}},{key:"savemethod",value:function(e){var t=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/savemethod"),e,{headers:t}).then((function(e){return u.handleResponse(e)}))}}])&&r(t.prototype,n),i&&r(t,i),l}(u);l.addServiceProvider("apiTest",(function(e){var t=l.getContainer("init");return new d(t.httpClient,e.loginService)}))},jMmf:function(e,t){e.exports='{% block sw_order_detail_base_custom_fields %}\n    {% parent() %}\n    <sw-card :title="$t(\'worldline-order.detail.cardLabel\')"\n             :isLoading="isLoading">\n        <sw-button-process\n            :isLoading="isLoading"\n            :processSuccess="isSaveSuccessful"\n            @click="statusCheck"\n        >{{ $tc(\'check-status-button.button\') }}</sw-button-process>\n\n        <sw-button-process\n            :isLoading="isLoading"\n            :processSuccess="isSaveSuccessful"\n            @click="capture"\n        >{{ $tc(\'capture-payment-button.button\') }}</sw-button-process>\n\n        <sw-button-process\n            :isLoading="isLoading"\n            :processSuccess="isSaveSuccessful"\n            @click="cancel"\n        >{{ $tc(\'cancel-payment-button.button\') }}</sw-button-process>\n\n        <sw-button-process\n            :isLoading="isLoading"\n            :processSuccess="isSaveSuccessful"\n            @click="refund"\n        >{{ $tc(\'refund-payment-button.button\') }}</sw-button-process>\n    </sw-card>\n{% endblock %}\n'},mdsp:function(e){e.exports=JSON.parse('{"api-test-button":{"title":"API Test","success":"Connection was successfully tested.","error":"Connection could not be established. Please check the access data.","button":"Test connection"},"check-status-button":{"title":"Status check","success":"Status was successfully updated.","error":"Connection could not be established. Please check the access data.","button":"Check status"},"capture-payment-button":{"title":"Capture payment","success":"Payment was successfully captured.","error":"Connection could not be established. Please check the access data.","button":"Capture payment"},"cancel-payment-button":{"title":"Cancel payment","success":"Payment was successfully canceled.","error":"Connection could not be established. Please check the access data.","button":"Cancel payment"},"refund-payment-button":{"title":"Refund payment","success":"Payment was successfully refunded.","error":"Connection could not be established. Please check the access data.","button":"Refund payment"},"forwardToPaymentHandler":"Forwarding to payment handler.","errorWithConfirmRedirect":"Error. Redirecting to confirm page.","buildingOrder":"Building order","started":"Started","captureRequested":"captureRequested","gettingPaymentStatus":"gettingPaymentStatus","tryingToCapture":"tryingToCapture","unsupportedStatus":"unsupportedStatus","operationIsNotPossibleDueToCurrentStatus":"operationIsNotPossibleDueToCurrentStatus","gettingPaymentDetails":"","paymentOpen":"","paymentInProgress":"","paymentPaid":"","paymentRefunded":"","paymentCanceled":"","paymentFailed":"","refundInProgress":"","cantFindCurrencyOfOrder":"","statusUpdateError":"","statusUpdateRequestSent":"","noTransactionForThisOrder":"","success":"Success","failed":"Operation failed.","worldline-order":{"detail":{"cardLabel":"Worldline transaction control","bundleSelectLabel":"Associated bundles","bundleSelectPlaceholder":"Add bundle..."}},"transactionStatus":{"refunded":"Refunded","cancelled":"Cancelled","captured":"Captured","created":"Created","rejected":"Rejected","rejectedCapture":"Capture rejected","redirected":"Redirected","pendingCapture":"Pending capture","authorizationRequested":"Authorization requested","captureRequested":"Capture requested","refundRequested":"Refund requested"},"payment-method-button":{"headline":"Payment Methods","subline":"Please select payment methods for your checkout","selectAll":"select / deselect all","save":"Save","request":"Requesting available payment methods...","requestEmpty":"No payment methods to display","title":"Get available payment methods","error":"Connection could not be established. Please check the access data.","success":"Changes successfully saved","errorAPI":"There was an error on save","APITitle":"Payment method saving"},"configFile":{"merchantId":"Merchant Id","apiKey":"API Key","aspSecret":"API Secret","webhookKey":"Webhook key","webhookSecret":"Webhook secret","liveEndpoint":"Live endpoint","sandboxEndpoint":"Sandbox endpoint","returnUrl":"Return URL","isLiveMode":"Is live mode","logLevel":"Log level","logLevelHint":"Choose the loglevel of non-error messages","logLevelDebug":"DEBUG","logLevelError":"ERROR","logLevelInfo":"INFO"},"composer":{"label":"Worldline Online Payments.","description":"Worldline Online Payments.","extraDescription":"Certified Worldline online payments extension for Shopware 6"}}')},nLnJ:function(e,t,n){},"rhm/":function(e){e.exports=JSON.parse('{"api-test-button":{"title":"API Test","success":"Verbindung wurde erfolgreich getestet.","error":"Verbindung konnte nicht hergestellt werden. Bitte prüfe die Zugangsdaten.","button":"Test Verbindung"},"payment-method-button":{"headline":"Zahlungsarten","subline":"Bitte Zahlungsarten für Ihren Checkout auswählen","selectAll":"alle auswählen / abwählen","save":"speichern","request":"Verfügbare Zahlungsarten werden abgerufen...","requestEmpty":"Keine Zahlungsarten zum Anzeigen gefunden","title":"Verfügbare Zahlungsmittel abrufen","error":"Verbindung konnte nicht hergestellt werden. Bitte überprüfen Sie die Zugangsdaten."}}')},wXSU:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=Shopware.Classes.ApiService,l=Shopware.Application,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,i,c=a(l);function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"transactions-control";return o(this,l),c.call(this,e,t,n)}return t=l,(n=[{key:"statusCheck",value:function(e){var t=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/status"),e,{headers:t}).then((function(e){return u.handleResponse(e)}))}},{key:"capture",value:function(e){var t=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/capture"),e,{headers:t}).then((function(e){return u.handleResponse(e)}))}},{key:"cancel",value:function(e){var t=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/cancel"),e,{headers:t}).then((function(e){return u.handleResponse(e)}))}},{key:"refund",value:function(e){var t=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/refund"),e,{headers:t}).then((function(e){return u.handleResponse(e)}))}}])&&r(t.prototype,n),i&&r(t,i),l}(u);l.addServiceProvider("transactionsControl",(function(e){var t=l.getContainer("init");return new d(t.httpClient,e.loginService)}))}});
//# sourceMappingURL=mopt-worldline.js.map