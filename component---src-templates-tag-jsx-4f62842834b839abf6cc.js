(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"pageQuery",function(){return g});var r=n(6),a=n.n(r),o=n(0),i=n.n(o),l=n(158),s=n.n(l),c=n(162),u=n(190),d=n(156),p=n.n(d),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return i.a.createElement(c.a,null,i.a.createElement("div",{className:"tag-container"},i.a.createElement(s.a,{title:'Posts tagged as "'+e+'" | '+p.a.siteTitle}),i.a.createElement(u.a,{postEdges:t})))},t}(i.a.Component),g="3824571933"},156:function(e,t){e.exports={siteTitle:"Canadian Border Patrol",siteTitleShort:"CBP",siteTitleAlt:"The realest, fake agency in North America",siteLogo:"/logos/logo-1024.png",siteUrl:"https://canadianborderpatrol.com",pathPrefix:"/canadianborderpatrol",siteDescription:"Investigating the important differences between the great border between two great countries",siteRss:"/rss.xml",googleAnalyticsID:"",postDefaultCategoryID:"Discussion",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Border Patrol Agent",userLocation:"North America",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Sharing is caring.",userLinks:[{label:"GitHub",url:"https://github.com/rheajt",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/rheajt",iconClassName:"fa fa-twitter"}],copyright:"Copyright © 2019. Canadian Border Patrol",themeColor:"#f00",backgroundColor:"#e0e0e0"}},161:function(e,t,n){e.exports=n.p+"static/canadian-border-patrol-logo-dbd916a61c1d95fcc19e58f40b222948.png"},162:function(e,t,n){"use strict";var r=n(6),a=n.n(r),o=n(182),i=n.n(o),l=n(0),s=n.n(l),c=n(158),u=n.n(c),d=n(157),p=n(161),m=n.n(p),g=d.c.header.withConfig({displayName:"Header__HeaderStyled",componentId:"sc-15nog3z-0"})(["display:grid;grid-template-columns:1fr 3fr;grid-template-rows:auto auto;grid-template-areas:'logo title' 'logo subtitle';justify-items:center;align-items:center;width:700px;margin:0 auto;img{grid-area:logo;width:300px;}h1{grid-area:title;}h4{grid-area:subtitle;}"]),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return s.a.createElement(g,null,s.a.createElement("img",{src:m.a,alt:"canadian border patrol logo"}),s.a.createElement("h1",null,"Canadian Border Patrol"),s.a.createElement("h4",null,"The Realest, Fake Border Agency in the World"))},t}(s.a.Component),f=n(156),b=n.n(f);function y(){var e=i()(["\n* {\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    margin: 0;\n    padding: 20px;\n}\n"]);return y=function(){return e},e}n.d(t,"a",function(){return w});var E={primary:"",secondary:"",black:"#1f1f1f"},v=Object(d.b)(y()),w=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement(d.a,{theme:E},s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement("meta",{name:"description",content:b.a.siteDescription})),s.a.createElement(v,null),s.a.createElement(h,null),e))},t}(s.a.Component)},190:function(e,t,n){"use strict";n(53),n(79),n(80);var r=n(6),a=n.n(r),o=n(0),i=n.n(o),l=n(39),s=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return i.a.createElement("div",null,e.map(function(e){return i.a.createElement(l.Link,{to:e.path,key:e.title},i.a.createElement("h1",null,e.title))}))},t}(i.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-4f62842834b839abf6cc.js.map