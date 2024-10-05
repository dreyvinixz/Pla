{
   "@context": "https://schema.org",
   "@graph": [
     {
       "@type": "WebPage",
       "@id": "https://www.ipm.com.br/",
       "url": "https://www.ipm.com.br/",
       "name": "IPM Sistemas: Sistema de gestão pública 100% em nuvem",
       "isPartOf": { "@id": "https://www.ipm.com.br/#website" },
       "about": { "@id": "https://www.ipm.com.br/#organization" },
       "datePublished": "2023-10-24T20:26:09+00:00",
       "dateModified": "2024-09-06T16:22:20+00:00",
       "description": "Conheça o Atende.Net da IPM Sistemas, um sistema de gestão pública cloud e completo. Software para Prefeitura com Inteligência Artificial.",
       "breadcrumb": { "@id": "https://www.ipm.com.br/#breadcrumb" },
       "inLanguage": "pt-BR",
       "potentialAction": [{ "@type": "ReadAction", "target": ["https://www.ipm.com.br/"] }]
     },
     {
       "@type": "BreadcrumbList",
       "@id": "https://www.ipm.com.br/#breadcrumb",
       "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Início" }]
     },
     {
       "@type": "WebSite",
       "@id": "https://www.ipm.com.br/#website",
       "url": "https://www.ipm.com.br/",
       "name": "IPM",
       "description": "",
       "publisher": { "@id": "https://www.ipm.com.br/#organization" },
       "alternateName": "IPM",
       "potentialAction": [
         {
           "@type": "SearchAction",
           "target": {
             "@type": "EntryPoint",
             "urlTemplate": "https://www.ipm.com.br/?s={search_term_string}"
           },
           "query-input": { "@type": "PropertyValueSpecification", "valueRequired": true, "valueName": "search_term_string" }
         }
       ],
       "inLanguage": "pt-BR"
     },
     {
       "@type": "Organization",
       "@id": "https://www.ipm.com.br/#organization",
       "name": "IPM",
       "url": "https://www.ipm.com.br/",
       "logo": {
         "@type": "ImageObject",
         "inLanguage": "pt-BR",
         "@id": "https://www.ipm.com.br/#/schema/logo/image/",
         "url": "https://www.ipm.com.br/wp-content/uploads/2023/10/logo-ipm-md.svg",
         "contentUrl": "https://www.ipm.com.br/wp-content/uploads/2023/10/logo-ipm-md.svg",
         "width": 74,
         "height": 84,
         "caption": "IPM"
       },
       "image": { "@id": "https://www.ipm.com.br/#/schema/logo/image/" },
       "sameAs": [
         "https://www.facebook.com/ipmsistemas/",
         "https://x.com/ipmsistemas",
         "https://www.instagram.com/ipmsistemas/?hl=pt-br",
         "https://www.youtube.com/channel/UC6qR6SivTwGZGKbBz6tmJsQ",
         "https://www.linkedin.com/company/ipmsistemas/?originalSubdomain=br"
       ]
     }
   ]
 }
 
 window.dataLayer = window.dataLayer || [];
 
 function gtag() {
   dataLayer.push(arguments);
 }
 
 gtag('js', new Date());
 
 gtag('config', 'G-194LQTYT0W');
 
 (function(w, d, s, l, i) {
   w[l] = w[l] || [];
   w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
   var f = d.getElementsByTagName(s)[0],
     j = d.createElement(s),
     dl = l != 'dataLayer' ? '&l=' + l : '';
   j.async = true;
   j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
   f.parentNode.insertBefore(j, f);
 })(window, document, 'script', 'dataLayer', 'GTM-WLVPXTH');
 
 document.addEventListener('wpcf7submit', function(event) {
   location = '/obrigado';
 }, false);
 
 document.addEventListener('DOMContentLoaded', function() {
   const forms = document.querySelectorAll('.wpcf7-form');
   const firstForm = forms[0];
 
   const submitButton = firstForm.querySelector('.wpcf7-submit');
 
   submitButton.setAttribute('disabled', 'disabled');
 
   firstForm.addEventListener('input', function() {
     const inputs = firstForm.querySelectorAll('.wpcf7-form-control[aria-required="true"]');
 
     let valid = true;
 
     inputs.forEach(function(input) {
       if (input.tagName === 'SELECT') {
         if (input.value.trim() === '' || input.value.trim() === 'Selecione') {
           valid = false;
         }
       } else { // Para outros tipos de inputs
         if (input.value.trim() === '') {
           valid = false;
         }
       }
     });
 
     if (valid) {
       submitButton.removeAttribute('disabled');
     } else {
       submitButton.setAttribute('disabled', 'disabled');
     }
   });
 });
 
 /* <![CDATA[ */
 var cncb_plugin_object = {
   "theme": "WhiteMineShaft",
   "type": "confirm",
   "bannerBlockType": "line",
   "position": "bottom",
   "corner": "rectangle",
   "buttonType": "filled-rectangle",
   "blind": { "visible": 0 },
   "message": {
     "html": "Para melhorar a sua experiência, nosso site utiliza cookies conforme",
     "styles": { "color": "#000000" }
   },
   "link": {
     "html": "nossa Política de Proteção de Dados.",
     "href": "https://www.ipm.com.br/lgpd/",
     "styles": { "color": "#000000", "display": "inline" },
     "stylesHover": { "color": "#e52b28" }
   },
   "buttonDirection": "row",
   "buttonAllow": {
     "html": "CONTINUAR NAVEGANDO",
     "styles": { "border-style": "solid", "background": "#e52b28" },
     "stylesHover": { "border-style": "solid" }
   },
   "buttonDismiss": {
     "html": "OK",
     "styles": { "border-style": "solid", "background": "#e52b28" },
     "stylesHover": { "border-style": "solid" }
   },
   "buttonDecline": {
     "html": "RECUSAR",
     "styles": { "border-style": "solid" },
     "stylesHover": { "border-style": "solid" }
   },
   "animationType": "no",
   "animationDelay": "0ms",
   "animationDuration": "600ms",
   "popupStyles": {
     "border-style": "none",
     "margin-top": "auto",
     "margin-right": "auto",
     "margin-bottom": "auto",
     "margin-left": "auto"
   },
   "accept": []
 };
 /* ]]> */
 
 /* <![CDATA[ */
 "use strict";
 var _createClass = (function() {
   function defineProperties(target, props) {
     for (var i = 0; i < props.length; i++) {
       var descriptor = props[i];
       descriptor.enumerable = descriptor.enumerable || !1;
       descriptor.configurable = !0;
       if ("value" in descriptor) descriptor.writable = !0;
       Object.defineProperty(target, descriptor.key, descriptor);
     }
   }
   return function(Constructor, protoProps, staticProps) {
     if (protoProps) defineProperties(Constructor.prototype, protoProps);
     if (staticProps) defineProperties(Constructor, staticProps);
     return Constructor;
   };
 })();
 
 function _classCallCheck(instance, Constructor) {
   if (!(instance instanceof Constructor)) {
     throw new TypeError("Cannot call a class as a function");
   }
 }
 
 var RocketBrowserCompatibilityChecker = (function() {
   function RocketBrowserCompatibilityChecker(options) {
     _classCallCheck(this, RocketBrowserCompatibilityChecker);
     this.passiveSupported = !1;
     this._checkPassiveOption(this);
     this.options = !!this.passiveSupported && options;
   }
 
   _createClass(RocketBrowserCompatibilityChecker, [
     {
       key: "_checkPassiveOption",
       value: function(self) {
         try {
           var options = {
             get passive() {
               return !(self.passiveSupported = !0);
             }
           };
           window.addEventListener("test", null, options);
           window.removeEventListener("test", null, options);
         } catch (err) {
           self.passiveSupported = !1;
         }
       }
     },
     {
       key: "initRequestIdleCallback",
       value: function() {
         if (!("requestIdleCallback" in window)) {
           window.requestIdleCallback = function(cb) {
             var start = Date.now();
             return setTimeout(function() {
               cb({
                 didTimeout: !1,
                 timeRemaining: function() {
                   return Math.max(0, 50 - (Date.now() - start));
                 }
               });
             }, 1);
           };
         }
 
         if (!("cancelIdleCallback" in window)) {
           window.cancelIdleCallback = function(id) {
             return clearTimeout(id);
           };
         }
       }
     }
   ]);
 
   return RocketBrowserCompatibilityChecker;
 })();
 
 var checker = new RocketBrowserCompatibilityChecker();
 checker.initRequestIdleCallback();
 /* ]]> */
 