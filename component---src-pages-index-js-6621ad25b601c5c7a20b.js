(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return f});var r=a(7),n=a.n(r),o=a(0),i=a.n(o),l=a(152),c=a(159),s=a(157),d=a(153),u=a(175),m=a.n(u),p=function(t){function e(){return t.apply(this,arguments)||this}return n()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return i.a.createElement(c.a,{location:this.props.location,title:e},i.a.createElement(s.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr"}},i.a.createElement("img",{src:m.a,alt:"canadian border patrol seal"}),i.a.createElement("div",null,a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(l.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}))},e}(i.a.Component);e.default=p;var f="1623555389"},152:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var r=a(0),n=a.n(r),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(e,"a",function(){return c.a});a(154);var s=n.a.createContext({}),d=function(t){return n.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return s});var r=a(160),n=a.n(r),o=a(161),i=a.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new n.a(i.a);var c=l.rhythm,s=l.scale},154:function(t,e,a){var r;t.exports=(r=a(155))&&r.default||r},155:function(t,e,a){"use strict";a.r(e);a(34);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return n.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},156:function(t){t.exports={data:{site:{siteMetadata:{authors:[{name:"Jordan Rhea",description:"Serial attention deficient web developer",avatar:"jordan.jpg",siteUrl:"https://jordanrhea.com",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",avatar:null,siteUrl:"https://github.com/roldford",social:{twitter:"roldford"}}]}}}}},157:function(t,e,a){"use strict";var r=a(158),n=a(0),o=a.n(n),i=a(4),l=a.n(i),c=a(164),s=a.n(c);function d(t){var e=t.description,a=t.lang,n=t.meta,i=t.keywords,l=t.title,c=r.data.site,d=e||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},e.a=d},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"The realest, fake border agency in North America",authors:[{name:"Jordan Rhea",description:"Serial attention deficient web developer",siteUrl:"https://jordanrhea.com",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",siteUrl:"https://github.com/roldford",social:{twitter:"roldford"}}]}}}}},159:function(t,e,a){"use strict";var r=a(7),n=a.n(r),o=a(0),i=a.n(o),l=a(152),c=a(153),s=(a(162),a(156));a(163);var d="692709828",u=function(){return i.a.createElement(l.b,{query:d,render:function(t){var e=t.site.siteMetadata.authors;return console.log(t.jordan),i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"1rem"}},e.map(function(t,e){return i.a.createElement("div",{key:t.name+"-"+e,style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement("img",{src:"/"+t.avatar,alt:t.name,style:{marginRight:Object(c.a)(.5),marginBottom:0,maxWidth:"100px",height:"auto",alignSelf:"start",borderRadius:"100%",order:e%2!=0?1:0}}),i.a.createElement("p",null,t.description," ",i.a.createElement("a",{href:"https://twitter.com/"+t.social.twitter},"You should follow him on Twitter")))}))},data:s})},m=function(t){function e(){return t.apply(this,arguments)||this}return n()(e,t),e.prototype.render=function(){var t=this.props.children;return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},i.a.createElement("main",null,t),i.a.createElement(u,null),i.a.createElement("footer",null,"© ",(new Date).getFullYear()," Canadian Border Patrol"))},e}(i.a.Component);e.a=m},175:function(t,e,a){t.exports=a.p+"static/canadian-border-patrol-logo-dbd916a61c1d95fcc19e58f40b222948.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-6621ad25b601c5c7a20b.js.map