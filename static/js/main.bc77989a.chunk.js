(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(7),n=c.n(a),r=c(8),i=c(6),l=c(1),s=(c(13),c(4)),o=c.n(s);function u(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}var j=c(0),d=function(e){var t=e.total,c=e.perPage,a=e.currentPage,n=e.onPageChange,r=u(1,Math.ceil(t/c)),i=1===a,l=a===Math.ceil(t/c),s=function(e){switch(e){case"next":if(l)return;n(a+1);break;case"prev":if(i)return;n(a-1)}};return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:i}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":i,onClick:function(){return s("prev")},children:"\xab"})}),r.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:(t=e,a===t)}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(a),onClick:function(){return n(e)},children:e})},e);var t})),Object(j.jsx)("li",{className:o()("page-item",{disabled:l}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":l,onClick:function(){return s("next")},children:"\xbb"})})]})},b=u(1,42).map((function(e){return"Item ".concat(e)})),h=[3,5,10,20],p=function(){var e=Object(l.useState)(5),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(l.useState)(1),s=Object(i.a)(n,2),o=s[0],u=s[1],p=Object(r.a)(b),f=b.length,m=1+(o-1)*c,g=o*c>f?f:o*c,O=function(){return p.slice(m-1,g)};return Object(l.useEffect)((function(){u(1)}),[c]),Object(l.useEffect)((function(){O()}),[o]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(o," (items ").concat(m," - ").concat(g," of ").concat(f,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){return a(+e.target.value)},children:h.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:f,perPage:c,currentPage:o,onPageChange:u}),Object(j.jsx)("ul",{children:O().map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bc77989a.chunk.js.map