webpackJsonp([0],{"5AqT":function(t,e){},"7Otq":function(t,e,a){t.exports=a.p+"static/img/logo.95f023d.png"},"9lKy":function(t,e){},D4uH:function(t,e,a){"use strict";var i={},o={name:"icon",props:{name:{type:String,validator:function(t){return t?t in i||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,a=t.height;return Math.max(e,a)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,a,i){var o="fa-"+(n++).toString(16);return e[i]=o,' id="'+o+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,a,i,o){var n=a||o;return n&&e[n]?"#"+e[n]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,a=0;this.$children.forEach(function(t){e=Math.max(e,t.width),a=Math.max(a,t.height)}),this.childrenWidth=e,this.childrenHeight=a,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(a-t.height)/2})}},register:function(t){for(var e in t){var a=t[e];a.paths||(a.paths=[]),a.d&&a.paths.push({d:a.d}),a.polygons||(a.polygons=[]),a.points&&a.polygons.push({points:a.points}),i[e]=a}},icons:i},n=870711;var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return a("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return a("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[a("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var s=a("VU/8")(o,r,!1,function(t){a("5AqT")},null,null);e.a=s.exports},G5ce:function(t,e){},J3oi:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("D/PP");var i=a("7+uW"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"page-footer"}},[a("v-footer",{staticClass:"grey darken-3",attrs:{height:"auto"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","py-3":"","text-xs-center":"","white--text":""}},t._l(t.links,function(e){return a("v-btn",{key:e.name,attrs:{color:"white",flat:"",to:e.url,router:!0,ripple:""}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),t._v(" "),a("v-flex",{attrs:{xs12:"","py-3":"","px-3":"","text-xs-left":"","white--text":""}},[a("a",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"Click to send me an email"},expression:"{ html: 'Click to send me an email' }",arg:"top"}],attrs:{href:"mailto:domenico.leopardi@gmail.com",target:"_blank"}},[a("icon",{staticClass:"fa fa-envelope",attrs:{name:"envelope",scale:"10"}})],1),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"Click to view profile on GitHub"},expression:"{ html: 'Click to view profile on GitHub' }",arg:"top"}],attrs:{href:"https://github.com/domleo/",target:"_blank"}},[a("icon",{staticClass:"fa fa-github",attrs:{name:"github",scale:"10"}})],1),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"Click to view profile on Linkedin"},expression:"{ html: 'Click to view profile on Linkedin' }",arg:"top"}],attrs:{href:"https://www.linkedin.com/in/domenicoleopardi",target:"_blank"}},[a("icon",{staticClass:"fa fa-linkedin",attrs:{name:"linkedin",scale:"10"}})],1),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"Click to view my Youtube page"},expression:"{ html: 'Click to view my Youtube page' }",arg:"top"}],attrs:{href:"https://www.youtube.com/user/AnOtherLeopardi",target:"_blank"}},[a("icon",{staticClass:"fa fa-youtube",attrs:{name:"youtube",scale:"10"}})],1),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"Click to view my profile on Google+"},expression:"{ html: 'Click to view my profile on Google+' }",arg:"top"}],attrs:{href:"https://plus.google.com/+DomenicoLeopardi",target:"_blank"}},[a("icon",{staticClass:"fa fa-google-plus",attrs:{name:"google-plus",scale:"10"}})],1),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"Click to view my Tweetwe page"},expression:"{ html: 'Click to view my Tweetwe page' }",arg:"top"}],attrs:{href:"https://twitter.com/SnowLeopard789",target:"_blank"}},[a("icon",{staticClass:"fa fa-twitter",attrs:{name:"twitter",scale:"10"}})],1),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"Click to view profile on Facebook"},expression:"{ html: 'Click to view profile on Facebook' }",arg:"top"}],attrs:{href:"https://www.facebook.com/domenico.leopardi",target:"_blank"}},[a("icon",{staticClass:"fa fa-facebook",attrs:{name:"facebook",scale:"10"}})],1),t._v(" "),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"Click to view profile on Instagram"},expression:"{ html: 'Click to view profile on Instagram' }",arg:"top"}],attrs:{href:"https://www.instagram.com/snowleopard_dom",target:"_blank"}},[a("icon",{staticClass:"fa fa-instagram",attrs:{name:"instagram",scale:"10"}})],1)]),t._v(" "),a("v-flex",{attrs:{xs12:"","py-1":"",sm6:"",md6:"",lg6:"",xl6:"","order-1":"","text-xs-center":""}},[a("v-tooltip",{attrs:{top:""}},[a("v-avatar",{attrs:{slot:"activator",tile:!0},slot:"activator"},[a("a",{attrs:{href:"https://www.codewars.com/users/domleo/completed"}},[a("img",{attrs:{src:"https://www.codewars.com/users/domleo/badges/small"}})])]),t._v(" "),a("span",[t._v("View my profile on CodeWars")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg6:"",xl6:"","order-2":"","text-xs-right":""}},[a("v-card-text",[t._v("©"+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Domenico Leopardi")])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header-bar"}},[e("v-toolbar",{staticClass:"grey darken-3",attrs:{transparent:""}},[e("v-toolbar-title",[e("router-link",{staticClass:"title",attrs:{to:"/"}},[this._v("Domenico Leopardi")])],1)],1)],1)},staticRenderFns:[]};var r={name:"App",components:{PageFooter:a("VU/8")({name:"Page-Footer",data:function(){return{links:[{name:"Home",url:"/"},{name:"About Me",url:"/aboutme"},{name:"Blog",url:"/blog"},{name:"Contact",url:"/contact"}]}}},o,!1,function(t){a("w1iB")},"data-v-7ea63740",null).exports,HeaderBar:a("VU/8")({name:"Headerbar"},n,!1,function(t){a("TMBr")},"data-v-0e48727c",null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{dark:""}},[e("header-bar"),this._v(" "),e("v-content",[e("div",{staticClass:"main-container"},[e("router-view")],1)]),this._v(" "),e("page-footer")],1)],1)},staticRenderFns:[]};var l=a("VU/8")(r,s,!1,function(t){a("9lKy")},null,null).exports,c=a("/ocq"),h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homepage"},[e("v-container",[e("v-avatar",{attrs:{size:"250px"}},[e("img",{staticClass:"img-circle elevation-7 mb-1",attrs:{src:a("7Otq")}})]),this._v(" "),e("h1",[this._v(this._s(this.msg))])],1)],1)},staticRenderFns:[]};var p=a("VU/8")({name:"Homepage",data:function(){return{msg:"Welcome to my Personal Website!"}}},h,!1,function(t){a("ZVvr")},"data-v-088a6ce3",null).exports,u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog"},[a("v-content",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",[a("p",[t._v("\n              I've created this blog to showcase computer projects I have or am working on.\n              These projects will cover just about anything that is technology I happen to be interested in.\n              Anything from building desktop computers with elaborate water cooling systems, installing/confguring linux, arduino creations and C/C++ or python programs.\n              I'll try to explain how I did it along the way.\n              Enjoy!\n            ")]),t._v(" "),t._l(t.posts,function(e){return a("div",{key:e.title},[a("v-card",{staticClass:"my-3",attrs:{hover:""}},[a("v-card-media",{staticClass:"white--text",attrs:{height:"170px",src:e.imgUrl}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",[a("v-flex",{attrs:{xs12:"","align-end":"","d-flex":""}},[a("span",{staticClass:"headline"})])],1)],1)],1),t._v(" "),a("v-card-text"),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"red--text",attrs:{icon:""}},[a("v-icon",{attrs:{medium:""}},[t._v("fa-reddit")])],1),t._v(" "),a("v-btn",{staticClass:"light-blue--text",attrs:{icon:""}},[a("v-icon",{attrs:{medium:""}},[t._v("fa-twitter")])],1),t._v(" "),a("v-btn",{staticClass:"blue--text text--darken-4",attrs:{icon:""}},[a("v-icon",{attrs:{medium:""}},[t._v("fa-facebook")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"blue--text",attrs:{flat:""}},[t._v("Read More")])],1)],1)],1)})],2)],1)],1)],1)],1)},staticRenderFns:[]};var v=a("VU/8")({name:"Blog",data:function(){return{title:"Your Logo",posts:[{title:"Post 1",content:"Context 1.",imgUrl:"https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg"},{title:"Post 2",content:"Context 2.",imgUrl:"https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg"},{title:"Post 3",content:"Context 3.",imgUrl:"https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg"}]}}},u,!1,function(t){a("J3oi")},"data-v-0a1aaa78",null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"FourZeroFour"},[e("v-container",[e("h2",[this._v("404")]),this._v(" "),e("p",[this._v("\n      Nothing here. Click "),e("router-link",{attrs:{to:"/"}},[this._v("here")]),this._v(" to get back to the main page\n    ")],1)])],1)},staticRenderFns:[]};var d=a("VU/8")({name:"FourZeroFour"},m,!1,function(t){a("v9UK")},"data-v-db2913c0",null).exports,f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homepage"},[e("v-container",[e("h1",[this._v("Contact")])])],1)},staticRenderFns:[]};var g=a("VU/8")({name:"Contact"},f,!1,function(t){a("G5ce")},"data-v-6e4de595",null).exports,w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aboutme"},[e("v-container",[e("h1",[this._v("About Me")])])],1)},staticRenderFns:[]};var _=a("VU/8")({name:"AboutMe"},w,!1,function(t){a("vK7o")},"data-v-6695d7ef",null).exports;i.a.use(c.a);var b=new c.a({routes:[{path:"/",name:"HomePage",component:p},{path:"/blog",name:"Blog",component:v},{path:"*",name:"FourZeroFour",component:d},{path:"/aboutme",name:"About Me",component:_},{path:"/contact",name:"Contact",component:g}]}),x=a("3EgV"),k=a.n(x),y=(a("QCv7"),a("D4uH"));i.a.use(k.a),i.a.component("icon",y.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:b,components:{App:l},template:"<App/>"})},QCv7:function(t,e){},TMBr:function(t,e){},ZVvr:function(t,e){},v9UK:function(t,e){},vK7o:function(t,e){},w1iB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ea6527ee06c9b31c4cc1.js.map