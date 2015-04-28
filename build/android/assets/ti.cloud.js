function defineCloud(e){function t(e,t,r){if(void 0===t)throw"Argument "+e+" was not provided!";if(typeof t!=r)throw"Argument "+e+" was an unexpected type! Expected: "+r+", Received: "+typeof t}function r(t,r,n,o){e.debug&&Ti.API.info('ACS Request: { url: "'+t+'", verb: "'+r+'", data: '+JSON.stringify(n)+" })"),_.send(t,r,n,function(t){if(o){var r=t.response||{};t.meta&&"ok"==t.meta.status?(r.success=!0,r.error=!1,r.meta=t.meta,e.debug&&Ti.API.info(JSON.stringify(r))):(r.success=!1,r.error=!0,r.code=t.meta?t.meta.code:t.statusCode,r.message=t.meta?t.meta.message:t.message||t.statusText,e.debug&&Ti.API.error(r.code+": "+r.message)),o(r)}})}function n(e,n){t("data",e,"object"),t("callback",n,"function"),i(this),this.url||(this.url=this.restNamespace+"/"+this.restMethod+".json"),r(this.url,this.verb,e,n)}function o(){n.call(this,2==arguments.length?arguments[0]:{},2==arguments.length?arguments[1]:arguments[0])}function i(e){e.restNamespace||(e.restNamespace=e.property.toLowerCase()),e.restMethod||(e.restMethod=e.method.toLowerCase())}function s(e,t){e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t;for(var r=Array(80),n=1732584193,o=-271733879,i=-1732584194,s=271733878,l=-1009589776,c=0;c<e.length;c+=16){for(var u=n,d=o,h=i,p=s,f=l,_=0;80>_;_++){r[_]=16>_?e[c+_]:(r[_-3]^r[_-8]^r[_-14]^r[_-16])<<1|(r[_-3]^r[_-8]^r[_-14]^r[_-16])>>>31;var m,g=n<<5|n>>>27;m=20>_?o&i|~o&s:40>_?o^i^s:60>_?o&i|o&s|i&s:o^i^s,g=a(a(g,m),a(a(l,r[_]),20>_?1518500249:40>_?1859775393:60>_?-1894007588:-899497514)),l=s,s=i,i=o<<30|o>>>2,o=n,n=g}n=a(n,u),o=a(o,d),i=a(i,h),s=a(s,p),l=a(l,f)}return[n,o,i,s,l]}function a(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function l(e){for(var t=[],r=(1<<f)-1,n=0;n<e.length*f;n+=f)t[n>>5]|=(e.charCodeAt(n/f)&r)<<32-f-n%32;return t}function c(e,t,r,n,o){var i=!1;return this.appKey=e,this.oauthKey=t,this.oauthSecret=r,this.apiBaseURL=n?n:u.sdk.url.baseURL,this.authBaseURL=o?o:u.sdk.url.authBaseURL,this.useThreeLegged=function(e){i=e,this.oauthKey||(this.oauthKey=this.appKey)},this.isThreeLegged=function(){return i},this}var u,d={PROPERTY_TYPE_ONLY_LATEST:0,PROPERTY_TYPE_SLASH_COMBINE:1,PROPERTY_TYPE_IGNORE:2};d.build=function m(e,t){var r,n=t.children||[];for(r in n)if(n.hasOwnProperty(r)){var o=n[r],i=o.propertyTypes||t.propertyTypes||{};i.children=d.PROPERTY_TYPE_IGNORE;for(var s in t)if(t.hasOwnProperty(s))switch(i[s]||d.PROPERTY_TYPE_ONLY_LATEST){case d.PROPERTY_TYPE_ONLY_LATEST:o[s]=void 0===o[s]?t[s]:o[s];break;case d.PROPERTY_TYPE_SLASH_COMBINE:var a=[];t[s]&&a.push(t[s]),o[s]&&a.push(o[s]),o[s]=a.join("/")}o.method&&!o.children?e[o.method]=function(e){return function(){return e.executor.apply(e,arguments)}}(o):o.property&&m(e[o.property]={},o)}},d.build(e,{verb:"GET",executor:n,children:[{method:"sendRequest",executor:function(e,n){t("params",e,"object"),t("url",e.url,"string"),t("method",e.method,"string"),t("callback",n,"function"),r(e.url,e.method,e.data?e.data:{},n)}},{method:"hasStoredSession",executor:function(){return Ti.API.warn("Cloud.hasStoredSession has been deprecated. Use Cloud.sessionId property"),_.hasStoredSession()}},{method:"retrieveStoredSession",executor:function(){return Ti.API.warn("Cloud.retrieveStoredSession has been deprecated. Use Cloud.sessionId property"),_.retrieveStoredSession()}},{property:"ACLs",children:[{method:"create",verb:"POST"},{method:"update",verb:"PUT"},{method:"show"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"addUser",restMethod:"add",verb:"POST"},{method:"removeUser",restMethod:"remove",verb:"DELETE"},{method:"checkUser",restMethod:"check"}]},{property:"Chats",children:[{method:"create",verb:"POST"},{method:"query"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"queryChatGroups",restMethod:"query_chat_groups",executor:o},{method:"getChatGroups",restMethod:"get_chat_groups",executor:o}]},{property:"Checkins",children:[{method:"create",verb:"POST"},{method:"query",executor:o},{method:"show"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Clients",children:[{method:"geolocate",executor:o}]},{property:"Objects",executor:function(e,r){var o;e&&"object"==typeof e&&(t("data.classname",e.classname,"string"),i(this),this.url=this.restNamespace+"/"+e.classname+"/"+this.restMethod+".json",o=e.classname,delete e.classname),n.call(this,e,r),e.classname=o},children:[{method:"create",verb:"POST"},{method:"show"},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"query"}]},{property:"Emails",restNamespace:"custom_mailer",children:[{method:"send",verb:"POST",restMethod:"email_from_template"}]},{property:"Events",children:[{method:"create",verb:"POST"},{method:"show"},{method:"showOccurrences",restMethod:"show/occurrences"},{method:"query",executor:o},{method:"queryOccurrences",restMethod:"query/occurrences",executor:o},{method:"search",executor:o},{method:"searchOccurrences",restMethod:"search/occurrences",executor:o},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Files",children:[{method:"create",verb:"POST"},{method:"query",executor:o},{method:"show"},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Friends",children:[{method:"add",verb:"POST"},{method:"requests",executor:o},{method:"approve",verb:"PUT"},{method:"remove",verb:"DELETE"},{method:"search"}]},{property:"GeoFences",restNamespace:"geo_fences",children:[{method:"create",verb:"POST"},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"query"}]},{property:"KeyValues",children:[{method:"set",verb:"PUT"},{method:"get"},{method:"append",verb:"PUT"},{method:"increment",restMethod:"incrby",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Likes",children:[{method:"create",verb:"POST"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Messages",children:[{method:"create",verb:"POST"},{method:"reply",verb:"POST"},{method:"show"},{method:"showInbox",restMethod:"show/inbox",executor:o},{method:"showSent",restMethod:"show/sent",executor:o},{method:"showThreads",restMethod:"show/threads",executor:o},{method:"showThread",restMethod:"show/thread"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"removeThread",restMethod:"delete/thread",verb:"DELETE"}]},{property:"Photos",children:[{method:"create",verb:"POST"},{method:"show"},{method:"search"},{method:"query",executor:o},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"PhotoCollections",restNamespace:"collections",children:[{method:"create",verb:"POST"},{method:"show"},{method:"update",verb:"PUT"},{method:"search"},{method:"showSubcollections",restMethod:"show/subcollections"},{method:"showPhotos",restMethod:"show/photos"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Places",children:[{method:"create",verb:"POST"},{method:"search",executor:o},{method:"show"},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"},{method:"query",executor:o}]},{property:"Posts",children:[{method:"create",verb:"POST"},{method:"show"},{method:"query",executor:o},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"PushNotifications",restNamespace:"push_notification",verb:"POST",children:[{method:"subscribe"},{method:"unsubscribe",verb:"DELETE"},{method:"notify"},{method:"query",verb:"GET"},{method:"subscribeToken",restMethod:"subscribe_token"},{method:"unsubscribeToken",restMethod:"unsubscribe_token",verb:"DELETE"},{method:"updateSubscription",restMethod:"subscription/update",verb:"PUT"},{method:"notifyTokens",restMethod:"notify_tokens"},{method:"resetBadge",restMethod:"reset_badge",verb:"PUT"},{method:"setBadge",restMethod:"set_badge",verb:"PUT",executor:o},{method:"queryChannels",restMethod:"channels/query",verb:"GET",executor:o},{method:"showChannels",restMethod:"channels/show",verb:"GET"}]},{property:"PushSchedules",restNamespace:"push_schedules",children:[{method:"create",restMethod:"create",verb:"POST"},{method:"query",restMethod:"query",executor:o},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Reviews",children:[{method:"create",verb:"POST"},{method:"show"},{method:"query"},{method:"update",verb:"PUT"},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"SocialIntegrations",restNamespace:"users",children:[{method:"externalAccountLogin",restMethod:"external_account_login",verb:"POST"},{method:"externalAccountLink",restMethod:"external_account_link",verb:"POST"},{method:"externalAccountUnlink",restMethod:"external_account_unlink",verb:"DELETE"},{method:"searchFacebookFriends",restNamespace:"social",restMethod:"facebook/search_friends",executor:o}]},{property:"Statuses",children:[{method:"create",verb:"POST"},{method:"update",verb:"PUT"},{method:"show"},{method:"search"},{method:"query",executor:o},{method:"remove",restMethod:"delete",verb:"DELETE"}]},{property:"Users",children:[{method:"create",verb:"POST"},{method:"login",verb:"POST"},{method:"show"},{method:"showMe",restMethod:"show/me",executor:function(e){n.call(this,{},e)}},{method:"search",executor:o},{method:"query",executor:o},{method:"update",verb:"PUT"},{method:"logout",executor:function(e){n.call(this,{},function(t){_.reset(),e(t)})}},{method:"remove",restMethod:"delete",verb:"DELETE",executor:function(){var e=arguments;n.call(this,2==e.length?e[0]:{},function(t){_.reset(),(2==e.length?e[1]:e[0])(t)})}},{method:"requestResetPassword",restMethod:"request_reset_password"},{method:"resendConfirmation",restMethod:"resend_confirmation"}]}]});var h;null==h&&(h={}),h.setProperties=function(e,t){if(null!=e&&null!=t)for(var r in t)e[r]=t[r];return e},h.setProperties(h,{percentEncode:function(e){if(null==e)return"";if(e instanceof Array){for(var t="";0<e.length;++e)""!=t&&(t+="&"),t+=h.percentEncode(e[0]);return t}return e=encodeURIComponent(e),e=e.replace(/\!/g,"%21"),e=e.replace(/\*/g,"%2A"),e=e.replace(/\'/g,"%27"),e=e.replace(/\(/g,"%28"),e=e.replace(/\)/g,"%29")},decodePercent:function(e){return null!=e&&(e=e.replace(/\+/g," ")),decodeURIComponent(e)},getParameterList:function(e){if(null==e)return[];if("object"!=typeof e)return h.decodeForm(e+"");if(e instanceof Array)return e;var t,r=[];for(t in e)r.push([t,e[t]]);return r},getParameterMap:function(e){if(null==e)return{};if("object"!=typeof e)return h.getParameterMap(h.decodeForm(e+""));if(e instanceof Array){for(var t={},r=0;r<e.length;++r){var n=e[r][0];void 0===t[n]&&(t[n]=e[r][1])}return t}return e},getParameter:function(e,t){if(!(e instanceof Array))return h.getParameterMap(e)[t];for(var r=0;r<e.length;++r)if(e[r][0]==t)return e[r][1];return null},formEncode:function(e){for(var t="",e=h.getParameterList(e),r=0;r<e.length;++r){var n=e[r][1];null==n&&(n=""),""!=t&&(t+="&"),t+=h.percentEncode(e[r][0])+"="+h.percentEncode(n)}return t},decodeForm:function(e){for(var t=[],e=e.split("&"),r=0;r<e.length;++r){var n=e[r];if(""!=n){var o,i=n.indexOf("=");0>i?(o=h.decodePercent(n),n=null):(o=h.decodePercent(n.substring(0,i)),n=h.decodePercent(n.substring(i+1))),t.push([o,n])}}return t},setParameter:function(e,t,r){var n=e.parameters;if(n instanceof Array){for(e=0;e<n.length;++e)n[e][0]==t&&(void 0===r?n.splice(e,1):(n[e][1]=r,r=void 0));void 0!==r&&n.push([t,r])}else n=h.getParameterMap(n),n[t]=r,e.parameters=n},setParameters:function(e,t){for(var r=h.getParameterList(t),n=0;n<r.length;++n)h.setParameter(e,r[n][0],r[n][1])},completeRequest:function(e,t){null==e.method&&(e.method="GET");var r=h.getParameterMap(e.parameters);null==r.oauth_consumer_key&&h.setParameter(e,"oauth_consumer_key",t.consumerKey||""),null==r.oauth_token&&null!=t.token&&h.setParameter(e,"oauth_token",t.token),null==r.oauth_version&&h.setParameter(e,"oauth_version","1.0"),null==r.oauth_timestamp&&h.setParameter(e,"oauth_timestamp",h.timestamp()),null==r.oauth_nonce&&h.setParameter(e,"oauth_nonce",h.nonce(6)),h.SignatureMethod.sign(e,t)},setTimestampAndNonce:function(e){h.setParameter(e,"oauth_timestamp",h.timestamp()),h.setParameter(e,"oauth_nonce",h.nonce(6))},addToURL:function(e,t){if(newURL=e,null!=t){var r=h.formEncode(t);0<r.length&&(newURL=0>e.indexOf("?")?newURL+"?":newURL+"&",newURL+=r)}return newURL},getAuthorizationHeader:function(e,t){for(var r='OAuth realm="'+h.percentEncode(e)+'"',n=h.getParameterList(t),o=0;o<n.length;++o){var i=n[o],s=i[0];0==s.indexOf("oauth_")&&(r+=","+h.percentEncode(s)+'="'+h.percentEncode(i[1])+'"')}return r},correctTimestamp:function(e){h.timeCorrectionMsec=1e3*e-(new Date).getTime()},timeCorrectionMsec:0,timestamp:function(){var e=(new Date).getTime()+h.timeCorrectionMsec;return Math.floor(e/1e3)},nonce:function(e){for(var t=h.nonce.CHARS,r="",n=0;e>n;++n)var o=Math.floor(Math.random()*t.length),r=r+t.substring(o,o+1);return r}}),h.nonce.CHARS="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",h.declareClass=function(e,t,r){var n=e[t];if(e[t]=r,null!=r&&null!=n)for(var o in n)"prototype"!=o&&(r[o]=n[o]);return r},h.declareClass(h,"SignatureMethod",function(){}),h.setProperties(h.SignatureMethod.prototype,{sign:function(e){var t=this.getSignature(h.SignatureMethod.getBaseString(e));return h.setParameter(e,"oauth_signature",t),t},initialize:function(e,t){var r;r=null!=t.accessorSecret&&9<e.length&&"-Accessor"==e.substring(e.length-9)?t.accessorSecret:t.consumerSecret,this.key=h.percentEncode(r)+"&"+h.percentEncode(t.tokenSecret)}}),h.setProperties(h.SignatureMethod,{sign:function(e,t){var r=h.getParameterMap(e.parameters).oauth_signature_method;(null==r||""==r)&&(r="HMAC-SHA1",h.setParameter(e,"oauth_signature_method",r)),h.SignatureMethod.newMethod(r,t).sign(e)},newMethod:function(e,t){var r=h.SignatureMethod.REGISTERED[e];if(null!=r){var n=new r;return n.initialize(e,t),n}var r=Error("signature_method_rejected"),o="";for(n in h.SignatureMethod.REGISTERED)""!=o&&(o+="&"),o+=h.percentEncode(n);throw r.oauth_acceptable_signature_methods=o,r},REGISTERED:{},registerMethodClass:function(e,t){for(var r=0;r<e.length;++r)h.SignatureMethod.REGISTERED[e[r]]=t},makeSubclass:function(e){var t=h.SignatureMethod,r=function(){t.call(this)};return r.prototype=new t,r.prototype.getSignature=e,r.prototype.constructor=r},getBaseString:function(e){var t=e.action,r=t.indexOf("?");if(0>r)r=e.parameters;else for(var r=h.decodeForm(t.substring(r+1)),n=h.getParameterList(e.parameters),o=0;o<n.length;++o)r.push(n[o]);return h.percentEncode(e.method.toUpperCase())+"&"+h.percentEncode(h.SignatureMethod.normalizeUrl(t))+"&"+h.percentEncode(h.SignatureMethod.normalizeParameters(r))},normalizeUrl:function(e){var t=h.SignatureMethod.parseUri(e),e=t.protocol.toLowerCase(),r=t.authority.toLowerCase();if("http"==e&&80==t.port||"https"==e&&443==t.port){var n=r.lastIndexOf(":");n>=0&&(r=r.substring(0,n))}return(t=t.path)||(t="/"),e+"://"+r+t},parseUri:function(e){for(var t="source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","),e=/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),r={},n=14;n--;)r[t[n]]=e[n]||"";return r},normalizeParameters:function(e){if(null==e)return"";for(var t=h.getParameterList(e),e=[],r=0;r<t.length;++r){var n=t[r];"oauth_signature"!=n[0]&&e.push([h.percentEncode(n[0])+" "+h.percentEncode(n[1]),n])}for(e.sort(function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0}),t=[],r=0;r<e.length;++r)t.push(e[r][1]);return h.formEncode(t)}}),h.SignatureMethod.registerMethodClass(["PLAINTEXT","PLAINTEXT-Accessor"],h.SignatureMethod.makeSubclass(function(){return this.key})),h.SignatureMethod.registerMethodClass(["HMAC-SHA1","HMAC-SHA1-Accessor"],h.SignatureMethod.makeSubclass(function(e){p="=";var t=this.key,r=l(t);16<r.length&&(r=s(r,t.length*f));for(var n=Array(16),t=Array(16),o=0;16>o;o++)n[o]=909522486^r[o],t[o]=1549556828^r[o];for(e=s(n.concat(l(e)),512+e.length*f),e=s(t.concat(e),672),r="",t=0;t<4*e.length;t+=3)for(n=(e[t>>2]>>8*(3-t%4)&255)<<16|(e[t+1>>2]>>8*(3-(t+1)%4)&255)<<8|e[t+2>>2]>>8*(3-(t+2)%4)&255,o=0;4>o;o++)r=8*t+6*o>32*e.length?r+p:r+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n>>6*(3-o)&63);return r}));var p="",f=8;c.prototype.sendRequest=function(e,t,r,n){var o=u.js.sdk.utils.getAuthType(this);if(o==u.constants.unknown)n(u.constants.noAppKeyError);else{var i=this.apiBaseURL+"/"+u.sdk.url.version+"/"+e,i=o==u.constants.app_key?i+(u.constants.keyParam+this.appKey):i+(u.constants.oauthKeyParam+this.oauthKey);if(null==r&&(r={}),t=t?t.toUpperCase():u.constants.get_method,r[u.constants.suppressCode]="true",!this.isThreeLegged()){var s=u.js.sdk.utils.getCookie(u.constants.sessionId);s||(s=this.session_id),s&&(i=-1!=i.indexOf("?")?i+("&"+u.constants.sessionId+"="+s):i+("?"+u.constants.sessionId+"="+s))}if(this.isThreeLegged()&&(!this.accessToken&&(s=this.getSession())&&(this.accessToken=s.access_token),this.accessToken&&(r[u.constants.accessToken]=this.accessToken)),s=r,Ti.App.analytics){var a=s.analytics||{};a.id=Ti.Platform.createUUID(),Ti.Platform.id&&(a.mid=Ti.Platform.id),a.aguid=Ti.App.guid,a.event="cloud."+e.replace(/\//g,".").replace(/\.json/,""),a.deploytype=Ti.App.deployType||"development",a.sid=Ti.App.sessionId,s.ti_analytics=JSON.stringify(a)}if(r=u.js.sdk.utils.cleanInvalidData(r),e=u.js.sdk.utils.getFileObject(r)){try{var l;if(l=e.toString().match(/TiFilesystemFile/)?e.read():e,!l)return void n(u.constants.fileLoadError);r[u.constants.file]?(delete r[u.constants.file],r[u.constants.file]=l):r[u.constants.photo]&&(delete r[u.constants.photo],r[u.constants.photo]=l)}catch(c){return void n(u.constants.fileLoadError)}l={},(o==u.constants.oauth||o==u.constants.three_legged_oauth)&&(o={method:t,action:i,parameters:[]},u.js.sdk.utils.populateOAuthParameters(o.parameters,this.oauthKey),this.oauthSecret&&h.completeRequest(o,{consumerSecret:this.oauthSecret}),l[u.constants.oauth_header]=h.getAuthorizationHeader("",o.parameters))}else if(l={},o==u.constants.oauth||o==u.constants.three_legged_oauth){var d,o={method:t,action:i,parameters:[]};for(d in r)r.hasOwnProperty(d)&&o.parameters.push([d,r[d]]);u.js.sdk.utils.populateOAuthParameters(o.parameters,this.oauthKey),this.oauthSecret&&h.completeRequest(o,{consumerSecret:this.oauthSecret}),l[u.constants.oauth_header]=h.getAuthorizationHeader("",o.parameters)}u.js.sdk.utils.sendAppceleratorRequest(i,t,r,l,n,this)}},c.prototype.sendAuthRequest=function(e){if(u.js.sdk.utils.getAuthType(this)!==u.constants.three_legged_oauth)alert("wrong authorization type!");else{var e=e||{},t=this.authBaseURL,t=t+"/oauth/authorize"+(u.constants.oauthKeyParam+this.oauthKey),t=t+(u.constants.clientIdParam+this.oauthKey),t=t+(u.constants.responseTypeParam+"token"),e=e.params||{};e.action="login",e.url=t;var r=this,n=e.cb;n&&delete e.cb,u.js.sdk.ui(e,function(e){r.saveSession(e),n&&n(e)})}},c.prototype.signUpRequest=function(e){if(u.js.sdk.utils.getAuthType(this)!==u.constants.three_legged_oauth)alert("wrong authorization type!");else{var e=e||{},t=this.authBaseURL,t=t+"/users/sign_up"+(u.constants.oauthKeyParam+this.oauthKey),t=t+(u.constants.clientIdParam+this.oauthKey),e=e.params||{};e.action="signup",e.url=t;var r=this,n=e.cb;n&&delete e.cb,u.js.sdk.ui(e,function(e){r.saveSession(e),n&&n(e)})}},c.prototype.saveSession=function(e){return e&&e.access_token?(u.js.sdk.utils.setCookie(u.constants.accessToken,e.access_token),u.js.sdk.utils.setCookie(u.constants.expiresIn,e.expires_in),this.accessToken=e.access_token,this.expiresIn=e.expires_in,this.authorized=!0):this.authorized=!1},c.prototype.getSession=function(){var e={};return e.access_token=u.js.sdk.utils.getCookie(u.constants.accessToken),e.expires_in=u.js.sdk.utils.getCookie(u.constants.expiresIn),e.access_token?(this.accessToken=e.access_token,this.expiresIn=e.expires_in,this.authorized=!0,e):this.authorized=!1},c.prototype.clearSession=function(){u.js.sdk.utils.setCookie(u.constants.accessToken,""),u.js.sdk.utils.setCookie(u.constants.expiresIn,""),delete this.accessToken,delete this.expiresIn,this.authorized=!1},c.prototype.checkStatus=function(){return this.getSession()?!0:!1},u=void 0,u={constants:{},js:{}},u.js.sdk={},u.js.sdk.utils={},u.sdk={},u.sdk.url={},u.sdk.url.baseURL="https://api.cloud.appcelerator.com",u.sdk.url.authBaseURL="https://secure-identity.cloud.appcelerator.com",u.sdk.url.version="v1",u.constants.get_method="GET",u.constants.post_method="POST",u.constants.put_method="PUT",u.constants.delete_method="DELETE",u.constants.app_key=1,u.constants.oauth=2,u.constants.three_legged_oauth=3,u.constants.unknown=-1,u.constants.keyParam="?key=",u.constants.oauthKeyParam="?oauth_consumer_key=",u.constants.clientIdParam="&client_id=",u.constants.redirectUriParam="&redirect_uri=",u.constants.responseTypeParam="&response_type=",u.constants.accessToken="access_token",u.constants.expiresIn="expires_in",u.constants.appKey="app_key",u.constants.json="json",u.constants.sessionId="_session_id",u.constants.sessionCookieName="Cookie",u.constants.responseCookieName="Set-Cookie",u.constants.file="file",u.constants.suppressCode="suppress_response_codes",u.constants.response_wrapper="response_wrapper",u.constants.photo="photo",u.constants.method="_method",u.constants.name="name",u.constants.value="value",u.constants.oauth_header="Authorization",u.constants.noAppKeyError={meta:{status:"fail",code:409,message:"Application key is not provided."}},u.constants.fileLoadError={meta:{status:"fail",code:400,message:"Unable to load file"}},u.js.sdk.utils.getSessionParams=function(){var e=null,t=u.js.sdk.utils.getCookie(u.constants.sessionId);return t&&(e=u.constants.sessionId+"="+t),e},u.js.sdk.utils.cookieMap=[],u.js.sdk.utils.cookieMap[u.constants.sessionId]="sessionId",u.js.sdk.utils.cookieMap[u.constants.accessToken]="accessToken",u.js.sdk.utils.cookieMap[u.constants.expiresIn]="expiresIn",u.js.sdk.utils.getCookie=function(t){return(t=u.js.sdk.utils.cookieMap[t])&&e[t]||null},u.js.sdk.utils.setCookie=function(t,r){var n=u.js.sdk.utils.cookieMap[t];n&&(""===r?delete e[n]:e[n]=r)},u.js.sdk.utils.deleteCookie=function(t){(t=u.js.sdk.utils.cookieMap[t])&&delete e[t]},u.js.sdk.utils.getAuthType=function(e){if(e){if(e.isThreeLegged())return u.constants.three_legged_oauth;if(e.appKey)return u.constants.app_key;if(e.oauthKey&&e.oauthSecret)return u.constants.oauth}return u.constants.unknown},u.js.sdk.utils.getFileObject=function(e){if(e)for(var t in e)if(e.hasOwnProperty(t)&&(t==u.constants.photo||t==u.constants.file))return e[t];return null},u.js.sdk.utils.cleanInvalidData=function(e){if(e){for(var t in e)if(e.hasOwnProperty(t)){if(null==e[t]&&delete e[t],"object"==typeof e[t]){if(t==u.constants.photo||t==u.constants.file)continue;e[t]=JSON.stringify(e[t])}(!0===e[t]||!1===e[t])&&(e[t]=e[t]?1:0)}return e}return{}},u.js.sdk.utils.uploadMessageCallback=function(e){return e&&e.data?JSON.parse(e.data):{}},u.js.sdk.utils.getOAuthParameters=function(e){var t="";if(e)for(var e=h.getParameterList(e),r=0;r<e.length;++r){var n=e[r],o=n[0];0==o.indexOf("oauth_")&&"oauth_token"!=o&&(t+="&"+h.percentEncode(o)+"="+h.percentEncode(n[1]))}return 0<t.length&&(t=t.substring(1)),t},u.js.sdk.utils.populateOAuthParameters=function(e,t){e&&t&&(e.push(["oauth_version","1.0"]),e.push(["oauth_consumer_key",t]),e.push(["oauth_signature_method","HMAC-SHA1"]),e.push(["oauth_nonce",h.nonce(15)]))},u.js.sdk.utils.sendAppceleratorRequest=function(t,r,n,o,i,s){var a=Ti.Network.createHTTPClient({timeout:6e4,onsendstream:function(r){e.onsendstream&&e.onsendstream({url:t,progress:r.progress})},ondatastream:function(r){e.ondatastream&&e.ondatastream({url:t,progress:r.progress})},onerror:function(e){var t={};if(this.responseText){var r=this.responseText;try{(r=r.trim())&&0<r.length&&(t=JSON.parse(r))}catch(n){t=n}}t.message||(t.message=e.error),t.error=!0,t.statusText=this.statusText,t.status=this.status,t.meta&&(t.metaString=JSON.stringify(t.meta)),i(t)},onload:function(){var e=JSON.parse(this.responseText);if(e&&e.meta&&(e.metaString=JSON.stringify(e.meta),e.meta.session_id)){var t=e.meta.session_id;u.js.sdk.utils.setCookie(u.constants.sessionId,t),s.session_id=t}i(e)}}),l=t;if(r.toUpperCase()==u.constants.get_method||r.toUpperCase()==u.constants.delete_method){var c,d="";for(c in n)n.hasOwnProperty(c)&&(d+="&"+c+"="+h.percentEncode(n[c]));0<d.length&&(l=0<t.indexOf("?")?l+d:l+("?"+d.substring(1)),n={})}if(e.debug&&(Ti.API.info(r+": "+l),Ti.API.info("header: "+JSON.stringify(o)),Ti.API.info("data: "+JSON.stringify(n))),a.open(r,l),"mobileweb"!=Ti.Platform.osname&&a.setRequestHeader("Accept-Encoding","gzip,deflate"),o)for(c in o)o.hasOwnProperty(c)&&a.setRequestHeader(c,o[c]);a.send(n)},u.js.sdk.utils.decodeQS=function(e){var t,r,n=decodeURIComponent,o={},e=e.split("&");for(t=0;t<e.length;t++)(r=e[t].split("=",2))&&r[0]&&(o[n(r[0])]=n(r[1]));return o},u.js.sdk.utils.guid=function(){return"f"+(1073741824*Math.random()).toString(16).replace(".","")},u.js.sdk.utils.copy=function(e,t,r,n){for(var o in t)(r||"undefined"==typeof e[o])&&(e[o]=n?n(t[o]):t[o]);return e};var _={session:null,fetchSetting:function(e,t){var r,n="production"==Ti.App.deployType.toLowerCase()?"production":"development";return(r=Ti.App.Properties.getString(e+"-"+n))&&"undefined"!=r||(r=Ti.App.Properties.getString(e))&&"undefined"!=r?r:t},fetchSession:function(){var e=_.fetchSetting("acs-api-key",null),t=_.fetchSetting("acs-base-url",u.sdk.url.baseURL),r=_.fetchSetting("acs-authbase-url",u.sdk.url.authBaseURL),n=_.fetchSetting("acs-oauth-key",null),o=_.fetchSetting("acs-oauth-secret",null);return new c(e,n,o,t,r)}};return _.getSession=function(){return null==_.session&&(_.session=_.fetchSession()),_.session},_.send=function(e,t,r,n){_.getSession().sendRequest(e,t,r,n)},_.hasStoredSession=function(){return!!u.js.sdk.utils.getCookie(u.constants.sessionId)},_.retrieveStoredSession=function(){return u.js.sdk.utils.getCookie(u.constants.sessionId)},_.reset=function(){u.js.sdk.utils.deleteCookie(u.constants.sessionId),_.session&&(_.session.clearSession(),_.session=null)},_.secureSend=function(e,t){var r=_.getSession();r.useThreeLegged(!0),"secureCreate"===e?r.signUpRequest(t):"secureLogin"===e&&r.sendAuthRequest(t)},_.checkStatus=function(){return _.getSession().checkStatus()},u.js.sdk.UIManager={redirect_uri:"acsconnect://success",displayModal:function(t){function r(e){var t=/^acsconnect:\/\/([^#]*)#(.*)/.exec(decodeURIComponent(e.url));if(t&&3==t.length){var l=null;if("success"==t[1])l=u.js.sdk.utils.decodeQS(t[2]);else if("cancel"!=t[1])return;s.removeEventListener("beforeload",r),s.removeEventListener("load",r),n=l,null!=o?o.close():i&&i.close()}a&&"load"==e.type&&(i.remove(a),a=null)}e.debug&&Ti.API.info("ThreeLegged Request url: "+t.url);var n,o=null,i=Ti.UI.createWindow({fullscreen:!1,title:t.params.title||"Appcelerator Cloud Service"}),s=Ti.UI.createWebView({url:t.url,scalesPageToFit:!1,showScrollbars:!0}),a=Ti.UI.createLabel({text:"Loading, please wait...",color:"black",width:Ti.UI.SIZE||"auto",height:Ti.UI.SIZE||"auto",zIndex:100});if(s.addEventListener("beforeload",r),s.addEventListener("load",r),i.addEventListener("close",function(){t&&(t.cb&&t.cb(n),s=i=a=t=n=null)}),"android"!=Ti.Platform.osname){var l=Ti.UI.createButton({title:"close",width:"50%",height:"20%"});l.addEventListener("click",function(){o.close()}),i.rightNavButton=l,("iphone"==Ti.Platform.osname||"ios"==Ti.Platform.osname)&&(o=Ti.UI.iOS.createNavigationWindow({window:i}))}i.add(s),i.add(a),null!=o?o.open({modal:!0}):i.open()},processParams:function(e,t){return{cb:t,url:e.url+u.constants.redirectUriParam+u.js.sdk.UIManager.redirect_uri,params:e}}},u.js.sdk.ui=function(e,t){if("mobileweb"===Ti.Platform.osname)alert("Three Legged OAuth is not currently supported on MobileWeb");else if(e.action){var r=u.js.sdk.UIManager.processParams(e,t);r&&u.js.sdk.UIManager.displayModal(r)}else alert('"action" is a required parameter for com.cocoafish.js.sdk.ui().')},e}defineCloud(exports);