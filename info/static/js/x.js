(function() {var c={si:"",dm:"list.iqiyi.com",id:""};function f(b,e){return"[object "+e+"]"==={}.toString.call(b)}function g(b,e){var d=new Image,a="mt_log_"+Math.round(2147483647*Math.random());window[a]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=null;d=window[a]=null;e&&e(b)};d.src=b}var h="https:"===document.location.protocol?"https:":"http:",p="si dm ac v li rnd".split(" "),q={};
function s(b){q.rnd=+new Date;for(var e=["he=%5bmagic_num%3d1213018161%26prot_ver%3d1%26app_id%3d1002%26rnd%3d0%26log_format%3d0%26encrypt_choose%3d0%5d"],d=0,a=p.length;d<a;d++){var l=p[d],k=q[l];!f(k,"Undefined")&&""!==k&&e.push(l+"="+encodeURIComponent(""+k))}g(h+"//datax.baidu.com/x.gif?"+e.join("&"),b)}
var t={b:!1,c:function(){for(var b=[window._hmt,window._dxt],e=0,d=b.length;e<d;e++){var a=b[e];if(f(a,"Array"))for(var l=0;l<a.length;)t.push(a[l])?a.splice(l,1):l++}if(f(window._hmt,"Undefined")||f(window._hmt,"Array")&&!t.b)window._hmt=t.a;window._dxt=t.a},a:{push:function(b){t.push.apply(t,arguments)}},push:function(b){return!t.d(b)?!1:!f(t[b[0]],"Function")?(t.b=!0,!1):t[b[0]](b.slice(1))},d:function(b){return f(b,"Array")&&f(b[0],"String")},_setUserId:function(b){var e=b[0];b="function"===typeof b[1]?
b[1]:function(){};return f(e,"String")||f(e,"Number")?(q.ac=e,s(b),!0):!1}},u=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function e(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(a){switch(typeof a){case "undefined":return"undefined";case "number":return isFinite(a)?
String(a):"null";case "string":return b(a);case "boolean":return String(a);default:if(null===a)return"null";if(a instanceof Array){var d=["["],k=a.length,m,n,r;for(n=0;n<k;n++)switch(r=a[n],typeof r){case "undefined":case "function":case "unknown":break;default:m&&d.push(","),d.push(u(r)),m=1}d.push("]");return d.join("")}if(a instanceof Date)return'"'+a.getFullYear()+"-"+e(a.getMonth()+1)+"-"+e(a.getDate())+"T"+e(a.getHours())+":"+e(a.getMinutes())+":"+e(a.getSeconds())+'"';m=["{"];for(k in a)if(Object.prototype.hasOwnProperty.call(a,
k))switch(n=a[k],typeof n){case "undefined":case "unknown":case "function":break;default:d&&m.push(","),d=1,m.push(u(k)+":"+u(n))}m.push("}");return m.join("")}}}();p.push("_dmpSetTag");t._dmpSetTag=function(b){var e=b[0];b=b[1];var d;isNaN(b)||(d=Number(b));q._dmpSetTag=u({tag:e,type:d});s();delete q._dmpSetTag};t._setNid=function(b){g(h+"//datax.baidu.com/dx.gif?baidu_rnd="+ +new Date+"&baidu_nid="+b[0])};
setTimeout(function(){q.si=c.si;q.dm=c.dm;q.v="1.0.0";q.li=Math.round(2147483647*Math.random());c.id&&(q.si="",q.dm="datax.baidu.com/baiduid",t._setUserId([c.id]),q.si=c.si,q.dm=c.dm);t.c()},1E3);})();
