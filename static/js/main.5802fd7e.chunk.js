(this["webpackJsonpnews-app-v3"]=this["webpackJsonpnews-app-v3"]||[]).push([[0],{17:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(18),r=a.n(s),i=a(4),l=a(0);var o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(i.b,{className:"navbar-brand",to:"/news-app-react",children:"News App React"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/news-app-react",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/",children:"About"})}),Object(l.jsxs)("li",{className:"nav-item dropdown",children:[Object(l.jsx)(i.b,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categories"}),Object(l.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"dropdown-item",to:"general",children:"General"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"dropdown-item",to:"business",children:"Business"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"dropdown-item",to:"science",children:"Science"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"dropdown-item",to:"entertainment",children:"Entertainment"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"dropdown-item",to:"health",children:"Health"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"dropdown-item",to:"technology",children:"Technology"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"dropdown-item",to:"game",children:"Game"})})]})]})]})})]})})})},j=a(9),b=a.n(j),d=a(12),p=a(11),h=(a(17),a.p+"static/media/loading.29181c59.gif"),x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("img",{style:{textAlign:"center",margin:"2px auto",display:"flex"},src:h,alt:"loading"})})},m=function(e){var t=e.cat,a=(e.apiKey,Object(c.useState)([])),n=Object(p.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(1),o=Object(p.a)(i,2),j=o[0],h=o[1],m=Object(c.useState)(!1),u=Object(p.a)(m,2),O=u[0],g=u[1],v=Object(c.useState)(""),y=Object(p.a)(v,2),f=y[0],N=y[1],w=function(){var e=Object(d.a)(b.a.mark((function e(){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,fetch("https://api.currentsapi.services/v1/search?apiKey=lEmOc5ny7vKnv9bZrQmZ-pu6cEP1fIytUqF_hdZsYXgOoS01&category=".concat(t,"&page_number=").concat(j));case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,console.log(c),r(c.data),g(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){w()}),[]);var K,S=function(){var e=Object(d.a)(b.a.mark((function e(){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),h(j+1),e.next=4,fetch("https://api.currentsapi.services/v1/search?apiKey=lEmOc5ny7vKnv9bZrQmZ-pu6cEP1fIytUqF_hdZsYXgOoS01&category=".concat(t,"&page_number=").concat(j+1));case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,r(c.data),g(!1),console.log(j);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(b.a.mark((function e(){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),h(j-1),e.next=4,fetch("https://api.currentsapi.services/v1/search?apiKey=lEmOc5ny7vKnv9bZrQmZ-pu6cEP1fIytUqF_hdZsYXgOoS01&category=".concat(t,"&page_number=").concat(j-1));case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,r(c.data),g(!1),console.log(j);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{id:"top",style:{textAlign:"center"},children:["Top News On ",(K=t,K.charAt(0).toUpperCase()+K.slice(1))]}),Object(l.jsx)("form",{className:"d-flex mx-5 my-5",children:Object(l.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search...","aria-label":"Search",onChange:function(e){N(e.target.value)}})}),Object(l.jsxs)("div",{className:"pagination my-3",children:[Object(l.jsx)("button",{className:"btn btn-primary",disabled:j<=1,onClick:k,children:"Previous"}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:S,children:"Next"})]}),O?Object(l.jsx)(x,{}):" ",Object(l.jsx)("div",{className:"box-card",children:!O&&s.filter((function(e){return""===f||e.title.toLowerCase().includes(f.toLowerCase())?e:void 0})).map((function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{loading:"lazy",className:"card-img-top",src:e.imageUrl?e.imageUrl:"https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1",alt:e.author}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("p",{className:"card-text",children:e.date.slice(0,11)}),Object(l.jsx)("p",{className:"card-text",children:e.author}),Object(l.jsx)("h5",{className:"card-title",children:e.title?e.title.slice(0,80):""}),Object(l.jsx)("p",{className:"card-text",children:e.content?e.content.slice(0,130):""}),Object(l.jsx)("a",{rel:"noreferrer",href:e.url,target:"_blank",className:"btn btn-primary",children:"Explore \u2192"})]})]},e.url)}))}),Object(l.jsxs)("div",{className:"pagination my-3",children:[Object(l.jsx)("button",{className:"btn btn-primary",disabled:j<=1,onClick:k,children:"Previous"}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:S,children:"Next"})]})]})},u=a(2);var O=function(){var e="lEmOc5ny7vKnv9bZrQmZ-pu6cEP1fIytUqF_hdZsYXgOoS01";return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/news-app-react",children:Object(l.jsx)(m,{apiKey:e,cat:"general"},"general")}),Object(l.jsx)(u.a,{exact:!0,path:"/general",children:Object(l.jsx)(m,{apiKey:e,cat:"general"},"general")}),Object(l.jsx)(u.a,{exact:!0,path:"/business",children:Object(l.jsx)(m,{apiKey:e,cat:"business"},"business")}),Object(l.jsx)(u.a,{exact:!0,path:"/science",children:Object(l.jsx)(m,{apiKey:e,cat:"science"},"science")}),Object(l.jsx)(u.a,{exact:!0,path:"/entertainment",children:Object(l.jsx)(m,{apiKey:e,cat:"entertainment"},"entertainment")}),Object(l.jsx)(u.a,{exact:!0,path:"/health",children:Object(l.jsx)(m,{apiKey:e,cat:"health"},"health")}),Object(l.jsx)(u.a,{exact:!0,path:"/technology",children:Object(l.jsx)(m,{apiKey:e,cat:"technology"},"technology")}),Object(l.jsx)(u.a,{exact:!0,path:"/game",children:Object(l.jsx)(m,{apiKey:e,cat:"game"},"technology")})]})]})})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5802fd7e.chunk.js.map