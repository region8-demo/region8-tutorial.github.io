(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1798],{19859:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weather-services",function(){return t(32136)}])},43370:function(e,n,t){"use strict";var r=t(85893),a=t(9008),i=t(47426);n.Z=function(e){var n=e.title,t=e.ogDescription,o=e.ogImageURL,s=e.ogImgAlt,c=void 0===s?"Picture":s,l=e.ogSiteName,d=void 0===l?"ACAP-".concat(i.Gt.toUpperCase()):l,u=e.ogURL,p=e.canonicalURL,x=void 0===p?"http://localhost":p;return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{rel:"canonical",href:x}),(0,r.jsx)("meta",{name:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:site_name",content:d}),(0,r.jsx)("meta",{property:"og:image",content:o}),(0,r.jsx)("meta",{property:"og:image:width",content:"600"}),(0,r.jsx)("meta",{property:"og:image:height",content:"315"}),(0,r.jsx)("meta",{property:"og:image:alt",content:c}),(0,r.jsx)("meta",{property:"og:url",content:u}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:o}),(0,r.jsx)("title",{children:n})]})}},27840:function(e,n,t){"use strict";var r=t(85893),a=t(15861);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=(0,t(11496).ZP)((function(e){return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({component:"p",variant:"caption"},e))}))((function(e){var n=e.theme;return{color:n.palette.text.secondary,"& a":{color:n.palette.green.dark,textDecoration:"none"},"& a:visited":{color:n.palette.green.dark},"& a:hover, span:hover":{textDecoration:"underline"}}}));n.Z=o},1902:function(e,n,t){"use strict";t.d(n,{J4:function(){return r},Y1:function(){return a},Sx:function(){return i}});var r=[{icon:"cc_sunny_49.svg",label:"No rain",nowrap:!0},{icon:"rainfall_light_rain_49.svg",label:"Light rain"},{icon:"rainfall_moderate_rain_49.svg",label:"Moderate rain"},{icon:"rainfall_heavy_rain_49.svg",label:"Heavy rain"},{icon:"blank_weather.png",label:"Heavy rain",hidden:!0}],a=[{icon:"cc_sunny_49.svg",label:"Sunny"},{icon:"cc_mostly_sunny_49.svg",label:"Mostly sunny"},{icon:"cc_partly_cloudy_49.svg",label:"Partly cloudy"},{icon:"cc_mostly_cloudy_49.svg",label:"Mostly cloudy"},{icon:"cc_cloudy_49.svg",label:"Cloudy"}],i={rainfall:{"NO RAIN":"cc_sunny_49.svg","LIGHT RAINS":"rainfall_light_rain_49.svg","MODERATE RAINS":"rainfall_moderate_rain_49.svg","HEAVY RAINS":"rainfall_heavy_rain_49.svg"},cloudCover:{SUNNY:"cc_sunny_49.svg","MOSTLY SUNNY":"cc_mostly_sunny_49.svg","PARTLY CLOUDY":"cc_partly_cloudy_49.svg","MOSTLY CLOUDY":"cc_mostly_cloudy_49.svg",CLOUDY:"cc_cloudy_49.svg"}}},32136:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return Ze},default:function(){return Se}});var r=t(85893),a=t(67294),i=t(9473),o=t(4936),s=t(15861),c=t(34051),l=t.n(c),d=t(901),u=t(76295),p=t(87357),x=t(66242),h=t(98456),m=t(86886),f=t(61903),g=t(25675),y=t(26660),b=t(63365),v=t(48038),j=t(1902),_={daily:{width:"107px",minWidth:"107px",minHeight:"170px",backgroundColor:"rgba(139, 195, 74, 0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-day":{margin:"4px 0 4px 0"},"& .temp-label":{display:"flex",justifyContent:"space-between",fontSize:"12px",margin:"4px"},"& .temp-weather-icons":{backgroundColor:"#fff",paddingTop:"8px"}}};var w=function(e){var n=e.dailyweather,t=function(e){return Math.round(100*(e+Number.EPSILON))/100},a=void 0!==j.Sx.rainfall[n.rainfall]?"images/icons/weather/".concat(j.Sx.rainfall[n.rainfall]):"images/icons/weather/blank_weather.png",i=void 0!==j.Sx.cloudCover[n.cover]?"images/icons/weather/".concat(j.Sx.cloudCover[n.cover]):"images/icons/weather/blank_weather.png";return(0,r.jsxs)(p.Z,{sx:_.daily,children:[(0,r.jsxs)(p.Z,{sx:{padding:0},children:[(0,r.jsx)("div",{className:"temp-day",children:n.day}),(0,r.jsxs)("div",{className:"temp-weather-icons",children:[(0,r.jsx)(g.default,{unoptimized:!0,src:(0,y.assetPrefixer)(a),height:45,width:45,loader:y.imageLoader,alt:n.day}),(0,r.jsx)("br",{}),(0,r.jsx)(g.default,{unoptimized:!0,src:(0,y.assetPrefixer)(i),height:45,width:45,loader:y.imageLoader,alt:n.day})]})]}),(0,r.jsx)(p.Z,{children:(0,r.jsxs)("div",{className:"temp-label",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(b.Z,{fontSize:"12px"}),(0,r.jsxs)("strong",{children:[t(n.temp_avg),"\xb0"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(v.Z,{fontSize:"12px"}),t(n.wspeed)]})]})})]})},Z=t(37634),S=t(27840),A=t(11427),O={titleContainer:{display:"flex",alignItems:"center",height:"inherit","& h6":{marginBottom:{xs:"auto",sm:"unset"}}},iconCard:{padding:"2px 6px 2px 6px",borderRadius:1,height:"100%",width:"62px",margin:{xs:"2px",xs2:"4px"},display:"flex",flexDirection:"column",textAlign:"center","& span":{lineHeight:"initial",fontSize:"11px"}},cardsContainer:{display:"flex",height:"78px"},imgContainer:{margin:"auto",marginTop:{xs:"inherit",sm:0},marginBottom:{xs:"inherit",sm:0},height:{xs:"30px",sm:"45px"},width:{xs:"30px",sm:"45px"}}};var C=function(e){var n=e.sideTitle,t=void 0===n?"":n,a=e.legendsData;return(0,r.jsxs)(m.ZP,{container:!0,gap:0,sx:{width:"100%",marginTop:"16px"},children:[(0,r.jsx)(m.ZP,{item:!0,sx:O.titleContainer,xs:12,lg:2,children:(0,r.jsx)(s.Z,{variant:"subtitle2",children:t})}),(0,r.jsx)(m.ZP,{xs:12,item:!0,lg:10,sx:O.cardsContainer,children:a.map((function(e,n){return(0,r.jsxs)(A.Z,{sx:O.iconCard,style:{visibility:e.hidden?"hidden":"visible"},children:[(0,r.jsx)(p.Z,{sx:O.imgContainer,children:(0,r.jsx)(g.default,{unoptimized:!0,src:(0,y.assetPrefixer)("images/icons/weather/".concat(e.icon)),height:45,width:45,loader:y.imageLoader,alt:e.label})}),(0,r.jsx)("span",{style:{whiteSpace:e.nowrap?"nowrap":"normal"},children:e.label})]},n)}))})]})},L={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"390px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(3)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},autocomplete:{maxWidth:"100%",marginTop:function(e){return e.spacing(1)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},info:{minWidth:"285px",minHeight:"90px",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}}};function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){P(e,n,t[n])}))}return e}var T=function(e){var n=e.weather,t=e.onSelectItemChange,o=(0,i.v9)((function(e){return e.provinces})),c=(0,i.v9)((function(e){return e.municipalities})),l=(0,i.v9)((function(e){return e.tendayweather})),g=(0,a.useState)(!0),y=g[0],b=g[1],v=(0,a.useState)(!1),_=v[0],A=v[1];return(0,a.useEffect)((function(){var e=o.status!==d.G.FULLFILLED||l.status!==d.G.FULLFILLED;""===o.error&&""===l.error||A(!0),b(e)}),[o.status,l.status,o.error,l.error]),(0,r.jsxs)(p.Z,{sx:L.wrapper,id:"contents-tenday-forecast",children:[(0,r.jsx)(s.Z,{variant:"h4",children:"10-Day Weather Forecast"}),(0,r.jsxs)(x.Z,{variant:"outlined",sx:L.card,style:{backgroundColor:"rgba(255, 255, 255, 0.5)"},children:[(0,r.jsxs)(m.ZP,{container:!0,maxWidth:"lg",spacing:4,alignItems:"bottom",children:[(0,r.jsx)(m.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(s.Z,{variant:"h6",children:"Location Selector"}),(0,r.jsx)(u.Z,{disablePortal:!0,id:"province",value:o.province,disabled:0===o.ids.length||y,options:Object.values(o.entities),size:"small",renderInput:function(e){return(0,r.jsx)(f.Z,E({},e,{label:null===o.province?"Select a province":"Province"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return t(e,E({},n,{from:"province"}))}}),(0,r.jsx)(u.Z,{disablePortal:!0,id:"municipality",value:c.municipality,disabled:0===c.ids.length||y,options:Object.values(c.entities),sx:L.autoMuni,size:"small",renderInput:function(e){return(0,r.jsx)(f.Z,E({},e,{label:null===c.municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},getOptionDisabled:function(e){return void 0!==e.iscalendar},onChange:function(e,n){return t(e,E({},n,{from:"municipality"}))}})]})}),(0,r.jsx)(m.ZP,{item:!0,xs:12,md:3,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(s.Z,{variant:"h6",children:"Data Overview"}),!y&&!_&&(0,r.jsxs)(S.Z,{children:[(0,r.jsx)("strong",{children:"Synced by:"}),"\xa0"," ",l.currentLogs.updated_by,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Valid Until:"}),"\xa0"," ",l.currentLogs.date_valid,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date of Forecast:"}),"\xa0"," ",l.currentLogs.date_forecast,(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Date synced:"}),"\xa0"," ",l.currentLogs.date_synced,(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Synced from PAGASA's"," ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",target:"_blank",rel:"noreferrer",children:"10-Day Climate Forecast"})," ","spreadsheet files by"," ","system"===l.currentLogs.updated_by?"":"an"," ",l.currentLogs.updated_by," on"," ",l.currentLogs.date_synced]})]})}),(0,r.jsxs)(m.ZP,{item:!0,xs:12,md:5,children:[(0,r.jsx)(C,{sideTitle:"Rainfall Intensity",legendsData:j.J4}),(0,r.jsx)(C,{sideTitle:"Cloud Cover",legendsData:j.Y1})]})]}),(0,r.jsx)(m.ZP,{container:!0,maxWidth:"lg",sx:{marginTop:"32px"},children:y&&!_?(0,r.jsxs)(p.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1},children:[(0,r.jsx)(h.Z,{size:32}),(0,r.jsx)(s.Z,{variant:"caption",children:"Loading municipalities..."})]}):_?(0,r.jsx)(Z.Z,{}):n.map((function(e,n){return(0,r.jsx)(w,{dailyweather:e},"dw-".concat(n))}))})]})]})},N=t(18217),D=t(23549),k=t(56867);function I(e,n,t,r,a,i,o){try{var s=e[i](o),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}var M=function(){var e=(0,i.v9)((function(e){return e.provinces})),n=e.ids,t=e.entities,o=e.municipalities,s=e.province,c=(0,i.v9)((function(e){return e.municipalities})).municipality,u=(0,i.v9)((function(e){return e.tendayweather})),p=u.ids,x=u.entities,h=u.status,m=(0,a.useState)([]),f=m[0],g=m[1],y=(0,a.useState)(!1),b=y[0],v=y[1],j=(0,i.I0)();(0,a.useEffect)((function(){j((0,N.QA)(null))}),[j]),(0,a.useEffect)((function(){n.length>0&&(j((0,D.Wn)(Object.values(t)[0])),j((0,k.R)(Object.values(t)[0].label)).unwrap().then((function(){v(!0)})))}),[j,n,t]),(0,a.useEffect)((function(){if(p.length>0&&h===d.G.FULLFILLED&&b&&null!==s){var e=null,n=Object.keys(o).find((function(e){return e===s.label}));n&&o[n].length>0&&(e=o[n][0]),j((0,N.X4)(o[s.label]||[])),j((0,N.QA)(e))}}),[j,p,x,h,b,o,s]),(0,a.useEffect)((function(){if(null!==c&&b){var e=Object.values(x).find((function(e){return e.municipality===c.label}));e&&g(JSON.parse(e.data).map((function(e){return{day:e.day_format,temp_avg:e.tmean,wspeed:e.wspeed,rainfall:e.rainfall,cover:e.cover}})))}}),[j,c,x,h,b]);var _=function(){var e,n=(e=l().mark((function e(n,t){var r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.label,a=t.from,!r){e.next=14;break}e.t0=a,e.next="province"===e.t0?5:"municipality"===e.t0?9:11;break;case 5:return j((0,D.Wn)(t)),j((0,k.R)(r)),j((0,N.X4)([])),e.abrupt("break",12);case 9:return j((0,N.QA)({id:t.id,label:t.label,iscalendar:t.iscalendar})),e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:e.next=25;break;case 14:e.t1=a,e.next="province"===e.t1?17:"municipality"===e.t1?21:24;break;case 17:return j((0,D.jg)()),j((0,N.X4)([])),g([]),e.abrupt("break",25);case 21:return j((0,N.QA)(null)),g([]),e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){I(i,r,a,o,s,"next",e)}function s(e){I(i,r,a,o,s,"throw",e)}o(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();return(0,r.jsx)(T,{weather:f,onSelectItemChange:_})},R=t(96399),U=t(88078),W=t(77715),F={wrapper:{marginTop:function(e){return e.spacing(10)}},container:{padding:function(e){return e.spacing(2)},paddingTop:function(e){return e.spacing(2)},marginBottom:function(e){return e.spacing(4)},display:"flex",flexDirection:{xs:"column",sm:"row"}}};var B=function(e){var n=e.typhoon,t=void 0===n?null:n,a=e.loading;return(0,r.jsx)(p.Z,{sx:F.wrapper,children:a?(0,r.jsxs)(m.ZP,{container:!0,maxWidth:"lg",sx:F.container,spacing:4,children:[(0,r.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(U.Z,{animation:"wave",variant:"rectangular",height:200,sx:{minWidth:"200px"}})}),(0,r.jsxs)(m.ZP,{item:!0,xs:12,md:6,children:[[1,2,3,4,5].map((function(e){return(0,r.jsx)(U.Z,{animation:"wave",style:{marginBottom:6}},"pattern-".concat(e))})),(0,r.jsx)(U.Z,{animation:"wave",width:"80%"})]}),(0,r.jsx)(m.ZP,{item:!0,xs:12,md:3})]}):null!==t?(0,r.jsxs)(m.ZP,{container:!0,maxWidth:"lg",sx:F.container,spacing:4,children:[(0,r.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(g.default,{unoptimized:!0,src:t.img,height:273,width:600,loader:y.imageLoader,alt:"El Ni\xf1o / La Ni\xf1a Monitoring"})}),(0,r.jsxs)(m.ZP,{item:!0,xs:12,md:6,children:[(0,r.jsx)(s.Z,{variant:"h5",children:"El Ni\xf1o / La Ni\xf1a Monitoring"}),(0,r.jsx)("p",{children:t.description}),(0,r.jsxs)(S.Z,{children:["Captured from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/el-nino-la-nina/monitoring",target:"_blank",rel:"noreferrer",children:"El Ni\xf1o / La Ni\xf1a Monitoring"})," web page",(0,r.jsx)("br",{}),"by ",t.updated_by," on \xa0",(0,W.Xn)(t.date_updated),(0,r.jsx)("br",{}),(0,r.jsxs)("i",{children:[(0,r.jsx)("strong",{children:"Note:"})," The information displayed above is only every Sunday."]})]})]})]}):(0,r.jsx)(Z.Z,{})})},G=t(87682),H=t(30560),Y=t(22332),z=t(72882),X=t(7906),V=t(53184),Q=t(295),K=t(53816),J=t(53252),$=t(89646),q=t(45238),ee=t(47426),ne={container:{marginBottom:"40px",paddingTop:"8px",fontSize:"14px"},tablecontainer:{border:function(e){return"1px solid ".concat(e.palette.bacap.border)},borderRadius:function(e){return e.spacing(1)},boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},table:{width:"100%","& tr":{borderBottom:function(e){return"1px solid ".concat(e.palette.bacap.border)}},"& tr:last-child":{borderBottom:"none"},"& td":{padding:"10px",textAlign:"center",borderLeft:function(e){return"1px solid ".concat(e.palette.bacap.border)}},"& td:first-child":{borderLeft:"none"}},tableRowHeader:{"& th, td":{fontSize:"12px",textAlign:"center",lineHeight:function(e){return e.spacing(2)},padding:"2px",fontWeight:500,borderTop:"none"}},miscsystems:{fontSize:"12px"},border:{borderRight:function(e){return"1px solid ".concat(e.palette.bacap.border)}},itemList:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}};var te=function(e){var n=e.weathersystems,t=e.tableData,a=e.monthHeaders,i=e.updatedBy;return(0,r.jsx)(m.ZP,{container:!0,spacing:2,sx:ne.container,children:0===t.length?(0,r.jsx)(q.Z,{rows:6,cols:9}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.ZP,{item:!0,sm:12,md:4,sx:{width:"100%"},children:(0,r.jsxs)($.Z,{sx:ne.itemList,children:[n.length>0&&(0,r.jsx)("ul",{children:n.map((function(e,n){return(0,r.jsx)("li",{children:e.value},n)}))}),(0,r.jsxs)(S.Z,{children:["Updated by ",i.miscUpdater," on ",i.miscDate]})]})}),(0,r.jsx)(m.ZP,{item:!0,sm:12,md:8,sx:{width:"100%"},children:(0,r.jsx)(z.Z,{sx:ne.tablecontainer,children:(0,r.jsxs)(X.Z,{size:"medium",sx:ne.table,children:[(0,r.jsx)("caption",{children:i.seasonalMethod===ee.o7.EXCEL?(0,r.jsxs)(S.Z,{children:["Updated via file upload of PAGASA's shared seasonal weather forecast excel file by an admin on ",i.seasonalDate,".",(0,r.jsx)("br",{}),"Full reference is available on PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",target:"_blank",rel:"noreferrer",children:"Seasonal (Rainfall) Forecast"})," web page."]}):(0,r.jsxs)(S.Z,{children:["Updated by an admin on ",i.seasonalDate]})}),(0,r.jsxs)(V.Z,{children:[(0,r.jsxs)(K.Z,{sx:ne.tableRowHeader,children:[(0,r.jsx)(J.Z,{rowSpan:2,width:"8%",children:"Month"}),(0,r.jsx)(J.Z,{rowSpan:2,width:"12%",sx:ne.border,children:"Tropical Cyclones"}),(0,r.jsx)(J.Z,{rowSpan:2,sx:ne.border,children:"Prov"}),(0,r.jsx)(J.Z,{colSpan:6,children:"No. of Dry Days"})]}),(0,r.jsx)(K.Z,{sx:ne.tableRowHeader,children:a.map((function(e,n){return(0,r.jsx)(J.Z,{children:e},n)}))})]}),(0,r.jsx)(Q.Z,{children:t.map((function(e,n){return(0,r.jsx)(K.Z,{children:e.map((function(e,n){return(0,r.jsx)(J.Z,{children:e},n)}))},n)}))})]})})})]})})};function re(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ae(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(c){s=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return i}}(e,n)||oe(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e){return function(e){if(Array.isArray(e))return re(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||oe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,n){if(e){if("string"===typeof e)return re(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?re(e,n):void 0}}var se={miscUpdater:"-",miscDate:"-",seasonalUpdater:"-",seasonalDate:"-",seasonalMethod:"-"};var ce=function(){var e=(0,a.useState)([]),n=e[0],t=e[1],o=(0,a.useState)([]),s=o[0],c=o[1],l=(0,a.useState)(se),u=l[0],p=l[1],x=(0,a.useRef)(!1),h=ae((0,G.ky)(H.M.WEATHER_FORECASTS,"".concat("eastern_visayas","/").concat(H.M.SUB_SEASONAL_COMMON,"/").concat(H.M.COMMON_SEASONAL_REGIONAL_TYPE.CYCLONES_COUNT)),2),m=h[0],f=h[1],g=ae((0,G.ky)(H.M.WEATHER_FORECASTS,"".concat("eastern_visayas","/").concat(H.M.SUB_SEASONAL_COMMON,"/").concat(H.M.COMMON_SEASONAL_REGIONAL_TYPE.MISC_WEATHER_SYSTEMS)),2),y=g[0],b=g[1],v=ae((0,G.ky)(Y.O.CONSTANTS,Y.O.PROVINCES_INFO),2),j=v[0],_=v[1],w=(0,i.v9)((function(e){return e.seasonalweather})),Z=w.ids,S=w.status,A=w.entities;return(0,a.useEffect)((function(){return x.current=!0,function(){x.current=!1}}),[]),(0,a.useEffect)((function(){if(S===d.G.FULLFILLED&&Z.length>0&&!f&&!b&&!_){var e=function(e){var t=[j.data[e].code];A[e].months.forEach((function(e){var n=null===e.dry?"nda":e.dry;t.push(n)})),a>=n.length&&n.push(["",""]),n[a]=ie(n[a]).concat(ie(t)),a+=1},n=[],r=[];m.data.forEach((function(e){var t="".concat(e.month.charAt(0).toUpperCase()).concat(e.month.slice(1)),a=[t,e.value];r.push(t),n.push(a)}));var a=0;for(var i in A)e(i);t(n),c(r),p({miscUpdater:"system"===y.updated_by?"system":"an admin",miscDate:(0,W.Xn)(y.date_created),seasonalUpdater:A.Leyte.updated_by,seasonalDate:A.Leyte.date_created,seasonalMethod:A.Leyte.update_method})}}),[A,m,j,S,f,Z,y,b,_]),(0,r.jsx)(te,{weathersystems:(null===y||void 0===y?void 0:y.data)||[],tableData:n,monthHeaders:s,updatedBy:u})},le={wrapper:{marginTop:function(e){return e.spacing(6)}},container:{maxWidth:function(e){return e.breakpoints.values.sm},marginTop:function(e){return e.spacing(1)},border:"1px solid #484848",borderRadius:function(e){return e.spacing(1)}},table:{minWidth:"350px"},tableTitle:{textAlign:"center"},cells:{"& td, th":{textAlign:"center"}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};var de=function(e){var n=e.seasonal,t=e.typhoon,a=e.fsLoading,i=e.loading;return(0,r.jsxs)(p.Z,{sx:le.wrapper,id:"contents-seasonal-forecast",children:[(0,r.jsx)(s.Z,{variant:"h4",children:"Seasonal Forecast"}),(0,r.jsx)(B,{typhoon:t,loading:i}),(0,r.jsx)(s.Z,{variant:"subtitle2",children:"Weather Systems that May Affect the Region"}),(0,r.jsx)(ce,{}),!a&&n.length>0&&(0,r.jsxs)(s.Z,{id:"bacap-seasonal-forecast",variant:"subtitle2",children:["Analysis of RAINFALL from\xa0",function(){var e="";if(n.length>0){var t=n[0].mos[0],r=n[0].mos[n[0].mos.length-1];e="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)," to ").concat(r.charAt(0).toUpperCase()).concat(r.slice(1))}return e}()]}),(0,r.jsx)(R.Z,{weatherData:n,withBorder:!0,fsLoading:a})]})},ue=t(67720);function pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var xe=(0,t(11496).ZP)((function(e){return(0,r.jsx)(p.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){pe(e,n,t[n])}))}return e}({},e))}))((function(e){e.theme;return{backgroundColor:"#ff7e79",textTransform:"uppercase",fontWeight:"bold",textAlign:"center",padding:"8px 0 8px 0"}})),he=xe;var me=function(){return(0,r.jsx)(p.Z,{sx:{width:"100%",marginTop:function(e){return e.spacing(4)}},children:(0,r.jsxs)(m.ZP,{container:!0,spacing:5,children:[(0,r.jsx)(m.ZP,{item:!0,sm:12,md:6,children:[1,2,3,4,5,6,7,8].map((function(e){return(0,r.jsx)(U.Z,{variant:"text"},e)}))}),(0,r.jsx)(m.ZP,{item:!0,sm:12,md:6,children:(0,r.jsx)(U.Z,{animation:"wave",variant:"rectangular",height:450,sx:{minWidth:"540px"}})})]})})},fe=t(74721),ge={container:{maxWidth:function(e){return e.breakpoints.values.sm},marginTop:function(e){return e.spacing(7)},border:"1px solid #484848",borderRadius:function(e){return e.spacing(1)},padding:function(e){return e.spacing(2)}},wrapper:{marginTop:function(e){return e.spacing(10)}},dataContainer:{marginTop:function(e){return e.spacing(4)}},dataContent:{"& div":{padding:function(e){return e.spacing(2)}},".data-content-description":{backgroundColor:"rgba(0, 0, 0, 0.03)"}},dataContentDescriptionText:{padding:function(e){return e.spacing(2)},"& .windsignalcontent":{marginBottom:function(e){return e.spacing(3)}}},summary:{margin:0,padding:0,height:"100%"}};var ye=function(e){var n=e.cyclone,t=e.cycloneLoading,a=e.windspeedContent;return(0,r.jsxs)(p.Z,{sx:ge.wrapper,id:"contents-special-weather-forecast",children:[(0,r.jsx)(s.Z,{variant:"h4",children:"Special Weather Forecast"}),t?(0,r.jsx)(me,{}):n?(0,r.jsxs)("div",{children:[(0,r.jsxs)(m.ZP,{container:!0,sx:ge.dataContainer,spacing:2,children:[(0,r.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)($.Z,{sx:ge.summary,children:(0,r.jsxs)(p.Z,{sx:{padding:"16px"},children:[(0,r.jsx)(s.Z,{variant:"h6",children:"Summary"}),(0,r.jsx)(S.Z,{sx:{color:n.has_cyclone?"red":"rgba(0, 0, 0, 0.6)"},children:n.summary}),(0,r.jsxs)(S.Z,{sx:{marginTop:"16px"},children:["This section is captured from PAGASA's ",(0,r.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/tropical-cyclone/severe-weather-bulletin",target:"_blank",rel:"noreferrer",children:"Tropical Cyclone Bulletin"}),(0,r.jsx)("br",{})," web page by","system"===n.updated_by?" system ":" an admin ","on ",(0,W.Xn)(n.date_updated),". Please view PAGASA's Tropical Cyclone Bulletin web page to view the latest tropical cyclone information."]})]})})}),!n.has_cyclone&&(0,r.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)($.Z,{sx:ge.summary,style:{display:"grid",placeContent:"center"},children:(0,r.jsxs)(p.Z,{sx:{padding:"16px",textAlign:"center"},children:[(0,r.jsx)(fe.Z,{color:"primary",fontSize:"large"}),(0,r.jsx)(s.Z,{variant:"h6",children:"No Active Tropical Cyclone"})]})})})]}),n.has_cyclone&&(0,r.jsxs)(m.ZP,{container:!0,sx:ge.dataContainer,spacing:2,children:[(0,r.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)($.Z,{sx:{margin:0,padding:0},children:[(0,r.jsxs)(p.Z,{sx:{textAlign:"center",padding:"16px"},children:[(0,r.jsx)(s.Z,{variant:"h6",children:0===n.data.meta.bulletin_number?"No Active Tropical Cyclone":n.data.meta.bulletin_number}),(0,r.jsx)(s.Z,{variant:"subtitle1",children:n.data.meta.issued_at.toLowerCase().includes("issued at")?n.data.meta.issued_at:"Issued at ".concat(n.data.meta.issued_at)})]}),(0,r.jsx)(he,{children:n.data.meta.typhoon_name}),(0,r.jsx)(p.Z,{sx:ge.dataContent,children:n.data.details.map((function(e,n){return(0,r.jsxs)("div",{style:{padding:0},children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(s.Z,{variant:"subtitle2",children:(0,r.jsx)("strong",{children:e.title})})}),(0,r.jsx)(p.Z,{className:"data-content-description",children:"object"===typeof e.value?(0,r.jsx)("ul",{children:e.value.map((function(e,n){return(0,r.jsx)("li",{children:(0,r.jsx)(s.Z,{variant:"body2",children:e})},n)}))}):(0,r.jsx)(s.Z,{variant:"body2",children:e.value})})]},n)}))})]})}),(0,r.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)($.Z,{sx:{margin:0,padding:0},children:[(0,r.jsx)(p.Z,{sx:{textAlign:"center"},children:""===n.img?(0,r.jsx)(g.default,{unoptimized:!0,src:(0,y.assetPrefixer)("images/placeholders/pixel-gray.png"),height:450,width:540,loader:y.imageLoader,alt:"placeholder"}):(0,r.jsx)(g.default,{unoptimized:!0,src:n.img,height:450,width:540,loader:y.imageLoader,alt:"placeholder"})}),(0,r.jsx)(he,{children:"Tropical Cyclone Wind Signal"}),0===Object.keys(a.data).length?(0,r.jsx)(p.Z,{sx:ge.dataContentDescriptionText,children:(0,r.jsxs)(S.Z,{children:["system"!==a.updated_by&&(0,r.jsxs)("span",{children:["The ",ee.Gt," region is clear of tropical cyclone wind signal.",(0,r.jsx)("br",{})]}),"(Wind signal information ",a.caption," ",(0,W.Xn)(a.date_created),")"]})}):(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(p.Z,{sx:ge.dataContentDescriptionText,children:(0,r.jsxs)(S.Z,{children:["Wind signal information ",a.caption," ",(0,W.Xn)(a.date_created)]})}),Object.keys(a.data).map((function(e,n){return(0,r.jsx)(p.Z,{sx:ge.dataContentDescriptionText,children:(0,r.jsxs)("div",{children:[n>0&&(0,r.jsx)(ue.Z,{className:"windsignalcontent"}),(0,r.jsx)(s.Z,{variant:"body1",children:(0,r.jsxs)("strong",{children:["Signal #",e,": \xa0 "]})}),a.data[e].map((function(e,n){return(0,r.jsxs)(s.Z,{variant:"body2",sx:{marginTop:"8px"},children:[(0,r.jsx)("strong",{children:e.province})," ",e.municipalities]},n)}))]},n)},"cyclone-signal-".concat(n))}))]})]})})]})]}):(0,r.jsx)(Z.Z,{})]})},be=t(43370),ve=t(1029);function je(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(c){s=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return je(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return je(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var we={data:{},date_created:"",caption:"",udpdated_by:""};var Ze=!0,Se=function(e){var n=e.media,t=_e((0,G.ky)(ve.K.GLOBAL_COLLECTIONS,ve.K.TYPHOON_ADVISORY),2),c=t[0],l=t[1],d=_e((0,G.ky)(ve.K.GLOBAL_COLLECTIONS,ve.K.CYCLONE_ADVISORY),2),u=d[0],p=d[1],x=_e((0,G.ky)(H.M.WEATHER_FORECASTS,"".concat("eastern_visayas","/").concat(H.M.SUB_SPECIAL_COMMON,"/").concat(H.M.COMMON_SPECIAL_TYPE.WIND_SPEED)),2),h=x[0],m=x[1],f=(0,G.m$)(H.M.WEATHER_FORECASTS,"eastern_visayas",H.M.SUB_SEASONAL,"name"),g=f.documents,y=f.loading,b=(0,a.useState)(we),v=b[0],j=b[1],_=(0,i.v9)((function(e){return e.provinces.ids})),w=(0,a.useRef)(null),Z=(0,i.I0)();return(0,a.useEffect)((function(){null===w.current&&0===_.length&&(w.current=!0,Z((0,o.Q)()))}),[Z,_.length]),(0,a.useEffect)((function(){if(!m&&null!==h){var e="system"===h.updated_by?"was reset by system on ":"was updated by an admin on ";j({caption:e,updated_by:h.updated_by,date_created:h.date_created,data:h.data.reduce((function(e,n){void 0===e[n.signal]&&(e[n.signal]=[]);var t={province:n.province,municipalities:"(".concat(n.municipalities.toString().split(",").join(", "),")")};return e[n.signal].push(t),e}),{})})}}),[h,m]),(0,r.jsxs)("div",{id:"ten-day-weather-forecast",children:[(0,r.jsx)(be.Z,{title:"Agro-Climatic Advisory Portal - ".concat(ee.Gt," (ACAP-").concat(ee.Gt.toUpperCase(),") ACAP Services"),ogDescription:n.description,ogImageURL:n.url,ogURL:n.path,canonicalURL:n.path}),(0,r.jsx)(s.Z,{variant:"h4",children:"ACAP Services"}),(0,r.jsx)(s.Z,{variant:"label",children:"Weather Forecasts and Special Weather Advisory information"}),(0,r.jsx)(M,{}),(0,r.jsx)("div",{id:"seasonal-forecast",style:{height:"64px"}}),(0,r.jsx)(de,{seasonal:g,typhoon:c,fsLoading:y,loading:l}),(0,r.jsx)("div",{id:"special-weather-forecast",style:{height:"40px"}}),(0,r.jsx)(ye,{cyclone:u,cycloneLoading:p,windspeedContent:v})]})}}},function(e){e.O(0,[5778,3593,9964,8858,1903,6295,9958,6181,1538,9774,2888,179],(function(){return n=19859,e(e.s=n);var n}));var n=e.O();_N_E=n}]);