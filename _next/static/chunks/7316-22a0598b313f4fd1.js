"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7316],{43370:function(e,t,n){var r=n(85893),o=n(9008),a=n(47426);t.Z=function(e){var t=e.title,n=e.ogDescription,i=e.ogImageURL,c=e.ogImgAlt,u=void 0===c?"Picture":c,s=e.ogSiteName,l=void 0===s?"ACAP-".concat(a.Gt.toUpperCase()):s,f=e.ogURL,p=e.canonicalURL,d=void 0===p?"http://localhost":p;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{rel:"canonical",href:d}),(0,r.jsx)("meta",{name:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:l}),(0,r.jsx)("meta",{property:"og:image",content:i}),(0,r.jsx)("meta",{property:"og:image:width",content:"600"}),(0,r.jsx)("meta",{property:"og:image:height",content:"315"}),(0,r.jsx)("meta",{property:"og:image:alt",content:u}),(0,r.jsx)("meta",{property:"og:url",content:f}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:image",content:i}),(0,r.jsx)("title",{children:t})]})}},21323:function(e,t,n){n.d(t,{Z:function(){return Ne}});var r=n(34051),o=n.n(r),a=n(85893),i=n(67294),c=n(63835),u=n(45697),s=n.n(u),l=n(9669),f=n.n(l),p=n(99431),d=n(94763);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){v(a,r,o,i,c,"next",e)}function c(e){v(a,r,o,i,c,"throw",e)}i(void 0)}))}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}function w(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?b(e):t}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}var j=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}var S={DELETE_BULLETIN:"".concat("https://amia-cis-q9ub.onrender.com/api","/bulletins")},D=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(i,e);var t,n,r,a=P(i);function i(){var e;return m(this,i),g(b(e=a.apply(this,arguments)),"FirestoreQuery",new d.Z),g(b(e),"AxiosCancelSource",f().CancelToken.source()),e}return t=i,(n=[{key:"deleteBulletin",value:function(e){var t=e.type,n=e.filename,r=this;return y(o().mark((function e(){var a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={type:t,filename:n},e.next=3,r.createRequestObject({body:a});case 3:return i=e.sent,r.AxiosCancelSource=f().CancelToken.source(),e.next=7,f()(O({},i,{url:S.DELETE_BULLETIN,method:"DELETE",cancelToken:r.AxiosCancelSource.token}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))()}},{key:"getBulletins",value:function(e){var t=this;return y(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.FirestoreQuery.getCollectionData(e,"idstr");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}},{key:"cancelAxiosRequest",value:function(e){this.AxiosCancelSource.cancel(e)}}])&&h(t.prototype,n),r&&h(t,r),i}(p.Z),L=new D,_=L.deleteBulletin.bind(L),A=L.getBulletins.bind(L),k=L.cancelAxiosRequest.bind(L),R=n(901),I=n(90155);function T(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}var N={loading:!1,error:"",status:R.G.IDLE};function F(e){var t=e.type,n=e.filename,r=e.action,a=(0,i.useState)(N),c=a[0],u=a[1];return(0,i.useEffect)((function(){return function(){k("Aborting delete bulletin request")}}),[]),(0,i.useEffect)((function(){var e=function(){var e,r=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u((function(e){return G({},e,{loading:!0,error:"",status:R.G.PENDING})})),e.next=4,_({type:t,filename:n});case 4:u((function(e){return G({},e,{loading:!1,error:"",status:R.G.FULLFILLED})})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),"Aborting delete bulletin request"!==e.t0.message&&u((function(t){var n;return G({},t,{loading:!1,error:(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.data)||e.t0.message,status:R.G.IDLE})}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){T(a,r,o,i,c,"next",e)}function c(e){T(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();n&&r===I.RW.DELETE&&e()}),[n,r,t]),{state:c}}var Z=new(n(1029).d),U=(Z.getPageAssetsDoc.bind(Z),Z.getTyphoonAdvisory.bind(Z),Z.getPdfDownloadURL.bind(Z));function B(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){W(e,t,n[t])}))}return e}var q={loading:!1,error:"",status:R.G.IDLE,url:""};function H(e){var t=e.filename,n=e.type,r=e.urlsegment,a=e.action,c=(0,i.useState)(q),u=c[0],s=c[1];return(0,i.useEffect)((function(){var e=function(){var e,a=(e=o().mark((function e(){var a,i,c,u,l,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s((function(e){return Y({},e,{loading:!0,error:"",url:"",status:R.G.PENDING})})),e.next=4,U(t,n);case 4:return a=e.sent,e.next=7,f().get(a,{responseType:"blob"});case 7:i=e.sent,c=a.substring(a.indexOf(r.keyword)+r.charlength,a.length),u=c.substring(0,c.indexOf("?")),l=window.URL.createObjectURL(new Blob([i.data])),(p=document.createElement("a")).href=l,p.setAttribute("download",decodeURI(u)),document.body.appendChild(p),p.click(),document.body.removeChild(p),s((function(e){return Y({},e,{loading:!1,url:a,status:R.G.FULLFILLED})})),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),s((function(t){var n;return Y({},t,{loading:!1,url:"",error:(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.data)||e.t0.message,status:R.G.IDLE})}));case 23:case"end":return e.stop()}}),e,null,[[0,20]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){B(a,r,o,i,c,"next",e)}function c(e){B(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(){return a.apply(this,arguments)}}();t&&a===I.RW.DOWNLOAD&&e()}),[t,n,r,a]),{state:u}}var M=n(77715);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Q(e,t,n[t])}))}return e}function J(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K={loading:!1,error:"",status:R.G.IDLE,random:""};function X(e){var t=e.currentbulletin,n=e.statdload,r=e.statdelete,a=e.fetch,c=(0,i.useState)(K),u=c[0],s=c[1],l=(0,i.useState)({}),f=l[0],p=l[1],d=(0,i.useState)(I.n5),b=d[0],v=d[1],y=(0,i.useState)(!1),m=y[0],h=y[1],g=(0,i.useState)(!1),x=g[0],O=g[1],w=(0,i.useState)(""),E=w[0],j=w[1];return(0,i.useEffect)((function(){var e=!0,n=function(){var n,r=(n=o().mark((function n(){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s((function(e){return $({},e,{loading:!0,error:"",status:R.G.PENDING})})),n.next=4,A(t.collection);case 4:r=n.sent,a={},r.forEach((function(e){void 0===a[e.province]&&(a[e.province]=[]),a[e.province].push({province:e.province,filename:e.filename,date_created:(0,M.Xn)(e.date_created),loading:!1,error:""})})),e&&(p(a),s((function(e){return $({},e,{loading:!1,error:"",status:R.G.FULLFILLED})}))),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),e&&s((function(e){var t;return $({},e,{loading:!1,error:(null===n.t0||void 0===n.t0||null===(t=n.t0.response)||void 0===t?void 0:t.data)||n.t0.message,status:R.G.IDLE})}));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})),function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function i(e){V(a,r,o,i,c,"next",e)}function c(e){V(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();return a&&e&&n(),function(){e=!1}}),[a,t.collection]),(0,i.useEffect)((function(){var e=n.status===R.G.PENDING||r.status===R.G.PENDING;if(O(m!==e),h(e),!e){var o=t.action===I.RW.DELETE?r.error:n.error;j(o)}}),[n,r,t.action,m]),(0,i.useEffect)((function(){if(""!==t.province&&""!==t.filename&&v(t),x){var e=""!==t.filename?$({},t):$({},b);""!==e.filename&&function(e){var t=e.province,n=e.filename,r=J(f[t]),o=r.findIndex((function(e){return e.filename===n}));o>=0?(r[o].loading=m,r[o].error=E,p((function(e){return $({},e,Q({},t,J(r)))})),j(""),O(!1)):s((function(e){return $({},e,{loading:!1,error:"Index not found.",status:R.G.IDLE})}))}({province:e.province,filename:e.filename,loading:m})}}),[m,t,b,f,E,x]),{state:u,bulletins:f}}var ee=n(11496),te=n(75716),ne=n(82280),re=n(38895),oe=n(22797);function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ae(e,t,n[t])}))}return e}var ce=(0,ee.ZP)((function(e){return(0,a.jsx)(ne.Z,ie({disableGutters:!0,elevation:0,square:!0},e))}))((function(e){e.theme;return{boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}})),ue=(0,ee.ZP)((function(e){return(0,a.jsx)(re.Z,ie({expandIcon:(0,a.jsx)(te.Z,{sx:{fontSize:"0.9rem"}})},e))}))((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(180deg)"},"& .MuiAccordionSummary-content":{marginLeft:t.spacing(1)}}})),se=(0,ee.ZP)(oe.Z)((function(e){return{padding:e.theme.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}})),le=n(98456),fe=n(86886),pe=n(93946),de=n(15861),be=n(12963),ve=n(50122),ye=n(41664),me={breacrumbs:{"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:"#000"},"& a:hover, span:hover":{color:function(e){return e.palette.primary.dark}},fontSize:"16px",marginTop:function(e){return e.spacing(2)}}};var he=function(e){var t=e.navdata;return(0,a.jsx)(be.Z,{"aria-label":"breadcrumb",sx:me.breacrumbs,children:t.map((function(e,t){return void 0!==e.href?(0,a.jsx)(ve.Z,{underline:"hover",color:"inherit",children:(0,a.jsx)(ye.default,{href:e.href,passHref:!0,children:(0,a.jsx)("span",{children:e.name})})},"bcd-".concat(t)):(0,a.jsx)("div",{color:"text.primary",children:e.name},"bcd-".concat(t))}))})},ge=n(23508),xe=n(62665),Oe=n(78462),we=n(97212),Ee=n(8364),je=n(48885),Pe=n(59334),Se={listItem:{"& a":{color:function(e){return e.palette.text.primary},textDecoration:"none"},"& a:hover":{color:function(e){return e.palette.third.main},textDecoration:"none"}}};function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){De(e,t,n[t])}))}return e}function _e(e){var t=e.provinces,n=e.bulletins,r=e.isDeleting,o=e.isFetching,i=e.isPDFLoading,c=e.isUser,u=e.handleClick,s=e.onDeleteClick,l=e.subtitle,f=void 0===l?"":l;return(0,a.jsxs)("div",{role:"presentation",children:[(0,a.jsx)(de.Z,{variant:"h4",children:"Bulletins"}),(0,a.jsx)(de.Z,{variant:"h5",children:f}),(0,a.jsx)(he,{navdata:[{name:"Bulletins",href:"/bulletins"},{name:f}]}),(0,a.jsx)(fe.ZP,{container:!0,justifyContent:"center",sx:{width:"100%",marginTop:function(e){return e.spacing(6)}},children:(0,a.jsx)(fe.ZP,{item:!0,xs:10,children:t.map((function(e,t){return(0,a.jsxs)(ce,{defaultExpanded:0===t,sx:Le({maxWidth:"720px"},"n/a"===e&&{marginTop:"32px"}),children:[(0,a.jsx)(ue,{expandIcon:(0,a.jsx)(ge.Z,{}),"aria-controls":"panel1-content",children:(0,a.jsx)(de.Z,{variant:"subtitle1",children:"n/a"!==e?e:"General Special Recommendations"})}),void 0!==n[e]&&(0,a.jsx)(se,{children:n[e].map((function(e,t){return(0,a.jsx)(Oe.Z,{dense:!0,sx:{padding:0},children:(0,a.jsxs)(we.ZP,{children:[(0,a.jsx)(je.Z,{children:(0,a.jsx)(xe.Z,{})}),(0,a.jsx)(Pe.Z,{sx:Se.listItem,primary:(0,a.jsx)("a",{href:"#",disabled:o||r||i,onClick:function(t){t.preventDefault(),o||r||i||u(e.province,e.filename)},children:e.filename}),secondary:"Created on ".concat(e.date_created," ").concat(""!==e.error?"Error: ".concat(e.error):""),primaryTypographyProps:{fontSize:"14px"},secondaryTypographyProps:{fontSize:"11px"}}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(le.Z,{size:20,color:"third",sx:{display:e.loading&&(o||r||i)?"block":"none"}}),c&&(0,a.jsx)(pe.Z,{"aria-label":"delete",color:"primary",disabled:o||r||i,onClick:function(){return s(e)},children:(0,a.jsx)(Ee.Z,{})})]})]})},"acc-sub-".concat(t))}))})]},"acc-".concat(t))}))})})]})}_e.propTypes={provinces:s().array,bulletins:s().object,isDeleting:s().bool,isFetching:s().bool,isPDFLoading:s().bool,isUser:s().bool,handleClick:s().func,onDeleteClick:s().func,subtitle:s().string};var Ae=_e;function ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Re(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ie(e,t,n[t])}))}return e}function Ce(e){return function(e){if(Array.isArray(e))return ke(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ke(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ge(e){var t=e.provinces,n=e.subtitle,r=e.currentDefaultBulletin,u=(0,i.useState)(r),s=u[0],l=u[1],f=(0,c.aC)(),p=F(s).state,d=H(s).state,b=X({currentbulletin:s,statdload:d,statdelete:p,fetch:""===s.filename&&""===p.error&&s.action!==I.RW.DOWNLOAD&&[R.G.FULLFILLED,R.G.IDLE].includes(p.status)}),v=b.state,y=b.bulletins,m=(0,i.useMemo)((function(){if(y&&t)return(null===y||void 0===y?void 0:y["n/a"])?Ce(t).concat(["n/a"]):t}),[y,t]);(0,i.useEffect)((function(){p.status!==R.G.FULLFILLED&&d.status!==R.G.FULLFILLED&&""===p.error&&""===d.error||""===s.filename||l((function(e){return Te({},e,{filename:"",province:""})}))}),[p,d,s]);var h=function(){var e,t=(e=o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(Te({},s,{filename:n,province:t,action:I.RW.DOWNLOAD}));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){Re(a,r,o,i,c,"next",e)}function c(e){Re(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();return(0,a.jsx)(Ae,{provinces:m,bulletins:y,isDeleting:(null===p||void 0===p?void 0:p.loading)||!1,isFetching:(null===v||void 0===v?void 0:v.loading)||!1,isPDFLoading:(null===d||void 0===d?void 0:d.loading)||!1,isUser:null!==f.user,handleClick:h,onDeleteClick:function(e){var t=e.province,n=e.filename;l(Te({},s,{filename:n,province:t,action:I.RW.DELETE}))},subtitle:n})}Ge.propTypes={provinces:s().array,subtitle:s().string,currentDefaultBulletin:s().object};var Ne=Ge},1029:function(e,t,n){n.d(t,{K:function(){return g},d:function(){return x}});var r=n(34051),o=n.n(r),a=n(94763),i=n(96772),c=n(47426),u=n(27392);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){l(a,r,o,i,c,"next",e)}function c(e){l(a,r,o,i,c,"throw",e)}i(void 0)}))}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?s(e):t}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}var g={MEDIA_ASSETS:"n_page_media",ASSETS:"n_page_assets",PAGE_SEARCH:"n_page_search",GLOBAL_COLLECTIONS:"w_services",TYPHOON_ADVISORY:"typhoon_advisory",CYCLONE_ADVISORY:"cyclone_advisory"},x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,e);var t=h(n);function n(){var e;p(this,n);var r=s(e=t.apply(this,arguments));d(s(e),"getPageAssetsDoc",function(){var e=f(o().mark((function e(t,n){var a,i,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]&&c[2],i=[],e.prev=2,e.next=5,r.getDocumentData(g.ASSETS,t);case 5:if(i=e.sent){e.next=8;break}return e.abrupt("return",[]);case 8:if(n){e.next=10;break}return e.abrupt("return",i);case 10:if(!a){e.next=14;break}return e.abrupt("return",i.data.filter((function(e){return e.page===n})));case 14:return e.abrupt("return",i.data.filter((function(e){return e.page===n})).map((function(e){return e.url})));case 15:e.next=21;break;case 17:throw e.prev=17,e.t0=e.catch(2),console.error(e.t0.message),new Error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,n){return e.apply(this,arguments)}}());var a=s(e);d(s(e),"getTyphoonAdvisory",f(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.doc(a.db,g.GLOBAL_COLLECTIONS,g.TYPHOON_ADVISORY),e.next=3,a.getDoc(t);case 3:if(!(n=e.sent).exists()){e.next=6;break}return e.abrupt("return",n.data());case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)}))));var l=s(e);return d(s(e),"getWeatherForecast",function(){var e=f(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getNestedCollectionData(g.WEATHER_FORECASTS,t,n,"name");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d(s(e),"getPdfDownloadURL",function(){var e=f(o().mark((function e(t){var n,r,a,s=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=s.length>1&&void 0!==s[1]?s[1]:u.Ry.SEASONAL,r="",e.t0=n,e.next=e.t0===u.Ry.SEASONAL?5:e.t0===u.Ry.TEN_DAY?7:e.t0===u.Ry.SPECIAL_WEATHER?9:11;break;case 5:return r=c.Do.PDF_STORAGE_SEASONAL,e.abrupt("break",12);case 7:return r=c.Do.PDF_STORAGE_TENDAY,e.abrupt("break",12);case 9:return r=c.Do.PDF_STORAGE_SPECIAL,e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:return e.prev=12,a=(0,i.iH)(i.tO,"".concat(r,"/").concat(t)),e.next=16,(0,i.Jt)(a);case 16:return e.abrupt("return",e.sent);case 19:throw e.prev=19,e.t1=e.catch(12),new Error(e.t1.message);case 22:case"end":return e.stop()}}),e,null,[[12,19]])})));return function(t){return e.apply(this,arguments)}}()),e}return n}(a.Z)},90155:function(e,t,n){n.d(t,{Do:function(){return r},RW:function(){return o},n5:function(){return a}});var r={PDF_CROPS:"bulletins_pdf_crops",PDF_CROPS_TENDAY:"bulletins_pdf_tenday",PDF_CROPS_SPECIAL:"bulletins_pdf_special",PDF_STORAGE_TENDAY:"bulletins_tenday",PDF_STORAGE_SPECIAL:"bulletins_special",PDF_STORAGE_SEASONAL:"bulletins"},o={DELETE:"delete",DOWNLOAD:"download",IDLE:"idle"},a={action:o.IDLE,type:"",collection:r.PDF_CROPS,filename:"",province:"",keyword:""}}}]);