(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return l});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(159),s=a(157),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=d;var l="1097489062"},152:function(t,e,a){"use strict";a.d(e,"b",function(){return l});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(e,"a",function(){return s.a});a(154);var d=r.a.createContext({}),l=function(t){return r.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return d});var n=a(160),r=a.n(n),i=a(161),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var s=c.rhythm,d=c.scale},154:function(t,e,a){var n;t.exports=(n=a(155))&&n.default||n},155:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),s=a(2),d=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},156:function(t){t.exports={data:{site:{siteMetadata:{authors:[{name:"Jordan Rhea",description:"Serial attention deficient web developer",avatar:"jordan.jpg",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",avatar:null,social:{twitter:"roldford"}}]}}}}},157:function(t,e,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(164),d=a.n(s);function l(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title,s=n.data.site,l=e||s.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.authors[0].social.twitter},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=l},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Canadian Border Patrol",description:"The realest, fake border agency in North America",authors:[{name:"Jordan Rhea",description:"Serial attention deficient web developer",social:{twitter:"rheajt"}},{name:"Ryan Oldford",description:"Teacher and warden of the North",social:{twitter:"roldford"}}]}}}}},159:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(152),s=a(153),d=(a(162),a(156));a(163);var l="2975466106",u=function(){return o.a.createElement(c.b,{query:l,render:function(t){var e=t.site.siteMetadata.authors;return console.log(t.jordan),o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"1rem"}},e.map(function(t,e){return o.a.createElement("div",{key:t.name+"-"+e,style:{display:"flex",marginBottom:Object(s.a)(2.5)}},o.a.createElement("img",{src:"/"+t.avatar,alt:t.name,style:{marginRight:Object(s.a)(.5),marginBottom:0,maxWidth:"100px",height:"auto",alignSelf:"start",borderRadius:"100%",order:e%2!=0?1:0}}),o.a.createElement("p",null,t.description," ",o.a.createElement("a",{href:"https://twitter.com/"+t.social.twitter},"You should follow him on Twitter")))}))},data:d})},p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},o.a.createElement("main",null,t),o.a.createElement(u,null),o.a.createElement("footer",null,"© ",(new Date).getFullYear()," Canadian Border Patrol"))},e}(o.a.Component);e.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-60f7acd7792ae1b9e3d4.js.map