(function(){var e=this,t=e._,i={},r=Array.prototype,n=Object.prototype,o=Function.prototype,a=r.push,s=r.slice,l=r.concat,u=n.toString,c=n.hasOwnProperty,d=r.forEach,p=r.map,_=r.reduce,h=r.reduceRight,f=r.filter,g=r.every,v=r.some,y=r.indexOf,m=r.lastIndexOf,A=Array.isArray,T=Object.keys,w=o.bind,b=function(e){return e instanceof b?e:this instanceof b?void(this._wrapped=e):new b(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports._=b):e._=b,b.VERSION="1.4.4";var I=b.each=b.forEach=function(e,t,r){if(null!=e)if(d&&e.forEach===d)e.forEach(t,r);else if(e.length===+e.length){for(var n=0,o=e.length;o>n;n++)if(t.call(r,e[n],n,e)===i)return}else for(var a in e)if(b.has(e,a)&&t.call(r,e[a],a,e)===i)return};b.map=b.collect=function(e,t,i){var r=[];return null==e?r:p&&e.map===p?e.map(t,i):(I(e,function(e,n,o){r[r.length]=t.call(i,e,n,o)}),r)};var E="Reduce of empty array with no initial value";b.reduce=b.foldl=b.inject=function(e,t,i,r){var n=arguments.length>2;if(null==e&&(e=[]),_&&e.reduce===_)return r&&(t=b.bind(t,r)),n?e.reduce(t,i):e.reduce(t);if(I(e,function(e,o,a){n?i=t.call(r,i,e,o,a):(i=e,n=!0)}),!n)throw new TypeError(E);return i},b.reduceRight=b.foldr=function(e,t,i,r){var n=arguments.length>2;if(null==e&&(e=[]),h&&e.reduceRight===h)return r&&(t=b.bind(t,r)),n?e.reduceRight(t,i):e.reduceRight(t);var o=e.length;if(o!==+o){var a=b.keys(e);o=a.length}if(I(e,function(s,l,u){l=a?a[--o]:--o,n?i=t.call(r,i,e[l],l,u):(i=e[l],n=!0)}),!n)throw new TypeError(E);return i},b.find=b.detect=function(e,t,i){var r;return S(e,function(e,n,o){return t.call(i,e,n,o)?(r=e,!0):void 0}),r},b.filter=b.select=function(e,t,i){var r=[];return null==e?r:f&&e.filter===f?e.filter(t,i):(I(e,function(e,n,o){t.call(i,e,n,o)&&(r[r.length]=e)}),r)},b.reject=function(e,t,i){return b.filter(e,function(e,r,n){return!t.call(i,e,r,n)},i)},b.every=b.all=function(e,t,r){t||(t=b.identity);var n=!0;return null==e?n:g&&e.every===g?e.every(t,r):(I(e,function(e,o,a){return(n=n&&t.call(r,e,o,a))?void 0:i}),!!n)};var S=b.some=b.any=function(e,t,r){t||(t=b.identity);var n=!1;return null==e?n:v&&e.some===v?e.some(t,r):(I(e,function(e,o,a){return n||(n=t.call(r,e,o,a))?i:void 0}),!!n)};b.contains=b.include=function(e,t){return null==e?!1:y&&e.indexOf===y?-1!=e.indexOf(t):S(e,function(e){return e===t})},b.invoke=function(e,t){var i=s.call(arguments,2),r=b.isFunction(t);return b.map(e,function(e){return(r?t:e[t]).apply(e,i)})},b.pluck=function(e,t){return b.map(e,function(e){return e[t]})},b.where=function(e,t,i){return b.isEmpty(t)?i?null:[]:b[i?"find":"filter"](e,function(e){for(var i in t)if(t[i]!==e[i])return!1;return!0})},b.findWhere=function(e,t){return b.where(e,t,!0)},b.max=function(e,t,i){if(!t&&b.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&b.isEmpty(e))return-1/0;var r={computed:-1/0,value:-1/0};return I(e,function(e,n,o){var a=t?t.call(i,e,n,o):e;a>=r.computed&&(r={value:e,computed:a})}),r.value},b.min=function(e,t,i){if(!t&&b.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&b.isEmpty(e))return 1/0;var r={computed:1/0,value:1/0};return I(e,function(e,n,o){var a=t?t.call(i,e,n,o):e;a<r.computed&&(r={value:e,computed:a})}),r.value},b.shuffle=function(e){var t,i=0,r=[];return I(e,function(e){t=b.random(i++),r[i-1]=r[t],r[t]=e}),r};var x=function(e){return b.isFunction(e)?e:function(t){return t[e]}};b.sortBy=function(e,t,i){var r=x(t);return b.pluck(b.map(e,function(e,t,n){return{value:e,index:t,criteria:r.call(i,e,t,n)}}).sort(function(e,t){var i=e.criteria,r=t.criteria;if(i!==r){if(i>r||void 0===i)return 1;if(r>i||void 0===r)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,i,r){var n={},o=x(t||b.identity);return I(e,function(t,a){var s=o.call(i,t,a,e);r(n,s,t)}),n};b.groupBy=function(e,t,i){return L(e,t,i,function(e,t,i){(b.has(e,t)?e[t]:e[t]=[]).push(i)})},b.countBy=function(e,t,i){return L(e,t,i,function(e,t){b.has(e,t)||(e[t]=0),e[t]++})},b.sortedIndex=function(e,t,i,r){i=null==i?b.identity:x(i);for(var n=i.call(r,t),o=0,a=e.length;a>o;){var s=o+a>>>1;i.call(r,e[s])<n?o=s+1:a=s}return o},b.toArray=function(e){return e?b.isArray(e)?s.call(e):e.length===+e.length?b.map(e,b.identity):b.values(e):[]},b.size=function(e){return null==e?0:e.length===+e.length?e.length:b.keys(e).length},b.first=b.head=b.take=function(e,t,i){return null==e?void 0:null==t||i?e[0]:s.call(e,0,t)},b.initial=function(e,t,i){return s.call(e,0,e.length-(null==t||i?1:t))},b.last=function(e,t,i){return null==e?void 0:null==t||i?e[e.length-1]:s.call(e,Math.max(e.length-t,0))},b.rest=b.tail=b.drop=function(e,t,i){return s.call(e,null==t||i?1:t)},b.compact=function(e){return b.filter(e,b.identity)};var O=function(e,t,i){return I(e,function(e){b.isArray(e)?t?a.apply(i,e):O(e,t,i):i.push(e)}),i};b.flatten=function(e,t){return O(e,t,[])},b.without=function(e){return b.difference(e,s.call(arguments,1))},b.uniq=b.unique=function(e,t,i,r){b.isFunction(t)&&(r=i,i=t,t=!1);var n=i?b.map(e,i,r):e,o=[],a=[];return I(n,function(i,r){(t?r&&a[a.length-1]===i:b.contains(a,i))||(a.push(i),o.push(e[r]))}),o},b.union=function(){return b.uniq(l.apply(r,arguments))},b.intersection=function(e){var t=s.call(arguments,1);return b.filter(b.uniq(e),function(e){return b.every(t,function(t){return b.indexOf(t,e)>=0})})},b.difference=function(e){var t=l.apply(r,s.call(arguments,1));return b.filter(e,function(e){return!b.contains(t,e)})},b.zip=function(){for(var e=s.call(arguments),t=b.max(b.pluck(e,"length")),i=new Array(t),r=0;t>r;r++)i[r]=b.pluck(e,""+r);return i},b.object=function(e,t){if(null==e)return{};for(var i={},r=0,n=e.length;n>r;r++)t?i[e[r]]=t[r]:i[e[r][0]]=e[r][1];return i},b.indexOf=function(e,t,i){if(null==e)return-1;var r=0,n=e.length;if(i){if("number"!=typeof i)return r=b.sortedIndex(e,t),e[r]===t?r:-1;r=0>i?Math.max(0,n+i):i}if(y&&e.indexOf===y)return e.indexOf(t,i);for(;n>r;r++)if(e[r]===t)return r;return-1},b.lastIndexOf=function(e,t,i){if(null==e)return-1;var r=null!=i;if(m&&e.lastIndexOf===m)return r?e.lastIndexOf(t,i):e.lastIndexOf(t);for(var n=r?i:e.length;n--;)if(e[n]===t)return n;return-1},b.range=function(e,t,i){arguments.length<=1&&(t=e||0,e=0),i=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/i),0),n=0,o=new Array(r);r>n;)o[n++]=e,e+=i;return o},b.bind=function(e,t){if(e.bind===w&&w)return w.apply(e,s.call(arguments,1));var i=s.call(arguments,2);return function(){return e.apply(t,i.concat(s.call(arguments)))}},b.partial=function(e){var t=s.call(arguments,1);return function(){return e.apply(this,t.concat(s.call(arguments)))}},b.bindAll=function(e){var t=s.call(arguments,1);return 0===t.length&&(t=b.functions(e)),I(t,function(t){e[t]=b.bind(e[t],e)}),e},b.memoize=function(e,t){var i={};return t||(t=b.identity),function(){var r=t.apply(this,arguments);return b.has(i,r)?i[r]:i[r]=e.apply(this,arguments)}},b.delay=function(e,t){var i=s.call(arguments,2);return setTimeout(function(){return e.apply(null,i)},t)},b.defer=function(e){return b.delay.apply(b,[e,1].concat(s.call(arguments,1)))},b.throttle=function(e,t){var i,r,n,o,a=0,s=function(){a=new Date,n=null,o=e.apply(i,r)};return function(){var l=new Date,u=t-(l-a);return i=this,r=arguments,0>=u?(clearTimeout(n),n=null,a=l,o=e.apply(i,r)):n||(n=setTimeout(s,u)),o}},b.debounce=function(e,t,i){var r,n;return function(){var o=this,a=arguments,s=function(){r=null,i||(n=e.apply(o,a))},l=i&&!r;return clearTimeout(r),r=setTimeout(s,t),l&&(n=e.apply(o,a)),n}},b.once=function(e){var t,i=!1;return function(){return i?t:(i=!0,t=e.apply(this,arguments),e=null,t)}},b.wrap=function(e,t){return function(){var i=[e];return a.apply(i,arguments),t.apply(this,i)}},b.compose=function(){var e=arguments;return function(){for(var t=arguments,i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},b.after=function(e,t){return 0>=e?t():function(){return--e<1?t.apply(this,arguments):void 0}},b.keys=T||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var i in e)b.has(e,i)&&(t[t.length]=i);return t},b.values=function(e){var t=[];for(var i in e)b.has(e,i)&&t.push(e[i]);return t},b.pairs=function(e){var t=[];for(var i in e)b.has(e,i)&&t.push([i,e[i]]);return t},b.invert=function(e){var t={};for(var i in e)b.has(e,i)&&(t[e[i]]=i);return t},b.functions=b.methods=function(e){var t=[];for(var i in e)b.isFunction(e[i])&&t.push(i);return t.sort()},b.extend=function(e){return I(s.call(arguments,1),function(t){if(t)for(var i in t)e[i]=t[i]}),e},b.pick=function(e){var t={},i=l.apply(r,s.call(arguments,1));return I(i,function(i){i in e&&(t[i]=e[i])}),t},b.omit=function(e){var t={},i=l.apply(r,s.call(arguments,1));for(var n in e)b.contains(i,n)||(t[n]=e[n]);return t},b.defaults=function(e){return I(s.call(arguments,1),function(t){if(t)for(var i in t)null==e[i]&&(e[i]=t[i])}),e},b.clone=function(e){return b.isObject(e)?b.isArray(e)?e.slice():b.extend({},e):e},b.tap=function(e,t){return t(e),e};var N=function(e,t,i,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof b&&(e=e._wrapped),t instanceof b&&(t=t._wrapped);var n=u.call(e);if(n!=u.call(t))return!1;switch(n){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var o=i.length;o--;)if(i[o]==e)return r[o]==t;i.push(e),r.push(t);var a=0,s=!0;if("[object Array]"==n){if(a=e.length,s=a==t.length)for(;a--&&(s=N(e[a],t[a],i,r)););}else{var l=e.constructor,c=t.constructor;if(l!==c&&!(b.isFunction(l)&&l instanceof l&&b.isFunction(c)&&c instanceof c))return!1;for(var d in e)if(b.has(e,d)&&(a++,!(s=b.has(t,d)&&N(e[d],t[d],i,r))))break;if(s){for(d in t)if(b.has(t,d)&&!a--)break;s=!a}}return i.pop(),r.pop(),s};b.isEqual=function(e,t){return N(e,t,[],[])},b.isEmpty=function(e){if(null==e)return!0;if(b.isArray(e)||b.isString(e))return 0===e.length;for(var t in e)if(b.has(e,t))return!1;return!0},b.isElement=function(e){return!(!e||1!==e.nodeType)},b.isArray=A||function(e){return"[object Array]"==u.call(e)},b.isObject=function(e){return e===Object(e)},I(["Arguments","Function","String","Number","Date","RegExp"],function(e){b["is"+e]=function(t){return u.call(t)=="[object "+e+"]"}}),b.isArguments(arguments)||(b.isArguments=function(e){return!(!e||!b.has(e,"callee"))}),"function"!=typeof/./&&(b.isFunction=function(e){return"function"==typeof e}),b.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},b.isNaN=function(e){return b.isNumber(e)&&e!=+e},b.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==u.call(e)},b.isNull=function(e){return null===e},b.isUndefined=function(e){return void 0===e},b.has=function(e,t){return c.call(e,t)},b.noConflict=function(){return e._=t,this},b.identity=function(e){return e},b.times=function(e,t,i){for(var r=Array(e),n=0;e>n;n++)r[n]=t.call(i,n);return r},b.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var C={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};C.unescape=b.invert(C.escape);var P={escape:new RegExp("["+b.keys(C.escape).join("")+"]","g"),unescape:new RegExp("("+b.keys(C.unescape).join("|")+")","g")};b.each(["escape","unescape"],function(e){b[e]=function(t){return null==t?"":(""+t).replace(P[e],function(t){return C[e][t]})}}),b.result=function(e,t){if(null==e)return null;var i=e[t];return b.isFunction(i)?i.call(e):i},b.mixin=function(e){I(b.functions(e),function(t){var i=b[t]=e[t];b.prototype[t]=function(){var e=[this._wrapped];return a.apply(e,arguments),D.call(this,i.apply(b,e))}})};var k=0;b.uniqueId=function(e){var t=++k+"";return e?e+t:t},b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var U=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},R=/\\|'|\r|\n|\t|\u2028|\u2029/g;b.template=function(e,t,i){var r;i=b.defaults({},i,b.templateSettings);var n=new RegExp([(i.escape||U).source,(i.interpolate||U).source,(i.evaluate||U).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(n,function(t,i,r,n,s){return a+=e.slice(o,s).replace(R,function(e){return"\\"+B[e]}),i&&(a+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),n&&(a+="';\n"+n+"\n__p+='"),o=s+t.length,t}),a+="';\n",i.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(i.variable||"obj","_",a)}catch(s){throw s.source=a,s}if(t)return r(t,b);var l=function(e){return r.call(this,e,b)};return l.source="function("+(i.variable||"obj")+"){\n"+a+"}",l},b.chain=function(e){return b(e).chain()};var D=function(e){return this._chain?b(e).chain():e};b.mixin(b),I(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];b.prototype[e]=function(){var i=this._wrapped;return t.apply(i,arguments),"shift"!=e&&"splice"!=e||0!==i.length||delete i[0],D.call(this,i)}}),I(["concat","join","slice"],function(e){var t=r[e];b.prototype[e]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),b.extend(b.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);