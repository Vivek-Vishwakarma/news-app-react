(this["webpackJsonpnews-app-v3"]=this["webpackJsonpnews-app-v3"]||[]).push([[0],{17:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(18),r=a.n(s),i=a(7),l=a(0);var o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(i.b,{exact:!0,className:"navbar-brand",to:"/news-app-react",children:"News App React"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{exact:!0,className:"nav-link active","aria-current":"page",to:"/news-app-react",children:"Home"})}),Object(l.jsxs)("li",{className:"nav-item dropdown",children:[Object(l.jsx)(i.b,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categories"}),Object(l.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{exact:!0,className:"dropdown-item",to:"general",children:"General"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{exact:!0,className:"dropdown-item",to:"business",children:"Business"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{exact:!0,className:"dropdown-item",to:"science",children:"Science"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{exact:!0,className:"dropdown-item",to:"entertainment",children:"Entertainment"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{exact:!0,className:"dropdown-item",to:"health",children:"Health"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{exact:!0,className:"dropdown-item",to:"technology",children:"Technology"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{exact:!0,className:"dropdown-item",to:"game",children:"Game"})})]})]})]})})]})})})},j=a(9),b=a.n(j),d=a(12),p=a(11),h=(a(17),a.p+"static/media/loading.29181c59.gif"),x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("img",{style:{textAlign:"center",margin:"2px auto",display:"flex"},src:h,alt:"loading"})})},m=function(e){var t=e.cat,a=e.apiKey,n=Object(c.useState)([]),s=Object(p.a)(n,2),r=s[0],i=s[1],o=Object(c.useState)(1),j=Object(p.a)(o,2),h=j[0],m=j[1],u=Object(c.useState)(!1),O=Object(p.a)(u,2),g=O[0],v=O[1],f=Object(c.useState)(""),y=Object(p.a)(f,2),N=y[0],w=y[1],C=function(){var e=Object(d.a)(b.a.mark((function e(){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,fetch("https://api.currentsapi.services/v1/search?apiKey=".concat(a,"&category=").concat(t,"&page_number=").concat(h));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,console.log(n),i(n.news),v(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){C()}),[]);var k,K=function(){var e=Object(d.a)(b.a.mark((function e(){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),m(h+1),e.next=4,fetch("https://api.currentsapi.services/v1/search?apiKey=".concat(a,"&category=").concat(t,"&page_number=").concat(h+1));case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,i(n.news),v(!1),console.log(h);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(b.a.mark((function e(){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),m(h-1),e.next=4,fetch("https://api.currentsapi.services/v1/search?apiKey=".concat(a,"&category=").concat(t,"&page_number=").concat(h-1));case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,i(n.news),v(!1),console.log(h);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{id:"top",style:{textAlign:"center"},children:["Top News On ",(k=t,k.charAt(0).toUpperCase()+k.slice(1))]}),Object(l.jsx)("form",{className:"d-flex mx-5 my-5",children:Object(l.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search...","aria-label":"Search",onChange:function(e){w(e.target.value)}})}),Object(l.jsxs)("div",{className:"pagination my-3",children:[Object(l.jsx)("button",{className:"btn btn-primary",disabled:h<=1,onClick:S,children:"Previous"}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:K,children:"Next"})]}),g?Object(l.jsx)(x,{}):" ",Object(l.jsx)("div",{className:"box-card",children:!g&&r.filter((function(e){return""===N||e.title.toLowerCase().includes(N.toLowerCase())?e:void 0})).map((function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{loading:"lazy",className:"card-img-top",src:"None"===e.image?"https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1":e.image,alt:e.author}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("p",{className:"card-text",children:e.published.slice(0,11)}),Object(l.jsx)("p",{className:"card-text",children:e.author}),Object(l.jsx)("h5",{className:"card-title",children:e.title?e.title.slice(0,80):""}),Object(l.jsx)("p",{className:"card-text",children:e.description?e.description.slice(0,130):""}),Object(l.jsx)("a",{rel:"noreferrer",href:e.url,target:"_blank",className:"btn btn-primary",children:"Explore \u2192"})]})]},e.url)}))}),Object(l.jsxs)("div",{className:"pagination my-3",children:[Object(l.jsx)("button",{className:"btn btn-primary",disabled:h<=1,onClick:S,children:"Previous"}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:K,children:"Next"})]})]})},u=a(2);var O=function(){var e="lEmOc5ny7vKnv9bZrQmZ-pu6cEP1fIytUqF_hdZsYXgOoS01";return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/news-app-react",children:Object(l.jsx)(m,{apiKey:e,cat:"general"},"general")}),Object(l.jsx)(u.a,{exact:!0,path:"/business",children:Object(l.jsx)(m,{apiKey:e,cat:"business"},"business")}),Object(l.jsx)(u.a,{exact:!0,path:"/science",children:Object(l.jsx)(m,{apiKey:e,cat:"science"},"science")}),Object(l.jsx)(u.a,{exact:!0,path:"/entertainment",children:Object(l.jsx)(m,{apiKey:e,cat:"entertainment"},"entertainment")}),Object(l.jsx)(u.a,{exact:!0,path:"/health",children:Object(l.jsx)(m,{apiKey:e,cat:"health"},"health")}),Object(l.jsx)(u.a,{exact:!0,path:"/technology",children:Object(l.jsx)(m,{apiKey:e,cat:"technology"},"technology")}),Object(l.jsx)(u.a,{exact:!0,path:"/game",children:Object(l.jsx)(m,{apiKey:e,cat:"game"},"game")})]})]})})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.db83ac75.chunk.js.map