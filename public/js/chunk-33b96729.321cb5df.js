(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33b96729"],{"057f":function(t,e,n){var o=n("fc6a"),i=n("241c").f,r={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==r.call(t)?s(t):i(o(t))}},"159b":function(t,e,n){var o=n("da84"),i=n("fdbc"),r=n("17c2"),c=n("9112");for(var s in i){var a=o[s],l=a&&a.prototype;if(l&&l.forEach!==r)try{c(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(t,e,n){"use strict";var o=n("b727").forEach,i=n("a640"),r=n("ae40"),c=i("forEach"),s=r("forEach");t.exports=c&&s?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},2241:function(t,e,n){"use strict";var o,i=n("c31d"),r=n("2b0e"),c=n("d282"),s=n("ea8e"),a=n("b1d2"),l=n("6605"),u=n("b650"),f=Object(c["a"])("dialog"),d=f[0],h=f[1],b=f[2],g=d({mixins:[Object(l["a"])()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var t,e=this,n=this.$createElement,o=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[a["c"],h("footer",{buttons:o})]},[this.showCancelButton&&n(u["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||b("cancel")},class:h("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(u["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||b("confirm")},class:[h("confirm"),(t={},t[a["a"]]=o,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])}},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.message,o=this.messageAlign,i=this.slots(),r=this.slots("title")||this.title,c=r&&e("div",{class:h("header",{isolated:!n&&!i})},[r]),a=(i||n)&&e("div",{class:h("content")},[i||e("div",{domProps:{innerHTML:n},class:h("message",(t={"has-title":r},t[o]=o,t))})]);return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n},class:[h(),this.className],style:{width:Object(s["a"])(this.width)}},[c,a,this.genButtons()])])}}}),p=n("a142");function v(t){return document.body.contains(t)}function m(){o&&o.$destroy(),o=new(r["a"].extend(g))({el:document.createElement("div"),propsData:{lazyRender:!1}}),o.$on("input",(function(t){o.value=t}))}function y(t){return p["e"]?Promise.resolve():new Promise((function(e,n){o&&v(o.$el)||m(),Object(i["a"])(o,y.currentOptions,t,{resolve:e,reject:n})}))}y.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},y.alert=y,y.confirm=function(t){return y(Object(i["a"])({showCancelButton:!0},t))},y.close=function(){o&&(o.value=!1)},y.setDefaultOptions=function(t){Object(i["a"])(y.currentOptions,t)},y.resetDefaultOptions=function(){y.currentOptions=Object(i["a"])({},y.defaultOptions)},y.resetDefaultOptions(),y.install=function(){r["a"].use(g)},y.Component=g,r["a"].prototype.$dialog=y;e["a"]=y},"2fcb":function(t,e,n){},4160:function(t,e,n){"use strict";var o=n("23e7"),i=n("17c2");o({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,n){"use strict";var o=n("23e7"),i=n("b727").filter,r=n("1dde"),c=n("ae40"),s=r("filter"),a=c("filter");o({target:"Array",proto:!0,forced:!s||!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var o=n("ade3");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var o=n("428f"),i=n("5135"),r=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});i(e,t)||c(e,t,{value:r.f(t)})}},a4d3:function(t,e,n){"use strict";var o=n("23e7"),i=n("da84"),r=n("d066"),c=n("c430"),s=n("83ab"),a=n("4930"),l=n("fdbf"),u=n("d039"),f=n("5135"),d=n("e8b5"),h=n("861d"),b=n("825a"),g=n("7b0b"),p=n("fc6a"),v=n("c04e"),m=n("5c6c"),y=n("7c73"),w=n("df75"),O=n("241c"),j=n("057f"),C=n("7418"),S=n("06cf"),B=n("9bf2"),P=n("d1e7"),k=n("9112"),x=n("6eeb"),D=n("5692"),E=n("f772"),$=n("d012"),T=n("90e3"),I=n("b622"),N=n("e538"),A=n("746f"),_=n("d44e"),J=n("69f3"),F=n("b727").forEach,z=E("hidden"),L="Symbol",R="prototype",U=I("toPrimitive"),H=J.set,M=J.getterFor(L),Q=Object[R],W=i.Symbol,q=r("JSON","stringify"),G=S.f,K=B.f,V=j.f,X=P.f,Y=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),nt=D("wks"),ot=i.QObject,it=!ot||!ot[R]||!ot[R].findChild,rt=s&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=G(Q,e);o&&delete Q[e],K(t,e,n),o&&t!==Q&&K(Q,e,o)}:K,ct=function(t,e){var n=Y[t]=y(W[R]);return H(n,{type:L,tag:t,description:e}),s||(n.description=e),n},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},at=function(t,e,n){t===Q&&at(Z,e,n),b(t);var o=v(e,!0);return b(n),f(Y,o)?(n.enumerable?(f(t,z)&&t[z][o]&&(t[z][o]=!1),n=y(n,{enumerable:m(0,!1)})):(f(t,z)||K(t,z,m(1,{})),t[z][o]=!0),rt(t,o,n)):K(t,o,n)},lt=function(t,e){b(t);var n=p(e),o=w(n).concat(bt(n));return F(o,(function(e){s&&!ft.call(n,e)||at(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=v(t,!0),n=X.call(this,e);return!(this===Q&&f(Y,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(Y,e)||f(this,z)&&this[z][e])||n)},dt=function(t,e){var n=p(t),o=v(e,!0);if(n!==Q||!f(Y,o)||f(Z,o)){var i=G(n,o);return!i||!f(Y,o)||f(n,z)&&n[z][o]||(i.enumerable=!0),i}},ht=function(t){var e=V(p(t)),n=[];return F(e,(function(t){f(Y,t)||f($,t)||n.push(t)})),n},bt=function(t){var e=t===Q,n=V(e?Z:p(t)),o=[];return F(n,(function(t){!f(Y,t)||e&&!f(Q,t)||o.push(Y[t])})),o};if(a||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===Q&&n.call(Z,t),f(this,z)&&f(this[z],e)&&(this[z][e]=!1),rt(this,e,m(1,t))};return s&&it&&rt(Q,e,{configurable:!0,set:n}),ct(e,t)},x(W[R],"toString",(function(){return M(this).tag})),x(W,"withoutSetter",(function(t){return ct(T(t),t)})),P.f=ft,B.f=at,S.f=dt,O.f=j.f=ht,C.f=bt,N.f=function(t){return ct(I(t),t)},s&&(K(W[R],"description",{configurable:!0,get:function(){return M(this).description}}),c||x(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:W}),F(w(nt),(function(t){A(t)})),o({target:L,stat:!0,forced:!a},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),o({target:"Object",stat:!0,forced:!a,sham:!s},{create:ut,defineProperty:at,defineProperties:lt,getOwnPropertyDescriptor:dt}),o({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:ht,getOwnPropertySymbols:bt}),o({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(g(t))}}),q){var gt=!a||u((function(){var t=W();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));o({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var o,i=[t],r=1;while(arguments.length>r)i.push(arguments[r++]);if(o=e,(h(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!st(e))return e}),i[1]=e,q.apply(null,i)}})}W[R][U]||k(W[R],U,W[R].valueOf),_(W,L),$[z]=!0},b64b:function(t,e,n){var o=n("23e7"),i=n("7b0b"),r=n("df75"),c=n("d039"),s=c((function(){r(1)}));o({target:"Object",stat:!0,forced:s},{keys:function(t){return r(i(t))}})},dbb4:function(t,e,n){var o=n("23e7"),i=n("83ab"),r=n("56ef"),c=n("fc6a"),s=n("06cf"),a=n("8418");o({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,o=c(t),i=s.f,l=r(o),u={},f=0;while(l.length>f)n=i(o,e=l[f++]),void 0!==n&&a(u,e,n);return u}})},dc3f:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("ul",{staticClass:"loginBox"},[n("h3",[t._v("欢迎登录")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{maxlength:"13",type:"text",placeholder:"请输入手机号"},domProps:{value:t.phone},on:{input:[function(e){e.target.composing||(t.phone=e.target.value)},t.checkPhone]}})]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.identify,expression:"identify"}],ref:"identifyInp",attrs:{maxlength:"6",type:"text",placeholder:"请输入验证码"},domProps:{value:t.identify},on:{input:function(e){e.target.composing||(t.identify=e.target.value)}}}),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isPass,expression:"isPass"}],staticClass:"btn",on:{click:function(e){!t.countDown&&t.getIdentify()}}},[t._v(t._s(t.countDown?t.countDown:"获取验证码"))])]),n("div",{staticClass:"loginBtnBox"},[n("button",{staticClass:"btn",on:{click:t.login}},[t._v("登录")]),n("button",{staticClass:"btn",on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])])])])},i=[],r=(n("e17f"),n("2241")),c=n("5530"),s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,n=(new Date).getTime();return console.log("绑定节流函数"),function(){console.log(this);var o=(new Date).getTime();console.log(o-n),o-n>e&&(t.call(this),n=(new Date).getTime())}},a=s,l=n("2f62"),u={data:function(){return{phone:"",identify:"",countDown:0,isPass:!1,dxIdentify:""}},methods:Object(c["a"])(Object(c["a"])({},Object(l["d"])("loginState",["setToken","setUser"])),{},{getIdentify:a((function(){var t=this;this.countDown=60;var e=setInterval((function(){t.countDown--,0==t.countDown&&clearInterval(e)}),1e3);this.$post("users/getIdentify",{phone:this.phone}).then((function(e){console.log("getIdentify",e),t.dxIdentify=e.identify,r["a"].alert({message:e.identify})}))})),login:function(){var t=this;this.$post("users/login",{phone:this.phone,identify:this.identify}).then((function(e){console.log("users/login",e),0==e.code?(t.$router.go(-1),t.setToken("Bearer "+e.token),t.setUser(e.user),window.localStorage.setItem("token","Bearer "+e.token),window.localStorage.setItem("user",JSON.stringify(e.user))):r["a"].alert({message:e.msg})}))},checkPhone:function(){if(!/^1[3456789]\d{9}$/.test(this.phone))return this.isPass=!1,!1;this.isPass=!0,this.$refs.identifyInp.focus()}})},f=u,d=(n("e330"),n("0c7c")),h=Object(d["a"])(f,o,i,!1,null,null,null);e["default"]=h.exports},dd8b:function(t,e,n){},e17f:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("2fcb")},e330:function(t,e,n){"use strict";var o=n("dd8b"),i=n.n(o);i.a},e439:function(t,e,n){var o=n("23e7"),i=n("d039"),r=n("fc6a"),c=n("06cf").f,s=n("83ab"),a=i((function(){c(1)})),l=!s||a;o({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return c(r(t),e)}})},e538:function(t,e,n){var o=n("b622");e.f=o}}]);