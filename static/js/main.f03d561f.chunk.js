(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(4),s=n.n(c),i=(n(9),n(2)),l=(n(10),n(0)),u=function(e){var t=e.children;return Object(l.jsx)("div",{className:"container",children:t})},o=[{shortName:"EUR",name:"EUR - euro",rate:4.6},{shortName:"USD",name:"USD - dolar ameryka\u0144ski",rate:3.95},{shortName:"GBP",name:"GBP - funt szterling",rate:5.44},{shortName:"CHF",name:"CHF - frank szwajcarski",rate:4.31}],j=(n(12),n(13),function(){return Object(l.jsx)("input",{className:"button",type:"submit",value:"Przelicz"})}),m=(n(14),function(e){var t=e.result;return void 0===t?null:Object(l.jsxs)("p",{className:"result",children:[t.initialAmount,"\xa0PLN\xa0= ",Object(l.jsx)("strong",{children:t.finalAmount.toFixed(2)}),"\xa0",t.currency]})}),b=(n(15),function(e){var t=e.currencies,n=e.currency;return Object(l.jsxs)("div",{className:"rateContainer",children:[Object(l.jsx)("p",{className:"rateContainer__text",children:"Aktualny kurs:"}),Object(l.jsx)("p",{className:"rateContainer__text rateContainer__text--last",children:t.find((function(e){return e.shortName===n})).rate.toFixed(2)})]})}),f=function(e){var t=e.calculateResult,n=e.result,a=Object(r.useState)(""),c=Object(i.a)(a,2),s=c[0],u=c[1],f=Object(r.useState)(o[0].shortName),d=Object(i.a)(f,2),h=d[0],x=d[1];return Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(s,h)},children:[Object(l.jsx)("h2",{className:"form__header",children:"Przelicz walut\u0119"}),Object(l.jsxs)("label",{className:"form__label",children:[Object(l.jsx)("span",{className:"form__labelText",children:"Kwota w PLN:*"}),Object(l.jsx)("input",{value:s,onChange:function(e){var t=e.target;return u(t.value)},className:"form__field form__field--size",placeholder:"Wpisz kwot\u0119",type:"number",min:"0.01",step:"0.01",required:!0})]}),Object(l.jsxs)("label",{className:"form__label",children:[Object(l.jsx)("span",{className:"form__labelText",children:"Przelicz na:"}),Object(l.jsx)("select",{value:h,onChange:function(e){var t=e.target;return x(t.value)},className:"form__field",children:o.map((function(e){return Object(l.jsx)("option",{value:e.shortName,children:e.name},e.shortName)}))})]}),Object(l.jsx)(b,{currencies:o,currency:h}),Object(l.jsx)(j,{}),Object(l.jsx)(m,{result:n}),Object(l.jsx)("p",{className:"form__paragraph",children:"* - Nale\u017cy wpisa\u0107 liczb\u0119, kt\xf3ra ma max. dwa miejsca po przecinku"})]})};var d=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)(u,{children:Object(l.jsx)(f,{calculateResult:function(e,t){var n=o.find((function(e){return e.shortName===t})).rate;a({initialAmount:+e,finalAmount:e/n,currency:t})},result:n})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),h()}],[[16,1,2]]]);
//# sourceMappingURL=main.f03d561f.chunk.js.map