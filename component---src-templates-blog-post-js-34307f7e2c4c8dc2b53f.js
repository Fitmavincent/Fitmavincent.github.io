(self.webpackChunkvince_blog=self.webpackChunkvince_blog||[]).push([[989],{9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},6132:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var l=r(n(1506)),a=r(n(5354)),i=r(n(9713)),o=r(n(7294)),c=r(n(5697)),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,(0,i.default)((0,l.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return o.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(o.default.Component);u.propTypes={children:c.default.func.isRequired};var m=u;t.default=m},3071:function(e,t,n){"use strict";var r=n(5318)(n(6132));t.L=r.default},606:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),l=n(1597),a=n(6162),i=n(1721),o=n(3071),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){return r.createElement(o.L,null,(function(e){var t=e.theme,n=e.toggleTheme;return r.createElement("div",{className:"toggle-btn"},r.createElement("input",{type:"checkbox",id:"toggle",onChange:function(e){return n(e.target.checked?"dark":"light")},checked:"dark"===t}),r.createElement("label",{for:"toggle"}))}))},t}(r.Component),u=c,m=n(9175),s=function(){var e=(0,l.useStaticQuery)("240262808"),t=e.site.siteMetadata,n=t.author;t.social;return r.createElement("div",{style:{display:"flex",marginBottom:(0,m.qZ)(2.5),justifyContent:"space-between"}},r.createElement("div",{style:{display:"flex"}},r.createElement(l.Link,{style:{boxShadow:"none",color:"inherit",display:"flex"},to:"/about"},r.createElement(a.Z,{fixed:e.avatar.childImageSharp.fixed,alt:n.name,style:{marginRight:(0,m.qZ)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.createElement("p",null,"This is ",r.createElement("strong",null,n.name),r.createElement("br",null),n.summary," "))),r.createElement(u,null))}},4982:function(e,t,n){"use strict";n.r(t);var r=n(7294),l=n(1597),a=n(606),i=n(8678),o=n(262),c=n(9175);t.default=function(e){var t=e.data,n=e.pageContext,u=e.location,m=t.markdownRemark,s=t.site.siteMetadata.title,d=n.previous,f=n.next;return r.createElement(i.Z,{location:u,title:s},r.createElement(o.Z,{title:m.frontmatter.title,description:m.frontmatter.description||m.excerpt}),r.createElement("article",null,r.createElement("header",null,r.createElement("h1",{style:{marginTop:(0,c.qZ)(1),marginBottom:0}},m.frontmatter.title),r.createElement("p",{style:Object.assign({},(0,c.bA)(-.2),{display:"block",marginBottom:(0,c.qZ)(1)})},m.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:m.html}}),r.createElement("hr",{style:{marginBottom:(0,c.qZ)(1)}}),r.createElement("footer",null,r.createElement(a.Z,null))),r.createElement("nav",null,r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,d&&r.createElement(l.Link,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),r.createElement("li",null,f&&r.createElement(l.Link,{to:f.fields.slug,rel:"next"},f.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-34307f7e2c4c8dc2b53f.js.map