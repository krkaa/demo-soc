(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[7],{231:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return l}));var r=t(0),a=t.n(r),o=function(e){if(!e)return a.a.createElement("span",null,"Required!")},l=function(e){return function(n){if(n.length>e)return a.a.createElement("span",null,"Max length is ".concat(e," symbols"))}}},232:function(e,n,t){"use strict";t.d(n,"b",(function(){return m})),t.d(n,"a",(function(){return s})),t.d(n,"c",(function(){return f}));var r=t(230),a=t(0),o=t.n(a),l=t(233),i=t.n(l),c=t(110),u=function(e){return function(n){var t=n.input,a=n.meta,l=a.touched,c=a.error,u=Object(r.a)(n,["input","meta"]),m=l&&c;return o.a.createElement("div",{className:i.a.formControl+" "+(m?i.a.error:"")},o.a.createElement(e,Object.assign({},t,u)),m&&o.a.createElement("span",null," ",c," "))}},m=u("textarea"),s=u("input"),f=function(e,n,t,r,a){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement(c.a,Object.assign({placeholder:e,type:n,name:t,component:r,validate:a},l))),i)}},233:function(e,n,t){e.exports={formControl:"FormControls_formControl__2GFZb",error:"FormControls_error__2yEwC"}},257:function(e,n,t){e.exports={loginPage:"Login_loginPage__1jOy1",loginError:"Login_loginError__3oNvV"}},311:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(257),l=t.n(o),i=t(111),c=t(232),u=t(231),m=Object(i.a)({form:"login"})((function(e){var n=e.handleSubmit,t=e.error;return a.a.createElement("form",{className:l.a.loginForm,onSubmit:n},Object(c.c)("Email...","email","email",c.a,[u.b]),Object(c.c)("Password...","password","password",c.a,[u.b]),Object(c.c)(null,"checkbox","rememberMe",c.a,null,null,"rember me"),t&&a.a.createElement("div",{className:l.a.loginError},t),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),s=t(22),f=t(25),b=t(21);n.default=Object(s.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:f.c})((function(e){return e.isAuth?a.a.createElement(b.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("div",{className:l.a.loginPage},"Login"),a.a.createElement(m,{onSubmit:function(n){e.login(n.email,n.password,n.rememberMe)}}))}))}}]);
//# sourceMappingURL=7.9b157d0a.chunk.js.map