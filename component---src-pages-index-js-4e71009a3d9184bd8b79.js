(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return m});var a=n(0),r=n.n(a),i=(n(154),n(185)),o=n(163),l=n(160),c=n(168),s=n(162),u=n(167);t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return{number:e.node.frontmatter.number,title:e.node.frontmatter.title,slug:e.node.fields.slug,date:e.node.frontmatter.date,excerpt:e.node.excerpt}});return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),r.a.createElement(c.a,{posts:t}),r.a.createElement(u.a,{textAlign:"center",fontSize:[2,3,4],fontWeight:"bold",to:"/episodes/"},"All Episodes ",r.a.createElement(i.a,null)),r.a.createElement(s.a,{width:.5}))};var m="2063943093"},154:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},157:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol"}}}}},159:function(e){e.exports={data:{site:{siteMetadata:{authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",avatar:"cbp-american.svg",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",avatar:"cbp-canadian.svg",social:{twitter:"roldford"}}]}}}}},160:function(e,t,n){"use strict";var a=n(161),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(166),s=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title,c=a.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.authors[0].social.twitter},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"The realest, fake border agency in North America",authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",social:{twitter:"roldford"}}]}}}}},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(152);t.a=function(e){return r.a.createElement(i.Flex,{flexWrap:"flex",justifyContent:"center"},r.a.createElement(i.Box,{width:e.width,my:2},r.a.createElement("hr",null)))}},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(153),o=(n(34),n(152)),l=function(e){return r.a.createElement(c,Object.assign({},e,{mx:"auto",p:2,_css:{maxWidth:"1024px",minWidth:"320px"}}))},c=Object(i.default)(o.Box).withConfig({displayName:"container___StyledBox",componentId:"bzc9lm-0"})(["",""],function(e){return e._css}),s=n(155),u=n.n(s);function m(){var e=u()(["\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700');\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: Helvetica, Arial, sans-serif;\n  }\n  a {\n    text-decoration: none;\n  }\n  ul {\n    margin: 0 auto;\n    padding: 0 auto;\n  }\n  ul p {\n    margin: 0 auto;\n  }\n"]);return m=function(){return e},e}var d=Object(i.createGlobalStyle)(m()),f={breakpoints:["26em","40em","54em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff"},space:[0,4,8,16,32,64,128,256],fonts:{serif:"Libre Baskerville, Times New Roman, serif",sans:"system-ui, sans-serif",mono:"Menlo, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},p=n(7),g=n.n(p),x=n(158),h=n(154);function E(){var e=u()(["",""]);return E=function(){return e},e}var b=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){var e=i.default.img.withConfig({displayName:"title__Logo",componentId:"sc-1upn4l3-0"})(["max-width:100%;height:auto;"]);return r.a.createElement(h.b,{query:w,render:function(t){var n=t.site.siteMetadata.title;return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},r.a.createElement(o.Box,{width:[.1,1/8,1/6],mr:2,flex:"0 1 auto"},r.a.createElement(h.a,{to:"/"},r.a.createElement(e,{src:"/canadian-border-patrol-logo.png",alt:n+" Seal"}))),r.a.createElement(o.Heading,{textAlign:"left",fontSize:[4,5,6,7],fontFamily:"serif",flex:"0 1 auto"},r.a.createElement(v,{to:"/",_css:{textDecoration:"none",color:"inherit"}},n)))},data:x})},t}(r.a.Component),w="3009533391",y=b,v=Object(i.default)(h.a)(E(),function(e){return e._css}),k=function(e){return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",p:1,pr:2},r.a.createElement(o.Text,{fontSize:[2,3,4]},r.a.createElement(o.Link,{px:[1,2],href:"http://www.apple.com"},"iTunes"),"|",r.a.createElement(o.Link,{px:[1,2],href:"https://canadianborderpatrol.com/rss.xml"},"RSS"),"|",r.a.createElement(o.Link,{px:[1,2],href:"https://twitter.com/canborderpatrol"},"Twitter")))},T=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return r.a.createElement(o.Flex,{width:1,flexWrap:"noflex",flexDirection:"column",alignItems:"center"},r.a.createElement(y,null),r.a.createElement(k,null))},t}(r.a.Component),_=(n(164),n(159)),j=n(4),S=n.n(j),W=n(165);function C(){var e=u()(["",""]);return C=function(){return e},e}var D=function(e){return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"column",alignItems:"center",fontSize:[1,2,3]},r.a.createElement(o.Box,null,r.a.createElement(I,{src:e.bioImage,alt:e.bioName})),r.a.createElement(z,{mt:1,mb:2,fontWeight:"bold",_css:{textDecoration:"underline"}},e.bioName),r.a.createElement(o.Text,{mb:1},e.bioDescription),r.a.createElement(o.Link,{href:"https://twitter.com/"+e.bioTwitter},r.a.createElement(W.a,null)))};D.propTypes={bioImage:S.a.string,bioName:S.a.string,bioDescription:S.a.string,bioTwitter:S.a.string};var F=D,I=i.default.img.withConfig({displayName:"bioitem__Avatar",componentId:"v9g6qn-0"})(["width:auto;max-height:100px;align-self:'start';border-radius:100%;"]),z=Object(i.default)(o.Text)(C(),function(e){return e._css});var N="2975466106",R=function(){return r.a.createElement(h.b,{query:N,render:function(e){var t=e.site.siteMetadata.authors,n=1/t.length;return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"row"},t.map(function(e,t){return r.a.createElement(o.Box,{flex:"1 1 auto",mx:2,width:n,key:"author-"+t},r.a.createElement(F,{key:e.name+"-"+t,bioImage:"/"+e.avatar,bioName:e.name,bioDescription:e.description,bioTwitter:e.social.twitter,alignImage:t%2!=0?"left":"right"}))}))},data:_})},q=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){var e=i.default.footer.withConfig({displayName:"footer__FootText",componentId:"sc-16c0o4o-0"})(["text-align:center;"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(o.Box,{fontSize:0},r.a.createElement(e,null,"© ",(new Date).getFullYear()," Canadian Border Patrol")))},t}(r.a.Component);t.a=function(e){var t=e.children;return r.a.createElement(i.ThemeProvider,{theme:f},r.a.createElement(l,null,r.a.createElement(d,null),r.a.createElement(T,null),r.a.createElement("main",null,t),r.a.createElement(q,null)))}},167:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(152),l=n(154);t.a=function(e){return i.a.createElement(o.Text,{textAlign:e.textAlign,fontSize:e.fontSize,fontWeight:e.fontWeight},i.a.createElement(c,{to:e.to,_css:{textDecoration:"none",color:"inherit"}},e.children))};var c=Object(a.default)(l.a).withConfig({displayName:"simplegatsbylink___StyledLink",componentId:"sc-194tlzq-0"})(["",""],function(e){return e._css})},168:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(152),o=n(155),l=n.n(o),c=n(153),s=n(167);function u(){var e=l()(["",""]);return u=function(){return e},e}var m=function(e){return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"column",mx:2},r.a.createElement(i.Flex,{flexWrap:"wrap",flexDirection:"row",alignItems:"baseline",mb:2},r.a.createElement(s.a,{fontSize:[3,4,5],fontWeight:"bold",to:e.slug},e.title),r.a.createElement(d,{fontSize:[0,1,2],ml:2,_css:{fontStyle:"italic"}},"Episode ",e.number," - ",e.date)),r.a.createElement(i.Text,{fontSize:[1,2,3],pl:[2,3,4]},e.shortExcerpt))},d=Object(c.default)(i.Text)(u(),function(e){return e._css}),f=n(162);t.a=function(e){return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"column",justifyContent:"center"},r.a.createElement(f.a,{width:.5}),e.posts.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.slug},r.a.createElement(m,{number:e.number,title:e.title,date:e.date,slug:e.slug,shortExcerpt:e.excerpt}),r.a.createElement(f.a,{width:.5}))}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4e71009a3d9184bd8b79.js.map