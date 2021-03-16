/**
 * @package WordPress
 * @subpackage Law Business
 * @since Law Business 1.0
 * 
 * JackBox - jQuery Lightbox Plugin Libraries
 * Changed by CMSMasters
 * 
 */

/* --------------------------------------------- */
/* Author: http://codecanyon.net/user/CodingJack */
/* --------------------------------------------- */


(function(e){function s(e,t){if(!t){delete e.swipeLeft;delete e.swipeRight;delete e.stopProp}delete e.newPageX;delete e.pageX}function o(e){var r=e.touches?e.touches[0]:e;if(this.stopProp)e.stopImmediatePropagation();this.pageX=r.pageX;this.addEventListener(t,a);this.addEventListener(n,u)}function u(e){var t=e.touches?e.touches[0]:e,n=this.newPageX=t.pageX;if(Math.abs(this.pageX-n)>10)e.preventDefault()}function a(){var e=this.newPageX,i=this.pageX,f,l=this.cjThumbs;this.removeEventListener(n,u);this.removeEventListener(t,a);if(Math.abs(i-e)<30)return;if(!l)this.removeEventListener(r,o);if(i>e){if(this.swipeLeft){f=this.swipeLeft;s(this,l);f()}}else{if(this.swipeRight){f=this.swipeRight;s(this,l);f(1)}}}var t,n,r,i={touchSwipe:function(e,t){i.touchSwipeLeft(e,t);i.touchSwipeRight(e,t)},touchSwipeLeft:function(e,t,n){if(n)e.stopProp=true;if(!e.swipeLeft)e.swipeLeft=t;if(!e.swipeRight)e.addEventListener(r,o)},touchSwipeRight:function(e,t,n){if(n)e.stopProp=true;if(!e.swipeRight)e.swipeRight=t;if(!e.swipeLeft)e.addEventListener(r,o)},unbindSwipe:function(e){e.removeEventListener(r,o);e.removeEventListener(n,u);e.removeEventListener(t,a);s(e)}};if("ontouchend"in document){t="touchend";n="touchmove";r="touchstart"}else{t="mouseup";n="mousemove";r="mousedown"}e.fn.cjSwipe=function(e,t,n){i[e](this[0],t,n)}})(jQuery);


(function(){function V(){w=false;E=h;while(E--){x=a[E];if(!x)break;if(x.isCSS)continue;if(x.cycle()){w=true}else{x.stop(false,x.complete,false,true)}}if(t){if(w){t(V)}else{n(V);x=b=null}}else{if(w){if(!l)y=setInterval(V,R)}else{clearInterval(y);x=b=null}}l=w}function $(e){if(e.cjFadeIn){delete e.cjFadeIn;e.style.opacity=1;e.style.visibility="visible"}else if(e.cjFadeOut){delete e.cjFadeOut;e.style.display="none"}}function J(){if(!l)V()}function K(e,t,n,r){a.splice(a.indexOf(e),1);h=a.length;if(n)n(t,r)}function Q(e){e.stopPropagation();var t=this.cj;if(t)t.stop(t.complete)}function G(e,t,n){var r={},i,s=t.to;for(i in s){if(!s.hasOwnProperty(i))continue;r[i]=s[i]}Jacked.tween(e,r,n)}function Y(e,t){return this["webkit"+e+t]||this["moz"+e+t]||this["o"+e+t]||this[e+t]||null}function Z(e){var t;if(t=I.exec(e)){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),1]}else if(t=F.exec(e)){return[parseInt(t[1],16)*17,parseInt(t[2],16)*17,parseInt(t[3],16)*17,1]}}function et(){var e=i.search("msie");if(e===-1){return[33.3,0]}else{var t=parseInt(i.substr(e+4,e+5),10),n=t>=9?16.6:33.3;return[n,t]}}function tt(){for(var e in q){if(!q.hasOwnProperty(e))continue;if(e===v){m=q[e];break}}}function nt(){if(!("ontouchend"in document)){return null}else{if(i.search("iphone")!==-1||i.search("ipad")!==-1){return"ios"}else if(i.search("android")!==-1||i.search("applewebkit")!==-1){return"android"}else if(i.search("msie")!==-1){return"winMobile"}return null}}function rt(){if("WebkitTransition"in r){return["webkitTransitionEnd","-webkit-transition",i.search("chrome")!==-1?"chrome":"safari"]}else if("MozTransition"in r){return["transitionend","-moz-transition","firefox"]}else if("MSTransition"in r){return["msTransitionEnd","-ms-transition","ie"]}else if("transition"in r){return["transitionEnd","transition",null]}return null}function it(){if("WebkitTransform"in r){return"WebkitTransform"}else if("MozTransform"in r){return"MozTransform"}else if("msTransform"in r){return"msTransform"}else if("transform"in r){return"transform"}return null}var e=window.getComputedStyle?document.defaultView.getComputedStyle:null,t=Y("Request","AnimationFrame"),n=Y("Cancel","AnimationFrame"),r=document.createElement("span").style,i=navigator.userAgent.toLowerCase(),s="Quint.easeOut",o=500,u=et(),a=[],f=rt(),l,c,h=0,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O=/,/g,M=/[A-Z]/g,_=/ cj-tween/g,D=/^\s+|\s+$/g,P=new RegExp("{props}"),H=new RegExp("{easing}"),B=new RegExp("{duration}"),j=/(right|bottom|center)/,F=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/,I=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/,q={ios:false,android:false,winMobile:false,firefox:false,chrome:false,safari:false,opera:false,ie:false},R=u[0],U=u[1],z=U!==0&&U<9;if(!t||!n)t=n=null;if(f){var W=f[1],X=document.createElement("style");c=it();N=nt();X.type="text/css";X.innerHTML=".cj-tween{"+W+"-property:none !important;}";document.getElementsByTagName("head")[0].appendChild(X);p=W+"-property:{props};"+W+"-duration:{duration}s;"+W+"-timing-function:cubic-bezier({easing});";v=!N?f[2]:N;L=/(chrome|opera)/.test(v);A=v==="safari"||v==="ios";f=f[0];tt()}if(!z){d=HTMLElement;T=/(#|rgb)/;C=/(auto|inherit|rgb|%|#)/}else if(U===8){d=Element;T=/(#|rgb|red|blue|green|black|white|yellow|pink|gray|grey|orange|purple)/;C=/(auto|inherit|rgb|%|#|red|blue|green|black|white|yellow|pink|gray|grey|orange|purple)/;k={red:"#F00",blue:"#00F",green:"#0F0",black:"#000",white:"#FFF",yellow:"#FF0",pink:"#FFC0CB",gray:"#808080",grey:"#808080",orange:"#FFA500",purple:"#800080"}}else{return}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){var t=this.length;while(t--){if(this[t]===e)return t}return-1}}if(!Date.now){Date.now=function(){return+(new Date)}}this.Jacked={ready:function(e){window.onload=e},setEngines:function(e){for(var t in e){if(q.hasOwnProperty(t))q[t]=e[t]}tt()},tween:function(e,t,n){if(e.cj)e.cj.stop();if(!n)n={};if(!n.mode){if(!f||!m){new CJ(e,t,n)}else{new CJcss(e,t,n)}}else if(n.mode==="timeline"||!f){new CJ(e,t,n)}else{new CJcss(e,t,n)}},fadeIn:function(e,t){if(!t)t={};t.fadeIn=true;Jacked.tween(e,{opacity:1},t)},fadeOut:function(e,t){if(!t)t={};t.fadeOut=true;Jacked.tween(e,{opacity:0},t)},percentage:function(e,t,n){if(e.cj)e.cj.stop();if(!("from"in t)||!("to"in t))return;if(!n)n={};var r=n.mode;if(!r){if(f&&m){G(e,t,n)}else{new CJpercentage(e,t,n)}return}if(r==="css3"&&f){G(e,t,n);return}new CJpercentage(e,t,n)},special:function(e,t){if(e.cj)e.cj.stop();new CJspecial(e,t)},transform:function(e,t,n,r){if(e.cj)e.cj.stop();if(f&&c){if(!n)n={};n.mode="css3";if("transform"in t){t[c]=t.transform;delete t.transform}new Jacked.tween(e,t,n)}else if(r){new Jacked.tween(e,r,n)}},stopTween:function(e,t,n){var r=e.cj;if(!r)return;if(!r.isCSS){r.stop(t,n)}else{r.stop(n)}},stopAll:function(e){n?n(V):clearInterval(y);var t=a.length,r;h=0;while(t--){r=a[t];if(!r.isCSS){r.stop(e,false,true,true)}else{r.stop(false,true)}}a=[];l=false;r=b=null},setEase:function(e){var t=e.toLowerCase().split(".");if(t.length<2)return;if(!st[t[0]])return;if(!st[t[0]][t[1]])return;s=e},setDuration:function(e){if(isNaN(e))return;o=e},getMobile:function(){return N},getIE:function(){return z},getBrowser:function(){return v},getTransition:function(){return f},getEngine:function(){return l},getTransform:function(){return c}};this.CJ=function(e,t,n){h=a.length;var r=e.cj=a[h++]=this;this.runner=function(i){r.obj=e;r.complete=n.callback;r.completeParams=n.callbackParams;if(i===true){r.transitions=[];return}var u,a=0,f=[],c=e.style,h=n.duration||o,p=(n.ease||s).toLowerCase().split(".");p=st[p[0]][p[1]];c.visibility="visible";if(n.fadeIn){c.display=n.display||"block";c.opacity=0}if(z&&"opacity"in t){c.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+(n.fadeIn?0:100)+")"}if(t.borderColor&&!L){var d=t.borderColor;t.borderTopColor=d;t.borderRightColor=d;t.borderBottomColor=d;t.borderLeftColor=d;delete t.borderColor}for(u in t){if(!t.hasOwnProperty(u))continue;if(u!=="backgroundPosition"){f[a++]=r.animate(e,u,t[u],h,p)}else{f[a++]=r.bgPosition(e,u,t[u],h,p)}}r.transitions=f;l?setTimeout(J,10):V()};if(n.fadeOut){e.cjFadeOut=true}else if(n.fadeIn){e.cjFadeIn=true}if(n.duration===0){this.runner(true);this.stop();return}if(!n.delay){this.runner()}else{this.delayed=setTimeout(this.runner,n.delay)}};CJ.prototype.cycle=function(){b=this.transitions;if(!b)return true;S=b.length;g=false;while(S--){if(b[S]())g=true}return g};CJ.prototype.animate=function(t,n,r,i,s){function w(){b=Date.now();m+=b-d;o=s(m,v,h,i);d=b;if(!f||z){o=p?o+.5|0:o-.5|0}else{o=o.toFixed(2)}if(o===y)return true;if(p){if(o>=r){u[n]=g;return false}}else{if(o<=r){u[n]=g;return false}}y=o;u[n]=o+c;return true}function E(){return false}var o,u,a,f=n==="opacity",l=true;if(!f||!z){u=t.style;a=u[n];o=a!==""?a:e?e(t,null)[n]:t.currentStyle[n]}else{u=t.filters.item("DXImageTransform.Microsoft.Alpha");n="Opacity";o=u[n];r*=100}if(!C.test(o)){o=parseFloat(o)}else{if(!T.test(o)){o=0}else{if(r.search("rgb")===-1){if(z&&o in k)o=k[o];return this.color(t,n,o,r,i,s)}else{l=false}}}var c=!f?"px":0,h=r-o,p=o<r,d=Date.now(),v=o,m=0,g,y,b;g=r+c;if(!f||z){p?r-=.25:r+=.25}else{p?r-=.025:r+=.025}if(l){w.stored=[n,g];return w}else{E.stored=[n,g];return E}};CJ.prototype.color=function(e,t,n,r,i,s){function y(){v=Date.now();p+=v-a;a=v;n=s(p,0,1,i);if(n<.99){d=-1;g="rgb(";while(++d<3){m=c[d];g+=m+n*(h[d]-m)|0;if(d<2)g+=","}f[t]=g+")";return true}else{f[t]=u;return false}}function b(){return false}var o=r.search("#")!==-1?"":"#",u=o+r,a=Date.now(),f=e.style,l=false,c=[],h=[],p=0,d=-1,v,m,g;if(n.search("rgb")!==-1){d=-1;c=n.split("(")[1].split(")")[0].split(",");while(++d<3)c[d]=parseInt(c[d],10)}else{c=Z(n)}h=Z(r);d=-1;while(++d<3){if(c[d]!==h[d])l=true}if(l){y.stored=[t,u];return y}else{b.stored=[t,u];return b}};CJ.prototype.bgPosition=function(t,n,r,i,s){function k(){S=Date.now();c+=S-a;a=S;E=s(c,0,1,i);if(E<.99){if(g){x=N+b*E+.5|0}if(y){T=C+w*E+.5|0}if(x===v&&T===m)return true;v=x;m=T;if(!l){o.backgroundPosition=x+"px"+" "+T+"px"}else{o.backgroundPositionX=x+"px";o.backgroundPositionY=T+"px"}return true}else{if(!l){o[n]=d}else{o.backgroundPositionX=h;o.backgroundPositionY=p}return false}}function L(){return false}var o=t.style,u=o[n],a=Date.now(),f=true,l=z,c=0,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C;if(!l){E=u!==""?u.split(" "):e(t,null).backgroundPosition.split(" ");N=E[0];C=E[1]}else{N=t.currentStyle.backgroundPositionX;C=t.currentStyle.backgroundPositionY;if(j.test(N)||j.test(C))f=false;if(N==="left")N=0;if(C==="top")C=0}if(N.search("%")!==-1){if(N!=="0%")f=false}if(C.search("%")!==-1){if(C!=="0%")f=false}N=parseInt(N,10);C=parseInt(C,10);if(r.hasOwnProperty("x")){x=r.x;g=true}else{x=N;g=false}if(r.hasOwnProperty("y")){T=r.y;y=true}else{T=C;y=false}g=g&&N!==x;y=y&&C!==T;if(!g&&!y)f=false;b=x-N;w=T-C;h=x+"px";p=T+"px";d=!l?h+" "+p:[h,p];if(f){k.stored=[n,d];return k}else{L.stored=[n,d];return L}};CJ.prototype.stop=function(e,t,n){var r=this.obj;if(!r){clearTimeout(this.delayed);this.runner(true);this.stop(e,t);return}delete r.cj;if(e){var i=this.transitions,s=i.length,o,u;while(s--){o=i[s].stored;u=o[0];if(!z){r.style[u]=o[1]}else{switch(u){case"Opacity":r.filters.item("DXImageTransform.Microsoft.Alpha").Opacity=o[1]*100;break;case"backgroundPosition":var a=r.style;a.backgroundPositionX=o[1][0];a.backgroundPositionY=o[1][1];break;default:r.style[u]=o[1]}}}}$(r);if(t)t=this.complete;if(!n)K(this,r,t,this.completeParams)};this.CJcss=function(t,n,r){h=a.length;var i=t.cj=a[h++]=this,u=t.style,l=c in n;this.isCSS=true;this.storage=t;this.complete=r.callback;this.completeParams=r.callbackParams;this.runner=function(){if(!r.cssStep){i.step()}else{u.visibility="visible";i.stepped=setTimeout(i.step,30)}};this.step=function(a){i.obj=t;if(a===true){i.moves="";return}var c,h,d,v,m,g,y=0,b,w,E,S,x=[],T=[],N=t.getAttribute("style")||"",k=r.duration||o,L=(r.ease||s).toLowerCase().split(".");for(h in n){if(!n.hasOwnProperty(h))continue;d=h;w=d.match(M);if(w){c=w.length;while(c--){v=w[c];d=d.replace(new RegExp(v,"g"),"-"+v.toLowerCase())}}v=m=n[h];g=h==="backgroundPosition";if(!C.test(v)&&h!=="opacity"&&!g&&!l){v+="px;"}else if(!g){v+=";"}else{var A=m.x,j=m.y,F=isNaN(A),I=isNaN(j);if(!F&&!I){A+="px";j+="px"}else{var q=u.backgroundPosition,R=q!==""?q.split(" "):e(t,null).backgroundPosition.split(" ");!F?A+="px":A=R[0];!I?j+="px":j=R[1]}v=A+" "+j+";"}x[y]=d+":"+v;T[y++]=d;if(!N)continue;w=N.search(d);if(w!==-1){b=N.length-1;c=w-1;while(++c<b){if(N[c]===";")break}N=N.split(N.substring(w,c+1)).join("")}}i.moves=E=p.replace(P,T.toString()).replace(B,(k*.001).toFixed(2)).replace(H,ot[L[0]][L[1]]);S=x.toString();if(!l)S=S.replace(O,"");t.className=t.className.replace(_,"");t.addEventListener(f,Q,false);t.setAttribute("style",N.replace(D,"")+E+S)};if(!r.fadeIn){if(r.fadeOut)t.cjFadeOut=true}else{t.cjFadeIn=true;u.display=r.display||"block";u.opacity=0}if(r.duration===0){this.runner(true);this.stop();return}if(!r.cssStep)u.visibility="visible";if(A&&!l){u.webkitTransform="translate3d(0, 0, 0)";u.webkitBackfaceVisibility="hidden";u.webkitPerspective=1e3}if(!r.delay){this.delayed=setTimeout(this.runner,30)}else{this.delayed=setTimeout(this.runner,r.delay>30?r.delay:30)}};CJcss.prototype.stop=function(e,t){var n=this.obj;if(e)e=this.complete;if(!n){clearTimeout(this.delayed);clearTimeout(this.stepped);$(this.storage);if(!t)K(this,n,e,this.completeParams);return}delete n.cj;n.removeEventListener(f,Q,false);n.className+=" cj-tween";n.setAttribute("style",n.getAttribute("style").split(this.moves).join(";").split(";;").join(";"));$(n);if(!t)K(this,n,e,this.completeParams)};this.CJpercentage=function(e,t,n){h=a.length;var r=e.cj=a[h++]=this;this.obj=e;this.complete=n.callback;this.completeParams=n.callbackParams;this.runner=function(){var i=0,u=[],a,f,c,h=t.to,p=t.from,d=n.duration||o,v=(n.ease||s).toLowerCase().split(".");v=st[v[0]][v[1]];for(a in p){if(!p.hasOwnProperty(a))continue;c=parseInt(h[a],10);f=parseInt(p[a],10);u[i++]=[c>f,a,c,f]}e.style.visibility="visible";r.transitions=r.animate(e,u,d,v);l?setTimeout(J,10):V()};if(n.duration===0){this.stop();return}if(!n.delay){this.runner()}else{this.delayed=setTimeout(this.runner,n.delay)}};CJpercentage.prototype.cycle=function(){return this.transitions()};CJpercentage.prototype.animate=function(e,t,n,r){var i,s=0,o=Date.now(),u,a,f=e.style,l=t.length,c,h;return function(e){u=Date.now();s+=u-o;o=u;i=r(s,0,1,n);a=l;if(i<.99&&!e){while(a--){c=t[a];h=c[3];if(c[0]){f[c[1]]=h+(c[2]-h)*i+"%"}else{f[c[1]]=h-(h-c[2])*i+"%"}}return true}else{while(a--){c=t[a];f[c[1]]=c[2]+"%"}return false}}};CJpercentage.prototype.stop=function(e,t,n){if("delayed"in this)clearTimeout(this.delayed);var r=this.obj;delete r.cj;if(e&&this.transitions)this.transitions(true);if(t)t=this.complete;if(!n)K(this,r,t,this.completeParams)};this.CJspecial=function(e,t){if(!t||!t.callback)return;h=a.length;a[h++]=e.cj=this;var n=this.complete=t.callback,r=t.ease||s;r=r.toLowerCase().split(".");r=st[r[0]][r[1]];this.obj=e;this.transitions=this.numbers(e,t.duration||o,r,n);l?setTimeout(J,10):V()};CJspecial.prototype.cycle=function(){return this.transitions()};CJspecial.prototype.numbers=function(e,t,n,r){var i,s=0,o=Date.now(),u;return function(){u=Date.now();s+=u-o;o=u;i=n(s,0,1,t);if(i<.97){r(e,i);return true}else{return false}}};CJspecial.prototype.stop=function(e,t,n,r){var i=this.obj;if(!i)return;delete i.cj;if(!n)K(this);if(e||r)this.complete(i,1,t)};var st={linear:{easenone:function(e,t,n,r){return n*e/r+t},easein:function(e,t,n,r){return n*e/r+t},easeout:function(e,t,n,r){return n*e/r+t},easeinout:function(e,t,n,r){return n*e/r+t}},quint:{easeout:function(e,t,n,r){return n*((e=e/r-1)*e*e*e*e+1)+t},easein:function(e,t,n,r){return n*(e/=r)*e*e*e*e+t},easeinout:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t}},quad:{easein:function(e,t,n,r){return n*(e/=r)*e+t},easeout:function(e,t,n,r){return-n*(e/=r)*(e-2)+t},easeinout:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},quart:{easein:function(e,t,n,r){return n*(e/=r)*e*e*e+t},easeout:function(e,t,n,r){return-n*((e=e/r-1)*e*e*e-1)+t},easeinout:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t}},cubic:{easein:function(e,t,n,r){return n*(e/=r)*e*e+t},easeout:function(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t},easeinout:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}},circ:{easein:function(e,t,n,r){return-n*(Math.sqrt(1-(e/=r)*e)-1)+t},easeout:function(e,t,n,r){return n*Math.sqrt(1-(e=e/r-1)*e)+t},easeinout:function(e,t,n,r){return(e/=r/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t}},sine:{easein:function(e,t,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+t},easeout:function(e,t,n,r){return n*Math.sin(e/r*(Math.PI/2))+t},easeinout:function(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t}},expo:{easein:function(e,t,n,r){return e===0?t:n*Math.pow(2,10*(e/r-1))+t},easeout:function(e,t,n,r){return e===r?t+n:n*(-Math.pow(2,-10*e/r)+1)+t},easeinout:function(e,t,n,r){if(e===0)return t;if(e===r)return t+n;if((e/=r/2)<1)return n/2*Math.pow(2,10*(e-1))+t;return n/2*(-Math.pow(2,-10*--e)+2)+t}}},ot={linear:{easenone:"0.250, 0.250, 0.750, 0.750",easein:"0.420, 0.000, 1.000, 1.000",easeout:"0.000, 0.000, 0.580, 1.000",easeinout:"0.420, 0.000, 0.580, 1.000"},quint:{easein:"0.755, 0.050, 0.855, 0.060",easeout:"0.230, 1.000, 0.320, 1.000",easeinout:"0.860, 0.000, 0.070, 1.000"},quad:{easein:"0.550, 0.085, 0.680, 0.530",easeout:"0.250, 0.460, 0.450, 0.940",easeinout:"0.455, 0.030, 0.515, 0.955"},quart:{easein:"0.895, 0.030, 0.685, 0.220",easeout:"0.165, 0.840, 0.440, 1.000",easeinout:"0.770, 0.000, 0.175, 1.000"},cubic:{easein:"0.550, 0.055, 0.675, 0.190",easeout:"0.215, 0.610, 0.355, 1.000",easeinout:"0.645, 0.045, 0.355, 1.000"},circ:{easein:"0.600, 0.040, 0.980, 0.335",easeout:"0.075, 0.820, 0.165, 1.000",easeinout:"0.785, 0.135, 0.150, 0.860"},sine:{easein:"0.470, 0.000, 0.745, 0.715",easeout:"0.390, 0.575, 0.565, 1.000",easeinout:"0.445, 0.050, 0.550, 0.950"},expo:{easein:"0.950, 0.050, 0.795, 0.035",easeout:"0.190, 1.000, 0.220, 1.000",easeinout:"1.000, 0.000, 0.000, 1.000"}};d=u=r=null})(window);


(function(e){e.address=function(){var t=function(t){e(e.address).trigger(e.extend(e.Event(t),function(){for(var t={},n=e.address.parameterNames(),r=0,i=n.length;r<i;r++)t[n[r]]=e.address.parameter(n[r]);return{value:e.address.value(),path:e.address.path(),pathNames:e.address.pathNames(),parameterNames:n,parameters:t,queryString:e.address.queryString()}}.call(e.address)))},n=function(e){return Array.prototype.slice.call(e)},r=function(){e().bind.apply(e(e.address),Array.prototype.slice.call(arguments));return e.address},i=function(){return B.pushState&&A.state!==E},s=function(){return("/"+j.pathname.replace(new RegExp(A.state),"")+j.search+(o()?"#"+o():"")).replace(q,"/")},o=function(){var e=j.href.indexOf("#");return e!=-1?l(j.href.substr(e+1),L):""},u=function(){return i()?s():o()},a=function(){return"javascript"},f=function(e){e=e.toString();return(A.strict&&e.substr(0,1)!="/"?"/":"")+e},l=function(e,t){if(A.crawlable&&t)return(e!==""?"!":"")+e;return e.replace(/^\!/,"")},h=function(e,t){return parseInt(e.css(t),10)},p=function(){if(!$){var e=u();if(Y!=e)if(_&&M<7)j.reload();else{_&&!U&&A.history&&I(m,50);Y=e;d(L)}}},d=function(e){t(T);t(e?N:C);I(v,10)},v=function(){if(A.tracker!=="null"&&A.tracker!==null){var t=e.isFunction(A.tracker)?A.tracker:P[A.tracker],n=(j.pathname+j.search+(e.address&&!i()?e.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,"");if(e.isFunction(t))t(n);else if(e.isFunction(P.urchinTracker))P.urchinTracker(n);else if(P.pageTracker!==E&&e.isFunction(P.pageTracker._trackPageview))P.pageTracker._trackPageview(n);else P._gaq!==E&&e.isFunction(P._gaq.push)&&P._gaq.push(["_trackPageview",decodeURI(n)])}},m=function(){var e=a()+":"+L+";document.open();document.writeln('<html><head><title>"+H.title.replace(/\'/g,"\\'")+"</title><script>var "+S+' = "'+u()+(H.domain!=j.hostname?'";document.domain="'+H.domain:"")+"\";</script></head></html>');document.close();";if(M<7)z.src=e;else z.contentWindow.location.replace(e)},g=function(){if(W&&X!=-1){var e,t,n=W.substr(X+1).split("&");for(e=0;e<n.length;e++){t=n[e].split("=");if(/^(autoUpdate|crawlable|history|strict|wrap)$/.test(t[0]))A[t[0]]=isNaN(t[1])?/^(true|yes)$/i.test(t[1]):parseInt(t[1],10)!==0;if(/^(state|tracker)$/.test(t[0]))A[t[0]]=t[1]}W=null}Y=u()},y=function(){if(!J){J=k;g();var n=function(){b.call(this);w.call(this)},r=e("body").ajaxComplete(n);n();if(A.wrap){e("body > *").wrapAll('<div style="padding:'+(h(r,"marginTop")+h(r,"paddingTop"))+"px "+(h(r,"marginRight")+h(r,"paddingRight"))+"px "+(h(r,"marginBottom")+h(r,"paddingBottom"))+"px "+(h(r,"marginLeft")+h(r,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+S+'" style="height:100%;overflow:auto;position:relative;'+(D&&!window.statusbar.visible?"resize:both;":"")+'" />');e("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"});D&&e('<style type="text/css" />').appendTo("head").text("#"+S+"::-webkit-resizer { background-color: #fff; }")}if(_&&!U){n=H.getElementsByTagName("frameset")[0];z=H.createElement((n?"":"i")+"frame");z.src=a()+":"+L;if(n){n.insertAdjacentElement("beforeEnd",z);n[n.cols?"cols":"rows"]+=",0";z.noResize=k;z.frameBorder=z.frameSpacing=0}else{z.style.display="none";z.style.width=z.style.height=0;z.tabIndex=-1;H.body.insertAdjacentElement("afterBegin",z)}I(function(){e(z).bind("load",function(){var e=z.contentWindow;Y=e[S]!==E?e[S]:"";if(Y!=u()){d(L);j.hash=l(Y,k)}});z.contentWindow[S]===E&&m()},50)}I(function(){t("init");d(L)},1);if(!i())if(U)if(P.addEventListener)P.addEventListener(x,p,L);else P.attachEvent&&P.attachEvent("on"+x,p);else F(p,50)}},b=function(){var t,n=e("a"),r=n.size(),i=-1,s=function(){if(++i!=r){t=e(n.get(i));t.is('[rel*="address:"]')&&t.address('[rel*="address:"]');I(s,1)}};I(s,1)},w=function(){if(A.crawlable){var t=j.pathname.replace(/\/$/,"");e("body").html().indexOf("_escaped_fragment_")!=-1&&e('a[href]:not([href^=http]), a[href*="'+document.domain+'"]').each(function(){var n=e(this).attr("href").replace(/^http:/,"").replace(new RegExp(t+"/?$"),"");if(n===""||n.indexOf("_escaped_fragment_")!=-1)e(this).attr("href","#"+encodeURI(decodeURIComponent(n.replace(/\/(.*)\?_escaped_fragment_=(.*)$/)),"!$2"))})}},E,S="jQueryAddress",x="hashchange",T="change",N="internalChange",C="externalChange",k=true,L=false,A={autoUpdate:k,crawlable:L,history:k,strict:k,wrap:L},O=e.browser,M=parseFloat(O.version),_=!e.support.opacity,D=O.webkit||O.safari,P=function(){try{return top.document!==E?top:window}catch(e){return window}}(),H=P.document,B=P.history,j=P.location,F=setInterval,I=setTimeout,q=/\/{2,9}/g,R=navigator.userAgent,U="on"+x in P,z,W=e("script:last").attr("src"),X=W?W.indexOf("?"):-1,V=H.title,$=L,J=L,K=k,Q=k,G=L,Y=u();if(_){M=parseFloat(R.substr(R.indexOf("MSIE")+4));if(H.documentMode&&H.documentMode!=M)M=H.documentMode!=8?7:8;var Z=H.onpropertychange;H.onpropertychange=function(){Z&&Z.call(H);if(H.title!=V&&H.title.indexOf("#"+u())!=-1)H.title=V}}if(B.navigationMode)B.navigationMode="compatible";if(document.readyState=="complete")var et=setInterval(function(){if(e.address){y();clearInterval(et)}},50);else{g();e(y)}e(window).bind("popstate",function(){if(Y!=u()){Y=u();d(L)}}).bind("unload",function(){if(P.removeEventListener)P.removeEventListener(x,p,L);else P.detachEvent&&P.detachEvent("on"+x,p)});return{bind:function(){return r.apply(this,n(arguments))},init:function(){return r.apply(this,["init"].concat(n(arguments)))},change:function(){return r.apply(this,[T].concat(n(arguments)))},internalChange:function(){return r.apply(this,[N].concat(n(arguments)))},externalChange:function(){return r.apply(this,[C].concat(n(arguments)))},baseURL:function(){var e=j.href;if(e.indexOf("#")!=-1)e=e.substr(0,e.indexOf("#"));if(/\/$/.test(e))e=e.substr(0,e.length-1);return e},autoUpdate:function(e){if(e!==E){A.autoUpdate=e;return this}return A.autoUpdate},crawlable:function(e){if(e!==E){A.crawlable=e;return this}return A.crawlable},history:function(e){if(e!==E){A.history=e;return this}return A.history},state:function(e){if(e!==E){A.state=e;var t=s();if(A.state!==E)if(B.pushState)t.substr(0,3)=="/#/"&&j.replace(A.state.replace(/^\/$/,"")+t.substr(2));else t!="/"&&t.replace(/^\/#/,"")!=o()&&I(function(){j.replace(A.state.replace(/^\/$/,"")+"/#"+t)},1);return this}return A.state},strict:function(e){if(e!==E){A.strict=e;return this}return A.strict},tracker:function(e){if(e!==E){A.tracker=e;return this}return A.tracker},wrap:function(e){if(e!==E){A.wrap=e;return this}return A.wrap},update:function(){G=k;this.value(Y);G=L;return this},title:function(e){if(e!==E){I(function(){V=H.title=e;if(Q&&z&&z.contentWindow&&z.contentWindow.document){z.contentWindow.document.title=e;Q=L}if(!K&&O.mozilla)j.replace(j.href.indexOf("#")!=-1?j.href:j.href+"#");K=L},50);return this}return H.title},value:function(e){if(e!==E){e=f(e);if(e=="/")e="";if(Y==e&&!G)return;K=k;Y=e;if(A.autoUpdate||G){d(k);if(i())B[A.history?"pushState":"replaceState"]({},"",A.state.replace(/\/$/,"")+(Y===""?"/":Y));else{$=k;if(D)if(A.history)j.hash="#"+l(Y,k);else j.replace("#"+l(Y,k));else if(Y!=u())if(A.history)j.hash="#"+l(Y,k);else j.replace("#"+l(Y,k));_&&!U&&A.history&&I(m,50);if(D)I(function(){$=L},1);else $=L}}return this}return f(Y)},path:function(e){if(e!==E){var t=this.queryString(),n=this.hash();this.value(e+(t?"?"+t:"")+(n?"#"+n:""));return this}return f(Y).split("#")[0].split("?")[0]},pathNames:function(){var e=this.path(),t=e.replace(q,"/").split("/");if(e.substr(0,1)=="/"||e.length===0)t.splice(0,1);e.substr(e.length-1,1)=="/"&&t.splice(t.length-1,1);return t},queryString:function(e){if(e!==E){var t=this.hash();this.value(this.path()+(e?"?"+e:"")+(t?"#"+t:""));return this}e=Y.split("?");return e.slice(1,e.length).join("?").split("#")[0]},parameter:function(t,n,r){var i,s;if(n!==E){var o=this.parameterNames();s=[];n=n?n.toString():"";for(i=0;i<o.length;i++){var u=o[i],a=this.parameter(u);if(typeof a=="string")a=[a];if(u==t)a=n===null||n===""?[]:r?a.concat([n]):[n];for(var f=0;f<a.length;f++)s.push(u+"="+a[f])}e.inArray(t,o)==-1&&n!==null&&n!==""&&s.push(t+"="+n);this.queryString(s.join("&"));return this}if(n=this.queryString()){r=[];s=n.split("&");for(i=0;i<s.length;i++){n=s[i].split("=");n[0]==t&&r.push(n.slice(1).join("="))}if(r.length!==0)return r.length!=1?r:r[0]}},parameterNames:function(){var t=this.queryString(),n=[];if(t&&t.indexOf("=")!=-1){t=t.split("&");for(var r=0;r<t.length;r++){var i=t[r].split("=")[0];e.inArray(i,n)==-1&&n.push(i)}}return n},hash:function(e){if(e!==E){this.value(Y.split("#")[0]+(e?"#"+e:""));return this}e=Y.split("#");return e.slice(1,e.length).join("#")}}}();e.fn.address=function(t){var n;if(typeof t=="string"){n=t;t=undefined}e(this).attr("address")||e(n?n:this).live("click",function(n){if(n.shiftKey||n.ctrlKey||n.metaKey||n.which==2)return true;if(e(this).is("a")){n.preventDefault();n=t?t.call(this):/address:/.test(e(this).attr("rel"))?e(this).attr("rel").split("address:")[1].split(" ")[0]:e.address.state()!==undefined&&!/^\/?$/.test(e.address.state())?e(this).attr("href").replace(new RegExp("^(.*"+e.address.state()+"|\\.)"),""):e(this).attr("href").replace(/^(#\!?|\.)/,"");e.address.value(n)}}).live("submit",function(n){if(e(this).is("form")){n.preventDefault();n=e(this).attr("action");n=t?t.call(this):(n.indexOf("?")!=-1?n.replace(/&$/,""):n+"?")+e(this).serialize();e.address.value(n)}}).attr("address",true);return this}})(jQuery);


(function(){function n(n,i,s,o,u,a){if(isNaN(a)||a<1)return;a|=0;var f=document.getElementById(n),l=f.getContext("2d"),c=l.getImageData(i,s,o,u),h=c.data,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D=null,P=null,H=e[a],B=t[a],j=a+a+1,F=o<<2,I=o-1,q=u-1,R=a+1,U=R*(R+1)/2,z=new r,W=z;for(v=1;v<j;v++){W=W.next=new r;if(v==R)var X=W}W.next=z;b=y=0;for(d=0;d<u;d++){C=k=L=w=E=S=0;x=R*(A=h[y]);T=R*(O=h[y+1]);N=R*(M=h[y+2]);w+=U*A;E+=U*O;S+=U*M;W=z;for(v=0;v<R;v++){W.r=A;W.g=O;W.b=M;W=W.next}for(v=1;v<R;v++){m=y+((I<v?I:v)<<2);w+=(W.r=A=h[m])*(_=R-v);E+=(W.g=O=h[m+1])*_;S+=(W.b=M=h[m+2])*_;C+=A;k+=O;L+=M;W=W.next}D=z;P=X;for(p=0;p<o;p++){h[y]=w*H>>B;h[y+1]=E*H>>B;h[y+2]=S*H>>B;w-=x;E-=T;S-=N;x-=D.r;T-=D.g;N-=D.b;m=b+((m=p+a+1)<I?m:I)<<2;C+=D.r=h[m];k+=D.g=h[m+1];L+=D.b=h[m+2];w+=C;E+=k;S+=L;D=D.next;x+=A=P.r;T+=O=P.g;N+=M=P.b;C-=A;k-=O;L-=M;P=P.next;y+=4}b+=o}for(p=0;p<o;p++){k=L=C=E=S=w=0;y=p<<2;x=R*(A=h[y]);T=R*(O=h[y+1]);N=R*(M=h[y+2]);w+=U*A;E+=U*O;S+=U*M;W=z;for(v=0;v<R;v++){W.r=A;W.g=O;W.b=M;W=W.next}g=o;for(v=1;v<=a;v++){y=g+p<<2;w+=(W.r=A=h[y])*(_=R-v);E+=(W.g=O=h[y+1])*_;S+=(W.b=M=h[y+2])*_;C+=A;k+=O;L+=M;W=W.next;if(v<q){g+=o}}y=p;D=z;P=X;for(d=0;d<u;d++){m=y<<2;h[m]=w*H>>B;h[m+1]=E*H>>B;h[m+2]=S*H>>B;w-=x;E-=T;S-=N;x-=D.r;T-=D.g;N-=D.b;m=p+((m=d+R)<q?m:q)*o<<2;w+=C+=D.r=h[m];E+=k+=D.g=h[m+1];S+=L+=D.b=h[m+2];D=D.next;x+=A=P.r;T+=O=P.g;N+=M=P.b;C-=A;k-=O;L-=M;P=P.next;y+=o}}l.putImageData(c,i,s)}function r(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}var e=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var t=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];window.StackBlurImage=function(e,t,r,i){var s=document.getElementById(e),o=s.naturalWidth,u=s.naturalHeight,a=document.getElementById(t);a.style.width=o+"px";a.style.height=u+"px";a.width=o;a.height=u;var f=a.getContext("2d");f.clearRect(0,0,o,u);f.drawImage(s,0,0);if(isNaN(r)||r<1)return;n(t,0,0,o,u,r)}})();

