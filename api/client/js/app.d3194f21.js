(function(t){function e(e){for(var r,s,c=e[0],i=e[1],u=e[2],p=0,d=[];p<c.length;p++)s=c[p],a[s]&&d.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/client/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var o=n("8c4f");r["a"].use(o["a"]);var s=n("bc3a"),c=n.n(s),i=c.a.create({baseURL:"https://accountkit-express.herokuapp.com"});r["a"].prototype.$http=i;var u={data:function(){return{ROUTE_BASE:"/client/"}}};r["a"].mixin(u);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("span",[t._v("Accountkit")])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",to:"/login"}},[n("span",{staticClass:"mr-2"},[t._v("Login")])])],1),n("h1",[t._v(t._s(t.message))])],1)},p=[],d={data:function(){return{message:"Hello"}}},h=d,f=n("2877"),b=n("6544"),v=n.n(b),g=n("8336"),k=n("a523"),m=n("9910"),w=n("71d9"),x=n("2a7f"),_=Object(f["a"])(h,l,p,!1,null,null,null),A=_.exports;v()(_,{VBtn:g["a"],VContainer:k["a"],VSpacer:m["a"],VToolbar:w["a"],VToolbarTitle:x["a"]});var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs4:""}}),n("v-flex",{attrs:{xs4:""}},[n("v-btn",{staticClass:"white--text",attrs:{block:"",depressed:"",color:"blue-grey"},on:{click:t.smsLogin}},[t._v("\n        Login With Phone\n        "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("phone_android")])],1)],1),n("v-flex",{attrs:{xs4:""}})],1),n("v-snackbar",{attrs:{color:t.snackbar.color,timeout:t.snackbar.timeout},model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v("\n    "+t._s(t.snackbar.text)+"\n    "),n("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar.show=!1}}},[t._v("Close")])],1)],1)},O=[],T=(n("96cf"),n("3b8d")),j={name:"Login",data:function(){return{snackbar:{show:!1,color:"error",timeout:5e3,text:""},creds:{fbAppEventsEnabled:!0,redirect:"http://localhost:8080",display:"popup",debug:!0}}},methods:{AccountKit_OnInteractive:function(){AccountKit.init(this.creds)},loginCallback:function(t){console.log("loginCallback: ",t),"PARTIALLY_AUTHENTICATED"===t.status?this.doLogin(t.code,t.state):"NOT_AUTHENTICATED"===t.status?(this.snackbar.show=!0,this.snackbar.text="NOT_AUTHENTICATED"):"BAD_PARAMS"===t.status&&(this.snackbar.show=!0,this.snackbar.text="BAD_PARAMS")},smsLogin:function(){AccountKit.login("PHONE",{countryCode:"+880",phoneNumber:""},this.loginCallback)},doLogin:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.post("/api/otp/success",{code:e,state:n});case 3:r=t.sent,console.log("dologin: ",r),this.snackbar.show=!0,this.snackbar.color="success",this.snackbar.text="You are verified with phone ".concat(r.data.phone),t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0.response||t.t0),this.snackbar.show=!0,this.snackbar.text=t.t0.response.data;case 15:case"end":return t.stop()}},t,this,[[0,10]])}));function e(e,n){return t.apply(this,arguments)}return e}(),getSession:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get("/api/otp/session");case 3:e=t.sent,console.log("response: ",e),this.creds.state=e.data.csrf,this.creds.appId=e.data.appId,this.creds.version=e.data.version,t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0),this.snackbar.show=!0,this.snackbar.text=t.t0.response;case 15:case"end":return t.stop()}},t,this,[[0,10]])}));function e(){return t.apply(this,arguments)}return e}(),loadAccountkitApi:function(){var t=Object(T["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=document.createElement("script"),e.setAttribute("src","https://sdk.accountkit.com/en_US/sdk.js"),e.setAttribute("async",""),e.onload=function(){console.log("accountkit loaded"),window.AccountKit_OnInteractive=n.AccountKit_OnInteractive,n.getSession()},document.head.appendChild(e);case 5:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.loadAccountkitApi()}},E=j,C=n("0e8f"),S=n("132d"),V=n("a722"),L=n("2db4"),P=Object(f["a"])(E,y,O,!1,null,null,null),R=P.exports;v()(P,{VBtn:g["a"],VContainer:k["a"],VFlex:C["a"],VIcon:S["a"],VLayout:V["a"],VSnackbar:L["a"]});var I="/client/",$=[{path:"/",component:A},{path:"/login",component:R}],N=new o["a"]({base:I,mode:"history",routes:$}),M=N,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view")],1)},B=[],D={name:"App",components:{},data:function(){return{}}},H=D,K=n("7496"),J=Object(f["a"])(H,U,B,!1,null,null,null),Y=J.exports;v()(J,{VApp:K["a"]}),r["a"].config.productionTip=!1,new r["a"]({router:M,render:function(t){return t(Y)}}).$mount("#app")}});
//# sourceMappingURL=app.d3194f21.js.map