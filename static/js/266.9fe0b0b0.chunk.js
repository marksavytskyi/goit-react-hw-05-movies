"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{75:function(n,t,e){e.d(t,{O:function(){return d}});var r,a,c=e(168),u=e(87),i=e(444),o=(0,i.ZP)(u.OL)(r||(r=(0,c.Z)(["\n  background-color: #f9ff3c;\n  width: 300px;\n  text-align: center;\n  padding: 7px;\n  border-radius: 10px;\n  text-decoration: none;\n  color: black;\n  font-size: 16px;\n  &:hover {\n    box-shadow: 0px 5px 20px black;\n  }\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),s=e(184),p=function(n){var t=n.id,e=n.title,r=n.location;return(0,s.jsx)(o,{to:"/movies/".concat(t),state:{from:r},children:(0,s.jsx)("li",{children:e})})},f=i.ZP.ul(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  padding: 10px;\n"]))),l=e(689),d=function(n){var t=n.films,e=(0,l.TH)();return(0,s.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title;return(0,s.jsx)(p,{id:t,title:r,location:e},t)}))})}},266:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),o=e(390),s=e(75),p=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.JS)();case 2:t=n.sent,c(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{style:{textAlign:"center",textTransform:"uppercase"},children:"Tranding today"}),(0,p.jsx)(s.O,{films:e})]})}},390:function(n,t,e){e.d(t,{JS:function(){return o},M1:function(){return p},oy:function(){return l},ts:function(){return s},tx:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(912),i="a2e09a9932668fabc233f9c3d63a2fc0";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=266.9fe0b0b0.chunk.js.map