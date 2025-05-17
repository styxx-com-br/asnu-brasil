function fullHeightRow() {
			var fullHeight,
				offsetTop,
				element = document.getElementsByClassName('vc_row-o-full-height')[0];
			if (element) {
				fullHeight = window.innerHeight;
				offsetTop = window.pageYOffset + element.getBoundingClientRect().top;
				if (offsetTop < fullHeight) {
					fullHeight = 100 - offsetTop / (fullHeight / 100);
					element.style.minHeight = fullHeight + 'vh'
				}
			}
		};
/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+o[a]<+n[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.1";var t=Object.create(null);s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")&&!e("5.0.0")||n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var o={};function u(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n,o),r},set:function(e){u(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&u(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function c(e,t,r,n,o){if(!o)throw new Error("No warning message provided");return a(e,t,r,n,o),0}function i(e,t,r,n){return a(e,t,r,n),0}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("quirks","jQuery is not compatible with Quirks Mode");var d,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;for(d in i(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(u("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,i(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,d)&&(s.find[d]=y[d]);c(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),c(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),c(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),c(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&c(s,"trim",function(e){return null==e?"":(e+"").replace(v,"$1")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(c(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),c(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(c(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),c(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),c(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),c(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,i(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(c(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),c(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),c(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&u("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function x(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}i(s.fn,"removeAttr",function(e){var r=this,n=!1;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&r.each(function(){if(!1!==s(this).prop(t))return!(n=!0)}),n&&(u("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),i(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(u("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var Q,A,R=!1,C=/^[a-z]/,N=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return R=!0,e=r.apply(this,arguments),R=!1,e})}),i(s,"swap",function(e,t,r,n){var o,a,i={};for(a in R||u("swap","jQuery.swap() is undocumented and deprecated"),t)i[a]=e.style[a],e.style[a]=t[a];for(a in o=r.apply(e,n||[]),t)e.style[a]=i[a];return o},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")?(A={animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},"undefined"!=typeof Proxy?s.cssNumber=new Proxy(A,{get:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}}):s.cssNumber=A):A=s.cssNumber,Q=s.fn.css,i(s.fn,"css",function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=x(e),n=r,C.test(n)&&N.test(n[0].toUpperCase()+n.slice(1))||A[r]||u("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))},"css-number");var S,P,k,H,E=s.data;i(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&E.call(this,e),o={},t)a!==x(a)?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return E.call(this,e,o),t}return t&&"string"==typeof t&&t!==x(t)&&(n=s.hasData(e)&&E.call(this,e))&&t in n?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):E.apply(this,arguments)},"data-camelCase"),s.fx&&(k=s.Tween.prototype.run,H=function(e){return e},i(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(u("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=H),k.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,P="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u("fx-interval",P),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){u("fx-interval",P),S=e}}));var M=s.fn.load,q=s.event.add,O=s.event.fix;s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),i(s.event,"fix",function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("event-old-patch","jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=O.call(this,e),n&&n.filter?n.filter(t,e):t},"event-old-patch"),i(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("load-after-event","jQuery(window).on('load'...) called after load event occurred"),q.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){i(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?M.apply(this,e):(u("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){c(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("ready-event","'ready' event is deprecated")}},c(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),c(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),c(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),c(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),c(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated");function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},i(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(F,"<$1></$2>"))!==t&&T(t)!==T(r)&&u("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(F,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags");var D,W,_,I=s.fn.offset;return i(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?I.apply(this,arguments):(u("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(D=s.param,i(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)},"param-ajax-traditional")),c(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(W=s.Deferred,_=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],i(s,"Deferred",function(e){var a=W(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(_,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return c(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),c(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=W.exceptionHook),s});
;
(()=>{"use strict";document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".ppv_container");function e(t){if(!t)return!1;const n=t.querySelector("iframe:not(.pdfp_library)"),s=t.querySelector(".ppv-lightbox-loading"),o=t.querySelector(".ppv-loading");if(n&&null!==n.contentDocument){const s=n.src;n.src=s,setTimeout(()=>{e(t)},1200)}else s&&(s.style.display="none"),o&&(o.style.display="none")}Object.values(t).map(t=>{if(Boolean(t.dataset.lightbox)){const n=t.querySelector(".ppv-lightbox-btn"),s=t.querySelector(".ppv-lightbox-close");n&&n.addEventListener("click",function(){t.classList.add("open"),e(t)}),s&&s.addEventListener("click",function(){t.classList.remove("open")})}else e(t)})})})();
(function(){})();function __wpgmzaMapEngineLoadedCallback(){};
!function($){var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},hasOwn=Object.prototype.hasOwnProperty;$.toJSON="object"==typeof JSON&&JSON.stringify?JSON.stringify:function(t){if(null===t)return"null";var e,r,n,o,i,f,u=$.type(t);if("undefined"!==u){if("number"===u||"boolean"===u)return String(t);if("string"===u)return $.quoteString(t);if("function"==typeof t.toJSON)return $.toJSON(t.toJSON());if("date"===u)return i=t.getUTCMonth()+1,f=t.getUTCDate(),'"'+t.getUTCFullYear()+"-"+(i=i<10?"0"+i:i)+"-"+(f=f<10?"0"+f:f)+"T"+(i=(i=t.getUTCHours())<10?"0"+i:i)+":"+(f=(f=t.getUTCMinutes())<10?"0"+f:f)+":"+(i=(i=t.getUTCSeconds())<10?"0"+i:i)+"."+(f=(f=(f=t.getUTCMilliseconds())<100?"0"+f:f)<10?"0"+f:f)+'Z"';if(e=[],$.isArray(t)){for(r=0;r<t.length;r++)e.push($.toJSON(t[r])||"null");return"["+e.join(",")+"]"}if("object"==typeof t){for(r in t)if(hasOwn.call(t,r)){if("number"===(u=typeof r))n='"'+r+'"';else{if("string"!==u)continue;n=$.quoteString(r)}"function"!==(u=typeof t[r])&&"undefined"!==u&&(o=$.toJSON(t[r]),e.push(n+":"+o))}return"{"+e.join(",")+"}"}}},$.evalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){return eval("("+str+")")},$.secureEvalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered))return eval("("+str+")");throw new SyntaxError("Error parsing JSON, source is not valid.")},$.quoteString=function(t){return t.match(escape)?'"'+t.replace(escape,function(t){var e=meta[t];return"string"==typeof e?e:(e=t.charCodeAt(),"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16))})+'"':'"'+t+'"'}}(jQuery);;
var gform=window.gform||{};function gformBindFormatPricingFields(){jQuery(".ginput_amount, .ginput_donation_amount").off("change.gform").on("change.gform",function(){gformFormatPricingField(this)}),jQuery(".ginput_amount, .ginput_donation_amount").each(function(){gformFormatPricingField(this)})}function Currency(e){return console.warn("Currency has been deprecated since Gravity Forms 2.9. Use gform.Currency instead."),new gform.Currency(e)}function gformCleanNumber(e,t,r,i){return console.warn("gformCleanNumber() has been deprecated since Gravity Forms 2.9. Use gform.Currency.cleanNumber() instead."),gform.Currency.cleanNumber(e,t,r,i)}function gformGetDecimalSeparator(e){return console.warn("gformGetDecimalSeparator() has been deprecated since Gravity Forms 2.9. Use gform.Currency.getDecimalSeparator() instead."),gform.Currency.getDecimalSeparator(e)}function gformIsNumber(e){return console.warn("gformIsNumber() has been deprecated since Gravity Forms 2.9. Use gform.utils.isNumber() instead."),gform.utils.isNumber(e)}function gformIsNumeric(e,t){switch(t){case"decimal_dot":return new RegExp("^(-?[0-9]{1,3}(?:,?[0-9]{3})*(?:.[0-9]+)?)$").test(e);case"decimal_comma":return new RegExp("^(-?[0-9]{1,3}(?:.?[0-9]{3})*(?:,[0-9]+)?)$").test(e)}return!1}function gformDeleteUploadedFile(e,t,r){var i,n=jQuery("#field_"+e+"_"+t),r=jQuery(r).parent().index(),o=(n.find(".ginput_preview").eq(r).remove(),n.find('input[type="file"],.validation_message,#extensions_message_'+e+"_"+t).removeClass("gform_hidden"),n.find(".ginput_post_image_file").show(),n.find('input[type="text"]').val(""),jQuery("#gform_uploaded_files_"+e).val());o&&(o=jQuery.secureEvalJSON(o))&&(i="input_"+t,0<(n=n.find("#gform_multifile_upload_"+e+"_"+t)).length?(o[i].splice(r,1),r=(t=n.data("settings")).gf_vars.max_files,jQuery("#"+t.gf_vars.message_id).html(""),o[i].length<r&&gfMultiFileUploader.toggleDisabled(t,!1)):o[i]=null,jQuery("#gform_uploaded_files_"+e).val(jQuery.toJSON(o)))}void 0===jQuery.fn.prop&&(jQuery.fn.prop=jQuery.fn.attr),jQuery(document).on("gform_post_render",gformBindFormatPricingFields),gform.instances={},gform.console={error:function(e){window.console&&console.error(e)},info:function(e){window.console&&console.info(e)},log:function(e){window.console&&console.log(e)}},gform.adminUtils={handleUnsavedChanges:function(e){var t=null;jQuery(e).find("input, select, textarea").on("change keyup",function(){void 0===jQuery(this).attr("onChange")&&void 0===jQuery(this).attr("onClick")&&(t=!0),"enable-api"===(jQuery(this).next().data("jsButton")||jQuery(this).data("jsButton"))&&(t=null)}),"gravityformswebapi"===this.getUrlParameter("subview")&&gf_webapi_vars.api_enabled!==gf_webapi_vars.enable_api_checkbox_checked&&(t=!0),jQuery(e).on("submit",function(){t=null}),window.onbeforeunload=function(){return t}},getUrlParameter:function(e){for(var t=window.location.search.substring(1).split("&"),r=0;r<t.length;r++){var i=t[r].split("=");if(i[0]==e)return i[1]}}},window.HandleUnsavedChanges=gform.adminUtils.handleUnsavedChanges,gform.tools={debounce:function(i,n,o){var a,l,s;return function(){var e=this,t=arguments,r=o&&!a;t===l&&""+s==""+i&&clearTimeout(a);a=setTimeout(function(){a=null,o||i.apply(e,t)},n),s=i,l=t,r&&i.apply(e,t)}},defaultFor:function(e,t){return void 0!==e?e:t},getFocusable:function(e){return e=this.defaultFor(e,document),this.convertElements(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(function(e){return this.visible(e)}.bind(this))},htmlToElement:function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild},elementToHTML:function(e){return e.outerHTML},convertElements:function(e){for(var t=[],r=e.length;r--;t.unshift(e[r]));return t},delegate:function(e,r,i,n){e=document.querySelectorAll(e);[].forEach.call(e,function(e,t){e.addEventListener(r,function(e){var t;((t=e.target).matches||t.msMatchesSelector).call(t,i)&&n(e)})})},getClosest:function(e,t){var r,i;for(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some(function(e){return"function"==typeof document.body[e]&&(r=e,!0)});e;){if((i=e.parentElement)&&i[r](t))return i;e=i}return null},getNodes:function(e,t,r,i){return e?(r=(r=this.defaultFor(r,document)).querySelectorAll(i?e:'[data-js="'+e+'"]'),t?this.convertElements(r):r):(gform.console.error("Please pass a selector to gform.tools.getNodes"),[])},mergeObjects:function(){for(var e={},t=0;t<arguments.length;t+=1)for(var r=arguments[t],i=Object.keys(r),n=0;n<i.length;n+=1)e[i[n]]=r[i[n]];return e},setAttr:function(e,t,r,i,n){if(!e||!t||!r)return gform.console.error("Please pass a selector, attribute and value to gform.tools.setAttr"),[];i=this.defaultFor(i,document),n=this.defaultFor(n,0),setTimeout(function(){gform.tools.getNodes(e,!0,i,!0).forEach(function(e){e.setAttribute(t,r)})},n)},isRtl:function(){if("rtl"===jQuery("html").attr("dir"))return!0},trigger:function(t,e,r,i){var n;if(t=this.defaultFor(t,""),e=this.defaultFor(e,document),r=this.defaultFor(r,!1),i=this.defaultFor(i,{}),r)(n=document.createEvent("HTMLEvents")).initEvent(t,!0,!1);else try{n=new CustomEvent(t,{detail:i})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,i)}e.dispatchEvent(n)},uniqueId:function(e){return(e=this.defaultFor(e,"id"))+"-"+Math.random().toString(36).substr(2,9)},visible:function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},stripSlashes:function(e){return(e+"").replace(/\\(.?)/g,function(e,t){switch(t){case"\\":return"\\";case"0":return"\0";case"":return"";default:return t}})},getCookie:function(e){for(var t=document.cookie.split(";"),r=0;r<t.length;r++){var i=t[r].split("=");if(e==i[0].trim())return decodeURIComponent(i[1])}return null},setCookie:function(e,t,r,i){var n,o="",a=t;r&&((n=new Date).setTime(n.getTime()+24*r*60*60*1e3),o=" expires="+n.toUTCString()),i&&(a=""!==(r=gform.tools.getCookie(e))&&null!==r?r+","+t:t),document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(a)+";"+o},removeCookie:function(e){gform.tools.setCookie(e,"",-1)}},gform.a11y={},gform.options={jqEditorAccordions:{header:"button.panel-block-tabs__toggle",heightStyle:"content",collapsible:!0,animate:!1,create:function(e){gform.tools.setAttr(".ui-accordion-header","tabindex","0",e.target,100)},activate:function(e){gform.tools.setAttr(".ui-accordion-header","tabindex","0",e.target,100)},beforeActivate:function(e){"advanced_tab_toggle"===e.currentTarget.id&&window.field&&window.field.type&&"address"===window.field.type&&CreateAutocompleteUI(window.field)}},jqAddFieldAccordions:{heightStyle:"content",collapsible:!0,animate:!1,create:function(e){gform.tools.setAttr(".ui-accordion-header","tabindex","0",e.target,100)},activate:function(e){gform.tools.setAttr(".ui-accordion-header","tabindex","0",e.target,100)}}};var _gformPriceFields=new Array,_anyProductSelected;function gformIsHidden(e){return isHidden="none"==e.parents(".gfield").not(".gfield_hidden_product").css("display"),gform.applyFilters("gform_is_hidden",isHidden,e)}var gformCalculateTotalPrice=gform.tools.debounce(function(e){if(_gformPriceFields[e]){var t=0;_anyProductSelected=!1;for(var r=0;r<_gformPriceFields[e].length;r++)t+=gformCalculateProductPrice(e,_gformPriceFields[e][r]);_anyProductSelected&&(t+=gformGetShippingPrice(e)),window.gform_product_total&&(t=window.gform_product_total(e,t)),gformUpdateTotalFieldPrice(e,t=gform.applyFilters("gform_product_total",t,e))}},50,!1);function gformUpdateTotalFieldPrice(e,t){var r,i,n=jQuery(".ginput_total_"+e);0<!n.length||(r=(e=document.querySelector("#gform_wrapper_"+e+".gform_legacy_markup_wrapper"))?n.next():n,t={current:String(r.val()),new:String(t),newFormatted:gformFormatMoney(String(t),!0)},i=t,(e?i.current!==i.new:i.current!==i.newFormatted)&&(e?(r.val(t.new).trigger("change"),n.html(t.newFormatted)):(r.val(t.new).trigger("change"),r.val(t.newFormatted))))}function gformGetShippingPrice(e){var e=jQuery(".gfield_shipping_"+e+" input[readonly], .gfield_shipping_"+e+" select, .gfield_shipping_"+e+" input:checked"),t=0;return gformToNumber(t=1!=e.length||gformIsHidden(e)?t:e.attr("readonly")?e.val():gformGetPrice(e.val()))}function gformGetFieldId(e){e=jQuery(e).attr("id").split("_");return e.length<=0?0:e[e.length-1]}function gformCalculateProductPrice(n,e){var t="_"+n+"_"+e,r=(jQuery(".gfield_option"+t+", .gfield_shipping_"+n).find("select").each(function(){var e=jQuery(this),r=gformGetPrice(e.val()),i=e.attr("id").split("_")[2];e.children("option").each(function(){var e=jQuery(this),t=gformGetOptionLabel(e,e.val(),r,n,i);e.html(t)})}),jQuery(".gfield_option"+t).find(".gfield_checkbox").find("input:checkbox").each(function(){var e=jQuery(this),t=e.attr("id"),r=t.split("_")[2],t=t.replace("choice_","#label_"),t=jQuery(t),e=gformGetOptionLabel(t,e.val(),0,n,r);t.html(e)}),jQuery(".gfield_option"+t+", .gfield_shipping_"+n).find(".gfield_radio").each(function(){var r=0,e=jQuery(this),i=e.attr("id").split("_")[2],t=e.find("input:radio:checked").val();t&&(r=gformGetPrice(t)),e.find("input:radio").each(function(){var e=jQuery(this),t=e.attr("id").replace("choice_","#label_"),t=jQuery(t);t&&(e=gformGetOptionLabel(t,e.val(),r,n,i),t.html(e))})}),gformGetBasePrice(n,e)),e=gformGetProductQuantity(n,e);return 0<e&&(jQuery(".gfield_option"+t).find("input:checked, select").each(function(){gformIsHidden(jQuery(this))||(r+=gformGetPrice(jQuery(this).val()))}),_anyProductSelected=!0),r=gformRoundPrice(r*=e)}function gformGetProductQuantity(e,t){if(!gformIsProductSelected(e,t))return 0;var r,i,n=jQuery("#ginput_quantity_"+e+"_"+t);if(gformIsHidden(n=n.length?n:jQuery("#input_"+e+"_"+t+"_1")))return 0;0<n.length?r=n.val():(r=1,0<(n=jQuery(".gfield_quantity_"+e+"_"+t+" :input")).length&&(r=n.val(),i=gf_get_field_number_format(gf_get_input_id_by_html_id(n.attr("id")),e,"value")));t=gform.Currency.getDecimalSeparator(i=i||"currency");return r=(r=gform.Currency.cleanNumber(r,"","",t))||0}function gformIsProductSelected(e,t){e="_"+e+"_"+t,t=jQuery("#ginput_base_price"+e+", .gfield_donation"+e+' input[type="text"], .gfield_product'+e+" .ginput_amount");return!(!t.val()||gformIsHidden(t))||!(!(t=jQuery(".gfield_product"+e+" select, .gfield_product"+e+" input:checked, .gfield_donation"+e+" select, .gfield_donation"+e+" input:checked")).val()||gformIsHidden(t))}function gformGetBasePrice(e,t){var e="_"+e+"_"+t,t=0,r=jQuery("#ginput_base_price"+e+", .gfield_donation"+e+' input[type="text"], .gfield_product'+e+" .ginput_amount");return 0<r.length?t=r.val():(e=(r=jQuery(".gfield_product"+e+" select, .gfield_product"+e+" input:checked, .gfield_donation"+e+" select, .gfield_donation"+e+" input:checked")).val())&&(t=1<(e=e.split("|")).length?e[1]:0),gformIsHidden(r)&&(t=0),!1===(t=new gform.Currency(gf_global.gf_currency_config).toNumber(t))?0:t}function gformFormatMoney(e,t){return gf_global.gf_currency_config?new gform.Currency(gf_global.gf_currency_config).toMoney(e,t):e}function gformFormatPricingField(e){var t;gf_global.gf_currency_config&&(t=new gform.Currency(gf_global.gf_currency_config).toMoney(jQuery(e).val()),jQuery(e).val(t))}function gformToNumber(e){return new gform.Currency(gf_global.gf_currency_config).toNumber(e)}function gformGetPriceDifference(e,t){t=parseFloat(t)-parseFloat(e);return price=gformFormatMoney(t,!0),price=0<t?"+"+price:price}function gformGetOptionLabel(e,t,r,i,n){e=jQuery(e);var t=gformGetPrice(t),o=e.attr("price"),o=e.html().replace(/<span(.*)<\/span>/i,"").replace(o,""),a=0==gformToNumber(a=gformGetPriceDifference(r,t))?"":" "+a,e=(e.attr("price",a),"option"==e[0].tagName.toLowerCase()?a:"<span class='ginput_price'>"+a+"</span>"),a=o+e;return a=window.gform_format_option_label?gform_format_option_label(a,o,e,r,t,i,n):a}function gformGetProductIds(e,t){for(var r=(jQuery(t).hasClass(e)?jQuery(t):jQuery(t).parents("."+e)).attr("class").split(" "),i=0;i<r.length;i++)if(r[i].substr(0,e.length)==e&&r[i]!=e)return{formId:r[i].split("_")[2],productFieldId:r[i].split("_")[3]};return{formId:0,fieldId:0}}function gformGetPrice(e){var e=e.split("|"),t=new gform.Currency(gf_global.gf_currency_config);return 1<e.length&&!1!==t.toNumber(e[1])?t.toNumber(e[1]):0}function gformRoundPrice(e){var t=new gform.Currency(gf_global.gf_currency_config),e=t.numberFormat(e,t.currency.decimals,".","");return parseFloat(e)}function gformRegisterPriceField(e){if(e.formId){_gformPriceFields[e.formId]||(_gformPriceFields[e.formId]=new Array);for(var t=0;t<_gformPriceFields[e.formId].length;t++)if(_gformPriceFields[e.formId][t]==e.productFieldId)return;_gformPriceFields[e.formId].push(e.productFieldId)}}function gformInitPriceFields(){gform.tools.getNodes(".gfield_price",!0,document,!0).forEach(e=>{gformRegisterPriceField(gformGetProductIds("gfield_price",e))}),Object.keys(_gformPriceFields).forEach(e=>{gformCalculateTotalPrice(e),gform.state.watch(e,["products","feeds"],gformHandleProductChange),bindProductChangeEvent()})}function bindProductChangeEvent(){document.addEventListener("gform/products/product_field_changed",function(e){var t={formId:e.detail.formId,productFieldId:e.detail.productFieldId};jQuery(document).trigger("gform_price_change",[t,e.detail.htmlInput,this])})}function gformHandleProductChange(e,t,r){gformCalculateTotalPrice(e)}function gformShowPasswordStrength(e){var t=gformPasswordStrength(document.getElementById(e).value,document.getElementById(e+"_2")?document.getElementById(e+"_2").value:""),r=window.gf_text["password_"+t],i="unknown"===t?"blank":t;jQuery("#"+e+"_strength").val(t),jQuery("#"+e+"_strength_indicator").removeClass("blank mismatch short good bad strong").addClass(i).html(r)}function gformPasswordStrength(e,t){if(e.length<=0)return"blank";var r=wp.passwordStrength.hasOwnProperty("userInputDisallowedList")?wp.passwordStrength.userInputDisallowedList():wp.passwordStrength.userInputBlacklist();switch(wp.passwordStrength.meter(e,r,t)){case-1:return"unknown";case 2:return"bad";case 3:return"good";case 4:return"strong";case 5:return"mismatch";default:return"short"}}function gformToggleShowPassword(e){var t=jQuery("#"+e),r=t.parent().find("button"),i=r.find("span");switch(t.attr("type")){case"password":t.attr("type","text"),r.attr("aria-label",r.attr("data-label-hide")),i.removeClass("dashicons-hidden").addClass("dashicons-visibility");break;case"text":t.attr("type","password"),r.attr("aria-label",r.attr("data-label-show")),i.removeClass("dashicons-visibility").addClass("dashicons-hidden")}}function gformToggleCheckboxes(e){var t,r=jQuery(e),i=r.is('input[type="checkbox"]'),n=i?r.parent():r.prev(),o=(n.find("label"),n.parent().find(".gchoice:not( .gchoice_select_all )")),n=gf_get_form_id_by_html_id(n.parents(".gfield").attr("id")),a=rgars(window,"gf_global/gfcalc/"+n);t=i?e.checked:"boolean"==typeof(i=r.data("checked"))?!i:!(1===parseInt(i)),o.each(function(){jQuery('input[type="checkbox"]',this).prop("checked",t).trigger("change"),"function"==typeof jQuery('input[type="checkbox"]',this)[0].onclick&&jQuery('input[type="checkbox"]',this)[0].onclick()}),gformToggleSelectAll(e,t?"deselect":"select"),wp.a11y.speak(t?gf_field_checkbox.strings.selected:gf_field_checkbox.strings.deselected),a&&a.runCalcs(n,a.formulaFields)}function gformToggleSelectAll(e,t){var e=jQuery(e),r=e.is('input[type="checkbox"]');(r?e.parent():e.prev()).find("label");r||(e.html("deselect"===t?e.data("label-deselect"):e.data("label-select")),e.data("checked","deselect"===t?1:0))}function gformToggleRadioOther(e){var t=gform.tools.getClosest(e,".ginput_container_radio").querySelector("input.gchoice_other_control");t&&(t.disabled="gf_other_choice"!==e.value)}function gformAddListItem(e,t){var r,i,n,e=jQuery(e);e.hasClass("gfield_icon_disabled")||(r=(e=e.parents(".gfield_list_group")).clone(),i=e.parents(".gfield_list_container"),n=r.find(":input:last").attr("tabindex"),r.find("input, select, textarea").attr("tabindex",n).not(":checkbox, :radio").val("").attr("value",""),r.find(":checkbox, :radio").prop("checked",!1),r=gform.applyFilters("gform_list_item_pre_add",r,e),e.after(r),gformToggleIcons(i,t),gformAdjustClasses(i),gformAdjustRowAttributes(i),gform.doAction("gform_list_post_item_add",r,i),wp.a11y.speak(window.gf_global.strings.newRowAdded))}function gformDeleteListItem(e,t){var e=jQuery(e).parents(".gfield_list_group"),r=e.parents(".gfield_list_container");e.remove(),gformToggleIcons(r,t),gformAdjustClasses(r),gformAdjustRowAttributes(r),gform.doAction("gform_list_post_item_delete",r),wp.a11y.speak(window.gf_global.strings.rowRemoved)}function gformAdjustClasses(e){e.find(".gfield_list_group").each(function(e){e=(e+1)%2==0?"gfield_list_row_even":"gfield_list_row_odd";jQuery(this).removeClass("gfield_list_row_odd gfield_list_row_even").addClass(e)})}function gformAdjustRowAttributes(e){e.parents(".gform_wrapper").hasClass("gform_legacy_markup_wrapper")||e.find(".gfield_list_group").each(function(r){jQuery(this).find("input, select, textarea").each(function(e,t){t=jQuery(t);t.attr("aria-label",t.data("aria-label-template").gformFormat(r+1))});var e=jQuery(this).find(".delete_list_item");e.attr("aria-label",e.data("aria-label-template").gformFormat(r+1))})}function gformToggleIcons(e,t){var r=e.find(".gfield_list_group").length,i=e.find(".add_list_item"),n="undefined"!=typeof gf_legacy&&gf_legacy.is_legacy;e.find(".delete_list_item").css("visibility",1==r?"hidden":"visible"),0<t&&t<=r?(i.data("title",e.find(".add_list_item").attr("title")),i.addClass("gfield_icon_disabled").attr("title",""),n||i.prop("disabled",!0)):0<t&&(i.removeClass("gfield_icon_disabled"),n||i.prop("disabled",!1),i.data("title"))&&i.attr("title",i.data("title"))}function gformAddRepeaterItem(e,t){var r,i,n,e=jQuery(e);e.hasClass("gfield_icon_disabled")||(r=(e=e.closest(".gfield_repeater_item")).clone(),i=e.closest(".gfield_repeater_container"),n=r.find(":input:last").attr("tabindex"),r.find('input[type!="hidden"], select, textarea').attr("tabindex",n).not(":checkbox, :radio").each(function(e){jQuery(this).attr("value")?jQuery(this).val(jQuery(this).attr("value")):jQuery(this).is("textarea")?jQuery(this).val(this.innerHTML):jQuery(this).val("")}),r.find(":checkbox, :radio").prop("checked",!1),r.find(".validation_message").remove(),r.find(".gform-datepicker.initialized").removeClass("initialized"),r=gform.applyFilters("gform_repeater_item_pre_add",r,e),e.after(r),r.children(".gfield_repeater_cell").each(function(){var e=jQuery(this).find(".gfield_repeater_container").first();0<e.length&&(resetContainerItems=function(e){e.children(".gfield_repeater_items").children(".gfield_repeater_item").each(function(e){jQuery(this).children(".gfield_repeater_cell").each(function(){var e=jQuery(this).find(".gfield_repeater_container").first();0<e.length&&resetContainerItems(e)})}),e.children(".gfield_repeater_items").children(".gfield_repeater_item").not(":first").remove()})(e)}),gformResetRepeaterAttributes(i),"function"==typeof gformInitDatepicker&&(i.find(".ui-datepicker-trigger").remove(),i.find(".hasDatepicker").removeClass("hasDatepicker"),gformInitDatepicker()),gformBindFormatPricingFields(),gformToggleRepeaterButtons(i,t),gform.doAction("gform_repeater_post_item_add",r,i))}function gformDeleteRepeaterItem(e,t){var e=jQuery(e).closest(".gfield_repeater_item"),r=e.closest(".gfield_repeater_container");e.remove(),gformResetRepeaterAttributes(r),gformToggleRepeaterButtons(r,t),gform.doAction("gform_repeater_post_item_delete",r)}function gformResetRepeaterAttributes(e,g,m){var _=null;void 0===g&&(g=0),void 0===m&&(m=0),e.children(".gfield_repeater_items").children(".gfield_repeater_item").each(function(){jQuery(this).children(".gfield_repeater_cell").each(function(){var u=jQuery(this),e=jQuery(this).find(".gfield_repeater_container").first();0<e.length?gformResetRepeaterAttributes(e,g+1,m):jQuery(this).find("input, select, textarea, :checkbox, :radio").each(function(){var e=jQuery(this),t=e.attr("name");if(void 0!==t){var r=/^(input_[^\[]*)((\[[0-9]+\])+)/.exec(t);if(r){r[1];for(var i=r[2],n=/\[([0-9]+)\]/g,o=[],a=n.exec(i);null!=a;)o.push(a[1]),a=n.exec(i);for(var l=r[1],s="",c=(o=o.reverse()).length-1;0<=c;c--)c==g?(l+="["+m+"]",s+="-"+m):(l+="["+o[c]+"]",s+="-"+o[c]);var d=e.attr("id"),f=u.find("label[for='"+d+"']"),d=(d&&(d=d.match(/((choice|input)_[0-9|_]*)-/))&&d[2]&&(s=d[1]+s,f.attr("for",s),e.attr("id",s)),t.replace(r[0],l)),f=jQuery('input[name="'+d+'"]').is(":checked");e.is(":radio")&&e.is(":checked")&&t!==d&&f&&(null!==_&&_.prop("checked",!0),e.prop("checked",!1),_=e),e.attr("name",d)}}})}),0===g&&m++}),null!==_&&(_.prop("checked",!0),_=null)}function gformToggleRepeaterButtons(e){var t=e.closest(".gfield_repeater_wrapper").data("max_items"),r=e.children(".gfield_repeater_items").children(".gfield_repeater_item").length,i=e.children(".gfield_repeater_items").children(".gfield_repeater_item").children(".gfield_repeater_buttons"),n=i.children(".add_repeater_item");i.children(".remove_repeater_item").css("visibility",1==r?"hidden":"visible"),0<t&&t<=r?(n.data("title",i.children(".add_repeater_item").attr("title")),n.addClass("gfield_icon_disabled").attr("title","")):0<t&&(n.removeClass("gfield_icon_disabled"),n.data("title"))&&n.attr("title",n.data("title")),e.children(".gfield_repeater_items").children(".gfield_repeater_item").children(".gfield_repeater_cell").each(function(e){var t=jQuery(this).find(".gfield_repeater_container").first();0<t.length&&gformToggleRepeaterButtons(t)})}function gformMatchCard(e){var t=gformFindCardType(jQuery("#"+e).val()),e=jQuery("#"+e).parents(".gfield").find(".gform_card_icon_container");t?(jQuery(e).find(".gform_card_icon").removeClass("gform_card_icon_selected").addClass("gform_card_icon_inactive"),jQuery(e).find(".gform_card_icon_"+t).removeClass("gform_card_icon_inactive").addClass("gform_card_icon_selected")):jQuery(e).find(".gform_card_icon").removeClass("gform_card_icon_selected gform_card_icon_inactive")}function gformFindCardType(e){if(e.length<4)return!1;var t=window.gf_cc_rules,r=new Array;for(type in t)if(t.hasOwnProperty(type))for(i in t[type])if(t[type].hasOwnProperty(i)&&0===t[type][i].indexOf(e.substring(0,t[type][i].length))){r[r.length]=type;break}return 1==r.length&&r[0].toLowerCase()}function gformToggleCreditCard(){jQuery("#gform_payment_method_creditcard").is(":checked")?jQuery(".gform_card_fields_container").slideDown():jQuery(".gform_card_fields_container").slideUp()}function gformInitChosenFields(e,i){return jQuery(e).each(function(){var e,t=jQuery(this),r="undefined"!=typeof gfcf_theme_config&&(null!==gfcf_theme_config&&void 0!==gfcf_theme_config.data?gfcf_theme_config.data.is_conversational_form:void 0);"rtl"==jQuery("html").attr("dir")&&t.addClass("chosen-rtl chzn-rtl"),(t.is(":visible")||r)&&0==t.siblings(".chosen-container").length&&(e={no_results_text:i},r&&(e.width=t.css("inline-size")),r=gform.applyFilters("gform_chosen_options",e,t),t.chosen(r))})}function gformInitCurrencyFormatFields(e){jQuery(e).each(function(){jQuery(this).val(gformFormatMoney(jQuery(this).val()))}).change(function(e){jQuery(this).val(gformFormatMoney(jQuery(this).val()))})}jQuery(document).on("click",".gfield_choice--select_all_enabled *",function(){var e,t=jQuery(this).closest(".gfield_choice--select_all_enabled").find(".gfield_choice_all_toggle");jQuery(this).is('.gchoice input[type="checkbox"]')&&(t.is('input[type="checkbox"]')?jQuery(this).prop("checked")||t.prop("checked",!1):gformToggleSelectAll(t,"select")),jQuery(this).is('.gchoice input[type="checkbox"]')&&(e=jQuery(this).closest(".gfield_choice--select_all_enabled").find('.gchoice input[type="checkbox"]:not(".gfield_choice_all_toggle")')).length===e.filter(":checked").length&&(t.is('input[type="checkbox"]')&&t.prop("checked",!0),gformToggleSelectAll(t,"deselect"))});var GFMergeTag=function(){GFMergeTag.getMergeTagValue=function(e,t,r){r=(r=void 0===r?"":r).replace(":","");var i=parseInt(t,10),n=(0<jQuery("#input_"+e+"_"+i+"_copy_values_activated:checked").length&&(a=jQuery("#input_"+e+"_"+i+"_copy_values_activated").data("source_field_id"),t=t==i?a:t.toString().replace(i+".",a+"."),i=a),jQuery("#field_"+e+"_"+i)),o=n.find((i==t?'input[name^="input_'+i+'"]':'input[name="input_'+t+'"]')+', select[name^="input_'+t+'"], textarea[name="input_'+t+'"]');if(!(!window.gf_check_field_rule||"show"==gf_check_field_rule(e,i,!0,"")))return"";n.find(".ginput_container_email").hasClass("ginput_complex")&&(o=o.first());var a=gform.applyFilters("gform_value_merge_tag_"+e+"_"+i,!1,o,r);if(!1===a){switch(a="",r){case"label":var l=n.find(".gfield_label");return l.find(".screen-reader-text").remove(),l.text();case"qty":if(n.hasClass("gfield_price"))return!1===(f=gformGetProductQuantity(e,i))||""===f?0:f}if(1===(o="checkbox"!==o.prop("type")&&"radio"!==o.prop("type")?o:o.filter(":checked")).length){if(!o.is("select")&&"radio"!==o.prop("type")&&"checkbox"!==o.prop("type")||""!==r)void 0===f&&(f=o.val());else if((f=o.is("select")?o.find("option:selected"):("radio"===o.prop("type")&&o.parent().hasClass("gchoice_button")?o.parent().siblings(".gchoice_label").find("label"):o.next("label")).clone()).find("span").remove(),1===f.length)f=f.text();else{for(var s=[],c=0;c<f.length;c++)s[c]=jQuery(f[c]).text();f=s}a=jQuery.isArray(f)?f.join(", "):"string"==typeof f?GFMergeTag.formatValue(f,r):""}else if(1<o.length){for(var d,f=[],c=0;c<o.length;c++)"checkbox"===o.prop("type")&&""===r?((d=jQuery(o[c]).next("label").clone()).find("span").remove(),f[c]=GFMergeTag.formatValue(d.text(),r),d.remove()):f[c]=GFMergeTag.formatValue(jQuery(o[c]).val(),r);a=f.join(", ")}}return a},GFMergeTag.replaceMergeTags=function(e,t){var r,n,o=GFMergeTag.parseMergeTags(t);for(i in o)o.hasOwnProperty(i)&&(n=o[i][1],parseInt(n,10),r=null==o[i][3]?"":o[i][3].replace(":",""),n=GFMergeTag.getMergeTagValue(e,n,r),t=t.replace(o[i][0],n));return t},GFMergeTag.formatValue=function(e,t){var r="",r=1<(e=e.split("|")).length&&("price"===t||"currency"===t)?gformToNumber(e[1]):e[0];switch(t){case"price":r=!1===(r=gformToNumber(r))?"":r;break;case"currency":r=!1===(r=gformFormatMoney(r,!1))?"":r;break;case"numeric":return!1===(r=gformToNumber(r))?0:r;default:r=r.trim()}return r},GFMergeTag.parseMergeTags=function(e,t){void 0===t&&(t=/{[^{]*?:(\d+(\.\d+)?)(:(.*?))?}/i);for(var r=[];t.test(e);){var i=r.length;r[i]=t.exec(e),e=e.replace(""+r[i][0],"")}return r}},GFCalc=(new GFMergeTag,function(formId,formulaFields){this.formId=formId,this.formulaFields=formulaFields,this.exprPatt=/^[0-9 -/*\(\)]+$/i,this.isCalculating={},this.init=function(e,t){var r=this;jQuery(document).off("gform_post_conditional_logic.gfCalc_{0}".gformFormat(e)).on("gform_post_conditional_logic.gfCalc_{0}".gformFormat(e),function(){r.runCalcs(e,t)});for(var i=0;i<t.length;i++){var n=jQuery.extend({},t[i]);this.runCalc(n,e),this.bindCalcEvents(n,e)}},this.runCalc=function(formulaField,formId){var calcObj=this,field=jQuery("#field_"+formId+"_"+formulaField.field_id),formulaInput=field.hasClass("gfield_price")?jQuery("#ginput_base_price_"+formId+"_"+formulaField.field_id):jQuery("#input_"+formId+"_"+formulaField.field_id),previous_val=formulaInput.val(),formula=gform.applyFilters("gform_calculation_formula",formulaField.formula,formulaField,formId,calcObj),expr=calcObj.replaceFieldTags(formId,formula,formulaField).replace(/(\r\n|\n|\r)/gm,""),result="";if(calcObj.exprPatt.test(expr)){try{result=eval(expr)}catch(e){}isFinite(result)||(result=0),window.gform_calculation_result&&(result=window.gform_calculation_result(result,formulaField,formId,calcObj),window.console)&&console.log('"gform_calculation_result" function is deprecated since version 1.8! Use "gform_calculation_result" JS hook instead.');var result=gform.applyFilters("gform_calculation_result",result,formulaField,formId,calcObj),formattedResult=gform.applyFilters("gform_calculation_format_result",!1,result,formulaField,formId,calcObj),numberFormat=gf_get_field_number_format(formulaField.field_id,formId),decimalSeparator,thousandSeparator;result=!1!==formattedResult?formattedResult:field.hasClass("gfield_price")||"currency"==numberFormat?gformFormatMoney(result||0,!0):(decimalSeparator=".",thousandSeparator=",","decimal_comma"==numberFormat&&(decimalSeparator=",",thousandSeparator="."),gformFormatNumber(result,gform.utils.isNumber(formulaField.rounding)?formulaField.rounding:-1,decimalSeparator,thousandSeparator)),result!=previous_val&&(field.hasClass("gfield_price")?(jQuery("#input_"+formId+"_"+formulaField.field_id).text(result),formulaInput.val(result).trigger("change"),formulaInput&&0<formulaInput.length&&window.gform.utils.trigger({event:"change",el:formulaInput[0],native:!0}),jQuery(".gfield_label_product").length&&!jQuery(".ginput_total").length&&(result=jQuery("label[ for=input_"+formId+"_"+formulaField.field_id+"_1 ]").find(".gfield_label_product").text()+" "+result,wp.a11y.speak(result))):formulaInput.val(result).trigger("change"))}},this.runCalcs=function(e,t){for(var r=0;r<t.length;r++){var i=jQuery.extend({},t[r]);this.runCalc(i,e)}},this.bindCalcEvents=function(e,t){var r,i,n,o,a=this,l=e.field_id,s=GFMergeTag.parseMergeTags(e.formula);for(r in a.isCalculating[l]=!1,s)s.hasOwnProperty(r)&&(i=s[r][1],n=parseInt(i,10),"checkbox"==(n=jQuery("#field_"+t+"_"+n).find('input[name="input_'+i+'"], select[name="input_'+i+'"]')).prop("type")||"radio"==n.prop("type")?(jQuery(n).click(function(){a.bindCalcEvent(i,e,t,0)}),0<(o=n.closest(".gfield--type-image_choice .gchoice")).length&&jQuery(o).click(function(){a.bindCalcEvent(i,e,t,0)})):(n.is("select")||"hidden"==n.prop("type")?jQuery(n):jQuery(n).keydown(function(){a.bindCalcEvent(i,e,t)})).change(function(){a.bindCalcEvent(i,e,t,0)}),gform.doAction("gform_post_calculation_events",s[r],e,t,a))},this.bindCalcEvent=function(e,t,r,i){var n=this,o=t.field_id;i=null==i?345:i,n.isCalculating[o][e]&&clearTimeout(n.isCalculating[o][e]),n.isCalculating[o][e]=window.setTimeout(function(){n.runCalc(t,r)},i)},this.replaceFieldTags=function(e,t,r){var n,o,a,l,s,c,d=GFMergeTag.parseMergeTags(t);for(i in d)d.hasOwnProperty(i)&&(n=d[i][1],(o=parseInt(n,10))==r.field_id&&o==n||(a="value",d[i][3]?a=d[i][3]:(c=jQuery(".gfield_price input[name=input_"+o+"]").is("input[type=radio]"),s=0<jQuery(".gfield_price select[name=input_"+o+"]").length,l=jQuery('.gfield_price input[name="input_'+n+'"]').is("input[type=checkbox]"),(s||c||l)&&(a="price")),c=(s=!window.gf_check_field_rule||"show"==gf_check_field_rule(e,o,!0,""))?GFMergeTag.getMergeTagValue(e,n,a):0,c=gform.applyFilters("gform_merge_tag_value_pre_calculation",c,d[i],s,r,e),c=this.cleanNumber(c,e,o,r),t=t.replace(d[i][0],c)));return t},this.cleanNumber=function(e,t,r,i){r=(r=gf_get_field_number_format(r,t))||gf_get_field_number_format(i.field_id,t),i=gform.Currency.getDecimalSeparator(r);return e=(e=gform.Currency.cleanNumber(e,"","",i))||0},this.init(formId,formulaFields)}),__gf_keyup_timeout;function gformFormatNumber(e,t,r,i){return void 0===r&&(r=window.gf_global?new gform.Currency(gf_global.gf_currency_config).currency.decimal_separator:"."),void 0===i&&(i=window.gf_global?new gform.Currency(gf_global.gf_currency_config).currency.thousand_separator:","),(new gform.Currency).numberFormat(e,t,r,i,!1)}function getMatchGroups(e,t){console.log("getMatchGroups() has been deprecated and will be removed in version 3.0. Use GFMergeTags.parseMergeTag() instead.");for(var r=new Array;t.test(e);){var i=r.length;r[i]=t.exec(e),e=e.replace(""+r[i][0],"")}return r}function gf_get_field_number_format(e,t,r){t=rgars(window,"gf_global/number_formats/{0}/{1}".gformFormat(t,e)),e=!1;return e=""!==t?void 0===r?!1!==t.price?t.price:t.value:t[r]:e}function gformValidateFileSize(e,t){var r=(0<jQuery(e).closest("div").siblings(".validation_message").length?jQuery(e).closest("div"):jQuery(e)).siblings(".validation_message");window.FileReader&&window.File&&window.FileList&&window.Blob&&((e=e.files[0])&&e.size>t?(r.text(e.name+" - "+gform_gravityforms.strings.file_exceeds_limit),wp.a11y.speak(e.name+" - "+gform_gravityforms.strings.file_exceeds_limit)):r.remove())}gform.recaptcha={renderRecaptcha:function(){jQuery(".ginput_recaptcha:not(.gform-initialized)").each(function(){var e=jQuery(this),t={sitekey:e.data("sitekey"),theme:e.data("theme"),tabindex:e.data("tabindex")},r=(e.data("stoken")&&(t.stoken=e.data("stoken")),gform.applyFilters("gform_recaptcha_callback",!1,e)),r=(r&&(t.callback=r),grecaptcha.render(this.id,t));e[0].setAttribute("data-widget-id",r),t.tabindex&&e.find("iframe").attr("tabindex",t.tabindex),e.addClass("gform-initialized"),gform.doAction("gform_post_recaptcha_render",e)}),gform.recaptcha.bindRecaptchaSubmissionEvents()},isSubmissionEventsInitialized:!1,bindRecaptchaSubmissionEvents:function(){gform.recaptcha.isSubmissionEventsInitialized||(gform.recaptcha.isSubmissionEventsInitialized=!0,window.gform.utils.addAsyncFilter("gform/submission/pre_submission",async e=>((e.submissionType===gform.submission.SUBMISSION_TYPE_SUBMIT||e.submissionType===gform.submission.SUBMISSION_TYPE_NEXT)&&!e.abort&&await gform.recaptcha.maybeExecuteInvisibleRecaptcha(e),e)),window.gform.utils.addAsyncFilter("gform/ajax/pre_ajax_validation",gform.recaptcha.maybeExecuteInvisibleRecaptcha),window.gform.utils.addFilter("gform/ajax/post_ajax_submission",gform.recaptcha.handleAjaxPostSubmission),window.gform.utils.addFilter("gform/ajax/post_ajax_validation",gform.recaptcha.handleAjaxPostValidation))},maybeExecuteInvisibleRecaptcha:async function(e){var t;return gform.recaptcha.gformIsRecaptchaPending(jQuery(e.form))&&(t=gform.utils.getNode(".ginput_recaptcha",e.form,!0),await gform.recaptcha.executeRecaptcha(t.getAttribute("data-widget-id"),e.form)),e},executeRecaptcha:async function(e,i){return window.grecaptcha.execute(e),new Promise((t,e)=>{let r=setInterval(()=>{var e=gform.utils.getNode(".g-recaptcha-response",i,!0);e&&e.value&&(clearInterval(r),t(e.value))},100)})},handleAjaxPostValidation:function(e){return gform.recaptcha.saveRecaptchaResponse(e.validationResult.data.recaptcha_response,e.form),e},handleAjaxPostSubmission:function(e){return gform.recaptcha.saveRecaptchaResponse(e.submissionResult.data.recaptcha_response,e.form),e},saveRecaptchaResponse:function(t,r){if(t){let e=gform.tools.getNodes("input[name=g-recaptcha-response]",!0,r,!0);0===e.length?((e=document.createElement("input")).type="hidden",e.name="g-recaptcha-response",r.appendChild(e)):e=e[0],e.value=t}},gformIsRecaptchaPending:function(e){var e=e.find(".ginput_recaptcha");return!(!e.length||"invisible"!==e.data("size")||(e=e.find(".g-recaptcha-response")).length&&e.val())},needsRender:function(){return document.querySelectorAll(".ginput_recaptcha:not(.gform-initialized)")[0]},renderOnRecaptchaLoaded:function(){var e;gform.recaptcha.needsRender()&&(e=setInterval(function(){window.grecaptcha&&window.grecaptcha.render&&(this.renderRecaptcha(),clearInterval(e))},100))}},jQuery(document).on("gform_post_render",gform.recaptcha.renderOnRecaptchaLoaded),window.renderRecaptcha=gform.recaptcha.renderRecaptcha,window.gformIsRecaptchaPending=gform.recaptcha.gformIsRecaptchaPending,((g,m)=>{g.uploaders={};var _="undefined"!=typeof gform_gravityforms?gform_gravityforms.strings:{},p="undefined"!=typeof gform_gravityforms?gform_gravityforms.vars.images_url:"";m(document).on("gform_post_render",function(e,t){m("form#gform_"+t+" .gform_fileupload_multifile").each(function(){i(this)}),r||(r=!0,window.gform.utils.addFilter("gform/submission/pre_submission",e=>((()=>{let r=!1;return m.each(g.uploaders,function(e,t){if(0<t.total.queued)return!(r=!0)}),r})()&&(alert(_.currently_uploading),e.abort=!0),e),8))}),m(document).on("gform_post_conditional_logic",function(e,t,r,i){i||m.each(g.uploaders,function(e,t){t.refresh()})}),m(document).ready(function(){"undefined"!=typeof adminpage&&"toplevel_page_gf_edit_forms"===adminpage||"undefined"==typeof plupload?m(".gform_button_select_files").prop("disabled",!0):"undefined"!=typeof adminpage&&-1<adminpage.indexOf("_page_gf_entries")&&m(".gform_fileupload_multifile").each(function(){i(this)})});let r=!(g.setup=function(e){i(e)});function i(o){var d,r,e=m(o).data("settings"),t=new plupload.Uploader(e);function f(e,t){m("#"+e).prepend("<li class='gfield_description gfield_validation_message'>"+h(t)+"</li>"),setTimeout(function(){wp.a11y.speak(m("#"+e).text())},1e3)}function l(e){var t=parseInt(e.gf_vars.max_files,10);0<t&&(t=t<=i(e.multipart_params.field_id),g.toggleDisabled(e,t),t||(t=e.gf_vars.message_id,e=_.max_reached,m("#"+t+" li:contains('"+e+"')").remove()))}function s(){var e=m("#gform_uploaded_files_"+d).val();return void 0===e||""===e?{}:m.parseJSON(e)}function c(e){var t=s(),e=u(e);return void 0===t[e]&&(t[e]=[]),t[e]}function i(e){return c(e).length}function u(e){return"input_"+e}function n(e){e.preventDefault()}d=t.settings.multipart_params.form_id,(g.uploaders[e.container]=t).bind("Init",function(e,t){var r,i,n;e.features.dragdrop||m(".gform_drop_instructions").hide(),r=e.settings.container,i=r.querySelectorAll('input[type="file"]')[0],r=r.querySelectorAll(".gform_button_select_files")[0],n=m(o).closest(".gfield").find(".gfield_label")[0],i&&n&&r&&(n.setAttribute("for",i.id),r.setAttribute("aria-label",r.innerText.toLowerCase()+", "+n.innerText.toLowerCase()),i.setAttribute("tabindex","-1"),i.setAttribute("aria-hidden","true")),l(e.settings)}),g.toggleDisabled=function(e,t){("string"==typeof e.browse_button?m("#"+e.browse_button):m(e.browse_button)).prop("disabled",t)},t.init(),t.bind("BeforeUpload",function(e,t){e.settings.multipart_params.original_filename=t.name}),t.bind("FilesAdded",function(o,e){var a,t,l=parseInt(o.settings.gf_vars.max_files,10),s=i(o.settings.multipart_params.field_id),c=o.settings.gf_vars.disallowed_extensions;0<l&&l<=s?m.each(e,function(e,t){o.removeFile(t)}):(m.each(e,function(e,t){var r,i,n;a=t.name.split(".").pop(),-1<m.inArray(a,c)?(f(o.settings.gf_vars.message_id,t.name+" - "+_.illegal_extension),o.removeFile(t)):t.status==plupload.FAILED||0<l&&l<=s?o.removeFile(t):(r=void 0!==t.size?plupload.formatSize(t.size):_.in_progress,i="$this=jQuery(this); var uploader = gfMultiFileUploader.uploaders."+o.settings.container.id+";uploader.stop();uploader.removeFile(uploader.getFile('"+t.id+"'));$this.after('"+_.cancelled+"'); uploader.start();$this.remove();",n=gform.applyFilters("gform_file_upload_status_markup",n='<div id="{0}" class="ginput_preview"><span class="gfield_fileupload_filename">{1}</span><span class="gfield_fileupload_filesize">{2}</span><span class="gfield_fileupload_progress"><span class="gfield_fileupload_progressbar"><span class="gfield_fileupload_progressbar_progress"></span></span><span class="gfield_fileupload_percent"></span></span><a class="gfield_fileupload_cancel gform-theme-button gform-theme-button--simple" href="javascript:void(0)" title="{3}" onclick="{4}" onkeypress="{4}">{5}</a>',t,r,_,i,o).gformFormat(t.id,h(t.name),r,_.cancel_upload,i,_.cancel),m("#"+o.settings.filelist).prepend(n),s++)}),o.refresh(),0==(t=m("form#gform_"+d+" "+(e="input:hidden[name='gform_unique_id']"))).length&&(t=m(e)),""===(r=t.val())&&(r="xxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}),t.val(r)),0<l&&l<=s&&(g.toggleDisabled(o.settings,!0),f(o.settings.gf_vars.message_id,_.max_reached)),o.settings.multipart_params.gform_unique_id=r,o.start())}),t.bind("UploadProgress",function(e,t){var r=t.percent+"%";m("#"+t.id+" span.gfield_fileupload_percent").html(r),m("#"+t.id+" span.gfield_fileupload_progressbar_progress").css("width",t.percent+"%")}),t.bind("Error",function(e,t){var r;t.code===plupload.FILE_EXTENSION_ERROR?(r=(void 0!==e.settings.filters.mime_types?e.settings.filters.mime_types:e.settings.filters)[0].extensions,f(e.settings.gf_vars.message_id,t.file.name+" - "+_.invalid_file_extension+" "+r)):t.code===plupload.FILE_SIZE_ERROR?f(e.settings.gf_vars.message_id,t.file.name+" - "+_.file_exceeds_limit):(r="Error: "+t.code+", Message: "+t.message+(t.file?", File: "+t.file.name:""),f(e.settings.gf_vars.message_id,r)),m("#"+t.file.id).html(""),e.refresh()}),t.bind("ChunkUploaded",function(e,t,r){r=m.secureEvalJSON(r.response);"error"==r.status?(e.removeFile(t),f(e.settings.gf_vars.message_id,t.name+" - "+r.error.message),m("#"+t.id).html("")):e.settings.multipart_params[t.target_name]=r.data}),t.bind("FileUploaded",function(e,t,r){var i,n,o,a;e.getFile(t.id)&&("error"==(r=m.secureEvalJSON(r.response)).status?(f(e.settings.gf_vars.message_id,t.name+" - "+r.error.message),m("#"+t.id).html(""),l(e.settings)):(a='<span class="gfield_fileupload_filename">'+h(o=rgars(r,"data/uploaded_filename"))+'</span><span class="gfield_fileupload_filesize">'+plupload.formatSize(t.size)+"</span>",a+='<span class="gfield_fileupload_progress gfield_fileupload_progress_complete"><span class="gfield_fileupload_progressbar"><span class="gfield_fileupload_progressbar_progress"></span></span><span class="gfield_fileupload_percent">'+t.percent+"%</span></span>",n=e.settings.multipart_params.form_id,i=e.settings.multipart_params.field_id,a="undefined"!=typeof gf_legacy&&gf_legacy.is_legacy?"<img class='gform_delete' src='"+p+"/delete.png' onclick='gformDeleteUploadedFile("+n+","+i+", this);' onkeypress='gformDeleteUploadedFile("+n+","+i+", this);' alt='"+_.delete_file+"' title='"+_.delete_file+"' /> "+a:a+"<button class='gform_delete_file gform-theme-button gform-theme-button--simple' onclick='gformDeleteUploadedFile("+n+","+i+", this);'><span class='dashicons dashicons-trash' aria-hidden='true'></span><span class='screen-reader-text'>"+_.delete_file+": "+h(o)+"</span></button>",a=gform.applyFilters("gform_file_upload_markup",a,t,e,_,p,r),m("#"+t.id).html(a),m("#"+t.id+" span.gfield_fileupload_progressbar_progress").css("width",t.percent+"%"),100==t.percent&&(r.status&&"ok"==r.status?(n=i,o=r.data,(a=c(n)).unshift(o),i=n,r=a,o=s(),n=m("#gform_uploaded_files_"+d),o[i=u(i)]=r,n.val(m.toJSON(o))):f(e.settings.gf_vars.message_id,_.unknown_error+": "+t.name))))}),t.bind("FilesRemoved",function(e,t){l(e.settings)}),m("#"+e.drop_element).on({dragenter:n,dragover:n})}function h(e){return m("<div/>").text(e).html()}})(window.gfMultiFileUploader=window.gfMultiFileUploader||{},jQuery);let gformIsSpinnerInitialized=!1;function gformInitSpinner(e,t,r=0){gformIsSpinnerInitialized||(gformIsSpinnerInitialized=!0,window.gform.utils.addFilter("gform/submission/pre_submission",e=>(gformShowSpinner(e.form.dataset.formid,t),e),3),document.addEventListener("gform/submission/submission_aborted",function(e){gformRemoveSpinner(),jQuery("#gform_ajax_spinner_"+e.detail.form.dataset.formid).remove()}))}function gformShowSpinner(e,t){t=gform.applyFilters("gform_spinner_url",t,e);t!==gform.applyFilters("gform_spinner_url",gf_global.spinnerUrl,e)?gformAddSpinner(e,t):gformInitializeSpinner(e,gform.applyFilters("gform_spinner_target_elem",jQuery("#gform_submit_button_"+e+", #gform_wrapper_"+e+" .gform_next_button, #gform_send_resume_link_button_"+e),e))}function gformInitializeSpinner(e,t,r="gform-ajax-spinner"){0==jQuery("#gform_ajax_spinner_"+e).length&&(r='<span data-js-spinner-id="'+r+'" id="gform_ajax_spinner_'+e+'" class="gform-loader"></span>',(t instanceof jQuery?t:jQuery(t)).after(r))}function gformRemoveSpinner(e="gform-ajax-spinner"){e=document.querySelectorAll('[data-js-spinner-id="'+e+'"]');e&&e.forEach(function(e){e.remove()})}function gformAddSpinner(e,t){void 0!==t&&t||(t=gform.applyFilters("gform_spinner_url",gf_global.spinnerUrl,e)),0==jQuery("#gform_ajax_spinner_"+e).length&&gform.applyFilters("gform_spinner_target_elem",jQuery("#gform_submit_button_"+e+", #gform_wrapper_"+e+" .gform_next_button, #gform_send_resume_link_button_"+e),e).after('<img id="gform_ajax_spinner_'+e+'"  class="gform_ajax_spinner" src="'+t+'" alt="" />')}function gformReInitTinymceInstance(e,t){var r,i,n;e&&t?(r=window.tinymce)?(i=r.get("input_"+e+"_"+t))?(n=jQuery.extend({},i.settings),i.remove(),r.init(n),gform.console.log("gformReInitTinymceInstance reinitialized TinyMCE on input_"+e+"_"+t+".")):gform.console.error("gformReInitTinymceInstance did not find an instance for input_"+e+"_"+t+"."):gform.console.error("gformReInitTinymceInstance requires tinymce to be available."):gform.console.error("gformReInitTinymceInstance requires a form and field id.")}function gf_raw_input_change(e,t){clearTimeout(__gf_keyup_timeout);var r=jQuery(t),i=r.attr("id"),n=gf_get_input_id_by_html_id(i),o=gf_get_form_id_by_html_id(i),i=gform.applyFilters("gform_field_meta_raw_input_change",{fieldId:n,formId:o},r,e),n=i.fieldId,o=i.formId;n&&(r=!(i=r.is(":checkbox")||r.is(":radio")||r.is("select"))||r.is("textarea"),"keyup"==e.type&&!r||"change"==e.type&&!i&&!r||("keyup"==e.type?__gf_keyup_timeout=setTimeout(function(){gf_input_change(t,o,n)},300):gf_input_change(t,o,n)))}function gf_get_input_id_by_html_id(e){var e=gf_get_ids_by_html_id(e),t=e[e.length-1];return 3==e.length&&(e.shift(),t=e.join(".")),t}function gf_get_form_id_by_html_id(e){return gf_get_ids_by_html_id(e)[0]}function gf_get_ids_by_html_id(e){for(var t=e?e.split("_"):[],r=t.length-1;0<=r;r--)gform.utils.isNumber(t[r])||t.splice(r,1);return t}function gf_input_change(e,t,r){gform.doAction("gform_input_change",e,t,r)}function gformExtractFieldId(e){var t=parseInt(e.toString().split(".")[0],10);return t||e}function gformExtractInputIndex(e){e=parseInt(e.toString().split(".")[1],10);return e||!1}jQuery(document).on("change keyup",".gfield input, .gfield select, .gfield textarea",function(e){gf_raw_input_change(e,this)});{function rgars(e,t){for(var r=t.split("/"),i=e,n=0;n<r.length;n++)i=rgar(i,r[n]);return i}window.rgars}{function rgar(e,t){return void 0!==e[t]?e[t]:""}}String.prototype.gformFormat||(String.prototype.gformFormat=function(){var r=arguments;return this.replace(/{(\d+)}/g,function(e,t){return void 0!==r[t]?r[t]:e})}),jQuery(document).ready(function(){jQuery("#gform-form-toolbar__menu").on("mouseenter focus","> li",function(){jQuery(this).find(".gform-form-toolbar__submenu").toggleClass("open"),jQuery(this).find(".has_submenu").toggleClass("submenu-open")}),jQuery("#gform-form-toolbar__menu").on("mouseleave blur","> li",function(){jQuery(".gform-form-toolbar__submenu.open").removeClass("open"),jQuery(".has_submenu.submenu-open").removeClass("submenu-open")}),jQuery("#gform-form-toolbar__menu .has_submenu").on("click",function(e){e.preventDefault()})}),jQuery(document).ready(function(){jQuery(".gform-settings-field").each(function(){1<jQuery(this).find("> .gform-settings-input__container").length&&jQuery(this).addClass("gform-settings-field--multiple-inputs")})}),jQuery(function(){gform.tools.trigger("gform_main_scripts_loaded")});;
var __gf_timeout_handle;function gf_apply_rules(t,e,i){jQuery(document).trigger("gform_pre_conditional_logic",[t,e,i]),gform.utils.trigger({event:"gform/conditionalLogic/applyRules/start",native:!1,data:{formId:t,fields:e,isInit:i}});for(var a=0;a<e.length;a++)gf_apply_field_rule(t,e[a],i,function(){a>=e.length-1&&(jQuery(document).trigger("gform_post_conditional_logic",[t,e,i]),gform.utils.trigger({event:"gform/conditionalLogic/applyRules/end",native:!1,data:{formId:t,fields:e,isInit:i}}),window.gformCalculateTotalPrice)&&window.gformCalculateTotalPrice(t)})}function gf_check_field_rule(t,e,i,a){var n,e=gf_get_field_logic(t,e);return e?"hide"!=(n=gf_get_field_action(t,e.section))?gf_get_field_action(t,e.field):n:"show"}function gf_get_field_logic(t,e){var i=rgars(window,"gf_form_conditional_logic/"+t);if(i){t=rgars(i,"logic/"+e);if(t)return t;var a=rgar(i,"dependents");if(a)for(var n in a)if(-1!==a[n].indexOf(e))return rgars(i,"logic/"+n)}return!1}function gf_apply_field_rule(t,e,i,a){gf_do_field_action(t,gf_check_field_rule(t,e,i,a),e,i,a);a=window.gf_form_conditional_logic[t].logic[e];a.nextButton&&gf_do_next_button_action(t,gf_get_field_action(t,a.nextButton),e,i)}function gf_get_field_action(t,e){if(!e)return"show";for(var i=0,a=0;a<e.rules.length;a++)gf_is_match(t,gform.applyFilters("gform_rule_pre_evaluation",jQuery.extend({},e.rules[a]),t,e))&&i++;return"all"==e.logicType&&i==e.rules.length||"any"==e.logicType&&0<i?e.actionType:"show"==e.actionType?"hide":"show"}function gf_is_match(t,e){var i=jQuery,a=e.fieldId,n=gformExtractFieldId(a),a=gformExtractInputIndex(a),a=i(!1!==a?"#input_{0}_{1}_{2}, #choice_{0}_{1}_{2}".gformFormat(t,n,a):'input[id="input_{0}_{1}"], input[id^="input_{0}_{1}_"], input[id^="choice_{0}_{1}_"], select#input_{0}_{1}, textarea#input_{0}_{1}'.gformFormat(t,n)),i=-1!==i.inArray(a.attr("type"),["checkbox","radio"])?gf_is_match_checkable(a,e,t,n):gf_is_match_default(a.eq(0),e,t,n);return gform.applyFilters("gform_is_value_match",i,t,e)}function gf_is_match_checkable(t,n,r,o){var l;return""===n.value?"is"===n.operator?gf_is_checkable_empty(t):!gf_is_checkable_empty(t):(l=!1,t.each(function(){var t=jQuery(this),e=gf_get_value(t.val()),i=-1!==jQuery.inArray(n.operator,["<",">"]),a=-1!==jQuery.inArray(n.operator,["contains","starts_with","ends_with"]);if(e==n.value||i||a)return t.is(":checked")?"gf_other_choice"==e&&(e=jQuery("#input_{0}_{1}_other".gformFormat(r,o)).val()):e="",gf_matches_operation(e,n.value,n.operator)?!(l=!0):void 0}),l)}function gf_is_checkable_empty(t){var e=!0;return t.each(function(){jQuery(this).is(":checked")&&(e=!1)}),e}function gf_is_match_default(t,e,i,a){for(var t=t.val(),n=t instanceof Array?t:[t],r=0,o=Math.max(n.length,1),l=0;l<o;l++){var _=!n[l]||0<=n[l].indexOf("|"),d=gf_get_value(n[l]),c=gf_get_field_number_format(e.fieldId,i,"value"),_=(c&&!_&&(d=gf_format_number(d,c)),e.value);gf_matches_operation(d,_,e.operator)&&r++}return"isnot"==e.operator?r==o:0<r}function gf_format_number(t,e){return decimalSeparator=".","currency"==e?decimalSeparator=gform.Currency.getDecimalSeparator("currency"):"decimal_comma"==e?decimalSeparator=",":"decimal_dot"==e&&(decimalSeparator="."),t=gform.Currency.cleanNumber(t,"","",decimalSeparator),number=(t=t||0).toString()}function gf_try_convert_float(t){var e="decimal_dot";return gformIsNumeric(t,e)?gform.Currency.cleanNumber(t,"","","."):t}function gf_matches_operation(t,e,i){switch(t=t?t.toLowerCase():"",e=e?e.toLowerCase():"",i){case"is":return t==e;case"isnot":return t!=e;case">":return t=gf_try_convert_float(t),e=gf_try_convert_float(e),!(!gform.utils.isNumber(t)||!gform.utils.isNumber(e))&&e<t;case"<":return t=gf_try_convert_float(t),e=gf_try_convert_float(e),!(!gform.utils.isNumber(t)||!gform.utils.isNumber(e))&&t<e;case"contains":return 0<=t.indexOf(e);case"starts_with":return 0==t.indexOf(e);case"ends_with":var a=t.length-e.length;return a<0?!1:e==t.substring(a)}return!1}function gf_get_value(t){return t?(t=t.split("|"))[0]:""}function gf_do_field_action(t,e,i,a,n){for(var r=window.gf_form_conditional_logic[t],o=r.dependents[i],l=0;l<o.length;l++){var _=0==i?"#gform_submit_button_"+t:"#field_"+t+"_"+o[l],d=r.defaults[o[l]],c=(do_callback=l+1==o.length?n:null,gform.applyFilters("gform_abort_conditional_logic_do_action",!1,e,_,r.animation,d,a,t,do_callback));c?do_callback&&do_callback():gf_do_action(e,_,r.animation,d,a,do_callback,t),gform.doAction("gform_post_conditional_logic_field_action",t,e,_,d,a)}}function gf_do_next_button_action(t,e,i,a){var n=window.gf_form_conditional_logic[t],i="#gform_next_button_"+t+"_"+i;gform.applyFilters("gform_abort_conditional_logic_do_action",!1,e,i,n.animation,null,a,t,null)||gf_do_action(e,i,n.animation,null,a,null,t)}function gf_do_action(t,e,i,a,n,r,o){var l=jQuery(e);l.data("gf-disabled-assessed")||(l.find(":input:disabled").addClass("gf-default-disabled"),l.data("gf-disabled-assessed",!0)),l.hasClass("gfield--type-honeypot")||("show"==t?(l.find("select").each(function(){var t=jQuery(this);t.attr("tabindex",t.data("tabindex"))}),i&&!n?0<l.length?(l.find(":input:hidden:not(.gf-default-disabled)").prop("disabled",!1),(l.is('input[type="submit"]')||l.hasClass("gform_next_button"))&&gf_show_button(l),l.slideDown(r),l.attr("data-conditional-logic","visible")):r&&r():(""!=(t=l.data("gf_display"))&&"none"!=t||(t="1"===gf_legacy.is_legacy?"list-item":"block"),l.find(":input:hidden:not(.gf-default-disabled)").prop("disabled",!1).attr("data-conditional-logic","visible"),l.is('input[type="submit"]')||l.hasClass("gform_next_button")?gf_show_button(l):(l.css("display",t),"none"==t?l.attr("data-conditional-logic","hidden"):l.attr("data-conditional-logic","visible")),r&&r())):(0<(t=l.children().first()).length&&gform.applyFilters("gform_reset_pre_conditional_logic_field_action",!0,o,e,a,n)&&!gformIsHidden(t)&&gf_reset_to_default(e,a),l.find("select").each(function(){var t=jQuery(this);t.data("tabindex",t.attr("tabindex")).removeAttr("tabindex")}),l.data("gf_display")||l.data("gf_display",l.css("display")),i&&!n?l.is('input[type="submit"]')||l.hasClass("gform_next_button")?gf_hide_button(l):0<l.length&&l.is(":visible")?(l.slideUp(r),l.attr("data-conditional-logic","hidden")):r&&r():(l.is('input[type="submit"]')||l.hasClass("gform_next_button")?gf_hide_button(l):(l.css("display","none"),l.attr("data-conditional-logic","hidden")),l.find(":input:hidden:not(.gf-default-disabled)").attr("disabled","disabled"),r&&r())))}function gf_show_button(t){t.prop("disabled",!1).css("display",""),t.attr("data-conditional-logic","visible"),"1"==gf_legacy.is_legacy&&t.removeClass("screen-reader-text");t=jQuery('input.gform_next_button[type="button"][value="Submit"]');t&&(t.prop("disabled",!1).css("display",""),t.attr("data-conditional-logic","visible"))}function gf_hide_button(t){t.attr("disabled","disabled").hide(),t.attr("data-conditional-logic","hidden"),"1"===gf_legacy.is_legacy&&t.addClass("screen-reader-text");t=jQuery('input.gform_next_button[type="button"][value="Submit"]');t&&(t.attr("disabled","disabled").hide(),t.attr("data-conditional-logic","hidden"))}function gf_reset_to_default(t,a){var e=jQuery(t).find(".gfield_date_month input, .gfield_date_day input, .gfield_date_year input, .gfield_date_dropdown_month select, .gfield_date_dropdown_day select, .gfield_date_dropdown_year select");if(0<e.length)e.each(function(){var t,e=jQuery(this);val=a?(t="d",e.parents().hasClass("gfield_date_month")||e.parents().hasClass("gfield_date_dropdown_month")?t="m":(e.parents().hasClass("gfield_date_year")||e.parents().hasClass("gfield_date_dropdown_year"))&&(t="y"),a[t]):"","SELECT"==e.prop("tagName")&&""!=val&&(val=parseInt(val,10)),e.val()!=val?e.val(val).trigger("change"):e.val(val)});else{var i=jQuery(t).find('select, input[type="text"]:not([id*="_shim"]), input[type="number"], input[type="hidden"], input[type="email"], input[type="tel"], input[type="url"], textarea'),n=0;if(a&&0<i.parents(".ginput_list").length&&i.length<a.length)for(;i.length<a.length;)gformAddListItem(i.eq(0),0),i=jQuery(t).find('select, input[type="text"]:not([id*="_shim"]), input[type="number"], textarea');i.each(function(){var t,e="",i=jQuery(this);i.is('[type="hidden"]')&&!gf_is_hidden_pricing_input(i)||("gf_other_choice"==i.prevAll("input").first().attr("value")?e=i.attr("value"):Array.isArray(a)&&!i.is("select[multiple]")?e=a[n]:jQuery.isPlainObject(a)?(!(e=a[i.attr("name")])&&i.attr("id")&&(t=i.attr("id").split("_").slice(2).join("."),e=a[t]),!e&&i.attr("name")&&(t=i.attr("name").split("_")[1],e=a[t])):a&&(e=a),i.is("select:not([multiple])")&&!e&&(e=i.find("option").not(":disabled").eq(0).val()),i.val()!=e?(i.val(e).trigger("change"),i.is("select")&&i.next().hasClass("chosen-container")&&i.trigger("chosen:updated"),gf_is_hidden_pricing_input(i)&&(t=gf_get_ids_by_html_id(i.parents(".gfield").attr("id")),jQuery("#input_"+t[0]+"_"+t[1]).text(gformFormatMoney(i.val())),i.val(gformFormatMoney(i.val())))):i.val(e),n++)}),jQuery(t).find('input[type="radio"], input[type="checkbox"]:not(".copy_values_activated")').each(function(){var t=!!jQuery(this).is(":checked"),e=!!a&&-1<jQuery.inArray(jQuery(this).attr("id"),a);t!=e&&("checkbox"==jQuery(this).attr("type")?jQuery(this).trigger("click"):jQuery(this).prop("checked",e).change())})}}function gf_is_hidden_pricing_input(t){return!(!t.attr("id")||0!==t.attr("id").indexOf("ginput_base_price"))||"hidden"===t.attr("type")&&t.parents(".gfield_shipping").length}gform.addAction("gform_input_change",function(t,e,i){window.gf_form_conditional_logic&&(i=rgars(gf_form_conditional_logic,[e,"fields",gformExtractFieldId(i)].join("/")))&&gf_apply_rules(e,i)},10);;
!function(){var t={192:function(t,e,n){var r=n(541)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},541:function(t,e,n){var r=n(998).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},l=u.iterator||"@@iterator",f=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(e){d=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new I(r||[]);return c(i,"_invoke",{value:_(t,n,a)}),i}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",g="suspendedYield",y="executing",m="completed",b={};function w(){}function O(){}function x(){}var j={};d(j,l,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(M([])));E&&E!==i&&a.call(E,l)&&(j=E);var A=x.prototype=w.prototype=Object.create(j);function T(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,c,u){var l=v(t[o],t,i);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==r(s)&&a.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(s).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;c(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function _(t,n,r){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=k(c,r);if(u){if(u===b)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=v(t,n,r);if("normal"===l.type){if(o=r.done?m:g,l.arg===b)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function k(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=v(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function M(t){if(t||""===t){var n=t[l];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return O.prototype=x,c(A,"constructor",{value:x,configurable:!0}),c(x,"constructor",{value:O,configurable:!0}),O.displayName=d(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,d(t,s,"GeneratorFunction")),t.prototype=Object.create(A),t},n.awrap=function(t){return{__await:t}},T(L.prototype),d(L.prototype,f,(function(){return this})),n.AsyncIterator=L,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new L(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(A),d(A,s,"Generator"),d(A,l,(function(){return this})),d(A,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=M,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},998:function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){"use strict";var t={};n.r(t),n.d(t,{run:function(){return Dt},runGroup:function(){return zt}});var e={};n.r(e),n.d(e,{getScroller:function(){return Qt},lock:function(){return Zt},unlock:function(){return te}});var r={};n.r(r),n.d(r,{reInitChildren:function(){return Se}});var o={};n.r(o),n.d(o,{down:function(){return ke},up:function(){return Pe}});var i={};n.r(i),n.d(i,{elVisibleHeight:function(){return He},elements:function(){return Fe},height:function(){return ze},width:function(){return De}});var a={};n.r(a),n.d(a,{clear:function(){return ln},get:function(){return cn},put:function(){return an},remove:function(){return un}});var c={};n.r(c),n.d(c,{clear:function(){return pn},get:function(){return sn},put:function(){return fn},remove:function(){return dn}});var u={};n.r(u),n.d(u,{get:function(){return vn},remove:function(){return gn},set:function(){return hn}});var l={};function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[],n=t.length;n--;e.unshift(t[n]));return e}function p(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function v(){return d((arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((function(t){return p(t)}))}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};if(n&&e){if(27===t.keyCode)return e.focus(),void r();if(9===t.keyCode){var o=v(n),i=o[0],a=o[o.length-1];t.shiftKey?document.activeElement===i&&(a.focus(),t.preventDefault()):document.activeElement===a&&(i.focus(),t.preventDefault())}}}function g(t,e){Object.keys(e).forEach((function(n){return t.setAttribute(n,e[n])}))}n.r(l),n.d(l,{addAsyncFilter:function(){return Ke},addFilter:function(){return Ve},animate:function(){return t},applyBrowserClasses:function(){return Kt},arrayEquals:function(){return _},arrayToInt:function(){return k},aspectRatioToPadding:function(){return P},bodyLock:function(){return e},browsers:function(){return Xt},checkNotificationPromise:function(){return on},clipboard:function(){return ee},cloneDeep:function(){return F},consoleError:function(){return E},consoleInfo:function(){return A},consoleLog:function(){return T},consoleWarn:function(){return L},convertElements:function(){return d},cookieStorage:function(){return u},debounce:function(){return qe},deepMerge:function(){return $},delay:function(){return V},delegate:function(){return Be},dragHorizontal:function(){return re},escapeHtml:function(){return Q},escapeScripts:function(){return Z},filter:function(){return Xe},filterObject:function(){return X},findNestedObject:function(){return K},fnvHash:function(){return nt},focusLoop:function(){return h},getAttachmentImageUrl:function(){return tt},getChildren:function(){return oe},getClosest:function(){return ie},getConfig:function(){return et},getCoords:function(){return ae},getFocusable:function(){return v},getHiddenHeight:function(){return ce},getNode:function(){return le},getNodes:function(){return ue},hasClassFromArray:function(){return fe},hasScrollbar:function(){return se},insertAfter:function(){return de},insertBefore:function(){return pe},isEmptyObject:function(){return rt},isEqual:function(){return it},isExternalLink:function(){return ve},isFileLink:function(){return he},isFormDirty:function(){return ge},isFunction:function(){return q},isImageLink:function(){return ye},isJestTest:function(){return S},isJson:function(){return at},isNumber:function(){return ct},isObject:function(){return ut},isRtl:function(){return me},localStorage:function(){return a},matchesOrContainedInSelectors:function(){return be},mimicFn:function(){return xt},normalizeUrl:function(){return jt},objectAssign:function(){return St},objectToAttributes:function(){return _t},objectToFormData:function(){return Et},openNewTab:function(){return we},parseUrl:function(){return At},popup:function(){return Oe},queryToJson:function(){return Mt},ready:function(){return Ze},removeClassThatContains:function(){return xe},removeFilter:function(){return Qe},resize:function(){return tn},runOnce:function(){return rn},saferHtml:function(){return Tt},sessionStorage:function(){return c},setAttributes:function(){return g},shouldLoadChunk:function(){return je},simpleBar:function(){return r},slide:function(){return o},slugify:function(){return Lt},spacerClasses:function(){return Ne},speak:function(){return j},sprintf:function(){return Pt},trigger:function(){return ne},uniqueId:function(){return Nt},updateQueryVar:function(){return Ft},viewport:function(){return i},visible:function(){return p},vsprintf:function(){return Ct}});var y={containers:[]},m={previousMessage:""},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite",e=document.createElement("div");g(e,{"aria-live":t,"aria-relevant":"additions text","aria-atomic":"true",style:"position: absolute; margin: -1px; padding: 0; height: 1px; width: 1px; overflow: hidden; clip: rect(1px, 1px, 1px, 1px); -webkit-clip-path: inset(50%); clip-path: inset(50%); border: 0; word-wrap: normal !important;"}),document.body.appendChild(e),y.containers.push(e)},w=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/<[^<>]+>/g," ");return m.previousMessage===t&&(t+=" "),m.previousMessage=t,t},O=function(){return y.containers.forEach((function(t){return t.textContent=""}))},x=function(){y.containers.length||(b("assertive"),b("polite"))};function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"polite";x(),O();var n=y.containers.filter((function(t){return t.getAttribute("aria-live")===e}))[0];n&&(n.textContent=w(t))}function S(){return!!window.__TEST__}function E(){window.console&&S()}function A(){}function T(){}function L(){window.console&&S()}function _(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((function(t,n){return t===e[n]}))}var k=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(t){return parseInt(t,10)}))};function P(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(":");return parseFloat((t[1]/t[0]*100).toFixed(5))}function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function I(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return M(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var N=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(null===t||"object"!==C(t))return t;if(e.has(t))return e.get(t);if(t instanceof Date)return new Date(t);if(Array.isArray(t)){var n=[];e.set(t,n);for(var r=0;r<t.length;r++)n[r]=N(t[r],e);return n}if(t instanceof Map){var o=new Map;return e.set(t,o),t.forEach((function(t,n){o.set(n,N(t,e))})),o}if(t instanceof Set){var i=new Set;return e.set(t,i),t.forEach((function(t){i.add(N(t,e))})),i}if(t instanceof RegExp)return new RegExp(t);if(ArrayBuffer.isView(t))return new t.constructor(t.buffer.slice(0));if(t instanceof Object){var a=Object.create(Object.getPrototypeOf(t));e.set(t,a);var c,u=I(Reflect.ownKeys(t));try{for(u.s();!(c=u.n()).done;){var l=c.value;a[l]=N(t[l],e)}}catch(t){u.e(t)}finally{u.f()}return a}return t},F=function(t){return N(t)},D="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103,z=function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===D}(t)};function H(t){return function(t){return!!t&&"object"===C(t)}(t)&&!z(t)}function q(t){return t&&"[object Function]"==={}.toString.call(t)}function R(t,e){return!1!==e.clone&&e.isMergeableObject(t)?Y((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function U(t,e,n){return t.concat(e).map((function(t){return R(t,n)}))}function J(t,e,n){var r=t.slice();return e.forEach((function(e,o){void 0===r[o]?r[o]=n.cloneUnlessOtherwiseSpecified(e,n):n.isMergeableObject(e)?r[o]=Y(t[o],e,n):-1===t.indexOf(e)&&r.push(e)})),r}function B(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function G(t,e){try{return e in t}catch(t){return!1}}function W(t,e,n){var r={};return n.isMergeableObject(t)&&B(t).forEach((function(e){r[e]=R(t[e],n)})),B(e).forEach((function(o){(function(t,e){return G(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,o)||(G(t,o)&&n.isMergeableObject(e[o])?r[o]=function(t,e){if(!e.customMerge)return Y;var n=e.customMerge(t);return"function"==typeof n?n:Y}(o,n)(t[o],e[o],n):r[o]=R(e[o],n))})),r}function Y(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n.arrayMerge=function(t){var e=U;return"combine"===t.arrayMerge?e=J:q(t.arrayMerge)&&(e=t.arrayMerge),e}(n),n.isMergeableObject=n.isMergeableObject||H,n.cloneUnlessOtherwiseSpecified=R;var r=Array.isArray(e);return r===Array.isArray(t)?r?n.arrayMerge(t,e,n):W(t,e,n):R(e,n)}Y.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return Y(t,n,e)}),{})};var $=Y,X=function(t,e){var n=Object.entries(t).filter(e);return Object.fromEntries(n)};function K(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=function(t){if("object"===C(t))for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){if(o===e&&t[o]===n)return t;var i=r(t[o]);if(i)return i}return null};return r(t)}function V(){var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=[];function i(t,n){e=window.setTimeout((function(){if(e=null,t(),o.length){var n=o.shift();i(n.fn,n.t)}}),n)}return t={delay:function(n,r){return o.length||e?o.push({fn:n,t:r}):i(n,r),t},cancel:function(){return window.clearTimeout(e),o=[],t}},t.delay(n,r)}function Q(){return String(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Z(){return String(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")}var tt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(!t||"object"!==C(t))return"";var r=e||n;return t.sizes&&t.sizes[r]&&t.sizes[r].url?t.sizes[r].url:r!==n&&t.sizes&&t.sizes[n]&&t.sizes[n].url?t.sizes[n].url:t.url||""};function et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e&&t[e]?t[e]:t}var nt=function(t){for(var e=String(t),n=14695981039346656037n,r=0;r<e.length;r++){n^=BigInt(e.charCodeAt(r)),n*=1099511628211n,n&=18446744073709551615n}return n.toString(16).padStart(16,"0")};function rt(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return JSON.stringify(t)===JSON.stringify({})}var ot=function(t,e){if(t===e)return!0;if(null==t||"object"!==C(t)||null==e||"object"!==C(e))return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=0,i=n;o<i.length;o++){var a=i[o];if(!r.includes(a)||!ot(t[a],e[a]))return!1}return!0},it=ot;function at(t){if(null===t)return!1;try{JSON.parse(t)}catch(t){return!1}return!0}var ct=function(t){return!isNaN(parseFloat(t))&&isFinite(t)};function ut(t){return!(!t||"object"!==C(t)||Array.isArray(t))}function lt(t){var e=function(t,e){if("object"!=C(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==C(e)?e:e+""}function ft(t,e,n){return(e=lt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function st(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return dt(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dt(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function vt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(n),!0).forEach((function(e){ft(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ht=function(t,e,n,r){if("length"!==n&&"prototype"!==n&&"arguments"!==n&&"caller"!==n){var o=Object.getOwnPropertyDescriptor(t,n),i=Object.getOwnPropertyDescriptor(e,n);!gt(o,i)&&r||Object.defineProperty(t,n,i)}},gt=function(t,e){return void 0===t||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},yt=function(t,e){var n=Object.getPrototypeOf(e);n!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,n)},mt=function(t,e){return"/* Wrapped ".concat(t,"*/\n").concat(e)},bt=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),wt=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Ot=function(t,e,n){var r=""===n?"":"with ".concat(n.trim(),"() "),o=mt.bind(null,r,e.toString());Object.defineProperty(o,"name",wt),Object.defineProperty(t,"toString",vt(vt({},bt),{},{value:o}))};function xt(t,e){var n,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).ignoreNonConfigurable,o=void 0!==r&&r,i=t.name,a=st(Reflect.ownKeys(e));try{for(a.s();!(n=a.n()).done;){var c=n.value;ht(t,e,c,o)}}catch(t){a.e(t)}finally{a.f()}return yt(t,e),Ot(t,e,i),t}function jt(t){return t?/^https?:\/\//i.test(t)?t:"https://".concat(t):""}function St(){for(var t={},e=0;e<arguments.length;e+=1)for(var n=arguments[e],r=Object.keys(n),o=0;o<r.length;o+=1)t[r[o]]=n[r[o]];return t}var Et=function(t,e,n){var r=new window.FormData;return function t(e,o){if(!function(t){return Array.isArray(n)&&n.some((function(e){return e===t}))}(o))if(o=o||"",e instanceof window.File)r.append(o,e);else if(Array.isArray(e))for(var i=0;i<e.length;i++)t(e[i],o+"["+i+"]");else if("object"===C(e)&&e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t(e[a],""===o?a:o+"["+a+"]");else null!=e&&r.append(o,e)}(t,e),r};function At(t,e){for(var n,r=["source","scheme","authority","userInfo","user","pass","host","port","relative","path","directory","file","query","fragment"],o={},i=o["phpjs.parse_url.mode"]&&o["phpjs.parse_url.mode"].local_value||"php",a={php:/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},c=a[i].exec(t),u={},l=14;l--;)c[l]&&(u[r[l]]=c[l]);return e?u[e.replace("PHP_URL_","").toLowerCase()]:("php"!==i&&(n=o["phpjs.parse_url.queryKey"]&&o["phpjs.parse_url.queryKey"].local_value||"queryKey",a=/(?:^|&)([^&=]*)=?([^&]*)/g,u[n]={},(u[r[12]]||"").replace(a,(function(t,e,r){e&&(u[n][e]=r)}))),u.source=null,u)}function Tt(t){for(var e=t[0],n=1;n<arguments.length;n++){e+=String(arguments[n]).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e+=t[n]}return e}function Lt(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().normalize("NFKD").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/-$/g,"")}function _t(t){var e=[];return Object.entries(t).forEach((function(t){var n=s(t,2),r=n[0],o=n[1];if(o.length||"alt"===r)if(Array.isArray(o)){var i=o.filter((function(t){return t}));e.push("".concat(r,'="').concat(i.join(" "),'"'))}else e.push("".concat(r,'="').concat(o,'"'))})),e.join(" ")}var kt={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function Pt(t){return function(t,e){var n,r,o,i,a,c,u,l,f,s=1,d=t.length,p="";for(r=0;r<d;r++)if("string"==typeof t[r])p+=t[r];else if("object"===C(t[r])){if((i=t[r]).keys)for(n=e[s],o=0;o<i.keys.length;o++){if(null==n)throw new Error(Pt('[sprintf] Cannot access property "%s" of undefined value "%s"',i.keys[o],i.keys[o-1]));n=n[i.keys[o]]}else n=i.param_no?e[i.param_no]:e[s++];if(kt.not_type.test(i.type)&&kt.not_primitive.test(i.type)&&n instanceof Function&&(n=n()),kt.numeric_arg.test(i.type)&&"number"!=typeof n&&isNaN(n))throw new TypeError(Pt("[sprintf] expecting number but found %T",n));switch(kt.number.test(i.type)&&(l=n>=0),i.type){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,i.width?parseInt(i.width):0);break;case"e":n=i.precision?parseFloat(n).toExponential(i.precision):parseFloat(n).toExponential();break;case"f":n=i.precision?parseFloat(n).toFixed(i.precision):parseFloat(n);break;case"g":n=i.precision?String(Number(n.toPrecision(i.precision))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=i.precision?n.substring(0,i.precision):n;break;case"t":n=String(!!n),n=i.precision?n.substring(0,i.precision):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=i.precision?n.substring(0,i.precision):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=i.precision?n.substring(0,i.precision):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}kt.json.test(i.type)?p+=n:(!kt.number.test(i.type)||l&&!i.sign?f="":(f=l?"+":"-",n=n.toString().replace(kt.sign,"")),c=i.pad_char?"0"===i.pad_char?"0":i.pad_char.charAt(1):" ",u=i.width-(f+n).length,a=i.width&&u>0?c.repeat(u):"",p+=i.align?f+n+a:"0"===c?f+a+n:a+f+n)}return p}(function(t){if(It[t])return It[t];var e,n=t,r=[],o=0;for(;n;){if(null!==(e=kt.text.exec(n)))r.push(e[0]);else if(null!==(e=kt.modulo.exec(n)))r.push("%");else{if(null===(e=kt.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(e[2]){o|=1;var i=[],a=e[2],c=[];if(null===(c=kt.key.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(i.push(c[1]);""!==(a=a.substring(c[0].length));)if(null!==(c=kt.key_access.exec(a)))i.push(c[1]);else{if(null===(c=kt.index_access.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");i.push(c[1])}e[2]=i}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r.push({placeholder:e[0],param_no:e[1],keys:e[2],sign:e[3],pad_char:e[4],align:e[5],width:e[6],precision:e[7],type:e[8]})}n=n.substring(e[0].length)}return It[t]=r}(t),arguments)}function Ct(t,e){return Pt.apply(null,[t].concat(e||[]))}var It=Object.create(null);var Mt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.length?t:window.location.search.slice(1),n=e.length?e.split("&"):[],r={},o=[];return n.forEach((function(t){o=t.split("="),r[o[0]]=decodeURIComponent(o[1]||"")})),JSON.parse(JSON.stringify(r))};function Nt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return"".concat(t.length?"".concat(t,"-"):"").concat(Math.random().toString(36).substr(2,9))}function Ft(t,e){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.location.href).split("#"),r=n[1]?"#".concat(n[1]):"",o=n[0].split("?"),i=o[0],a=o[1],c=void 0!==a?a.split("&"):[],u=!1;return c.forEach((function(n,r){n.startsWith("".concat(t,"="))&&(u=!0,e?c[r]="".concat(t,"=").concat(e):c.splice(r,1))})),!u&&e&&(c[c.length]="".concat(t,"=").concat(e)),"".concat(i).concat("?").concat(c.join("&")).concat(r)}var Dt=function(){var t,e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r){var i=o.onAnimateInit,a=void 0===i?function(){}:i,c=o.onAnimateStart,u=void 0===c?function(){}:c,l=o.onAnimateEnd,f=void 0===l?function(){}:l,s=o.delay,d=void 0===s?(null===(t=r.dataset)||void 0===t?void 0:t.animationDelay)||0:s,p=o.duration,v=void 0===p?(null===(e=r.dataset)||void 0===e?void 0:e.animationDuration)||400:p,h=o.easing,g=void 0===h?(null===(n=r.dataset)||void 0===n?void 0:n.animationEasing)||"linear":h,y=function(t,e){var n,r,o,i,a,c={},u={},l=e.distanceFrom,f=void 0===l?(null===(n=t.dataset)||void 0===n?void 0:n.translateDistanceFrom)||"20px":l,s=e.distanceTo,d=void 0===s?(null===(r=t.dataset)||void 0===r?void 0:r.translateDistanceTo)||"0px":s,p=e.opacityFrom,v=void 0===p?null===(o=t.dataset)||void 0===o?void 0:o.translateOpacityFrom:p,h=e.opacityTo,g=void 0===h?null===(i=t.dataset)||void 0===i?void 0:i.translateOpacityTo:h,y=e.types;return(void 0===y?(null===(a=t.dataset)||void 0===a?void 0:a.animationTypes)||"":y).split(" ").forEach((function(t){"fadeIn"===t&&(c.opacity=v||0,u.opacity=g||1),"fadeOut"===t&&(c.opacity=v||1,u.opacity=g||0),"translateY"===t&&(c.transform="translateY(".concat(f,")"),u.transform="translateY(".concat(d,")"))})),[c,u]}(r,o);a(),setTimeout((function(){u(),requestAnimationFrame((function(){r.animate(y,{duration:Number(v),easing:g}).onfinish=function(){!function(t,e){var n,r,o,i=e.distanceTo,a=void 0===i?(null===(n=t.dataset)||void 0===n?void 0:n.translateDistanceTo)||"0px":i,c=e.opacityTo,u=void 0===c?null===(r=t.dataset)||void 0===r?void 0:r.translateOpacityTo:c,l=e.types;(void 0===l?(null===(o=t.dataset)||void 0===o?void 0:o.animationTypes)||"":l).split(" ").forEach((function(e){"fadeIn"===e&&(t.style.opacity=u||"1",t.setAttribute("aria-hidden","false")),"fadeOut"===e&&(t.style.opacity=u||"0",t.setAttribute("aria-hidden","true")),"translateY"===e&&(t.style.transform="translateY(".concat(a,")"))}))}(r,o),f()}}))}),d)}},zt=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(t){var e=t.target,n=t.options;Dt(e,n)}))},Ht=/(android)/i.test(window.navigator.userAgent),qt=!!window.chrome,Rt="undefined"!=typeof InstallTrigger,Ut=document.documentMode||!1,Jt=!Ut&&!!window.StyleMedia,Bt=!!window.navigator.userAgent.match(/(iPod|iPhone|iPad)/i),Gt=!!window.navigator.userAgent.match(/(iPod|iPhone)/i),Wt=!!window.opera||window.navigator.userAgent.indexOf(" OPR/")>=0,Yt=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||!qt&&!Wt&&"undefined"!==window.webkitAudioContext,$t=window.navigator.platform;function Xt(){return{android:Ht,chrome:qt,edge:Jt,firefox:Rt,ie:Ut,ios:Bt,iosMobile:Gt,opera:Wt,safari:Yt,os:$t}}function Kt(){var t=Xt(),e=document.body.classList;t.android?e.add("device-android"):t.ios&&e.add("device-ios"),t.edge?e.add("browser-edge"):t.chrome?e.add("browser-chrome"):t.firefox?e.add("browser-firefox"):t.ie?e.add("browser-ie"):t.opera?e.add("browser-opera"):t.safari&&e.add("browser-safari")}var Vt=0,Qt=function(){var t=Xt();return t.ie||t.firefox||t.chrome&&!t.edge?document.documentElement:document.body},Zt=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=Qt(),n=document.body.style;Vt=e.scrollTop,n.overflowY="scroll",n.position="fixed",n.width="100%",t&&(n.marginTop="-".concat(Vt,"px"))},te=function(){var t=Qt(),e=document.body.style;e.overflowY="",e.position="static",e.marginTop="0px",e.width="",t.scrollTop=Vt};function ee(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var e=document.createElement("textarea");e.textContent=t,e.style.position="fixed",document.body.appendChild(e),e.select();try{return document.execCommand("copy")}catch(t){return L("Copy to clipboard failed.",t),!1}finally{document.body.removeChild(e)}}}function ne(){var t,e=St({data:{},el:document,event:"",native:!0},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});if(e.native)(t=document.createEvent("HTMLEvents")).initEvent(e.event,!0,!1);else try{t=new window.CustomEvent(e.event,{detail:e.data})}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent(e.event,!0,!0,e.data)}e.el.dispatchEvent(t)}function re(t){var e={isDown:!1,moveEventTriggered:!1,startX:0,scrollLeft:0};t.addEventListener("mousedown",(function(n){e.isDown=!0,t.classList.add("drag-horizontal--active"),e.startX=n.pageX-t.offsetLeft,e.scrollLeft=t.scrollLeft})),t.addEventListener("mouseleave",(function(){e.isDown=!1,t.classList.remove("drag-horizontal--active")})),t.addEventListener("mouseup",(function(){e.isDown=!1,t.classList.remove("drag-horizontal--active"),ne({event:"gform-utils/horizontal-drag-ended",native:!1}),e.moveEventTriggered=!1})),t.addEventListener("mousemove",(function(n){if(e.isDown){n.preventDefault();var r=3*(n.pageX-t.offsetLeft-e.startX);t.scrollLeft=e.scrollLeft-r,e.moveEventTriggered||(ne({event:"gform-utils/horizontal-drag-started",native:!1}),e.moveEventTriggered=!0)}}))}function oe(t){for(var e=[],n=t.children.length;n--;)8!==t.children[n].nodeType&&e.unshift(t.children[n]);return e}function ie(t,e){var n,r;for(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(t){return"function"==typeof document.body[t]&&(n=t,!0)}));t;){if((r=t.parentElement)&&r[n](e))return r;t=r}return null}function ae(t){var e=t.getBoundingClientRect(),n=document.body,r=document.documentElement,o=window.pageYOffset||r.scrollTop||n.scrollTop,i=window.pageXOffset||r.scrollLeft||n.scrollLeft,a=r.clientTop||n.clientTop||0,c=r.clientLeft||n.clientLeft||0,u=e.top+o-a,l=e.left+i-c;return{top:Math.round(u),left:Math.round(l),bottom:Math.round(e.bottom)}}function ce(t){var e=t.clientWidth,n=t;n.style.visibility="hidden",n.style.height="auto",n.style.maxHeight="none",n.style.position="fixed",n.style.width="".concat(e,"px");var r=n.offsetHeight;return n.style.visibility="",n.style.height="",n.style.maxHeight="",n.style.width="",n.style.position="",n.style.zIndex="",r}function ue(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]?t:'[data-js="'.concat(t,'"]'),o=n.querySelectorAll(r);return e&&(o=d(o)),o}function le(){var t=ue(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",!1,arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,arguments.length>2&&void 0!==arguments[2]&&arguments[2]);return t.length>0?t[0]:null}function fe(t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).some((function(r){return t.classList.contains("".concat(e).concat(r).concat(n))}))}function se(t){return{vertical:t.scrollHeight>t.clientHeight,horizontal:t.scrollWidth>t.clientWidth}}function de(t,e){e.parentNode.insertBefore(t,e.nextElementSibling)}function pe(t,e){e.parentNode.insertBefore(t,e)}function ve(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/^([^:/?#]+:)?(?:\/\/([^/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof t[1]&&t[1].length>0&&t[1].toLowerCase()!==window.location.protocol||"string"==typeof t[2]&&t[2].length>0&&t[2].replace(new RegExp(":(".concat({"http:":80,"https:":443}[window.location.protocol],")?$")),"")!==window.location.host}function he(){return-1!==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("/").pop().indexOf(".")}function ge(){var t;if(!window.gforms_original_json||!window.UpdateFormObject)return!1;window.UpdateFormObject();var e="1"===(null===(t=window)||void 0===t||null===(t=t.gf_legacy)||void 0===t?void 0:t.is_legacy),n=JSON.parse(JSON.stringify(JSON.parse(window.gforms_original_json))),r=JSON.parse(JSON.stringify(window.form));return e&&(n.fields.forEach((function(t,e){delete n.fields[e].layoutGroupId})),r.fields.forEach((function(t,e){delete r.fields[e].layoutGroupId}))),JSON.stringify(n)!==JSON.stringify(r)}function ye(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(".").pop().toLowerCase().match(/(jpg|jpeg|png|gif|svg)/g);return t&&t.length>0||!1}function me(){var t=document.createElement("div");document.body.appendChild(t);var e="rtl"===window.getComputedStyle(t,null).getPropertyValue("direction");return document.body.removeChild(t),e}function be(t,e){for(var n=0;n<e.length;n++)for(var r=document.querySelectorAll(e[n]),o=0;o<r.length;o++)if(t===r[o]||r[o].contains(t))return!0;return!1}function we(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=document.createElement("a");e.href=t,e.target="_blank",document.body.appendChild(e),e.click(),e.remove()}function Oe(){var t=St({event:null,url:"",center:!0,name:"_blank",specs:{menubar:0,scrollbars:0,status:1,titlebar:1,toolbar:0,top:100,left:100,width:500,height:300}},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});if(t.event&&(t.event.preventDefault(),t.url.length||(t.url=t.event.currentTarget.href)),t.url.length){t.center&&(t.specs.top=window.screen.height/2-t.specs.height/2,t.specs.left=window.screen.width/2-t.specs.width/2);var e=[];Object.entries(t.specs).forEach((function(t){var n=s(t,2),r=n[0],o=n[1],i="".concat(r,"=").concat(o);e.push(i)})),window.open(t.url,t.name,e.join())}}function xe(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=0;n<t.classList.length;n++)-1!==t.classList.item(n).indexOf(e)&&t.classList.remove(t.classList.item(n))}function je(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return document.querySelectorAll("[data-load-chunk-".concat(t,"]")).length>0}var Se=function(t){var e,n=(null===(e=window)||void 0===e?void 0:e.SimpleBar)||{};n.instances&&t&&ue("[data-simplebar]",!0,t,!0).forEach((function(t){var e;return null!==(e=n.instances.get(t))&&void 0!==e?e:new n(t)}))},Ee=25,Ae=[],Te=function(t){return t<.2074?-3.8716*t*t*t+6.137*t*t+.4*t:1.1317*(t-1)*(t-1)*(t-1)-.1975*(t-1)*(t-1)+1},Le=function(t){Ae[t]||(Ae[t]={up:null,down:null})},_e=function(t){Ae[t].up&&(window.cancelAnimationFrame(Ae[t].up),Ae[t].up=null),Ae[t].down&&(window.cancelAnimationFrame(Ae[t].down),Ae[t].down=null)},ke=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=t.offsetHeight,i=ce(t),a=null;t.style.maxHeight="0",Le(e),_e(e);var c=function(u){a||(a=u);var l=u-a,f=Te(l/n)*(i-o)+o;t.style.maxHeight="".concat(f,"px"),l<n?Ae[e].down=window.requestAnimationFrame(c):(Ae[e].down=null,t.style.maxHeight="none",r&&r())};setTimeout((function(){Ae[e].down=window.requestAnimationFrame(c)}),Ee)},Pe=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=t.offsetHeight,i=null;t.style.maxHeight="".concat(o,"px"),Le(e),_e(e);var a=function(c){i||(i=c);var u=c-i,l=Te(u/n)*(0-o)+o;t.style.maxHeight="".concat(l,"px"),u<n?Ae[e].up=window.requestAnimationFrame(a):(Ae[e].up=null,t.style.maxHeight="0",r&&r())};setTimeout((function(){Ae[e].up=window.requestAnimationFrame(a)}),Ee)};function Ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ie(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ce(Object(n),!0).forEach((function(e){ft(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Me=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"gform-spacing",r={};return!t||"string"!=typeof t&&"number"!=typeof t&&!Array.isArray(t)||Array.isArray(t)&&!t.length?r:"string"==typeof t||"number"==typeof t?(r["".concat(n,"--").concat(e,"bottom-").concat(t)]=!0,r):1===t.length?(["top","right","bottom","left"].forEach((function(o){r["".concat(n,"--").concat(e).concat(o,"-").concat(t[0])]=!0})),r):2===t.length?(["top","bottom"].forEach((function(o){r["".concat(n,"--").concat(e).concat(o,"-").concat(t[0])]=!0})),["right","left"].forEach((function(o){r["".concat(n,"--").concat(e).concat(o,"-").concat(t[1])]=!0})),r):3===t.length?(r["".concat(n,"--").concat(e,"top-").concat(t[0])]=!0,["right","left"].forEach((function(o){r["".concat(n,"--").concat(e).concat(o,"-").concat(t[1])]=!0})),r["gform-spacing--".concat(e,"bottom-").concat(t[2])]=!0,r):4===t.length?(r["".concat(n,"--").concat(e,"top-").concat(t[0])]=!0,r["".concat(n,"--").concat(e,"right-").concat(t[1])]=!0,r["".concat(n,"--").concat(e,"bottom-").concat(t[2])]=!0,r["".concat(n,"--").concat(e,"left-").concat(t[3])]=!0,r):r};function Ne(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"gform-spacing",n={};return!t||"string"!=typeof t&&"number"!=typeof t&&!Array.isArray(t)&&("object"!==C(t)||Array.isArray(t))||Array.isArray(t)&&!t.length?n:(n[e]=!0,"string"==typeof t||"number"==typeof t||Array.isArray(t)?Ie(Ie({},n),Me(t,"",e)):["","md","lg"].reduce((function(n,r){return Object.prototype.hasOwnProperty.call(t,r)?Ie(Ie({},n),Me(t[r],r?"".concat(r,"-"):"",e)):n}),n))}var Fe=function(){var t="undefined"!=typeof window&&window,e="undefined"!=typeof document&&document;return{docElem:e&&e.documentElement,win:t}},De=function(){var t=Fe(),e=t.docElem,n=t.win,r=e.clientWidth,o=n.innerWidth;return r<o?o:r},ze=function(){var t=Fe(),e=t.docElem,n=t.win,r=e.clientHeight,o=n.innerHeight;return r<o?o:r},He=function(t){var e=t.offsetHeight,n=ze(),r=t.getBoundingClientRect(),o=r.bottom,i=r.top;return Math.max(0,i>0?Math.min(e,n-i):Math.min(o,n))};function qe(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!=typeof t)throw new TypeError("Expected the first argument to be a function, got `".concat(C(t),"`"));var n,r,o,i=e.wait,a=void 0===i?0:i,c=e.maxWait,u=void 0===c?Number.Infinity:c,l=e.before,f=void 0!==l&&l,s=e.after,d=void 0===s||s;if(!f&&!d)throw new Error("Both `before` and `after` are false, function wouldn't be called.");var p=function(){for(var e=arguments.length,i=new Array(e),c=0;c<e;c++)i[c]=arguments[c];var l=this,s=f&&!n;return clearTimeout(n),n=setTimeout((function(){n=void 0,r&&(clearTimeout(r),r=void 0),d&&(o=t.apply(l,i))}),a),u>0&&u!==Number.Infinity&&!r&&(r=setTimeout((function(){r=void 0,n&&(clearTimeout(n),n=void 0),d&&(o=t.apply(l,i))}),u)),s&&(o=t.apply(l,i)),o};return xt(p,t),p.cancel=function(){n&&(clearTimeout(n),n=void 0),r&&(clearTimeout(r),r=void 0)},p}if("undefined"!=typeof Element&&!Element.prototype.matches){var Re=Element.prototype;Re.matches=Re.matchesSelector||Re.mozMatchesSelector||Re.msMatchesSelector||Re.oMatchesSelector||Re.webkitMatchesSelector}function Ue(t,e,n,r,o){var i=Je.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}function Je(t,e,n,r){return function(n){n.delegateTarget=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}(n.target,e),n.delegateTarget&&r.call(t,n)}}var Be=function(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return"function"==typeof t.addEventListener?Ue.apply(null,arguments):"function"==typeof n?Ue.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return Ue(t,e,n,r,o)})))};function Ge(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}var We=n(192),Ye=n.n(We);window.gform=window.gform||{},window.gform.instances=window.gform.instances||{},window.gform.instances.filters=window.gform.instances.filters||[];var $e=window.gform.instances.filters,Xe=function(){var t,e=(t=Ye().mark((function t(){var e,n,r,o,i=arguments;return Ye().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=St({data:{},event:""},i.length>0&&void 0!==i[0]?i[0]:{}),void 0===$e[e.event]){t.next=18;break}(n=$e[e.event]).sort((function(t,e){return t.priority-e.priority})),r=0;case 6:if(!(r<n.length)){t.next=18;break}if(!(o=n[r]).isAsync){t.next=14;break}return t.next=11,o.callable(e.data);case 11:e.data=t.sent,t.next=15;break;case 14:e.data=o.callable(e.data);case 15:r++,t.next=6;break;case 18:return t.abrupt("return",e.data);case 19:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){Ge(i,r,o,a,c,"next",t)}function c(t){Ge(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),Ke=function(t,e){Ve(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,!0)},Ve=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];void 0===$e[t]&&($e[t]=[]);var o=t+"_"+$e[t].length;$e[t].push({tag:o,callable:e,priority:n,isAsync:r})},Qe=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(void 0!==$e[t])for(var r=$e[t],o=r.length-1;o>=0;o--)null!==n&&n!==r[o].tag||null!==e&&parseInt(r[o].priority)!==parseInt(e)||r.splice(o,1)};function Ze(t){"loading"!==document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",(function(){"loading"!==document.readyState&&t()}))}function tn(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?window.addEventListener("resize",qe(t,{wait:e})):window.removeEventListener("resize",qe(t,{wait:e}))}var en={},nn=function(t){for(var e=String(t),n=0,r=0,o=e.length;r<o;r++){n=(n<<5)-n+e.charCodeAt(r),n|=0}return"orf_"+n},rn=function(t){var e=nn(t);return void 0===en[e]&&(en[e]=!1),function(){en[e]||(en[e]=!0,t.apply(this,arguments))}};function on(){try{window.Notification.requestPermission().then()}catch(t){return!1}return!0}var an=function(t,e){window.localStorage.setItem(t,e)},cn=function(t){return window.localStorage.getItem(t)},un=function(t){return window.localStorage.removeItem(t)},ln=function(){window.localStorage.clear()},fn=function(t,e){window.sessionStorage.setItem(t,e)},sn=function(t){return window.sessionStorage.getItem(t)},dn=function(t){return window.sessionStorage.removeItem(t)},pn=function(){window.sessionStorage.clear()},vn=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=document.cookie.split(";"),n=0;n<e.length;n++){var r=e[n].split("=");if(t===r[0].trim())return decodeURIComponent(r[1])}return null},hn=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o="",i=e;if(n&&!isNaN(Number(n))){var a=new Date;a.setTime(a.getTime()+24*Number(n)*60*60*1e3),o=" expires="+a.toUTCString()}if(r){var c=vn(t);i=""!==c&&null!==c?c+","+e:e}document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(i)+";"+o},gn=function(t){hn(t,"",-1)};!function(){var t=window.gformComponentNamespace||"gform";window[t]=window[t]||{},window[t].utils=window[t].utils||{};var e=window[t].utils;Object.entries(l).forEach((function(t){var n=s(t,2),r=n[0],o=n[1];e[r]=o}))}()}()}();;
if(document.querySelector('[data-type="vc_custom-css"]')) {document.head.appendChild(document.querySelector('[data-type="vc_custom-css"]'));};
(function(e){e.fn.checkbox=function(){e(this).each(function(){var n,t=e(this),s=t.attr("type");t.hide(),t.next("."+s+"-sign").remove(),n=e('<span class="'+s+'-sign" />').insertAfter(t),n.click(function(){if(n.closest("label").length)return;t.attr("type")=="radio"?t.prop("checked",!0).trigger("change").trigger("click"):t.prop("checked",!t.is(":checked")).trigger("change")}),t.change(function(){e('input[name="'+t.attr("name")+'"]').each(function(){e(this).is(":checked")?e(this).next("."+e(this).attr("type")+"-sign").addClass("checked"):e(this).next("."+e(this).attr("type")+"-sign").removeClass("checked")})}),t.is(":checked")?n.addClass("checked"):n.removeClass("checked")})},e.fn.combobox=function(){e(this).each(function(){var n,s,o,t=e(this);t.insertBefore(t.parent(".combobox-wrapper")),t.next(".combobox-wrapper").remove(),t.css({opacity:0,position:"absolute",left:0,right:0,top:0,bottom:0}),n=e('<span class="combobox-wrapper" />').insertAfter(t),s=e('<span class="combobox-text" />').appendTo(n),o=e('<span class="combobox-button" />').appendTo(n),t.appendTo(n),t.change(function(){s.text(e("option:selected",t).text())}),s.text(e("option:selected",t).text()),t.comboWrap=n})}})(jQuery);
(function(e){typeof define=="function"&&define.amd?define(["jquery"],function(t){return e(t)}):typeof module=="object"&&typeof module.exports=="object"?exports=e(require("jquery")):e(jQuery)})(function(e){e.easing.jswing=e.easing.swing;var t=Math.pow,o=Math.sqrt,n=Math.sin,c=Math.cos,s=Math.PI,i=1.70158,a=i*1.525,l=i+1,d=2*s/3,u=2*s/4.5;function r(e){var n=7.5625,t=2.75;return e<1/t?n*e*e:e<2/t?n*(e-=1.5/t)*e+.75:e<2.5/t?n*(e-=2.25/t)*e+.9375:n*(e-=2.625/t)*e+.984375}e.extend(e.easing,{def:"easeOutQuad",swing:function(t){return e.easing[e.easing.def](t)},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return 1-(1-e)*(1-e)},easeInOutQuad:function(e){return e<.5?2*e*e:1-t(-2*e+2,2)/2},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return 1-t(1-e,3)},easeInOutCubic:function(e){return e<.5?4*e*e*e:1-t(-2*e+2,3)/2},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1-t(1-e,4)},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-t(-2*e+2,4)/2},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1-t(1-e,5)},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1-t(-2*e+2,5)/2},easeInSine:function(e){return 1-c(e*s/2)},easeOutSine:function(e){return n(e*s/2)},easeInOutSine:function(e){return-(c(s*e)-1)/2},easeInExpo:function(e){return e===0?0:t(2,10*e-10)},easeOutExpo:function(e){return e===1?1:1-t(2,-10*e)},easeInOutExpo:function(e){return e===0?0:e===1?1:e<.5?t(2,20*e-10)/2:(2-t(2,-20*e+10))/2},easeInCirc:function(e){return 1-o(1-t(e,2))},easeOutCirc:function(e){return o(1-t(e-1,2))},easeInOutCirc:function(e){return e<.5?(1-o(1-t(2*e,2)))/2:(o(1-t(-2*e+2,2))+1)/2},easeInElastic:function(e){return e===0?0:e===1?1:-t(2,10*e-10)*n((e*10-10.75)*d)},easeOutElastic:function(e){return e===0?0:e===1?1:t(2,-10*e)*n((e*10-.75)*d)+1},easeInOutElastic:function(e){return e===0?0:e===1?1:e<.5?-(t(2,20*e-10)*n((20*e-11.125)*u))/2:t(2,-20*e+10)*n((20*e-11.125)*u)/2+1},easeInBack:function(e){return l*e*e*e-i*e*e},easeOutBack:function(e){return 1+l*t(e-1,3)+i*t(e-1,2)},easeInOutBack:function(e){return e<.5?t(2*e,2)*((a+1)*2*e-a)/2:(t(2*e-2,2)*((a+1)*(e*2-2)+a)+2)/2},easeInBounce:function(e){return 1-r(1-e)},easeOutBounce:r,easeInOutBounce:function(e){return e<.5?(1-r(1-2*e))/2:(1+r(2*e-1))/2}})});
(function(){var s,a,r,l,d,p,g,v,b,j,y,w,O,x,k,A,S,M,D,I,V,$,W,q,X,Q,K={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},e=K,R=!1,h=!1,_={x:0,y:0},E=!1,o=document.documentElement,n=[],J=/^Mac/.test(navigator.platform),t={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},se={37:1,38:1,39:1,40:1};function ae(){e.keyboardSupport&&u("keydown",P)}function C(){if(E||!document.body)return;E=!0;var n,a,c,d,t=document.body,i=document.documentElement,s=window.innerHeight,m=t.scrollHeight;o=document.compatMode.indexOf("CSS")>=0?i:t,r=t,ae(),top!=self?h=!0:$&&m>s&&(t.offsetHeight<=s||i.offsetHeight<=s)&&(n=document.createElement("div"),n.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+o.scrollHeight+"px",document.body.appendChild(n),l=function(){if(a)return;a=setTimeout(function(){if(R)return;n.style.height="0",n.style.height=o.scrollHeight+"px",a=null},500)},setTimeout(l,10),u("resize",l),d={attributes:!0,childList:!0,characterData:!1},p=new q(l),p.observe(t,d),o.offsetHeight<=s&&(c=document.createElement("div"),c.style.clear="both",t.appendChild(c))),!e.fixedBackground&&!R&&(t.style.backgroundAttachment="scroll",i.style.backgroundAttachment="scroll")}function re(){p&&p.disconnect(),m(g,B),m("mousedown",U),m("keydown",P),m("resize",l),m("load",C)}a=[],j=!1,y=Date.now();function Z(t,n,s){if(ie(n,s),e.accelerationMax!=1){var o,i,c,l,d=Date.now(),r=d-y;r<e.accelerationDelta&&(o=(1+50/r)/2,o>1&&(o=Math.min(o,e.accelerationMax),n*=o,s*=o)),y=Date.now()}if(a.push({x:n,y:s,lastX:n<0?.99:-.99,lastY:s<0?.99:-.99,start:Date.now()}),j)return;c=M(),l=t===c||t===document.body,t.$scrollBehavior==null&&ce(t)&&(t.$scrollBehavior=t.style.scrollBehavior,t.style.scrollBehavior="auto"),i=function(){for(var r,d,m,f,p,g,v=Date.now(),u=0,h=0,c=0;c<a.length;c++)r=a[c],m=v-r.start,f=m>=e.animationTime,d=f?1:m/e.animationTime,e.pulseAlgorithm&&(d=ee(d)),p=r.x*d-r.lastX>>0,g=r.y*d-r.lastY>>0,u+=p,h+=g,r.lastX+=p,r.lastY+=g,f&&(a.splice(c,1),c--);l?window.scrollBy(u,h):(u&&(t.scrollLeft+=u),h&&(t.scrollTop+=h)),!n&&!s&&(a=[]),a.length?x(i,t,1e3/e.frameRate+1):(j=!1,t.$scrollBehavior!=null&&(t.style.scrollBehavior=t.$scrollBehavior,t.$scrollBehavior=null))},x(i,t,0),j=!0}function B(t){E||C();var n,s,a,o=t.target;if(t.defaultPrevented||t.ctrlKey)return!0;if(i(r,"embed")||i(o,"embed")&&/\.pdf/i.test(o.src)||i(r,"object")||o.shadowRoot)return!0;if(s=-t.wheelDeltaX||t.deltaX||0,n=-t.wheelDeltaY||t.deltaY||0,J&&(t.wheelDeltaX&&f(t.wheelDeltaX,120)&&(s=-120*(t.wheelDeltaX/Math.abs(t.wheelDeltaX))),t.wheelDeltaY&&f(t.wheelDeltaY,120)&&(n=-120*(t.wheelDeltaY/Math.abs(t.wheelDeltaY)))),!s&&!n&&(n=-t.wheelDelta||0),t.deltaMode===1&&(s*=40,n*=40),a=H(o),!a)return!h||!v||(Object.defineProperty(t,"target",{value:window.frameElement}),parent.wheel(t));if(oe(n))return!0;Math.abs(s)>1.2&&(s*=e.stepSize/120),Math.abs(n)>1.2&&(n*=e.stepSize/120),Z(a,s,n),t.preventDefault(),Y()}function P(n){if(s=n.target,m=n.ctrlKey||n.altKey||n.metaKey||n.shiftKey&&n.keyCode!==t.spacebar,document.body.contains(r)||(r=document.activeElement),f=/^(textarea|select|embed|object)$/i,l=/^(button|submit|radio|checkbox|file|color|image)$/i,n.defaultPrevented||f.test(s.nodeName)||i(s,"input")&&!l.test(s.type)||i(r,"video")||te(n)||s.isContentEditable||m)return!0;if((i(s,"button")||i(s,"input")&&l.test(s.type))&&n.keyCode===t.spacebar)return!0;if(i(s,"input")&&s.type=="radio"&&se[n.keyCode])return!0;var s,c,l,u,m,f,p,g,d=0,a=0,o=H(r);if(!o)return!h||!v||parent.keydown(n);switch(c=o.clientHeight,o==document.body&&(c=window.innerHeight),n.keyCode){case t.up:a=-e.arrowScroll;break;case t.down:a=e.arrowScroll;break;case t.spacebar:p=n.shiftKey?1:-1,a=-p*c*.9;break;case t.pageup:a=-c*.9;break;case t.pagedown:a=c*.9;break;case t.home:o==document.body&&document.scrollingElement&&(o=document.scrollingElement),a=-o.scrollTop;break;case t.end:g=o.scrollHeight-o.scrollTop,u=g-c,a=u>0?u+10:0;break;case t.left:d=-e.arrowScroll;break;case t.right:d=e.arrowScroll;break;default:return!0}Z(o,d,a),n.preventDefault(),Y()}function U(e){r=e.target}b=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),O={},w={},d={};function Y(){clearTimeout(X),X=setInterval(function(){O=w=d={}},1*1e3)}function F(e,t,n){for(var o=n?O:w,s=e.length;s--;)o[b(e[s])]=t;return t}function ne(e,t){return(t?O:w)[b(e)]}function H(e){var n,s,i,t=[],a=document.body,r=o.scrollHeight;do{if(n=ne(e,!1),n)return F(t,n);if(t.push(e),r===e.scrollHeight){if(s=N(o)&&N(a),i=s||L(o),h&&z(o)||!h&&i)return F(t,M())}else if(z(e)&&L(e))return F(t,e)}while(e=e.parentElement)}function z(e){return e.clientHeight+10<e.scrollHeight}function N(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return t!=="hidden"}function L(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return t==="scroll"||t==="auto"}function ce(e){var n,t=b(e);return d[t]==null&&(n=getComputedStyle(e,"")["scroll-behavior"],d[t]="smooth"==n),d[t]}function u(e,t,n){window.addEventListener(e,t,n||!1)}function m(e,t,n){window.removeEventListener(e,t,n||!1)}function i(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}function ie(e,t){e=e>0?1:-1,t=t>0?1:-1,(_.x!==e||_.y!==t)&&(_.x=e,_.y=t,a=[],y=0)}try{if(window.localStorage&&localStorage.SS_deltaBuffer)try{n=localStorage.SS_deltaBuffer.split(",")}catch{}}catch{}function oe(e){if(!e)return;n.length||(n=[e,e,e]),e=Math.abs(e),n.push(e),n.shift(),clearTimeout(Q),Q=setTimeout(function(){try{localStorage.SS_deltaBuffer=n.join(",")}catch{}},1e3);var t=e>120&&T(e);return!T(120)&&!T(100)&&!t}function f(e,t){return Math.floor(e/t)==e/t}function T(e){return f(n[0],e)&&f(n[1],e)&&f(n[2],e)}function te(e){var t=e.target,n=!1;if(document.URL.indexOf("www.youtube.com/watch")!=-1)do if(n=t.classList&&t.classList.contains("html5-video-controls"),n)break;while(t=t.parentNode)return n}x=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)}}(),q=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,M=function(){var e=document.scrollingElement;return function(){if(!e){var n,s,t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t),n=document.body.scrollTop,s=document.documentElement.scrollTop,window.scrollBy(0,3),document.body.scrollTop!=n?e=document.body:e=document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)}return e}}();function G(t){var n,s,o;return t=t*e.pulseScale,t<1?n=t-(1-Math.exp(-t)):(s=Math.exp(-1),t-=1,o=1-Math.exp(-t),n=s+o*(1-s)),n*e.pulseNormalize}function ee(t){return t>=1?1:t<=0?0:(e.pulseNormalize==1&&(e.pulseNormalize/=G(1)),G(t))}s=window.navigator.userAgent,S=/Edge/.test(s),v=/chrome/i.test(s)&&!S,A=/safari/i.test(s)&&!S,D=/mobile/i.test(s),W=/Windows NT 6.1/i.test(s)&&/rv:11/i.test(s),$=A&&(/Version\/8/i.test(s)||/Version\/9/i.test(s)),V=(v||A||W)&&!D,k=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){k=!0}}))}catch{}I=!!k&&{passive:!1},g="onwheel"in document.createElement("div")?"wheel":"mousewheel",g&&V&&(u(g,B,I),u("mousedown",U),u("load",C));function c(t){for(var n in t)K.hasOwnProperty(n)&&(e[n]=t[n])}c.destroy=re,window.SmoothScrollOptions&&c(window.SmoothScrollOptions),typeof define=="function"&&define.amd?define(function(){return c}):"object"==typeof exports?module.exports=c:window.SmoothScroll=c})();
(function(e){e.fn.thegemPreloader=function(t){e(this).each(function(){var n=e(this),s=["img","iframe"].indexOf(n[0].nodeName.toLowerCase())!=-1;if(n.data("thegemPreloader",e("img, iframe",n).add(n.filter("img, iframe")).length),n.data("thegemPreloader")==0||s&&!n.attr("src")){n.prev(".preloader").remove(),t(),n.trigger("thegem-preloader-loaded");return}n.prev(".preloader").length||e('<div class="preloader">').insertBefore(n),e("img, iframe",n).add(n.filter("img, iframe")).each(function(){function o(){n.data("thegemPreloader",n.data("thegemPreloader")-1),n.data("thegemPreloader")==0&&(n.prev(".preloader").remove(),t(),n.trigger("thegem-preloader-loaded"))}if(!e(this).attr("src")){o();return}var s=e("<img>");e(this).prop("tagName").toLowerCase()=="iframe"&&(s=e(this)),s.attr("src",e(this).attr("src")),s.on("load error",o)})})}})(jQuery),function(e){s=e.fn.width,e.fn.width=function(){if(arguments.length==0&&this.length==1&&this[0]===window){if(window.gemOptions.innerWidth!=-1)return window.gemOptions.innerWidth;var t=s.apply(this,arguments);return window.updateGemInnerSize(t),t}return s.apply(this,arguments)},t=e("#page"),e(window).on("load",function(){var t=e("#page-preloader");t.length&&!t.hasClass("preloader-loaded")&&t.addClass("preloader-loaded")}),e.fn.updateTabs=function(){jQuery(".gem-tabs",this).each(function(){var n=e(this);n.thegemPreloader(function(){n.easyResponsiveTabs({type:"default",width:"auto",fit:!1,activate:function(t){var s=e(t.target),o=s.attr("aria-controls");s.closest(".ui-tabs").find('.gem_tab[aria-labelledby="'+o+'"]').trigger("tab-update")}})})}),jQuery(".gem-tour",this).each(function(){var n=e(this);n.thegemPreloader(function(){n.easyResponsiveTabs({type:"vertical",width:"auto",fit:!1,activate:function(t){var s=e(t.target),o=s.attr("aria-controls");s.closest(".ui-tabs").find('.gem_tab[aria-labelledby="'+o+'"]').trigger("tab-update")}})})})};function c(e){e.trigger("updateTestimonialsCarousel"),e.trigger("updateClientsCarousel"),e.trigger("fullwidthUpdate")}function l(e,t,n,s,o){var a,l,i=e.prev(),r=0;extra_margin=parseInt(i.css("margin-left")),(i.length==0||i.hasClass("fullwidth-block")||i.is("style"))&&(i=e.parent(),r=parseInt(i.css("padding-left")),extra_margin=0),l=window.gemSettings.isRTL?"right":"left",a={width:s},a[l]=t.left-(i.length?i.offset().left-extra_margin:0)+parseInt(n)-r,e.css(a),o||c(e)}var t,s,o,r,i=[],a=[];e(".fullwidth-block").each(function(){var n=e(this),s=n.parents(".vc_row"),t={isInline:!1};s.each(function(){if(this.hasAttribute("data-vc-full-width"))return t.isInline=!0,!1}),t.isInline?i.push(this):a.push(this)});function n(n){if(o=[],(n?i:a).forEach(function(e){o.push(e)}),o.length>0){var o,r=t.offset(),c=t.css("padding-left"),d=t.width();o.forEach(function(t){l(e(t),r,c,d)})}}window.disableGemSlideshowPreloaderHandle||jQuery(".gem-slideshow-with-preloader:not(.gem-slideshow-rs)").each(function(){var t=e(this);t.thegemPreloader(function(){})}),r=jQuery(document).ready(function(){}),r.one("revolution.slide.onloaded",function(){jQuery(".gem-slideshow").prev(".slideshow-preloader").remove()}),e(function(){e("#gem-icons-loading-hide").remove(),window.tgpLazyItems===void 0&&e("#thegem-preloader-inline-css").remove(),jQuery(".gem-video-background").each(function(){var s=e(this),n=e(".gem-video-background-inner",this),t=s.data("aspect-ratio")?s.data("aspect-ratio"):"16:9",a=/(\d+):(\d+)/,i=s.closest(".fullwidth-block"),t=a.exec(t);!t||parseInt(t[1])==0||parseInt(t[2])==0?t=16/9:t=parseInt(t[1])/parseInt(t[2]);function o(){n.removeAttr("style"),n.width()/n.height()>t?n.css({height:n.width()/t+"px",marginTop:-(n.width()/t-s.height())/2+"px"}):n.css({width:n.height()*t+"px",marginLeft:-(n.height()*t-s.width())/2+"px"})}s.closest(".vc_row_custom_video_background").length>0&&o(),s.closest(".page-title-block").length>0&&o(),i.length?i.on("fullwidthUpdate",o):e(window).resize(o)}),n(!1,!0),e(".fullwidth-block").each(function(){var n,t=e(this),s=t.data("mobile-parallax-enable")||"0",o=t.hasClass("custom-title-background");!window.gemSettings.isTouch||s=="1"?t.hasClass("fullwidth-block-parallax-vertical")?(n={},o&&(n.position="top"),e(".fullwidth-block-background",t).each(function(){var t=e(this).css("background-image")||"";if(t=="none"||t==""){e(this).on("tgpliVisible",function(){e(this).parallaxVertical("50%",n)});return}e(this).parallaxVertical("50%",n)})):t.hasClass("fullwidth-block-parallax-horizontal")&&e(".fullwidth-block-background",t).each(function(){if(!window.gemSettings.parallaxDisabled){var t=e(this).css("background-image")||"";if(t=="none"||t==""){e(this).on("tgpliVisible",function(){e(this).parallaxHorizontal()});return}e(this).parallaxHorizontal()}}):e(".fullwidth-block-background",t).css({backgroundAttachment:"scroll"})}),window.gemSettings.isTouch?e(".page-title-parallax-background").css({backgroundAttachment:"scroll"}):e(".page-title-parallax-background").each(function(){var t=e(this).css("background-image")||"";if(t=="none"||t==""){e(this).on("tgpliVisible",function(){e(this).parallaxVertical("50%",{position:"top"})});return}e(this).parallaxVertical("50%",{position:"top"})}),e(window).resize(function(){n(!1,!1)}),e(window).on("load",function(){n(!1,!1)}),jQuery("select.gem-combobox, .gem-combobox select, .widget_archive select").each(function(){e(this).combobox()}),jQuery(".widget_categories select").each(function(){this.onchange=null,e(this).on("change",function(){e(this).val()!=-1&&e(this).closest("form").submit()})}),jQuery("input.gem-checkbox, .gem-checkbox input").each(function(){e(this).checkbox()}),typeof e.fn.ReStable=="function"&&jQuery(".gem-table-responsive").each(function(){e("> table",this).ReStable({maxWidth:768,rowHeaders:e(this).hasClass("row-headers")})}),jQuery(".fancybox").each(function(){e(this).fancybox()}),typeof jQuery.fn.scSticky=="function"&&jQuery(".panel-sidebar-sticky > .sidebar").scSticky(),e(".primary-navigation a.mega-no-link").closest("li").removeClass("menu-item-active current-menu-item");function o(e){for(var s=e.offsetWidth,o=e.offsetHeight,t=0,n=0;e&&e.id!="page";)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return{left:t,top:n,width:s,height:o}}var i,r,c,s=[];if(e(".quickfinder-item a, .primary-navigation a, .gem-button, .footer-navigation a, .scroll-top-button, .scroll-to-anchor, .scroll-to-anchor a, .top-area-menu a, .thegem-te-menu a, .thegem-te-menu-secondary a").each(function(){var n=e(this),i=n.attr("href");if(!i)return;i=i.split("#");try{if(e("#"+i[1]).hasClass("vc_tta-panel"))return;e("#"+i[1]).length&&(n.closest("li").removeClass("menu-item-active current-menu-item"),n.closest("li").parents("li").removeClass("menu-item-current"),e(document).on("update-page-scroller",function(t,s){var o=e(s);if(!n.closest("li.menu-item").length)return;o.is(e("#"+i[1]))||o.find(e("#"+i[1])).length?(n.closest("li").addClass("menu-item-active"),n.closest("li").parents("li").addClass("menu-item-current")):(n.closest("li").removeClass("menu-item-active"),n.closest("li").parents("li.menu-item-current").each(function(){e(".menu-item-active",this).length||e(this).removeClass("menu-item-current")}))}),n.click(function(t){t.preventDefault(),history.replaceState("data to be passed",n.text(),n.attr("href"));var a,r,c,d,s=0,l=e("#thegem-perspective.modalview").length;e("#site-header.animated-header").length&&(d=e("#site-header").hasClass("shrink"),e("#site-header").addClass("scroll-counting"),e("#site-header").addClass("fixed shrink"),s=e("#site-header").outerHeight(),l||(r=e("#site-header").position().top,e("#site-header").hasClass("shrink")&&(r=0),s+=r),d||e("#site-header").removeClass("fixed shrink"),setTimeout(function(){e("#site-header").removeClass("scroll-counting")},50)),e("#site-header.header-sticky").length&&e(".header-sticky-template").length&&(s=e(".header-sticky-template").outerHeight()),a=o(e("#"+i[1])[0]).top-s+1,o(e("#"+i[1])[0]).top==0&&(a=0),e("body").hasClass("page-scroller")&&e(".page-scroller-nav-pane").is(":visible")?(c=e("#"+i[1]+".scroller-block").add(e("#"+i[1]).closest(".scroller-block")).eq(0),c.length&&e(".page-scroller-nav-pane .page-scroller-nav-item").eq(e(".scroller-block").index(c)).trigger("click"),n.closest(".overlay-menu-wrapper").length&&n.closest(".overlay-menu-wrapper").hasClass("active")&&(n.closest("#primary-navigation").length&&n.closest("#primary-navigation").hasClass("responsive")?(n.closest(".thegem-te-menu").find(".menu-toggle").trigger("click"),n.closest("#primary-navigation").find(".menu-toggle").trigger("click")):(n.closest(".thegem-te-menu").find(".overlay-toggle").trigger("click"),n.closest("#primary-navigation").find(".overlay-toggle").trigger("click")))):(l?e("#page").stop(!0,!0).animate({scrollTop:a},1500,"easeInOutCubic",function(){n.closest("#thegem-perspective").length&&n.closest("#thegem-perspective").hasClass("modalview")&&(n.closest(".thegem-te-menu").find(".perspective-menu-close").trigger("click"),n.closest("#primary-navigation").find(".perspective-menu-close").trigger("click"))}):e("html, body").stop(!0,!0).animate({scrollTop:a},1500,"easeInOutCubic"),n.closest("#primary-menu").length&&n.closest("#primary-menu").hasClass("dl-menuopen")&&(n.closest(".thegem-te-menu").find(".menu-toggle").trigger("click"),n.closest("#primary-navigation").find(".menu-toggle").trigger("click")),n.closest(".mobile-menu-slide-wrapper").length&&n.closest(".mobile-menu-slide-wrapper").hasClass("opened")&&(n.closest(".thegem-te-menu").find(".mobile-menu-slide-close").trigger("click"),n.closest("#primary-navigation").find(".mobile-menu-slide-close").trigger("click")),n.closest(".overlay-menu-wrapper").length&&n.closest(".overlay-menu-wrapper").hasClass("active")&&(n.closest("#primary-navigation").length&&n.closest("#primary-navigation").hasClass("responsive")?(n.closest(".thegem-te-menu").find(".menu-toggle").trigger("click"),n.closest("#primary-navigation").find(".menu-toggle").trigger("click")):(n.closest(".thegem-te-menu").find(".overlay-toggle-close").trigger("click"),n.closest("#primary-navigation").find(".overlay-toggle-close").trigger("click"))),n.closest("#primary-navigation").length&&n.closest("#primary-navigation").hasClass("hamburger-active")&&(n.closest(".thegem-te-menu").find(".hamburger-toggle").trigger("click"),n.closest("#primary-navigation").find(".hamburger-toggle").trigger("click")))}),s.push(n[0]))}catch{return}}),s.length){function a(){var n,i,r,c,d,u,h=e("#thegem-perspective.modalview").length,a=0;t.hasClass("vertical-header")||(a=e("#site-header").outerHeight(),h||(c=e("#site-header").length?e("#site-header").position().top:0,e("#site-header").hasClass("shrink")&&(c=0),a+=c)),e("#site-header.header-sticky").length&&e(".header-sticky-template").length&&(a=e(".header-sticky-template").outerHeight());for(r=0;r<s.length;r++){if(n=e(s[r]),i=n.attr("href"),!i)continue;if(i=i.split("#"),d=l()+t.scrollTop(),!n.closest("li.menu-item").length)continue;u=o(e("#"+i[1])[0]).top-a,d>=u&&d<=u+e("#"+i[1]).outerHeight()?(n.closest("li").addClass("menu-item-active"),n.closest("li").parents("li").addClass("menu-item-current")):(n.closest("li").removeClass("menu-item-active"),n.closest("li").parents("li.menu-item-current").each(function(){e(".menu-item-active",this).length||e(this).removeClass("menu-item-current")}))}}e(window).scroll(a),e("#thegem-perspective").length&&t.scroll(a),e(window).on("load",function(){for(var e,t=0;t<s.length;t++)if(e=s[t],e.href!=void 0&&e.href&&window.location.href==e.href){e.click();break}})}e("body").on("click",".post-footer-sharing .gem-button",function(t){t.preventDefault(),t.stopPropagation(),e(this).closest(".post-footer-sharing").find(".sharing-popup").addClass("active")}),e("body").on("click",function(){e(".sharing-popup").removeClass("active")}),c=document.body,e(window).scroll(function(){clearTimeout(r),!c.classList.contains("disable-hover"),r=setTimeout(function(){},300),l()>0?e(".scroll-top-button").addClass("visible"):e(".scroll-top-button").removeClass("visible")}).scroll();function l(){return window.pageYOffset||document.documentElement.scrollTop}e("a.hidden-email").each(function(){e(this).attr("href","mailto:"+e(this).data("name")+"@"+e(this).data("domain"))}),i=function(){if(window.tgpLazyItems!==void 0){var t,n=window.tgpLazyItems.checkGroupShowed(this,function(e){i.call(e)});if(!n)return}t=this,e(t).thegemPreloader(function(){e(t).thegem_isotope({itemSelector:".widget",layoutMode:"masonry"})})},e("#colophon .footer-widget-area").each(i),e("body").updateTabs()}),e(document).on("show.vc.accordion","[data-vc-accordion]",function(){var s,o,t=e(this).data("vc.accordion").getContainer(),n=0;if(!t.find(".vc_tta-tabs").length||!e(this).is(":visible")||t.data("vc-tta-autoplay"))return;e("#site-header.animated-header").length&&e("#site-header").hasClass("fixed")&&(s=e("#site-header").hasClass("shrink"),e("#site-header").addClass("scroll-counting"),e("#site-header").addClass("fixed shrink"),n=e("#site-header").outerHeight()+e("#site-header").position().top,s||e("#site-header").removeClass("fixed shrink"),e("#site-header").removeClass("scroll-counting")),o=t.offset().top-n-100+1,e("html, body").stop(!0,!0).animate({scrollTop:o},500,"easeInOutCubic")}),o=!0,e(document).on("vc-full-width-row",function(){if(window.gemOptions.clientWidth-t.width()>25||window.gemSettings.isRTL)for(c=1;c<arguments.length;c++){i=e(arguments[c]),i.addClass("vc_hidden"),a=i.next(".vc_row-full-width"),a.length||(a=i.parent().next(".vc_row-full-width"));var i,a,r,c,l,h=parseInt(i.css("margin-left"),10),f=parseInt(i.css("margin-right"),10),d=0-a.offset().left-h+e("#page").offset().left+parseInt(e("#page").css("padding-left")),p=e("#page").width(),m=window.gemSettings.isRTL?"right":"left",u={position:"relative",left:d,"box-sizing":"border-box",width:e("#page").width()};u[m]=d,(i.css(u),!i.data("vcStretchContent"))&&(r=-1*d,0>r&&(r=0),l=p-r-a.width()+h+f,0>l&&(l=0),i.css({"padding-left":r+"px","padding-right":l+"px"})),i.attr("data-vc-full-width-init","true"),i.removeClass("vc_hidden"),i.trigger("VCRowFullwidthUpdate")}n(!0,o),o=!1}),e("body").on("click",'.gem-button[href^="#give-form-"]',function(t){var n=e(this).attr("href").replace("#give-form-",""),n=parseInt(n);return isNaN(n)||e("#give-form-"+n+" .give-btn-modal").click(),t.preventDefault(),!1}),e("body").on("click",".close-fancybox",function(e){parent.jQuery.fancybox.getInstance()&&(e.preventDefault(),parent.jQuery.fancybox.getInstance().close())})}(jQuery),function(e){e("body.notification-hidden-sidebar").on("added_to_cart",function(){e(".thegem-popup-notification-wrap > .thegem-popup-notification.cart").remove(),e("body").addClass("notification-locked"),e(".thegem-popup-notification-sidebar").addClass("active"),setTimeout(()=>{e.fancybox.close()},200)}),e("body.notification-hidden-sidebar").on("click touchend",".thegem-popup-notification-sidebar .close",function(){e(".thegem-popup-notification-sidebar").removeClass("active"),e("body").removeClass("notification-locked")}),e("body.notification-hidden-sidebar").on("click touchend",".thegem-popup-notification-sidebar",function(t){const n=e(".thegem-popup-notification-sidebar .notification-sidebar");!n.is(t.target)&&n.has(t.target).length===0&&(e(".thegem-popup-notification-sidebar").removeClass("active"),e("body").removeClass("notification-locked"))}),e("body.notification-hidden-sidebar").on("click touchend","a.minicart-menu-link",function(t){t.preventDefault(),e("body").addClass("notification-locked"),e(".thegem-popup-notification-sidebar").addClass("active")}),e("body.notification-hidden-sidebar").on("click",".woocommerce-mini-cart-item__qty > .plus, .woocommerce-mini-cart-item__qty > .minus",function(){var n=e(this).closest(".woocommerce-mini-cart-item__qty").find(".qty"),t=parseFloat(n.val()),s=parseFloat(n.attr("max")),o=parseFloat(n.attr("min")),i=n.attr("step");(!t||t===""||t==="NaN")&&(t=0),(s===""||s==="NaN")&&(s=""),(o===""||o==="NaN")&&(o=0),(i==="any"||i===""||i===void 0||parseFloat(i)==="NaN")&&(i=1),e(this).is(".plus")?s&&(s==t||t>s)?n.val(s):n.val(t+parseFloat(i)):o&&(o==t||t<o)?n.val(o):t>0&&n.val(t-parseFloat(i)),n.trigger("change")}),e("body.notification-hidden-sidebar").on("change input",".woocommerce-mini-cart .quantity .qty",function(){var n=e(this),s=n.val(),t=n.parents(".woocommerce-mini-cart-item").data("key");clearTimeout(window.thegem_cart_update),window.thegem_cart_update=setTimeout(function(){e.ajax({url:woocommerce_params.ajax_url,data:{action:"thegem_notification_sidebar_update_cart_item",item_id:t,qty:s},success:function(n){n&&n.fragments&&e.each(n.fragments,function(s,o){if(e(s).hasClass("widget_shopping_cart_content")){const i=e(o).find('.woocommerce-mini-cart-item[data-key="'+t+'"]'),a=e(o).find(".woocommerce-mini-cart__subtotal"),r=e(s).find('.woocommerce-mini-cart-item[data-key="'+t+'"]');n.cart_hash?(r.replaceWith(i),e(".woocommerce-mini-cart__subtotal").replaceWith(a)):e(s).replaceWith(o)}else e(s).replaceWith(o)})},dataType:"json",method:"GET"})},500)})}(jQuery);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */(function(e){function n(t){var n=t||window.event,a=[].slice.call(arguments,1),s=0,i=0,o=0,t=e.event.fix(n);return t.type="mousewheel",n.wheelDelta&&(s=n.wheelDelta/120),n.detail&&(s=-n.detail/3),o=s,n.axis!==void 0&&n.axis===n.HORIZONTAL_AXIS&&(o=0,i=-1*s),n.wheelDeltaY!==void 0&&(o=n.wheelDeltaY/120),n.wheelDeltaX!==void 0&&(i=-1*n.wheelDeltaX/120),a.unshift(t,s,i,o),(e.event.dispatch||e.event.handle).apply(this,a)}var s,t=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(s=t.length;s;)e.event.fixHooks[t[--s]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,!1);else this.onmousewheel=n},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})(jQuery);
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);;
(function(e){e.fn.initGalleryFancybox=function(){e("a.fancy-gallery",this).fancybox({backFocus:!1,caption:function(){var s=e(".slide-info",this);if(e("> *",s).length)return s.clone().html()},onInit:function(e){e.$refs.caption.addClass("fancybox-title"),e.$refs.caption.parent().addClass("slideinfo")}})},e.fn.initPortfolioFancybox=function(){e('[data-fancybox="thegem-portfolio"]',this).fancybox()},e.fn.initBlogFancybox=function(){e("a.fancy, .fancy-link-inner a",this).fancybox(),e(".blog article a.youtube, .blog article a.vimeo",this).fancybox({type:"iframe"})},e.fn.initProductFancybox=function(){let t=window.gemSettings.isTouch;e("a.fancy-product-gallery",this).fancybox({arrows:!t,infobar:!0,clickOutside:"close",buttons:["zoom","fullScreen","thumbs","close"],touch:{vertical:!1,momentum:!1},loop:!0,animationDuration:300,backFocus:!1,mobile:{fullScreen:!1,arrows:!1,animationEffect:"fade",buttons:["zoom","fullScreen","close"],clickContent:function(e){return e.type==="image"&&"zoom"},clickSlide:function(){return"close"}}})},e(document).initGalleryFancybox(),e(document).initPortfolioFancybox(),e(document).initBlogFancybox(),e(document).initProductFancybox(),e("a.fancy, .fancy-link-inner a").fancybox()})(jQuery);
!function(e){var n={};function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o,s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(o in e)t.d(s,o,function(t){return e[t]}.bind(null,o));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e){var n=function(){return this}();try{n=n||new Function("return this")()}catch{"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(e,n){(function(){var s,We,ze,Fe,je,g,d="Expected a function",$="__lodash_placeholder__",Yt=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],w="[object Arguments]",I="[object Array]",z="[object Boolean]",A="[object Date]",L="[object Error]",R="[object Function]",Ce="[object GeneratorFunction]",f="[object Map]",D="[object Number]",p="[object Object]",T="[object RegExp]",h="[object Set]",F="[object String]",B="[object Symbol]",M="[object WeakMap]",S="[object ArrayBuffer]",O="[object DataView]",X="[object Float32Array]",U="[object Float64Array]",re="[object Int8Array]",le="[object Int16Array]",ue="[object Int32Array]",ne="[object Uint8Array]",fe="[object Uint16Array]",he="[object Uint32Array]",Wt=/\b__p \+= '';/g,Vt=/\b(__p \+=) '' \+/g,Bt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Se=/&(?:amp|lt|gt|quot|#39);/g,Me=/[&<>"']/g,Ft=RegExp(Se.source),Mt=RegExp(Me.source),St=/<%-([\s\S]+?)%>/g,kt=/<%([\s\S]+?)%>/g,Re=/<%=([\s\S]+?)%>/g,et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ot=/^\w*$/,jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,G=/[\\^$.*+?()[\]{}|]/g,bt=RegExp(G.source),oe=/^\s+/,pt=/\s/,mt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ht=/\{\n\/\* \[wrapped with (.+)\] \*/,ut=/,? & /,dt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,lt=/[()=,{}[\]/\s]/,ct=/\\(\\)?/g,it=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ke=/\w*$/,xt=/^[-+]0x[0-9a-f]+$/i,tt=/^0b[01]+$/i,nt=/^\[object .+?Constructor\]$/,st=/^0o[0-7]+$/i,rt=/^(?:0|[1-9]\d*)$/,Ct=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,P=/($^)/,Je=/['\n\r\u2028\u2029\\]/g,Te="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ee="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Kt="[\\ud800-\\udfff]",we="["+Ee+"]",W="["+Te+"]",_e="\\d+",qt="[\\u2700-\\u27bf]",Pe="[a-z\\xdf-\\xf6\\xf8-\\xff]",be="[^\\ud800-\\udfff"+Ee+_e+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ae="\\ud83c[\\udffb-\\udfff]",ye="[^\\ud800-\\udfff]",pe="(?:\\ud83c[\\udde6-\\uddff]){2}",me="[\\ud800-\\udbff][\\udc00-\\udfff]",C="[A-Z\\xc0-\\xd6\\xd8-\\xde]",xe="(?:"+Pe+"|"+be+")",Ut="(?:"+C+"|"+be+")",ge="(?:"+W+"|"+ae+")?",ke="[\\ufe0e\\ufe0f]?"+ge+("(?:\\u200d(?:"+[ye,pe,me].join("|")+")[\\ufe0e\\ufe0f]?"+ge+")*"),It="(?:"+[qt,pe,me].join("|")+")"+ke,Ht="(?:"+[ye+W+"?",W,pe,me,Kt].join("|")+")",Pt=RegExp("['’]","g"),Lt=RegExp(W,"g"),de=RegExp(ae+"(?="+ae+")|"+Ht+ke,"g"),Nt=RegExp([C+"?"+Pe+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[we,C,"$"].join("|")+")",Ut+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[we,C+xe,"$"].join("|")+")",C+"?"+xe+"+(?:['’](?:d|ll|m|re|s|t|ve))?",C+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_e,It].join("|"),"g"),zt=RegExp("[\\u200d\\ud800-\\udfff"+Te+"\\ufe0e\\ufe0f]"),Tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,At=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Et=-1,o={};o[X]=o[U]=o[re]=o[le]=o[ue]=o[ne]=o["[object Uint8ClampedArray]"]=o[fe]=o[he]=!0,o[w]=o[I]=o[S]=o[z]=o[O]=o[A]=o[L]=o[R]=o[f]=o[D]=o[p]=o[T]=o[h]=o[F]=o[M]=!1,s={},s[w]=s[I]=s[S]=s[O]=s[z]=s[A]=s[X]=s[U]=s[re]=s[le]=s[ue]=s[f]=s[D]=s[p]=s[T]=s[h]=s[F]=s[B]=s[ne]=s["[object Uint8ClampedArray]"]=s[fe]=s[he]=!0,s[L]=s[R]=s[M]=!1;var wt={"\\":"\\","'":"'","\n":"n","\r":"r"," ":"u2028"," ":"u2029"},_t=parseFloat,vt=parseInt,$e="object"==typeof e&&e&&e.Object===Object&&e,gt="object"==typeof self&&self&&self.Object===Object&&self,a=$e||gt||Function("return this")(),ie=t&&!t.nodeType&&t,y=ie&&"object"==typeof n&&n&&!n.nodeType&&n,Ye=y&&y.exports===ie,se=Ye&&$e.process,u=function(){try{var e=y&&y.require&&y.require("util").types;return e||se&&se.binding&&se.binding("util")}catch{}}(),Qe=u&&u.isArrayBuffer,Ze=u&&u.isDate,ve=u&&u.isMap,Xe=u&&u.isRegExp,Ge=u&&u.isSet,qe=u&&u.isTypedArray;function r(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function ot(e,t,n,s){for(var o,i=-1,a=e==null?0:e.length;++i<a;)o=e[i],t(s,o,n(o),e);return s}function l(e,t){for(var n=-1,s=e==null?0:e.length;++n<s&&!1!==t(e[n],n,e););return e}function at(e,t){for(var n=e==null?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Ue(e,t){for(var n=-1,s=e==null?0:e.length;++n<s;)if(!t(e[n],n,e))return!1;return!0}function v(e,t){for(var s,n=-1,i=e==null?0:e.length,a=0,o=[];++n<i;)s=e[n],t(s,n,e)&&(o[a++]=s);return o}function V(e,t){return!!(e==null?0:e.length)&&x(e,t,0)>-1}function Q(e,t,n){for(var s=-1,o=e==null?0:e.length;++s<o;)if(n(t,e[s]))return!0;return!1}function i(e,t){for(var n=-1,s=e==null?0:e.length,o=Array(s);++n<s;)o[n]=t(e[n],n,e);return o}function b(e,t){for(var n=-1,s=t.length,o=e.length;++n<s;)e[o+n]=t[n];return e}function Y(e,t,n,s){var o=-1,i=e==null?0:e.length;for(s&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}function ft(e,t,n,s){var o=e==null?0:e.length;for(s&&o&&(n=e[--o]);o--;)n=t(n,e[o],o,e);return n}function q(e,t){for(var n=-1,s=e==null?0:e.length;++n<s;)if(t(e[n],n,e))return!0;return!1}We=Z("length");function Ve(e,t,n){var s;return n(e,function(e,n,o){if(t(e,n,o))return s=n,!1}),s}function H(e,t,n,s){for(var i=e.length,o=n+(s?1:-1);s?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function x(e,t,n){return t==t?function(e,t,n){for(var s=n-1,o=e.length;++s<o;)if(e[s]===t)return s;return-1}(e,t,n):H(e,Be,n)}function yt(e,t,n,s){for(var o=n-1,i=e.length;++o<i;)if(s(e[o],t))return o;return-1}function Be(e){return e!=e}function Ie(e,t){var n=e==null?0:e.length;return n?ee(e,t)/n:NaN}function Z(e){return function(t){return t?.[e]}}function J(e){return function(t){return e?.[t]}}function He(e,t,n,s,o){return o(e,function(e,o,i){n=s?(s=!1,e):t(n,e,o,i)}),n}function ee(e,t){for(var n,s,o=-1,i=e.length;++o<i;)s=t(e[o]),void 0!==s&&(n=void 0===n?s:n+s);return n}function te(e,t){for(var n=-1,s=Array(e);++n<e;)s[n]=t(n);return s}function Le(e){return e&&e.slice(0,Oe(e)+1).replace(oe,"")}function c(e){return function(t){return e(t)}}function K(e,t){return i(t,function(t){return e[t]})}function k(e,t){return e.has(t)}function Ne(e,t){for(var n=-1,s=e.length;++n<s&&x(t,e[n],0)>-1;);return n}function De(e,t){for(var n=e.length;n--&&x(t,e[n],0)>-1;);return n}function Dt(e,t){for(var n=e.length,s=0;n--;)e[n]===t&&++s;return s}ze=J({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Fe=J({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Rt(e){return"\\"+wt[e]}function E(e){return zt.test(e)}function ce(e){var n=-1,t=Array(e.size);return e.forEach(function(e,s){t[++n]=[s,e]}),t}function Ae(e,t){return function(n){return e(t(n))}}function j(e,t){for(var s,n=-1,i=e.length,a=0,o=[];++n<i;)s=e[n],s!==t&&s!==$||(e[n]=$,o[a++]=n);return o}function N(e){var n=-1,t=Array(e.size);return e.forEach(function(e){t[++n]=e}),t}function $t(e){var n=-1,t=Array(e.size);return e.forEach(function(e){t[++n]=[e,e]}),t}function _(e){return E(e)?function(e){for(var t=de.lastIndex=0;de.test(e);)++t;return t}(e):We(e)}function m(e){return E(e)?function(e){return e.match(de)||[]}(e):function(e){return e.split("")}(e)}function Oe(e){for(var t=e.length;t--&&pt.test(e.charAt(t)););return t}je=J({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),g=function e(t){var $o,bn,ln,To,cs,ko,Ws,Oi,ii,mo,Io,ds,mi,Bs,Vi,Wi,ia,aa,ra,ca,ua,ha,ma,pa,ga,Vn,Cs,so,Oa,xa,en,Ia,Oo,fs,ho,_n,za,Ta,go,_o,Yi,Ao,zi,Ti,Fi,ki,Ei,ji,ci,be=(t=t==null?a:g.defaults(a.Object(),t,g.pick(a,At))).Array,vs=t.Date,uo=t.Error,Uo=t.Function,An=t.Math,ae=t.Object,wo=t.RegExp,rc=t.String,Kt=t.TypeError,Zn=be.prototype,ac=Uo.prototype,En=ae.prototype,ss=t["__core-js_shared__"],is=ac.toString,ie=En.hasOwnProperty,Jr=0,wi=($o=/[^.]+$/.exec(ss&&ss.keys&&ss.keys.IE_PROTO||""))?"Symbol(src)_1."+$o:"",Fs=En.toString,Gr=is.call(ae),Yr=a._,Ur=wo("^"+is.call(ie).replace(G,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qn=Ye?t.Buffer:void 0,un=t.Symbol,ns=t.Uint8Array,Pi=Qn?Qn.allocUnsafe:void 0,ls=Ae(ae.getPrototypeOf,ae),Ii=ae.create,Qi=En.propertyIsEnumerable,hs=Zn.splice,Zi=un?un.isConcatSpreadable:void 0,Ln=un?un.iterator:void 0,wn=un?un.toStringTag:void 0,gs=function(){try{var e=jn(ae,"defineProperty");return e({},"",{}),e}catch{}}(),Sr=t.clearTimeout!==a.clearTimeout&&t.clearTimeout,Or=vs&&vs.now!==a.Date.now&&vs.now,wr=t.setTimeout!==a.setTimeout&&t.setTimeout,ys=An.ceil,Os=An.floor,ao=ae.getOwnPropertySymbols,br=Qn?Qn.isBuffer:void 0,ta=t.isFinite,hr=Zn.join,lr=Ae(ae.keys,ae),ge=An.max,xe=An.min,rr=vs.now,ir=t.parseInt,Aa=An.random,er=Zn.reverse,lo=jn(t,"DataView"),Hn=jn(t,"Map"),Rs=jn(t,"Promise"),Fn=jn(t,"Set"),Un=jn(t,"WeakMap"),$n=jn(ae,"create"),ks=Un&&new Un,Sn={},Ja=fn(lo),Za=fn(Hn),Qa=fn(Rs),Xa=fn(Fn),Ga=fn(Un),ms=un?un.prototype:void 0,Nn=ms?ms.valueOf:void 0,La=ms?ms.toString:void 0;function n(e){if(me(e)&&!y(e)&&!(e instanceof J)){if(e instanceof wt)return e;if(ie.call(e,"__wrapped__"))return Mi(e)}return new wt(e)}bn=function(){function e(){}return function(t){if(!de(t))return{};if(Ii)return Ii(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function os(){}function wt(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=void 0}function J(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function gn(e){var t,n=-1,s=e==null?0:e.length;for(this.clear();++n<s;)t=e[n],this.set(t[0],t[1])}function nn(e){var t,n=-1,s=e==null?0:e.length;for(this.clear();++n<s;)t=e[n],this.set(t[0],t[1])}function rn(e){var t,n=-1,s=e==null?0:e.length;for(this.clear();++n<s;)t=e[n],this.set(t[0],t[1])}function pn(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new rn;++t<n;)this.add(e[t])}function Gt(e){var t=this.__data__=new nn(e);this.size=t.size}function Ba(e,t){var n,s=y(e),o=!s&&yn(e),i=!s&&!o&&en(e),r=!s&&!o&&!i&&_n(e),c=s||o||i||r,a=c?te(e.length,rc):[],l=a.length;for(n in e)!t&&!ie.call(e,n)||c&&("length"==n||i&&("offset"==n||"parent"==n)||r&&("buffer"==n||"byteLength"==n||"byteOffset"==n)||tn(n,l))||a.push(n);return a}function Va(e){var t=e.length;return t?e[Ps(0,t-1)]:void 0}function Wa(e,t){return zs(Pe(e),vn(t,0,e.length))}function Ua(e){return zs(Pe(e))}function Lo(e,t,n){(void 0!==n&&!qt(e[t],n)||void 0===n&&!(t in e))&&an(e,t,n)}function Wn(e,t,n){var s=e[t];ie.call(e,t)&&qt(s,n)&&(void 0!==n||t in e)||an(e,t,n)}function Xn(e,t){for(var n=e.length;n--;)if(qt(e[n][0],t))return n;return-1}function Ka(e,t,n,s){return ln(e,function(e,o,i){t(s,e,n(e),i)}),s}function Ha(e,t){return e&&Zt(t,ye(t),e)}function an(e,t,n){"__proto__"==t&&gs?gs(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Ro(e,t){for(var n=-1,s=t.length,o=be(s),i=e==null;++n<s;)o[n]=i?void 0:Js(e,t[n]);return o}function vn(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}function zt(e,t,n,o,i,a){var r,c,m,g,v,b,d=1&t,u=2&t,j=4&t;if(n&&(r=i?n(e,o,i,a):n(e)),void 0!==r)return r;if(!de(e))return e;if(m=y(e),m){if(r=function(e){var n=e.length,t=new e.constructor(n);return n&&"string"==typeof e[0]&&ie.call(e,"index")&&(t.index=e.index,t.input=e.input),t}(e),!d)return Pe(e,r)}else{if(c=we(e),g=c==R||c==Ce,en(e))return si(e,d);if(c==p||c==w||g&&!i){if(r=u||g?{}:ri(e),!d)return u?function(e,t){return Zt(e,oi(e),t)}(e,function(e,t){return e&&Zt(t,We(t),e)}(r,e)):function(e,t){return Zt(e,fo(e),t)}(e,Ha(r,e))}else{if(!s[c])return i?e:{};r=function(e,t,n){var o,s=e.constructor;switch(t){case S:return po(e);case z:case A:return new s(+e);case O:return function(e,t){var n=t?po(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case X:case U:case re:case le:case ue:case ne:case"[object Uint8ClampedArray]":case fe:case he:return ni(e,n);case f:return new s;case D:case F:return new s(e);case T:return function(e){var t=new e.constructor(e.source,Ke.exec(e));return t.lastIndex=e.lastIndex,t}(e);case h:return new s;case B:return o=e,Nn?ae(Nn.call(o)):{}}}(e,c,d)}}return a||(a=new Gt),v=a.get(e),v||(a.set(e,r),ho(e)?e.forEach(function(s){r.add(zt(s,t,n,s,e,a))}):Oo(e)&&e.forEach(function(s,o){r.set(o,zt(s,t,n,o,e,a))}),b=m?void 0:(j?u?So:Mo:u?We:ye)(e),l(b||e,function(s,o){b&&(s=e[o=s]),Wn(r,o,zt(s,t,n,o,e,a))}),r)}function Pa(e,t,n){if(s=n.length,e==null)return!s;for(e=ae(e);s--;){var s,o=n[s],a=t[o],i=e[o];if(void 0===i&&!(o in e)||!a(i))return!1}return!0}function Ra(e,t,n){if("function"!=typeof e)throw new Kt(d);return Dn(function(){e.apply(void 0,n)},t)}function Bn(e,t,n,s){var o,a,u,h=-1,l=V,d=!0,m=e.length,r=[],f=t.length;if(!m)return r;n&&(t=i(t,c(n))),s?(l=Q,d=!1):t.length>=200&&(l=k,d=!1,t=new pn(t));n:for(;++h<m;)if(o=e[h],a=n==null?o:n(o),o=s||0!==o?o:0,d&&a==a){for(u=f;u--;)if(t[u]===a)continue n;r.push(o)}else l(t,a,s)||r.push(o);return r}n.templateSettings={escape:St,evaluate:kt,interpolate:Re,variable:"",imports:{_:n}},n.prototype=os.prototype,n.prototype.constructor=n,wt.prototype=bn(os.prototype),wt.prototype.constructor=wt,J.prototype=bn(os.prototype),J.prototype.constructor=J,gn.prototype.clear=function(){this.__data__=$n?$n(null):{},this.size=0},gn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},gn.prototype.get=function(e){var n,t=this.__data__;return $n?(n=t[e],"__lodash_hash_undefined__"===n?void 0:n):ie.call(t,e)?t[e]:void 0},gn.prototype.has=function(e){var t=this.__data__;return $n?void 0!==t[e]:ie.call(t,e)},gn.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=$n&&void 0===t?"__lodash_hash_undefined__":t,this},nn.prototype.clear=function(){this.__data__=[],this.size=0},nn.prototype.delete=function(e){var t=this.__data__,n=Xn(t,e);return!(n<0)&&(n==t.length-1?t.pop():hs.call(t,n,1),--this.size,!0)},nn.prototype.get=function(e){var t=this.__data__,n=Xn(t,e);return n<0?void 0:t[n][1]},nn.prototype.has=function(e){return Xn(this.__data__,e)>-1},nn.prototype.set=function(e,t){var n=this.__data__,s=Xn(n,e);return s<0?(++this.size,n.push([e,t])):n[s][1]=t,this},rn.prototype.clear=function(){this.size=0,this.__data__={hash:new gn,map:new(Hn||nn),string:new gn}},rn.prototype.delete=function(e){var t=js(this,e).delete(e);return this.size-=t?1:0,t},rn.prototype.get=function(e){return js(this,e).get(e)},rn.prototype.has=function(e){return js(this,e).has(e)},rn.prototype.set=function(e,t){var n=js(this,e),s=n.size;return n.set(e,t),this.size+=n.size==s?0:1,this},pn.prototype.add=pn.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},pn.prototype.has=function(e){return this.__data__.has(e)},Gt.prototype.clear=function(){this.__data__=new nn,this.size=0},Gt.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Gt.prototype.get=function(e){return this.__data__.get(e)},Gt.prototype.has=function(e){return this.__data__.has(e)},Gt.prototype.set=function(e,t){var s,n=this.__data__;if(n instanceof nn){if(s=n.__data__,!Hn||s.length<199)return s.push([e,t]),this.size=++n.size,this;n=this.__data__=new rn(s)}return n.set(e,t),this.size=n.size,this},ln=Zo(Qt),To=Zo($s,!0);function Ya(e,t){var n=!0;return ln(e,function(e,s,o){return n=!!t(e,s,o)}),n}function qn(e,t,n){for(var s,o,i,r,a=-1,c=e.length;++a<c;)o=e[a],s=t(o),s!=null&&(void 0===i?s==s&&!pt(s):n(s,i))&&(i=s,r=o);return r}function Da(e,t){var n=[];return ln(e,function(e,s,o){t(e,s,o)&&n.push(e)}),n}function _e(e,t,n,s,o){var i,a=-1,r=e.length;for(n||(n=ic),o||(o=[]);++a<r;)i=e[a],t>0&&n(i)?t>1?_e(i,t-1,n,s,o):b(o,i):s||(o[o.length]=i);return o}cs=Qo(),ko=Qo(!0);function Qt(e,t){return e&&cs(e,t,ye)}function $s(e,t){return e&&ko(e,t,ye)}function Yn(e,t){return v(t,function(t){return cn(e[t])})}function On(e,t){for(var n=0,s=(t=mn(t,e)).length;e!=null&&n<s;)e=e[Xt(t[n++])];return n&&n==s?e:void 0}function Fa(e,t,n){var s=t(e);return y(e)?s:b(s,n(e))}function Ee(e){return e==null?void 0===e?"[object Undefined]":"[object Null]":wn&&wn in ae(e)?function(e){var t,n,s=ie.call(e,wn),o=e[wn];try{e[wn]=void 0,t=!0}catch{}return n=Fs.call(e),t&&(s?e[wn]=o:delete e[wn]),n}(e):function(e){return Fs.call(e)}(e)}function yo(e,t){return e>t}function or(e,t){return e!=null&&ie.call(e,t)}function ar(e,t){return e!=null&&t in ae(e)}function bo(e,t,n){for(var o,a,r,l,m,p,g=n?Q:V,v=e[0].length,f=e.length,s=f,h=be(f),u=1/0,d=[];s--;)o=e[s],s&&t&&(o=i(o,c(t))),u=xe(o.length,u),h[s]=!n&&(t||v>=120&&o.length>=120)?new pn(s&&o):void 0;o=e[0],m=-1,l=h[0];n:for(;++m<v&&d.length<u;)if(a=o[m],r=t?t(a):a,a=n||0!==a?a:0,!(l?k(l,r):g(d,r,n))){for(s=f;--s;)if(p=h[s],!(p?k(p,r):g(e[s],r,n)))continue n;l&&l.push(r),d.push(a)}return d}function Tn(e,t,n){var s=null==(e=bi(e,t=mn(t,e)))?e:e[Xt(Ut(t))];return s==null?void 0:r(s,e,n)}function Ca(e){return me(e)&&Ee(e)==w}function In(e,t,n,s,o){return e===t||(e==null||t==null||!me(e)&&!me(t)?e!=e&&t!=t:function(e,t,n,s,o,i){var u,m,g,v,c=y(e),b=y(t),a=c?I:we(e),r=b?I:we(t),l=(a=a==w?p:a)==p,j=(r=r==w?p:r)==p,d=a==r;if(d&&en(e)){if(!en(t))return!1;c=!0,l=!1}return d&&!l?(i||(i=new Gt),c||_n(e)?Ko(e,t,n,s,o,i):function(e,t,n,s,o,i,a){switch(n){case O:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case S:return e.byteLength==t.byteLength&&!!i(new ns(e),new ns(t));case z:case A:case D:return qt(+e,+t);case L:return e.name==t.name&&e.message==t.message;case T:case F:return e==t+"";case f:var c,l,d,r=ce;case h:return l=1&s,r||(r=N),!(e.size!=t.size&&!l)&&(c=a.get(e),c?c==t:(s|=2,a.set(e,t),d=Ko(r(e),r(t),s,o,i,a),a.delete(e),d));case B:if(Nn)return Nn.call(e)==Nn.call(t)}return!1}(e,t,a,n,s,o,i)):!(1&n)&&(u=l&&ie.call(e,"__wrapped__"),m=j&&ie.call(t,"__wrapped__"),u||m)?(g=u?e.value():e,v=m?t.value():t,i||(i=new Gt),o(g,v,n,s,i)):!!d&&(i||(i=new Gt),function(e,t,n,s,o,i){var a,r,c,l,d,u,h,m,p,g,v,f=1&n,j=Mo(e),b=j.length,y=Mo(t).length;if(b!=y&&!f)return!1;for(d=b;d--;)if(a=j[d],!(f?a in t:ie.call(t,a)))return!1;if(p=i.get(e),g=i.get(t),p&&g)return p==t&&g==e;for(h=!0,i.set(e,t),i.set(t,e),m=f;++d<b;){if(a=j[d],u=e[a],l=t[a],s&&(v=f?s(l,u,a,t,e,i):s(u,l,a,e,t,i)),!(void 0===v?u===l||o(u,l,n,s,i):v)){h=!1;break}m||(m="constructor"==a)}return h&&!m&&(c=e.constructor,r=t.constructor,c==r||!("constructor"in e)||!("constructor"in t)||"function"==typeof c&&c instanceof c&&"function"==typeof r&&r instanceof r||(h=!1)),i.delete(e),i.delete(t),h}(e,t,n,s,o,i))}(e,t,n,s,In,o))}function Ns(e,t,n,s){var o,c,l,i=n.length,d=i,u=!s;if(e==null)return!d;for(e=ae(e);i--;)if(o=n[i],u&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1;for(;++i<d;){var a=(o=n[i])[0],r=e[a],h=o[1];if(u&&o[2]){if(void 0===r&&!(a in e))return!1}else if(c=new Gt,s&&(l=s(r,h,a,e,t,c)),!(void 0===l?In(h,r,3,s,c):l))return!1}return!0}function _a(e){return!!de(e)&&!(t=e,wi&&wi in t)&&(cn(e)?Ur:nt).test(fn(e));var t}function ya(e){return"function"==typeof e?e:e==null?$e:"object"==typeof e?y(e)?Gi(e[0],e[1]):oa(e):yi(e)}function Qs(e){if(!zn(e))return lr(e);var t,n=[];for(t in ae(e))ie.call(e,t)&&"constructor"!=t&&n.push(t);return n}function cr(e){if(!de(e))return function(e){var n,t=[];if(e!=null)for(n in ae(e))t.push(n);return t}(e);var t,s=zn(e),n=[];for(t in e)("constructor"!=t||!s&&ie.call(e,t))&&n.push(t);return n}function Gs(e,t){return e<t}function fa(e,t){var s=-1,n=Te(e)?be(e.length):[];return ln(e,function(e,o,i){n[++s]=t(e,o,i)}),n}function oa(e){var t=vo(e);return 1==t.length&&t[0][2]?gi(t[0][0],t[0][1]):function(n){return n===e||Ns(n,e,t)}}function Gi(e,t){return no(e)&&pi(t)?gi(Xt(e),t):function(n){var s=Js(n,e);return void 0===s&&s===t?eo(n,e):In(t,s,3)}}function Ts(e,t,n,s,o){e!==t&&cs(t,function(i,a){if(o||(o=new Gt),de(i))!function(e,t,n,s,o,i,a){var c,d,l=Ys(e,n),r=Ys(t,n),m=a.get(r);if(m)return void Lo(e,n,m);if(c=i?i(l,r,n+"",e,t,a):void 0,d=void 0===c,d){var u=y(r),h=!u&&en(r),f=!u&&!h&&_n(r);c=r,u||h||f?y(l)?c=l:pe(l)?c=Pe(l):h?(d=!1,c=si(r,!0)):f?(d=!1,c=ni(r,!0)):c=[]:Rn(r)||yn(r)?(c=l,yn(l)?c=va(l):de(l)&&!cn(l)||(c=ri(r))):d=!1}d&&(a.set(r,c),o(c,r,s,i,a),a.delete(r)),Lo(e,n,c)}(e,t,a,n,Ts,s,o);else{var r=s?s(Ys(e,a),i,a+"",e,t,o):void 0;void 0===r&&(r=i),Lo(e,a,r)}},We)}function Ui(e,t){var n=e.length;if(n)return tn(t+=t<0?n:0,n)?e[t]:void 0}function Ho(e,t,n){t=t.length?i(t,function(e){return y(e)?function(t){return On(t,1===e.length?e[0]:e)}:e}):[$e];var s=-1;return t=i(t,c(u())),function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(fa(e,function(e){return{criteria:i(t,function(t){return t(e)}),index:++s,value:e}}),function(e,t){return function(e,t,n){for(var o,a,s=-1,i=e.criteria,r=t.criteria,c=i.length,l=n.length;++s<c;)if(o=ti(i[s],r[s]),o)return s>=l?o:(a=n[s],o*("desc"==a?-1:1));return e.index-t.index}(e,t,n)})}function Si(e,t,n){for(var s,o,i=-1,r=t.length,a={};++i<r;)s=t[i],o=On(e,s),n(o,s)&&Pn(a,mn(s,e),o);return a}function Ls(e,t,n,s){var d=s?yt:x,r=-1,u=t.length,o=e;for(e===t&&(t=Pe(t)),n&&(o=i(e,c(n)));++r<u;)for(var a=0,l=t[r],h=n?n(l):l;(a=d(o,h,a,s))>-1;)o!==e&&hs.call(o,a,1),hs.call(e,a,1);return e}function Ai(e,t){for(var n,o,s=e?t.length:0,i=s-1;s--;)n=t[s],(s==i||n!==o)&&(o=n,tn(n)?hs.call(e,n,1):to(e,n));return e}function Ps(e,t){return e+Os(Aa()*(t-e+1))}function Hs(e,t){var n="";if(!e||t<1||t>9007199254740991)return n;do t%2&&(n+=e),(t=Os(t/2))&&(e+=e);while(t)return n}function W(e,t){return Us(vi(e,t,$e),e+"")}function Xr(e){return Va(kn(e))}function Qr(e,t){var n=kn(e);return zs(n,vn(t,0,n.length))}function Pn(e,t,n,s){if(!de(e))return e;for(var o,r,c,a=-1,l=(t=mn(t,e)).length,d=l-1,i=e;i!=null&&++a<l;){if(o=Xt(t[a]),r=n,"__proto__"===o||"constructor"===o||"prototype"===o)return e;a!=d&&(c=i[o],void 0===(r=s?s(c,o,i):void 0)&&(r=de(c)?c:tn(t[a+1])?[]:{})),Wn(i,o,r),i=i[o]}return e}Ws=ks?function(e,t){return ks.set(e,t),e}:$e,Oi=gs?function(e,t){return gs(e,"toString",{configurable:!0,enumerable:!1,value:Eo(t),writable:!0})}:$e;function Zr(e){return zs(kn(e))}function It(e,t,n){var i,o=-1,s=e.length;t<0&&(t=-t>s?0:s+t),(n=n>s?s:n)<0&&(n+=s),s=t>n?0:n-t>>>0,t>>>=0;for(i=be(s);++o<s;)i[o]=e[o+t];return i}function sc(e,t){var n;return ln(e,function(e,s,o){return!(n=t(e,s,o))}),!!n}function As(e,t,n){var o,a,i=0,s=e==null?i:e.length;if("number"==typeof t&&t==t&&s<=2147483647){for(;i<s;)a=i+s>>>1,o=e[a],null!==o&&!pt(o)&&(n?o<=t:o<t)?i=a+1:s=a;return s}return Xs(e,t,$e,n)}function Xs(e,t,n,s){if(r=0,i=e==null?0:e.length,0===i)return 0;for(var g=(t=n(t))!=t,p=null===t,f=pt(t),m=void 0===t;r<i;){var i,r,u,l=Os((r+i)/2),o=n(e[l]),d=void 0!==o,c=null===o,a=o==o,h=pt(o);g?(u=s||a):u=m?a&&(s||d):p?a&&d&&(s||!c):f?a&&d&&!c&&(s||!h):!c&&!h&&(s?o<=t:o<t),u?r=l+1:i=l}return xe(i,4294967294)}function fi(e,t){for(var n,o,a,s=-1,r=e.length,c=0,i=[];++s<r;)n=e[s],o=t?t(n):n,(!s||!qt(o,a))&&(a=o,i[c++]=0===n?0:n);return i}function hi(e){return"number"==typeof e?e:pt(e)?NaN:+e}function gt(e){if("string"==typeof e)return e;if(y(e))return i(e,gt)+"";if(pt(e))return La?La.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function hn(e,t,n){var o,i,l,d,u=-1,r=V,h=e.length,c=!0,a=[],s=a;if(n)c=!1,r=Q;else if(h>=200){if(l=t?null:Io(e),l)return N(l);c=!1,r=k,s=new pn}else s=t?[]:a;n:for(;++u<h;)if(o=e[u],i=t?t(o):o,o=n||0!==o?o:0,c&&i==i){for(d=s.length;d--;)if(s[d]===i)continue n;t&&s.push(i),a.push(o)}else r(s,i,n)||(s!==a&&s.push(i),a.push(o));return a}function to(e,t){return null==(e=bi(e,t=mn(t,e)))||delete e[Xt(Ut(t))]}function ui(e,t,n,s){return Pn(e,t,n(On(e,t)),s)}function xs(e,t,n,s){for(var i=e.length,o=s?i:-1;(s?o--:++o<i)&&t(e[o],o,e););return n?It(e,s?0:o,s?o+1:i):It(e,s?o+1:0,s?i:o)}function di(e,t){var n=e;return n instanceof J&&(n=n.value()),Y(t,function(e,t){return t.func.apply(t.thisArg,b([e],t.args))},n)}function io(e,t,n){if(s=e.length,s<2)return s?hn(e[0]):[];for(var s,i,r,o=-1,a=be(s);++o<s;)for(r=e[o],i=-1;++i<s;)i!=o&&(a[o]=Bn(a[o]||r,e[i],t,n));return hn(_e(a,1),t,n)}function li(e,t,n){for(var i,s=-1,a=e.length,r=t.length,o={};++s<a;)i=s<r?t[s]:void 0,n(o,e[s],i);return o}function ro(e){return pe(e)?e:[]}function co(e){return"function"==typeof e?e:$e}function mn(e,t){return y(e)?e:no(e,t)?[e]:Bs(se(e))}ii=W;function dn(e,t,n){var s=e.length;return n=void 0===n?s:n,!t&&n>=s?e:It(e,t,n)}mo=Sr||function(e){return a.clearTimeout(e)};function si(e,t){if(t)return e.slice();var n=e.length,s=Pi?Pi(n):new e.constructor(n);return e.copy(s),s}function po(e){var t=new e.constructor(e.byteLength);return new ns(t).set(new ns(e)),t}function ni(e,t){var n=t?po(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function ti(e,t){if(e!==t){var a=void 0!==e,r=null===e,n=e==e,s=pt(e),c=void 0!==t,l=null===t,o=t==t,i=pt(t);if(!l&&!i&&!s&&e>t||s&&c&&o&&!l&&!i||r&&c&&o||!a&&o||!n)return 1;if(!r&&!s&&!i&&e<t||i&&a&&n&&!r&&!s||l&&a&&n||!c&&n||!o)return-1}return 0}function ei(e,t,n,s){for(var o=-1,r=e.length,c=n.length,i=-1,l=t.length,d=ge(r-c,0),a=be(l+d),u=!s;++i<l;)a[i]=t[i];for(;++o<c;)(u||o<r)&&(a[n[o]]=e[o]);for(;d--;)a[i++]=e[o++];return a}function Jo(e,t,n,s){for(var r,o=-1,c=e.length,l=-1,d=n.length,a=-1,u=t.length,h=ge(c-d,0),i=be(h+u),m=!s;++o<h;)i[o]=e[o];for(r=o;++a<u;)i[r+a]=t[a];for(;++l<d;)(m||o<c)&&(i[r+n[l]]=e[o++]);return i}function Pe(e,t){var n=-1,s=e.length;for(t||(t=be(s));++n<s;)t[n]=e[n];return t}function Zt(e,t,n,s){a=!n,n||(n={});for(var o,i,a,r=-1,c=t.length;++r<c;)o=t[r],i=s?s(n[o],e[o],o,n,e):void 0,void 0===i&&(i=e[o]),a?an(n,o,i):Wn(n,o,i);return n}function ps(e,t){return function(n,s){var o=y(n)?ot:Ka,i=t?t():{};return o(n,e,u(s,2),i)}}function Cn(e){return W(function(t,n){var a,i=-1,s=n.length,o=s>1?n[s-1]:void 0,r=s>2?n[2]:void 0;for(o=e.length>3&&"function"==typeof o?(s--,o):void 0,r&&ke(n[0],n[1],r)&&(o=s<3?void 0:o,s=1),t=ae(t);++i<s;)a=n[i],a&&e(t,a,i,o);return t})}function Zo(e,t){return function(n,s){if(n==null)return n;if(!Te(n))return e(n,s);for(var i=n.length,o=t?i:-1,a=ae(n);(t?o--:++o<i)&&!1!==s(a[o],o,a););return n}}function Qo(e){return function(t,n,s){for(var o,c=-1,i=ae(t),a=s(t),r=a.length;r--;)if(o=a[e?r:++c],!1===n(i[o],o,i))break;return t}}function Xo(e){return function(t){var n=E(t=se(t))?m(t):void 0,s=n?n[0]:t.charAt(0),o=n?dn(n,1).join(""):t.slice(1);return s[e]()+o}}function Mn(e){return function(t){return Y(Hi(Ki(t).replace(Pt,"")),e,"")}}function Kn(e){return function(){switch(t=arguments,t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var t,n=bn(e.prototype),s=e.apply(n,t);return de(s)?s:n}}function Go(e){return function(t,n,s){var o,a,i=ae(t);return Te(t)||(a=u(n,3),t=ye(t),n=function(e){return a(i[e],e,i)}),o=e(t,n,s),o>-1?i[a?t[o]:o]:void 0}}function Yo(e){return Jt(function(t){var n,s,o,r,a=t.length,i=a,c=wt.prototype.thru;for(e&&t.reverse();i--;){if(s=t[i],"function"!=typeof s)throw new Kt(d);c&&!n&&"wrapper"==us(s)&&(n=new wt([],!0))}for(i=n?i:a;++i<a;)r=us(s=t[i]),o="wrapper"==r?ds(s):void 0,n=o&&Zs(o[0])&&424==o[1]&&!o[4].length&&1==o[9]?n[us(o[0])].apply(n,o[3]):1==s.length&&Zs(s)?n[r]():n.thru(s);return function(){var e,s,o=arguments,i=o[0];if(n&&1==o.length&&y(i))return n.plant(i).value();for(e=0,s=a?t[e].apply(this,o):i;++e<a;)s=t[e].call(this,s);return s}})}function rs(e,t,n,s,o,i,r,c,l,d){var m=128&t,f=1&t,h=2&t,u=24&t,p=512&t,g=h?void 0:Kn(e);return function v(){for(var _,O,x,C,E,y=arguments.length,b=be(y),w=y;w--;)b[w]=arguments[w];return u&&(O=xn(v),C=Dt(b,O)),s&&(b=ei(b,s,o,u)),i&&(b=Jo(b,i,r,u)),y-=C,u&&y<d?(E=j(b,O),ka(e,t,rs,v.placeholder,n,b,E,c,l,d-y)):(x=f?n:this,_=h?x[e]:e,y=b.length,c?b=oc(b,c):p&&y>1&&b.reverse(),m&&l<y&&(b.length=l),this&&this!==a&&this instanceof v&&(_=g||Kn(_)),_.apply(x,b))}}function qo(e,t){return function(n,s){return function(e,t,n,s){return Qt(e,function(e,o,i){t(s,n(e),o,i)}),s}(n,e,t(s),{})}}function ts(e,t){return function(n,s){var o;if(void 0===n&&void 0===s)return t;if(void 0!==n&&(o=n),void 0!==s){if(void 0===o)return s;"string"==typeof n||"string"==typeof s?(n=gt(n),s=gt(s)):(n=hi(n),s=hi(s)),o=e(n,s)}return o}}function Do(e){return Jt(function(t){return t=i(t,c(u())),W(function(n){var s=this;return e(t,function(e){return r(e,s,n)})})})}function Jn(e,t){var n,s=(t=void 0===t?" ":gt(t)).length;return s<2?s?Hs(t,e):t:(n=Hs(t,ys(e/_(t))),E(t)?dn(m(n),0,e).join(""):n.slice(0,e))}function Vo(e){return function(t,n,s){return s&&"number"!=typeof s&&ke(t,n,s)&&(n=s=void 0),t=sn(t),void 0===n?(n=t,t=0):n=sn(n),function(e,t,n,s){for(var a=-1,o=ge(ys((t-e)/(n||1)),0),i=be(o);o--;)i[s?o:++a]=e,e+=n;return i}(t,n,s=void 0===s?t<n?1:-1:sn(s),e)}}function Gn(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=Ht(t),n=Ht(n)),e(t,n)}}function ka(e,t,n,s,o,i,a,r,c,l){d=8&t,t|=d?32:64,4&(t&=~(d?64:32))||(t&=-4);var d,h=[e,t,o,d?i:void 0,d?a:void 0,d?void 0:i,d?void 0:a,r,c,l],u=n.apply(void 0,h);return Zs(e)&&_i(u,h),u.placeholder=s,xi(u,e,t)}function No(e){var t=An[e];return function(e,n){if(e=Ht(e),(n=n==null?0:xe(C(n),292))&&ta(e)){var s=(se(e)+"e").split("e");return+((s=(se(t(s[0]+"e"+(+s[1]+n)))+"e").split("e"))[0]+"e"+(+s[1]-n))}return t(e)}}Io=Fn&&1/N(new Fn([,-0]))[1]==1/0?function(e){return new Fn(e)}:Is;function Bo(e){return function(t){var n=we(t);return n==f?ce(t):n==h?$t(t):function(e,t){return i(t,function(t){return[t,e[t]]})}(t,e(t))}}function on(e,t,n,s,o,i,c,l){if(h=2&t,!h&&"function"!=typeof e)throw new Kt(d);if(m=s?s.length:0,m||(t&=-97,s=o=void 0),c=void 0===c?c:ge(C(c),0),l=void 0===l?l:C(l),m-=o?o.length:0,64&t){var u,h,m,f,p,g=s,v=o;s=o=void 0}return f=h?void 0:ds(e),u=[e,t,n,s,o,g,v,i,c,l],f&&function(e,t){var n,s,i=e[1],o=t[1],a=i|o,r=a<131,c=128==o&&8==i||128==o&&256==i&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==i;if(!r&&!c)return e;1&o&&(e[2]=t[2],a|=1&i?0:4),n=t[3],n&&(s=e[3],e[3]=s?ei(s,n,t[4]):n,e[4]=s?j(e[3],$):t[4]),(n=t[5])&&(s=e[5],e[5]=s?Jo(s,n,t[6]):n,e[6]=s?j(e[5],$):t[6]),(n=t[7])&&(e[7]=n),128&o&&(e[8]=null==e[8]?t[8]:xe(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=a}(u,f),e=u[0],t=u[1],n=u[2],s=u[3],o=u[4],!(l=u[9]=void 0===u[9]?h?0:e.length:ge(u[9]-m,0))&&24&t&&(t&=-25),t&&1!=t?p=8==t||16==t?function(e,t,n){var s=Kn(e);return function o(){for(var u,h,i=arguments.length,c=be(i),l=i,d=xn(o);l--;)c[l]=arguments[l];return u=i<3&&c[0]!==d&&c[i-1]!==d?[]:j(c,d),(i-=u.length)<n?ka(e,t,rs,o.placeholder,void 0,c,u,void 0,void 0,n-i):(h=this&&this!==a&&this instanceof o?s:e,r(h,this,c))}}(e,t,l):32!=t&&33!=t||o.length?rs.apply(void 0,u):function(e,t,n,s){var o=1&t,i=Kn(e);return function t(){for(var h=-1,d=arguments.length,c=-1,u=s.length,l=be(u+d),m=this&&this!==a&&this instanceof t?i:e;++c<u;)l[c]=s[c];for(;d--;)l[c++]=arguments[++h];return r(m,o?n:this,l)}}(e,t,n,s):(p=function(e,t,n){var s=1&t,o=Kn(e);return function t(){var i=this&&this!==a&&this instanceof t?o:e;return i.apply(s?n:this,arguments)}}(e,t,n)),xi((f?Ws:_i)(p,u),e,t)}function Po(e,t,n,s){return void 0===e||qt(e,En[n])&&!ie.call(s,n)?t:e}function Wo(e,t,n,s,o,i){return de(e)&&de(t)&&(i.set(t,e),Ts(e,t,void 0,Wo,i),i.delete(t)),e}function hc(e){return Rn(e)?void 0:e}function Ko(e,t,n,s,o,i){var a,c,u,h,f,p=1&n,d=e.length,g=t.length;if(d!=g&&!(p&&g>d))return!1;if(u=i.get(e),h=i.get(t),u&&h)return u==t&&h==e;var r=-1,l=!0,m=2&n?new pn:void 0;for(i.set(e,t),i.set(t,e);++r<d;){if(a=e[r],c=t[r],s&&(f=p?s(c,a,r,t,e,i):s(a,c,r,e,t,i)),void 0!==f){if(f)continue;l=!1;break}if(m){if(!q(t,function(e,t){if(!k(m,t)&&(a===e||o(a,e,n,s,i)))return m.push(t)})){l=!1;break}}else if(a!==c&&!o(a,c,n,s,i)){l=!1;break}}return i.delete(e),i.delete(t),l}function Jt(e){return Us(vi(e,void 0,Li),e+"")}function Mo(e){return Fa(e,ye,fo)}function So(e){return Fa(e,We,oi)}ds=ks?function(e){return ks.get(e)}:Is;function us(e){for(var n,s,t=e.name+"",o=Sn[t],i=ie.call(Sn,t)?o.length:0;i--;)if(n=o[i],s=n.func,s==null||s==e)return n.name;return t}function xn(e){return(ie.call(n,"placeholder")?n:e).placeholder}function u(){var e=n.iteratee||qs;return e=e===qs?ya:e,arguments.length?e(arguments[0],arguments[1]):e}function js(e,t){var n,s,o=e.__data__;return("string"==(n=typeof(s=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==s:null===s)?o["string"==typeof t?"string":"hash"]:o.map}function vo(e){for(var s,o,t=ye(e),n=t.length;n--;)s=t[n],o=e[s],t[n]=[s,o,pi(o)];return t}function jn(e,t){var n=function(e,t){return e?.[t]}(e,t);return _a(n)?n:void 0}var fo=ao?function(e){return e==null?[]:(e=ae(e),v(ao(e),function(t){return Qi.call(e,t)}))}:zo,oi=ao?function(e){for(var t=[];e;)b(t,fo(e)),e=ls(e);return t}:zo,we=Ee;function ai(e,t,n){for(var o,i=-1,s=(t=mn(t,e)).length,a=!1;++i<s;){if(o=Xt(t[i]),!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++i!=s?a:!!(s=e==null?0:e.length)&&es(s)&&tn(o,s)&&(y(e)||yn(e))}function ri(e){return"function"!=typeof e.constructor||zn(e)?{}:bn(ls(e))}function ic(e){return y(e)||yn(e)||!!(Zi&&e&&e[Zi])}function tn(e,t){var n=typeof e;return!!(t=t??9007199254740991)&&("number"==n||"symbol"!=n&&rt.test(e))&&e>-1&&e%1==0&&e<t}function ke(e,t,n){if(!de(n))return!1;var s=typeof t;return!!("number"==s?Te(n)&&tn(t,n.length):"string"==s&&t in n)&&qt(n[t],e)}function no(e,t){if(y(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&e!=null&&!pt(e))||Ot.test(e)||!et.test(e)||t!=null&&e in ae(t)}function Zs(e){var s,o=us(e),t=n[o];return"function"==typeof t&&o in J.prototype&&(e===t||(s=ds(t),!!s&&e===s[0]))}(lo&&we(new lo(new ArrayBuffer(1)))!=O||Hn&&we(new Hn)!=f||Rs&&"[object Promise]"!=we(Rs.resolve())||Fn&&we(new Fn)!=h||Un&&we(new Un)!=M)&&(we=function(e){var t=Ee(e),n=t==p?e.constructor:void 0,s=n?fn(n):"";if(s)switch(s){case Ja:return O;case Za:return f;case Qa:return"[object Promise]";case Xa:return h;case Ga:return M}return t}),mi=ss?cn:Fo;function zn(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||En)}function pi(e){return e==e&&!de(e)}function gi(e,t){return function(n){return n!=null&&n[e]===t&&(void 0!==t||e in ae(n))}}function vi(e,t,n){return t=ge(void 0===t?e.length-1:t,0),function(){for(var o,i=arguments,s=-1,a=ge(i.length-t,0),c=be(a);++s<a;)c[s]=i[t+s];for(s=-1,o=be(t+1);++s<t;)o[s]=i[s];return o[t]=n(c),r(e,this,o)}}function bi(e,t){return t.length<2?e:On(e,It(t,0,-1))}function oc(e,t){for(var s,o=e.length,n=xe(t.length,o),i=Pe(e);n--;)s=t[n],e[n]=tn(s,o)?i[s]:void 0;return e}function Ys(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var _i=Ci(Ws),Dn=wr||function(e,t){return a.setTimeout(e,t)},Us=Ci(Oi);function xi(e,t,n){var s=t+"";return Us(e,function(e,t){var s,n=t.length;return n?(s=n-1,t[s]=(n>1?"& ":"")+t[s],t=t.join(n>2?", ":" "),e.replace(mt,`{
/* [wrapped with `+t+`] */
`)):e}(s,function(e,t){return l(Yt,function(n){var s="_."+n[0];t&n[1]&&!V(e,s)&&e.push(s)}),e.sort()}(function(e){var t=e.match(ht);return t?t[1].split(ut):[]}(s),n)))}function Ci(e){var t=0,n=0;return function(){var s=rr(),o=16-(s-n);if(n=s,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function zs(e,t){var s,i,n=-1,o=e.length,a=o-1;for(t=void 0===t?o:t;++n<t;)s=Ps(n,a),i=e[s],e[s]=e[n],e[n]=i;return e.length=t,e}Bs=function(e){var t=_s(e,function(e){return 500===n.size&&n.clear(),e}),n=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(jt,function(e,n,s,o){t.push(s?o.replace(ct,"$1"):n||e)}),t});function Xt(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function fn(e){if(e!=null){try{return is.call(e)}catch{}try{return e+""}catch{}}return""}function Mi(e){if(e instanceof J)return e.clone();var t=new wt(e.__wrapped__,e.__chain__);return t.__actions__=Pe(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var qr=W(function(e,t){return pe(e)?Bn(e,_e(t,1,pe,!0)):[]}),Kr=W(function(e,t){var n=Ut(t);return pe(n)&&(n=void 0),pe(e)?Bn(e,_e(t,1,pe,!0),u(n,2)):[]}),Wr=W(function(e,t){var n=Ut(t);return pe(n)&&(n=void 0),pe(e)?Bn(e,_e(t,1,pe,!0),void 0,n):[]});function Di(e,t,n){var s,o=e==null?0:e.length;return o?(s=n==null?0:C(n),s<0&&(s=ge(o+s,0)),H(e,u(t,3),s)):-1}function Ni(e,t,n){var s,o=e==null?0:e.length;return o?(s=o-1,void 0!==n&&(s=C(n),s=n<0?ge(o+s,0):xe(s,o-1)),H(e,u(t,3),s,!0)):-1}function Li(e){return(e==null?0:e.length)?_e(e,1):[]}function Ri(e){return e&&e.length?e[0]:void 0}var $r=W(function(e){var t=i(e,ro);return t.length&&t[0]===e[0]?bo(t):[]}),Vr=W(function(e){var n=Ut(e),t=i(e,ro);return n===Ut(t)?n=void 0:t.pop(),t.length&&t[0]===e[0]?bo(t,u(n,2)):[]}),Br=W(function(e){var t=Ut(e),n=i(e,ro);return(t="function"==typeof t?t:void 0)&&n.pop(),n.length&&n[0]===e[0]?bo(n,void 0,t):[]});function Ut(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}Vi=W($i);function $i(e,t){return e&&e.length&&t&&t.length?Ls(e,t):e}Wi=Jt(function(e,t){var n=e==null?0:e.length,s=Ro(e,t);return Ai(e,i(t,function(e){return tn(e,n)?+e:e}).sort(ti)),s});function Vs(e){return e==null?e:er.call(e)}var Dr=W(function(e){return hn(_e(e,1,pe,!0))}),zr=W(function(e){var t=Ut(e);return pe(t)&&(t=void 0),hn(_e(e,1,pe,!0),u(t,2))}),Tr=W(function(e){var t=Ut(e);return t="function"==typeof t?t:void 0,hn(_e(e,1,pe,!0),void 0,t)});function Ks(e){if(!e||!e.length)return[];var t=0;return e=v(e,function(e){if(pe(e))return t=ge(e.length,t),!0}),te(t,function(t){return i(e,Z(t))})}function Xi(e,t){if(!e||!e.length)return[];var n=Ks(e);return t==null?n:i(n,function(e){return r(t,void 0,e)})}var Fr=W(function(e,t){return pe(e)?Bn(e,t):[]}),Mr=W(function(e){return io(v(e,pe))}),Ar=W(function(e){var t=Ut(e);return pe(t)&&(t=void 0),io(v(e,pe),u(t,2))}),Cr=W(function(e){var t=Ut(e);return t="function"==typeof t?t:void 0,io(v(e,pe),void 0,t)}),vr=W(Ks),ur=W(function(e){var n=e.length,t=n>1?e[n-1]:void 0;return t="function"==typeof t?(e.pop(),t):void 0,Xi(e,t)});function sa(e){var t=n(e);return t.__chain__=!0,t}function Ms(e,t){return t(e)}ia=Jt(function(e){var t=e.length,s=t?e[0]:0,n=this.__wrapped__,o=function(t){return Ro(t,e)};return!(t>1||this.__actions__.length)&&n instanceof J&&tn(s)?((n=n.slice(s,+s+(t?1:0))).__actions__.push({func:Ms,args:[o],thisArg:void 0}),new wt(n,this.__chain__).thru(function(e){return t&&!e.length&&e.push(void 0),e})):this.thru(o)}),aa=ps(function(e,t,n){ie.call(e,n)?++e[n]:an(e,n,1)}),ra=Go(Di),ca=Go(Ni);function la(e,t){return(y(e)?l:ln)(e,u(t,3))}function da(e,t){return(y(e)?at:To)(e,u(t,3))}ua=ps(function(e,t,n){ie.call(e,n)?e[n].push(t):an(e,n,[t])}),ha=W(function(e,t,n){var o=-1,i="function"==typeof t,s=Te(e)?be(e.length):[];return ln(e,function(e){s[++o]=i?r(t,e,n):Tn(e,t,n)}),s}),ma=ps(function(e,t,n){an(e,n,t)});function Ss(e,t){return(y(e)?i:fa)(e,u(t,3))}pa=ps(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),ga=W(function(e,t){if(e==null)return[];var n=t.length;return n>1&&ke(e,t[0],t[1])?t=[]:n>2&&ke(t[0],t[1],t[2])&&(t=[t[0]]),Ho(e,_e(t,1),[])}),Vn=Or||function(){return a.Date.now()};function ba(e,t,n){return t=n?void 0:t,on(e,128,void 0,void 0,void 0,void 0,t=e&&t==null?e.length:t)}function ja(e,t){var n;if("function"!=typeof t)throw new Kt(d);return e=C(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=void 0),n}}Cs=W(function(e,t,n){var o,s=1;return n.length&&(o=j(n,xn(Cs)),s|=32),on(e,s,t,n,o)}),so=W(function(e,t,n){var o,s=3;return n.length&&(o=j(n,xn(so)),s|=32),on(t,s,e,n,o)});function wa(e,t,n){var s,o,i,r,c,u,a=0,g=!1,l=!1,m=!0;if("function"!=typeof e)throw new Kt(d);function f(t){var n=i,s=r;return i=r=void 0,a=t,c=e.apply(s,n)}function j(e){return a=e,s=Dn(h,t),g?f(e):c}function v(e){var n=e-o;return void 0===o||n>=t||n<0||l&&e-a>=u}function h(){var e=Vn();if(v(e))return b(e);s=Dn(h,function(e){var n=t-(e-o);return l?xe(n,u-(e-a)):n}(e))}function b(e){return s=void 0,m&&i?f(e):(i=r=void 0,c)}function p(){var e=Vn(),n=v(e);if(i=arguments,r=this,o=e,n){if(void 0===s)return j(o);if(l)return mo(s),s=Dn(h,t),f(o)}return void 0===s&&(s=Dn(h,t)),c}return t=Ht(t)||0,de(n)&&(g=!!n.leading,u=(l="maxWait"in n)?ge(Ht(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),p.cancel=function(){void 0!==s&&mo(s),a=0,i=o=r=s=void 0},p.flush=function(){return void 0===s?c:b(Vn())},p}Oa=W(function(e,t){return Ra(e,1,t)}),xa=W(function(e,t,n){return Ra(e,Ht(t)||0,n)});function _s(e,t){if("function"!=typeof e||t!=null&&"function"!=typeof t)throw new Kt(d);var n=function(){var a,o=arguments,i=t?t.apply(this,o):o[0],s=n.cache;return s.has(i)?s.get(i):(a=e.apply(this,o),n.cache=s.set(i,a)||s,a)};return n.cache=new(_s.Cache||rn),n}function bs(e){if("function"!=typeof e)throw new Kt(d);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}_s.Cache=rn;var $a=ii(function(e,t){var n=(t=1==t.length&&y(t[0])?i(t[0],c(u())):i(_e(t,1),c(u()))).length;return W(function(s){for(var o=-1,i=xe(s.length,n);++o<i;)s[o]=t[o].call(this,s[o]);return r(e,this,s)})}),jo=W(function(e,t){return on(e,32,void 0,t,j(t,xn(jo)))}),Sa=W(function(e,t){return on(e,64,void 0,t,j(t,xn(Sa)))}),sr=Jt(function(e,t){return on(e,256,void 0,void 0,void 0,t)});function qt(e,t){return e===t||e!=e&&t!=t}var nr=Gn(yo),tr=Gn(function(e,t){return e>=t}),yn=Ca(function(){return arguments}())?Ca:function(e){return me(e)&&ie.call(e,"callee")&&!Qi.call(e,"callee")},y=be.isArray,qa=Qe?c(Qe):function(e){return me(e)&&Ee(e)==S};function Te(e){return e!=null&&es(e.length)&&!cn(e)}function pe(e){return me(e)&&Te(e)}en=br||Fo,Ia=Ze?c(Ze):function(e){return me(e)&&Ee(e)==A};function Co(e){if(!me(e))return!1;var t=Ee(e);return t==L||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!Rn(e)}function cn(e){if(!de(e))return!1;var t=Ee(e);return t==R||t==Ce||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Bi(e){return"number"==typeof e&&e==C(e)}function es(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function de(e){var t=typeof e;return e!=null&&("object"==t||"function"==t)}function me(e){return e!=null&&"object"==typeof e}Oo=ve?c(ve):function(e){return me(e)&&we(e)==f};function Na(e){return"number"==typeof e||me(e)&&Ee(e)==D}function Rn(e){if(!me(e)||Ee(e)!=p)return!1;var t,n=ls(e);return null===n||(t=ie.call(n,"constructor")&&n.constructor,"function"==typeof t&&t instanceof t&&is.call(t)==Gr)}fs=Xe?c(Xe):function(e){return me(e)&&Ee(e)==T},ho=Ge?c(Ge):function(e){return me(e)&&we(e)==h};function ws(e){return"string"==typeof e||!y(e)&&me(e)&&Ee(e)==F}function pt(e){return"symbol"==typeof e||me(e)&&Ee(e)==B}_n=qe?c(qe):function(e){return me(e)&&es(e.length)&&!!o[Ee(e)]},za=Gn(Gs),Ta=Gn(function(e,t){return e<=t});function Ma(e){if(!e)return[];if(Te(e))return ws(e)?m(e):Pe(e);if(Ln&&e[Ln])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[Ln]());var t=we(e);return(t==f?ce:t==h?N:kn)(e)}function sn(e){return e?(e=Ht(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function C(e){var t=sn(e),n=t%1;return t==t?n?t-n:t:0}function Ea(e){return e?vn(C(e),0,4294967295):0}function Ht(e){if("number"==typeof e)return e;if(pt(e))return NaN;if(de(e)){var n,t="function"==typeof e.valueOf?e.valueOf():e;e=de(t)?t+"":t}return"string"!=typeof e?0===e?e:+e:(e=Le(e),n=tt.test(e),n||st.test(e)?vt(e.slice(2),n?2:8):xt.test(e)?NaN:+e)}function va(e){return Zt(e,We(e))}function se(e){return e==null?"":gt(e)}var dr=Cn(function(e,t){if(zn(t)||Te(t))Zt(t,ye(t),e);else for(var n in t)ie.call(t,n)&&Wn(e,n,t[n])}),na=Cn(function(e,t){Zt(t,We(t),e)}),Es=Cn(function(e,t,n,s){Zt(t,We(t),e,s)}),mr=Cn(function(e,t,n,s){Zt(t,ye(t),e,s)}),fr=Jt(Ro),pr=W(function(e,t){e=ae(e);var i=-1,s=t.length,a=s>2?t[2]:void 0;for(a&&ke(t[0],t[1],a)&&(s=1);++i<s;)for(var n,o,r=t[i],c=We(r),l=-1,d=c.length;++l<d;)n=c[l],o=e[n],(void 0===o||qt(o,En[n])&&!ie.call(e,n))&&(e[n]=r[n]);return e}),gr=W(function(e){return e.push(void 0,Wo),r(ea,void 0,e)});function Js(e,t,n){var s=e==null?void 0:On(e,t);return void 0===s?n:s}function eo(e,t){return e!=null&&ai(e,t,ar)}var jr=qo(function(e,t,n){t!=null&&"function"!=typeof t.toString&&(t=Fs.call(t)),e[t]=n},Eo($e)),yr=qo(function(e,t,n){t!=null&&"function"!=typeof t.toString&&(t=Fs.call(t)),ie.call(e,t)?e[t].push(n):e[t]=[n]},u),_r=W(Tn);function ye(e){return Te(e)?Ba(e):Qs(e)}function We(e){return Te(e)?Ba(e,!0):cr(e)}var xr=Cn(function(e,t,n){Ts(e,t,n)}),ea=Cn(function(e,t,n,s){Ts(e,t,n,s)}),Er=Jt(function(e,t){var s,o,n={};if(e==null)return n;s=!1,t=i(t,function(t){return t=mn(t,e),s||(s=t.length>1),t}),Zt(e,So(e),n),s&&(n=zt(n,7,hc));for(o=t.length;o--;)to(n,t[o]);return n}),kr=Jt(function(e,t){return e==null?{}:function(e,t){return Si(e,t,function(t,n){return eo(e,n)})}(e,t)});function Ji(e,t){if(e==null)return{};var n=i(So(e),function(e){return[e]});return t=u(t),Si(e,n,function(e,n){return t(e,n[0])})}go=Bo(ye),_o=Bo(We);function kn(e){return e==null?[]:K(e,ye(e))}Yi=Mn(function(e,t,n){return t=t.toLowerCase(),e+(n?qi(t):t)});function qi(e){return xo(se(e).toLowerCase())}function Ki(e){return(e=se(e))&&e.replace(Ct,ze).replace(Lt,"")}var Nr=Mn(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),Lr=Mn(function(e,t,n){return e+(n?" ":"")+t.toLowerCase()}),Rr=Xo("toLowerCase"),Pr=Mn(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}),Hr=Mn(function(e,t,n){return e+(n?" ":"")+xo(t)}),Ir=Mn(function(e,t,n){return e+(n?" ":"")+t.toUpperCase()}),xo=Xo("toUpperCase");function Hi(e,t,n){return e=se(e),void 0===(t=n?void 0:t)?function(e){return Tt.test(e)}(e)?function(e){return e.match(Nt)||[]}(e):function(e){return e.match(dt)||[]}(e):e.match(t)||[]}Ao=W(function(e,t){try{return r(e,void 0,t)}catch(e){return Co(e)?e:new uo(e)}}),zi=Jt(function(e,t){return l(t,function(t){t=Xt(t),an(e,t,Cs(e[t],e))}),e});function Eo(e){return function(){return e}}Ti=Yo(),Fi=Yo(!0);function $e(e){return e}function qs(e){return ya("function"==typeof e?e:zt(e,1))}ki=W(function(e,t){return function(n){return Tn(n,e,t)}}),Ei=W(function(e,t){return function(n){return Tn(e,n,t)}});function Ds(e,t,n){var i,a,o=ye(t),s=Yn(t,o);return n!=null||de(t)&&(s.length||!o.length)||(n=t,t=e,e=this,s=Yn(t,ye(t))),i=!(de(n)&&"chain"in n&&!n.chain),a=cn(e),l(s,function(n){var s=t[n];e[n]=s,a&&(e.prototype[n]=function(){if(t=this.__chain__,i||t){var t,n=e(this.__wrapped__),o=n.__actions__=Pe(this.__actions__);return o.push({func:s,args:arguments,thisArg:e}),n.__chain__=t,n}return s.apply(e,b([this.value()],arguments))})}),e}function Is(){}var ec=Do(i),tc=Do(Ue),nc=Do(q);function yi(e){return no(e)?Z(Xt(e)):function(e){return function(t){return On(t,e)}}(e)}ji=Vo(),ci=Vo(!0);function zo(){return[]}function Fo(){return!1}var oo,cc=ts(function(e,t){return e+t},0),lc=No("ceil"),dc=ts(function(e,t){return e/t},1),uc=No("floor"),mc=ts(function(e,t){return e*t},1),fc=No("round"),pc=ts(function(e,t){return e-t},0);return n.after=function(e,t){if("function"!=typeof t)throw new Kt(d);return e=C(e),function(){if(--e<1)return t.apply(this,arguments)}},n.ary=ba,n.assign=dr,n.assignIn=na,n.assignInWith=Es,n.assignWith=mr,n.at=fr,n.before=ja,n.bind=Cs,n.bindAll=zi,n.bindKey=so,n.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return y(e)?e:[e]},n.chain=sa,n.chunk=function(e,t,n){if(t=(n?ke(e,t,n):void 0===t)?1:ge(C(t),0),s=e==null?0:e.length,!s||t<1)return[];for(var s,o=0,a=0,i=be(ys(s/t));o<s;)i[a++]=It(e,o,o+=t);return i},n.compact=function(e){for(var t,n=-1,o=e==null?0:e.length,i=0,s=[];++n<o;)t=e[n],t&&(s[i++]=t);return s},n.concat=function(){if(e=arguments.length,!e)return[];for(var e,s=be(e-1),t=arguments[0],n=e;n--;)s[n-1]=arguments[n];return b(y(t)?Pe(t):[t],_e(s,1))},n.cond=function(e){var t=e==null?0:e.length,n=u();return e=t?i(e,function(e){if("function"!=typeof e[1])throw new Kt(d);return[n(e[0]),e[1]]}):[],W(function(n){for(var s,o=-1;++o<t;)if(s=e[o],r(s[0],this,n))return r(s[1],this,n)})},n.conforms=function(e){return function(e){var t=ye(e);return function(n){return Pa(n,e,t)}}(zt(e,1))},n.constant=Eo,n.countBy=aa,n.create=function(e,t){var n=bn(e);return t==null?n:Ha(n,t)},n.curry=function e(t,n,s){var o=on(t,8,void 0,void 0,void 0,void 0,void 0,n=s?void 0:n);return o.placeholder=e.placeholder,o},n.curryRight=function e(t,n,s){var o=on(t,16,void 0,void 0,void 0,void 0,void 0,n=s?void 0:n);return o.placeholder=e.placeholder,o},n.debounce=wa,n.defaults=pr,n.defaultsDeep=gr,n.defer=Oa,n.delay=xa,n.difference=qr,n.differenceBy=Kr,n.differenceWith=Wr,n.drop=function(e,t,n){var s=e==null?0:e.length;return s?It(e,(t=n||void 0===t?1:C(t))<0?0:t,s):[]},n.dropRight=function(e,t,n){var s=e==null?0:e.length;return s?It(e,0,(t=s-(t=n||void 0===t?1:C(t)))<0?0:t):[]},n.dropRightWhile=function(e,t){return e&&e.length?xs(e,u(t,3),!0,!0):[]},n.dropWhile=function(e,t){return e&&e.length?xs(e,u(t,3),!0):[]},n.fill=function(e,t,n,s){var o=e==null?0:e.length;return o?(n&&"number"!=typeof n&&ke(e,t,n)&&(n=0,s=o),function(e,t,n,s){var o=e.length;for((n=C(n))<0&&(n=-n>o?0:o+n),(s=void 0===s||s>o?o:C(s))<0&&(s+=o),s=n>s?0:Ea(s);n<s;)e[n++]=t;return e}(e,t,n,s)):[]},n.filter=function(e,t){return(y(e)?v:Da)(e,u(t,3))},n.flatMap=function(e,t){return _e(Ss(e,t),1)},n.flatMapDeep=function(e,t){return _e(Ss(e,t),1/0)},n.flatMapDepth=function(e,t,n){return n=void 0===n?1:C(n),_e(Ss(e,t),n)},n.flatten=Li,n.flattenDeep=function(e){return(e==null?0:e.length)?_e(e,1/0):[]},n.flattenDepth=function(e,t){return(e==null?0:e.length)?_e(e,t=void 0===t?1:C(t)):[]},n.flip=function(e){return on(e,512)},n.flow=Ti,n.flowRight=Fi,n.fromPairs=function(e){for(var t,n=-1,o=e==null?0:e.length,s={};++n<o;)t=e[n],s[t[0]]=t[1];return s},n.functions=function(e){return e==null?[]:Yn(e,ye(e))},n.functionsIn=function(e){return e==null?[]:Yn(e,We(e))},n.groupBy=ua,n.initial=function(e){return(e==null?0:e.length)?It(e,0,-1):[]},n.intersection=$r,n.intersectionBy=Vr,n.intersectionWith=Br,n.invert=jr,n.invertBy=yr,n.invokeMap=ha,n.iteratee=qs,n.keyBy=ma,n.keys=ye,n.keysIn=We,n.map=Ss,n.mapKeys=function(e,t){var n={};return t=u(t,3),Qt(e,function(e,s,o){an(n,t(e,s,o),e)}),n},n.mapValues=function(e,t){var n={};return t=u(t,3),Qt(e,function(e,s,o){an(n,s,t(e,s,o))}),n},n.matches=function(e){return oa(zt(e,1))},n.matchesProperty=function(e,t){return Gi(e,zt(t,1))},n.memoize=_s,n.merge=xr,n.mergeWith=ea,n.method=ki,n.methodOf=Ei,n.mixin=Ds,n.negate=bs,n.nthArg=function(e){return e=C(e),W(function(t){return Ui(t,e)})},n.omit=Er,n.omitBy=function(e,t){return Ji(e,bs(u(t)))},n.once=function(e){return ja(2,e)},n.orderBy=function(e,t,n,s){return e==null?[]:(y(t)||(t=t==null?[]:[t]),y(n=s?void 0:n)||(n=n==null?[]:[n]),Ho(e,t,n))},n.over=ec,n.overArgs=$a,n.overEvery=tc,n.overSome=nc,n.partial=jo,n.partialRight=Sa,n.partition=pa,n.pick=kr,n.pickBy=Ji,n.property=yi,n.propertyOf=function(e){return function(t){return e==null?void 0:On(e,t)}},n.pull=Vi,n.pullAll=$i,n.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ls(e,t,u(n,2)):e},n.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Ls(e,t,void 0,n):e},n.pullAt=Wi,n.range=ji,n.rangeRight=ci,n.rearg=sr,n.reject=function(e,t){return(y(e)?v:Da)(e,bs(u(t,3)))},n.remove=function(e,t){if(n=[],!e||!e.length)return n;var n,o,s=-1,i=[],a=e.length;for(t=u(t,3);++s<a;)o=e[s],t(o,s,e)&&(n.push(o),i.push(s));return Ai(e,i),n},n.rest=function(e,t){if("function"!=typeof e)throw new Kt(d);return W(e,t=void 0===t?t:C(t))},n.reverse=Vs,n.sampleSize=function(e,t,n){return t=(n?ke(e,t,n):void 0===t)?1:C(t),(y(e)?Wa:Qr)(e,t)},n.set=function(e,t,n){return e==null?e:Pn(e,t,n)},n.setWith=function(e,t,n,s){return s="function"==typeof s?s:void 0,e==null?e:Pn(e,t,n,s)},n.shuffle=function(e){return(y(e)?Ua:Zr)(e)},n.slice=function(e,t,n){var s=e==null?0:e.length;return s?(n&&"number"!=typeof n&&ke(e,t,n)?(t=0,n=s):(t=t==null?0:C(t),n=void 0===n?s:C(n)),It(e,t,n)):[]},n.sortBy=ga,n.sortedUniq=function(e){return e&&e.length?fi(e):[]},n.sortedUniqBy=function(e,t){return e&&e.length?fi(e,u(t,2)):[]},n.split=function(e,t,n){return n&&"number"!=typeof n&&ke(e,t,n)&&(t=n=void 0),(n=void 0===n?4294967295:n>>>0)?(e=se(e))&&("string"==typeof t||t!=null&&!fs(t))&&!(t=gt(t))&&E(e)?dn(m(e),0,n):e.split(t,n):[]},n.spread=function(e,t){if("function"!=typeof e)throw new Kt(d);return t=t==null?0:ge(C(t),0),W(function(n){var s=n[t],o=dn(n,0,t);return s&&b(o,s),r(e,this,o)})},n.tail=function(e){var t=e==null?0:e.length;return t?It(e,1,t):[]},n.take=function(e,t,n){return e&&e.length?It(e,0,(t=n||void 0===t?1:C(t))<0?0:t):[]},n.takeRight=function(e,t,n){var s=e==null?0:e.length;return s?It(e,(t=s-(t=n||void 0===t?1:C(t)))<0?0:t,s):[]},n.takeRightWhile=function(e,t){return e&&e.length?xs(e,u(t,3),!1,!0):[]},n.takeWhile=function(e,t){return e&&e.length?xs(e,u(t,3)):[]},n.tap=function(e,t){return t(e),e},n.throttle=function(e,t,n){var s=!0,o=!0;if("function"!=typeof e)throw new Kt(d);return de(n)&&(s="leading"in n?!!n.leading:s,o="trailing"in n?!!n.trailing:o),wa(e,t,{leading:s,maxWait:t,trailing:o})},n.thru=Ms,n.toArray=Ma,n.toPairs=go,n.toPairsIn=_o,n.toPath=function(e){return y(e)?i(e,Xt):pt(e)?[e]:Pe(Bs(se(e)))},n.toPlainObject=va,n.transform=function(e,t,n){var s,o=y(e),i=o||en(e)||_n(e);return(t=u(t,4),n==null)&&(s=e&&e.constructor,n=i?o?new s:[]:de(e)&&cn(s)?bn(ls(e)):{}),(i?l:Qt)(e,function(e,s,o){return t(n,e,s,o)}),n},n.unary=function(e){return ba(e,1)},n.union=Dr,n.unionBy=zr,n.unionWith=Tr,n.uniq=function(e){return e&&e.length?hn(e):[]},n.uniqBy=function(e,t){return e&&e.length?hn(e,u(t,2)):[]},n.uniqWith=function(e,t){return t="function"==typeof t?t:void 0,e&&e.length?hn(e,void 0,t):[]},n.unset=function(e,t){return e==null||to(e,t)},n.unzip=Ks,n.unzipWith=Xi,n.update=function(e,t,n){return e==null?e:ui(e,t,co(n))},n.updateWith=function(e,t,n,s){return s="function"==typeof s?s:void 0,e==null?e:ui(e,t,co(n),s)},n.values=kn,n.valuesIn=function(e){return e==null?[]:K(e,We(e))},n.without=Fr,n.words=Hi,n.wrap=function(e,t){return jo(co(t),e)},n.xor=Mr,n.xorBy=Ar,n.xorWith=Cr,n.zip=vr,n.zipObject=function(e,t){return li(e||[],t||[],Wn)},n.zipObjectDeep=function(e,t){return li(e||[],t||[],Pn)},n.zipWith=ur,n.entries=go,n.entriesIn=_o,n.extend=na,n.extendWith=Es,Ds(n,n),n.add=cc,n.attempt=Ao,n.camelCase=Yi,n.capitalize=qi,n.ceil=lc,n.clamp=function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=Ht(n))==n?n:0),void 0!==t&&(t=(t=Ht(t))==t?t:0),vn(Ht(e),t,n)},n.clone=function(e){return zt(e,4)},n.cloneDeep=function(e){return zt(e,5)},n.cloneDeepWith=function(e,t){return zt(e,5,t="function"==typeof t?t:void 0)},n.cloneWith=function(e,t){return zt(e,4,t="function"==typeof t?t:void 0)},n.conformsTo=function(e,t){return t==null||Pa(e,t,ye(t))},n.deburr=Ki,n.defaultTo=function(e,t){return e==null||e!=e?t:e},n.divide=dc,n.endsWith=function(e,t,n){e=se(e),t=gt(t);var s=e.length,o=n=void 0===n?s:vn(C(n),0,s);return(n-=t.length)>=0&&e.slice(n,o)==t},n.eq=qt,n.escape=function(e){return(e=se(e))&&Mt.test(e)?e.replace(Me,Fe):e},n.escapeRegExp=function(e){return(e=se(e))&&bt.test(e)?e.replace(G,"\\$&"):e},n.every=function(e,t,n){var s=y(e)?Ue:Ya;return n&&ke(e,t,n)&&(t=void 0),s(e,u(t,3))},n.find=ra,n.findIndex=Di,n.findKey=function(e,t){return Ve(e,u(t,3),Qt)},n.findLast=ca,n.findLastIndex=Ni,n.findLastKey=function(e,t){return Ve(e,u(t,3),$s)},n.floor=uc,n.forEach=la,n.forEachRight=da,n.forIn=function(e,t){return e==null?e:cs(e,u(t,3),We)},n.forInRight=function(e,t){return e==null?e:ko(e,u(t,3),We)},n.forOwn=function(e,t){return e&&Qt(e,u(t,3))},n.forOwnRight=function(e,t){return e&&$s(e,u(t,3))},n.get=Js,n.gt=nr,n.gte=tr,n.has=function(e,t){return e!=null&&ai(e,t,or)},n.hasIn=eo,n.head=Ri,n.identity=$e,n.includes=function(e,t,n,s){e=Te(e)?e:kn(e),n=n&&!s?C(n):0;var o=e.length;return n<0&&(n=ge(o+n,0)),ws(e)?n<=o&&e.indexOf(t,n)>-1:!!o&&x(e,t,n)>-1},n.indexOf=function(e,t,n){var s,o=e==null?0:e.length;return o?(s=n==null?0:C(n),s<0&&(s=ge(o+s,0)),x(e,t,s)):-1},n.inRange=function(e,t,n){return t=sn(t),void 0===n?(n=t,t=0):n=sn(n),function(e,t,n){return e>=xe(t,n)&&e<ge(t,n)}(e=Ht(e),t,n)},n.invoke=_r,n.isArguments=yn,n.isArray=y,n.isArrayBuffer=qa,n.isArrayLike=Te,n.isArrayLikeObject=pe,n.isBoolean=function(e){return!0===e||!1===e||me(e)&&Ee(e)==z},n.isBuffer=en,n.isDate=Ia,n.isElement=function(e){return me(e)&&1===e.nodeType&&!Rn(e)},n.isEmpty=function(e){if(e==null)return!0;if(Te(e)&&(y(e)||"string"==typeof e||"function"==typeof e.splice||en(e)||_n(e)||yn(e)))return!e.length;var n,t=we(e);if(t==f||t==h)return!e.size;if(zn(e))return!Qs(e).length;for(n in e)if(ie.call(e,n))return!1;return!0},n.isEqual=function(e,t){return In(e,t)},n.isEqualWith=function(e,t,n){var s=(n="function"==typeof n?n:void 0)?n(e,t):void 0;return void 0===s?In(e,t,void 0,n):!!s},n.isError=Co,n.isFinite=function(e){return"number"==typeof e&&ta(e)},n.isFunction=cn,n.isInteger=Bi,n.isLength=es,n.isMap=Oo,n.isMatch=function(e,t){return e===t||Ns(e,t,vo(t))},n.isMatchWith=function(e,t,n){return n="function"==typeof n?n:void 0,Ns(e,t,vo(t),n)},n.isNaN=function(e){return Na(e)&&e!=+e},n.isNative=function(e){if(mi(e))throw new uo("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return _a(e)},n.isNil=function(e){return e==null},n.isNull=function(e){return null===e},n.isNumber=Na,n.isObject=de,n.isObjectLike=me,n.isPlainObject=Rn,n.isRegExp=fs,n.isSafeInteger=function(e){return Bi(e)&&e>=-9007199254740991&&e<=9007199254740991},n.isSet=ho,n.isString=ws,n.isSymbol=pt,n.isTypedArray=_n,n.isUndefined=function(e){return void 0===e},n.isWeakMap=function(e){return me(e)&&we(e)==M},n.isWeakSet=function(e){return me(e)&&"[object WeakSet]"==Ee(e)},n.join=function(e,t){return e==null?"":hr.call(e,t)},n.kebabCase=Nr,n.last=Ut,n.lastIndexOf=function(e,t,n){var s,o=e==null?0:e.length;return o?(s=o,void 0!==n&&(s=(s=C(n))<0?ge(o+s,0):xe(s,o-1)),t==t?function(e,t,n){for(var s=n+1;s--;)if(e[s]===t)return s;return s}(e,t,s):H(e,Be,s,!0)):-1},n.lowerCase=Lr,n.lowerFirst=Rr,n.lt=za,n.lte=Ta,n.max=function(e){return e&&e.length?qn(e,$e,yo):void 0},n.maxBy=function(e,t){return e&&e.length?qn(e,u(t,2),yo):void 0},n.mean=function(e){return Ie(e,$e)},n.meanBy=function(e,t){return Ie(e,u(t,2))},n.min=function(e){return e&&e.length?qn(e,$e,Gs):void 0},n.minBy=function(e,t){return e&&e.length?qn(e,u(t,2),Gs):void 0},n.stubArray=zo,n.stubFalse=Fo,n.stubObject=function(){return{}},n.stubString=function(){return""},n.stubTrue=function(){return!0},n.multiply=mc,n.nth=function(e,t){return e&&e.length?Ui(e,C(t)):void 0},n.noConflict=function(){return a._===this&&(a._=Yr),this},n.noop=Is,n.now=Vn,n.pad=function(e,t,n){e=se(e);var s,o=(t=C(t))?_(e):0;return!t||o>=t?e:(s=(t-o)/2,Jn(Os(s),n)+e+Jn(ys(s),n))},n.padEnd=function(e,t,n){e=se(e);var s=(t=C(t))?_(e):0;return t&&s<t?e+Jn(t-s,n):e},n.padStart=function(e,t,n){e=se(e);var s=(t=C(t))?_(e):0;return t&&s<t?Jn(t-s,n)+e:e},n.parseInt=function(e,t,n){return n||t==null?t=0:t&&(t=+t),ir(se(e).replace(oe,""),t||0)},n.random=function(e,t,n){if(n&&"boolean"!=typeof n&&ke(e,t,n)&&(t=n=void 0),void 0===n&&("boolean"==typeof t?(n=t,t=void 0):"boolean"==typeof e&&(n=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=sn(e),void 0===t?(t=e,e=0):t=sn(t)),e>t){var s,o=e;e=t,t=o}return n||e%1||t%1?(s=Aa(),xe(e+s*(t-e+_t("1e-"+((s+"").length-1))),t)):Ps(e,t)},n.reduce=function(e,t,n){var s=y(e)?Y:He,o=arguments.length<3;return s(e,u(t,4),n,o,ln)},n.reduceRight=function(e,t,n){var s=y(e)?ft:He,o=arguments.length<3;return s(e,u(t,4),n,o,To)},n.repeat=function(e,t,n){return t=(n?ke(e,t,n):void 0===t)?1:C(t),Hs(se(e),t)},n.replace=function(){var e=arguments,t=se(e[0]);return e.length<3?t:t.replace(e[1],e[2])},n.result=function(e,t,n){var s,i=-1,o=(t=mn(t,e)).length;for(o||(o=1,e=void 0);++i<o;)s=e?.[Xt(t[i])],void 0===s&&(i=o,s=n),e=cn(s)?s.call(e):s;return e},n.round=fc,n.runInContext=e,n.sample=function(e){return(y(e)?Va:Xr)(e)},n.size=function(e){if(e==null)return 0;if(Te(e))return ws(e)?_(e):e.length;var t=we(e);return t==f||t==h?e.size:Qs(e).length},n.snakeCase=Pr,n.some=function(e,t,n){var s=y(e)?q:sc;return n&&ke(e,t,n)&&(t=void 0),s(e,u(t,3))},n.sortedIndex=function(e,t){return As(e,t)},n.sortedIndexBy=function(e,t,n){return Xs(e,t,u(n,2))},n.sortedIndexOf=function(e,t){var n,s=e==null?0:e.length;return s&&(n=As(e,t),n<s&&qt(e[n],t))?n:-1},n.sortedLastIndex=function(e,t){return As(e,t,!0)},n.sortedLastIndexBy=function(e,t,n){return Xs(e,t,u(n,2),!0)},n.sortedLastIndexOf=function(e,t){if(e==null?0:e.length){var n=As(e,t,!0)-1;if(qt(e[n],t))return n}return-1},n.startCase=Hr,n.startsWith=function(e,t,n){return e=se(e),n=n==null?0:vn(C(n),0,e.length),t=gt(t),e.slice(n,n+t.length)==t},n.subtract=pc,n.sum=function(e){return e&&e.length?ee(e,$e):0},n.sumBy=function(e,t){return e&&e.length?ee(e,u(t,2)):0},n.template=function(e,t,s){r=n.templateSettings,s&&ke(e,t,s)&&(t=void 0),e=se(e),t=Es({},t,r,Po);var i,a,r,c,m,h=Es({},t.imports,r.imports,Po),u=ye(h),f=K(h,u),l=0,d=t.interpolate||P,o="__p += '",p=wo((t.escape||P).source+"|"+d.source+"|"+(d===Re?it:P).source+"|"+(t.evaluate||P).source+"|$","g"),g="//# sourceURL="+(ie.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Et+"]")+`
`;if(e.replace(p,function(t,n,s,i,a,r){return s||(s=i),o+=e.slice(l,r).replace(Je,Rt),n&&(m=!0,o+=`' +
__e(`+n+`) +
'`),a&&(c=!0,o+=`';
`+a+`;
__p += '`),s&&(o+=`' +
((__t = (`+s+`)) == null ? '' : __t) +
'`),l=r+t.length,t}),o+=`';
`,a=ie.call(t,"variable")&&t.variable,a){if(lt.test(a))throw new uo("Invalid `variable` option passed into `_.template`")}else o=`with (obj) {
`+o+`
}
`;if(o=(c?o.replace(Wt,""):o).replace(Vt,"$1").replace(Bt,"$1;"),o="function("+(a||"obj")+`) {
`+(a?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(m?", __e = _.escape":"")+(c?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+o+`return __p
}`,i=Ao(function(){return Uo(u,g+"return "+o).apply(void 0,f)}),i.source=o,Co(i))throw i;return i},n.times=function(e,t){if((e=C(e))<1||e>9007199254740991)return[];var s,n=4294967295,o=xe(e,4294967295);e-=4294967295;for(s=te(o,t=u(t));++n<e;)t(n);return s},n.toFinite=sn,n.toInteger=C,n.toLength=Ea,n.toLower=function(e){return se(e).toLowerCase()},n.toNumber=Ht,n.toSafeInteger=function(e){return e?vn(C(e),-9007199254740991,9007199254740991):0===e?e:0},n.toString=se,n.toUpper=function(e){return se(e).toUpperCase()},n.trim=function(e,t,n){if((e=se(e))&&(n||void 0===t))return Le(e);if(!e||!(t=gt(t)))return e;var s=m(e),o=m(t);return dn(s,Ne(s,o),De(s,o)+1).join("")},n.trimEnd=function(e,t,n){if((e=se(e))&&(n||void 0===t))return e.slice(0,Oe(e)+1);if(!e||!(t=gt(t)))return e;var s=m(e);return dn(s,0,De(s,m(t))+1).join("")},n.trimStart=function(e,t,n){if((e=se(e))&&(n||void 0===t))return e.replace(oe,"");if(!e||!(t=gt(t)))return e;var s=m(e);return dn(s,Ne(s,m(t))).join("")},n.truncate=function(e,t){var n,s,o,a,c,l,d,u,h,r=30,i="...";if(de(t)&&(n="separator"in t?t.separator:n,r="length"in t?C(t.length):r,i="omission"in t?gt(t.omission):i),c=(e=se(e)).length,E(e)&&(a=m(e),c=a.length),r>=c)return e;if(s=r-_(i),s<1)return i;if(o=a?dn(a,0,s).join(""):e.slice(0,s),void 0===n)return o+i;if(a&&(s+=o.length-s),fs(n)){if(e.slice(s).search(n)){h=o;for(n.global||(n=wo(n.source,se(Ke.exec(n))+"g")),n.lastIndex=0;u=n.exec(h);)l=u.index;o=o.slice(0,void 0===l?s:l)}}else e.indexOf(gt(n),s)!=s&&(d=o.lastIndexOf(n),d>-1&&(o=o.slice(0,d)));return o+i},n.unescape=function(e){return(e=se(e))&&Ft.test(e)?e.replace(Se,je):e},n.uniqueId=function(e){var t=++Jr;return se(e)+t},n.upperCase=Ir,n.upperFirst=xo,n.each=la,n.eachRight=da,n.first=Ri,Ds(n,(oo={},Qt(n,function(e,t){ie.call(n.prototype,t)||(oo[t]=e)}),oo),{chain:!1}),n.VERSION="4.17.21",l(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){n[e].placeholder=n}),l(["drop","take"],function(e,t){J.prototype[e]=function(n){n=void 0===n?1:ge(C(n),0);var s=this.__filtered__&&!t?new J(this):this.clone();return s.__filtered__?s.__takeCount__=xe(n,s.__takeCount__):s.__views__.push({size:xe(n,4294967295),type:e+(s.__dir__<0?"Right":"")}),s},J.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),l(["filter","map","takeWhile"],function(e,t){var n=t+1,s=1==n||3==n;J.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:u(e,3),type:n}),t.__filtered__=t.__filtered__||s,t}}),l(["head","last"],function(e,t){var n="take"+(t?"Right":"");J.prototype[e]=function(){return this[n](1).value()[0]}}),l(["initial","tail"],function(e,t){var n="drop"+(t?"":"Right");J.prototype[e]=function(){return this.__filtered__?new J(this):this[n](1)}}),J.prototype.compact=function(){return this.filter($e)},J.prototype.find=function(e){return this.filter(e).head()},J.prototype.findLast=function(e){return this.reverse().find(e)},J.prototype.invokeMap=W(function(e,t){return"function"==typeof e?new J(this):this.map(function(n){return Tn(n,e,t)})}),J.prototype.reject=function(e){return this.filter(bs(u(e)))},J.prototype.slice=function(e,t){e=C(e);var n=this;return n.__filtered__&&(e>0||t<0)?new J(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),void 0!==t&&(n=(t=C(t))<0?n.dropRight(-t):n.take(t-e)),n)},J.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},J.prototype.toArray=function(){return this.take(4294967295)},Qt(J.prototype,function(e,t){var a=/^(?:filter|find|map|reject)|While$/.test(t),s=/^(?:head|last)$/.test(t),o=n[s?"take"+("last"==t?"Right":""):t],i=s||/^find/.test(t);o&&(n.prototype[t]=function(){var t,r=this.__wrapped__,c=s?[1]:arguments,l=r instanceof J,h=c[0],d=l||y(r),m=function(e){var t=o.apply(n,b([e],c));return s&&u?t[0]:t};d&&a&&"function"==typeof h&&1!=h.length&&(l=d=!1);var u=this.__chain__,g=!!this.__actions__.length,f=i&&!u,p=l&&!g;return!i&&d?(r=p?r:new J(this),t=e.apply(r,c),t.__actions__.push({func:Ms,args:[m],thisArg:void 0}),new wt(t,u)):f&&p?e.apply(this,c):(t=this.thru(m),f?s?t.value()[0]:t.value():t)})}),l(["pop","push","shift","sort","splice","unshift"],function(e){var t=Zn[e],s=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",o=/^(?:pop|shift)$/.test(e);n.prototype[e]=function(){var e,n=arguments;return o&&!this.__chain__?(e=this.value(),t.apply(y(e)?e:[],n)):this[s](function(e){return t.apply(y(e)?e:[],n)})}}),Qt(J.prototype,function(e,t){var s,o=n[t];o&&(s=o.name+"",ie.call(Sn,s)||(Sn[s]=[]),Sn[s].push({name:t,func:o}))}),Sn[rs(void 0,2).name]=[{name:"wrapper",func:void 0}],J.prototype.clone=function(){var e=new J(this.__wrapped__);return e.__actions__=Pe(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Pe(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Pe(this.__views__),e},J.prototype.reverse=function(){if(this.__filtered__){var e=new J(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},J.prototype.value=function(){var t,s,o,e=this.__wrapped__.value(),g=this.__dir__,a=y(e),f=g<0,c=a?e.length:0,i=function(e,t,n){for(var s,o,i=-1,a=n.length;++i<a;)switch(o=n[i],s=o.size,o.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=xe(t,e+s);break;case"takeRight":e=ge(e,t-s)}return{start:e,end:t}}(0,c,this.__views__),p=i.start,r=i.end,n=r-p,_=f?r:p-1,d=this.__iteratees__,j=d.length,h=0,m=xe(n,this.__takeCount__);if(!a||!f&&c==n&&m==n)return di(e,this.__actions__);o=[];n:for(;n--&&h<m;){for(s=-1,t=e[_+=g];++s<j;){var v=d[s],b=v.iteratee,u=v.type,l=b(t);if(2==u)t=l;else if(!l){if(1==u)continue n;break n}}o[h++]=t}return o},n.prototype.at=ia,n.prototype.chain=function(){return sa(this)},n.prototype.commit=function(){return new wt(this.value(),this.__chain__)},n.prototype.next=function(){void 0===this.__values__&&(this.__values__=Ma(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?void 0:this.__values__[this.__index__++]}},n.prototype.plant=function(e){for(var t,s,o,n=this;n instanceof os;)t=Mi(n),t.__index__=0,t.__values__=void 0,s?o.__wrapped__=t:s=t,o=t,n=n.__wrapped__;return o.__wrapped__=e,s},n.prototype.reverse=function(){var e,t=this.__wrapped__;return t instanceof J?(e=t,this.__actions__.length&&(e=new J(this)),(e=e.reverse()).__actions__.push({func:Ms,args:[Vs],thisArg:void 0}),new wt(e,this.__chain__)):this.thru(Vs)},n.prototype.toJSON=n.prototype.valueOf=n.prototype.value=function(){return di(this.__wrapped__,this.__actions__)},n.prototype.first=n.prototype.head,Ln&&(n.prototype[Ln]=function(){return this}),n}(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?(a._=g,define(function(){return g})):y?((y.exports=g)._=g,ie._=g):a._=g}).call(this)}).call(this,n(0),n(3)(e))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(1);!function(){function n(){if(!e.wp_consent_type&&!e.wp_fallback_consent_type)return;const n={};let s=!1;Object.entries(e._googlesitekitConsentCategoryMap).forEach(([t,o])=>{e.wp_has_consent&&e.wp_has_consent(t)&&(o.forEach(e=>{n[e]="granted"}),s=s||!!o.length)}),s&&!Object(t.isEqual)(n,e._googlesitekitConsents)&&(e.gtag("consent","update",n),e._googlesitekitConsents=n)}e.document.addEventListener("wp_listen_for_consent_change",function(t){if(t.detail){const n={};let s=!1;Object.keys(t.detail).forEach(o=>{if(e._googlesitekitConsentCategoryMap[o]){const a="allow"===t.detail[o]?"granted":"denied",i=e._googlesitekitConsentCategoryMap[o];i.forEach(e=>{n[e]=a}),s=!!i.length}}),s&&e.gtag("consent","update",n)}}),e.document.addEventListener("wp_consent_type_defined",n),e.document.addEventListener("DOMContentLoaded",function(){e.waitfor_consent_hook||n()})}()}.call(this,n(0))},function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);
/*! This file is auto-generated */
(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{setup:()=>p,speak:()=>d});const n=window.wp.domReady;var o=e.n(n);function i(e="polite"){const t=document.createElement("div");t.id=`a11y-speak-${e}`,t.className="a11y-speak-region",t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true");const{body:n}=document;return n&&n.appendChild(t),t}const a=window.wp.i18n;let r="";function d(e,t){!function(){const e=document.getElementsByClassName("a11y-speak-region"),t=document.getElementById("a11y-speak-intro-text");for(let t=0;t<e.length;t++)e[t].textContent="";t&&t.setAttribute("hidden","hidden")}(),e=function(e){return e=e.replace(/<[^<>]+>/g," "),r===e&&(e+=" "),r=e,e}(e);const n=document.getElementById("a11y-speak-intro-text"),o=document.getElementById("a11y-speak-assertive"),i=document.getElementById("a11y-speak-polite");o&&"assertive"===t?o.textContent=e:i&&(i.textContent=e),n&&n.removeAttribute("hidden")}function p(){const e=document.getElementById("a11y-speak-intro-text"),t=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===e&&function(){const e=document.createElement("p");e.id="a11y-speak-intro-text",e.className="a11y-speak-intro-text",e.textContent=(0,a.__)("Notifications"),e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("hidden","hidden");const{body:t}=document;t&&t.appendChild(e)}(),null===t&&i("assertive"),null===n&&i("polite")}o()(p),(window.wp=window.wp||{}).a11y=t})();;
(e=>{"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(A){var a,e=navigator.userAgent,R=/iphone/i.test(e),S=/chrome/i.test(e),T=/android/i.test(e);A.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},A.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden")&&this.get(0)===document.activeElement)return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,l){var n,b,u,k,y,x,j,e;return!t&&0<this.length?(e=A(this[0]).data(A.mask.dataName))?e():void 0:(l=A.extend({autoclear:A.mask.autoclear,placeholder:A.mask.placeholder,completed:null},l),n=A.mask.definitions,b=[],u=x=t.length,k=null,t=String(t),A.each(t.split(""),function(e,t){"?"==t?(x--,u=e):n[t]?(b.push(new RegExp(n[t])),null===k&&(k=b.length-1),e<u&&(y=b.length-1)):b.push(null)}),this.trigger("unmask").each(function(){var s=A(this),f=A.map(t.split(""),function(e,t){if("?"!=e)return n[e]?g(t):e}),o=f.join(""),i=s.val();function h(){if(l.completed){for(var e=k;e<=y;e++)if(b[e]&&f[e]===g(e))return;l.completed.call(s)}}function g(e){return e<l.placeholder.length?l.placeholder.charAt(e):l.placeholder.charAt(0)}function m(e){for(;++e<x&&!b[e];);return e}function d(e,t){var n,a;if(!(e<0)){for(n=e,a=m(t);n<x;n++)if(b[n]){if(!(a<x&&b[n].test(f[a])))break;f[n]=f[a],f[a]=g(a),a=m(a)}v(),s.caret(Math.max(k,e))}}function r(e){c(),s.val()!=i&&s.change()}function p(e,t){for(var n=e;n<t&&n<x;n++)b[n]&&(f[n]=g(n))}function v(){s.val(f.join(""))}function c(e){for(var t,n=s.val(),a=-1,i=0,r=0;i<x;i++)if(b[i]){for(f[i]=g(i);r++<n.length;)if(t=n.charAt(r-1),b[i].test(t)){f[i]=t,a=i;break}if(r>n.length){p(i+1,x);break}}else f[i]===n.charAt(r)&&r++,i<u&&(a=i);return e?v():a+1<u?l.autoclear||f.join("")===o?(s.val()&&s.val(""),p(0,x)):v():(v(),s.val(s.val().substring(0,a+1))),u?i:k}s.data(A.mask.dataName,function(){return A.map(f,function(e,t){return b[t]&&e!=g(t)?e:null}).join("")}),s.one("unmask",function(){s.off(".mask").removeData(A.mask.dataName)}).on("focus.mask",function(){var e;s.prop("readonly")||(clearTimeout(a),i=s.val(),e=c(),a=setTimeout(function(){s.get(0)===document.activeElement&&(v(),e==t.replace("?","").length?s.caret(0,e):s.caret(e))},10))}).on("blur.mask",r).on("keydown.mask",function(e){var t,n,a;s.prop("readonly")||(t=e.which||e.keyCode,j=s.val(),8===t||46===t||R&&127===t?(n=(a=s.caret()).begin,(a=a.end)-n==0&&(n=46!==t?(e=>{for(;0<=--e&&!b[e];);return e})(n):a=m(n-1),a=46===t?m(a):a),p(n,a),d(n,a-1),e.preventDefault()):13===t?r.call(this,e):27===t&&(s.val(i),s.caret(0,c()),e.preventDefault()))}).on("keypress.mask",function(e){if(!s.prop("readonly")){var t,n,a,i=e.which||e.keyCode,r=s.caret();if(!(e.ctrlKey||e.altKey||e.metaKey||i<32)&&i&&13!==i){if(r.end-r.begin!=0&&(p(r.begin,r.end),d(r.begin,r.end-1)),(t=m(r.begin-1))<x&&(n=String.fromCharCode(i),b[t].test(n))){for(var o,c,l=t,u=g(t);l<x;l++)if(b[l]){if(o=m(l),c=f[l],f[l]=u,!(o<x&&b[o].test(c)))break;u=c}f[t]=n,v(),a=m(t),T?setTimeout(function(){A.proxy(A.fn.caret,s,a)()},0):s.caret(a),r.begin<=y&&h()}e.preventDefault()}}}).on("input.mask paste.mask",function(){s.prop("readonly")||setTimeout(function(){var e=c(!0);s.caret(e),h()},0)}),S&&T&&s.off("input.mask").on("input.mask",function(e){function t(){A.proxy(A.fn.caret,s,a.begin,a.begin)()}var n=s.val(),a=s.caret();if(j&&j.length&&j.length>n.length){for(c(!0);0<a.begin&&!b[a.begin-1];)a.begin--;if(0===a.begin)for(;a.begin<k&&!b[a.begin];)a.begin++}else{var i=c(!0),n=n.charAt(a.begin);a.begin<x&&(b[a.begin]?b[a.begin].test(n)&&a.begin++:a.begin=i)}setTimeout(t,0),h()}),c()}))}})});;
"use strict";(self.webpackChunkgravityforms=self.webpackChunkgravityforms||[]).push([[721],{17:function(t){t.exports=function(t,n){return{value:t,done:n}}},23:function(t,n,r){var e=r(9329),o=r(5376),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},78:function(t,n,r){var e=r(6733),o=r(8389),i=r(962),u=TypeError;t.exports=function(t,n){var r,c;if("string"===n&&o(r=t.toString)&&!i(c=e(r,t)))return c;if(o(r=t.valueOf)&&!i(c=e(r,t)))return c;if("string"!==n&&o(r=t.toString)&&!i(c=e(r,t)))return c;throw new u("Can't convert object to primitive value")}},79:function(t,n,r){var e=r(9617).f,o=r(6401),i=r(8979)("toStringTag");t.exports=function(t,n,r){t&&!r&&(t=t.prototype),t&&!o(t,i)&&e(t,i,{configurable:!0,value:n})}},213:function(t,n){n.f=Object.getOwnPropertySymbols},237:function(t){t.exports={}},394:function(t,n,r){var e=r(2697).IteratorPrototype,o=r(8584),i=r(8612),u=r(79),c=r(237),f=function(){return this};t.exports=function(t,n,r,a){var s=n+" Iterator";return t.prototype=o(e,{next:i(+!a,r)}),u(t,s,!1,!0),c[s]=f,t}},446:function(t,n,r){var e=r(9227),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},455:function(t,n,r){function e(t,n,r,e,o,i,u){try{var c=t[i](u),f=c.value}catch(t){return void r(t)}c.done?n(f):Promise.resolve(f).then(e,o)}function o(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var u=t.apply(n,r);function c(t){e(u,o,i,c,f,"next",t)}function f(t){e(u,o,i,c,f,"throw",t)}c(void 0)}))}}r.d(n,{A:function(){return o}})},469:function(t){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},527:function(t,n,r){r.d(n,{A:function(){return o}});var e=r(4914);function o(t,n,r){return(n=(0,e.A)(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}},565:function(t,n,r){var e=r(7383),o=r(8389),i=r(4937),u=r(4272),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return o(n)&&i(n.prototype,c(t))}},798:function(t,n,r){var e=r(4411),o=r(8389),i=e.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},877:function(t,n,r){var e=r(4411),o=r(3817),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},962:function(t,n,r){var e=r(8389),o=r(5387),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:e(t)||t===i}:function(t){return"object"==typeof t?null!==t:e(t)}},1154:function(t,n,r){var e=r(5920),o=r(5514);t.exports=function(t,n,r){try{return e(o(Object.getOwnPropertyDescriptor(t,n)[r]))}catch(t){}}},1409:function(t,n,r){var e=r(6805),o=r(2170),i=r(8742),u=function(t){return function(n,r,u){var c,f=e(n),a=i(f),s=o(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},1461:function(t,n,r){var e=r(8979),o=r(8584),i=r(9617).f,u=e("unscopables"),c=Array.prototype;void 0===c[u]&&i(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},1575:function(t,n,r){var e=r(7383),o=r(5920),i=r(8560),u=r(213),c=r(5735),f=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?f(n,r(t)):n}},1789:function(t,n,r){var e,o,i,u=r(798),c=r(4411),f=r(962),a=r(9915),s=r(6401),p=r(877),l=r(23),v=r(7285),y="Object already initialized",b=c.TypeError,h=c.WeakMap;if(u||p.state){var m=p.state||(p.state=new h);m.get=m.get,m.has=m.has,m.set=m.set,e=function(t,n){if(m.has(t))throw new b(y);return n.facade=t,m.set(t,n),n},o=function(t){return m.get(t)||{}},i=function(t){return m.has(t)}}else{var g=l("state");v[g]=!0,e=function(t,n){if(s(t,g))throw new b(y);return n.facade=t,a(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw new b("Incompatible receiver, "+t+" required");return r}}}},1814:function(t,n,r){var e=r(3237),o=TypeError;t.exports=function(t){if(e(t))throw new o("Can't call method on "+t);return t}},1873:function(t,n,r){function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}r.d(n,{A:function(){return e}})},2103:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2170:function(t,n,r){var e=r(9227),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},2411:function(t){t.exports=!1},2697:function(t,n,r){var e,o,i,u=r(9391),c=r(8389),f=r(962),a=r(8584),s=r(6371),p=r(7448),l=r(8979),v=r(2411),y=l("iterator"),b=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(e=o):b=!0),!f(e)||u((function(){var t={};return e[y].call(t)!==t}))?e={}:v&&(e=a(e)),c(e[y])||p(e,y,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:b}},2943:function(t,n,r){var e=r(5920),o=r(9391),i=r(4512),u=Object,c=e("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?c(t,""):u(t)}:u},3036:function(t,n,r){var e=r(6401),o=r(1575),i=r(3763),u=r(9617);t.exports=function(t,n,r){for(var c=o(n),f=u.f,a=i.f,s=0;s<c.length;s++){var p=c[s];e(t,p)||r&&e(r,p)||f(t,p,a(n,p))}}},3175:function(t,n,r){var e=r(1154),o=r(5735),i=r(4546);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=e(Object.prototype,"__proto__","set"))(r,[]),n=r instanceof Array}catch(t){}return function(r,e){return o(r),i(e),n?t(r,e):r.__proto__=e,r}}():void 0)},3237:function(t){t.exports=function(t){return null==t}},3332:function(t,n,r){var e=r(5920),o=r(6401),i=r(6805),u=r(1409).indexOf,c=r(7285),f=e([].push);t.exports=function(t,n){var r,e=i(t),a=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&f(s,r);for(;n.length>a;)o(e,r=n[a++])&&(~u(s,r)||f(s,r));return s}},3763:function(t,n,r){var e=r(7084),o=r(6733),i=r(4373),u=r(8612),c=r(6805),f=r(8745),a=r(6401),s=r(8669),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=c(t),n=f(n),s)try{return p(t,n)}catch(t){}if(a(t,n))return u(!o(i.f,t,n),t[n])}},3809:function(t,n,r){var e=r(7084),o=r(4542),i=r(9617),u=r(5735),c=r(6805),f=r(8784);n.f=e&&!o?Object.defineProperties:function(t,n){u(t);for(var r,e=c(n),o=f(n),a=o.length,s=0;a>s;)i.f(t,r=o[s++],e[r]);return t}},3817:function(t,n,r){var e=r(4411),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},4156:function(t,n,r){var e=r(9391),o=r(8389),i=/#|\.prototype\./,u=function(t,n){var r=f[c(t)];return r===s||r!==a&&(o(n)?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},f=u.data={},a=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},4272:function(t,n,r){var e=r(5007);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},4373:function(t,n){var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},4411:function(t,n,r){var e=function(t){return t&&t.Math===Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||e("object"==typeof this&&this)||function(){return this}()||Function("return this")()},4512:function(t,n,r){var e=r(5920),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},4542:function(t,n,r){var e=r(7084),o=r(9391);t.exports=e&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4546:function(t,n,r){var e=r(8389),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||e(t))return t;throw new i("Can't set "+o(t)+" as a prototype")}},4914:function(t,n,r){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}r.d(n,{A:function(){return o}})},4937:function(t,n,r){var e=r(5920);t.exports=e({}.isPrototypeOf)},4983:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},5007:function(t,n,r){var e=r(5724),o=r(9391),i=r(4411).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},5168:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},5376:function(t,n,r){var e=r(5920),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},5387:function(t){var n="object"==typeof document&&document.all,r=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r}},5514:function(t,n,r){var e=r(8389),o=r(4983),i=TypeError;t.exports=function(t){if(e(t))return t;throw new i(o(t)+" is not a function")}},5724:function(t,n,r){var e,o,i=r(4411),u=r(5168),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,s=a&&a.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},5735:function(t,n,r){var e=r(962),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw new i(o(t)+" is not an object")}},5920:function(t,n,r){var e=r(6344),o=Function.prototype,i=o.call,u=e&&o.bind.bind(i,i);t.exports=e?u:function(t){return function(){return i.apply(t,arguments)}}},6344:function(t,n,r){var e=r(9391);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6371:function(t,n,r){var e=r(6401),o=r(8389),i=r(8805),u=r(23),c=r(9731),f=u("IE_PROTO"),a=Object,s=a.prototype;t.exports=c?a.getPrototypeOf:function(t){var n=i(t);if(e(n,f))return n[f];var r=n.constructor;return o(r)&&n instanceof r?r.prototype:n instanceof a?s:null}},6401:function(t,n,r){var e=r(5920),o=r(8805),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},6454:function(t,n,r){var e=r(4411),o=r(3763).f,i=r(9915),u=r(7448),c=r(3817),f=r(3036),a=r(4156);t.exports=function(t,n){var r,s,p,l,v,y=t.target,b=t.global,h=t.stat;if(r=b?e:h?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.dontCallGetSet?(v=o(r,s))&&v.value:r[s],!a(b?s:y+(h?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},6733:function(t,n,r){var e=r(6344),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},6746:function(t,n,r){var e=r(5920),o=r(8389),i=r(877),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},6805:function(t,n,r){var e=r(2943),o=r(1814);t.exports=function(t){return e(o(t))}},7084:function(t,n,r){var e=r(9391);t.exports=!e((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},7113:function(t,n,r){r.d(n,{A:function(){return i}});var e=r(4914);function o(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(0,e.A)(o.key),o)}}function i(t,n,r){return n&&o(t.prototype,n),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}},7285:function(t){t.exports={}},7383:function(t,n,r){var e=r(4411),o=r(8389);t.exports=function(t,n){return arguments.length<2?(r=e[t],o(r)?r:void 0):e[t]&&e[t][n];var r}},7448:function(t,n,r){var e=r(8389),o=r(9617),i=r(8075),u=r(3817);t.exports=function(t,n,r,c){c||(c={});var f=c.enumerable,a=void 0!==c.name?c.name:n;if(e(r)&&i(r,a,c),c.global)f?t[n]=r:u(n,r);else{try{c.unsafe?t[n]&&(f=!0):delete t[n]}catch(t){}f?t[n]=r:o.f(t,n,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},7453:function(t,n,r){var e=r(7383);t.exports=e("document","documentElement")},7593:function(t,n,r){var e=r(6733),o=r(962),i=r(565),u=r(9950),c=r(78),f=r(8979),a=TypeError,s=f("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var r,f=u(t,s);if(f){if(void 0===n&&(n="default"),r=e(f,t,n),!o(r)||i(r))return r;throw new a("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},7920:function(t,n,r){var e=r(6805),o=r(1461),i=r(237),u=r(1789),c=r(9617).f,f=r(9552),a=r(17),s=r(2411),p=r(7084),l="Array Iterator",v=u.set,y=u.getterFor(l);t.exports=f(Array,"Array",(function(t,n){v(this,{type:l,target:e(t),index:0,kind:n})}),(function(){var t=y(this),n=t.target,r=t.index++;if(!n||r>=n.length)return t.target=void 0,a(void 0,!0);switch(t.kind){case"keys":return a(r,!1);case"values":return a(n[r],!1)}return a([r,n[r]],!1)}),"values");var b=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!s&&p&&"values"!==b.name)try{c(b,"name",{value:"values"})}catch(t){}},8075:function(t,n,r){var e=r(5920),o=r(9391),i=r(8389),u=r(6401),c=r(7084),f=r(9470).CONFIGURABLE,a=r(6746),s=r(1789),p=s.enforce,l=s.get,v=String,y=Object.defineProperty,b=e("".slice),h=e("".replace),m=e([].join),g=c&&!o((function(){return 8!==y((function(){}),"length",{value:8}).length})),d=String(String).split("String"),x=t.exports=function(t,n,r){"Symbol("===b(v(n),0,7)&&(n="["+h(v(n),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!u(t,"name")||f&&t.name!==n)&&(c?y(t,"name",{value:n,configurable:!0}):t.name=n),g&&r&&u(r,"arity")&&t.length!==r.arity&&y(t,"length",{value:r.arity});try{r&&u(r,"constructor")&&r.constructor?c&&y(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var e=p(t);return u(e,"source")||(e.source=m(d,"string"==typeof n?n:"")),t};Function.prototype.toString=x((function(){return i(this)&&l(this).source||a(this)}),"toString")},8079:function(t,n,r){function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=Array(n);r<n;r++)e[r]=t[r];return e}function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i,u,c=[],f=!0,a=!1;try{if(i=(r=r.call(t)).next,0===n){if(Object(r)!==r)return;f=!1}else for(;!(f=(e=i.call(r)).done)&&(c.push(e.value),c.length!==n);f=!0);}catch(t){a=!0,o=t}finally{try{if(!f&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{A:function(){return o}})},8389:function(t,n,r){var e=r(5387),o=e.all;t.exports=e.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},8560:function(t,n,r){var e=r(3332),o=r(2103).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},8584:function(t,n,r){var e,o=r(5735),i=r(3809),u=r(2103),c=r(7285),f=r(7453),a=r(9511),s=r(23),p="prototype",l="script",v=s("IE_PROTO"),y=function(){},b=function(t){return"<"+l+">"+t+"</"+l+">"},h=function(t){t.write(b("")),t.close();var n=t.parentWindow.Object;return t=null,n},m=function(){try{e=new ActiveXObject("htmlfile")}catch(t){}var t,n,r;m="undefined"!=typeof document?document.domain&&e?h(e):(n=a("iframe"),r="java"+l+":",n.style.display="none",f.appendChild(n),n.src=String(r),(t=n.contentWindow.document).open(),t.write(b("document.F=Object")),t.close(),t.F):h(e);for(var o=u.length;o--;)delete m[p][u[o]];return m()};c[v]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(y[p]=o(t),r=new y,y[p]=null,r[v]=t):r=m(),void 0===n?r:i.f(r,n)}},8612:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},8669:function(t,n,r){var e=r(7084),o=r(9391),i=r(9511);t.exports=!e&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8742:function(t,n,r){var e=r(446);t.exports=function(t){return e(t.length)}},8745:function(t,n,r){var e=r(7593),o=r(565);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},8784:function(t,n,r){var e=r(3332),o=r(2103);t.exports=Object.keys||function(t){return e(t,o)}},8805:function(t,n,r){var e=r(1814),o=Object;t.exports=function(t){return o(e(t))}},8979:function(t,n,r){var e=r(4411),o=r(9329),i=r(6401),u=r(5376),c=r(5007),f=r(4272),a=e.Symbol,s=o("wks"),p=f?a.for||a:a&&a.withoutSetter||u;t.exports=function(t){return i(s,t)||(s[t]=c&&i(a,t)?a[t]:p("Symbol."+t)),s[t]}},9227:function(t,n,r){var e=r(469);t.exports=function(t){var n=+t;return n!=n||0===n?0:e(n)}},9329:function(t,n,r){var e=r(2411),o=r(877);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.33.3",mode:e?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",source:"https://github.com/zloirock/core-js"})},9391:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9470:function(t,n,r){var e=r(7084),o=r(6401),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),f=c&&"something"===function(){}.name,a=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:f,CONFIGURABLE:a}},9511:function(t,n,r){var e=r(4411),o=r(962),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},9552:function(t,n,r){var e=r(6454),o=r(6733),i=r(2411),u=r(9470),c=r(8389),f=r(394),a=r(6371),s=r(3175),p=r(79),l=r(9915),v=r(7448),y=r(8979),b=r(237),h=r(2697),m=u.PROPER,g=u.CONFIGURABLE,d=h.IteratorPrototype,x=h.BUGGY_SAFARI_ITERATORS,w=y("iterator"),O="keys",S="values",j="entries",P=function(){return this};t.exports=function(t,n,r,u,y,h,A){f(r,n,u);var E,I,_,T=function(t){if(t===y&&M)return M;if(!x&&t&&t in F)return F[t];switch(t){case O:case S:case j:return function(){return new r(this,t)}}return function(){return new r(this)}},k=n+" Iterator",C=!1,F=t.prototype,R=F[w]||F["@@iterator"]||y&&F[y],M=!x&&R||T(y),D="Array"===n&&F.entries||R;if(D&&(E=a(D.call(new t)))!==Object.prototype&&E.next&&(i||a(E)===d||(s?s(E,d):c(E[w])||v(E,w,P)),p(E,k,!0,!0),i&&(b[k]=P)),m&&y===S&&R&&R.name!==S&&(!i&&g?l(F,"name",S):(C=!0,M=function(){return o(R,this)})),y)if(I={values:T(S),keys:h?M:T(O),entries:T(j)},A)for(_ in I)(x||C||!(_ in F))&&v(F,_,I[_]);else e({target:n,proto:!0,forced:x||C},I);return i&&!A||F[w]===M||v(F,w,M,{name:y}),b[n]=M,I}},9617:function(t,n,r){var e=r(7084),o=r(8669),i=r(4542),u=r(5735),c=r(8745),f=TypeError,a=Object.defineProperty,s=Object.getOwnPropertyDescriptor,p="enumerable",l="configurable",v="writable";n.f=e?i?function(t,n,r){if(u(t),n=c(n),u(r),"function"==typeof t&&"prototype"===n&&"value"in r&&v in r&&!r[v]){var e=s(t,n);e&&e[v]&&(t[n]=r.value,r={configurable:l in r?r[l]:e[l],enumerable:p in r?r[p]:e[p],writable:!1})}return a(t,n,r)}:a:function(t,n,r){if(u(t),n=c(n),u(r),o)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw new f("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},9731:function(t,n,r){var e=r(9391);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},9915:function(t,n,r){var e=r(7084),o=r(9617),i=r(8612);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},9950:function(t,n,r){var e=r(5514),o=r(3237);t.exports=function(t,n){var r=t[n];return o(r)?void 0:e(r)}}}]);;
!function(){"use strict";var e,t,r,n,o,a={428:function(e){e.exports=window.jQuery},1162:function(e,t,r){r.d(t,{Nl:function(){return d},ts:function(){return l},zj:function(){return s}});var n=r(527),o=r(455),a=r(9280),i=r.n(a);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(){var e=(0,o.A)(i().mark((function e(t,r){var n,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l(t)){e.next=3;break}return e.abrupt("return",null);case 3:if(void 0!==(n=d(t))){e.next=9;break}return e.next=7,f(t,r);case 7:o=e.sent,n=m(t,o);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,o.A)(i().mark((function e(t,r){var n,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("gform_ajax_nonce",window.gform_theme_config.config_nonce),n.append("action","gform_get_config"),n.append("args",JSON.stringify(r)),n.append("config_path",t),n.append("query_string",window.location.search.substring(1)),e.next=8,fetch(window.gform_theme_config.common.form.ajax.ajaxurl,{method:"POST",body:n});case 8:return o=e.sent,e.prev=9,e.next=12,o.json();case 12:o=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),o={success:!1,data:"There was an unknown error processing your request. Please try again."};case 18:if(o.success){e.next=22;break}return o.data?o.data:"There was an unknown error processing your request. Please try again.",e.abrupt("return",null);case 22:return e.abrupt("return",o.data);case 23:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t,r){return e.apply(this,arguments)}}(),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return e.split("/").reduce((function(e,t){return e&&e[t]}),t)},m=function(e,t){var r=e.split("/").slice(1).join("/"),n=d(r,t),o=e.split("/"),a=window;o.slice(0,-1).forEach((function(e){a[e]||(a[e]={}),a=a[e]}));var i=o[o.length-1];return a[i]=n,a[i]},l=function(e){return!!p(e)&&(e.startsWith("/")&&(e=e.substring(1)),e.endsWith("/")&&(e=e.substring(0,e.length-1)),e)},p=function(e){return"string"==typeof e&&e.match(/^[a-z0-9_\-/]+$/)};window.gform.config=window.gform.config||{},window.gform.config=c(c({},window.gform.config),{getConfig:s,updateConfig:m,cleanPath:l,getConfigViaAjax:f})},1295:function(e,t,r){var n=r(1873),o=r(7113),a=r(5798),i=function(){function e(t){(0,n.A)(this,e),this.currency=t}return(0,o.A)(e,[{key:"toNumber",value:function(t){return e.isNumeric(t)?parseFloat(t):e.cleanNumber(t,this.currency.symbol_right,this.currency.symbol_left,this.currency.decimal_separator)}},{key:"toMoney",value:function(t){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]||(t=e.cleanNumber(t,this.currency.symbol_right,this.currency.symbol_left,this.currency.decimal_separator)),!1===t)return"";var r="";"-"===(t+="")[0]&&(t=parseFloat(t.substr(1)),r="-");var n=this.numberFormat(t,this.currency.decimals,this.currency.decimal_separator,this.currency.thousand_separator);"0.00"===n&&(r="");var o=this.currency.symbol_left?this.currency.symbol_left+this.currency.symbol_padding:"",a=this.currency.symbol_right?this.currency.symbol_padding+this.currency.symbol_right:"";return n=r+e.htmlDecode(o)+n+e.htmlDecode(a)}},{key:"getCode",value:function(){return"code"in this.currency&&""!==this.currency.code&&this.currency.code}},{key:"numberFormat",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e=(e+"").replace(",","").replace(" ","");var a,i,u,c=isFinite(+e)?+e:0,s=isFinite(+t)?Math.abs(t):0,f="";return 0===parseInt(t)?(c+=1e-10,f=(""+Math.round(c)).split(".")):f=-1===parseInt(t)?(""+c).split("."):(a=c+=1e-10,i=s,u=Math.pow(10,i),""+Math.round(a*u)/u).split("."),f[0].length>3&&(f[0]=f[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,n)),o&&(f[1]||"").length<s&&(f[1]=f[1]||"",f[1]+=new Array(s-f[1].length+1).join("0")),f.join(r)}}],[{key:"cleanNumber",value:function(t,r,n,o){var a="",i="",u="",c=!1;t=(t=(t=(t+=" ").replace(/&.*?;/g,"")).replace(r,"")).replace(n,"");for(var s=0;s<t.length;s++)u=t.substr(s,1),parseInt(u,10)>=0&&parseInt(u,10)<=9||u===o?a+=u:"-"===u&&(c=!0);for(var f=0;f<a.length;f++)(u=a.substr(f,1))>="0"&&u<="9"?i+=u:u===o&&(i+=".");return c&&(i="-"+i),!!e.isNumeric(i)&&parseFloat(i)}},{key:"isNumeric",value:function(e){return(0,a.isNumber)(e)}},{key:"getDecimalSeparator",value:function(e){var t;switch(e){case"currency":t=window.gf_global.gf_currency_config.decimal_separator;break;case"decimal_comma":t=",";break;default:t="."}return t}},{key:"htmlDecode",value:function(e){var t,r,n=e,o=n.match(/&#[0-9]{1,5};/g);if(null!=o)for(var a=0;a<o.length;a++)n=(t=(r=o[a]).substring(2,r.length-1))>=-32768&&t<=65535?n.replace(r,String.fromCharCode(t)):n.replace(r,"");return n}}])}();t.A=i,window.gform=window.gform||{},window.gform.Currency=i},2557:function(e,t,r){r.d(t,{x:function(){return u}});var n=r(455),o=r(9280),a=r.n(o),i=r(1162),u=function(){var e=(0,n.A)(a().mark((function e(t,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t.endsWith("/")?t+r:t+"/"+r,e.abrupt("return",(0,i.zj)(t,{form_ids:[r]}));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();window.gform.config=window.gform.config||{},window.gform.config.getFormConfig=u},2590:function(e,t,r){var n=r(5798),o=function(e,t){window.jQuery(document).trigger("gform_post_render",[e,t]),(0,n.trigger)({event:"gform/postRender",native:!1,data:{formId:e,currentPage:t}}),(0,n.trigger)({event:"gform/post_render",native:!1,data:{formId:e,currentPage:t}})};t.A=o,window.gform.core=window.gform.core||{},window.gform.core.triggerPostRenderEvents=o},3771:function(e,t,r){r.d(t,{Jt:function(){return o},hZ:function(){return a},wB:function(){return i}});var n=r(5798),o=function(e,t){return f(e),(0,n.cloneDeep)(window.gform.state.data[e][t])},a=function(e,t,r){f(e);var o=window.gform.state.data[e][t];(0,n.isEqual)(o,r)||(window.gform.state.data[e][t]=(0,n.cloneDeep)(r),c(e,t,o))},i=function(e,t,r){d(e),window.gform.state.callbacks[e]=window.gform.state.callbacks[e]||[],u(e,t,r)||window.gform.state.callbacks[e].push({keys:t,callback:r})},u=function(e,t,r){return window.gform.state.callbacks[e].some((function(e){return(0,n.isEqual)(e.keys,t)&&e.callback===r}))},c=function(e,t,r){d(e),window.gform.state.callbacks[e].forEach((function(n){if(n.keys.includes(t)){var o=s(e,n.keys,t,r);n.callback(e,t,o)}}))},s=function(e,t,r,o){var a={};return t.forEach((function(t){var i=(0,n.cloneDeep)(window.gform.state.data[e][t]),u=r===t?(0,n.cloneDeep)(o):i;a[t]={prev:u,value:i}})),a},f=function(e){window.gform.state=window.gform.state||{},window.gform.state.data=window.gform.state.data||{},window.gform.state.data[e]=window.gform.state.data[e]||[]},d=function(e){window.gform.state=window.gform.state||{},window.gform.state.callbacks=window.gform.state.callbacks||{},window.gform.state.callbacks[e]=window.gform.state.callbacks[e]||[]};window.gform.state=window.gform.state||{get:o,set:a,watch:i}},3953:function(e,t,r){r.d(t,{Ec:function(){return C},d2:function(){return O},mj:function(){return h},s7:function(){return v},z2:function(){return _}});var n=r(8079),o=r(527),a=r(455),i=r(9280),u=r.n(i),c=r(5798),s=r(6201),f=r(428),d=r.n(f),m=r(9143);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,o.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return b(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var v="save-continue",w="send-link",_="submit",h="next",y="previous",k="ajax",x="iframe",j="postback",O=function(){var e=(0,a.A)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(event&&event.preventDefault(),r=t.closest("form"),(0,s.lt)(r),t=P(t,r)){e.next=6;break}return e.abrupt("return");case 6:if(D(r)){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,S(r,E(t),q(r));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){var t=(0,c.getNode)("#gform_".concat(e),document,!0);t&&t.addEventListener("submit",(function(e){e.preventDefault();var t=e.submitter||e.target.querySelector(".gform_button")||e.target.querySelector("input[type=submit]")||e.target.querySelector("button")||e.target;O(t)}))},S=function(){var e=(0,a.A)(u().mark((function e(t){var r,n,o,a,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:_,n=i.length>2&&void 0!==i[2]?i[2]:j,e.next=4,(0,c.filter)({event:"gform/submission/pre_submission",data:{form:t,submissionType:r,submissionMethod:n,displayConfirmation:!0,abort:!1}});case 4:if(!(o=e.sent).abort){e.next=8;break}return M(t),e.abrupt("return");case 8:a=o.displayConfirmation,n=o.submissionMethod,e.t0=r,e.next=e.t0===y?13:e.t0===v?15:18;break;case 13:return U(t),e.abrupt("break",18);case 15:return(0,c.getNode)("#gform_save_".concat(t.dataset.formid),t,!0).value="1",(0,c.speak)(window.gf_global.strings.formSaved),e.abrupt("break",18);case 18:n!==q(t)&&B(t,n),(0,c.consoleInfo)("Performing ".concat(r," type submission for form ").concat(t.dataset.formid," via ").concat(n,".")),e.t1=n,e.next=e.t1===k?23:26;break;case 23:return e.next=25,(0,m.rV)(t.dataset.formid,a);case 25:return e.abrupt("break",28);case 26:return N(t),e.abrupt("break",28);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){d()(e).trigger("submit",[!0])},E=function(e){var t=(0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)({},v,"gform_save_link"),w,""),h,"gform_next_button"),y,"gform_previous_button"),_,""),r=e.dataset.submissionType;if(r&&Object.keys(t).includes(r))return r;if("gform_send_resume_link_button"===e.name)return w;for(var a=e.classList,i=0,u=Object.entries(t);i<u.length;i++){var c=(0,n.A)(u[i],2),s=c[0],f=c[1];if(f&&a.contains(f))return s}return _},P=function(e,t){if(I(e))return e;var r,n=g((0,c.getNodes)("[data-submission-type='next'],.gform_next_button",!0,t,!0));try{for(n.s();!(r=n.n()).done;){var o=r.value;if(I(o))return o}}catch(e){n.e(e)}finally{n.f()}return!1},I=function(e){var t=e.closest(".gform_page");return(!t||T(t))&&T(e)&&!e.disabled},T=function(e){return"none"!==window.getComputedStyle(e).display},M=function(e){F(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0),(0,c.trigger)({event:"gform/submission/submission_aborted",data:{form:e},native:!1})},C=function(e){window.gformRemoveSpinner();var t=(0,c.getNodes)("#gform_ajax_spinner_".concat(e.dataset.formid),!0,document,!0);t&&t.forEach((function(e){e.remove()}))},D=function(e){return!window["gf_submitting_".concat(e.dataset.formid)]&&(window["gf_submitting_".concat(e.dataset.formid)]=!0,!0)},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;0===t?window["gf_submitting_".concat(e.dataset.formid)]=!1:setTimeout((function(){window["gf_submitting_".concat(e.dataset.formid)]=!1}),t)},U=function(e){var t=document.getElementById("gform_source_page_number_".concat(e.dataset.formid));document.getElementById("gform_target_page_number_".concat(e.dataset.formid)).value=parseInt(t.value)-1},B=function(e,t){if(t!==x){(0,c.getNode)("gform_submission_method_".concat(e.dataset.formid),e).value=t,e.removeAttribute("target");var r=(0,c.getNode)("[name=gform_ajax]",e,!0);r&&r.remove()}},q=function(e){var t=(0,c.getNode)("gform_submission_method_".concat(e.dataset.formid),e);return t?t.value:j};t.Ay=function(e){A(e)},window.gform.submission=p(p({},window.gform.submission||{}),{},{handleButtonClick:O,submitForm:S,getSubmissionMethod:q,removeSpinner:C,lockSubmission:D,unlockSubmission:F,SUBMISSION_TYPE_SUBMIT:_,SUBMISSION_TYPE_NEXT:h,SUBMISSION_TYPE_PREVIOUS:y,SUBMISSION_TYPE_SAVE_AND_CONTINUE:v,SUBMISSION_TYPE_SEND_LINK:w,SUBMISSION_METHOD_IFRAME:x,SUBMISSION_METHOD_POSTBACK:j,SUBMISSION_METHOD_AJAX:k})},5798:function(e){e.exports=window.gform.utils},6201:function(e,t,r){r.d(t,{Ui:function(){return o},Uy:function(){return a},g_:function(){return u},lt:function(){return s},rF:function(){return c}});var n=r(5798),o=function(e){var t=(0,n.getNode)("#gform_confirmation_wrapper_".concat(e),document,!0);if(t){var r=t.innerText;t.setAttribute("tabindex","-1"),t.focus(),t.removeAttribute("tabindex","-1"),(0,n.speak)(r,"polite")}},a=function(){var e=(0,n.getNode)(".gform_validation_errors",document,!0);if(e){var t=(0,n.getNode)("gform-focus-validation-error");t&&(t.setAttribute("tabindex","-1"),t.focus());var r=e.innerText.replaceAll(/\./g,",");(0,n.speak)(r,"assertive")}},i=function(e){if("Tab"===e.key){e.preventDefault(),document.removeEventListener("keydown",i);var t=(0,n.getNode)('.gform_wrapper form[data-active-form="true"]',document,!0);if(t){var r=t.getAttribute("data-formid"),o=(0,n.getNode)("#gform_wrapper_".concat(r),document,!0);if(!o.contains(document.activeElement)){var a=o,u=o.querySelector('.gform_page[style="display: block;"]');u&&(a=u);var c=a.querySelector('input:not([type="hidden"]), select, textarea');c?c.focus():(o.setAttribute("tabindex","-1"),o.setAttribute("role","presentation"),o.setAttribute("aria-hidden","true"),o.focus(),o.removeAttribute("aria-hidden"),o.removeAttribute("role"),o.removeAttribute("tabindex"))}}}},u=function(){(0,n.speak)("")},c=function(){document.addEventListener("keydown",i)},s=function(e){var t=e.getAttribute("data-formid"),r=document.querySelectorAll(".gform_wrapper form");r&&r.forEach((function(e){e.removeAttribute("data-active-form"),e.getAttribute("data-formid")===t&&e.setAttribute("data-active-form","true")}))}},6443:function(e){e.exports=gform_theme_config},9143:function(e,t,r){r.d(t,{pn:function(){return y},rV:function(){return m}});var n=r(455),o=r(9280),a=r.n(o),i=r(5798),u=r(3953),c=r(6201),s=r(2590),f=r(6443),d=r.n(f),m=function(){var e=(0,n.A)(a().mark((function e(t){var r,n,o,u,f,d,m=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!(m.length>1&&void 0!==m[1])||m[1],(0,c.g_)(),n=(0,i.getNode)("#gform_".concat(t),document,!0)){e.next=6;break}return e.abrupt("return",{success:!1,data:"Form "+t+" not found."});case 6:return e.next=8,p(t,n,"gform_submit_form");case 8:if((o=e.sent).success){e.next=14;break}return(0,c.rF)(),v(t,'<span class="gform-icon gform-icon--circle-error"></span>'+o.data),l(t),e.abrupt("return",o);case 14:return u=!(!r||!o.data.confirmation_redirect&&!o.data.confirmation_markup),f=!1,o.data.page_markup?(w(t,n,o.data.page_number,o.data.page_markup),o.data.page_number>0&&o.data.page_number!==o.data.source_page_number&&_(t,n,o.data.page_number),(0,c.Uy)(),f=!0):o.data.form_markup?((0,i.getNode)("#gform_wrapper_".concat(t),document,!0).outerHTML=o.data.form_markup,(0,c.Uy)(),f=!0):u&&(g(t,o),f=!0),e.next=19,(0,i.filter)({event:"gform/ajax/post_ajax_submission",data:{form:n,submissionResult:o}});case 19:return d=e.sent,o=d.submissionResult,l(t),f&&(0,s.A)(t,o.data.page_number),e.abrupt("return",o);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){window["gf_submitting_".concat(e)]=!1;var t=(0,i.getNode)("#gform_".concat(e),document,!0);t&&(0,u.Ec)(t)},p=function(){var e=(0,n.A)(a().mark((function e(t,r,n){var o,i,u,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URL(d().common.form.ajax.ajaxurl),i=o.pathname+o.search,e.next=4,fetch(i,{method:"POST",body:h(t,r,n)});case 4:return u=e.sent,c={},e.prev=6,e.next=9,u.json();case 9:c=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),c.success=!1;case 15:return c.success||(c.success=!1,c.data="string"==typeof c.data&&c.data?c.data:d().common.form.ajax.i18n.unknown_error),e.abrupt("return",c);case 17:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t,r,n){return e.apply(this,arguments)}}(),g=function(){var e=(0,n.A)(a().mark((function e(t,r){var n,o,u,s,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=r.data).confirmation_redirect||n.confirmation_markup){e.next=3;break}return e.abrupt("return");case 3:if("redirect"!==n.confirmation_type){e.next=6;break}return window.location=n.confirmation_redirect,e.abrupt("return");case 6:return o=(0,i.getNode)("#gform_wrapper_".concat(t),document,!0),u=o.getAttribute("class"),s=o.getAttribute("data-form-theme"),(f=(0,i.getNode)("#gform_".concat(t),o,!0))&&f.reset(),e.next=13,y(n.confirmation_markup);case 13:o.outerHTML=e.sent,(o=(0,i.getNode)("#gform_wrapper_".concat(t),document,!0))&&(o.setAttribute("class",u),o.setAttribute("data-form-theme",s)),b(t),(0,c.Ui)(t);case 18:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),b=function(e){var t=(0,i.getNode)("#gform_send_resume_link_button_".concat(e),document,!0);t&&(t.onclick=function(){return(0,u.d2)(t)})},v=function(){var e=(0,n.A)(a().mark((function e(t,r){var n,o,u,s,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.createElement("div"),o='<div class="gform_validation_errors" id="gform_'.concat(t,'_validation_container" data-js="gform-focus-validation-error"><h2 class="gform_submission_error hide_summary">').concat(r,"</h2></div>"),e.next=4,y(o);case 4:n.innerHTML=e.sent,u=(0,i.getNode)("#gform_wrapper_".concat(t),document,!0),(s=(0,i.getNode)(".gform_validation_errors",u,!0))&&s.remove(),f=(0,i.getNode)(".gform_heading",u,!0),u.insertBefore(n.firstChild,f),(0,c.Uy)();case 11:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),w=function(e,t,r,n){var o=(0,i.getNode)("#gform_page_".concat(e,"_").concat(r),t,!0);o&&(!function(e){var t=(0,i.getNode)("#gform_".concat(e,"_validation_container"),document,!0);t&&t.remove()}(e),o.outerHTML=n)},_=function(){var e=(0,n.A)(a().mark((function e(t,r,n){var o,u,s,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((o=(0,i.getNodes)(".gform_page",!0,r,!0))&&0!==o.length){e.next=3;break}return e.abrupt("return");case 3:o.forEach((function(e,t){e.style.display=t+1===n?"block":"none"})),u=(0,i.getNode)("#gform_source_page_number_".concat(t),r,!0),s=(0,i.getNode)("#gform_target_page_number_".concat(t),r,!0),f=n>=o.length?0:n+1,u&&s&&(u.value=n,s.value=f),(0,c.rF)(),k(r,n,o),(0,i.trigger)({event:"gform/ajax/post_page_change",native:!1,data:{formId:t,pageNumber:n}});case 11:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),h=function(e,t,r){var n=new FormData(t);return n.append("gform_ajax_nonce",window.gform_theme_config.common.form.ajax.ajax_submission_nonce),n.append("action",r),n.append("form_id",e),n.append("current_page_url",encodeURIComponent(window.location.href)),n.append("ajax_referer",encodeURIComponent(document.referrer)),n},y=function(){var e=(0,n.A)(a().mark((function e(t){var n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(567).then(r.t.bind(r,6308,23));case 2:return n=e.sent,o=n.default,e.abrupt("return",o.sanitize(t));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e,t,r){if(r&&0!==r.length){var n=r[r.length-1],o=(0,i.getNode)("[data-submission-type='previous'],.gform_previous_button",n,!0);o&&"image"!==o.type&&(o.type=t<r.length?"submit":"button")}};window.gform.submission=window.gform.submission||{},window.gform.submission.ajax={submitFormAjax:m,sanitizeHtml:y,resetSubmission:l,displayConfirmation:g}},9280:function(e){e.exports=window.regeneratorRuntime},9942:function(e,t,r){var n=r(455),o=r(9280),a=r.n(o),i=r(5798),u=(r(1295),function(){(0,i.consoleInfo)("Gravity Forms Common: Initialized all javascript that targeted document ready.")}),c=function(){(0,i.ready)(u)},s=function(){c()},f=r(3953),d=window.gform_theme_config,m=function(e){var t=!!(0,i.getNode)('input[name="version_hash"]',e,!0);if(!l()&&!t){var r='<input type="hidden" name="version_hash" value="'.concat(d.common.form.honeypot.version_hash,'" />');e.insertAdjacentHTML("beforeend",r)}},l=function(){return window._phantom||window.callPhantom||window.__phantomas||window.Buffer||window.emit||window.spawn||window.webdriver||window._selenium||window._Selenium_IDE_Recorder||window.callSelenium||window.__nightmare||window.domAutomation||window.domAutomationController||window.document.__webdriver_evaluate||window.document.__selenium_evaluate||window.document.__webdriver_script_function||window.document.__webdriver_script_func||window.document.__webdriver_script_fn||window.document.__fxdriver_evaluate||window.document.__driver_unwrapped||window.document.__webdriver_unwrapped||window.document.__driver_evaluate||window.document.__selenium_unwrapped||window.document.__fxdriver_unwrapped||window.document.documentElement.getAttribute("selenium")||window.document.documentElement.getAttribute("webdriver")||window.document.documentElement.getAttribute("driver")},p=function(){(0,i.addFilter)("gform/ajax/pre_ajax_validation",(function(e){return m(e.form),e})),(0,i.addFilter)("gform/submission/pre_submission",(function(e){return e.abort||e.submissionType!==f.z2&&e.submissionType!==f.s7||m(e.form),e})),(0,i.consoleInfo)("Gravity Forms Honeypot: Initialized.")},g=r(6201),b=(r(9143),r(3771),r(1162)),v=(r(2557),function(){var e=(0,n.A)(a().mark((function e(t){var r,n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(0,b.ts)(t),r=t?(0,b.Nl)(t):null){e.next=5;break}return e.abrupt("return",!1);case 5:return(n=new FormData).append("gform_ajax_nonce",window.gform_theme_config.config_nonce),n.append("action","gform_validate_config"),n.append("config",JSON.stringify(r)),e.next=11,fetch(window.gform_theme_config.common.form.ajax.ajaxurl,{method:"POST",body:n});case 11:return o=e.sent,e.prev=12,e.next=15,o.json();case 15:o=e.sent,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(12),o={success:!1,data:"There was an unknown error processing your request. Product config could not be validated. Please try again."};case 21:if(o.success){e.next=25;break}return o.data?o.data:"There was an unknown error processing your request. Product config could not be validated. Please try again.",e.abrupt("return",!1);case 25:return e.abrupt("return",!0);case 26:case"end":return e.stop()}}),e,null,[[12,18]])})));return function(t){return e.apply(this,arguments)}}());window.gform.config=window.gform.config||{},window.gform.config.isValid=v;r(2590);var w=function(){s(),p(),document.addEventListener("gform/post_render",(function(e){_(e.detail.formId,e.detail.currentPage)})),(0,i.trigger)({event:"gform/theme/scripts_loaded"}),(0,i.consoleInfo)("Gravity Forms Theme: Initialized all javascript that targeted document ready.")},_=function(){var e=(0,n.A)(a().mark((function e(t,n){var o,u,c,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,g.Uy)(),!document.querySelector("#gform_".concat(t," .gfield--type-product"))){e.next=8;break}return e.next=5,r.e(157).then(r.bind(r,3445));case 5:o=e.sent,(0,o.default)(t);case 8:if(!document.querySelector("#gform_".concat(t," .gfield--type-image_choice"))){e.next=16;break}return e.next=12,r.e(952).then(r.bind(r,8398));case 12:u=e.sent,c=u.default,(0,i.runOnce)(c)();case 16:if(!document.querySelector("#gform_".concat(t," .gform_page"))){e.next=23;break}return e.next=20,r.e(145).then(r.bind(r,7943));case 20:s=e.sent,(0,s.default)(t);case 23:(0,f.Ay)(t),(0,i.consoleInfo)("Gravity Forms Theme: Initialized all `gform/post_render` form initialization based javascript."),(0,i.trigger)({event:"gform/post_init",native:!1,data:{formId:t}});case 26:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){(0,i.ready)(w)},y=r(6443),k=r.n(y);r.p=k().public_path,h()}},i={};function u(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return a[e].call(r.exports,r,r.exports,u),r.exports}u.m=a,e=[],u.O=function(t,r,n,o){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],n=e[f][1],o=e[f][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(u.O).every((function(e){return u.O[e](r[c])}))?r.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(f--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,n,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},u.d(o,a),o},u.d=function(e,t){for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,r){return u.f[r](e,t),t}),[]))},u.u=function(e){return{145:"gform-pagination",157:"gform-products",567:"vendor-theme-dompurify",952:"gform-image-choice"}[e]+"."+{145:"91f86e988d8ec76485f9",157:"60ca635d3841fc9f9f1e",567:"be1f94eef844f43d7b65",952:"1bd415acd84428522466"}[e]+".min.js"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="gravityforms:",u.l=function(e,t,r,a){if(n[e])n[e].push(t);else{var i,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+r){i=d;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",o+r),i.src=e),n[e]=[t];var m=function(t,r){i.onerror=i.onload=null,clearTimeout(l);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},l=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e}(),function(){var e={593:0};u.f.j=function(t,r){var n=u.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var a=u.p+u.u(t),i=new Error;u.l(a,(function(r){if(u.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,a=r[0],i=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);if(c)var f=c(u)}for(t&&t(r);s<a.length;s++)o=a[s],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(f)},r=self.webpackChunkgravityforms=self.webpackChunkgravityforms||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),u.O(void 0,[721],(function(){return u(7920)}));var c=u.O(void 0,[721],(function(){return u(9942)}));c=u.O(c)}();;
/*! jQuery UI - v1.13.3 - 2024-04-26
* https://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){"use strict";var t,e,i,n,W,C,o,s,r,l,a,h,u;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function L(t,e){return parseInt(x.css(t,e),10)||0}function N(t){return null!=t&&t===t.window}x.ui=x.ui||{},x.ui.version="1.13.3",
/*!
 * jQuery UI :data 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.extend(x.expr.pseudos,{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
/*!
 * jQuery UI Disable Selection 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),
/*!
 * jQuery UI Focusable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.ui.focusable=function(t,e){var i,n,o,s=t.nodeName.toLowerCase();return"area"===s?(o=(i=t.parentNode).name,!(!t.href||!o||"map"!==i.nodeName.toLowerCase())&&0<(i=x("img[usemap='#"+o+"']")).length&&i.is(":visible")):(/^(input|select|textarea|button|object)$/.test(s)?(n=!t.disabled)&&(o=x(t).closest("fieldset")[0])&&(n=!o.disabled):n="a"===s&&t.href||e,n&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"visible"===e}(x(t)))},x.extend(x.expr.pseudos,{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element._form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 */
x.expr.pseudos||(x.expr.pseudos=x.expr[":"]),x.uniqueSort||(x.uniqueSort=x.unique),x.escapeSelector||(e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,i=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},x.escapeSelector=function(t){return(t+"").replace(e,i)}),x.fn.even&&x.fn.odd||x.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}}),
/*!
 * jQuery UI Keycode 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 *
 * https://api.jqueryui.com/position/
 */
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,h=x.fn.position,x.position={scrollbarWidth:function(){var t,e,i;return void 0!==n?n:(i=(e=x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i)},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=N(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(f){var c,d,p,g,m,v,y,w,b,_,t,e;return f&&f.of?(v="string"==typeof(f=x.extend({},f)).of?x(document).find(f.of):x(f.of),y=x.position.getWithinInfo(f.within),w=x.position.getScrollInfo(y),b=(f.collision||"flip").split(" "),_={},e=9===(e=(t=v)[0]).nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:N(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()},v[0].preventDefault&&(f.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(f[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],f[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===b.length&&(b[1]=b[0]),"right"===f.at[0]?m.left+=d:"center"===f.at[0]&&(m.left+=d/2),"bottom"===f.at[1]?m.top+=p:"center"===f.at[1]&&(m.top+=p/2),c=E(_.at,d,p),m.left+=c[0],m.top+=c[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=L(this,"marginLeft"),n=L(this,"marginTop"),o=l+e+L(this,"marginRight")+w.width,s=a+n+L(this,"marginBottom")+w.height,h=x.extend({},m),u=E(_.my,r.outerWidth(),r.outerHeight());"right"===f.my[0]?h.left-=l:"center"===f.my[0]&&(h.left-=l/2),"bottom"===f.my[1]?h.top-=a:"center"===f.my[1]&&(h.top-=a/2),h.left+=u[0],h.top+=u[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[b[t]]&&x.ui.position[b[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[c[0]+u[0],c[1]+u[1]],my:f.my,at:f.at,within:y,elem:r})}),f.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",f.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})):h.apply(this,arguments)},x.ui.position={fit:{left:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollLeft:n.offset.left,n=n.width,s=t.left-e.collisionPosition.marginLeft,r=o-s,l=s+e.collisionWidth-n-o;n<e.collisionWidth?0<r&&l<=0?(i=t.left+r+e.collisionWidth-n-o,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?o+n-e.collisionWidth:o:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i,n=e.within,n=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;o<e.collisionHeight?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,i=i.isWindow?i.scrollLeft:i.offset.left,s=t.left-e.collisionPosition.marginLeft,r=s-i,s=s+e.collisionWidth-o-i,l="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,a="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,h=-2*e.offset[0];r<0?((o=t.left+l+a+h+e.collisionWidth-o-n)<0||o<C(r))&&(t.left+=l+a+h):0<s&&(0<(n=t.left-e.collisionPosition.marginLeft+l+a+h-i)||C(n)<s)&&(t.left+=l+a+h)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,i=i.isWindow?i.scrollTop:i.offset.top,s=t.top-e.collisionPosition.marginTop,r=s-i,s=s+e.collisionHeight-o-i,l="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,a="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,h=-2*e.offset[1];r<0?((o=t.top+l+a+h+e.collisionHeight-o-n)<0||o<C(r))&&(t.top+=l+a+h):0<s&&(0<(n=t.top-e.collisionPosition.marginTop+l+a+h-i)||C(n)<s)&&(t.top+=l+a+h)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=(i=i||e.body).nodeName?i:e.body},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.extend(x.expr.pseudos,{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
/*!
 * jQuery UI Unique ID 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
x.fn.extend({uniqueId:(u=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
/*!
 * jQuery UI Widget 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */
var f,c=0,d=Array.prototype.hasOwnProperty,p=Array.prototype.slice;x.cleanData=(f=x.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove");f(t)}),x.widget=function(t,i,e){var n,o,s,r={},l=t.split(".")[0],a=l+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),Array.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr.pseudos[a.toLowerCase()]=function(t){return!!x.data(t,a)},x[l]=x[l]||{},n=x[l][t],o=x[l][t]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},x.extend(o,n,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(s=new i).options=x.widget.extend({},s.options),x.each(e,function(e,n){function o(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}r[e]="function"!=typeof n?n:function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=s,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}}),o.prototype=x.widget.extend(s,{widgetEventPrefix:n&&s.widgetEventPrefix||t},r,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(x.each(n._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),x.widget.bridge(t,o),o},x.widget.extend=function(t){for(var e,i,n=p.call(arguments,1),o=0,s=n.length;o<s;o++)for(e in n[o])i=n[o][e],d.call(n[o],e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;x.fn[s]=function(i){var t="string"==typeof i,n=p.call(arguments,1),o=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,r);return"instance"===i?(o=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for "+s+" widget instance"):(t=e[i].apply(e,n))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):o=void 0:(n.length&&(i=x.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=x.data(this,r);t?(t.option(i||{}),t._init&&t._init()):x.data(this,r,new e(i,this))})),o}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,n,o,s=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(n=s[t]=x.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=x(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var s=[],r=this;function t(t,e){for(var i,n=0;n<t.length;n++)i=r.classesElementLookup[t[n]]||x(),i=o.add?(function(){var i=[];o.element.each(function(t,e){x.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||i.push(e)}),r._on(x(i),{remove:"_untrackClassesElement"})}(),x(x.uniqueSort(i.get().concat(o.element.get())))):x(i.not(o.element).get()),r.classesElementLookup[t[n]]=i,s.push(t[n]),e&&o.classes[t[n]]&&s.push(o.classes[t[n]])}return(o=x.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(i){var n=this;x.each(n.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(n.classesElementLookup[t]=x(e.not(i.target).get()))}),this._off(x(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){var o="string"==typeof t||null===t,e={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n="boolean"==typeof n?n:i};return e.element.toggleClass(this._classes(e),n),this},_on:function(o,s,t){var r,l=this;"boolean"!=typeof o&&(t=s,s=o,o=!1),t?(s=r=x(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),x.each(t,function(t,e){function i(){if(o||!0!==l.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var t=t.match(/^([\w:-]*)\s*(.*)$/),n=t[1]+l.eventNamespace,t=t[2];t?r.on(n,t,i):s.on(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,o,s=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(n in o)n in e||(e[n]=o[n]);return this.element.trigger(e,i),!("function"==typeof s&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(s,r){x.Widget.prototype["_"+s]=function(e,t,i){var n,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:s;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),n=!x.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&x.effects&&x.effects.effect[o]?e[s](t):o!==s&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){x(this)[s](),i&&i.call(e[0]),t()})}})});;
"use strict";window.wp_fallback_consent_type=consent_api.consent_type;window.waitfor_consent_hook=consent_api.waitfor_consent_hook;function wp_has_consent(category){var consent_type;if(typeof window.wp_consent_type!=="undefined"){consent_type=window.wp_consent_type}else{consent_type=window.wp_fallback_consent_type}var has_consent_level=false;var cookie_value=consent_api_get_cookie(consent_api.cookie_prefix+"_"+category);if(!consent_type){has_consent_level=true}else if(consent_type.indexOf("optout")!==-1&&cookie_value===""){has_consent_level=true}else{has_consent_level=cookie_value==="allow"}return has_consent_level}function consent_api_set_cookie(name,value){var secure=";secure";var days=consent_api.cookie_expiration;var date=new Date;date.setTime(date.getTime()+days*24*60*60*1e3);var expires=";expires="+date.toGMTString();if(window.location.protocol!=="https:")secure="";document.cookie=name+"="+value+secure+expires+";path=/"}function consent_api_get_cookie(name){name=name+"=";var cookies=window.document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=cookies[i].trim();if(cookie.indexOf(name)==0)return cookie.substring(name.length,cookie.length)}return""}function wp_set_consent(category,value){var event;if(value!=="allow"&&value!=="deny")return;var previous_value=consent_api_get_cookie(consent_api.cookie_prefix+"_"+category);consent_api_set_cookie(consent_api.cookie_prefix+"_"+category,value);if(previous_value===value)return;var changedConsentCategory=[];changedConsentCategory[category]=value;try{event=new CustomEvent("wp_listen_for_consent_change",{detail:changedConsentCategory})}catch(err){event=document.createEvent("Event");event.initEvent("wp_listen_for_consent_change",true,true);event.detail=changedConsentCategory}document.dispatchEvent(event)};
document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",(()=>{for(var e=["-webkit-","-moz-","-ms-","-o-",""],t=0;t<e.length;t++)e[t]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")})(),(c=>{"function"!=typeof window.vc_js&&(window.vc_js=function(){vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_gridBehaviour(),vc_rowBehaviour(),vc_prepareHoverBox(),vc_googleMapsPointer(),vc_ttaActivation(),vc_ttaToggleBehaviour(),jQuery(document).trigger("vc_js"),window.setTimeout(vc_waypoints,500)}),"function"!=typeof window.vc_plugin_flexslider&&(window.vc_plugin_flexslider=function(e){(e?e.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each(function(){var e=jQuery(this),t=1e3*parseInt(e.attr("data-interval"),10),o=e.attr("data-flex_fx"),i=0==t?!1:!0;e.is(":visible")&&setTimeout(function(){e.flexslider({animation:o,slideshow:i,slideshowSpeed:t,sliderSpeed:800,smoothHeight:!0})},1)})}),"function"!=typeof window.vc_googleplus&&(window.vc_googleplus=function(){var e,t;0<jQuery(".wpb_googleplus").length&&((e=document.createElement("script")).type="text/javascript",e.async=!0,e.src="https://apis.google.com/js/plusone.js",(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,t))}),"function"!=typeof window.vc_pinterest&&(window.vc_pinterest=function(){var e,t;0<jQuery(".wpb_pinterest").length&&((e=document.createElement("script")).type="text/javascript",e.async=!0,e.src="https://assets.pinterest.com/js/pinit.js",(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,t))}),"function"!=typeof window.vc_progress_bar&&(window.vc_progress_bar=function(){void 0!==jQuery.fn.vcwaypoint&&jQuery(".vc_progress_bar").each(function(){var e=jQuery(this);e.vcwaypoint(function(){e.find(".vc_single_bar").each(function(e){var t=jQuery(this).find(".vc_bar"),o=t.data("percentage-value");setTimeout(function(){t.css({width:o+"%"})},200*e)})},{offset:"85%"})})}),"function"!=typeof window.vc_waypoints&&(window.vc_waypoints=function(){void 0!==jQuery.fn.vcwaypoint&&jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function(){var e=jQuery(this);e.vcwaypoint(function(){e.addClass("wpb_start_animation animated")},{offset:"85%"})})}),"function"!=typeof window.vc_toggleBehaviour&&(window.vc_toggleBehaviour=function(e){function t(e){e&&e.preventDefault&&e.preventDefault();var t=jQuery(this).closest(".vc_toggle"),e=t.find(".vc_toggle_content");t.hasClass("vc_toggle_active")?e.slideUp({duration:300,complete:function(){t.removeClass("vc_toggle_active")}}):e.slideDown({duration:300,complete:function(){t.addClass("vc_toggle_active")}})}(e?e.hasClass("vc_toggle_title")?e.unbind("click"):e.find(".vc_toggle_title").off("click"):jQuery(".vc_toggle_title").off("click")).on("click",t)}),"function"!=typeof window.vc_ttaToggleBehaviour&&(window.vc_ttaToggleBehaviour=function(e){function t(){var e=jQuery(this);e.toggleClass("wpb-tta-toggle-active"),e.parent().parent().parent().find(".vc_pagination-item").each(function(){if(!c(this).hasClass("vc_active"))return c(this).find("a").click(),!1})}(e?e.find(".wpb-tta-toggle"):jQuery(".wpb-tta-toggle")).off("click").on("click",t),setTimeout(function(){jQuery(".wpb-tta-toggle").each(function(){var e=jQuery(this);e.parent().parent().parent().find(".vc_tta-panels-container .vc_pagination li:first").hasClass("vc_active")||e.addClass("wpb-tta-toggle-active")})},1e3)}),"function"!=typeof window.vc_tabsBehaviour&&(window.vc_tabsBehaviour=function(e){var t,i;jQuery.ui&&(e=e||jQuery(".wpb_tabs, .wpb_tour"),t=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split("."):"1.10",i=1===parseInt(t[0],10)&&parseInt(t[1],10)<9,e.each(function(){var e=jQuery(this).attr("data-interval"),t=[],o=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(e,t){wpb_prepare_tab_content(e,t)},activate:function(e,t){wpb_prepare_tab_content(e,t)}});if(e&&0<e)try{o.tabs("rotate",1e3*e)}catch(e){window.console&&window.console.warn&&console.warn("tabs behaviours error",e)}jQuery(this).find(".wpb_tab").each(function(){t.push(this.id)}),jQuery(this).find(".wpb_tabs_nav li").on("click",function(e){return e&&e.preventDefault&&e.preventDefault(),i?o.tabs("select",jQuery("a",this).attr("href")):o.tabs("option","active",jQuery(this).index()),!1}),jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click",function(e){var t;e&&e.preventDefault&&e.preventDefault(),i?(t=o.tabs("option","selected"),jQuery(this).parent().hasClass("wpb_next_slide")?t++:t--,t<0?t=o.tabs("length")-1:t>=o.tabs("length")&&(t=0),o.tabs("select",t)):(t=o.tabs("option","active"),e=o.find(".wpb_tab").length,t=jQuery(this).parent().hasClass("wpb_next_slide")?e<=t+1?0:t+1:t-1<0?e-1:t-1,o.tabs("option","active",t))})}))}),"function"!=typeof window.vc_accordionBehaviour&&(window.vc_accordionBehaviour=function(){jQuery(".wpb_accordion").each(function(){var e=jQuery(this),t=(e.attr("data-interval"),!isNaN(jQuery(this).data("active-tab"))&&0<parseInt(e.data("active-tab"),10)&&parseInt(e.data("active-tab"),10)-1),o=!1===t||"yes"===e.data("collapsible"),t=e.find(".wpb_accordion_wrapper").accordion({header:"> div > h3",autoHeight:!1,heightStyle:"content",active:t,collapsible:o,navigation:!0,activate:vc_accordionActivate,change:function(e,t){void 0!==jQuery.fn.isotope&&t.newContent.find(".isotope").isotope("layout"),vc_carouselBehaviour(t.newPanel)}});!0===e.data("vcDisableKeydown")&&(t.data("uiAccordion")._keydown=function(){})})}),"function"!=typeof window.vc_teaserGrid&&(window.vc_teaserGrid=function(){var i={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var e=jQuery(this),t=e.find(".wpb_thumbnails"),o=t.attr("data-layout-mode");t.isotope({itemSelector:".isotope-item",layoutMode:void 0===i[o]?"fitRows":i[o]}),e.find(".categories_filter a").data("isotope",t).on("click",function(e){e&&e.preventDefault&&e.preventDefault();e=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),e.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).on("load resize",function(){t.isotope("layout")})})}),"function"!=typeof window.vc_carouselBehaviour&&(window.vc_carouselBehaviour=function(e){(e?e.find(".wpb_carousel"):jQuery(".wpb_carousel")).each(function(){var e=jQuery(this);!0!==e.data("carousel_enabled")&&e.is(":visible")&&(e.data("carousel_enabled",!0),getColumnsCount(jQuery(this)),jQuery(this).hasClass("columns_count_1"),(e=jQuery(this).find(".wpb_thumbnails-fluid li")).css({"margin-right":e.css("margin-left"),"margin-left":0}),(e=jQuery(this).find("ul.wpb_thumbnails-fluid")).width(e.width()+300))})}),"function"!=typeof window.vc_slidersBehaviour&&(window.vc_slidersBehaviour=function(){jQuery(".wpb_gallery_slides").each(function(){var e,t,o=jQuery(this);o.hasClass("wpb_slider_nivo")?(0===(t=1e3*o.attr("data-interval"))&&(t=9999999999),o.find(".nivoSlider").nivoSlider({effect:"boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",slices:15,boxCols:8,boxRows:4,animSpeed:800,pauseTime:t,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,keyboardNav:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next"})):o.hasClass("wpb_image_grid")&&o.find(".wpb_image_grid_ul")&&o.find(".wpb_image_grid_ul").isotope&&(jQuery.fn.imagesLoaded?e=o.find(".wpb_image_grid_ul").imagesLoaded(function(){e.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"})}):o.find(".wpb_image_grid_ul").isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}))})}),"function"!=typeof window.vc_prettyPhoto&&(window.vc_prettyPhoto=function(){try{jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto&&jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({animationSpeed:"normal",hook:"data-rel",padding:15,opacity:.7,showTitle:!0,allowresize:!0,counter_separator_label:"/",hideflash:!1,deeplinking:!1,modal:!1,callback:function(){-1<location.href.indexOf("#!prettyPhoto")&&(location.hash="")},social_tools:""})}catch(e){window.console&&window.console.warn&&window.console.warn("vc_prettyPhoto initialize error",e)}}),"function"!=typeof window.vc_google_fonts&&(window.vc_google_fonts=function(){return window.console&&window.console.warn&&window.console.warn("function vc_google_fonts is deprecated, no need to use it"),!1}),window.vcParallaxSkroll=!1,"function"!=typeof window.vc_rowBehaviour&&(window.vc_rowBehaviour=function(){var s=window.jQuery;function e(){var e;void 0!==window.wpb_disable_full_width_row_js&&window.wpb_disable_full_width_row_js||(e=s('[data-vc-full-width="true"]'),s.each(e,function(){var e,t,o,i,n,a,r,c=s(this),d=(c.addClass("vc_hidden"),c.next(".vc_row-full-width"));(d=d.length?d:c.parent().next(".vc_row-full-width")).length&&(e=parseInt(c.css("margin-left"),10),t=parseInt(c.css("margin-right"),10),o=0-d.offset().left-e,i=s(window).width(),n={position:"relative",left:o="rtl"===c.css("direction")?(o=o-d.width()+i)+e+t:o,"box-sizing":"border-box",width:i,"max-width":i},c.css(n),c.data("vcStretchContent")||("rtl"===c.css("direction")?((a=o)<0&&(a=0),(r=o)<0&&(r=0)):(r=i-(a=(a=-1*o)<0?0:a)-d.width()+e+t)<0&&(r=0),c.css({"padding-left":a+"px","padding-right":r+"px"})),c.attr("data-vc-full-width-init","true"),c.removeClass("vc_hidden"),s(document).trigger("vc-full-width-row-single",{el:c,offset:o,marginLeft:e,marginRight:t,elFull:d,width:i,maxWidth:i}))}),s(document).trigger("vc-full-width-row",e))}function t(){var e,t,o=s(".vc_row-o-full-height:first");o.length&&(e=s(window).height(),(t=o.offset().top)<e)&&o.css("min-height",100-t/(e/100)+"vh"),s(document).trigger("vc-full-height-row",o)}s(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour",e).on("resize.vcRowBehaviour",t),e(),t(),(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&s(".vc_row-o-full-height").each(function(){"flex"===s(this).css("display")&&s(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')}),vc_initVideoBackgrounds();var n=!1;if(window.vcParallaxSkroll&&window.vcParallaxSkroll.destroy(),s(".vc_parallax-inner").remove(),s("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),s("[data-vc-parallax]").each(function(){var e,t,o,i;n=!0,"on"===s(this).data("vcParallaxOFade")&&s(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),e=100*s(this).data("vcParallax"),(t=s("<div />").addClass("vc_parallax-inner").appendTo(s(this))).height(e+"%"),o=s(this).data("vcParallaxImage"),(i=vcExtractYoutubeId(o))?insertYoutubeVideoAsBackground(t,i):void 0!==o&&t.css("background-image","url("+o+")"),t.attr("data-bottom-top","top: "+-(e-100)+"%;").attr("data-top-bottom","top: 0%;")}),n&&window.skrollr)window.vcParallaxSkroll=skrollr.init({forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}}),window.vcParallaxSkroll}),"function"!=typeof window.vc_gridBehaviour&&(window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery("[data-vc-grid]").vcGrid()}),"function"!=typeof window.getColumnsCount&&(window.getColumnsCount=function(e){for(var t=!1,o=1;!1===t;){if(e.hasClass("columns_count_"+o))return t=!0,o;o++}}),"function"!=typeof window.wpb_prepare_tab_content&&(window.wpb_prepare_tab_content=function(e,t){var o=t.panel||t.newPanel,i=o.find(".vc_pie_chart:not(.vc_ready)"),n=o.find(".vc_round-chart"),a=o.find(".vc_line-chart"),r=o.find('[data-ride="vc_carousel"]');vc_carouselBehaviour(),vc_plugin_flexslider(o),t.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&t.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var e=jQuery(this).data("vcGrid");e&&e.gridBuilder&&e.gridBuilder.setMasonry&&e.gridBuilder.setMasonry()}),o.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&o.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var e=jQuery(this).data("vcGrid");e&&e.gridBuilder&&e.gridBuilder.setMasonry&&e.gridBuilder.setMasonry()}),i.length&&jQuery.fn.vcChat&&i.vcChat(),n.length&&jQuery.fn.vcRoundChart&&n.vcRoundChart({reload:!1}),a.length&&jQuery.fn.vcLineChart&&a.vcLineChart({reload:!1}),r.length&&jQuery.fn.carousel&&r.carousel("resizeAction"),t=o.find(".isotope, .wpb_image_grid_ul"),i=o.find(".wpb_gmaps_widget"),0<t.length&&t.isotope("layout"),i.length&&!i.is(".map_ready")&&((n=i.find("iframe")).attr("src",n.attr("src")),i.addClass("map_ready")),o.parents(".isotope").length&&o.parents(".isotope").each(function(){jQuery(this).isotope("layout")}),c(document).trigger("wpb_prepare_tab_content",o)}),"function"!=typeof window.vc_ttaActivation&&(window.vc_ttaActivation=function(){jQuery("[data-vc-accordion]").on("show.vc.accordion",function(e){var t=window.jQuery,o={};o.newPanel=t(this).data("vc.accordion").getTarget(),window.wpb_prepare_tab_content(e,o)})}),"function"!=typeof window.vc_accordionActivate&&(window.vc_accordionActivate=function(e,t){var o,i,n,a;t.newPanel.length&&t.newHeader.length&&(o=t.newPanel.find(".vc_pie_chart:not(.vc_ready)"),i=t.newPanel.find(".vc_round-chart"),n=t.newPanel.find(".vc_line-chart"),a=t.newPanel.find('[data-ride="vc_carousel"]'),void 0!==jQuery.fn.isotope&&t.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),t.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&t.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var e=jQuery(this).data("vcGrid");e&&e.gridBuilder&&e.gridBuilder.setMasonry&&e.gridBuilder.setMasonry()}),vc_carouselBehaviour(t.newPanel),vc_plugin_flexslider(t.newPanel),o.length&&jQuery.fn.vcChat&&o.vcChat(),i.length&&jQuery.fn.vcRoundChart&&i.vcRoundChart({reload:!1}),n.length&&jQuery.fn.vcLineChart&&n.vcLineChart({reload:!1}),a.length&&jQuery.fn.carousel&&a.carousel("resizeAction"),t.newPanel.parents(".isotope").length)&&t.newPanel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}),"function"!=typeof window.initVideoBackgrounds&&(window.initVideoBackgrounds=function(){return window.console&&window.console.warn&&window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),vc_initVideoBackgrounds()}),"function"!=typeof window.vc_initVideoBackgrounds&&(window.vc_initVideoBackgrounds=function(){c(".vc_video-bg").remove(),c("[data-vc-video-bg]").each(function(){var e,o=jQuery(this);o.data("vcVideoBg")?(e=o.data("vcVideoBg"),(e=vcExtractYoutubeId(e))&&(o.find(".vc_video-bg").remove(),insertYoutubeVideoAsBackground(o,e)),jQuery(window).on("grid:items:added",function(e,t){o.has(t).length&&vcResizeVideoBackground(o)})):o.find(".vc_video-bg").remove()})}),"function"!=typeof window.insertYoutubeVideoAsBackground&&(window.insertYoutubeVideoAsBackground=function(e,t,o){if("undefined"==typeof YT||void 0===YT.Player)return 100<(o=void 0===o?0:o)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){insertYoutubeVideoAsBackground(e,t,o++)},100);var i=e.prepend('<div class="vc_video-bg"><div class="inner"></div></div>').find(".inner");new YT.Player(i[0],{width:"100%",height:"100%",videoId:t,playerVars:{playlist:t,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1,mute:1,wmode:"transparent"},events:{onReady:function(e){e.target.mute().setLoop(!0)}}}),vcResizeVideoBackground(e),jQuery(window).on("resize",function(){vcResizeVideoBackground(e)})}),"function"!=typeof window.vcResizeVideoBackground&&(window.vcResizeVideoBackground=function(e){var t,o,i,n,a=e.innerWidth(),r=e.innerHeight();a/r<16/9?(t=r*(16/9),o=r,i=-Math.round((t-a)/2)+"px",n=-Math.round((o-r)/2)+"px"):(o=(t=a)*(9/16),n=-Math.round((o-r)/2)+"px",i=-Math.round((t-a)/2)+"px"),t+="px",o+="px",e.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:i,marginTop:n,width:t,height:o})}),"function"!=typeof window.vcExtractYoutubeId&&(window.vcExtractYoutubeId=function(e){return void 0!==e&&null!==(e=e.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/))&&e[1]}),"function"!=typeof window.vc_googleMapsPointer&&(window.vc_googleMapsPointer=function(){var e=window.jQuery,t=e(".wpb_gmaps_widget");t.on("click",function(){e("iframe",this).css("pointer-events","auto")}),t.on("mouseleave",function(){e("iframe",this).css("pointer-events","none")}),e(".wpb_gmaps_widget iframe").css("pointer-events","none")}),"function"!=typeof window.vc_setHoverBoxPerspective&&(window.vc_setHoverBoxPerspective=function(e){e.each(function(){var e=jQuery(this),t=e.width();e.css("perspective",4*t+"px")})}),"function"!=typeof window.vc_setHoverBoxHeight&&(window.vc_setHoverBoxHeight=function(e){e.each(function(){var e=jQuery(this),t=e.find(".vc-hoverbox-inner"),o=(t.css("min-height",0),e.find(".vc-hoverbox-front-inner").outerHeight()),e=e.find(".vc-hoverbox-back-inner").outerHeight(),o=e<o?o:e;t.css("min-height",(o=o<250?250:o)+"px")})}),"function"!=typeof window.vc_prepareHoverBox&&(window.vc_prepareHoverBox=function(){var e=jQuery(".vc-hoverbox");vc_setHoverBoxHeight(e),vc_setHoverBoxPerspective(e)}),jQuery(document).ready(window.vc_prepareHoverBox),jQuery(window).on("resize",window.vc_prepareHoverBox),jQuery(document).ready(function(){window.vc_js()})})(window.jQuery);;
(function( factory ) {
	if (typeof define !== 'undefined' && define.amd) {
		define([], factory);
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = factory();
	} else {
		window.scrollMonitor = factory();
	}
})(function() {

	var scrollTop = function() {
		return window.pageYOffset ||
			(document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop;
	};

	var exports = {};

	var watchers = [];

	var VISIBILITYCHANGE = 'visibilityChange';
	var ENTERVIEWPORT = 'enterViewport';
	var FULLYENTERVIEWPORT = 'fullyEnterViewport';
	var EXITVIEWPORT = 'exitViewport';
	var PARTIALLYEXITVIEWPORT = 'partiallyExitViewport';
	var LOCATIONCHANGE = 'locationChange';
	var STATECHANGE = 'stateChange';

	var eventTypes = [
		VISIBILITYCHANGE,
		ENTERVIEWPORT,
		FULLYENTERVIEWPORT,
		EXITVIEWPORT,
		PARTIALLYEXITVIEWPORT,
		LOCATIONCHANGE,
		STATECHANGE
	];

	var defaultOffsets = {top: 0, bottom: 0};

	var getViewportHeight = function() {
		return window.innerHeight || document.documentElement.clientHeight;
	};

	var getDocumentHeight = function() {
		// jQuery approach
		// whichever is greatest
		return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.documentElement.clientHeight
		);
	};

	exports.viewportTop = null;
	exports.viewportBottom = null;
	exports.documentHeight = null;
	exports.viewportHeight = getViewportHeight();

	var previousDocumentHeight;
	var latestEvent;

	var calculateViewportI;
	function calculateViewport() {
		exports.viewportTop = scrollTop();
		exports.viewportBottom = exports.viewportTop + exports.viewportHeight;
		exports.documentHeight = getDocumentHeight();
		if (exports.documentHeight !== previousDocumentHeight) {
			calculateViewportI = watchers.length;
			while( calculateViewportI-- ) {
				watchers[calculateViewportI].recalculateLocation();
			}
			previousDocumentHeight = exports.documentHeight;
		}
	}

	function recalculateWatchLocationsAndTrigger() {
		exports.viewportHeight = getViewportHeight();
		calculateViewport();
		updateAndTriggerWatchers();
	}

	var recalculateAndTriggerTimer;
	function debouncedRecalcuateAndTrigger() {
		clearTimeout(recalculateAndTriggerTimer);
		recalculateAndTriggerTimer = setTimeout( recalculateWatchLocationsAndTrigger, 100 );
	}

	var updateAndTriggerWatchersI;
	function updateAndTriggerWatchers() {
		// update all watchers then trigger the events so one can rely on another being up to date.
		updateAndTriggerWatchersI = watchers.length;
		var i = 0;
		while( i < updateAndTriggerWatchersI ) {
			watchers[i].update();
			i++;
		}

		updateAndTriggerWatchersI = watchers.length;
		var j = 0,
			newLength;
		while( j < updateAndTriggerWatchersI ) {
			watchers[j].triggerCallbacks();

			newLength = watchers.length;

			if (newLength < updateAndTriggerWatchersI) {
				j -= updateAndTriggerWatchersI - newLength;
			}

			updateAndTriggerWatchersI = newLength;
			j++;
		}

	}

	function ElementWatcher( watchItem, offsets ) {
		var self = this;

		this.watchItem = watchItem;

		this.uid = Math.random().toString(36).substring(8);

		if (!offsets) {
			this.offsets = defaultOffsets;
		} else if (offsets === +offsets) {
			this.offsets = {top: offsets, bottom: offsets};
		} else {
			this.offsets = {
				top: offsets.top || defaultOffsets.top,
				bottom: offsets.bottom || defaultOffsets.bottom
			};
		}

		this.callbacks = {}; // {callback: function, isOne: true }

		for (var i = 0, j = eventTypes.length; i < j; i++) {
			self.callbacks[eventTypes[i]] = [];
		}

		this.locked = false;

		var wasInViewport;
		var wasFullyInViewport;
		var wasAboveViewport;
		var wasBelowViewport;

		var listenerToTriggerListI;
		var listener;
		function triggerCallbackArray( listeners ) {
			if (listeners.length === 0) {
				return;
			}
			listenerToTriggerListI = listeners.length;
			while( listenerToTriggerListI-- ) {
				listener = listeners[listenerToTriggerListI];
				listener.callback.call( self, latestEvent );
				if (listener.isOne) {
					listeners.splice(listenerToTriggerListI, 1);
				}
			}
		}
		this.triggerCallbacks = function triggerCallbacks() {

			if (this.isInViewport && !wasInViewport) {
				triggerCallbackArray( this.callbacks[ENTERVIEWPORT] );
			}
			if (this.isFullyInViewport && !wasFullyInViewport) {
				triggerCallbackArray( this.callbacks[FULLYENTERVIEWPORT] );
			}


			if (this.isAboveViewport !== wasAboveViewport &&
				this.isBelowViewport !== wasBelowViewport) {

				triggerCallbackArray( this.callbacks[VISIBILITYCHANGE] );

				// if you skip completely past this element
				if (!wasFullyInViewport && !this.isFullyInViewport) {
					triggerCallbackArray( this.callbacks[FULLYENTERVIEWPORT] );
					triggerCallbackArray( this.callbacks[PARTIALLYEXITVIEWPORT] );
				}
				if (!wasInViewport && !this.isInViewport) {
					triggerCallbackArray( this.callbacks[ENTERVIEWPORT] );
					triggerCallbackArray( this.callbacks[EXITVIEWPORT] );
				}
			}

			if (!this.isFullyInViewport && wasFullyInViewport) {
				triggerCallbackArray( this.callbacks[PARTIALLYEXITVIEWPORT] );
			}
			if (!this.isInViewport && wasInViewport) {
				triggerCallbackArray( this.callbacks[EXITVIEWPORT] );
			}
			if (this.isInViewport !== wasInViewport) {
				triggerCallbackArray( this.callbacks[VISIBILITYCHANGE] );
			}
			switch( true ) {
				case wasInViewport !== this.isInViewport:
				case wasFullyInViewport !== this.isFullyInViewport:
				case wasAboveViewport !== this.isAboveViewport:
				case wasBelowViewport !== this.isBelowViewport:
					triggerCallbackArray( this.callbacks[STATECHANGE] );
			}

			wasInViewport = this.isInViewport;
			wasFullyInViewport = this.isFullyInViewport;
			wasAboveViewport = this.isAboveViewport;
			wasBelowViewport = this.isBelowViewport;

		};

		this.recalculateLocation = function() {
			if (this.locked) {
				return;
			}
			var previousTop = this.top;
			var previousBottom = this.bottom;
			if (this.watchItem.nodeName) { // a dom element
				var cachedDisplay = this.watchItem.style.display;
				if (cachedDisplay === 'none') {
					this.watchItem.style.display = '';
				}

				var boundingRect = this.watchItem.getBoundingClientRect();
				this.top = boundingRect.top + exports.viewportTop;
				this.bottom = boundingRect.bottom + exports.viewportTop;

				if (cachedDisplay === 'none') {
					this.watchItem.style.display = cachedDisplay;
				}

			} else if (this.watchItem === +this.watchItem) { // number
				if (this.watchItem > 0) {
					this.top = this.bottom = this.watchItem;
				} else {
					this.top = this.bottom = exports.documentHeight - this.watchItem;
				}

			} else { // an object with a top and bottom property
				this.top = this.watchItem.top;
				this.bottom = this.watchItem.bottom;
			}

			this.top -= this.offsets.top;
			this.bottom += this.offsets.bottom;
			this.height = this.bottom - this.top;

			if ( (previousTop !== undefined || previousBottom !== undefined) && (this.top !== previousTop || this.bottom !== previousBottom) ) {
				triggerCallbackArray( this.callbacks[LOCATIONCHANGE] );
			}
		};

		this.recalculateLocation();
		this.update();

		wasInViewport = this.isInViewport;
		wasFullyInViewport = this.isFullyInViewport;
		wasAboveViewport = this.isAboveViewport;
		wasBelowViewport = this.isBelowViewport;
	}

	ElementWatcher.prototype = {
		on: function( event, callback, isOne ) {

			// trigger the event if it applies to the element right now.
			switch( true ) {
				case event === VISIBILITYCHANGE && !this.isInViewport && this.isAboveViewport:
				case event === ENTERVIEWPORT && this.isInViewport:
				case event === FULLYENTERVIEWPORT && this.isFullyInViewport:
				case event === EXITVIEWPORT && this.isAboveViewport && !this.isInViewport:
				case event === PARTIALLYEXITVIEWPORT && this.isAboveViewport:
					callback.call( this, latestEvent );
					if (isOne) {
						return;
					}
			}

			if (this.callbacks[event]) {
				this.callbacks[event].push({callback: callback, isOne: isOne||false});
			} else {
				throw new Error('Tried to add a scroll monitor listener of type '+event+'. Your options are: '+eventTypes.join(', '));
			}
		},
		off: function( event, callback ) {
			if (this.callbacks[event]) {
				for (var i = 0, item; item = this.callbacks[event][i]; i++) {
					if (item.callback === callback) {
						this.callbacks[event].splice(i, 1);
						break;
					}
				}
			} else {
				throw new Error('Tried to remove a scroll monitor listener of type '+event+'. Your options are: '+eventTypes.join(', '));
			}
		},
		one: function( event, callback ) {
			this.on( event, callback, true);
		},
		recalculateSize: function() {
			this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom;
			this.bottom = this.top + this.height;
		},
		update: function() {
			this.isAboveViewport = this.top < exports.viewportTop;
			this.isBelowViewport = this.bottom > exports.viewportBottom;

			this.isInViewport = (this.top <= exports.viewportBottom && this.bottom >= exports.viewportTop);
			this.isFullyInViewport = (this.top >= exports.viewportTop && this.bottom <= exports.viewportBottom) ||
								 (this.isAboveViewport && this.isBelowViewport);

		},
		destroy: function() {
			var index = -1,
				self  = this;

			for (var i = 0; i < watchers.length; i++) {
				if (this.uid == watchers[i].uid) {
					index = i;
					break;
				}
			}

			if (index == -1) {
				index = watchers.indexOf(this);
			}

			watchers.splice(index, 1);
			for (var i = 0, j = eventTypes.length; i < j; i++) {
				self.callbacks[eventTypes[i]].length = 0;
			}
		},
		// prevent recalculating the element location
		lock: function() {
			this.locked = true;
		},
		unlock: function() {
			this.locked = false;
		}
	};

	var eventHandlerFactory = function (type) {
		return function( callback, isOne ) {
			this.on.call(this, type, callback, isOne);
		};
	};

	for (var i = 0, j = eventTypes.length; i < j; i++) {
		var type =  eventTypes[i];
		ElementWatcher.prototype[type] = eventHandlerFactory(type);
	}

	try {
		calculateViewport();
	} catch (e) {
		try {
			window.$(calculateViewport);
		} catch (e) {
			throw new Error('If you must put scrollMonitor in the <head>, you must use jQuery.');
		}
	}

	function scrollMonitorListener(event) {
		latestEvent = event;
		calculateViewport();
		updateAndTriggerWatchers();
	}

	if (window.addEventListener) {
		window.addEventListener('scroll', scrollMonitorListener);
		window.addEventListener('resize', debouncedRecalcuateAndTrigger);
	} else {
		// Old IE support
		window.attachEvent('onscroll', scrollMonitorListener);
		window.attachEvent('onresize', debouncedRecalcuateAndTrigger);
	}

	exports.beget = exports.create = function( element, offsets ) {
		if (typeof element === 'string') {
			element = document.querySelector(element);
		} else if (element && element.length > 0) {
			element = element[0];
		}

		var watcher = new ElementWatcher( element, offsets );
		watchers.push(watcher);
		watcher.update();
		return watcher;
	};

	exports.update = function() {
		latestEvent = null;
		calculateViewport();
		updateAndTriggerWatchers();
	};
	exports.recalculateLocations = function() {
		exports.documentHeight = 0;
		exports.update();
	};

	return exports;
});
;
(function($) {
	$(function() {

		window.defaultSortData = {
			date: '[data-sort-date] parseInt',
			name: '.title'
		};

		function portfolio_images_loaded($box, image_selector, callback) {
			function check_image_loaded(img) {
				return img.getAttribute('loading') === 'lazy' || img.getAttribute('src') === '' || (img.complete && img.naturalWidth !== undefined && img.naturalWidth !== 0);
			}

			var $images = $(image_selector, $box).filter(function() {
					return !check_image_loaded(this);
				}),
				images_count = $images.length;

			if (images_count == 0) {
				return callback();
			}

			if (window.gemBrowser.name == 'ie' && !isNaN(parseInt(window.gemBrowser.version)) && parseInt(window.gemBrowser.version) <= 10) {
				function image_load_event() {
					images_count--;
					if (images_count == 0) {
						callback();
					}
				}

				$images.each(function() {
					if (check_image_loaded(this)) {
						return;
					}

					var proxyImage = new Image();
					proxyImage.addEventListener( 'load', image_load_event );
					proxyImage.addEventListener( 'error', image_load_event );
					proxyImage.src = this.src;
				});
				return;
			}

			$images.on('load error', function() {
				images_count--;
				if (images_count == 0) {
					callback();
				}
			});
		}

		function init_prev_next_navigator_buttons ($portfolio) {
			var current_page = $portfolio.data('current-page');
			var pages_count = $portfolio.data('pages-count');
			if (current_page <= 1)
				$('.portfolio-navigator a.prev', $portfolio).css('visibility', 'hidden');
			else
				$('.portfolio-navigator a.prev', $portfolio).css('visibility', 'visible');

			if (current_page >= pages_count)
				$('.portfolio-navigator a.next', $portfolio).css('visibility', 'hidden');
			else
				$('.portfolio-navigator a.next', $portfolio).css('visibility', 'visible');
		}

		function get_portfolio_sorted_items($portfolio, $activeItems) {
			if (!$('.portfolio-sorting a.sorting-switcher', $portfolio).length) {
				return $activeItems;
			}


			var sortOptions = get_portfolio_sorting_data($portfolio);
			var sortBy = window.defaultSortData[ sortOptions.sortBy ];

			var isParseInt = false;
			if (sortBy.indexOf('parseInt') != -1) {
				sortBy = sortBy.replace(' parseInt', '');
				var isParseInt = true;
			}

			var isSortByAttr = false;
			var m = sortBy.match( /^\[(.+)\]$/ );
			if (m) {
				sortBy = m[1];
				var isSortByAttr = true;
			}

			$activeItems.sort(function($item1, $item2) {
				if (isSortByAttr) {
					var item1_value = $item1.getAttribute( sortBy );
					var item2_value = $item2.getAttribute( sortBy );
				} else {
					var item1_value = $(sortBy, $item1).text();
					var item2_value = $(sortBy, $item2).text();
				}

				if (isParseInt) {
					item1_value = parseInt(item1_value);
					item2_value = parseInt(item2_value);
				}

				return ( item1_value > item2_value ? 1 : -1 ) * ( sortOptions.sortAscending ? 1 : -1 );
			});
			return $activeItems;
		}

		function init_portfolio_pages($portfolio) {
			var activeFilter = $portfolio.data('portfolio-filter') || '*';
			if (activeFilter != '*') {
				activeFilter = '.' + activeFilter;
			}

			var $activeItems = $('.portfolio-set .portfolio-item', $portfolio);
			if (activeFilter != '*') {
				$activeItems = $activeItems.filter(activeFilter);
			}

			var count = $activeItems.length;
			var default_per_page = $portfolio.data('per-page') || count;

			if ($('.portfolio-count select', $portfolio).length)
				var per_page = $('.portfolio-count select', $portfolio).val();
			else
				var per_page = default_per_page;

			var pages_count = Math.ceil(count / per_page);
			var current_page = 1;

			$portfolio.data('per-page', per_page);
			$portfolio.data('pages-count', pages_count);
			$portfolio.data('current-page', current_page);

			if ($('.portfolio-navigator', $portfolio).length && pages_count > 1) {
				var pagenavigator = '<a href="#" class="prev"><i class="default"></i></a>';
				for (var i = 0; i < pages_count; i++)
					pagenavigator += '<a href="#" data-page="' + (i + 1) + '">' + (i + 1) + '</a>';
				pagenavigator += '<a href="#" class="next"><i class="default"></i></a>';
				$('.portfolio-navigator', $portfolio).html(pagenavigator).show();
				$('.portfolio-set', $portfolio).css('margin-bottom', '');
				$('.portfolio-navigator a[data-page="' + current_page + '"]', $portfolio).addClass('current');
				init_prev_next_navigator_buttons($portfolio);
			} else {
				$('.portfolio-navigator', $portfolio).html('').hide();
				$('.portfolio-set', $portfolio).css('margin-bottom', 0);
			}

			$('.portfolio-set .portfolio-item', $portfolio).removeClass(function(index, class_name) {
				return  (class_name.match (/\bpaginator-page-\S+/g) || []).join(' ');
			});

			var sorted_items = get_portfolio_sorted_items($portfolio, $activeItems);
			$.each(sorted_items, function(i, item) {
				var page = Math.ceil((i + 1) / per_page);
				$(item).addClass('paginator-page-' + page);
			});

			$('.portfolio-navigator', $portfolio).on('click', 'a', function() {
				if ($(this).hasClass('current'))
					return false;
				var current_page = $(this).siblings('.current:first').data('page');
				if ($(this).hasClass('prev')) {
					var page = current_page - 1;
				} else if ($(this).hasClass('next')) {
					var page = current_page + 1
				} else {
					var page = $(this).data('page');
				}
				if (page < 1)
					page = 1;
				if (page > pages_count)
					page = pages_count;
				$(this).siblings('a').removeClass('current');
				$(this).parent().find('a[data-page="' + page + '"]').addClass('current');
				$portfolio.data('current-page', page);
				init_prev_next_navigator_buttons($portfolio);
				$portfolio.itemsAnimations('instance').reinitItems($('.portfolio-set .portfolio-item', $portfolio));
				$('.portfolio-set', $portfolio).thegem_isotope({ filter: '.paginator-page-' + page });
				$("html, body").animate({ scrollTop: $portfolio.offset().top - 200 }, 600);
				return false;
			});
		}

		function init_portfolio_count($portfolio) {
			if (!$('.portfolio-count select', $portfolio).length) {
				return false;
			}
			$('.portfolio-count select', $portfolio).on('change', function() {
				init_portfolio_pages($portfolio);
				$portfolio.itemsAnimations('instance').reinitItems($('.portfolio-set .portfolio-item', $portfolio));
				var current_page = $portfolio.data('current-page');
				$('.portfolio-set', $portfolio).thegem_isotope({
					filter: '.paginator-page-' + current_page
				});
			});
		}

		function get_portfolio_sorting_data($portfolio) {
			var sorting = {
				sortBy: $('.portfolio-sorting .orderby .sorting-switcher', $portfolio).data('current'),
				sortAscending: $('.portfolio-sorting .order .sorting-switcher', $portfolio).data('current') == 'ASC'
			};

			return sorting;
		}

		function init_portfolio_sorting($portfolio) {
			if (!$('.portfolio-sorting a.sorting-switcher', $portfolio).length)
				return false;

			$('.portfolio-sorting a.sorting-switcher', $portfolio).on('click', function(e) {
				var $selected = $('label[data-value!="' + $(this).data('current') + '"]', $(this).parent());
				$(this).data('current', $selected.data('value'));

				if($(this).next().is($selected)) {
					$(this).addClass('right');
				} else {
					$(this).removeClass('right');
				}

				if ($portfolio.hasClass('portfolio-pagination-scroll')) {
					$portfolio.data('next-page', 1);
					portfolio_scroll_load_next_request($portfolio);

				} else if (!$('.portfolio-load-more', $portfolio).length) {
					init_portfolio_pages($portfolio);
					var current_page = $portfolio.data('current-page'),
						sortOptions = get_portfolio_sorting_data($portfolio);

					$portfolio.itemsAnimations('instance').reinitItems($('.portfolio-set .portfolio-item', $portfolio));
					$('.portfolio-set', $portfolio).thegem_isotope({
						filter: '.paginator-page-' + current_page,
						sortBy: sortOptions.sortBy,
						sortAscending: sortOptions.sortAscending
					});
				} else {
					$portfolio.data('next-page', 1);
					portfolio_load_core_request($portfolio);
				}

				e.preventDefault();
				return false;
			});

			$('.portfolio-sorting label', $portfolio).on('click', function(e) {
				if($(this).data('value') != $('.sorting-switcher', $(this).parent()).data('current')) {
					$('.sorting-switcher', $(this).parent()).click();
				}
				e.preventDefault();
				return false;
			});
		}

		function portfolio_load_more_request($portfolio, $set, is_scroll) {
			var uid = $portfolio.data('portfolio-uid'),
				is_processing_request = $set.data('request-process') || false;
			if (is_processing_request) {
				return false;
			}

			var data = $.extend(true, {}, window['portfolio_ajax_' + uid]);
			if ($('.portfolio-count select', $portfolio).length) {
				data['data']['more_count'] = $('.portfolio-count select', $portfolio).val();
			}

			data['data']['more_page'] = $portfolio.data('next-page');
			if (data['data']['more_page'] == null || data['data']['more_page'] == undefined) {
				data['data']['more_page'] = 1;
			}
			if (data['data']['more_page'] == 0) {
				return false;
			}

			if ($portfolio.hasClass('products') || $portfolio.hasClass('news-grid')) {
				data['data']['categories'] = $portfolio.data('portfolio-filter') || data['data']['categories'];
			} else {
				data['data']['portfolio'] = $portfolio.data('portfolio-filter') || data['data']['portfolio'];
			}

			if ($('.portfolio-sorting', $portfolio).length) {
				data['data']['orderby'] = $('.portfolio-sorting .orderby .sorting-switcher', $portfolio).data('current');
				data['data']['order'] = $('.portfolio-sorting .order .sorting-switcher', $portfolio).data('current');
			}

			data['action'] = data['action'] != undefined ? data['action'] : 'portfolio_load_more';
			$set.data('request-process', true);

			if (is_scroll) {
				$('.portfolio-scroll-pagination', $portfolio).addClass('active').html('<div class="loading"></div>');
			} else {
				$('.portfolio-load-more .gem-button', $portfolio).before('<div class="loading"></div>');
			}

			$.ajax({
				type: 'post',
				dataType: 'json',
				url: data.url,
				data: data,
				success: function(response) {
					if (response.status == 'success') {
						var $newItems = $(response.html);
						if ($newItems.hasClass('woocommerce')) {
							$newItems = $newItems.find('>div');
						}
						var current_page = $newItems.data('page'),
							next_page = $newItems.data('next-page'),
							$inserted_data = $($newItems.html());

						$inserted_data.addClass('paginator-page-1');
						if ($portfolio.itemsAnimations('instance').getAnimationName() != 'disabled') {
							$inserted_data.addClass('item-animations-not-inited');
						} else {
							$inserted_data.removeClass('item-animations-not-inited');
						}
						if (($portfolio.hasClass('columns-2') || $portfolio.hasClass('columns-3') || $portfolio.hasClass('columns-4')) && $portfolio.outerWidth() > 1170) {
							$('.image-inner picture source', $inserted_data).remove();
						}
						portfolio_images_loaded($newItems, '.image-inner img', function() {
							if (current_page == 1) {
								$portfolio.itemsAnimations('instance').clear();
								$set.html('');
							}

							$set.thegem_isotope('insert', $inserted_data);
							$portfolio.itemsAnimations('instance').show($inserted_data);

							if (window.wp !== undefined && window.wp.mediaelement !== undefined) {
								window.wp.mediaelement.initialize();
							}

							if (is_scroll) {
								$('.portfolio-scroll-pagination', $portfolio).removeClass('active').html('');
							} else {
								$('.portfolio-scroll-pagination', $portfolio).addClass('active').html('<div class="loading"></div>');
								if (next_page > 0) {
									$('.portfolio-load-more', $portfolio).show();
								} else {
									$('.portfolio-load-more', $portfolio).hide();
								}
							}

							$portfolio.initPortfolioFancybox();
							$portfolio.data('next-page', next_page);
							$set.data('request-process', false);
						});
					} else {
						alert(response.message);
					}
				}
			});
		}

		function portfolio_load_core_request($portfolio) {
			var $set = $('.portfolio-set', $portfolio);
			var uid = $portfolio.data('portfolio-uid');
			var is_processing_request = $set.data('request-process') || false;
			if (is_processing_request)
				return false;
			$set.data('request-process', true);
			var data = $.extend(true, {}, window['portfolio_ajax_' + uid]);
			data['action'] = data['action'] != undefined ? data['action'] : 'portfolio_load_more';
			if ($('.portfolio-count select', $portfolio).size() > 0)
				data['data']['more_count'] = $('.portfolio-count select', $portfolio).val();
			data['data']['more_page'] = $portfolio.data('next-page') || 1;
			if (data['data']['more_page'] == 0)
				return false;

			if ($portfolio.hasClass('products') || $portfolio.hasClass('news-grid')) {
				data['data']['categories'] = $portfolio.data('portfolio-filter') || data['data']['categories'];
			} else {
				data['data']['portfolio'] = $portfolio.data('portfolio-filter') || data['data']['portfolio'];
			}

			if ($('.portfolio-sorting', $portfolio).length > 0) {
				data['data']['orderby'] = $('.portfolio-sorting .orderby .sorting-switcher', $portfolio).data('current');
				data['data']['order'] = $('.portfolio-sorting .order .sorting-switcher', $portfolio).data('current');
			}

			$('.portfolio-load-more .gem-button', $portfolio).before('<div class="loading"><div class="preloader-spin"></div></div>');

			$.ajax({
				type: 'post',
				dataType: 'json',
				url: data.url,
				data: data,
				success: function(response) {
					if (response.status == 'success') {
						var minZIndex = $('.portfolio-item:last', $set).css('z-index') - 1;
						var $newItems = $(response.html);
						if ($newItems.hasClass('woocommerce')) {
							$newItems = $newItems.find('>div');
						}
						$('.portfolio-item', $newItems).addClass('paginator-page-1')
						$('.portfolio-item', $newItems).each(function() {
							$(this).css('z-index', minZIndex--);
						});
						var current_page = $newItems.data('page');
						var next_page = $newItems.data('next-page');
						var $inserted_data = $($newItems.html());
						if ($portfolio.itemsAnimations('instance').getAnimationName() != 'disabled') {
							$inserted_data.addClass('item-animations-not-inited');
						} else {
							$inserted_data.removeClass('item-animations-not-inited');
						}

						if (($portfolio.hasClass('columns-2') || $portfolio.hasClass('columns-3') || $portfolio.hasClass('columns-4')) && $portfolio.outerWidth() > 1170) {
							$('.image-inner picture source', $inserted_data).remove();
						}
						portfolio_images_loaded($newItems, '.image-inner img', function() {
							if (current_page == 1) {
								$portfolio.itemsAnimations('instance').clear();
								$set.html('');
								$set.thegem_isotope('reloadItems');
							}

							$set.thegem_isotope('insert', $inserted_data);
							init_circular_overlay($portfolio, $set);
							$portfolio.itemsAnimations('instance').show($inserted_data);

							if (window.wp !== undefined && window.wp.mediaelement !== undefined) {
								window.wp.mediaelement.initialize();
							}

							$('.portfolio-load-more .loading', $portfolio).remove();
							$portfolio.data('next-page', next_page);
							if (next_page > 0) {
								$('.portfolio-load-more', $portfolio).show();
							} else {
								$('.portfolio-load-more', $portfolio).hide();
							}

							$portfolio.initPortfolioFancybox();
							$set.data('request-process', false);
						});
					} else {
						alert(response.message);
						$('.portfolio-load-more .gem-button .loading', $portfolio).remove();
					}
				}
			});
		}

		function init_portfolio_more_count($portfolio) {
			if ($('.portfolio-count select', $portfolio).size() == 0)
				return false;
			$('.portfolio-count select', $portfolio).on('change', function() {
				$portfolio.data('next-page', 1);
				portfolio_load_core_request($portfolio);
			});
		}

		function init_portfolio_scroll_next_count($portfolio) {
			if ($('.portfolio-count select', $portfolio).size() == 0)
				return false;
			$('.portfolio-count select', $portfolio).on('change', function() {
				$portfolio.data('next-page', 1);
				portfolio_scroll_load_next_request($portfolio);
			});
		}

		function portfolio_scroll_load_next_request($portfolio) {
			var $set = $('.portfolio-set', $portfolio);
			var uid = $portfolio.data('portfolio-uid');
			var is_processing_request = $set.data('request-process') || false;
			if (is_processing_request)
				return false;
			var data = $.extend(true, {}, window['portfolio_ajax_' + uid]);
			data['action'] = data['action'] != undefined ? data['action'] : 'portfolio_load_more';
			if ($('.portfolio-count select', $portfolio).size() > 0)
				data['data']['more_count'] = $('.portfolio-count select', $portfolio).val();

			data['data']['more_page'] = $portfolio.data('next-page');
			if (data['data']['more_page'] == null || data['data']['more_page'] == undefined) {
				data['data']['more_page'] = 1;
			}
			if (data['data']['more_page'] == 0)
				return false;

			if ($portfolio.hasClass('products') || $portfolio.hasClass('news-grid')) {
				data['data']['categories'] = $portfolio.data('portfolio-filter') || data['data']['categories'];
			} else {
				data['data']['portfolio'] = $portfolio.data('portfolio-filter') || data['data']['portfolio'];
			}

			if ($('.portfolio-sorting', $portfolio).length > 0) {
				data['data']['orderby'] = $('.portfolio-sorting .orderby .sorting-switcher', $portfolio).data('current');
				data['data']['order'] = $('.portfolio-sorting .order .sorting-switcher', $portfolio).data('current');
			}

			$set.data('request-process', true);
			$('.portfolio-scroll-pagination', $portfolio).addClass('active').html('<div class="loading"><div class="preloader-spin"></div></div>');

			$.ajax({
				type: 'post',
				dataType: 'json',
				url: data.url,
				data: data,
				success: function(response) {
					if (response.status == 'success') {
						var minZIndex = $('.portfolio-item:last', $set).css('z-index') - 1;
						var $newItems = $(response.html);
						if ($newItems.hasClass('woocommerce')) {
							$newItems = $newItems.find('>div');
						}
						$('.portfolio-item', $newItems).addClass('paginator-page-1')
						$('.portfolio-item', $newItems).each(function() {
							$(this).css('z-index', minZIndex--);
						});
						var current_page = $newItems.data('page');
						var next_page = $newItems.data('next-page');
						var $inserted_data = $($newItems.html());
						if ($portfolio.itemsAnimations('instance').getAnimationName() != 'disabled') {
							$inserted_data.addClass('item-animations-not-inited');
						} else {
							$inserted_data.removeClass('item-animations-not-inited');
						}
						if (($portfolio.hasClass('columns-2') || $portfolio.hasClass('columns-3') || $portfolio.hasClass('columns-4')) && $portfolio.outerWidth() > 1170) {
							$('.image-inner picture source', $inserted_data).remove();
						}
						portfolio_images_loaded($newItems, '.image-inner img', function() {
							if (current_page == 1) {
								$portfolio.itemsAnimations('instance').clear();
								$set.html('');
							}

							$set.thegem_isotope('insert', $inserted_data);
							init_circular_overlay($portfolio, $set);
							$portfolio.itemsAnimations('instance').show($inserted_data);

							if (window.wp !== undefined && window.wp.mediaelement !== undefined) {
								window.wp.mediaelement.initialize();
							}

							$('.portfolio-scroll-pagination', $portfolio).removeClass('active').html('');
							$portfolio.data('next-page', next_page);
							$set.data('request-process', false);
							$portfolio.initPortfolioFancybox();
						});
					} else {
						alert(response.message);
						$('.portfolio-scroll-pagination', $portfolio).removeClass('active').html('');
					}
				}
			});
		}

		function init_portfolio_scroll_next_page($portfolio) {
			if ($('.portfolio-scroll-pagination', $portfolio).length == 0) {
				return false;
			}

			var $pagination = $('.portfolio-scroll-pagination', $portfolio);
			var watcher = scrollMonitor.create($pagination[0]);
			watcher.enterViewport(function() {
				portfolio_scroll_load_next_request($portfolio);
			});
		}

		$('.portfolio-count select').combobox();

		function init_circular_overlay($portfolio, $set) {
			if (!$portfolio.hasClass('hover-circular') && !$portfolio.hasClass('hover-new-circular') && !$portfolio.hasClass('hover-default-circular')) {
				return;
			}

			$('.portfolio-item', $set).on('mouseenter', function() {
				var overlayWidth = $('.overlay', this).width(),
					overlayHeight = $('.overlay', this).height(),
					$overlayCircle = $('.overlay-circle', this),
					maxSize = 0;

				if (overlayWidth > overlayHeight) {
					maxSize = overlayWidth;
					$overlayCircle.height(overlayWidth)
				} else {
					maxSize = overlayHeight;
					$overlayCircle.width(overlayHeight);
				}
				maxSize += overlayWidth * 0.3;

				$overlayCircle.css({
					marginLeft: -maxSize / 2,
					marginTop: -maxSize / 2
				});
			});
		}

		function fixItemHiddenContent(items) {
			items.forEach(function(item) {
				var $hiddenContent = $('.slide-content-hidden', item.element);

				if (!$hiddenContent.length) {
					return;
				}

				$hiddenContent.css('margin-bottom', -$hiddenContent.outerHeight() + 'px');
			});
		}

		function fixHorizontalSlidingAuthor(items) {
			items.forEach(function(item) {
				var $visibleContent = $('.slide-content-visible', item.element),
					$hiddenContent = $('.slide-content-hidden', item.element),
					$authorContent = $('.caption .author', item.element);

				if (!$authorContent.length || !$visibleContent.length || !$hiddenContent.length) {
					return;
				}

				$authorContent.css('top', ($visibleContent.outerHeight() - $hiddenContent.outerHeight() - $authorContent.outerHeight()) + 'px');
			});
		}

		function initNewsGridItems($portfolio) {
			if (!$portfolio.hasClass('news-grid')) {
				return;
			}

			if (!$portfolio.hasClass('title-on-page')) {
				$('.portfolio-item', $portfolio).each(function() {
					var $item = $(this);

					if ($item.width() < 260 || $item.height() < 300) {
						$item.addClass('small-item');
					}
				});
			}

			if (typeof $.fn.buildSimpleGalleries === 'function') {
				$portfolio.buildSimpleGalleries();
			}

			if (typeof $.fn.updateSimpleGalleries === 'function') {
				$portfolio.updateSimpleGalleries();
			}
		}

		function filterPortfolio($portfolio, filterValue) {
			$portfolio.data('portfolio-filter', filterValue || '');

			if (!$('.portfolio-load-more', $portfolio).length && !$portfolio.hasClass('portfolio-pagination-scroll')) {
				init_portfolio_pages($portfolio);

				filterValue = filterValue == '' ? '*' : '.' + filterValue;
				filterValue += '.paginator-page-' + $portfolio.data('current-page');

				$portfolio.itemsAnimations('instance').reinitItems($('.portfolio-set .portfolio-item', $portfolio));
				$('.portfolio-set', $portfolio).thegem_isotope({
					filter: filterValue
				});
			} else {
				$portfolio.data('next-page', 1);

				if ($portfolio.hasClass('portfolio-pagination-scroll')) {
					portfolio_scroll_load_next_request($portfolio);
				} else {
					portfolio_load_core_request($portfolio);
				}
			}
		}

		function hasOnlyDoubleItems($set) {
			var $items = $('.portfolio-item', $set);
			return $items.length == $items.filter('.double-item-squared, .double-item-horizontal').length;
		}

		function fixPortfolioWithDoubleItems($portfolio, needFix) {
			if (needFix) {
				$portfolio.addClass('porfolio-even-columns');
			} else {
				$portfolio.removeClass('porfolio-even-columns');
			}
		}

		function initPortfolioGrid() {
			if (window.tgpLazyItems !== undefined) {
				var isShowed = window.tgpLazyItems.checkGroupShowed(this, function(node) {
					initPortfolioGrid.call(node);
				});
				if (!isShowed) {
					return;
				}
			}

			var $portfolio = $(this);
			var $set = $('.portfolio-set', this);
			var isNewsGrid = $portfolio.hasClass('news-grid');

			if ($portfolio.hasClass('portfolio-pagination-scroll')) {
				var current_page = 1;
				$('.portfolio-set .portfolio-item', $portfolio).addClass('paginator-page-1');
				init_portfolio_sorting($portfolio);
				init_portfolio_scroll_next_count($portfolio);

			} else if ($('.portfolio-load-more', $portfolio).size() == 0) {
				init_portfolio_count($portfolio);
				init_portfolio_sorting($portfolio);
				init_portfolio_pages($portfolio);
				var current_page = $portfolio.data('current-page');
			} else {
				var current_page = 1;
				$('.portfolio-set .portfolio-item', $portfolio).addClass('paginator-page-1');
				init_portfolio_sorting($portfolio);
				init_portfolio_more_count($portfolio);
			}

			if (($portfolio.hasClass('columns-2') || $portfolio.hasClass('columns-3') || $portfolio.hasClass('columns-4')) && $portfolio.outerWidth() > 1170) {
				$('.image-inner picture source', $set).remove();
			}

			portfolio_images_loaded($set, '.image-inner img', function() {
				var sortOptions = get_portfolio_sorting_data($portfolio);
				var layoutMode = 'masonry-custom';
				var portfolioStyle = 'justified';
				var titleOnPage = $portfolio.hasClass('title-on-page');

				if ($portfolio.hasClass('portfolio-style-masonry')) {
					portfolioStyle = 'masonry';
				}

				if ($portfolio.hasClass('portfolio-style-metro')) {
					layoutMode = 'metro';
					portfolioStyle = 'metro';
				}

				var itemsAnimations = $portfolio.itemsAnimations({
					itemSelector: '.portfolio-item',
					scrollMonitor: true
				});

				init_circular_overlay($portfolio, $set);

				initNewsGridItems($portfolio);

				if (portfolioStyle != 'metro') {
					fixPortfolioWithDoubleItems($portfolio, hasOnlyDoubleItems($set));
				}

				var isotope_options = {
					gridType: isNewsGrid ? 'news' : 'portfolio',
					itemSelector: '.portfolio-item',
					layoutMode: layoutMode,
					itemImageWrapperSelector: '.image-inner',
					fixHeightDoubleItems: portfolioStyle == 'justified',
					fixCaption: isNewsGrid && portfolioStyle == 'justified' && titleOnPage,
					'masonry-custom': {
						columnWidth: $('.portfolio-item-size-container .portfolio-item', $portfolio).length > 0 ? $('.portfolio-item-size-container .portfolio-item', $portfolio)[0] : '.portfolio-item:not(.double-item)'
					},
					filter: '.paginator-page-' + current_page,
					transitionDuration: 0
				};

				if ($('.portfolio-load-more', $portfolio).size() == 0 && !$portfolio.hasClass('portfolio-pagination-scroll')) {
					isotope_options['getSortData'] = window.defaultSortData;
					isotope_options['sortBy'] = sortOptions.sortBy;
					isotope_options['sortAscending'] = sortOptions.sortAscending;
				}

				var init_portfolio = true;

				$portfolio.closest('.portfolio-preloader-wrapper').prev('.preloader').remove();

				$set
					.on( 'layoutComplete', function( event, laidOutItems ) {
						if ($portfolio.hasClass('products')) {
							var setWidth = $set[0].offsetWidth;

							for (var i = 0; i < laidOutItems.length; i++) {
								var item = laidOutItems[i],
									itemWrapWidth = item.element.querySelector('.wrap').offsetWidth,
									itemPadding = parseFloat($(item.element).css('padding-left'));

								if (isNaN(itemPadding)) {
									itemPadding = 0;
								}

								if ($portfolio.hasClass('hover-title') && $portfolio.hasClass('item-separator')) {
									item.element.style.zIndex = laidOutItems.length - i;
								}

								if (item.position.x === 0) {
									item.element.classList.add('left-item');
								} else {
									item.element.classList.remove('left-item');
								}

								if (item.position.y === 0) {
									item.element.classList.add('top-item');
								} else {
									item.element.classList.remove('top-item');
								}

								if (item.position.x + itemWrapWidth + 2 * itemPadding > setWidth - 4) {
									item.element.classList.add('right-item');
								} else {
									item.element.classList.remove('right-item');
								}

								if (itemWrapWidth < 320) {
									item.element.classList.add('item-small-size');
								} else {
									item.element.classList.remove('item-small-size');
								}
							}
						}

						if (isNewsGrid) {
							var setWidth = $set[0].offsetWidth;

							for (var i = 0; i < laidOutItems.length; i++) {
								var item = laidOutItems[i];

								if (item.element.classList.contains('double-item-style-alternative')) {
									var itemWidth = item.element.offsetWidth;

									if (item.position.x != 0 && item.position.x + itemWidth > setWidth - 4) {
										item.element.classList.add('right-item');
									} else {
										item.element.classList.remove('right-item');
									}
								}
							}

							if ($portfolio.hasClass('version-new')) {
								if ($portfolio.hasClass('hover-new-default') || $portfolio.hasClass('hover-new-zooming-blur')) {
									fixItemHiddenContent(laidOutItems);
								}

								if ($portfolio.hasClass('hover-new-horizontal-sliding')) {
									fixHorizontalSlidingAuthor(laidOutItems);
								}
							}
						}
					})
					.on( 'arrangeComplete', function( event, filteredItems ) {
						if ($portfolio.hasClass('products')) {
							if ($portfolio.hasClass('columns-1') && $portfolio.hasClass('caption-position-zigzag')) {
								$('.portfolio-item .image', $portfolio).removeClass('col-md-push-4 col-md-push-5');
								$('.portfolio-item .caption', $portfolio).removeClass('col-md-pull-8 col-md-pull-7');

								for (var i = 0; i < filteredItems.length; i++) {
									if (i % 2 == 1) {
										if ($(filteredItems[i].element).hasClass('portfolio-1x-fullwidth-item')) {
											$('.image', filteredItems[i].element).addClass('col-md-push-4');
											$('.caption', filteredItems[i].element).addClass('col-md-pull-8');
										} else {
											$('.image', filteredItems[i].element).addClass('col-md-push-5');
											$('.caption', filteredItems[i].element).addClass('col-md-pull-7');
										}
									}
								}
							}

							if ($portfolio.hasClass('title-on-hover') || $portfolio.hasClass('hover-gradient') || $portfolio.hasClass('hover-circular')) {
								$('.portfolio-item .portfolio-icons-inner > a:not(.added_to_cart), .portfolio-item .portfolio-icons-inner .yith-wcwl-add-to-wishlist, .portfolio-item .portfolio-icons-inner .yith-wcwl-add-to-wishlist div:not(.yith-wcwl-wishlistaddedbrowse) a', $portfolio).addClass('icon');
							}
						}

						if ($set.closest('.fullwidth-block').size() > 0) {
							$set.closest('.fullwidth-block').bind('fullwidthUpdate', function() {
								if ($set.data('thegem_isotope')) {
									$set.thegem_isotope('layout');
									return false;
								}
							});
						} else {
							if ($set.closest('.vc_row[data-vc-stretch-content="true"]').length > 0) {
								$set.closest('.vc_row[data-vc-stretch-content="true"]').bind('VCRowFullwidthUpdate', function() {
									if ($set.data('thegem_isotope')) {
										$set.thegem_isotope('layout');
										return false;
									}
								});
							}
						}

						if (isNewsGrid) {
							var needLayout = false;

							filteredItems.forEach(function(item) {
								if (!titleOnPage) {
									if (item.size.innerWidth < 260 || item.size.innerHeight < 260) {
										if (!item.element.classList.contains('small-item')) {
											item.element.classList.add('small-item');
											needLayout = true;
										}
									} else {
										if (item.element.classList.contains('small-item')) {
											item.element.classList.remove('small-item');
											needLayout = true;
										}
									}
								}

								if ($('mediaelementwrapper', item.element).length > 0) {
									$('mediaelementwrapper', item.element).trigger('resize');
								}
							});

							if (typeof $.fn.buildSimpleGalleries === 'function') {
								$set.buildSimpleGalleries();
							}

							if (typeof $.fn.updateSimpleGalleries === 'function') {
								$set.updateSimpleGalleries();
							}

							if (needLayout && $set.data('thegem_isotope')) {
								$set.thegem_isotope('layout');
							}
						}

						if (portfolioStyle != 'metro') {
							var onlyDoubleItems = hasOnlyDoubleItems($set);

							if (onlyDoubleItems != $portfolio.hasClass('porfolio-even-columns')) {
								fixPortfolioWithDoubleItems($portfolio, onlyDoubleItems);

								if ($set.data('thegem_isotope')) {
									$set.thegem_isotope('layout');
								}
							}
						}

						if (init_portfolio) {
							var items = [];
							filteredItems.forEach(function(item) {
								items.push(item.element);
							});

							//setTimeout(function() {
								itemsAnimations.show($(items));
							//}, 0);
						}
					})
					.thegem_isotope(isotope_options);

				if (!window.gemSettings.lasyDisabled) {
					var elems = $('.portfolio-item:visible', $set);
					var items = [];
					for (var i = 0; i < elems.length; i++)
						items.push($set.thegem_isotope('getItem', elems[i]));
					$set.thegem_isotope('reveal', items);
				}

				if ($set.closest('.gem_tab').size() > 0) {
					$set.closest('.gem_tab').bind('tab-update', function() {
						if ($set.data('thegem_isotope')) {
							$set.thegem_isotope('layout');
						}
					});
				}

				if (isNewsGrid) {
					$($set).on('gallery-inited', '.gem-simple-gallery', function() {
						if ($set.data('thegem_isotope')) {
							$set.thegem_isotope('layout');
						}
					});
				}

				$(document).on('gem.show.vc.tabs', '[data-vc-accordion]', function() {
					var $tab = $(this).data('vc.accordion').getTarget();
					if($tab.find($set).length) {
						if ($set.data('thegem_isotope')) {
							$set.thegem_isotope('layout');
						}
					}
				});

				$(document).on('gem.show.vc.accordion', '[data-vc-accordion]', function() {
					var $tab = $(this).data('vc.accordion').getTarget();
					if($tab.find($set).length) {
						if ($set.data('thegem_isotope')) {
							$set.thegem_isotope('layout');
						}
					}
				});

				if ($('.portfolio-filters', $portfolio).length) {
					$('.portfolio-filters, .portfolio-filters-resp ul li', $portfolio).on('click', 'a', function() {
						var thisFilter = $(this).data('filter');

						$('.portfolio-filters a.active, .portfolio-filters-resp ul li a.active', $portfolio).removeClass('active');
						$('.portfolio-filters a[data-filter="' + thisFilter + '"], .portfolio-filters-resp ul li a[data-filter="' + thisFilter + '"]', $portfolio).addClass('active');

						filterPortfolio($portfolio, thisFilter.substr(1));

						if ($('.portfolio-filters-resp', $portfolio).size() > 0 && typeof $.fn.dlmenu === 'function') {
							$('.portfolio-filters-resp', $portfolio).dlmenu('closeMenu');
						}

						return false;
					});
				}

				$portfolio.on('click', '.info a:not(.zilla-likes)', function() {
					var slug = $(this).data('slug') || '';

					if ($('.portfolio-filters', $portfolio).length) {
						$('.portfolio-filters a[data-filter=".' + slug + '"]').click();
					} else {
						filterPortfolio($portfolio, slug);
					}

					return false;
				});

				$('.portfolio-load-more', $portfolio).on('click', function() {
					portfolio_load_core_request($portfolio);
				});

				if ($portfolio.hasClass('portfolio-pagination-scroll')) {
					init_portfolio_scroll_next_page($portfolio);
				}

				if (!$portfolio.hasClass('news-grid')) {
					overlay_caption_click($portfolio);
				}

				if (titleOnPage) {
					$(window).on('load', function() {
						if ($set.data('thegem_isotope')) {
							setTimeout(function() {
								$set.thegem_isotope('layout');
							}, 200);
						}
					});
				}
			});

			if (typeof $.fn.dlmenu === 'function') {
				$('.portfolio-filters-resp', $portfolio).dlmenu({
					animationClasses: {
						classin : 'dl-animate-in',
						classout : 'dl-animate-out'
					}
				});
			}

			$('a.icon.share', $portfolio).on('click', function(e) {
				e.preventDefault();

				if ($(this).closest('.portfolio').hasClass('version-new') ||
					($(this).closest('.portfolio').hasClass('version-default') &&
						$(this).closest('.portfolio').hasClass('title-on-hover'))
				) {
					toggleNewsGridSharing(this);
				} else {
					$(this).closest('.links').find('.portfolio-sharing-pane').toggleClass('active');
				}
				return false;
			});

			$('.portfolio-item', $portfolio).on('mouseleave', function(){
				$('.portfolio-sharing-pane').removeClass('active');
			});

			$('.portfolio', $portfolio).on('click', '.portfolio-item', function() {
				$(this).mouseover();
			});
		}

		function initPortfolioSlider() {
			if (window.tgpLazyItems !== undefined) {
				var isShowed = window.tgpLazyItems.checkGroupShowed(this, function(node) {
					initPortfolioSlider.call(node);
				});
				if (!isShowed) {
					return;
				}
			}

			var $portfolio = $(this);
			var $set = $('.portfolio-set', this);
			var $prev = $('.portolio-slider-prev span', $portfolio);
			var $next = $('.portolio-slider-next span', $portfolio);

			if ($portfolio.hasClass('products') && ($portfolio.hasClass('title-on-hover') || $portfolio.hasClass('hover-gradient') || $portfolio.hasClass('hover-circular'))) {
				$('.portfolio-item .portfolio-icons-inner > a:not(.added_to_cart), .portfolio-item .portfolio-icons-inner .yith-wcwl-add-to-wishlist, .portfolio-item .portfolio-icons-inner .yith-wcwl-add-to-wishlist div:not(.yith-wcwl-wishlistaddedbrowse) a', $portfolio).addClass('icon');
			}

			portfolio_images_loaded($set, '.image-inner img', function() {
				init_circular_overlay($portfolio, $set);
				if ($portfolio.hasClass('gem-slider-animation-dynamic')) {
					$set.juraSlider({
						type: 'dynamic',
						element: '.portfolio-item',
						prevButton: $prev,
						nextButton: $next,
						nextPageDelay: $portfolio.hasClass('columns-2') ? 200 : 300,
						afterInit: function() {
							$portfolio.prev('.preloader').remove();
						},
						autoscroll: $set.data('autoscroll') ? $set.data('autoscroll') : false
					});
				}
				if ($portfolio.hasClass('gem-slider-animation-one')) {
					$set.juraSlider({
						type: 'one',
						duration: 500,
						element: '.portfolio-item',
						prevButton: $prev,
						nextButton: $next,
						nextPageDelay: 0,
						afterInit: function() {
							$portfolio.prev('.preloader').remove();
						},
						autoscroll: $set.data('autoscroll') ? $set.data('autoscroll') : false
					});
				}
				update_slider_paddings($portfolio);
				setTimeout(function() {
					update_slider_paddings($portfolio);
				}, 100);
			});

			$('a.icon.share', $portfolio).on('click', function(e) {
				e.preventDefault();

				if ($(this).closest('.portfolio').hasClass('version-new') ||
					($(this).closest('.portfolio').hasClass('version-default') &&
						$(this).closest('.portfolio').hasClass('title-on-hover'))
				) {
					toggleNewsGridSharing(this);
				} else {
					$(this).closest('.links').find('.portfolio-sharing-pane').toggleClass('active');
				}
				return false;
			});

			$('.portfolio-item', $portfolio).on('mouseleave', function(){
				$('.portfolio-sharing-pane').removeClass('active');
			});

			$('.portfolio', $portfolio).on('click', '.portfolio-item', function() {
				$(this).mouseover();
			});

			overlay_caption_click($portfolio);
		}

		function overlay_caption_click($portfolio) {
			$portfolio.on('click', '.portfolio-item .image .overlay, .portfolio-item .wrap > .caption', function(event) {
				var $target = $(event.target),
					$icons = $target.closest('.portfolio-item').find('.portfolio-icons');

				if ($target.closest('.icon').length || $target.closest('.socials-sharing').length || !$icons.length) {
					return;
				}

				if(window.gemSettings.isTouch) {
					if($target.closest('.overlay').length && !$target.closest('.portfolio-item').hasClass('touch-hover')) {
						$target.closest('.portfolio-item').addClass('touch-hover');
						$('*').one('click', function(event){
							if(!$(event.target).closest('.portfolio-item').is($target.closest('.portfolio-item'))) {
								$target.closest('.portfolio-item').removeClass('touch-hover');
							}
						});
						return false;
					}
				}

				if ($('.icon.self-link', $icons).length) {
					window.open(
						$('.icon.self-link', $icons).attr('href'),
						$('.icon.self-link', $icons).attr('target')
					);
				} else if ($('.icon.bottom-product-link', $icons).length) {
					window.open(
						$('.icon.bottom-product-link', $icons).attr('href'),
						$('.icon.bottom-product-link', $icons).attr('target')
					);
				} else {
					var $firstIcon = $('.icon', $icons).first();

					if ($firstIcon.hasClass('inner-link') || $firstIcon.hasClass('outer-link')) {
						window.open(
							$firstIcon.attr('href'),
							$firstIcon.attr('target')
						);
					} else {
						$firstIcon.click();
					}
				}
			});
		}

		function update_slider_paddings($portfolio) {
				var first_item_height = $('.portfolio-item:first .image-inner', $portfolio).outerHeight(),
					button_height = $('.portolio-slider-prev span', $portfolio).outerHeight(),
					itemPadding = parseFloat($('.portfolio-item:first', $portfolio).css('padding-top'));

				if (isNaN(itemPadding)) {
					itemPadding = 0;
				}

				$('.portolio-slider-prev', $portfolio).css('padding-top', (first_item_height - button_height) / 2 + itemPadding);
				$('.portolio-slider-next', $portfolio).css('padding-top', (first_item_height - button_height) / 2 + itemPadding);
		}

		function toggleNewsGridSharing(button) {
			var $meta = $(button).closest('.grid-post-meta-inner'),
				$likes = $('.grid-post-meta-comments-likes', $meta),
				$icons = $('.portfolio-sharing-pane', $meta);

			if ($meta.hasClass('active')) {
				$meta.removeClass('active');

				$('.socials-sharing', $meta).animate({
					width: 'toggle'
				}, 300, function() {
					$meta.removeClass('animation');
				});
			} else {
				$meta.css('min-width', $meta.outerWidth());

				$meta.addClass('active animation');

				$('.socials-sharing', $meta).animate({
					width: 'toggle'
				}, 200);
			}
		}

		$(window).resize(function() {
			$('.portfolio.portfolio-slider').each(function() {
				var $portfolio = $(this);
				setTimeout(function() {
					update_slider_paddings($portfolio);
				}, 10);
			});
		});

		$(document).ready(function () {
			$('.portfolio.products-grid').not('.portfolio-slider').each(initPortfolioGrid);
			$('.portfolio.portfolio-slider').each(initPortfolioSlider);
		});

	});
})(jQuery);
;
(function ($) {

	function Slider(el, options) {
		var self = this;
		this.el = el;
		this.$el = $(el);

		this.options = {
			element: 'li',
			margin: 0,
			delay: 100,
			duration: 200,
			nextPageDelay: 300,
			prevButton: false,
			nextButton: false,
			loop: true,
			afterInit: false,
			autoscroll: false,
			type: 'dynamic'
		};
		$.extend(this.options, options);
		self.initialize(true);
	}

	$.fn.reverse = [].reverse;

	$.fn.juraSlider = function(options) {
		return new Slider(this.get(0), options);
	}

	Slider.prototype = {
		initialize: function(first_init) {
			var self = this;

			if (first_init == undefined) {
				first_init = false;
			}

			this.afterAnimation(false);

			var first_element_height = this.$el.find(this.options.element + ':first').outerHeight();

			var padding_left = parseInt(this.$el.parent().css('padding-left'));
			var padding_right = parseInt(this.$el.parent().css('padding-right'));

			this.$el.css({
				whiteSpace: 'nowrap',
				left: padding_left,
				right: padding_right,
				top: 0,
				bottom: 0,
				height: first_element_height,
				position: 'absolute',
				clip: 'rect(auto, auto, ' + (first_element_height + 60) + 'px, auto)'
			});

			this.$el.parent().css({
				height: first_element_height,
				position: 'relative'
			});

			this.$el.find(this.options.element).css({
				margin: 0,
				position: 'absolute',
				left: this.$el.outerWidth(),
				top: 0,
				zIndex: 1
			}).removeClass('leftPosition currentPosition currentPosition-first currentPosition-last').addClass('rightPosition');

			if (first_init && this.options.nextButton)
				this.options.nextButton.click(function() {
					self.triggerNext(false);
				});

			if (first_init && this.options.prevButton)
				this.options.prevButton.click(function() {
					self.triggerPrev();
				});

			if (first_init) {
				let windowWidth = $(window).width();
				$(window).resize(function(){
					if ($(window).width() !== windowWidth){
						self.initialize(false);
						windowWidth = $(window).width();
					}
				});
			}

			if (first_init && $.isFunction(this.options.afterInit))
				this.options.afterInit();

			this.triggerNext(true, this.options.type == 'one' ? true : !first_init);

			this.$el.hover(
				function() {
					self.afterAnimation(false);
				},
				function(){
					self.afterAnimation();
				}
			);

		},

		beforeAnimation: function() {
			this.is_animation = true;
			if (this.autoscrollHandler) {
				clearInterval(this.autoscrollHandler);
				this.autoscrollHandler = false;
			}
		},

		afterAnimation: function(start) {
			var self = this;

			start = start === undefined ? true : false;
			this.is_animation = false;
			if (this.autoscrollHandler) {
				clearInterval(this.autoscrollHandler);
				this.autoscrollHandler = false;
			}
			if (start && this.options.autoscroll) {
				this.autoscrollHandler = setInterval(function() {
					self.triggerNext(false);
				}, this.options.autoscroll);
			}
		},

		getNextCount: function() {
			var self = this;
			var count = 0;
			var next_width = 0;
			var index = 0;
			var el_width = parseFloat(getComputedStyle(this.el, '').getPropertyValue('width'));
			var new_width = 0;
			this.$el.find(this.options.element + '.rightPosition').each(function() {
				var width = parseFloat(getComputedStyle(this, '').getPropertyValue('width'));
				if (index > 0)
					width += self.options.margin;
				new_width = next_width + width;
				if (new_width > el_width)
					return false;
				next_width = next_width + width;
				count += 1;
				index += 1;
			});
			if (this.options.loop && new_width < el_width) {
				this.$el.find(this.options.element + '.leftPosition').each(function() {
					var width = parseFloat(getComputedStyle(this, '').getPropertyValue('width'));
					if (index > 0)
						width += self.options.margin;
					new_width = next_width + width;
					if (new_width > el_width)
						return false;
					$(this).css({left: el_width}).removeClass('leftPosition').addClass('rightPosition').appendTo(self.$el);
					next_width = next_width + width;
					count += 1;
					index += 1;
				});
			}
			return [count, next_width];
		},

		getNextRightItem: function() {
			var firstRightItem = this.$el.find(this.options.element + '.rightPosition:first');
			if (firstRightItem.length) {
				return firstRightItem[0];
			}
			if (!this.options.loop) {
				return null;
			}

			var firstLeftItem = this.$el.find(this.options.element + '.leftPosition:first');
			if (!firstLeftItem.length) {
				return null;
			}

			firstLeftItem
				.addClass('rightPosition')
				.removeClass('leftPosition')
				.css('left', this.$el.outerWidth());

			this.$el.append(firstLeftItem);

			return firstLeftItem[0];
		},

		triggerNextOne: function() {
			var app = this,
				$currentItems = this.$el.find(this.options.element + '.currentPosition'),
				firstCurrentItemWidth = parseFloat($currentItems.first().outerWidth())

			var rightItem = this.getNextRightItem();
			if (rightItem == null) {
				return false;
			}

			$currentItems.push(rightItem);
			var count = $currentItems.length;

			app.beforeAnimation();

			$currentItems.removeClass('currentPosition-last').each(function(index) {
				var itemLeft = parseFloat($(this).css('left'));
				$(this).addClass('slider-animation' + (index == count - 1 ? ' currentPosition-last' : ''))
					.animate({left: itemLeft - firstCurrentItemWidth}, {
						duration: app.options.duration,
						queue: false,
						complete: function() {
							$(this).removeClass('slider-animation');

							if (index == 0) {
								$(this).removeClass('currentPosition currentPosition-first').addClass('leftPosition');
							}

							if (index == 1) {
								$(this).addClass('currentPosition-first');
							}

							if (index == count - 1) {
								$(this).removeClass('rightPosition').addClass('currentPosition');
								app.afterAnimation();
							}
						}
					});
			});
		},

		triggerNext: function(init, without_transition) {
			if (this.is_animation)
				return false;

			if (without_transition == undefined) {
				without_transition = false;
			}

			if (!init && this.options.type == 'one') {
				this.triggerNextOne();
				return false;
			}

			var self = this;
			var info = this.getNextCount();
			if (init && info[0] == this.$el.find(this.options.element).size()) {
				if (this.options.nextButton)
					this.options.nextButton.hide();
				if (this.options.prevButton)
					this.options.prevButton.hide();
			}
			if (info[0] < 1)
				return false;

			this.beforeAnimation();

			this.hideLeft();

			setTimeout(function() {
				self.showNext(info, without_transition);
			}, without_transition ? 1 : this.options.nextPageDelay);
		},

		hideLeft: function() {
			var delay = 0;
			var app = this;
			app.$el.find(app.options.element + '.currentPosition').each(function() {
				var self = this;
				setTimeout(function() {
					var offset = $(self).outerWidth();
					$(self).addClass('slider-animation').animate({left: -offset}, {
						duration: app.options.duration,
						queue: false,
						complete: function() {
							$(this).removeClass('currentPosition slider-animation currentPosition-first currentPosition-last').addClass('leftPosition');
						}
					});
				}, delay);
				delay += app.options.delay;
			});
		},

		showNext: function(info, without_transition) {
			var app = this;
			if (info[0] < 1)
				return false;

			var offset = (app.$el.width() - info[1]) / 2;
			var delay = 0;
			var index = 0;
			app.$el.find(app.options.element + '.rightPosition:lt(' + info[0] + ')').each(function() {
				var self = this;
				if (without_transition) {
					$(self)
						.removeClass('leftPosition rightPosition')
						.addClass('currentPosition')
						.css({
							left: offset
						});
				} else {
					app.showElement(self, offset, delay, index, info[0]);
				}
				delay += app.options.delay;
				offset += $(self).outerWidth() + app.options.margin;
				index += 1;
			});

			if (without_transition) {
				app.afterAnimation();
			}
		},

		showElement: function(element, offset, delay, index, count) {
			var app = this;
			setTimeout(function() {
				$(element).addClass('slider-animation' + (index == 0 ? ' currentPosition-first' : '') + (index == count - 1 ? ' currentPosition-last' : '')).animate({left: offset}, {
					duration: app.options.duration,
					queue: false,
					complete: function() {
						$(this).removeClass('rightPosition leftPosition slider-animation').addClass('currentPosition');
						if (index == count - 1) {
							app.afterAnimation();
						}
					}
				});
			}, delay);
		},

		getPrevCount: function() {
			var self = this;
			var count = 0;
			var prev_width = 0;
			var index = 0;
			var el_width = parseFloat(getComputedStyle(this.el, '').getPropertyValue('width'));
			var new_width = 0;
			this.$el.find(this.options.element + '.leftPosition').reverse().each(function() {
				var width = parseFloat(getComputedStyle(this, '').getPropertyValue('width'));
				if (index > 0)
					width += self.options.margin;
				new_width = prev_width + width;
				if (new_width > el_width)
					return false;
				prev_width = prev_width + width;
				count += 1;
				index += 1;
			});
			if (this.options.loop && new_width < el_width) {
				this.$el.find(this.options.element + '.rightPosition').reverse().each(function() {
					var width = parseFloat(getComputedStyle(this, '').getPropertyValue('width'));
					if (index > 0)
						width += self.options.margin;
					new_width = prev_width + width;
					if (new_width > el_width)
						return false;
					$(this).css({left: -width}).removeClass('rightPosition').addClass('leftPosition').prependTo(self.$el);
					prev_width = prev_width + width;
					count += 1;
					index += 1;
				});
			}
			return [count, prev_width];
		},

		getPrevLeftItem: function() {
			var lastLeftItem = this.$el.find(this.options.element + '.leftPosition:last');
			if (lastLeftItem.length) {
				return lastLeftItem[0];
			}
			if (!this.options.loop) {
				return null;
			}

			var lastRightItem = this.$el.find(this.options.element + '.rightPosition:last');
			if (!lastRightItem.length) {
				return null;
			}

			lastRightItem
				.removeClass('rightPosition')
				.addClass('leftPosition')
				.css('left', -lastRightItem.outerWidth());

			this.$el.prepend(lastRightItem);

			return lastRightItem[0];
		},

		triggerPrevOne: function() {
			var app = this,
				$currentItems = this.$el.find(this.options.element + '.currentPosition'),
				lastCurrentItemWidth = parseFloat($currentItems.last().outerWidth())

			var leftItem = this.getPrevLeftItem();
			if (leftItem == null) {
				return false;
			}

			$currentItems.reverse();
			$currentItems.push(leftItem);
			var count = $currentItems.length;

			app.beforeAnimation();

			$currentItems.removeClass('currentPosition-first').each(function(index) {
				var itemLeft = parseFloat($(this).css('left'));
				$(this).addClass('slider-animation' + (index == count - 1 ? ' currentPosition-first' : ''))
					.animate({left: itemLeft + lastCurrentItemWidth}, {
						duration: app.options.duration,
						queue: false,
						complete: function() {
							$(this).removeClass('slider-animation');

							if (index == 0) {
								$(this).removeClass('currentPosition currentPosition-last').addClass('rightPosition');
							}

							if (index == 1) {
								$(this).addClass('currentPosition-last');
							}

							if (index == count - 1) {
								$(this).removeClass('leftPosition').addClass('currentPosition');
								app.afterAnimation();
							}
						}
					});
			});
		},

		triggerPrev: function() {
			if (this.is_animation) {
				return false;
			}

			if (this.options.type == 'one') {
				this.triggerPrevOne();
				return false;
			}

			var self = this;
			var info = this.getPrevCount();
			if (info[0] < 1)
				return false;

			this.beforeAnimation();

			this.hideRight();

			setTimeout(function() {
				self.showPrev(info);
			}, this.options.nextPageDelay);
		},

		hideRight: function() {
			var delay = 0;
			var app = this;
			var offset = app.$el.width();
			app.$el.find(app.options.element + '.currentPosition').reverse().each(function() {
				var self = this;
				setTimeout(function() {
					$(self).addClass('slider-animation').animate({left: offset}, {
						duration: app.options.duration,
						queue: false,
						complete: function() {
							$(this).removeClass('currentPosition slider-animation currentPosition-first currentPosition-last').addClass('rightPosition');
						}
					});
				}, delay);
				delay += app.options.delay;
			});
		},

		showPrev: function(info) {
			var app = this;
			if (info[0] < 1)
				return false;

			var offset = info[1] + (app.$el.width() - info[1]) / 2;
			var delay = 0;
			var index = 0;

			app.$el.find(app.options.element + '.leftPosition').slice(-info[0]).reverse().each(function() {
				var self = this;
				offset -= $(self).outerWidth();
				if (index > 0)
					offset -= app.options.margin;
				app.showElement(self, offset, delay, index, info[0]);
				delay += app.options.delay;
				index += 1;
			});
		}
	};

}(jQuery));
;
(function($) {

	var prefixes = 'Webkit Moz ms Ms O'.split(' ');
    var docElemStyle = document.documentElement.style;

    function getStyleProperty( propName ) {
        if ( !propName ) {
            return;
        }

        // test standard property first
        if ( typeof docElemStyle[ propName ] === 'string' ) {
            return propName;
        }

        // capitalize
        propName = propName.charAt(0).toUpperCase() + propName.slice(1);

        // test vendor specific properties
        var prefixed;
        for ( var i=0, len = prefixes.length; i < len; i++ ) {
            prefixed = prefixes[i] + propName;
            if ( typeof docElemStyle[ prefixed ] === 'string' ) {
                return prefixed;
            }
        }
    }

    var transitionProperty = getStyleProperty('transition');
    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'otransitionend',
        transition: 'transitionend'
    }[ transitionProperty ];

	function getElementData(element, attributeNameCamel, attributeName, defaultValue) {
		if (element.dataset != undefined) {
			if (element.dataset[attributeNameCamel] != undefined) {
				return element.dataset[attributeNameCamel];
			} else {
				var value = $(element).data(attributeName);
				if (value == undefined) {
					return defaultValue;
				}
				return value;
			}
			return element.dataset[attributeNameCamel] != undefined ? element.dataset[attributeNameCamel] : defaultValue;
		}
		var value = this.getAttribute(attributeName);
		return value != null && value != '' ? value : defaultValue;
	}

	function Queue(lazyInstance) {
		this.lazyInstance = lazyInstance;
		this.queue = [];
		this.running = false;
		this.initTimer();
	}

	Queue.prototype = {
		add: function(element) {
			this.queue.push(element);
		},

		next: function() {
			if (this.running || this.queue.length == 0) return false;
			this.running = true;
			var element = this.queue.shift();
			if (element.isOnTop()) {
				element.forceShow();
				this.finishPosition();
				return;
			}
//			console.log(element.options['itemDelay']);
			setTimeout(function() {
			element.startAnimation();
			}, element.options['itemDelay']);
		},

		finishPosition: function() {
			this.running = false;
			this.next();
		},

		initTimer: function() {
			var self = this;

			this.timer = document.createElement('div');
			this.timer.className = 'lazy-loading-timer-element';
			document.body.appendChild(this.timer);

			this.timerCallback = function() {};
			$(this.timer).bind(transitionEndEvent, function(event) {
				self.timerCallback();
			});
			this.timer.className += ' start-timer';
		},

		startTimer: function(callback) {
			// this.timerCallback = callback;
			setTimeout(callback, 200);
			if (this.timer.className.indexOf('start-timer') != -1) {
				this.timer.className = this.timer.className.replace(' start-timer', '');
			} else {
				this.timer.className += ' start-timer';
			}
		}
	};

	function Group(el, lazyInstance) {
		this.el = el;
		this.$el = $(el);
		this.lazyInstance = lazyInstance;
		this.elements = [];
		this.showed = false;
		this.finishedElementsCount = 0;
		this.position = {
			left: 0,
			top: 0
		};
		this.options = {
			offset: parseFloat(getElementData(el, 'llOffset', 'll-offset', 0.7)),
			itemDelay: getElementData(el, 'llItemDelay', 'll-item-delay', -1),
			isFirst: lazyInstance.hasHeaderVisuals && this.el.className.indexOf('lazy-loading-first') != -1,
			force: getElementData(el, 'llForceStart', 'll-force-start', 0) != 0,
			finishDelay: getElementData(el, 'llFinishDelay', 'll-finish-delay', 200)
		};
		this.$el.addClass('lazy-loading-before-start-animation');
	}

	timeNow = function () {
		var newDate = new Date();
		return ((newDate.getHours() < 10)?"0":"") + newDate.getHours() +":"+ ((newDate.getMinutes() < 10)?"0":"") + newDate.getMinutes() +":"+ ((newDate.getSeconds() < 10)?"0":"") + newDate.getSeconds();
	}

	Group.prototype = {
		addElement: function(element) {
			this.elements.push(element);
		},

		setElements: function(elements) {
			this.elements = elements;
		},

		getElements: function() {
			return this.elements;
		},

		getElementsCount: function() {
			return this.elements.length;
		},

		getItemDelay: function() {
			return this.options.itemDelay;
		},

		updatePosition: function() {
			this.position = $(this.el).offset();
		},

		getPosition: function() {
			return this.position;
		},

		isShowed: function() {
			return this.showed;
		},

		isVisible: function() {
			if (this.options.force) return true;

			return (this.position.top + this.options.offset * this.el.offsetHeight <= this.lazyInstance.getWindowBottom()) &&
				(this.position.top + (1 - this.options.offset) * this.el.offsetHeight >= this.lazyInstance.getWindowTop());
		},

		isOnTop: function() {
			return false;
			//return this.position.top + this.el.offsetHeight < this.lazyInstance.getWindowBottom() - this.lazyInstance.getWindowHeight();
		},

		show: function() {
			this.lazyInstance.queue.add(this);
			this.showed = true;
		},

		forceShow: function() {
			this.showed = true;
			this.el.className = this.el.className.replace('lazy-loading-before-start-animation', 'lazy-loading-end-animation');
		},

		startAnimation: function() {
			var self = this;
			self.elements.forEach(function(element) {
				element.$el.bind(transitionEndEvent, function(event) {
					var target = event.target || event.srcElement;
					if (target != element.el) {
						return;
					}
					element.$el.unbind(transitionEndEvent);
					self.finishedElementsCount++;
					if (self.finishedElementsCount >= self.getElementsCount()) {
						setTimeout(function() {
							var className = self.el.className
								.replace('lazy-loading-before-start-animation', '')
								.replace('lazy-loading-start-animation', 'lazy-loading-end-animation');
							self.el.className = className;

							if (window.gemSettings.fullpageEnabled) {
								self.el.classList.add('fullpage-lazy-loading-initialized');
							}

						}, self.options.finishDelay);
					}
				});
				element.show();
			});

			if (self.options.finishDelay > 0) {
				self.lazyInstance.queue.startTimer(function() {
					self.finishAnimation();
				});
			} else {
				self.finishAnimation();
			}

			self.$el.addClass('lazy-loading-start-animation');
		},

		finishAnimation: function() {
			this.lazyInstance.queue.finishPosition();
		}
	};

	function Element(el, group) {
		this.el = el;
		this.$el = $(el);
		this.group = group;
		this.options = {
			effect: getElementData(el, 'llEffect', 'll-effect', ''),
			delay: getElementData(el, 'llItemDelay', 'll-item-delay', group.getItemDelay()),
			actionFunction: getElementData(el, 'llActionFunc', 'll-action-func', '')
		};
		this.options.queueType = this.options.delay != -1 ? 'async' : 'sync';
		if (this.options.effect != '') {
			this.$el.addClass('lazy-loading-item-' + this.getEffectClass());
		}
	}

	Element.prototype = {
		effects: {
			action: function(element) {
				if (!element.options.actionFunction ||
						window[element.options.actionFunction] == null ||
						window[element.options.actionFunction] == undefined) {
					return;
				}
				window[element.options.actionFunction](element.el);
			}
		},

		getEffectClass: function() {
			var effectClass = this.options.effect;
			if (effectClass == 'drop-right-without-wrap' || effectClass == 'drop-right-unwrap') {
				return 'drop-right';
			}
			return effectClass;
		},

		show: function() {
			if (this.effects[this.options.effect] != undefined) {
				this.effects[this.options.effect](this);
			}
		}
	};

	LazyLoading.prototype = {
		initialize: function() {
			this.queue = new Queue(this);
			this.groups = [];
			this.hasHeaderVisuals = $('.ls-wp-container').length > 0;
			this.$checkPoint = $('#lazy-loading-point');
			if (!this.$checkPoint.length) {
				$('<div id="lazy-loading-point"></div>').insertAfter('#main');
				this.$checkPoint = $('#lazy-loading-point');
			}
			this.windowBottom = 0;
			this.windowHeight = 0;
			this.scrollHandle = false;
			this.perspectiveOpened = false;
			this.$page = $('#page');
			$(document).ready(this.documentReady.bind(this));
		},

		documentReady: function() {
			var self = this;
			this.updateCheckPointOffset();
			this.updateWindowHeight();
			this.buildGroups();
			this.windowScroll();
			$(window).resize(this.windowResize.bind(this));

			$(window).scroll(this.windowScroll.bind(this));
			//this.$page.scroll(this.windowScroll.bind(this));
			$(window).on('perspective-modalview-opened', function() {
				self.perspectiveOpened = true;
			});
			$(window).on('perspective-modalview-closed', function() {
				self.perspectiveOpened = false;
			});
		},

		windowResize: function() {
			this.updateWindowHeight();
			this.updateGroups();
			this.windowScroll();
		},

		buildGroups: function() {
			var self = this;
			self.groups = [];

			$('.lazy-loading').each(function() {
				if (window.gemSettings.fullpageEnabled && $(this).hasClass('fullpage-lazy-loading-initialized')) {
					return;
				}

				var group = new Group(this, self);
				group.updatePosition();
				$('.lazy-loading-item', this).each(function() {
					group.addElement(new Element(this, group));
				});
				if (group.getElementsCount() > 0) {
					self.groups.push(group);
				}
			});
		},

		updateGroups: function() {
			var self = this;
			self.groups.forEach(function(group) {
				if (group.isShowed()) {
					return;
				}
				group.updatePosition();
			});
		},

		windowScroll: function() {
			if (this.scrollHandle) {
				//return;
			}
			this.scrollHandle = true;
			this.calculateWindowTop();
			this.calculateWindowBottom();
			if (this.isGroupsPositionsChanged()) {
				this.updateGroups();
			}
			this.groups.forEach(function(group) {
				if (group.isShowed()) {
					return;
				}
				if (group.isOnTop()) {
					group.forceShow();
				}
				if (group.isVisible()) {
					group.show();
				}
			});
			this.scrollHandle = false;
			this.queue.next();
		},

		calculateWindowBottom: function() {
			if (self.perspectiveOpened) {
				this.windowBottom = this.windowTop + this.$page.height();
			} else {
				this.windowBottom = this.windowTop + this.windowHeight;
			}
		},

		calculateWindowTop: function() {
			if (self.perspectiveOpened) {
				this.windowTop = this.$page.scrollTop();
			} else {
				this.windowTop = $(window).scrollTop();
			}
		},

		getWindowTop: function() {
			return this.windowTop;
		},

		getWindowBottom: function() {
			return this.windowBottom;
		},

		updateWindowHeight: function() {
			this.windowHeight = $(window).height();
		},

		getWindowHeight: function() {
			return this.windowHeight;
		},

		updateCheckPointOffset: function() {
			this.checkPointOffset = this.$checkPoint.length ? this.$checkPoint.offset().top : 0;
		},

		isGroupsPositionsChanged: function() {
			var oldCheckPointOffset = this.checkPointOffset;
			this.updateCheckPointOffset();
			return Math.abs(this.checkPointOffset - oldCheckPointOffset) > 1;
		},

		getLastGroup: function() {
			if (!this.groups.length) {
				return null;
			}
			return this.groups[this.groups.length - 1];
		}
	};

	function LazyLoading(options) {
		this.options = {};
		$.extend(this.options, options);
		this.initialize();
	}

	$.lazyLoading = function(options) {
		return new LazyLoading(options);
	}

	if (window.gemSettings !== undefined && !window.gemSettings.lasyDisabled) {
	    $('.wpb_text_column.wpb_animate_when_almost_visible.wpb_fade').each(function() {
	        $(this).wrap('<div class="lazy-loading"></div>').addClass('lazy-loading-item').data('ll-effect', 'fading');
	    });

	    $('.gem-list.lazy-loading').each(function() {
	        $(this).data('ll-item-delay', '200');
	        $('li', this).addClass('lazy-loading-item').data('ll-effect', 'slide-right');
	        $('li', this).each(function(index) {
	            $(this).attr("style", "transition-delay: " + (index + 1) * 0.2 + "s;");
	        });
	    });

	    $.lazyLoading();
	}

})(jQuery);
;
(()=>{var e=0,r={};function i(t){if(!t)throw new Error("No options passed to Waypoint constructor");if(!t.element)throw new Error("No element option passed to Waypoint constructor");if(!t.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=i.Adapter.extend({},i.defaults,t),this.element=this.options.element,this.adapter=new i.Adapter(this.element),this.callback=t.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=i.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=i.Context.findOrCreateByElement(this.options.context),i.offsetAliases[this.options.offset]&&(this.options.offset=i.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,e+=1}i.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},i.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},i.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key]},i.prototype.disable=function(){return this.enabled=!1,this},i.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},i.prototype.next=function(){return this.group.next(this)},i.prototype.previous=function(){return this.group.previous(this)},i.invokeAll=function(t){var e,i=[];for(e in r)i.push(r[e]);for(var o=0,n=i.length;o<n;o++)i[o][t]()},i.destroyAll=function(){i.invokeAll("destroy")},i.disableAll=function(){i.invokeAll("disable")},i.enableAll=function(){for(var t in i.Context.refreshAll(),r)r[t].enabled=!0;return this},i.refreshAll=function(){i.Context.refreshAll()},i.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},i.viewportWidth=function(){return document.documentElement.clientWidth},i.adapters=[],i.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},i.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.VcWaypoint=i})(),(()=>{function e(t){window.setTimeout(t,1e3/60)}var i=0,o={},u=window.VcWaypoint,t=window.onload;function n(t){this.element=t,this.Adapter=u.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,u.windowContext||(u.windowContext=!0,u.windowContext=new n(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}n.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},n.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".vcwaypoints"),delete o[this.key])},n.prototype.createThrottledResizeHandler=function(){var t=this;function e(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.vcwaypoints",function(){t.didResize||(t.didResize=!0,u.requestAnimationFrame(e))})},n.prototype.createThrottledScrollHandler=function(){var t=this;function e(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.vcwaypoints",function(){t.didScroll&&!u.isTouch||(t.didScroll=!0,u.requestAnimationFrame(e))})},n.prototype.handleResize=function(){u.Context.refreshAll()},n.prototype.handleScroll=function(){var t,e,i={},o={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(t in o){var n,r=o[t],s=r.newScroll>r.oldScroll?r.forward:r.backward;for(n in this.waypoints[t]){var a,l,h=this.waypoints[t][n];null!==h.triggerPoint&&(a=r.oldScroll<h.triggerPoint,l=r.newScroll>=h.triggerPoint,a&&l||!a&&!l)&&(h.queueTrigger(s),i[h.group.id]=h.group)}}for(e in i)i[e].flushTriggers();this.oldScroll={x:o.horizontal.newScroll,y:o.vertical.newScroll}},n.prototype.innerHeight=function(){return this.element==this.element.window?u.viewportHeight():this.adapter.innerHeight()},n.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},n.prototype.innerWidth=function(){return this.element==this.element.window?u.viewportWidth():this.adapter.innerWidth()},n.prototype.destroy=function(){var t,e=[];for(t in this.waypoints)for(var i in this.waypoints[t])e.push(this.waypoints[t][i]);for(var o=0,n=e.length;o<n;o++)e[o].destroy()},n.prototype.refresh=function(){var t,e,i=this.element==this.element.window,o=i?void 0:this.adapter.offset(),n={};for(e in this.handleScroll(),t={horizontal:{contextOffset:i?0:o.left,contextScroll:i?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:i?0:o.top,contextScroll:i?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var r,s=t[e];for(r in this.waypoints[e]){var a,l=this.waypoints[e][r],h=l.options.offset,p=l.triggerPoint,c=0,d=null==p;l.element!==l.element.window&&(c=l.adapter.offset()[s.offsetProp]),"function"==typeof h?h=h.apply(l):"string"==typeof h&&(h=parseFloat(h),-1<l.options.offset.indexOf("%"))&&(h=Math.ceil(s.contextDimension*h/100)),a=s.contextScroll-s.contextOffset,l.triggerPoint=Math.floor(c+a-h),c=p<s.oldScroll,a=l.triggerPoint>=s.oldScroll,h=!c&&!a,!d&&(c&&a)?(l.queueTrigger(s.backward),n[l.group.id]=l.group):(!d&&h||d&&s.oldScroll>=l.triggerPoint)&&(l.queueTrigger(s.forward),n[l.group.id]=l.group)}}return u.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},n.findOrCreateByElement=function(t){return n.findByElement(t)||new n(t)},n.refreshAll=function(){for(var t in o)o[t].refresh()},n.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){t&&t(),n.refreshAll()},u.requestAnimationFrame=function(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e).call(window,t)},u.Context=n})(),(()=>{function r(t,e){return t.triggerPoint-e.triggerPoint}function s(t,e){return e.triggerPoint-t.triggerPoint}var e={vertical:{},horizontal:{}},i=window.VcWaypoint;function o(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),e[this.axis][this.name]=this}o.prototype.add=function(t){this.waypoints.push(t)},o.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},o.prototype.flushTriggers=function(){for(var t in this.triggerQueues){var e=this.triggerQueues[t];e.sort("up"===t||"left"===t?s:r);for(var i=0,o=e.length;i<o;i+=1){var n=e[i];!n.options.continuous&&i!==e.length-1||n.trigger([t])}}this.clearTriggerQueues()},o.prototype.next=function(t){this.waypoints.sort(r);t=i.Adapter.inArray(t,this.waypoints);return t===this.waypoints.length-1?null:this.waypoints[t+1]},o.prototype.previous=function(t){this.waypoints.sort(r);t=i.Adapter.inArray(t,this.waypoints);return t?this.waypoints[t-1]:null},o.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},o.prototype.remove=function(t){t=i.Adapter.inArray(t,this.waypoints);-1<t&&this.waypoints.splice(t,1)},o.prototype.first=function(){return this.waypoints[0]},o.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},o.findOrCreate=function(t){return e[t.axis][t.name]||new o(t)},i.Group=o})(),(()=>{var i=window.jQuery,t=window.VcWaypoint;function o(t){this.$element=i(t)}i.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,e){o.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}}),i.each(["extend","inArray","isEmptyObject"],function(t,e){o[e]=i[e]}),t.adapters.push({name:"jquery",Adapter:o}),t.Adapter=o})(),(()=>{var n=window.VcWaypoint;function t(o){return function(){var e=[],i=arguments[0];return o.isFunction(arguments[0])&&((i=o.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var t=o.extend({},i,{element:this});"string"==typeof t.context&&(t.context=o(this).closest(t.context)[0]),e.push(new n(t))}),e}}window.jQuery&&(window.jQuery.fn.vcwaypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.vcwaypoint=t(window.Zepto))})();;
/*! This file is auto-generated */
window.wpAjax=jQuery.extend({unserialize:function(e){var r,t,a,i,n={};if(e)for(a in t=(e=(r=e.split("?"))[1]?r[1]:e).split("&"))"function"==typeof t.hasOwnProperty&&!t.hasOwnProperty(a)||(n[(i=t[a].split("="))[0]]=i[1]);return n},parseAjaxResponse:function(i,e,n){var o={},e=jQuery("#"+e).empty(),s="",t="";return i&&"object"==typeof i&&i.getElementsByTagName("wp_ajax")?(o.responses=[],o.errors=!1,jQuery("response",i).each(function(){var e=jQuery(this),r=jQuery(this.firstChild),a={action:e.attr("action"),what:r.get(0).nodeName,id:r.attr("id"),oldId:r.attr("old_id"),position:r.attr("position")};a.data=jQuery("response_data",r).text(),a.supplemental={},jQuery("supplemental",r).children().each(function(){"notice"===this.nodeName?t+=jQuery(this).text():a.supplemental[this.nodeName]=jQuery(this).text()}).length||(a.supplemental=!1),a.errors=[],jQuery("wp_error",r).each(function(){var e=jQuery(this).attr("code"),r={code:e,message:this.firstChild.nodeValue,data:!1},t=jQuery('wp_error_data[code="'+e+'"]',i);t&&(r.data=t.get()),(t=jQuery("form-field",t).text())&&(e=t),n&&wpAjax.invalidateForm(jQuery("#"+n+' :input[name="'+e+'"]').parents(".form-field:first")),s+="<p>"+r.message+"</p>",a.errors.push(r),o.errors=!0}).length||(a.errors=!1),o.responses.push(a)}),s.length?(e.html('<div class="notice notice-error" role="alert">'+s+"</div>"),wp.a11y.speak(s)):t.length&&(e.html('<div class="notice notice-success is-dismissible" role="alert"><p>'+t+"</p></div>"),jQuery(document).trigger("wp-updates-notice-added"),wp.a11y.speak(t)),o):isNaN(i)?(wp.a11y.speak(i),!e.html('<div class="notice notice-error" role="alert"><p>'+i+"</p></div>")):-1===(i=parseInt(i,10))?(wp.a11y.speak(wpAjax.noPerm),!e.html('<div class="notice notice-error" role="alert"><p>'+wpAjax.noPerm+"</p></div>")):0!==i||(wp.a11y.speak(wpAjax.broken),!e.html('<div class="notice notice-error" role="alert"><p>'+wpAjax.broken+"</p></div>"))},invalidateForm:function(e){return jQuery(e).addClass("form-invalid").find("input").one("change wp-check-valid-field",function(){jQuery(this).closest(".form-invalid").removeClass("form-invalid")})},validateForm:function(e){return e=jQuery(e),!wpAjax.invalidateForm(e.find(".form-required").filter(function(){return""===jQuery("input:visible",this).val()})).length}},wpAjax||{noPerm:"Sorry, you are not allowed to do that.",broken:"An error occurred while processing your request. Please refresh the page and try again."}),jQuery(function(e){e("form.validate").on("submit",function(){return wpAjax.validateForm(e(this))})});;
!function(){this.send_unique_to_ga=async function(e,t,n,o){await this.has_sent_feed(e,t)||(this.send_to_ga(n,o),this.mark_feed_as_sent(e,t)),this.maybe_trigger_feeds_sent()},this.send_to_ga=function(t,n){var o=gforms_google_analytics_frontend_strings.ua_tracker;if(void 0!==window.parent.gtag)window.parent.gtag("event",n,t);else{if(void 0===window.parent.ga&&void 0!==window.parent.__gaTracker&&(window.parent.ga=window.parent.__gaTracker),void 0===window.parent.ga)return void console.error('Google Tag Manger script is not active. You may need to enable "Output the Google Analytics Script" setting on the Forms -> Settings -> Google Analytics page');{let e="send";0<o.length&&(e=o+"."+e),window.parent.ga(e,n,t)}}o={type:"ga",eventName:n,parameters:t};this.consoleLog("Google Analytics event sent. Event data: "),this.consoleLog(JSON.stringify(o,null,2)),this.trigger_event("googleanalytics/event_sent",o),jQuery.post(gforms_google_analytics_frontend_strings.ajaxurl,{action:"gf_ga_log_event_sent",parameters:t,eventName:n,connection:"ga",nonce:gforms_google_analytics_frontend_strings.logging_nonce})},this.send_unique_to_gtm=async function(e,t,n,o){await this.has_sent_feed(e,t)?this.consoleLog("Event has already been sent. Aborting... Entry id: "+e+". Feed Id: "+t):(this.send_to_gtm(n,o),this.mark_feed_as_sent(e,t)),this.maybe_trigger_feeds_sent()},this.send_to_gtm=function(e,t){var n;void 0===window.parent.dataLayer?console.error('Google Tag Manger script is not active. You may need to enable "Output the Google Tag Manager Script" setting on the Forms -> Settings -> Google Analytics page'):(e.event=t,window.parent.dataLayer.push(e),n={type:"gtm",triggerName:t,parameters:e},this.consoleLog("Google Analytics event sent. Event data: "),this.consoleLog(JSON.stringify(n,null,2)),this.trigger_event("googleanalytics/event_sent",n),jQuery.post(gforms_google_analytics_frontend_strings.ajaxurl,{action:"gf_ga_log_event_sent",parameters:e,triggerName:t,connection:"gtm",nonce:gforms_google_analytics_frontend_strings.logging_nonce}))},this.has_sent_feed=async function(e,t){return(await jQuery.post(gforms_google_analytics_frontend_strings.ajaxurl,{action:"get_entry_meta",entry_id:e,feed_id:t,nonce:gforms_google_analytics_frontend_strings.nonce},"json")).data.event_sent},this.mark_feed_as_sent=function(e,t){jQuery.post(gforms_google_analytics_frontend_strings.ajaxurl,{action:"save_entry_meta",entry_id:e,feed_id:t,nonce:gforms_google_analytics_frontend_strings.nonce})},this.feeds_sent=0,this.maybe_trigger_feeds_sent=function(){this.feeds_sent++,this.consoleLog("Google Analytics event successfully sent: "+this.feeds_sent+" of "+window.ga_feed_count),this.feeds_sent>=window.ga_feed_count&&(this.consoleLog("All Google Analytics events have been sent."),this.trigger_event("googleanalytics/all_events_sent"),window.all_ga_events_sent=!0,this.feeds_sent=0,window.ga_feed_count=0)},this.trigger_event=function(e,t){e=new CustomEvent(e,{detail:t});window.dispatchEvent(e)},this.consoleLog=function(e){"1"===gforms_google_analytics_frontend_strings.logging_enabled&&console.log(e)},this.init=function(){(window.GF_Google_Analytics=this).trigger_event("googleanalytics/script_loaded")},this.init()}();