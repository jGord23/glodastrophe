//Wrapped in an outer function to preserve global this
(function (root) { var amdExports; define(['react'], function (React) { (function () {

(function(){"use strict";function a(a){var b,c,d,e,f=Array.prototype.slice.call(arguments,1);for(b=0,c=f.length;c>b;b+=1)if(d=f[b])for(e in d)o.call(d,e)&&(a[e]=d[e]);return a}function b(a,b,c){this.locales=a,this.formats=b,this.pluralFn=c}function c(a){this.id=a}function d(a,b,c,d){this.id=a,this.offset=b,this.options=c,this.pluralFn=d}function e(a,b,c,d){this.id=a,this.offset=b,this.numberFormat=c,this.string=d}function f(a,b){this.id=a,this.options=b}function g(a,b,c){var d="string"==typeof a?g.__parse(a):a;if(!d||"messageFormatPattern"!==d.type)throw new TypeError("A message must be provided as a String or AST.");c=this._mergeFormats(g.formats,c),q(this,"_locale",{value:this._resolveLocale(b)});var e=g.__localeData__[this._locale].pluralRuleFunction,f=this._compilePattern(d,b,c,e),h=this;this.format=function(a){return h._format(f,a)}}function h(a){return 400*a/146097}function i(a,b){b=b||{},D(a)&&(a=a.concat()),A(this,"_locale",{value:this._resolveLocale(a)}),A(this,"_locales",{value:a}),A(this,"_options",{value:{style:this._resolveStyle(b.style),units:this._isValidUnits(b.units)&&b.units}}),A(this,"_messages",{value:B(null)});var c=this;this.format=function(a){return c._format(a)}}function j(a){var b=R(null);return function(){var c=Array.prototype.slice.call(arguments),d=k(c),e=d&&b[d];return e||(e=R(a.prototype),a.apply(e,c),d&&(b[d]=e)),e}}function k(a){if("undefined"!=typeof JSON){var b,c,d,e=[];for(b=0,c=a.length;c>b;b+=1)d=a[b],e.push(d&&"object"==typeof d?l(d):d);return JSON.stringify(e)}}function l(a){var b,c,d,e,f=[],g=[];for(b in a)a.hasOwnProperty(b)&&g.push(b);var h=g.sort();for(c=0,d=h.length;d>c;c+=1)b=h[c],e={},e[b]=a[b],f[c]=e;return f}function m(a,b){if(!isFinite(a))throw new TypeError(b)}function n(a){w.__addLocaleData(a),L.__addLocaleData(a)}var o=Object.prototype.hasOwnProperty,p=function(){try{return!!Object.defineProperty({},"a",{})}catch(a){return!1}}(),q=(!p&&!Object.prototype.__defineGetter__,p?Object.defineProperty:function(a,b,c){"get"in c&&a.__defineGetter__?a.__defineGetter__(b,c.get):(!o.call(a,b)||"value"in c)&&(a[b]=c.value)}),r=Object.create||function(a,b){function c(){}var d,e;c.prototype=a,d=new c;for(e in b)o.call(b,e)&&q(d,e,b[e]);return d},s=b;b.prototype.compile=function(a){return this.pluralStack=[],this.currentPlural=null,this.pluralNumberFormat=null,this.compileMessage(a)},b.prototype.compileMessage=function(a){if(!a||"messageFormatPattern"!==a.type)throw new Error('Message AST is not of type: "messageFormatPattern"');var b,c,d,e=a.elements,f=[];for(b=0,c=e.length;c>b;b+=1)switch(d=e[b],d.type){case"messageTextElement":f.push(this.compileMessageText(d));break;case"argumentElement":f.push(this.compileArgument(d));break;default:throw new Error("Message element does not have a valid type")}return f},b.prototype.compileMessageText=function(a){return this.currentPlural&&/(^|[^\\])#/g.test(a.value)?(this.pluralNumberFormat||(this.pluralNumberFormat=new Intl.NumberFormat(this.locales)),new e(this.currentPlural.id,this.currentPlural.format.offset,this.pluralNumberFormat,a.value)):a.value.replace(/\\#/g,"#")},b.prototype.compileArgument=function(a){var b=a.format;if(!b)return new c(a.id);var e,g=this.formats,h=this.locales,i=this.pluralFn;switch(b.type){case"numberFormat":return e=g.number[b.style],{id:a.id,format:new Intl.NumberFormat(h,e).format};case"dateFormat":return e=g.date[b.style],{id:a.id,format:new Intl.DateTimeFormat(h,e).format};case"timeFormat":return e=g.time[b.style],{id:a.id,format:new Intl.DateTimeFormat(h,e).format};case"pluralFormat":return e=this.compileOptions(a),new d(a.id,b.offset,e,i);case"selectFormat":return e=this.compileOptions(a),new f(a.id,e);default:throw new Error("Message element does not have a valid format type")}},b.prototype.compileOptions=function(a){var b=a.format,c=b.options,d={};this.pluralStack.push(this.currentPlural),this.currentPlural="pluralFormat"===b.type?a:null;var e,f,g;for(e=0,f=c.length;f>e;e+=1)g=c[e],d[g.selector]=this.compileMessage(g.value);return this.currentPlural=this.pluralStack.pop(),d},c.prototype.format=function(a){return a?"string"==typeof a?a:String(a):""},d.prototype.getOption=function(a){var b=this.options,c=b["="+a]||b[this.pluralFn(a-this.offset)];return c||b.other},e.prototype.format=function(a){var b=this.numberFormat.format(a-this.offset);return this.string.replace(/(^|[^\\])#/g,"$1"+b).replace(/\\#/g,"#")},f.prototype.getOption=function(a){var b=this.options;return b[a]||b.other};var t=function(){function a(a,b){function c(){this.constructor=a}c.prototype=b.prototype,a.prototype=new c}function b(a,b,c,d,e,f){this.message=a,this.expected=b,this.found=c,this.offset=d,this.line=e,this.column=f,this.name="SyntaxError"}function c(a){function c(b){function c(b,c,d){var e,f;for(e=c;d>e;e++)f=a.charAt(e),"\n"===f?(b.seenCR||b.line++,b.column=1,b.seenCR=!1):"\r"===f||"\u2028"===f||"\u2029"===f?(b.line++,b.column=1,b.seenCR=!0):(b.column++,b.seenCR=!1)}return Ob!==b&&(Ob>b&&(Ob=0,Pb={line:1,column:1,seenCR:!1}),c(Pb,Ob,b),Ob=b),Pb}function d(a){Qb>Mb||(Mb>Qb&&(Qb=Mb,Rb=[]),Rb.push(a))}function e(d,e,f){function g(a){var b=1;for(a.sort(function(a,b){return a.description<b.description?-1:a.description>b.description?1:0});b<a.length;)a[b-1]===a[b]?a.splice(b,1):b++}function h(a,b){function c(a){function b(a){return a.charCodeAt(0).toString(16).toUpperCase()}return a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(a){return"\\x0"+b(a)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(a){return"\\x"+b(a)}).replace(/[\u0180-\u0FFF]/g,function(a){return"\\u0"+b(a)}).replace(/[\u1080-\uFFFF]/g,function(a){return"\\u"+b(a)})}var d,e,f,g=new Array(a.length);for(f=0;f<a.length;f++)g[f]=a[f].description;return d=a.length>1?g.slice(0,-1).join(", ")+" or "+g[a.length-1]:g[0],e=b?'"'+c(b)+'"':"end of input","Expected "+d+" but "+e+" found."}var i=c(f),j=f<a.length?a.charAt(f):null;return null!==e&&g(e),new b(null!==d?d:h(e,j),e,j,f,i.line,i.column)}function f(){var a;return a=g()}function g(){var a,b,c;for(a=Mb,b=[],c=h();c!==C;)b.push(c),c=h();return b!==C&&(Nb=a,b=F(b)),a=b}function h(){var a;return a=j(),a===C&&(a=l()),a}function i(){var b,c,d,e,f,g;if(b=Mb,c=[],d=Mb,e=u(),e!==C?(f=z(),f!==C?(g=u(),g!==C?(e=[e,f,g],d=e):(Mb=d,d=G)):(Mb=d,d=G)):(Mb=d,d=G),d!==C)for(;d!==C;)c.push(d),d=Mb,e=u(),e!==C?(f=z(),f!==C?(g=u(),g!==C?(e=[e,f,g],d=e):(Mb=d,d=G)):(Mb=d,d=G)):(Mb=d,d=G);else c=G;return c!==C&&(Nb=b,c=H(c)),b=c,b===C&&(b=Mb,c=t(),c!==C&&(c=a.substring(b,Mb)),b=c),b}function j(){var a,b;return a=Mb,b=i(),b!==C&&(Nb=a,b=I(b)),a=b}function k(){var b,c,e;if(b=x(),b===C){if(b=Mb,c=[],J.test(a.charAt(Mb))?(e=a.charAt(Mb),Mb++):(e=C,0===Sb&&d(K)),e!==C)for(;e!==C;)c.push(e),J.test(a.charAt(Mb))?(e=a.charAt(Mb),Mb++):(e=C,0===Sb&&d(K));else c=G;c!==C&&(c=a.substring(b,Mb)),b=c}return b}function l(){var b,c,e,f,g,h,i,j,l;return b=Mb,123===a.charCodeAt(Mb)?(c=L,Mb++):(c=C,0===Sb&&d(M)),c!==C?(e=u(),e!==C?(f=k(),f!==C?(g=u(),g!==C?(h=Mb,44===a.charCodeAt(Mb)?(i=O,Mb++):(i=C,0===Sb&&d(P)),i!==C?(j=u(),j!==C?(l=m(),l!==C?(i=[i,j,l],h=i):(Mb=h,h=G)):(Mb=h,h=G)):(Mb=h,h=G),h===C&&(h=N),h!==C?(i=u(),i!==C?(125===a.charCodeAt(Mb)?(j=Q,Mb++):(j=C,0===Sb&&d(R)),j!==C?(Nb=b,c=S(f,h),b=c):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G),b}function m(){var a;return a=n(),a===C&&(a=o(),a===C&&(a=p())),a}function n(){var b,c,e,f,g,h,i;return b=Mb,a.substr(Mb,6)===T?(c=T,Mb+=6):(c=C,0===Sb&&d(U)),c===C&&(a.substr(Mb,4)===V?(c=V,Mb+=4):(c=C,0===Sb&&d(W)),c===C&&(a.substr(Mb,4)===X?(c=X,Mb+=4):(c=C,0===Sb&&d(Y)))),c!==C?(e=u(),e!==C?(f=Mb,44===a.charCodeAt(Mb)?(g=O,Mb++):(g=C,0===Sb&&d(P)),g!==C?(h=u(),h!==C?(i=z(),i!==C?(g=[g,h,i],f=g):(Mb=f,f=G)):(Mb=f,f=G)):(Mb=f,f=G),f===C&&(f=N),f!==C?(Nb=b,c=Z(c,f),b=c):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G),b}function o(){var b,c,e,f,g,h,i,j,k;if(b=Mb,a.substr(Mb,6)===$?(c=$,Mb+=6):(c=C,0===Sb&&d(_)),c!==C)if(e=u(),e!==C)if(44===a.charCodeAt(Mb)?(f=O,Mb++):(f=C,0===Sb&&d(P)),f!==C)if(g=u(),g!==C)if(h=s(),h===C&&(h=N),h!==C)if(i=u(),i!==C){if(j=[],k=r(),k!==C)for(;k!==C;)j.push(k),k=r();else j=G;j!==C?(Nb=b,c=ab(h,j),b=c):(Mb=b,b=G)}else Mb=b,b=G;else Mb=b,b=G;else Mb=b,b=G;else Mb=b,b=G;else Mb=b,b=G;else Mb=b,b=G;return b}function p(){var b,c,e,f,g,h,i;if(b=Mb,a.substr(Mb,6)===bb?(c=bb,Mb+=6):(c=C,0===Sb&&d(cb)),c!==C)if(e=u(),e!==C)if(44===a.charCodeAt(Mb)?(f=O,Mb++):(f=C,0===Sb&&d(P)),f!==C)if(g=u(),g!==C){if(h=[],i=r(),i!==C)for(;i!==C;)h.push(i),i=r();else h=G;h!==C?(Nb=b,c=db(h),b=c):(Mb=b,b=G)}else Mb=b,b=G;else Mb=b,b=G;else Mb=b,b=G;else Mb=b,b=G;return b}function q(){var b,c,e,f;return b=Mb,c=Mb,61===a.charCodeAt(Mb)?(e=eb,Mb++):(e=C,0===Sb&&d(fb)),e!==C?(f=x(),f!==C?(e=[e,f],c=e):(Mb=c,c=G)):(Mb=c,c=G),c!==C&&(c=a.substring(b,Mb)),b=c,b===C&&(b=z()),b}function r(){var b,c,e,f,h,i,j,k,l;return b=Mb,c=u(),c!==C?(e=q(),e!==C?(f=u(),f!==C?(123===a.charCodeAt(Mb)?(h=L,Mb++):(h=C,0===Sb&&d(M)),h!==C?(i=u(),i!==C?(j=g(),j!==C?(k=u(),k!==C?(125===a.charCodeAt(Mb)?(l=Q,Mb++):(l=C,0===Sb&&d(R)),l!==C?(Nb=b,c=gb(e,j),b=c):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G),b}function s(){var b,c,e,f;return b=Mb,a.substr(Mb,7)===hb?(c=hb,Mb+=7):(c=C,0===Sb&&d(ib)),c!==C?(e=u(),e!==C?(f=x(),f!==C?(Nb=b,c=jb(f),b=c):(Mb=b,b=G)):(Mb=b,b=G)):(Mb=b,b=G),b}function t(){var b,c;if(Sb++,b=[],lb.test(a.charAt(Mb))?(c=a.charAt(Mb),Mb++):(c=C,0===Sb&&d(mb)),c!==C)for(;c!==C;)b.push(c),lb.test(a.charAt(Mb))?(c=a.charAt(Mb),Mb++):(c=C,0===Sb&&d(mb));else b=G;return Sb--,b===C&&(c=C,0===Sb&&d(kb)),b}function u(){var b,c,e;for(Sb++,b=Mb,c=[],e=t();e!==C;)c.push(e),e=t();return c!==C&&(c=a.substring(b,Mb)),b=c,Sb--,b===C&&(c=C,0===Sb&&d(nb)),b}function v(){var b;return ob.test(a.charAt(Mb))?(b=a.charAt(Mb),Mb++):(b=C,0===Sb&&d(pb)),b}function w(){var b;return qb.test(a.charAt(Mb))?(b=a.charAt(Mb),Mb++):(b=C,0===Sb&&d(rb)),b}function x(){var b,c,e,f,g,h;if(b=Mb,48===a.charCodeAt(Mb)?(c=sb,Mb++):(c=C,0===Sb&&d(tb)),c===C){if(c=Mb,e=Mb,ub.test(a.charAt(Mb))?(f=a.charAt(Mb),Mb++):(f=C,0===Sb&&d(vb)),f!==C){for(g=[],h=v();h!==C;)g.push(h),h=v();g!==C?(f=[f,g],e=f):(Mb=e,e=G)}else Mb=e,e=G;e!==C&&(e=a.substring(c,Mb)),c=e}return c!==C&&(Nb=b,c=wb(c)),b=c}function y(){var b,c,e,f,g,h,i,j;return xb.test(a.charAt(Mb))?(b=a.charAt(Mb),Mb++):(b=C,0===Sb&&d(yb)),b===C&&(b=Mb,a.substr(Mb,2)===zb?(c=zb,Mb+=2):(c=C,0===Sb&&d(Ab)),c!==C&&(Nb=b,c=Bb()),b=c,b===C&&(b=Mb,a.substr(Mb,2)===Cb?(c=Cb,Mb+=2):(c=C,0===Sb&&d(Db)),c!==C&&(Nb=b,c=Eb()),b=c,b===C&&(b=Mb,a.substr(Mb,2)===Fb?(c=Fb,Mb+=2):(c=C,0===Sb&&d(Gb)),c!==C&&(Nb=b,c=Hb()),b=c,b===C&&(b=Mb,a.substr(Mb,2)===Ib?(c=Ib,Mb+=2):(c=C,0===Sb&&d(Jb)),c!==C?(e=Mb,f=Mb,g=w(),g!==C?(h=w(),h!==C?(i=w(),i!==C?(j=w(),j!==C?(g=[g,h,i,j],f=g):(Mb=f,f=G)):(Mb=f,f=G)):(Mb=f,f=G)):(Mb=f,f=G),f!==C&&(f=a.substring(e,Mb)),e=f,e!==C?(Nb=b,c=Kb(e),b=c):(Mb=b,b=G)):(Mb=b,b=G))))),b}function z(){var a,b,c;if(a=Mb,b=[],c=y(),c!==C)for(;c!==C;)b.push(c),c=y();else b=G;return b!==C&&(Nb=a,b=Lb(b)),a=b}var A,B=arguments.length>1?arguments[1]:{},C={},D={start:f},E=f,F=function(a){return{type:"messageFormatPattern",elements:a}},G=C,H=function(a){var b,c,d,e,f,g="";for(b=0,d=a.length;d>b;b+=1)for(e=a[b],c=0,f=e.length;f>c;c+=1)g+=e[c];return g},I=function(a){return{type:"messageTextElement",value:a}},J=/^[^ \t\n\r,.+={}#]/,K={type:"class",value:"[^ \\t\\n\\r,.+={}#]",description:"[^ \\t\\n\\r,.+={}#]"},L="{",M={type:"literal",value:"{",description:'"{"'},N=null,O=",",P={type:"literal",value:",",description:'","'},Q="}",R={type:"literal",value:"}",description:'"}"'},S=function(a,b){return{type:"argumentElement",id:a,format:b&&b[2]}},T="number",U={type:"literal",value:"number",description:'"number"'},V="date",W={type:"literal",value:"date",description:'"date"'},X="time",Y={type:"literal",value:"time",description:'"time"'},Z=function(a,b){return{type:a+"Format",style:b&&b[2]}},$="plural",_={type:"literal",value:"plural",description:'"plural"'},ab=function(a,b){return{type:"pluralFormat",offset:a||0,options:b}},bb="select",cb={type:"literal",value:"select",description:'"select"'},db=function(a){return{type:"selectFormat",options:a}},eb="=",fb={type:"literal",value:"=",description:'"="'},gb=function(a,b){return{type:"optionalFormatPattern",selector:a,value:b}},hb="offset:",ib={type:"literal",value:"offset:",description:'"offset:"'},jb=function(a){return a},kb={type:"other",description:"whitespace"},lb=/^[ \t\n\r]/,mb={type:"class",value:"[ \\t\\n\\r]",description:"[ \\t\\n\\r]"},nb={type:"other",description:"optionalWhitespace"},ob=/^[0-9]/,pb={type:"class",value:"[0-9]",description:"[0-9]"},qb=/^[0-9a-f]/i,rb={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},sb="0",tb={type:"literal",value:"0",description:'"0"'},ub=/^[1-9]/,vb={type:"class",value:"[1-9]",description:"[1-9]"},wb=function(a){return parseInt(a,10)},xb=/^[^{}\\\0-\x1F \t\n\r]/,yb={type:"class",value:"[^{}\\\\\\0-\\x1F \\t\\n\\r]",description:"[^{}\\\\\\0-\\x1F \\t\\n\\r]"},zb="\\#",Ab={type:"literal",value:"\\#",description:'"\\\\#"'},Bb=function(){return"\\#"},Cb="\\{",Db={type:"literal",value:"\\{",description:'"\\\\{"'},Eb=function(){return"{"},Fb="\\}",Gb={type:"literal",value:"\\}",description:'"\\\\}"'},Hb=function(){return"}"},Ib="\\u",Jb={type:"literal",value:"\\u",description:'"\\\\u"'},Kb=function(a){return String.fromCharCode(parseInt(a,16))},Lb=function(a){return a.join("")},Mb=0,Nb=0,Ob=0,Pb={line:1,column:1,seenCR:!1},Qb=0,Rb=[],Sb=0;if("startRule"in B){if(!(B.startRule in D))throw new Error("Can't start parsing from rule \""+B.startRule+'".');E=D[B.startRule]}if(A=E(),A!==C&&Mb===a.length)return A;throw A!==C&&Mb<a.length&&d({type:"end",description:"end of input"}),e(null,Rb,Qb)}return a(b,Error),{SyntaxError:b,parse:c}}(),u=g;q(g,"formats",{enumerable:!0,value:{number:{currency:{style:"currency"},percent:{style:"percent"}},date:{"short":{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},"long":{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{"short":{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},"long":{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}}}),q(g,"__localeData__",{value:r(null)}),q(g,"__addLocaleData",{value:function(a){if(!a||!a.locale)throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");if(!a.pluralRuleFunction)throw new Error("Locale data provided to IntlMessageFormat is missing a `pluralRuleFunction` property");var b=a.locale.toLowerCase().split("-")[0];g.__localeData__[b]=a}}),q(g,"__parse",{value:t.parse}),q(g,"defaultLocale",{enumerable:!0,writable:!0,value:void 0}),g.prototype.resolvedOptions=function(){return{locale:this._locale}},g.prototype._compilePattern=function(a,b,c,d){var e=new s(b,c,d);return e.compile(a)},g.prototype._format=function(a,b){var c,d,e,f,g,h="";for(c=0,d=a.length;d>c;c+=1)if(e=a[c],"string"!=typeof e){if(f=e.id,!b||!o.call(b,f))throw new Error("A value must be provided for: "+f);g=b[f],h+=e.options?this._format(e.getOption(g),b):e.format(g)}else h+=e;return h},g.prototype._mergeFormats=function(b,c){var d,e,f={};for(d in b)o.call(b,d)&&(f[d]=e=r(b[d]),c&&o.call(c,d)&&a(e,c[d]));return f},g.prototype._resolveLocale=function(a){a||(a=g.defaultLocale),"string"==typeof a&&(a=[a]);var b,c,d,e=g.__localeData__;for(b=0,c=a.length;c>b;b+=1){if(d=a[b].split("-")[0].toLowerCase(),!/[a-z]{2,3}/.test(d))throw new Error("Language tag provided to IntlMessageFormat is not structrually valid: "+d);if(o.call(e,d))return d}throw new Error("No locale data has been added to IntlMessageFormat for: "+a.join(", "))};var v={locale:"en",pluralRuleFunction:function(a){var b=Math.floor(Math.abs(a)),c=a.toString().replace(/^[^.]*\.?/,"").length;return a=Math.floor(a),1===b&&0===c?"one":"other"}};u.__addLocaleData(v),u.defaultLocale="en";var w=u,x=Object.prototype.hasOwnProperty,y=Object.prototype.toString,z=function(){try{return!!Object.defineProperty({},"a",{})}catch(a){return!1}}(),A=(!z&&!Object.prototype.__defineGetter__,z?Object.defineProperty:function(a,b,c){"get"in c&&a.__defineGetter__?a.__defineGetter__(b,c.get):(!x.call(a,b)||"value"in c)&&(a[b]=c.value)}),B=Object.create||function(a,b){function c(){}var d,e;c.prototype=a,d=new c;for(e in b)x.call(b,e)&&A(d,e,b[e]);return d},C=Array.prototype.indexOf||function(a,b){var c=this;if(!c.length)return-1;for(var d=b||0,e=c.length;e>d;d++)if(c[d]===a)return d;return-1},D=Array.isArray||function(a){return"[object Array]"===y.call(a)},E=Date.now||function(){return(new Date).getTime()},F=Math.round,G=function(a,b){a=+a,b=+b;var c=F(b-a),d=F(c/1e3),e=F(d/60),f=F(e/60),g=F(f/24),i=F(g/7),j=h(g),k=F(12*j),l=F(j);return{millisecond:c,second:d,minute:e,hour:f,day:g,week:i,month:k,year:l}},H=i,I=["second","minute","hour","day","month","year"],J=["best fit","numeric"];A(i,"__localeData__",{value:B(null)}),A(i,"__addLocaleData",{value:function(a){if(!a||!a.locale)throw new Error("Locale data provided to IntlRelativeFormat is missing a `locale` property value");if(!a.fields)throw new Error("Locale data provided to IntlRelativeFormat is missing a `fields` property value");w.__addLocaleData(a);var b=a.locale.toLowerCase().split("-")[0];i.__localeData__[b]=a}}),A(i,"defaultLocale",{enumerable:!0,writable:!0,value:void 0}),A(i,"thresholds",{enumerable:!0,value:{second:45,minute:45,hour:22,day:26,month:11}}),i.prototype.resolvedOptions=function(){return{locale:this._locale,style:this._options.style,units:this._options.units}},i.prototype._compileMessage=function(a){var b,c=this._locales,d=this._locale,e=i.__localeData__,f=e[d].fields[a],g=f.relativeTime,h="",j="";for(b in g.future)g.future.hasOwnProperty(b)&&(h+=" "+b+" {"+g.future[b].replace("{0}","#")+"}");for(b in g.past)g.past.hasOwnProperty(b)&&(j+=" "+b+" {"+g.past[b].replace("{0}","#")+"}");var k="{when, select, future {{0, plural, "+h+"}}past {{0, plural, "+j+"}}}";return new w(k,c)},i.prototype._format=function(a){var b=E();if(void 0===a&&(a=b),!isFinite(a))throw new RangeError("The date value provided to IntlRelativeFormat#format() is not in valid range.");var c=G(b,a),d=this._options.units||this._selectUnits(c),e=c[d];if("numeric"!==this._options.style){var f=this._resolveRelativeUnits(e,d);if(f)return f}return this._resolveMessage(d).format({0:Math.abs(e),when:0>e?"past":"future"})},i.prototype._isValidUnits=function(a){if(!a||C.call(I,a)>=0)return!0;if("string"==typeof a){var b=/s$/.test(a)&&a.substr(0,a.length-1);if(b&&C.call(I,b)>=0)throw new Error('"'+a+'" is not a valid IntlRelativeFormat `units` value, did you mean: '+b)}throw new Error('"'+a+'" is not a valid IntlRelativeFormat `units` value, it must be one of: "'+I.join('", "')+'"')},i.prototype._resolveLocale=function(a){a||(a=i.defaultLocale),"string"==typeof a&&(a=[a]);var b,c,d,e=Object.prototype.hasOwnProperty,f=i.__localeData__;for(b=0,c=a.length;c>b;b+=1){if(d=a[b].split("-")[0].toLowerCase(),!/[a-z]{2,3}/.test(d))throw new Error("Language tag provided to IntlRelativeFormat is not structrually valid: "+d);if(e.call(f,d))return d}throw new Error("No locale data has been added to IntlRelativeFormat for: "+a.join(", "))},i.prototype._resolveMessage=function(a){var b=this._messages;return b[a]||(b[a]=this._compileMessage(a)),b[a]},i.prototype._resolveRelativeUnits=function(a,b){var c=i.__localeData__[this._locale].fields[b];return c.relative?c.relative[a]:void 0},i.prototype._resolveStyle=function(a){if(!a)return J[0];if(C.call(J,a)>=0)return a;throw new Error('"'+a+'" is not a valid IntlRelativeFormat `style` value, it must be one of: "'+J.join('", "')+'"')},i.prototype._selectUnits=function(a){var b,c,d;for(b=0,c=I.length;c>b&&(d=I[b],!(Math.abs(a[d])<i.thresholds[d]));b+=1);return d};var K={locale:"en",pluralRuleFunction:function(a){var b=Math.floor(Math.abs(a)),c=a.toString().replace(/^[^.]*\.?/,"").length;return a=Math.floor(a),1===b&&0===c?"one":"other"},fields:{second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{one:"in {0} second",other:"in {0} seconds"},past:{one:"{0} second ago",other:"{0} seconds ago"}}},minute:{displayName:"Minute",relativeTime:{future:{one:"in {0} minute",other:"in {0} minutes"},past:{one:"{0} minute ago",other:"{0} minutes ago"}}},hour:{displayName:"Hour",relativeTime:{future:{one:"in {0} hour",other:"in {0} hours"},past:{one:"{0} hour ago",other:"{0} hours ago"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"in {0} day",other:"in {0} days"},past:{one:"{0} day ago",other:"{0} days ago"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"in {0} month",other:"in {0} months"},past:{one:"{0} month ago",other:"{0} months ago"}}},year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"in {0} year",other:"in {0} years"},past:{one:"{0} year ago",other:"{0} years ago"}}}}};H.__addLocaleData(K),H.defaultLocale="en";var L=H,M={locale:"en",pluralRuleFunction:function(a){var b=Math.floor(Math.abs(a)),c=a.toString().replace(/^[^.]*\.?/,"").length;return a=Math.floor(a),1===b&&0===c?"one":"other"},fields:{second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{one:"in {0} second",other:"in {0} seconds"},past:{one:"{0} second ago",other:"{0} seconds ago"}}},minute:{displayName:"Minute",relativeTime:{future:{one:"in {0} minute",other:"in {0} minutes"},past:{one:"{0} minute ago",other:"{0} minutes ago"}}},hour:{displayName:"Hour",relativeTime:{future:{one:"in {0} hour",other:"in {0} hours"},past:{one:"{0} hour ago",other:"{0} hours ago"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"in {0} day",other:"in {0} days"},past:{one:"{0} day ago",other:"{0} days ago"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"in {0} month",other:"in {0} months"},past:{one:"{0} month ago",other:"{0} months ago"}}},year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"in {0} year",other:"in {0} years"},past:{one:"{0} year ago",other:"{0} years ago"}}}}},N=React,O=Object.prototype.hasOwnProperty,P=function(){try{return!!Object.defineProperty({},"a",{})}catch(a){return!1}}(),Q=(!P&&!Object.prototype.__defineGetter__,P?Object.defineProperty:function(a,b,c){"get"in c&&a.__defineGetter__?a.__defineGetter__(b,c.get):(!O.call(a,b)||"value"in c)&&(a[b]=c.value)}),R=Object.create||function(a,b){function c(){}var d,e;c.prototype=a,d=new c;for(e in b)O.call(b,e)&&Q(d,e,b[e]);return d},S=j,T={locales:N.PropTypes.oneOfType([N.PropTypes.string,N.PropTypes.array]),formats:N.PropTypes.object,messages:N.PropTypes.object},U={statics:{filterFormatOptions:function(a,b){return b||(b={}),(this.formatOptions||[]).reduce(function(c,d){return a.hasOwnProperty(d)?c[d]=a[d]:b.hasOwnProperty(d)&&(c[d]=b[d]),c},{})}},propsTypes:T,contextTypes:T,childContextTypes:T,getNumberFormat:S(Intl.NumberFormat),getDateTimeFormat:S(Intl.DateTimeFormat),getMessageFormat:S(w),getRelativeFormat:S(L),getChildContext:function(){var a=this.context,b=this.props;return{locales:b.locales||a.locales,formats:b.formats||a.formats,messages:b.messages||a.messages}},formatDate:function(a,b){return a=new Date(a),m(a,"A date or timestamp must be provided to formatDate()"),this._format("date",a,b)},formatTime:function(a,b){return a=new Date(a),m(a,"A date or timestamp must be provided to formatTime()"),this._format("time",a,b)},formatRelative:function(a,b){return a=new Date(a),m(a,"A date or timestamp must be provided to formatRelative()"),this._format("relative",a,b)},formatNumber:function(a,b){return this._format("number",a,b)},formatMessage:function(a,b){var c=this.props.locales||this.context.locales,d=this.props.formats||this.context.formats;return"function"==typeof a?a(b):("string"==typeof a&&(a=this.getMessageFormat(a,c,d)),a.format(b))},getIntlMessage:function(a){var b,c=this.props.messages||this.context.messages,d=a.split(".");try{b=d.reduce(function(a,b){return a[b]},c)}finally{if(void 0===b)throw new ReferenceError("Could not find Intl message: "+a)}return b},getNamedFormat:function(a,b){var c=this.props.formats||this.context.formats,d=null;try{d=c[a][b]}finally{if(!d)throw new ReferenceError("No "+a+" format named: "+b)}return d},_format:function(a,b,c){var d=this.props.locales||this.context.locales;switch(c&&"string"==typeof c&&(c=this.getNamedFormat(a,c)),a){case"date":case"time":return this.getDateTimeFormat(d,c).format(b);case"number":return this.getNumberFormat(d,c).format(b);case"relative":return this.getRelativeFormat(d,c).format(b);default:throw new Error("Unrecognized format type: "+a)}}},V=N.createClass({displayName:"FormattedDate",mixins:[U],statics:{formatOptions:["localeMatcher","timeZone","hour12","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"]},propTypes:{format:N.PropTypes.string,value:N.PropTypes.any.isRequired},render:function(){var a=this.props,b=a.value,c=a.format,d=c&&this.getNamedFormat("date",c),e=V.filterFormatOptions(a,d);return N.DOM.span(null,this.formatDate(b,e))}}),W=V,X=N.createClass({displayName:"FormattedTime",mixins:[U],statics:{formatOptions:["localeMatcher","timeZone","hour12","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"]},propTypes:{format:N.PropTypes.string,value:N.PropTypes.any.isRequired},render:function(){var a=this.props,b=a.value,c=a.format,d=c&&this.getNamedFormat("time",c),e=X.filterFormatOptions(a,d);return N.DOM.span(null,this.formatTime(b,e))}}),Y=X,Z=N.createClass({displayName:"FormattedRelative",mixins:[U],statics:{formatOptions:["style","units"]},propTypes:{format:N.PropTypes.string,value:N.PropTypes.any.isRequired},render:function(){var a=this.props,b=a.value,c=a.format,d=c&&this.getNamedFormat("relative",c),e=Z.filterFormatOptions(a,d);return N.DOM.span(null,this.formatRelative(b,e))}}),$=Z,_=N.createClass({displayName:"FormattedNumber",mixins:[U],statics:{formatOptions:["localeMatcher","style","currency","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"]},propTypes:{format:N.PropTypes.string,value:N.PropTypes.any.isRequired},render:function(){var a=this.props,b=a.value,c=a.format,d=c&&this.getNamedFormat("number",c),e=_.filterFormatOptions(a,d);return N.DOM.span(null,this.formatNumber(b,e))}}),ab=_,bb=N.createClass({displayName:"FormattedMessage",mixins:[U],propTypes:{tagName:N.PropTypes.string,message:N.PropTypes.string.isRequired},getDefaultProps:function(){return{tagName:"span"}},render:function(){var a=this.props,b=a.tagName,c=a.message,d=Math.floor(1099511627776*Math.random()).toString(16),e=new RegExp("(@__ELEMENT-"+d+"-\\d+__@)","g"),f={},g=function(){var a=0;return function(){return"@__ELEMENT-"+d+"-"+(a+=1)+"__@"}}(),h=Object.keys(a).reduce(function(b,c){var d,e=a[c];return N.isValidElement(e)?(d=g(),b[c]=d,f[d]=e):b[c]=e,b},{}),i=this.formatMessage(c,h),j=i.split(e).filter(function(a){return!!a}).map(function(a){return f[a]||a}),k=[b,null].concat(j);return N.createElement.apply(null,k)}}),cb=bb,db={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},eb=/[&><"']/g,fb=function(a){return(""+a).replace(eb,function(a){return db[a]})},gb=N.createClass({displayName:"FormattedHTMLMessage",mixins:[U],propTypes:{tagName:N.PropTypes.string,message:N.PropTypes.string.isRequired},getDefaultProps:function(){return{tagName:"span"}},render:function(){var a=this.props,b=a.tagName,c=a.message,d=Object.keys(a).reduce(function(b,c){var d=a[c];return"string"==typeof d?d=fb(d):N.isValidElement(d)&&(d=N.renderToStaticMarkup(d)),b[c]=d,b},{});return N.DOM[b]({dangerouslySetInnerHTML:{__html:this.formatMessage(c,d)}})}}),hb=gb;n(M);var ib={IntlMixin:U,FormattedDate:W,FormattedTime:Y,FormattedRelative:$,FormattedNumber:ab,FormattedMessage:cb,FormattedHTMLMessage:hb,__addLocaleData:n};"undefined"!=typeof window&&(window.ReactIntlMixin=U,U.__addLocaleData=n),this.ReactIntl=ib}).call(this);
//# sourceMappingURL=react-intl.min.js.map

amdExports = ReactIntl;

}.call(root));
    return amdExports;
}); }(this));