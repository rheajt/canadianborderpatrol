(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(163),c=a(160),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(l.a,{location:this.props.location,title:e},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=s;var u="1097489062"},154:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol"}}}}},159:function(e){e.exports={data:{site:{siteMetadata:{authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",avatar:"cbp-american.svg",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",avatar:"cbp-canadian.svg",social:{twitter:"roldford"}}]}}}}},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(166),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.authors[0].social.twitter},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"Totally fake border agency, real strange Canadian culture",authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",social:{twitter:"roldford"}}]}}}}},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(153),o=(a(34),a(152)),l=function(e){return r.a.createElement(c,Object.assign({},e,{mx:"auto",p:2,_css:{maxWidth:"1024px",minWidth:"320px"}}))},c=Object(i.default)(o.Box).withConfig({displayName:"container___StyledBox",componentId:"bzc9lm-0"})(["",""],function(e){return e._css}),s=a(155),u=a.n(s);function d(){var e=u()(["\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700');\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: Helvetica, Arial, sans-serif;\n  }\n  a {\n    text-decoration: none;\n  }\n  ul {\n    margin: 0 auto;\n    padding: 0 auto;\n  }\n  ul p {\n    margin: 0 auto;\n  }\n"]);return d=function(){return e},e}var m=Object(i.createGlobalStyle)(d()),p={breakpoints:["26em","40em","54em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff"},space:[0,4,8,16,32,64,128,256],fonts:{serif:"Libre Baskerville, Times New Roman, serif",sans:"system-ui, sans-serif",mono:"Menlo, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},f=a(7),h=a.n(f),g=a(158),b=a(154),x=function(e){function t(){return e.apply(this,arguments)||this}return h()(t,e),t.prototype.render=function(){var e=i.default.img.withConfig({displayName:"title__Logo",componentId:"sc-1upn4l3-0"})(["max-width:100%;height:auto;"]);return r.a.createElement(b.b,{query:y,render:function(t){var a=t.site.siteMetadata.title;return r.a.createElement(o.Flex,{width:1,justifyContent:"center"},r.a.createElement(o.Box,{width:[.5,null,300],flex:"0 1 auto"},r.a.createElement(b.a,{to:"/"},r.a.createElement(e,{src:"/cbp-logo-400.png",alt:a+" Seal"}))))},data:g})},t}(r.a.Component),y="3009533391",w=x,E=function(e){return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",p:1,pr:2},r.a.createElement(o.Text,{fontSize:[2,3,4]},r.a.createElement(o.Link,{px:[1,2],href:"https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515"},"iTunes"),"|",r.a.createElement(o.Link,{px:[1,2],href:"https://www.stitcher.com/podcast/canadian-border-patrol?refid=stpr"},"Stitcher"),"|",r.a.createElement(o.Link,{px:[1,2],href:"https://canadianborderpatrol.com/rss.xml"},"RSS"),"|",r.a.createElement(o.Link,{px:[1,2],href:"https://twitter.com/canborderpatrol"},"Twitter")))},v=function(e){function t(){return e.apply(this,arguments)||this}return h()(t,e),t.prototype.render=function(){return r.a.createElement(o.Flex,{width:1,flexWrap:"noflex",flexDirection:"column",alignItems:"center"},r.a.createElement(w,null),r.a.createElement(E,null))},t}(r.a.Component),T=(a(164),a(159)),k=a(4),j=a.n(k),C=a(165);function N(){var e=u()(["",""]);return N=function(){return e},e}var _=function(e){return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"column",alignItems:"center",fontSize:[1,2,3]},r.a.createElement(o.Box,null,r.a.createElement(S,{src:e.bioImage,alt:e.bioName})),r.a.createElement(q,{mt:1,mb:2,fontWeight:"bold",_css:{textDecoration:"underline"}},e.bioName),r.a.createElement(o.Text,{mb:1},e.bioDescription),r.a.createElement(o.Link,{href:"https://twitter.com/"+e.bioTwitter},r.a.createElement(C.a,null)))};_.propTypes={bioImage:j.a.string,bioName:j.a.string,bioDescription:j.a.string,bioTwitter:j.a.string};var R=_,S=i.default.img.withConfig({displayName:"bioitem__Avatar",componentId:"v9g6qn-0"})(["width:auto;max-height:100px;align-self:'start';border-radius:100%;"]),q=Object(i.default)(o.Text)(N(),function(e){return e._css});var B="2975466106",F=function(){return r.a.createElement(b.b,{query:B,render:function(e){var t=e.site.siteMetadata.authors,a=1/t.length;return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"row"},t.map(function(e,t){return r.a.createElement(o.Box,{flex:"1 1 auto",mx:2,width:a,key:"author-"+t},r.a.createElement(R,{key:e.name+"-"+t,bioImage:"/"+e.avatar,bioName:e.name,bioDescription:e.description,bioTwitter:e.social.twitter,alignImage:t%2!=0?"left":"right"}))}))},data:T})},I=function(e){function t(){return e.apply(this,arguments)||this}return h()(t,e),t.prototype.render=function(){var e=i.default.footer.withConfig({displayName:"footer__FootText",componentId:"sc-16c0o4o-0"})(["text-align:center;"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(o.Box,{fontSize:0},r.a.createElement(e,null,"© ",(new Date).getFullYear()," Canadian Border Patrol")))},t}(r.a.Component);t.a=function(e){var t=e.children;return r.a.createElement(i.ThemeProvider,{theme:p},r.a.createElement(l,null,r.a.createElement(m,null),r.a.createElement(v,null),r.a.createElement("main",null,t),r.a.createElement(I,null)))}}}]);
//# sourceMappingURL=component---src-pages-404-js-d929b7028b40700a7102.js.map