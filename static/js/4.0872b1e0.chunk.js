(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[4],{94:function(e,t,s){"use strict";s.r(t);var a=s(23),r=s(90),i=s.n(r),l=s(92),c=s(93),n=s(0),o=s(84),d=s(85),u=s(80),b=s(96),j=s(86),h=s(1);t.default=function(e){var t=Object(n.useState)({touched:!1,isValid:!1,errMassege:""}),s=Object(c.a)(t,2),r=s[0],g=s[1],p=Object(n.useState)({touched:!1,isValid:!1,errMassege:""}),m=Object(c.a)(p,2),x=m[0],O=m[1],f=Object(n.useState)(),V=Object(c.a)(f,2),M=V[0],v=V[1],w=Object(n.useState)(!1),y=Object(c.a)(w,2),N=y[0],T=y[1],S=function(){var t=Object(l.a)(i.a.mark((function t(s){var a,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),a=s.target.title.value.trim(),l=s.target.body.value.trim(),v(!0),!r.isValid||!x.isValid){t.next=9;break}return t.next=7,k({title:a,body:l});case 7:t.sent?e.history.replace("/blog"):T(!0);case 9:v(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(e){return new Promise((function(t,s){setTimeout((function(){t(e)}),2e3)}))};return Object(h.jsx)(o.a,{children:Object(h.jsx)(d.a,{children:Object(h.jsxs)(u.a,{md:6,lg:4,className:"mx-auto card my-5 bg-light shadow-sm ",children:[Object(h.jsxs)("h2",{className:"text-center h4 mb-3 text-secondary p-3",children:["addPost",N?"deine Discraption oder Title ist falsch ":null]}),Object(h.jsxs)(b.a,{onSubmit:S,children:[Object(h.jsxs)(b.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(h.jsx)(b.a.Label,{children:"Post Title"}),Object(h.jsx)(b.a.Control,{type:"text",placeholder:"post title",name:"title",onBlur:function(e){var t=e.target.value.trim(),s=Object(a.a)({},r);s.touched=!0,t.length<=0?(s.isValid=!1,s.errMassege="f\xfchlen Sie bitte der Titel aus"):t.split(" ").length<3?(s.isValid=!1,s.errMassege="der Titel ist kurz"):t.split(" ").length>10?(s.isValid=!1,s.errMassege="der Titel ist lang als 10 worte"):(s.isValid=!0,s.errMassege=""),g(Object(a.a)({},s)),console.log(s)},className:r.touched&&r.isValid?"border-success":r.touched&&!r.isValid?"border-danger":""}),r.errMassege?Object(h.jsx)("small",{className:"text-danger p-1",children:r.errMassege}):""]}),Object(h.jsxs)(b.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(h.jsx)(b.a.Label,{children:"Text Description"}),Object(h.jsx)(b.a.Control,{as:"textarea",rows:3,name:"body",onBlur:function(e){var t=e.target.value.trim(),s=Object(a.a)({},x);s.touched=!0,t.length<=0?(s.isValid=!1,s.errMassege="f\xfchlen Sie bitte der Description aus"):t.split(" ").length<10?(s.isValid=!1,s.errMassege="der Description ist kurz"):t.split(" ").length>500?(s.isValid=!1,s.errMassege="der Description ist lang als 500 worte"):(s.isValid=!0,s.errMassege=""),O(Object(a.a)({},s)),console.log(s)},className:x.touched&&x.isValid?"border-success":x.touched&&!x.isValid?"border-danger":""}),x.errMassege?Object(h.jsx)("small",{className:"text-danger p-1",children:x.errMassege}):""]}),Object(h.jsx)(j.a,{variant:"primary",type:"submit",className:"w-100 mb-3",children:M?"Loading...":"Add New Post"})]})]})})})}}}]);
//# sourceMappingURL=4.0872b1e0.chunk.js.map