(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),i=(n(12),n(2)),o=n.p+"static/media/pokeball.b2fd87ff.svg",u=(n(13),n(0)),l=function(e){var t=e.languages,n=e.initialLanguage,a=e.change;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"header__title",children:[Object(u.jsx)("img",{src:o,alt:"pokeball"}),Object(u.jsx)("h2",{children:"POKEDEX"})]}),Object(u.jsx)("div",{className:"header__language",children:Object(u.jsx)("select",{value:n,onChange:function(e){var t=e.target;a(t.value)},children:t.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.name)}))})})]})})},j=(n(15),function(){return Object(u.jsx)("div",{className:"spinner",children:Object(u.jsx)("div",{className:"spinner__half"})})}),m=(n(16),function(e){var t=e.pokemon,n=e.showDetail;return Object(u.jsxs)("div",{className:"card-container",onClick:function(e){e.preventDefault(),n(t)},children:[Object(u.jsx)("div",{className:"card-container__image",children:Object(u.jsx)("img",{src:t.image_dream_world?t.image_dream_world:t.image_default,alt:t.name})}),Object(u.jsx)("div",{className:"card-container__description",children:Object(u.jsx)("div",{className:"card-container__description__title",children:Object(u.jsx)("h2",{children:Object(u.jsx)("strong",{children:t.name})})})})]})}),d=(n(17),function(e){var t=e.show,n=e.close,a=(e.title,e.children),c=void 0===a?null:a;return Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsx)("div",{className:"modal",onClick:n,children:Object(u.jsxs)("div",{className:"modal__content",onClick:function(e){return e.stopPropagation()},children:[Object(u.jsx)("div",{onClick:n,className:"modal__content__close-btn",children:"X"}),Object(u.jsx)("div",{className:"modal__content__body",children:c})]})})})}),b=n(4),f=(n(18),n(3)),h=n.n(f),p=n(5),O="https://pokeapi.co/api/v2/",_=Math.floor(179.6),v=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t).then((function(e){return e.json()}));case 3:return n=e.sent,a=O+"pokemon-species/"+n.id,e.next=7,fetch(a).then((function(e){return e.json()}));case 7:return c=e.sent,e.abrupt("return",Object(b.a)(Object(b.a)({},n),c));case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O+"language",e.next=4,fetch("https://pokeapi.co/api/v2/language").then((function(e){return e.json()}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=O+"pokemon?limit=".concat(t,"&offset=").concat(n),e.next=4,fetch(a).then((function(e){return e.json()}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.pokemon,n=e.language,c=Object(a.useState)([]),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(a.useState)(!1),m=Object(i.a)(l,2),d=m[0],f=m[1];Object(a.useEffect)((function(){f(!0);var e=[],a={};t.stats.forEach((function(t){var n=t.base_stat,c=t.stat;a[c.name]={name:c.name,langugeName:c.name,value:n},e.push(k(c.url))})),Promise.all(e).then((function(e){var t=e.map((function(e){var t=e.names.find((function(e){return e.language.name===n})),c=t?t.name:e.name;return a[e.name]=Object(b.a)(Object(b.a)({},a[e.name]),{},{name:c}),a[e.name]}));o(t),f(!1)}))}),[t,n]);return Object(u.jsx)(u.Fragment,{children:d?Object(u.jsx)(j,{}):Object(u.jsxs)("div",{className:"pokemon-details",children:[Object(u.jsx)("div",{className:"pokemon-details__header"}),Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:t.image_dream_world?t.image_dream_world:t.image_default,alt:"alt-"+t.name})}),Object(u.jsxs)("div",{className:"pokemon-details__content",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"pokemon-details__content__title",children:t.name})}),Object(u.jsx)("div",{className:"pokemon-details__content__stats",children:s.map((function(e){return Object(u.jsxs)("div",{className:"pokemon-details__content__stats__stat",children:[Object(u.jsx)("span",{className:"pokemon-details__content__stats__stat__value",children:e.value}),Object(u.jsxs)("span",{className:"pokemon-details__content__stats__stat__name",children:[Object(u.jsx)("strong",{children:(t=e.name,t.replace("-"," "))})," "]})]},e.name);var t}))})]})]})})},w=(n(20),function(e){var t=e.language,n=Object(a.useState)(0),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)([]),l=Object(i.a)(o,2),b=l[0],f=l[1],h=Object(a.useState)(!1),p=Object(i.a)(h,2),O=p[0],g=p[1],k=Object(a.useState)(null),w=Object(i.a)(k,2),S=w[0],y=w[1],F=Object(a.useState)(!1),C=Object(i.a)(F,2),E=C[0],D=C[1];Object(a.useEffect)((function(){D(!0);var e=!0,n=[],a=5*r;return x(a+5<=898?5:898-a,a).then((function(a){var c=a.results;c&&(c.forEach((function(e){var t=e.url;n.push(v(t))})),Promise.all(n).then((function(n){var a=n.map((function(e){var n=e.names.find((function(e){return e.language.name===t})),a=n?n.name:e.name;return{id:e.id,name:a,image_default:e.sprites.front_default,image_dream_world:e.sprites.other.dream_world.front_default,types:e.types.map((function(e){return e.type.name})),stats:e.stats}}));e&&(f(a),D(!1))})))})),function(){e=!1}}),[r,t]);var P=function(e){y(e),g(!0)};return Object(u.jsxs)("div",{className:"pokemon-list",children:[E?Object(u.jsx)(j,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"pokemon-list__items",children:b.map((function(e){return Object(u.jsx)(m,{pokemon:e,showDetail:P},e.id)}))}),Object(u.jsxs)("div",{className:"pokemon-list__actions",children:[r>0&&Object(u.jsx)("button",{onClick:function(){return s(r-1)},className:"primary-button",children:"< Atr\xe1s"}),r<_&&Object(u.jsx)("button",{onClick:function(){return s(r+1)},className:"primary-button",children:"Siguiente >"})]})]}),Object(u.jsx)(d,{title:"Detalles del pokemon",show:O,close:function(){return g(!1)},children:O&&S&&Object(u.jsx)(N,{pokemon:S,language:t})})]})}),S=c.a.memo(w),y=(n(21),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),s=Object(i.a)(r,2),o=s[0],m=s[1],d=Object(a.useState)("es"),b=Object(i.a)(d,2),f=b[0],h=b[1];return Object(a.useEffect)((function(){m(!0),g().then((function(e){var t=e.results;t&&c(t),m(!1)}))}),[]),Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)(j,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{languages:n,initialLanguage:f,change:h}),Object(u.jsx)(S,{language:f})]})})});n(22);var F=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(y,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(F,{}),document.getElementById("root")),C()}],[[23,1,2]]]);
//# sourceMappingURL=main.d9c0497e.chunk.js.map