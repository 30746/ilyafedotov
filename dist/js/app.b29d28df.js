(function(e){function n(n){for(var a,u,s=n[0],i=n[1],l=n[2],c=0,p=[];c<s.length;c++)u=s[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);m&&m(n);while(p.length)p.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(a=!1)}a&&(r.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},o={app:0},r=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ec7041e3"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,a){t=o[e]=[n,a]}));n.push(t[2]=a);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=u(e);var l=new Error;r=function(n){i.onerror=i.onload=null,clearTimeout(c);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,t[1](l)}o[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var m=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-content",[t("router-view")],1)],1)},r=[],u={name:"App",data:function(){return{}}},s=u,i=t("2877"),l=t("6544"),c=t.n(l),m=t("7496"),p=t("a75b"),f=Object(i["a"])(s,o,r,!1,null,null,null),d=f.exports;c()(f,{VApp:m["a"],VContent:p["a"]});t("d3b7");var g=t("8c4f"),v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("div",{attrs:{id:"app"}},[t("div",[t("v-data-table",{attrs:{headers:e.headers,items:e.desserts},scopedSlots:e._u([{key:"item.name",fn:function(n){return[t("v-edit-dialog",{attrs:{"return-value":n.item.name},on:{"update:returnValue":function(t){return e.$set(n.item,"name",t)},"update:return-value":function(t){return e.$set(n.item,"name",t)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[t("v-text-field",{attrs:{rules:[e.max25chars],label:"Edit","single-line":"",counter:""},model:{value:n.item.name,callback:function(t){e.$set(n.item,"name",t)},expression:"props.item.name"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(n.item.name)+" ")])]}},{key:"item.Game",fn:function(n){return[t("v-edit-dialog",{attrs:{"return-value":n.item.Game},on:{"update:returnValue":function(t){return e.$set(n.item,"Game",t)},"update:return-value":function(t){return e.$set(n.item,"Game",t)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[t("v-text-field",{attrs:{rules:[e.max25chars],label:"Edit","single-line":"",counter:""},model:{value:n.item.Game,callback:function(t){e.$set(n.item,"Game",t)},expression:"props.item.Game"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(n.item.Game)+" ")])]}},{key:"item.Bank",fn:function(n){return[t("v-edit-dialog",{attrs:{"return-value":n.item.Bank,large:"",persistent:""},on:{"update:returnValue":function(t){return e.$set(n.item,"Bank",t)},"update:return-value":function(t){return e.$set(n.item,"Bank",t)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[t("v-text-field",{attrs:{rules:[e.max25chars],label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:n.item.Bank,callback:function(t){e.$set(n.item,"Bank",t)},expression:"props.item.Bank"}})]},proxy:!0}],null,!0)},[t("div",[e._v(e._s(n.item.Bank))])])]}}])}),t("v-snackbar",{attrs:{timeout:3e3,color:e.snackColor},model:{value:e.snack,callback:function(n){e.snack=n},expression:"snack"}},[e._v(" "+e._s(e.snackText)+" "),t("v-btn",{attrs:{text:""},on:{click:function(n){e.snack=!1}}},[e._v("Close")])],1)],1)])])},h=[],k={data:function(){return{snack:!1,snackColor:"",snackText:"",max25chars:function(e){return e.length<=25||"Input too long!"},pagination:{},headers:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Language",value:"Language"},{text:"Country",value:"Country"},{text:"Game Name",value:"Game"},{text:"Bought",value:"Bought"},{text:"Bank Balance",value:"Bank"}],desserts:[{name:"John Lennon",Language:"English",Country:"UK",Game:"PUBG",Bought:"Yes",Bank:"150000"},{name:"Elza Pataki",Language:"Swedish",Country:"Sweden",Game:"CS",Bought:"Yes",Bank:"25000"},{name:"Frodo Baggins",Language:"English",Country:"USA",Game:"CS",Bought:"Yes",Bank:"60000"},{name:"Shanon OReily",Language:"English",Country:"Ireland",Game:"CS",Bought:"Yes",Bank:"7800"},{name:"Edinson Cavani",Language:"Spanish",Country:"Uruguay",Game:"WOT",Bought:"No",Bank:"60095"},{name:"Emily Braxton",Language:"Maltese",Country:"Malta",Game:"PUBG",Bought:"Yes",Bank:"687800"},{name:"Christiano Ronaldo",Language:"Portuguese",Country:"Portugal",Game:"Fifa",Bought:"No",Bank:"1000000"},{name:"Fabien Bartez",Language:"French",Country:"France",Game:"WOW",Bought:"Yes",Bank:"38155"},{name:"Bruce Wayne",Language:"Spanish",Country:"Mexico",Game:"PUBG",Bought:"No",Bank:"50000"},{name:"Tony Stark",Language:"English",Country:"USA",Game:"WOT",Bought:"No",Bank:"77777"}]}},methods:{save:function(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancel:function(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},open:function(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},close:function(){console.log("Dialog closed")}}},y=k,b=t("8336"),B=t("8fea"),x=t("7679"),C=t("2db4"),G=t("8654"),_=Object(i["a"])(y,v,h,!1,null,null,null),S=_.exports;c()(_,{VBtn:b["a"],VDataTable:B["a"],VEditDialog:x["a"],VSnackbar:C["a"],VTextField:G["a"]}),a["a"].use(g["a"]);var w=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],O=new g["a"]({mode:"history",base:"/",routes:w}),E=O,L=t("f309");a["a"].use(L["a"]);var P=new L["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:E,vuetify:P,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.b29d28df.js.map