(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return x});var a=n(155),r=n.n(a),i=n(153),o=(n(74),n(7)),l=n.n(o),c=n(0),s=n.n(c),u=n(154),m=n(152),d=n(163),p=n(160),f=n(162);function g(){var e=r()(["",""]);return g=function(){return e},e}var h=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,n=this.props.pageContext,a=n.previous,r=n.next,i=e.frontmatter.url.split("id="),o=(i[0],i[1]);return s.a.createElement(d.a,null,s.a.createElement(p.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement(m.Flex,{flexWrap:"noflex",flexDirection:"column"},s.a.createElement(m.Heading,{fontSize:[2,3,4]},t," Investigates..."),s.a.createElement(m.Flex,{flexWrap:"flex",flexDirection:"row",alignItems:"baseline"},s.a.createElement(m.Heading,{fontSize:[3,4,5]},e.frontmatter.title),s.a.createElement(E,{fontSize:[0,1,2],ml:2,_css:{fontStyle:"italic"}},"Ep. ",e.frontmatter.number," - ",e.frontmatter.date)),s.a.createElement(m.Box,null),s.a.createElement(m.Box,{mt:3,alignSelf:"center"},s.a.createElement("audio",{controls:!0},s.a.createElement("source",{src:"https://docs.google.com/uc?export=download&id="+o,type:"audio/mp3"}))),s.a.createElement(m.Box,{mx:2},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),s.a.createElement(f.a,{width:.25}),s.a.createElement(m.Flex,{flexWrap:"flex",justifyContent:"space-between",flexDirection:"row"},s.a.createElement(m.Box,null,a&&s.a.createElement(u.a,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),s.a.createElement(m.Box,null,r&&s.a.createElement(u.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))))},t}(s.a.Component);t.default=h;var x="3818245803",E=Object(i.default)(m.Text)(g(),function(e){return e._css})},154:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},157:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol"}}}}},159:function(e){e.exports={data:{site:{siteMetadata:{authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",avatar:"cbp-american.svg",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",avatar:"cbp-canadian.svg",social:{twitter:"roldford"}}]}}}}},160:function(e,t,n){"use strict";var a=n(161),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(166),s=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title,c=a.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.authors[0].social.twitter},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"Totally fake border agency, real strange Canadian culture",authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",social:{twitter:"roldford"}}]}}}}},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(152);t.a=function(e){return r.a.createElement(i.Flex,{flexWrap:"flex",justifyContent:"center"},r.a.createElement(i.Box,{width:e.width,my:2},r.a.createElement("hr",null)))}},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(153),o=(n(34),n(152)),l=function(e){return r.a.createElement(c,Object.assign({},e,{mx:"auto",p:2,_css:{maxWidth:"1024px",minWidth:"320px"}}))},c=Object(i.default)(o.Box).withConfig({displayName:"container___StyledBox",componentId:"bzc9lm-0"})(["",""],function(e){return e._css}),s=n(155),u=n.n(s);function m(){var e=u()(["\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700');\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: Helvetica, Arial, sans-serif;\n  }\n  a {\n    text-decoration: none;\n  }\n  ul {\n    margin: 0 auto;\n    padding: 0 auto;\n  }\n  ul p {\n    margin: 0 auto;\n  }\n"]);return m=function(){return e},e}var d=Object(i.createGlobalStyle)(m()),p={breakpoints:["26em","40em","54em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff"},space:[0,4,8,16,32,64,128,256],fonts:{serif:"Libre Baskerville, Times New Roman, serif",sans:"system-ui, sans-serif",mono:"Menlo, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},f=n(7),g=n.n(f),h=n(158),x=n(154),E=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){var e=i.default.img.withConfig({displayName:"title__Logo",componentId:"sc-1upn4l3-0"})(["max-width:100%;height:auto;"]);return r.a.createElement(x.b,{query:w,render:function(t){var n=t.site.siteMetadata.title;return r.a.createElement(o.Flex,{width:1,justifyContent:"center"},r.a.createElement(o.Box,{width:[.5,null,300],flex:"0 1 auto"},r.a.createElement(x.a,{to:"/"},r.a.createElement(e,{src:"/cbp-logo-400.png",alt:n+" Seal"}))))},data:h})},t}(r.a.Component),w="3009533391",y=E,b=function(e){return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",p:1,pr:2},r.a.createElement(o.Text,{fontSize:[2,3,4]},r.a.createElement(o.Link,{px:[1,2],href:"https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515"},"iTunes"),"|",r.a.createElement(o.Link,{px:[1,2],href:"https://www.stitcher.com/podcast/canadian-border-patrol?refid=stpr"},"Stitcher"),"|",r.a.createElement(o.Link,{px:[1,2],href:"https://canadianborderpatrol.com/rss.xml"},"RSS"),"|",r.a.createElement(o.Link,{px:[1,2],href:"https://twitter.com/canborderpatrol"},"Twitter")))},v=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return r.a.createElement(o.Flex,{width:1,flexWrap:"noflex",flexDirection:"column",alignItems:"center"},r.a.createElement(y,null),r.a.createElement(b,null))},t}(r.a.Component),T=(n(164),n(159)),k=n(4),C=n.n(k),j=n(165);function S(){var e=u()(["",""]);return S=function(){return e},e}var B=function(e){return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"column",alignItems:"center",fontSize:[1,2,3]},r.a.createElement(o.Box,null,r.a.createElement(I,{src:e.bioImage,alt:e.bioName})),r.a.createElement(F,{mt:1,mb:2,fontWeight:"bold",_css:{textDecoration:"underline"}},e.bioName),r.a.createElement(o.Text,{mb:1},e.bioDescription),r.a.createElement(o.Link,{href:"https://twitter.com/"+e.bioTwitter},r.a.createElement(j.a,null)))};B.propTypes={bioImage:C.a.string,bioName:C.a.string,bioDescription:C.a.string,bioTwitter:C.a.string};var _=B,I=i.default.img.withConfig({displayName:"bioitem__Avatar",componentId:"v9g6qn-0"})(["width:auto;max-height:100px;align-self:'start';border-radius:100%;"]),F=Object(i.default)(o.Text)(S(),function(e){return e._css});var R="2975466106",W=function(){return r.a.createElement(x.b,{query:R,render:function(e){var t=e.site.siteMetadata.authors,n=1/t.length;return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"row"},t.map(function(e,t){return r.a.createElement(o.Box,{flex:"1 1 auto",mx:2,width:n,key:"author-"+t},r.a.createElement(_,{key:e.name+"-"+t,bioImage:"/"+e.avatar,bioName:e.name,bioDescription:e.description,bioTwitter:e.social.twitter,alignImage:t%2!=0?"left":"right"}))}))},data:T})},D=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){var e=i.default.footer.withConfig({displayName:"footer__FootText",componentId:"sc-16c0o4o-0"})(["text-align:center;"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(o.Box,{fontSize:0},r.a.createElement(e,null,"© ",(new Date).getFullYear()," Canadian Border Patrol")))},t}(r.a.Component);t.a=function(e){var t=e.children;return r.a.createElement(i.ThemeProvider,{theme:p},r.a.createElement(l,null,r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement("main",null,t),r.a.createElement(D,null)))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bf68d8fd8a5b7ee35a71.js.map