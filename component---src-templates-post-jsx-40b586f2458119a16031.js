(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{154:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(158),s=n.n(l),c=n(162),m=n(289),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config.userTwitter,t=this.props.expanded;return o.a.createElement(m.Follow,{username:e,options:{count:!!t||"none"}})},t}(i.Component),u=(n(372),n(40)),d=n.n(u),h=n(374),f=n.n(h),g=n(187),y=n.n(g),E=n(156),b=n.n(E),x=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(d()(d()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(d()(d()(n))),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},n.render=function(){var e=this.props.postNode;if(!b.a.disqusShortname)return null;var t=e.frontmatter,n=y()(b.a.siteUrl,b.a.pathPrefix,e.fields.slug);return o.a.createElement(f.a,{shortname:b.a.disqusShortname,identifier:t.title,title:t.title,url:n,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(i.Component),v=(n(53),n(376)),w=n.n(v),C=n(39),N=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return o.a.createElement("div",{className:"post-tag-container"},e&&e.map(function(e){return o.a.createElement(C.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+w()(e)},o.a.createElement("button",null,e))}))},t}(i.Component),D=n(444),S=n(445),k=n(446),A=n(447),P=n(448),_=n(449),T=n(450),I=n(451),L=n(452),B=n(453),j=n(454),z=n(455),F=n(456),Y=n(457),M=n(458),U=n(459),O=n(157),H=O.c.div.withConfig({displayName:"SocialLinks__StyledSocialLinks",componentId:"sc-160xg5h-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:center;align-items:center;margin:15px 0;div{margin:5px 15px;}"]),q=(O.c.div.withConfig({displayName:"SocialLinks__ShareCount",componentId:"sc-160xg5h-1"})(["text-align:center;"]),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,a=e.mobile,r=t.frontmatter,i=y()(b.a.siteUrl,b.a.pathPrefix,n),l=a?36:48,s=function(e){return o.a.createElement("div",{className:"share-count"},function(e){return e>0?e:""}(e))};return o.a.createElement(H,null,o.a.createElement(D.a,{url:i,title:r.title},o.a.createElement(S.a,{round:!0,size:l}),o.a.createElement(k.a,{url:i},function(e){return s(e)})),o.a.createElement(A.a,{url:i,title:r.title},o.a.createElement(P.a,{round:!0,size:l})),o.a.createElement(_.a,{url:i},o.a.createElement(T.a,{round:!0,size:l}),o.a.createElement(I.a,{url:i},function(e){return s(e)})),o.a.createElement(L.a,{url:i,quote:t.excerpt},o.a.createElement(B.a,{round:!0,size:l}),o.a.createElement(j.a,{url:i},function(e){return s(e)})),o.a.createElement(z.a,{url:i,title:r.title,description:t.excerpt},o.a.createElement(F.a,{round:!0,size:l}),o.a.createElement(Y.a,{url:i},function(e){return s(e)})),o.a.createElement(M.a,{url:i},o.a.createElement(U.a,{round:!0,size:l})))},t}(i.Component)),J=n(229);n(440);n.d(t,"default",function(){return W}),n.d(t,"pageQuery",function(){return G});var R=O.c.div.withConfig({displayName:"post__PostMeta",componentId:"jkfh5h-0"})(["display:flex;flex-direction:column;justify-content:center;"]),W=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,n=t.frontmatter;return n.id||(n.id=e),n.category_id||(n.category_id=b.a.postDefaultCategoryID),o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement("title",null,n.title+" | "+b.a.siteTitle)),o.a.createElement(J.a,{postPath:e,postNode:t,postSEO:!0}),o.a.createElement("div",null,o.a.createElement("h1",null,n.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement(R,null,o.a.createElement(N,{tags:n.tags}),o.a.createElement(q,{postPath:e,postNode:t})),o.a.createElement(p,{config:b.a}),o.a.createElement(x,{postNode:t}))))},t}(o.a.Component),G="3288223027"},156:function(e,t){e.exports={siteTitle:"Canadian Border Patrol",siteTitleShort:"CBP",siteTitleAlt:"The realest, fake agency in North America",siteLogo:"/logos/logo-1024.png",siteUrl:"https://canadianborderpatrol.com",pathPrefix:"/canadianborderpatrol",siteDescription:"Investigating the important differences between the great border between two great countries",siteRss:"/rss.xml",googleAnalyticsID:"",postDefaultCategoryID:"Discussion",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Border Patrol Agent",userLocation:"North America",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Sharing is caring.",userLinks:[{label:"GitHub",url:"https://github.com/rheajt",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/rheajt",iconClassName:"fa fa-twitter"}],copyright:"Copyright © 2019. Canadian Border Patrol",themeColor:"#f00",backgroundColor:"#e0e0e0"}},161:function(e,t,n){e.exports=n.p+"static/canadian-border-patrol-logo-dbd916a61c1d95fcc19e58f40b222948.png"},162:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(182),o=n.n(i),l=n(0),s=n.n(l),c=n(158),m=n.n(c),p=n(157),u=n(161),d=n.n(u),h=p.c.header.withConfig({displayName:"Header__HeaderStyled",componentId:"sc-15nog3z-0"})(["display:grid;grid-template-columns:1fr 3fr;grid-template-rows:auto auto;grid-template-areas:'logo title' 'logo subtitle';justify-items:center;align-items:center;width:700px;margin:0 auto;img{grid-area:logo;width:300px;}h1{grid-area:title;}h4{grid-area:subtitle;}"]),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement(h,null,s.a.createElement("img",{src:d.a,alt:"canadian border patrol logo"}),s.a.createElement("h1",null,"Canadian Border Patrol"),s.a.createElement("h4",null,"The Realest, Fake Border Agency in the World"))},t}(s.a.Component),g=n(156),y=n.n(g);function E(){var e=o()(["\n* {\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    margin: 0;\n    padding: 20px;\n}\n"]);return E=function(){return e},e}n.d(t,"a",function(){return v});var b={primary:"",secondary:"",black:"#1f1f1f"},x=Object(p.b)(E()),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement(p.a,{theme:b},s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,null,s.a.createElement("meta",{name:"description",content:y.a.siteDescription})),s.a.createElement(x,null),s.a.createElement(f,null),e))},t}(s.a.Component)},229:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(158),s=n.n(l),c=n(187),m=n.n(c),p=n(156),u=n.n(p),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,l=r.postPath,c=r.postSEO;if(c){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,n=p.cover,a=m()(u.a.siteUrl,u.a.pathPrefix,l)}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;n=m()(u.a.siteUrl,u.a.pathPrefix,n);var d=m()(u.a.siteUrl,u.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),o.a.createElement(s.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:c?a:d}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=d},440:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-40b586f2458119a16031.js.map