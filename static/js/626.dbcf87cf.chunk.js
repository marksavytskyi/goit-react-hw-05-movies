"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[626],{626:function(n,t,e){e.r(t),e.d(t,{default:function(){return yt}});var r=e(689),o=e(791),a=e(243),i=e(861),s=e(439),c=e(757),u=e.n(c),l=e(390),d=e(168),p=e(433);function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function m(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function g(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){f(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var h={data:""},v=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||h},x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,b=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,w=function n(t,e){var r="",o="",a="",i=function(i){var c=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?n(c,i):i+"{"+n(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=n(c,e?e.replace(/([^,])+/g,(function(n){return i.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=n.p?n.p(i,c):i+":"+c+";"),s=i};for(var s in t)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},Z={},j=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},k=function(n,t,e,r,o){var a=j(n),i=Z[a]||(Z[a]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(a));if(!Z[i]){var s=a!==n?n:function(n){for(var t,e,r=[{}];t=x.exec(n.replace(b,""));)t[4]?r.shift():t[3]?(e=t[3].replace(y," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(y," ").trim();return r[0]}(n);Z[i]=w(o?f({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&Z.g?Z.g:null;return e&&(Z.g=Z[i]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(Z[i],t,r,c),i},O=function(n,t,e){return n.reduce((function(n,r,o){var a=t[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":w(i,""):!1===i?"":i}return n+r+(null==a?"":a)}),"")};function P(n){var t=this||{},e=n.call?n(t.p):n;return k(e.unshift?e.raw?O(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,v(t.target),t.g,t.o,t.k)}P.bind({g:1});var E,C,S,z,_,D,N,A,T,F,I,U,M,L,H,R,q,B,G,J=P.bind({k:1});function Y(n,t){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:C&&C()},s),e.o=/ *go\d+/.test(c),s.className=P.apply(e,r)+(c?" "+c:""),t&&(s.ref=i);var u=n;return n[0]&&(u=s.as||n,delete s.as),S&&u[0]&&S(s),E(u,s)}return t?t(o):o}}var $=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},K=function(){var n=0;return function(){return(++n).toString()}}(),Q=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),V=new Map,W=function(n){if(!V.has(n)){var t=setTimeout((function(){V.delete(n),en({type:4,toastId:n})}),1e3);V.set(n,t)}},X=function n(t,e){switch(e.type){case 0:return g(g({},t),{},{toasts:[e.toast].concat((0,p.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=V.get(n);t&&clearTimeout(t)}(e.toast.id),g(g({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?g(g({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var o=e.toastId;return o?W(o):t.toasts.forEach((function(n){W(n.id)})),g(g({},t),{},{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?g(g({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?g(g({},t),{},{toasts:[]}):g(g({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return g(g({},t),{},{pausedAt:e.time});case 6:var a=e.time-(t.pausedAt||0);return g(g({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return g(g({},n),{},{pauseDuration:n.pauseDuration+a})}))})}},nn=[],tn={toasts:[],pausedAt:void 0},en=function(n){tn=X(tn,n),nn.forEach((function(n){n(tn)}))},rn={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},on=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return g(g({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||K()})}(t,n,e);return en({type:2,toast:r}),r.id}},an=function(n,t){return on("blank")(n,t)};an.error=on("error"),an.success=on("success"),an.loading=on("loading"),an.custom=on("custom"),an.dismiss=function(n){en({type:3,toastId:n})},an.remove=function(n){return en({type:4,toastId:n})},an.promise=function(n,t,e){var r=an.loading(t.loading,g(g({},e),null==e?void 0:e.loading));return n.then((function(n){return an.success($(t.success,n),g(g({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){an.error($(t.error,n),g(g({id:r},e),null==e?void 0:e.error))})),n};var sn=function(n,t){en({type:1,toast:{id:n,height:t}})},cn=function(){en({type:5,time:Date.now()})},un=function(n){var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.useState)(tn),e=(0,s.Z)(t,2),r=e[0],a=e[1];(0,o.useEffect)((function(){return nn.push(a),function(){var n=nn.indexOf(a);n>-1&&nn.splice(n,1)}}),[r]);var i=r.toasts.map((function(t){var e,r;return g(g(g(g({},n),n[t.type]),t),{},{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==n?void 0:n.duration)||rn[t.type],style:g(g(g({},n.style),null==(r=n[t.type])?void 0:r.style),t.style)})}));return g(g({},r),{},{toasts:i})}(n),e=t.toasts,r=t.pausedAt;(0,o.useEffect)((function(){if(!r){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return an.dismiss(t.id)}),e);t.visible&&an.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,r]);var a=(0,o.useCallback)((function(){r&&en({type:6,time:Date.now()})}),[r]),i=(0,o.useCallback)((function(n,t){var r,o=t||{},a=o.reverseOrder,i=void 0!==a&&a,s=o.gutter,c=void 0===s?8:s,u=o.defaultPosition,l=e.filter((function(t){return(t.position||u)===(n.position||u)&&t.height})),d=l.findIndex((function(t){return t.id===n.id})),f=l.filter((function(n,t){return t<d&&n.visible})).length;return(r=l.filter((function(n){return n.visible}))).slice.apply(r,(0,p.Z)(i?[f+1]:[0,f])).reduce((function(n,t){return n+(t.height||0)+c}),0)}),[e]);return{toasts:e,handlers:{updateHeight:sn,startPause:cn,endPause:a,calculateOffset:i}}},ln=J(z||(z=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),dn=J(_||(_=(0,d.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),pn=J(D||(D=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),fn=Y("div")(N||(N=(0,d.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),ln,dn,(function(n){return n.secondary||"#fff"}),pn),mn=J(A||(A=(0,d.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),gn=Y("div")(T||(T=(0,d.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),mn),hn=J(F||(F=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),vn=J(I||(I=(0,d.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),xn=Y("div")(U||(U=(0,d.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),hn,vn,(function(n){return n.secondary||"#fff"})),bn=Y("div")(M||(M=(0,d.Z)(["\n  position: absolute;\n"]))),yn=Y("div")(L||(L=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),wn=J(H||(H=(0,d.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Zn=Y("div")(R||(R=(0,d.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),wn),jn=function(n){var t=n.toast,e=t.icon,r=t.type,a=t.iconTheme;return void 0!==e?"string"==typeof e?o.createElement(Zn,null,e):e:"blank"===r?null:o.createElement(yn,null,o.createElement(gn,g({},a)),"loading"!==r&&o.createElement(bn,null,"error"===r?o.createElement(fn,g({},a)):o.createElement(xn,g({},a))))},kn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},On=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},Pn=Y("div")(q||(q=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),En=Y("div")(B||(B=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Cn=o.memo((function(n){var t=n.toast,e=n.position,r=n.style,a=n.children,i=t.height?function(n,t){var e=n.includes("top")?1:-1,r=Q()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[kn(e),On(e)],o=(0,s.Z)(r,2),a=o[0],i=o[1];return{animation:t?"".concat(J(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(J(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},c=o.createElement(jn,{toast:t}),u=o.createElement(En,g({},t.ariaProps),$(t.message,t));return o.createElement(Pn,{className:t.className,style:g(g(g({},i),r),t.style)},"function"==typeof a?a({icon:c,message:u}):o.createElement(o.Fragment,null,c,u))}));!function(n,t,e,r){w.p=t,E=n,C=e,S=r}(o.createElement);var Sn,zn,_n,Dn,Nn,An,Tn,Fn,In,Un,Mn,Ln,Hn,Rn,qn,Bn=function(n){var t=n.id,e=n.className,r=n.style,a=n.onHeightUpdate,i=n.children,s=o.useCallback((function(n){if(n){var e=function(){var e=n.getBoundingClientRect().height;a(t,e)};e(),new MutationObserver(e).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[t,a]);return o.createElement("div",{ref:s,className:e,style:r},i)},Gn=P(G||(G=(0,d.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Jn=function(n){var t=n.reverseOrder,e=n.position,r=void 0===e?"top-center":e,a=n.toastOptions,i=n.gutter,s=n.children,c=n.containerStyle,u=n.containerClassName,l=un(a),d=l.toasts,p=l.handlers;return o.createElement("div",{style:g({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},c),className:u,onMouseEnter:p.startPause,onMouseLeave:p.endPause},d.map((function(n){var e=n.position||r,a=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return g(g({left:0,right:0,display:"flex",position:"absolute",transition:Q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(e?1:-1),"px)")},r),o)}(e,p.calculateOffset(n,{reverseOrder:t,gutter:i,defaultPosition:r}));return o.createElement(Bn,{id:n.id,key:n.id,onHeightUpdate:p.updateHeight,className:n.visible?Gn:"",style:a},"custom"===n.type?$(n.message,n):s?s(n):o.createElement(Cn,{toast:n,position:e}))})))},Yn=an,$n=e(444),Kn=e(87),Qn=$n.ZP.div(Sn||(Sn=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  border-bottom: 3px solid black;\n"]))),Vn=$n.ZP.h3(zn||(zn=(0,d.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 3px;\n\n  margin-bottom: 20px;\n"]))),Wn=$n.ZP.ul(_n||(_n=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n"]))),Xn=$n.ZP.li(Dn||(Dn=(0,d.Z)(["\n  text-align: center;\n\n  padding: 10px;\n  height: 30px;\n  width: 200px;\n"]))),nt=(0,$n.ZP)(Kn.OL)(Nn||(Nn=(0,d.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 3px;\n  background-color: #fff;\n  color: black;\n  text-decoration: none;\n  border-radius: 7px;\n\n  &:not(:last-child) {\n    margin-right: 50px;\n  }\n  &:hover {\n    box-shadow: 0px 5px 20px black;\n  }\n  &.active {\n    background-color: #f9ff3c;\n  }\n"]))),tt=e(184),et=function(){return(0,tt.jsxs)(Qn,{children:[(0,tt.jsx)(Vn,{children:"Additional info"}),(0,tt.jsxs)(Wn,{children:[(0,tt.jsx)(nt,{to:"cast",children:(0,tt.jsx)(Xn,{children:"Cast"})}),(0,tt.jsx)(nt,{to:"reviews",children:(0,tt.jsx)(Xn,{children:"Reviews"})})]})]})},rt=$n.ZP.div(An||(An=(0,d.Z)(["\n  display: flex;\n  margin-top: 20px;\n  border-radius: 10px;\n  background-color: rgba(249, 255, 60);\n"]))),ot=$n.ZP.img(Tn||(Tn=(0,d.Z)(["\n  border-radius: 10px;\n"]))),at=$n.ZP.div(Fn||(Fn=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n"]))),it=$n.ZP.h1(In||(In=(0,d.Z)(["\n  text-align: center;\n  letter-spacing: 3px;\n  margin-bottom: 30px;\n"]))),st=$n.ZP.p(Un||(Un=(0,d.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),ct=$n.ZP.h2(Mn||(Mn=(0,d.Z)(["\n  margin-bottom: 10px;\n  letter-spacing: 3px;\n"]))),ut=$n.ZP.p(Ln||(Ln=(0,d.Z)(["\n  margin-bottom: 20px;\n"]))),lt=$n.ZP.h2(Hn||(Hn=(0,d.Z)(["\n  letter-spacing: 3px;\n\n  margin-bottom: 10px;\n"]))),dt=$n.ZP.p(Rn||(Rn=(0,d.Z)(["\n  font-size: 20px;\n"]))),pt=function(n){var t=n.film,e=t.title,r=t.poster_path,o=t.overview,a=t.vote_average,i=t.genres;return(0,tt.jsxs)(rt,{children:[(0,tt.jsx)(ot,{src:"http://image.tmdb.org/t/p/w500".concat(r),alt:e}),(0,tt.jsxs)(at,{children:[(0,tt.jsx)(it,{children:e}),(0,tt.jsxs)(st,{children:["User Score: ",Math.round(10*a),"%"]}),(0,tt.jsx)(ct,{children:"Overview"}),(0,tt.jsx)(ut,{children:o}),(0,tt.jsx)(lt,{children:"Genres:"}),(0,tt.jsx)(dt,{children:i.reduce((function(n,t){return n.push(t.name),n}),[]).join(", ")})]})]})},ft="idle",mt="pending",gt="resolved",ht="rejected",vt=function(){var n=(0,o.useState)({}),t=(0,s.Z)(n,2),e=t[0],c=t[1],d=(0,o.useState)((0,r.UO)().id),p=(0,s.Z)(d,1)[0],f=(0,o.useState)(ft),m=(0,s.Z)(f,2),g=m[0],h=m[1];(0,o.useEffect)((function(){function n(){return(n=(0,i.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.ts)(p);case 3:t=n.sent,c(t.data),h(gt),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(0),h(ft),Yn.error("Film not found!"),setTimeout((function(){h(ht)}),3e3);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}h(mt),function(){n.apply(this,arguments)}()}),[p]);return(0,tt.jsxs)(tt.Fragment,{children:[g===mt&&(0,tt.jsx)(a.iT,{width:200,height:200,wrapperClass:"oval-loader"}),g===gt&&(0,tt.jsxs)(tt.Fragment,{children:[(0,tt.jsx)(pt,{film:e}),(0,tt.jsx)(et,{})]}),g===ht&&(0,tt.jsx)(r.Fg,{to:"/"}),(0,tt.jsx)(Jn,{containerStyle:{top:"50%",display:"flex",justifyContent:"center",alignItems:"center"}})]})},xt=(0,$n.ZP)(Kn.OL)(qn||(qn=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  height: 30px;\n\n  text-decoration: none;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  background-color: white;\n\n  &:hover {\n    box-shadow: 0px 5px 20px black;\n    background-color: #f9ff3c;\n  }\n"]))),bt=function(n){var t=n.to,e=n.children;return(0,tt.jsx)(xt,{to:t,children:e})},yt=function(){var n,t,e=(0,r.TH)(),i=(0,o.useRef)(null!==(n=null===(t=e.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,tt.jsxs)("main",{children:[(0,tt.jsx)(bt,{to:i.current,children:"Back"}),(0,tt.jsx)(vt,{}),(0,tt.jsx)(o.Suspense,{fallback:(0,tt.jsx)(a.iT,{width:200,height:200,wrapperClass:"oval-loader"}),children:(0,tt.jsx)(r.j3,{})})]})}},390:function(n,t,e){e.d(t,{JS:function(){return c},M1:function(){return l},oy:function(){return p},ts:function(){return u},tx:function(){return d}});var r=e(861),o=e(757),a=e.n(o),i=e(912),s="a2e09a9932668fabc233f9c3d63a2fc0";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=626.dbcf87cf.chunk.js.map