(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(155),a(157)),i={body:'<path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" fill="currentColor"/>',width:448,height:512},c=a(166),l=a(163),s=a(174),u=a(165),d=a(173);a.d(t,"pageQuery",function(){return m});t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return{number:e.node.frontmatter.number,title:e.node.frontmatter.title,slug:e.node.fields.slug,date:e.node.frontmatter.date,excerpt:e.node.excerpt}});return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),r.a.createElement(s.a,{posts:t}),r.a.createElement(d.a,{textAlign:"center",fontSize:[2,3,4],fontWeight:"bold",to:"/episodes/"},"All Episodes ",r.a.createElement(o.a,{icon:i})),r.a.createElement(u.a,{width:.5}))};var m="2063943093"},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(156),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},156:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},160:function(e,t,a){e.exports=a.p+"static/mountains-4f18cc1481d8cf98668cdf2d38ea2280.png"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"Totally fake border agency, absolutely real Canadian culture"}}}}},162:function(e){e.exports={data:{site:{siteMetadata:{authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",avatar:"cbp-american.svg",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",avatar:"cbp-canadian.svg",social:{twitter:"roldford"}}]}}}}},163:function(e,t,a){"use strict";var n=a(164),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(172),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return console.log(l),o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.authors[0].social.twitter},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"Totally fake border agency, absolutely real Canadian culture",authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",social:{twitter:"roldford"}}]}}}}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(152),i=a(153);t.a=function(e){return r.a.createElement(i.Flex,{flexWrap:"flex",justifyContent:"center"},r.a.createElement(i.Box,{width:e.width,my:2},r.a.createElement(c,null)))};var c=o.default.hr.withConfig({displayName:"divider__StyledHr",componentId:"sc-16150fs-0"})(["background-color:red;"])},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(152),i=(a(34),a(153)),c=function(e){return r.a.createElement(l,Object.assign({},e,{mx:"auto",p:2,_css:{maxWidth:"1024px",minWidth:"320px"}}))},l=Object(o.default)(i.Box).withConfig({displayName:"container___StyledBox",componentId:"bzc9lm-0"})(["",""],function(e){return e._css}),s=a(154),u=a.n(s),d=a(160),m=a.n(d);function f(){var e=u()(["\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700');\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-family: Helvetica, Arial, sans-serif;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    box-sizing: border-box;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  a {\n    text-decoration: none;\n  }\n  ul {\n    margin: 0 auto;\n    padding: 0 auto;\n  }\n  ul p {\n    margin: 0 auto;\n  }\n"]);return f=function(){return e},e}var p=Object(o.createGlobalStyle)(f(),m.a),g={breakpoints:["26em","40em","54em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff",flagred:"#eb2d37"},space:[0,4,8,16,32,64,128,256],fonts:{serif:"Libre Baskerville, Times New Roman, serif",sans:"system-ui, sans-serif",mono:"Menlo, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},h=a(161),x=a(155);function b(){var e=u()(["",""]);return b=function(){return e},e}var w=function(){var e=h.data.site,t=e.siteMetadata.title,a=e.siteMetadata.description;return r.a.createElement(i.Flex,{width:1,justifyContent:"center",alignItems:"center",flexDirection:"column"},r.a.createElement(i.Box,{width:[.5,null,300],flex:"0 1 auto"},r.a.createElement(x.a,{to:"/"},r.a.createElement(E,{src:"/cbp-logo-400.png",alt:t+" Seal"}))),r.a.createElement(y,{fontSize:[3],color:"flagred",_css:{textAlign:"center"}},a))},E=o.default.img.withConfig({displayName:"title__Logo",componentId:"sc-1upn4l3-0"})(["max-width:100%;height:auto;"]),y=Object(o.default)(i.Heading)(b(),function(e){return e._css}),v=a(157),k=a(167),_=a(168),F=a(169),j=a(170),T=a(158),C=function(e){var t=[{text:"iTunes",href:"https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515",icon:k.a},{text:"Google Play",href:"https://play.google.com/music/listen?u=0#/ps/Ijfvdnyyavpl4jo4witxkakz5f4",icon:_.a},{text:"Stitcher",href:"https://www.stitcher.com/podcast/canadian-border-patrol?refid=stpr",icon:F.a},{text:"RSS",href:"https://canadianborderpatrol.com/rss.xml",icon:j.a},{text:"Twitter",href:"https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515",icon:T.a}];return r.a.createElement(i.Flex,{flexWrap:"wrap",flexDirection:"row",alignItems:"center",justifyContent:"center",p:2,pr:2},t.map(function(e,t,a){return r.a.createElement(i.Button,{bg:"flagred",m:1},r.a.createElement(i.Link,{color:"white",href:e.href},r.a.createElement(v.a,{icon:e.icon})," ",e.text))}))},S=function(){return r.a.createElement(z,null,r.a.createElement(i.Flex,{width:1,flexWrap:"noflex",flexDirection:"column",alignItems:"center"},r.a.createElement(w,null),r.a.createElement(C,null)))},z=o.default.div.withConfig({displayName:"header__Background",componentId:"sc-1suwjbq-0"})(["background-color:#FFFFFFE6;padding:.5rem .5rem;margin-bottom:.5rem;border-radius:15px;"]),I=(a(171),a(162)),W=a(4),N=a.n(W);function B(){var e=u()(["",""]);return B=function(){return e},e}var D=function(e){return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"column",alignItems:"center",fontSize:[1,2,3]},r.a.createElement(i.Box,null,r.a.createElement(M,{src:e.bioImage,alt:e.bioName})),r.a.createElement(O,{mt:1,mb:2,fontWeight:"bold",_css:{textDecoration:"underline"}},e.bioName),r.a.createElement(i.Text,{mb:1},e.bioDescription),r.a.createElement(i.Link,{href:"https://twitter.com/"+e.bioTwitter},r.a.createElement(v.a,{icon:T.a})))};D.propTypes={bioImage:N.a.string,bioName:N.a.string,bioDescription:N.a.string,bioTwitter:N.a.string};var R=D,M=o.default.img.withConfig({displayName:"bioitem__Avatar",componentId:"v9g6qn-0"})(["width:auto;max-height:100px;align-self:'start';border-radius:100%;"]),O=Object(o.default)(i.Text)(B(),function(e){return e._css}),L=function(){var e=I.data.site.siteMetadata.authors,t=1/e.length;return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"row"},e.map(function(e,a){return r.a.createElement(i.Box,{flex:"1 1 auto",mx:2,width:t,key:"author-"+a},r.a.createElement(R,{key:e.name+"-"+a,bioImage:"/"+e.avatar,bioName:e.name,bioDescription:e.description,bioTwitter:e.social.twitter,alignImage:a%2!=0?"left":"right"}))}))},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(i.Box,{fontSize:0},r.a.createElement(q,null,"© ",(new Date).getFullYear()," Canadian Border Patrol")))},q=o.default.footer.withConfig({displayName:"footer__FootText",componentId:"sc-16c0o4o-0"})(["text-align:center;"]),P=(t.a=function(e){var t=e.children;return r.a.createElement(o.ThemeProvider,{theme:g},r.a.createElement(c,null,r.a.createElement(p,null),r.a.createElement(S,null),r.a.createElement(P,null,r.a.createElement("main",null,t),r.a.createElement(A,null))))},o.default.div.withConfig({displayName:"layout__Content",componentId:"ghtgzr-0"})(["background-color:#FFFFFFE6;padding:3rem 3rem;border-radius:15px;"]))},173:function(e,t,a){"use strict";var n=a(152),r=a(0),o=a.n(r),i=a(153),c=a(155);t.a=function(e){return o.a.createElement(i.Text,{textAlign:e.textAlign,fontSize:e.fontSize,fontWeight:e.fontWeight},o.a.createElement(l,{to:e.to,_css:{textDecoration:"none",color:"inherit"}},e.children))};var l=Object(n.default)(c.a).withConfig({displayName:"simplegatsbylink___StyledLink",componentId:"sc-194tlzq-0"})(["",""],function(e){return e._css})},174:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(153),i=a(154),c=a.n(i),l=a(152),s=a(173);function u(){var e=c()(["",""]);return u=function(){return e},e}var d=function(e){return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"column",mx:2},r.a.createElement(o.Flex,{flexWrap:"wrap",flexDirection:"row",alignItems:"baseline",mb:2},r.a.createElement(s.a,{fontSize:[3,4,5],fontWeight:"bold",to:e.slug},e.title),r.a.createElement(m,{fontSize:[0,1,2],ml:2,_css:{fontStyle:"italic"}},"Ep. ",e.number," - ",e.date)),r.a.createElement(o.Text,{fontSize:[1,2,3],pl:[2,3,4]},e.shortExcerpt))},m=Object(l.default)(o.Text)(u(),function(e){return e._css}),f=a(165);t.a=function(e){return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"column",justifyContent:"center"},e.posts.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.slug},r.a.createElement(d,{number:e.number,title:e.title,date:e.date,slug:e.slug,shortExcerpt:e.excerpt}),r.a.createElement(f.a,{width:.5}))}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-670c2d7aabe583730af6.js.map