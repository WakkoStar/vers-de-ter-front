(this["webpackJsonpvers-de-ter"]=this["webpackJsonpvers-de-ter"]||[]).push([[0],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(72),a(73),a(7)),i=a(5),u=(a(74),a(6)),s=a.n(u),m=a(10),p=a(8),E=a(16),d=a.n(E),f="http://env-7682161.hidora.com",g={"Content-Type":"application/json"};function b(e){return d.a.get("".concat(f,"/posts/").concat(e))}function v(e){return d.a.get("".concat(f,"/posts?titre_contains=").concat(e,"&rubrique.Cheminots=false"))}function h(e){return d.a.get("".concat(f,"/posts?description_contains=").concat(e,"&rubrique.Cheminots=false"))}function O(e){return!e||j()}function j(){var e=localStorage.getItem("SNCF");if(e){var t=7===e.length,a=!1;return e[6]&&(a=e[6].match(/[a-z]/i)),t&&a}return!1}function k(e){return d.a.post("".concat(f,"/email"),e,{headers:g})}var C=a(17),x=a.n(C),_=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(p.a)(l,2),u=i[0],E=i[1],g=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(f,"/categories?_sort=Position:ASC"));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){g()}),[]);var b=function(){x()("#App").toggleClass("translated",u),x()("#App").toggleClass("not-translated",!u),E(!u)},v=function(e,t){x()(t).toggleClass("displayed",e),x()(t).toggleClass("not-displayed",!e)};return x()("a").on("click",(function(){return x()("#App").toggleClass("translated",!1),x()("#App").toggleClass("not-translated",!0),void E(!0)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"mobile"},r.a.createElement("div",null,r.a.createElement("button",{onClick:b},r.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"})),r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"logo",src:"logo-vers-de-ter.png",alt:"logo"})),r.a.createElement(o.b,{to:"/Rechercher"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/OOjs_UI_icon_search.svg/600px-OOjs_UI_icon_search.svg.png"}))),r.a.createElement("div",{className:"navigation"},r.a.createElement("div",null,r.a.createElement("h1",null,"LES VERTS DE TER"),r.a.createElement("button",{onClick:b},r.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/flat-black/512/next.png"}))),r.a.createElement("ul",null,a.map((function(e){var t=e.nom,a=e.rubriques;return r.a.createElement("li",{key:t},t,r.a.createElement("div",null,r.a.createElement("ul",null,a.map((function(e){var t=e.nom;return r.a.createElement("li",null,r.a.createElement(o.b,{to:"/".concat(t)},t))})))))}))))),r.a.createElement("nav",{id:"desktop"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"logo",src:"../../logo-vers-de-ter.png",alt:"logo"}),r.a.createElement("h1",null,"LES VERTS DE TER"))),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/Rechercher"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/OOjs_UI_icon_search.svg/600px-OOjs_UI_icon_search.svg.png"}),"RECHERCHER"))),r.a.createElement("ul",null,a.map((function(e,t){var a=e.nom,n=e.rubriques;return r.a.createElement("li",{key:a,onMouseOver:function(){return v(!0,"#".concat(t))},onMouseOut:function(){return v(!1,"#".concat(t))}},a,r.a.createElement("div",null,r.a.createElement("ul",{id:t,className:"not-displayed"},n.map((function(e){var t=e.nom;return r.a.createElement("li",null,r.a.createElement(o.b,{to:"/".concat(t)},t))})))))})))))},y=a(24),S=a.n(y);function w(e,t){return e.length<=t?e:e.slice(0,t)+"..."}var q=function(e){var t=e.titre,a=e.description,n=e.rubrique,c=e.id,l=e.link,i=e.gallerie;return r.a.createElement("div",{className:"article_list",key:c},r.a.createElement(o.b,{to:l},r.a.createElement("img",{src:0!==i.length&&"".concat(f).concat(i[0].url),alt:t}),r.a.createElement("h1",null,t),r.a.createElement("div",{className:"description"},r.a.createElement(S.a,{source:w(a,100),escapeHtml:!1})),r.a.createElement("div",null,r.a.createElement("span",{className:"rubrique_name"},r.a.createElement("img",{src:"https://img2.pngio.com/green-tag-icon-free-green-price-tag-icons-green-tag-png-256_256.png"}),n.nom))))},N=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(f,"/posts?_sort=created_at:DESC&_limit=10&rubrique.Cheminots=false"));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"banner-mobile.png",id:"banner-mobile"}),r.a.createElement("img",{src:"banner.png",id:"banner-desktop"}),r.a.createElement("div",{className:"title_block"},r.a.createElement("h2",null,"Derni\xe8res actus")),a.map((function(e){var t=e.titre,a=e.description,n=e.rubrique,c=e.id,l=e.gallerie;return r.a.createElement(q,{titre:t,description:a,rubrique:n,id:c,gallerie:l,link:"/".concat(n.nom,"/").concat(c)})})))},I=function(){var e=Object(i.i)().nom,t=Object(i.j)().url,a=Object(n.useState)([]),c=Object(p.a)(a,2),l=c[0],o=c[1],u=Object(i.h)();return Object(n.useEffect)((function(){(function(){var t=Object(m.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n=e,d.a.get("".concat(f,"/posts?rubrique.nom=").concat(n,"&_sort=created_at:DESC"));case 2:a=t.sent,o(a.data);case 4:case"end":return t.stop()}var n}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),l&&!1===O(l.some((function(e){return e.rubrique.Cheminots})))?r.a.createElement(i.a,{to:{pathname:"/login",state:{from:u}}}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title_block"},r.a.createElement("h2",null,e)),l.map((function(e){var a=e.titre,n=e.description,c=e.rubrique,l=e.id,o=e.gallerie;return r.a.createElement(q,{titre:a,description:n,rubrique:c,id:l,gallerie:o,link:"".concat(t,"/").concat(l)})})))},R=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(p.a)(l,2),i=o[0],u=o[1],E=Object(n.useState)(""),d=Object(p.a)(E,2),f=d[0],g=d[1],b=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(f);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(f);case 2:t=e.sent,u(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b(),O()}),[f]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title_block"},r.a.createElement("input",{type:"text",onChange:function(e){return g(e.target.value)},value:f,placeholder:"Rechercher ici.."})),a.map((function(e){var t=e.titre,a=e.description,n=e.rubrique,c=e.gallerie,l=e.id;return r.a.createElement(q,{titre:t,description:a,rubrique:n,id:l,gallerie:c,link:"/".concat(n.nom,"/").concat(l)})})),i.map((function(e){var t=e.titre,n=e.description,c=e.rubrique,l=e.id,o=e.gallerie;return!a.some((function(e){return e.id===l}))&&r.a.createElement(q,{titre:t,description:n,rubrique:c,id:l,gallerie:o,link:"/".concat(c.nom,"/").concat(l)})})))},V=a(39),F=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(i.i)().id,o=Object(i.h)();return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(l);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),a&&a.rubrique&&!1===O(a.rubrique.Cheminots)?r.a.createElement(i.a,{to:{pathname:"/login",state:{from:o}}}):r.a.createElement("div",{className:"article"},r.a.createElement(V.a,null,a.gallerie?a.gallerie.map((function(e){var t=e.url,a=e.name;return r.a.createElement(V.a.Item,null,r.a.createElement("img",{src:"".concat(f).concat(t),alt:a}))})):""),r.a.createElement("h1",null,a.titre),r.a.createElement(S.a,{source:a.description,escapeHtml:!1}))},A=a(180),T=a(179),D=function(){var e=function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("mail").value,a=document.getElementById("message").value,n={to:"delpiahugo@gmail.com",from:"no-reply@vertsdeter-sud.fr",subject:"".concat(t," vient d'envoyer un message"),text:a},""===t||""===a?alert("Veuillez remplir tout les champs"):k(n).then((function(){alert("Votre message a bien \xe9t\xe9 envoy\xe9")})).catch((function(){alert("Erreur !")}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null,r.a.createElement("h2",null,"Nous contacter"),r.a.createElement(A.a.Group,{controlId:"mail"},r.a.createElement(A.a.Label,null,"Votre email"),r.a.createElement(A.a.Control,{type:"email"}),r.a.createElement(A.a.Text,{className:"text-muted"},"Votre email ne sera pas partag\xe9e")),r.a.createElement(A.a.Group,{controlId:"message"},r.a.createElement(A.a.Label,null,"Votre message"),r.a.createElement(A.a.Control,{as:"textarea",rows:"10"})),r.a.createElement(T.a,{onClick:e}," Valider ")))},L=function(){return r.a.createElement("footer",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/Contact"},"Nous contacter")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/mentions-l\xe9gales"},"Mentions l\xe9gales"))))};var B=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(i.g)(),o=(Object(i.h)().state||{from:{pathname:"/"}}).from;return j()?r.a.createElement(A.a,null,r.a.createElement("h2",null,"Vous \xeates connect\xe9")):r.a.createElement(A.a,null,r.a.createElement("h2",null,"Se connecter"),r.a.createElement(A.a.Group,{controlId:"formBasicEmail"},r.a.createElement(A.a.Label,null,"Votre code SNCF"),r.a.createElement(A.a.Control,{type:"text",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement(T.a,{onClick:function(){localStorage.setItem("SNCF",a),j()?l.replace(o):alert("Code invalide")}}," Valider "))};var H=function(){return r.a.createElement(o.a,{basename:"/vers-de-ter-front"},r.a.createElement("div",{className:"App not-translated",id:"App"},r.a.createElement("header",null,r.a.createElement(_,null)),r.a.createElement("main",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(i.b,{exact:!0,path:"/Rechercher"},r.a.createElement(R,null)),r.a.createElement(i.b,{exact:!0,path:"/Contact"},r.a.createElement(D,null)),r.a.createElement(i.b,{exact:!0,path:"/login"},r.a.createElement(B,null)),r.a.createElement(i.b,{exact:!0,path:"/:nom"},r.a.createElement(I,null)),r.a.createElement(i.b,{path:"/:nom/:id"},r.a.createElement(F,null)))),r.a.createElement(L,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root"))},67:function(e,t,a){e.exports=a(177)},72:function(e,t,a){},74:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.e5a4a03a.chunk.js.map