(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[6],{231:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),s=function(e){if(!e)return r.a.createElement("span",null,"Required!")},o=function(e){return function(t){if(t.length>e)return r.a.createElement("span",null,"Max length is ".concat(e," symbols"))}}},232:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return g}));var n=a(230),r=a(0),s=a.n(r),o=a(233),i=a.n(o),l=a(110),c=function(e){return function(t){var a=t.input,r=t.meta,o=r.touched,l=r.error,c=Object(n.a)(t,["input","meta"]),u=o&&l;return s.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},s.a.createElement(e,Object.assign({},a,c)),u&&s.a.createElement("span",null," ",l," "))}},u=c("textarea"),m=c("input"),g=function(e,t,a,n,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement(l.a,Object.assign({placeholder:e,type:t,name:a,component:n,validate:r},o))),i)}},233:function(e,t,a){e.exports={formControl:"FormControls_formControl__2GFZb",error:"FormControls_error__2yEwC"}},237:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__UrR_X",dialogsItems:"Dialogs_dialogsItems__2GSit",dialog:"Dialogs_dialog__QT_GS",messages:"Dialogs_messages__2yisJ",message:"Dialogs_message__f1z3W",form:"Dialogs_form__UhE31"}},309:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(75),o=a(237),i=a.n(o),l=a(13),c=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:i.a.dialog},r.a.createElement(l.b,{to:t},e.name))},u=function(e){return r.a.createElement("div",{className:i.a.message},e.message)},m=a(111),g=a(110),d=a(231),f=a(232),b=Object(d.a)(30),p=Object(m.a)({form:"dialogAddMessageForm"})((function(e){return r.a.createElement("form",{className:i.a.form,onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement(g.a,{component:f.b,name:"newMessageText",placeholder:"Type message...",validate:[d.b,b]}))),r.a.createElement("div",null,r.a.createElement("button",null,"Add message")))})),E=function(e){var t=e.dialogs.map((function(e){return r.a.createElement(c,{name:e.name,id:e.id})})),a=e.messages.map((function(e){return r.a.createElement(u,{message:e.message,id:e.id})}));return r.a.createElement("div",{className:i.a.dialogs},r.a.createElement("div",{className:i.a.dialogsItems},t),r.a.createElement("div",{className:i.a.messages},a,r.a.createElement(p,{onSubmit:function(t){e.onMessageClick(t.newMessageText)}})))},_=a(22),v=a(31),h=a(32),j=a(35),O=a(33),C=a(36),y=a(21),N=function(e){return{isAuth:e.auth.isAuth}},x=a(17);t.default=Object(x.d)((function(e){var t=function(t){function a(){return Object(v.a)(this,a),Object(j.a)(this,Object(O.a)(a).apply(this,arguments))}return Object(C.a)(a,t),Object(h.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(y.a,{to:"/login"})}}]),a}(r.a.Component);return Object(_.b)(N)(t)}),Object(_.b)((function(e){return{dialogs:e.messagesPage.dialogs,messages:e.messagesPage.messages}}),(function(e){return{onMessageClick:function(t){return e(Object(s.a)(t))}}})))(E)}}]);
//# sourceMappingURL=6.cdcea8ef.chunk.js.map