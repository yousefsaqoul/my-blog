(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{52:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var s=n(0),c=n.n(s),a=n(22),o=n.n(a),r=(n(52),n(23)),i=n(14),l=n(15),j=n(18),d=n(17),b=n(6),h=n(82),p=n(1),u=function(t){return Object(p.jsx)(h.a,{className:"head d-flex align-items-center justify-content-center",children:Object(p.jsx)("h1",{className:"display-2 text-light",children:t.title?t.title:"Hallo React"})})},O=n(89),x=n(12),m=function(t){return Object(p.jsxs)(O.a,{style:{width:"18rem"},className:"mb-4",children:[Object(p.jsx)(O.a.Img,{variant:"top",src:"https://source.unsplash.com/720x400/?".concat(t.post.id)}),Object(p.jsxs)(O.a.Body,{children:[Object(p.jsx)(O.a.Title,{children:t.post.title}),Object(p.jsx)(O.a.Text,{children:t.post.body}),Object(p.jsx)(x.b,{className:"btn btn-primary",to:"/posts/"+t.post.id,children:" Open Post"})]})]})},f=n(25),g=n.n(f),v=n(80),y=n(84),k=n(85),N=n(83),M=function(){return Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)(N.a,{animation:"border",role:"status",children:Object(p.jsx)("span",{className:"sr-only",children:"Loading..."})})})},w=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={posts:[],showModel:!1,currentId:null},t.renderPosts=function(){return t.state.posts.length>0?t.state.posts.map((function(e){return Object(p.jsx)(v.a,{md:6,lg:4,children:Object(p.jsx)(m,{post:e,openModel:t.openModel})},e.id)})):Object(p.jsx)("div",{children:Object(p.jsx)(M,{})})},t.closeModelHandler=function(){t.setState({showModel:!1})},t.openModel=function(e){t.showModelHandler(),t.setState({currentId:e})},t.showModelHandler=function(){t.setState({showModel:!0})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props),g.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){t.setState({posts:e.data})}))}},{key:"render",value:function(){return Object(p.jsxs)(y.a,{children:[Object(p.jsx)(k.a,{children:Object(p.jsx)(v.a,{children:Object(p.jsx)("h2",{className:"h3 text-primary border-bottom pb-3 mb-4",children:"Latest Posts"})})}),Object(p.jsx)(k.a,{children:this.renderPosts()})]})}}]),n}(s.Component),P=Object(b.g)(w),S=function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(u,{}),Object(p.jsx)(P,{})]})},C=n(86),B=function(){return Object(p.jsxs)(h.a,{children:[Object(p.jsx)("h1",{children:"Hello, world!"}),Object(p.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(p.jsx)("p",{children:Object(p.jsx)(C.a,{variant:"primary",children:"Learn more"})})]})},F=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(u,{}),Object(p.jsx)(b.b,{path:"/",exact:!0,component:B}),Object(p.jsx)(b.b,{path:"/blog",component:S})]})},H=n(87),L=n(88),T=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(H.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(p.jsx)(H.a.Brand,{href:"#home",children:"React-Blog"}),Object(p.jsx)(H.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsx)(H.a.Collapse,{id:"responsive-navbar-nav",children:Object(p.jsxs)(L.a,{className:"ml-auto",children:[Object(p.jsx)(x.c,{to:"/",className:"nav-link",children:"Home"}),Object(p.jsx)(x.c,{to:{pathname:"/blog",hash:"#star",search:"?page=1&sort=top"},className:"nav-link",children:"Blog"}),Object(p.jsx)(x.c,{to:"/posts/add-post",className:"nav-link",children:"Add Post"})]})})]})})},D=function(){return Object(p.jsx)("footer",{className:"bg-light p-4 d-flex justify-content-center",children:Object(p.jsx)("h4",{className:"lead text-secondary",children:" React Blog 2021"})})},I=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={post:null},t.renderPost=function(){return t.state.post?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u,{title:t.state.post.title}),Object(p.jsxs)(y.a,{className:"single-post-container",children:[Object(p.jsx)("img",{src:"https://source.unsplash.com/720x400/?".concat(t.state.post.id),alt:"",className:"single-post-img"}),Object(p.jsx)(k.a,{children:Object(p.jsx)(v.a,{children:Object(p.jsx)("p",{className:"single-post-body",children:t.state.post.body})})})]})]}):Object(p.jsx)(M,{})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id?this.props.match.params.id:null;e&&g.a.get("https://jsonplaceholder.typicode.com/posts/"+e).then((function(e){console.log(e.data),t.setState({post:e.data})}))}},{key:"componentDidUpdate",value:function(t){}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:this.renderPost()})}}]),n}(s.Component),A=function(t){return Object(p.jsx)(I,Object(r.a)({},t))},R=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.history.replace("/404")}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(u,{title:"404 not found"})})}}]),n}(s.Component),J=(n(78),c.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,94))}))),z=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={auth:!0},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(x.a,{children:[Object(p.jsx)(T,{}),Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{path:"/",exact:!0,component:F}),Object(p.jsx)(b.b,{path:"/blog",extends:!0,component:S}),this.state.auth?Object(p.jsx)(b.b,{path:"/posts/add-post",render:function(t){return Object(p.jsx)(s.Suspense,{fallback:Object(p.jsx)("div",{children:"Loding ..."}),children:Object(p.jsx)(J,Object(r.a)({},t))})}}):Object(p.jsx)(b.a,{from:"/posts/add-post",to:"/"}),Object(p.jsx)(b.b,{path:"/posts/:id",component:A}),Object(p.jsx)(b.a,{from:"/home",to:"/"}),Object(p.jsx)(b.b,{component:R})]}),Object(p.jsx)(D,{})]})})}}]),n}(s.Component),E=function(t){t&&t instanceof Function&&n.e(5).then(n.bind(null,95)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),a(t),o(t)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root")),E()}},[[79,1,2]]]);
//# sourceMappingURL=main.200ca9ee.chunk.js.map