(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(154),n(157)),i={body:'<path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" fill="currentColor"/>',width:448,height:512},c=n(166),l=n(163),s=n(174),u=n(165),d=n(173);n.d(t,"pageQuery",function(){return m});t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return{number:e.node.frontmatter.number,title:e.node.frontmatter.title,slug:e.node.fields.slug,date:e.node.frontmatter.date,excerpt:e.node.excerpt}});return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),r.a.createElement(s.a,{posts:t}),r.a.createElement(d.a,{textAlign:"center",fontSize:[2,3,4],fontWeight:"bold",to:"/episodes/"},"All Episodes ",r.a.createElement(o.a,{icon:i})),r.a.createElement(u.a,{width:.5}))};var m="2063943093"},154:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(33),l=n.n(c);n.d(t,"a",function(){return l.a});n(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},159:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(55),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},160:function(e,t,n){e.exports=n.p+"static/mountains-4f18cc1481d8cf98668cdf2d38ea2280.png"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol"}}}}},162:function(e){e.exports={data:{site:{siteMetadata:{authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",avatar:"cbp-american.svg",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",avatar:"cbp-canadian.svg",social:{twitter:"roldford"}}]}}}}},163:function(e,t,n){"use strict";var a=n(164),r=n(0),o=n.n(r),i=n(4),c=n.n(i),l=n(172),s=n.n(l);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,c=e.title,l=a.data.site,u=t||l.siteMetadata.description;return console.log(l),o.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.authors[0].social.twitter},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"Totally fake border agency, real strange Canadian culture",authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",social:{twitter:"roldford"}}]}}}}},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(152),i=n(153);t.a=function(e){return r.a.createElement(i.Flex,{flexWrap:"flex",justifyContent:"center"},r.a.createElement(i.Box,{width:e.width,my:2},r.a.createElement(c,null)))};var c=o.default.hr.withConfig({displayName:"divider__StyledHr",componentId:"sc-16150fs-0"})(["background-color:red;"])},166:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(152),i=(n(34),n(153)),c=function(e){return r.a.createElement(l,Object.assign({},e,{mx:"auto",p:2,_css:{maxWidth:"1024px",minWidth:"320px"}}))},l=Object(o.default)(i.Box).withConfig({displayName:"container___StyledBox",componentId:"bzc9lm-0"})(["",""],function(e){return e._css}),s=n(155),u=n.n(s),d=n(160),m=n.n(d);function p(){var e=u()(["\n  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700');\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-family: Helvetica, Arial, sans-serif;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    box-sizing: border-box;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  a {\n    text-decoration: none;\n  }\n  ul {\n    margin: 0 auto;\n    padding: 0 auto;\n  }\n  ul p {\n    margin: 0 auto;\n  }\n"]);return p=function(){return e},e}var f=Object(o.createGlobalStyle)(p(),m.a),g={breakpoints:["26em","40em","54em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff"},space:[0,4,8,16,32,64,128,256],fonts:{serif:"Libre Baskerville, Times New Roman, serif",sans:"system-ui, sans-serif",mono:"Menlo, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},h=n(7),x=n.n(h),b=n(161),y=n(154),w=function(e){function t(){return e.apply(this,arguments)||this}return x()(t,e),t.prototype.render=function(){var e=o.default.img.withConfig({displayName:"title__Logo",componentId:"sc-1upn4l3-0"})(["max-width:100%;height:auto;"]);return r.a.createElement(y.b,{query:E,render:function(t){var n=t.site.siteMetadata.title;return r.a.createElement(i.Flex,{width:1,justifyContent:"center"},r.a.createElement(i.Box,{width:[.5,null,300],flex:"0 1 auto"},r.a.createElement(y.a,{to:"/"},r.a.createElement(e,{src:"/cbp-logo-400.png",alt:n+" Seal"}))))},data:b})},t}(r.a.Component),E="3009533391",v=w,k=n(157),_=n(167),j=n(168),C=n(169),S=n(170),T=n(158);var z=function(e){var t=[{text:"iTunes",href:"https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515",icon:_.a},{text:"Google Play",href:"https://play.google.com/music/listen?u=0#/ps/Ijfvdnyyavpl4jo4witxkakz5f4",icon:j.a},{text:"Stitcher",href:"https://www.stitcher.com/podcast/canadian-border-patrol?refid=stpr",icon:C.a},{text:"RSS",href:"https://canadianborderpatrol.com/rss.xml",icon:S.a},{text:"Twitter",href:"https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515",icon:T.a}];return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"row",alignItems:"center",p:2,pr:2},r.a.createElement(i.Text,{fontSize:[1,2,3]},t.map(function(e,t,n){var a="";return t!==n.length-1&&(a=" | "),r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{px:[1,2],href:e.href},r.a.createElement(k.a,{icon:e.icon})," ",e.text),a)})))},I=Object(o.default)(i.Link).withConfig({displayName:"linkbar__StyledLink",componentId:"fcj8q5-0"})(["color:black;"]),W=function(e){function t(){return e.apply(this,arguments)||this}return x()(t,e),t.prototype.render=function(){return r.a.createElement(i.Flex,{width:1,flexWrap:"noflex",flexDirection:"column",alignItems:"center"},r.a.createElement(v,null),r.a.createElement(z,null))},t}(r.a.Component),F=(n(171),n(162)),N=n(4),q=n.n(N);function D(){var e=u()(["",""]);return D=function(){return e},e}var R=function(e){return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"column",alignItems:"center",fontSize:[1,2,3]},r.a.createElement(i.Box,null,r.a.createElement(L,{src:e.bioImage,alt:e.bioName})),r.a.createElement(O,{mt:1,mb:2,fontWeight:"bold",_css:{textDecoration:"underline"}},e.bioName),r.a.createElement(i.Text,{mb:1},e.bioDescription),r.a.createElement(i.Link,{href:"https://twitter.com/"+e.bioTwitter},r.a.createElement(k.a,{icon:T.a})))};R.propTypes={bioImage:q.a.string,bioName:q.a.string,bioDescription:q.a.string,bioTwitter:q.a.string};var B=R,L=o.default.img.withConfig({displayName:"bioitem__Avatar",componentId:"v9g6qn-0"})(["width:auto;max-height:100px;align-self:'start';border-radius:100%;"]),O=Object(o.default)(i.Text)(D(),function(e){return e._css});var M="2975466106",A=function(){return r.a.createElement(y.b,{query:M,render:function(e){var t=e.site.siteMetadata.authors,n=1/t.length;return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"row"},t.map(function(e,t){return r.a.createElement(i.Box,{flex:"1 1 auto",mx:2,width:n,key:"author-"+t},r.a.createElement(B,{key:e.name+"-"+t,bioImage:"/"+e.avatar,bioName:e.name,bioDescription:e.description,bioTwitter:e.social.twitter,alignImage:t%2!=0?"left":"right"}))}))},data:F})},P=function(e){function t(){return e.apply(this,arguments)||this}return x()(t,e),t.prototype.render=function(){var e=o.default.footer.withConfig({displayName:"footer__FootText",componentId:"sc-16c0o4o-0"})(["text-align:center;"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(i.Box,{fontSize:0},r.a.createElement(e,null,"© ",(new Date).getFullYear()," Canadian Border Patrol")))},t}(r.a.Component);t.a=function(e){var t=e.children;return r.a.createElement(o.ThemeProvider,{theme:g},r.a.createElement(c,null,r.a.createElement(f,null),r.a.createElement(W,null),r.a.createElement(J,null,r.a.createElement("main",null,t),r.a.createElement(P,null))))};var J=o.default.div.withConfig({displayName:"layout__Content",componentId:"ghtgzr-0"})(["background-color:white;padding:3rem 3rem;border-radius:15px;"])},173:function(e,t,n){"use strict";var a=n(152),r=n(0),o=n.n(r),i=n(153),c=n(154);t.a=function(e){return o.a.createElement(i.Text,{textAlign:e.textAlign,fontSize:e.fontSize,fontWeight:e.fontWeight},o.a.createElement(l,{to:e.to,_css:{textDecoration:"none",color:"inherit"}},e.children))};var l=Object(a.default)(c.a).withConfig({displayName:"simplegatsbylink___StyledLink",componentId:"sc-194tlzq-0"})(["",""],function(e){return e._css})},174:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(153),i=n(155),c=n.n(i),l=n(152),s=n(173);function u(){var e=c()(["",""]);return u=function(){return e},e}var d=function(e){return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"column",mx:2},r.a.createElement(o.Flex,{flexWrap:"wrap",flexDirection:"row",alignItems:"baseline",mb:2},r.a.createElement(s.a,{fontSize:[3,4,5],fontWeight:"bold",to:e.slug},e.title),r.a.createElement(m,{fontSize:[0,1,2],ml:2,_css:{fontStyle:"italic"}},"Ep. ",e.number," - ",e.date)),r.a.createElement(o.Text,{fontSize:[1,2,3],pl:[2,3,4]},e.shortExcerpt))},m=Object(l.default)(o.Text)(u(),function(e){return e._css}),p=n(165);t.a=function(e){return r.a.createElement(o.Flex,{flexWrap:"nowrap",flexDirection:"column",justifyContent:"center"},e.posts.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.slug},r.a.createElement(d,{number:e.number,title:e.title,date:e.date,slug:e.slug,shortExcerpt:e.excerpt}),r.a.createElement(p.a,{width:.5}))}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d5573bedf0a648b99cf1.js.map