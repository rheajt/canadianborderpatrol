(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(154),r=a.n(n),o=a(152),i=a(7),l=a.n(i),c=a(0),s=a.n(c),d=a(155),u=a(153),m=a(166),f=a(163),p=a(165);function g(){var e=r()(["",""]);return g=function(){return e},e}var x=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next,o=e.frontmatter.url;return s.a.createElement(m.a,null,s.a.createElement(f.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement(u.Flex,{flexWrap:"noflex",flexDirection:"column"},s.a.createElement(u.Heading,{fontSize:[2,3,4]},t," Investigates..."),s.a.createElement(u.Flex,{flexWrap:"flex",flexDirection:"row",alignItems:"baseline"},s.a.createElement(u.Heading,{fontSize:[3,4,5]},e.frontmatter.title),s.a.createElement(b,{fontSize:[0,1,2],ml:2,_css:{fontStyle:"italic"}},"Ep. ",e.frontmatter.number," - ",e.frontmatter.date)),s.a.createElement(u.Box,{mt:3,alignSelf:"center"},s.a.createElement("audio",{controls:!0},s.a.createElement("source",{src:o,type:"audio/mp3"}))),s.a.createElement(u.Box,{mx:2},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),s.a.createElement(p.a,{width:.25}),s.a.createElement(u.Flex,{flexWrap:"flex",justifyContent:"space-between",flexDirection:"row"},s.a.createElement(u.Box,null,n&&s.a.createElement(d.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),s.a.createElement(u.Box,null,r&&s.a.createElement(d.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))))},t}(s.a.Component);t.default=x;var h="3818245803",b=Object(o.default)(u.Text)(g(),function(e){return e._css})},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(156),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},156:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},160:function(e,t,a){e.exports=a.p+"static/mountains-4f18cc1481d8cf98668cdf2d38ea2280.png"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"Totally fake border agency, absolutely real Canadian culture"}}}}},162:function(e){e.exports={data:{site:{siteMetadata:{authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",avatar:"cbp-american.svg",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",avatar:"cbp-canadian.svg",social:{twitter:"roldford"}}]}}}}},163:function(e,t,a){"use strict";var n=a(164),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(172),s=a.n(c);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,c=n.data.site,d=t||c.siteMetadata.description;return console.log(c),o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.authors[0].social.twitter},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"Totally fake border agency, absolutely real Canadian culture",authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",social:{twitter:"roldford"}}]}}}}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(152),i=a(153);t.a=function(e){return r.a.createElement(i.Flex,{flexWrap:"flex",justifyContent:"center"},r.a.createElement(i.Box,{width:e.width,my:2},r.a.createElement(l,null)))};var l=o.default.hr.withConfig({displayName:"divider__StyledHr",componentId:"sc-16150fs-0"})(["background-color:red;"])},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(152),i=(a(34),a(153)),l=function(e){return r.a.createElement(c,Object.assign({},e,{mx:"auto",p:2,_css:{maxWidth:"1024px",minWidth:"320px"}}))},c=Object(o.default)(i.Box).withConfig({displayName:"container___StyledBox",componentId:"sc-6g0gtz-0"})(["",""],function(e){return e._css}),s=a(154),d=a.n(s),u=a(160),m=a.n(u);function f(){var e=d()(["\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700');\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-family: Helvetica, Arial, sans-serif;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    box-sizing: border-box;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  a {\n    text-decoration: none;\n  }\n  ul {\n    margin: 0 auto;\n    padding: 0 auto;\n  }\n  ul p {\n    margin: 0 auto;\n  }\n"]);return f=function(){return e},e}var p=Object(o.createGlobalStyle)(f(),m.a),g={breakpoints:["26em","40em","54em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff",flagred:"#eb2d37"},space:[0,4,8,16,32,64,128,256],fonts:{serif:"Libre Baskerville, Times New Roman, serif",sans:"system-ui, sans-serif",mono:"Menlo, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},x=a(161),h=a(155);function b(){var e=d()(["",""]);return b=function(){return e},e}var w=function(){var e=x.data.site,t=e.siteMetadata.title,a=e.siteMetadata.description;return r.a.createElement(i.Flex,{width:1,justifyContent:"center",alignItems:"center",flexDirection:"column"},r.a.createElement(i.Box,{width:[.5,null,300],flex:"0 1 auto"},r.a.createElement(h.a,{to:"/"},r.a.createElement(E,{src:"/cbp-logo-400.png",alt:t+" Seal"}))),r.a.createElement(y,{fontSize:[3],color:"flagred",_css:{textAlign:"center"}},a))},E=o.default.img.withConfig({displayName:"title__Logo",componentId:"sc-1upn4l3-0"})(["max-width:100%;height:auto;"]),y=Object(o.default)(i.Heading)(b(),function(e){return e._css}),v=a(157),k=a(167),F=a(168),_=a(169),j=a(170),C=a(158),T=function(e){var t=[{text:"iTunes",href:"https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515",icon:k.a},{text:"Google Play",href:"https://play.google.com/music/listen?u=0#/ps/Ijfvdnyyavpl4jo4witxkakz5f4",icon:F.a},{text:"Stitcher",href:"https://www.stitcher.com/podcast/canadian-border-patrol?refid=stpr",icon:_.a},{text:"RSS",href:"https://canadianborderpatrol.com/rss.xml",icon:j.a},{text:"Twitter",href:"https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515",icon:C.a}];return r.a.createElement(i.Flex,{flexWrap:"wrap",flexDirection:"row",alignItems:"center",justifyContent:"center",p:2,pr:2},t.map(function(e,t,a){return r.a.createElement(i.Button,{bg:"flagred",m:1},r.a.createElement(i.Link,{color:"white",href:e.href},r.a.createElement(v.a,{icon:e.icon})," ",e.text))}))},I=function(){return r.a.createElement(B,null,r.a.createElement(i.Flex,{width:1,flexWrap:"noflex",flexDirection:"column",alignItems:"center"},r.a.createElement(w,null),r.a.createElement(T,null)))},B=o.default.div.withConfig({displayName:"header__Background",componentId:"sc-1suwjbq-0"})(["background-color:#FFFFFFE6;padding:.5rem .5rem;margin-bottom:.5rem;border-radius:15px;"]),S=(a(171),a(162)),N=a(4),z=a.n(N);function D(){var e=d()(["",""]);return D=function(){return e},e}var R=function(e){return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"column",alignItems:"center",fontSize:[1,2,3]},r.a.createElement(i.Box,null,r.a.createElement(M,{src:e.bioImage,alt:e.bioName})),r.a.createElement(O,{mt:1,mb:2,fontWeight:"bold",_css:{textDecoration:"underline"}},e.bioName),r.a.createElement(i.Text,{mb:1},e.bioDescription),r.a.createElement(i.Link,{href:"https://twitter.com/"+e.bioTwitter},r.a.createElement(v.a,{icon:C.a})))};R.propTypes={bioImage:z.a.string,bioName:z.a.string,bioDescription:z.a.string,bioTwitter:z.a.string};var W=R,M=o.default.img.withConfig({displayName:"bioitem__Avatar",componentId:"v9g6qn-0"})(["width:auto;max-height:100px;align-self:'start';border-radius:100%;"]),O=Object(o.default)(i.Text)(D(),function(e){return e._css}),P=function(){var e=S.data.site.siteMetadata.authors,t=1/e.length;return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"row"},e.map(function(e,a){return r.a.createElement(i.Box,{flex:"1 1 auto",mx:2,width:t,key:"author-"+a},r.a.createElement(W,{key:e.name+"-"+a,bioImage:"/"+e.avatar,bioName:e.name,bioDescription:e.description,bioTwitter:e.social.twitter,alignImage:a%2!=0?"left":"right"}))}))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(i.Box,{fontSize:0},r.a.createElement(H,null,"© ",(new Date).getFullYear()," Canadian Border Patrol")))},H=o.default.footer.withConfig({displayName:"footer__FootText",componentId:"sc-16c0o4o-0"})(["text-align:center;"]),L=(t.a=function(e){var t=e.children;return r.a.createElement(o.ThemeProvider,{theme:g},r.a.createElement(l,null,r.a.createElement(p,null),r.a.createElement(I,null),r.a.createElement(L,null,r.a.createElement("main",null,t),r.a.createElement(q,null))))},o.default.div.withConfig({displayName:"layout__Content",componentId:"ghtgzr-0"})(["background-color:#FFFFFFE6;padding:3rem 3rem;border-radius:15px;"]))}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e8e44f31bbf61e0c6be8.js.map