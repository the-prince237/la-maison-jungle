(this["webpackJsonpla-maison-jungle"]=this["webpackJsonpla-maison-jungle"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(7),r=c.n(i),s=(c(12),c(3)),o=(c(13),c(0));var l=function(e){var t=e.children;return Object(o.jsx)("div",{className:"lmj-banner",children:t})};c(15);var u=function(e){var t=e.cart,c=e.updateCart,a=e.isOpen,n=e.setIsOpen,i=t.reduce((function(e,t){return e+t.price*t.amount}),0);return a?Object(o.jsxs)("div",{className:"lmj-cart",children:[Object(o.jsx)("button",{className:"lmj-cart-toggle-button",onClick:function(){return n(!1)},children:"Fermer"}),Object(o.jsx)("h2",{children:"Panier"}),t.length>0?Object(o.jsxs)("div",{children:[t.map((function(e,t){var c=e.name,a=e.price,n=e.amount;return Object(o.jsxs)("div",{children:[c," : ",a,"XAF x ",n]},"".concat(c,"-").concat(t))})),Object(o.jsxs)("h3",{children:["Total : ",i,"\u20ac"]}),Object(o.jsx)("button",{onClick:function(){return c([])},children:"Vider le panier"})]}):Object(o.jsx)("div",{children:"Votre panier est vide"})]}):Object(o.jsx)("div",{className:"lmj-cart-closed",children:Object(o.jsx)("button",{className:"lmj-cart-toggle-button",onClick:function(){return n(!0)},children:"Ouvrir le Panier"})})};c(16);var j=function(){var e=localStorage.getItem("input"),t=Object(a.useState)(e||""),c=Object(s.a)(t,2),n=c[0],i=c[1];return Object(a.useEffect)((function(){localStorage.setItem("input",n)}),[n]),Object(o.jsxs)("footer",{className:"lmj-footer",children:[Object(o.jsx)("div",{className:"lmj-footer-elem",children:"pour les passionn\xe9es de plantes  \ud83c\udf3f\ud83c\udf31\ud83c\udf35"}),Object(o.jsx)("div",{className:"lmj-footer-elem",children:"Laissez-nous votre mail :"}),Object(o.jsx)("input",{type:"email",placeholder:"Entrez votre mail",value:n,onChange:function(e){return i(e.target.value)},onBlur:function(e){return!e.target.value.includes("@")&&alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")}})]})},d=c(2),g=c.p+"static/media/monstera.ec0819da.jpg",m=c.p+"static/media/lyrata.2e915120.jpg",h=c.p+"static/media/pothos.d72dc0ac.jpg",b=c.p+"static/media/succulent.f4329849.jpg",O=c.p+"static/media/olivier.b2908b40.jpg",p=c.p+"static/media/basil.be00474e.jpg",v=c.p+"static/media/mint.b83a3d2e.jpg",x=[{name:"monstera",category:"classique",id:"1ed",light:2,water:3,cover:g,price:8},{name:"ficus lyrata",category:"classique",id:"2ab",light:3,water:1,cover:m,price:9},{name:"pothos argent\xe9",category:"classique",id:"3sd",light:1,water:2,cover:h,price:10},{name:"calathea",category:"classique",id:"4kk",light:2,water:3,cover:c.p+"static/media/calathea.455c33e2.jpg",price:10},{name:"olivier",category:"ext\xe9rieur",id:"5pl",light:3,water:1,cover:O,price:5},{name:"cactus",category:"plante grasse",id:"8fp",light:2,water:1,cover:c.p+"static/media/cactus.a71c2062.jpg",price:4},{name:"basilique",category:"ext\xe9rieur",id:"7ie",light:2,water:3,cover:p,price:7},{name:"succulente",category:"plante grasse",id:"9vn",light:2,water:1,cover:b,price:12},{name:"menthe",category:"ext\xe9rieur",id:"6uo",light:2,water:2,cover:v,price:15}],C=c.p+"static/media/sun.0922d813.svg",A=c.p+"static/media/water.b7abd805.svg",f={1:"peu",2:"mod\xe9r\xe9ment",3:"beaucoup"};var w=function(e){var t=e.scaleValue,c=e.careType,a="light"===c?Object(o.jsx)("img",{src:C,alt:"sun-icon"}):Object(o.jsx)("img",{src:A,alt:"water-icon"});return Object(o.jsx)("div",{onClick:function(){return alert("Cette plante requiert ".concat(f[t]," ").concat("light"===c?"de lumi\xe8re":"d'arrosage"))},children:[1,2,3].map((function(e){return t>=e?Object(o.jsx)("span",{children:a},e.toString()):null}))})};c(17);var I=function(e){var t=e.id,c=e.cover,a=e.name,n=e.water,i=e.light,r=e.description,s=e.price;return Object(o.jsxs)("div",{id:"plant-item-contener",children:[Object(o.jsxs)("li",{className:"lmj-plant-item",onClick:function(){var e;e=r,alert("Vous voulez acheter 1 ".concat(a," ? Tr\xe8s bon choix!\n\n\n DESCRIPTION\n ").concat(e))},children:[Object(o.jsx)("img",{className:"lmj-plant-item-cover",src:c,alt:"".concat(a," cover")}),a,Object(o.jsxs)("div",{className:"lmj-plant-item-price",children:[s," XAF"]})]},t),Object(o.jsx)("div",{className:"more-infos",title:"Plus d'infos sur ".concat(a," !"),children:"+"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(w,{careType:"water",scaleValue:n}),Object(o.jsx)(w,{careType:"light",scaleValue:i})]})]})};c(18),c(19);var B=function(e){var t=e.activeCategories,c=e.setActiveCategories,a=x.reduce((function(e,t){return e.includes(t.category)?e:e.concat(t.category)}),[]);return Object(o.jsxs)("div",{className:"lmj-categories",children:[Object(o.jsxs)("div",{id:"lmj-categories-selection",children:[t.length>0&&Object(o.jsx)("div",{id:"lmj-categories-active",children:t.map((function(e,a){return Object(o.jsxs)("span",{class:"lmj-category-active",children:[e," ",Object(o.jsx)("button",{onClick:function(){return function(e){var a=t.filter((function(t){return t!==e}));c(Object(d.a)(a))}(e)},children:"x"})]},"".concat(e,"-").concat(a))}))}),Object(o.jsxs)("select",{className:"lmj-categories-select",value:t,onChange:function(e){return function(e){c([].concat(Object(d.a)(t),[e.target.value]))}(e)},children:[Object(o.jsx)("option",{value:t.length===a.length?"Plus de categorires":"ajouter une cat\xe9gorie",children:t.length===a.length?"Plus de categorires":"ajouter une cat\xe9gorie"}),a.map((function(e){return!t.includes(e)&&Object(o.jsx)("option",{value:e,children:e},e)}))]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){return c([])},children:"R\xe9initialiser"})]})};var N=function(e){var t=e.cart,c=e.updateCart,n=e.isOpen,i=e.setIsOpen,r=localStorage.getItem("activeCategories"),l=Object(a.useState)(r?JSON.parse(r):[]),u=Object(s.a)(l,2),j=u[0],g=u[1];return Object(a.useEffect)((function(){localStorage.setItem("activeCategories",JSON.stringify(j))}),[j]),Object(o.jsxs)("div",{className:"lmj-shopping-list",children:[Object(o.jsx)(B,{activeCategories:j,setActiveCategories:g}),Object(o.jsx)("ul",{className:"lmj-plant-list",children:x.map((function(e){var a=e.id,r=e.cover,s=e.name,l=e.water,u=e.light,g=e.price,m=e.category;return(j.includes(m)||0===j.length)&&Object(o.jsxs)("div",{className:"lmj-plant-list-itemBox",children:[Object(o.jsx)(I,{cover:r,name:s,water:l,light:u,price:g,category:m}),Object(o.jsx)("button",{onClick:function(){return function(e,a){var r=t.find((function(t){return t.name===e}));if(r){var s=t.filter((function(t){return t.name!==e}));c([].concat(Object(d.a)(s),[{name:e,price:a,amount:r.amount+1}]))}else c([].concat(Object(d.a)(t),[{name:e,price:a,amount:1}]));!n&&i("true")}(s,g)},children:"Ajouter"}),Object(o.jsx)("button",{onClick:function(){return function(e,a){var r=t.find((function(t){return t.name===e}));if(r){var s=t.filter((function(t){return t.name!==e}));r.amount>1?c([].concat(Object(d.a)(s),[{name:e,price:a,amount:r.amount-1}])):c(Object(d.a)(s))}else alert("la plante ".concat(e," n'appara\xeet pas dans votre panier.\n appuyez sur ajouter pour la faire appa\xeetre!"));!n&&i("true")}(s,g)},children:"Retirer"})]},a)}))})]})};c(20);var y=function(){var e=localStorage.getItem("cart"),t=Object(a.useState)(e?JSON.parse(e):[]),c=Object(s.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(!0),d=Object(s.a)(r,2),g=d[0],m=d[1];return Object(a.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(n))}),[n]),Object(o.jsxs)("div",{children:[Object(o.jsxs)(l,{children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"La maison jungle",className:"lmj-logo"}),Object(o.jsx)("h1",{className:"lmj-title",children:"La maison jungle"})]}),Object(o.jsxs)("div",{className:"lmj-layout-inner",children:[Object(o.jsx)(u,{cart:n,updateCart:i,isOpen:g,setIsOpen:m}),Object(o.jsx)(N,{cart:n,updateCart:i,isOpen:g,setIsOpen:m})]}),Object(o.jsx)(j,{})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.38da20f1.chunk.js.map