(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(164),c=n(161),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return i.a.createElement(l.a,{location:this.props.location,title:e},i.a.createElement(c.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(i.a.Component);t.default=s;var u="1097489062"},154:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},158:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol"}}}}},160:function(e){e.exports={data:{site:{siteMetadata:{authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",avatar:"cbp-american.svg",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",avatar:"cbp-canadian.svg",social:{twitter:"roldford"}}]}}}}},161:function(e,t,n){"use strict";var a=n(162),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(166),s=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title,c=a.data.site,u=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.authors[0].social.twitter},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"The realest, fake border agency in North America",authors:[{name:"Jordan Rhea",description:"Web developer and amateur juggler",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",social:{twitter:"roldford"}}]}}}}},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(153),i=(n(34),n(152)),l=function(e){return r.a.createElement(c,Object.assign({},e,{mx:"auto",p:2,_css:{maxWidth:"1024px",minWidth:"320px"}}))},c=Object(o.default)(i.Box).withConfig({displayName:"container___StyledBox",componentId:"bzc9lm-0"})(["",""],function(e){return e._css}),s=n(155),u=n.n(s);function m(){var e=u()(["\n  @import url('https://fonts.googleapis.com/css?family=Kodchasan:400,700');\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: Kodchasan;\n  }\n  a {\n    text-decoration: none;\n  }\n  ul {\n    margin: 0 auto;\n    padding: 0 auto;\n    // list-style-type: none;\n  }\n  ul > p {\n    margin: 0 auto;\n  }\n"]);return m=function(){return e},e}var d=Object(o.createGlobalStyle)(m()),p={breakpoints:["40em","52em","64em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff"},space:[0,4,8,16,32,64,128,256],fonts:{sans:"system-ui, sans-serif",mono:"Menlo, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},f=n(7),h=n.n(f),g=n(159),x=n(154);function y(){var e=u()(["",""]);return y=function(){return e},e}var b=function(e){function t(){return e.apply(this,arguments)||this}return h()(t,e),t.prototype.render=function(){var e=o.default.img.withConfig({displayName:"title__Logo",componentId:"sc-1upn4l3-0"})(["max-width:100%;height:auto;"]);return r.a.createElement(x.b,{query:w,render:function(t){var n=t.site.siteMetadata.title;return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},r.a.createElement(i.Box,{width:[1/8,.1],mr:2},r.a.createElement(x.a,{to:"/"},r.a.createElement(e,{src:"/canadian-border-patrol-logo.png",alt:n+" Seal"}))),r.a.createElement(i.Heading,{textAlign:"left",fontSize:[4,5,6]},r.a.createElement(v,{to:"/",_css:{textDecoration:"none",color:"inherit"}},n)))},data:g})},t}(r.a.Component),w="3009533391",E=b,v=Object(o.default)(x.a)(y(),function(e){return e._css}),j=n(157),C=function(e){return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",p:1,pr:2},r.a.createElement(i.Link,{px:[1,2],fontSize:[2,3],href:"http://www.apple.com"},r.a.createElement(j.a,null)),r.a.createElement(i.Link,{px:[1,2],fontSize:[2,3],href:"https://canadianborderpatrol.com/rss.xml"},r.a.createElement(j.b,null)),r.a.createElement(i.Link,{px:[1,2],fontSize:[2,3],href:"https://twitter.com/canborderpatrol"},r.a.createElement(j.c,null)))},T=function(e){function t(){return e.apply(this,arguments)||this}return h()(t,e),t.prototype.render=function(){return r.a.createElement(i.Flex,{justifyContent:"space-between",alignItems:"center"},r.a.createElement(i.Box,{flex:"1 1 auto"},r.a.createElement(E,null)),r.a.createElement(i.Box,{flex:"1 1 auto"},r.a.createElement(C,null)))},t}(r.a.Component),_=(n(165),n(160)),k=n(4),N=n.n(k);function I(){var e=u()(["",""]);return I=function(){return e},e}var S=function(e){return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"column",alignItems:"center",fontSize:[1,2,3]},r.a.createElement(i.Box,null,r.a.createElement(B,{src:e.bioImage,alt:e.bioName})),r.a.createElement(F,{mt:1,mb:2,fontWeight:"bold",_css:{textDecoration:"underline"}},e.bioName),r.a.createElement(i.Text,{mb:1},e.bioDescription),r.a.createElement(i.Link,{href:"https://twitter.com/"+e.bioTwitter},r.a.createElement(j.c,null)))};S.propTypes={bioImage:N.a.string,bioName:N.a.string,bioDescription:N.a.string,bioTwitter:N.a.string};var q=S,B=o.default.img.withConfig({displayName:"bioitem__Avatar",componentId:"v9g6qn-0"})(["width:auto;max-height:100px;align-self:'start';border-radius:100%;"]),F=Object(o.default)(i.Text)(I(),function(e){return e._css});var D="2975466106",M=function(){return r.a.createElement(x.b,{query:D,render:function(e){var t=e.site.siteMetadata.authors,n=1/t.length;return r.a.createElement(i.Flex,{flexWrap:"nowrap",flexDirection:"row"},t.map(function(e,t){return r.a.createElement(i.Box,{flex:"1 1 auto",mx:2,width:n,key:"author-"+t},r.a.createElement(q,{key:e.name+"-"+t,bioImage:"/"+e.avatar,bioName:e.name,bioDescription:e.description,bioTwitter:e.social.twitter,alignImage:t%2!=0?"left":"right"}))}))},data:_})},O=function(e){function t(){return e.apply(this,arguments)||this}return h()(t,e),t.prototype.render=function(){var e=o.default.footer.withConfig({displayName:"footer__FootText",componentId:"sc-16c0o4o-0"})(["text-align:center;"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(i.Box,{fontSize:0},r.a.createElement(e,null,"© ",(new Date).getFullYear()," Canadian Border Patrol")))},t}(r.a.Component);t.a=function(e){var t=e.children;return r.a.createElement(o.ThemeProvider,{theme:p},r.a.createElement(l,null,r.a.createElement(d,null),r.a.createElement(T,null),r.a.createElement("main",null,t),r.a.createElement(O,null)))}}}]);
//# sourceMappingURL=component---src-pages-404-js-1c812e08e88eed5950b1.js.map