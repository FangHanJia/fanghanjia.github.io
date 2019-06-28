webpackJsonp([3],{fAB7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("mvHQ"),n=o.n(r),a=o("Dd8w"),i=o.n(a),c=o("NYxO"),l=o("jn0r"),u=o("IcnI"),s=function(){var e=u.a.state.configuration.githubUsername;return Object(l.a)({url:"/repos/"+e+"/"+e+".github.io/contents/static/configuration.json"})},f=function(e,t){var r=u.a.state.configuration.githubUsername,a=n()(e);return Object(l.a)({url:"/repos/"+r+"/"+r+".github.io/contents/static/configuration.json",method:"PUT",data:{message:"update-system",content:o("xrTZ").Base64.encode(a),sha:t}})},d={data:function(){return{loading:!1,configure:{webSites:[]},initConfigure:{},configureSha:"",rules:{githubUsername:[{required:!0,message:"请输入用户名",trigger:"blur"}],blogTitle:[{required:!0,message:"请输入博客标题",trigger:"blur"}],blogDescribe:[{required:!0,message:"请输入博客描述",trigger:"blur"}]},activeTab:"base",predefineColors:["#ff4500","#ff8c00","#ffd700","#CCFC2D","#90ee90","#2DFCA6","#00ced1","#1e90ff","#c71585","#FC2DEB"],submitButton:{loading:!1,disabled:!1}}},computed:i()({},Object(c.b)(["token"])),mounted:function(){var e=this;this.token?(this.loading=!0,s().then(function(t){var r=t.data,a=o("xrTZ").Base64.decode(r.content);e.configure=JSON.parse(a),e.configure.webSites||e.$set(e.configure,"webSites",[]),e.initConfigure=JSON.parse(n()(e.configure)),e.configureSha=r.sha}).then(function(){e.loading=!1})):this.$nextTick(function(){e.$message({message:"权限不足",type:"error"}),e.$router.go(-1)})},methods:{removeWebSites:function(e){this.configure.webSites.splice(e,1)},addWebSites:function(){this.configure.webSites.length>=5?this.$message("站点太多，显示效果不好"):this.configure.webSites.push({})},submitHandle:function(){var e=this;this.$refs.configureForm.validate(function(t){t&&(e.submitButton.loading=!0,e.submitButton.disabled=!0,f(e.configure,e.configureSha).then(function(t){var o=t.data;e.configureSha=o.content.sha,e.initConfigure=JSON.parse(n()(e.configure)),e.$store.dispatch("reloadLocal",e.configure),e.$notify({title:"成功",message:"修改配置成功",type:"success"})}).then(function(){e.submitButton.loading=!1,e.submitButton.disabled=!1}))})},resetHandle:function(){this.configure=JSON.parse(n()(this.initConfigure))}}},b={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"min-height":"800px"}},[o("el-card",{staticStyle:{"min-height":"400px","margin-bottom":"20px"},attrs:{shadow:"never"}},[o("el-form",{ref:"configureForm",attrs:{model:e.configure,rules:e.rules,"label-width":"100px"}},[o("el-tabs",{attrs:{type:"card"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[o("el-tab-pane",{staticStyle:{padding:"5px"},attrs:{label:"基础配置",name:"base"}},[o("el-form-item",{attrs:{label:"用户名",prop:"githubUsername"}},[o("el-input",{attrs:{disabled:""},model:{value:e.configure.githubUsername,callback:function(t){e.$set(e.configure,"githubUsername",t)},expression:"configure.githubUsername"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"博客标题",prop:"blogTitle"}},[o("el-input",{attrs:{placeholder:e.configure.githubUsername},model:{value:e.configure.blogTitle,callback:function(t){e.$set(e.configure,"blogTitle",t)},expression:"configure.blogTitle"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"博客描述",prop:"blogDescribe"}},[o("el-input",{attrs:{placeholder:"欢迎来到"+e.configure.githubUsername+"的个人博客。"},model:{value:e.configure.blogDescribe,callback:function(t){e.$set(e.configure,"blogDescribe",t)},expression:"configure.blogDescribe"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"页面标题",prop:"htmlTitle"}},[o("el-input",{attrs:{placeholder:e.configure.githubUsername+"的博客"},model:{value:e.configure.htmlTitle,callback:function(t){e.$set(e.configure,"htmlTitle",t)},expression:"configure.htmlTitle"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"音乐链接",prop:"audioUrl"}},[o("el-input",{attrs:{placeholder:"背景音乐链接"},model:{value:e.configure.audioUrl,callback:function(t){e.$set(e.configure,"audioUrl",t)},expression:"configure.audioUrl"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"自动播放"}},[o("el-switch",{model:{value:e.configure.audioAutoPlay,callback:function(t){e.$set(e.configure,"audioAutoPlay",t)},expression:"configure.audioAutoPlay"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"极简模式"}},[o("el-switch",{model:{value:e.configure.mini,callback:function(t){e.$set(e.configure,"mini",t)},expression:"configure.mini"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"使用背景图"}},[o("el-switch",{model:{value:e.configure.useBackgroundImage,callback:function(t){e.$set(e.configure,"useBackgroundImage",t)},expression:"configure.useBackgroundImage"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"文字颜色"}},[o("el-color-picker",{model:{value:e.configure.fontColor,callback:function(t){e.$set(e.configure,"fontColor",t)},expression:"configure.fontColor"}})],1),e._v(" "),e.configure.useBackgroundImage?e._e():o("div",[o("el-row",[o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{label:"背景颜色"}},[o("el-color-picker",{attrs:{predefine:e.predefineColors},model:{value:e.configure.backgroundColorLeft,callback:function(t){e.$set(e.configure,"backgroundColorLeft",t)},expression:"configure.backgroundColorLeft"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:21}},[o("el-form-item",[o("el-color-picker",{attrs:{predefine:e.predefineColors},model:{value:e.configure.backgroundColorRight,callback:function(t){e.$set(e.configure,"backgroundColorRight",t)},expression:"configure.backgroundColorRight"}})],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"效果",prop:"htmlTitle"}},[o("div",{style:"background-image: linear-gradient(120deg, "+e.configure.backgroundColorLeft+", "+e.configure.backgroundColorRight+");border-radius: 5px;border: 1px solid #F2F6FC;width:300px;height:100px;"},[o("div",{style:"color: "+e.configure.fontColor+";text-align: center;padding-top:25px;font-size:35px"},[o("b",[e._v("标题")])])])])],1),e._v(" "),e.configure.useBackgroundImage?o("div",[o("el-form-item",{attrs:{label:"背景图片"}},[o("el-upload",{attrs:{action:"","auto-upload":!1,drag:""}},[o("i",{staticClass:"el-icon-upload"}),e._v(" "),o("div",[e._v("将文件拖到此处 (暂不支持上传图片)")])])],1)],1):e._e()],1),e._v(" "),o("el-tab-pane",{staticStyle:{padding:"5px"},attrs:{label:"扩展配置",name:"extend"}},[o("el-form-item",{attrs:{label:"其他网站"}},[e._l(e.configure.webSites,function(t,r){return o("el-row",{key:"webSites"+r,staticStyle:{"margin-bottom":"10px"}},[o("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:8}},[o("el-input",{attrs:{placeholder:"网站名字 例如: V2EX"},model:{value:e.configure.webSites[r].name,callback:function(t){e.$set(e.configure.webSites[r],"name",t)},expression:"configure.webSites[index].name"}})],1),e._v(" "),o("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:14}},[o("el-input",{attrs:{placeholder:"完整URL 例如: https://..."},model:{value:t.url,callback:function(o){e.$set(t,"url",o)},expression:"item.url"}})],1),e._v(" "),o("el-col",{attrs:{span:2}},[o("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-delete",type:"danger",circle:""},on:{click:function(t){return e.removeWebSites(r)}}})],1)],1)}),e._v(" "),o("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-plus",type:"success",circle:""},on:{click:e.addWebSites}})],2)],1)],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{loading:e.submitButton.loading,disabled:e.submitButton.disabled,type:"primary"},on:{click:e.submitHandle}},[e._v("修改配置")]),e._v(" "),o("el-button",{on:{click:e.resetHandle}},[e._v("还原")]),e._v(" "),o("el-popover",{attrs:{placement:"top-end",width:"200",trigger:"hover",content:"打开极简模式将隐藏部分不主要的菜单, 音乐链接需要是媒体 (不可以是HTML页面)"}},[o("el-button",{staticStyle:{float:"right"},attrs:{slot:"reference",icon:"el-icon-question",type:"text"},slot:"reference"},[e._v("说明")])],1)],1)],1)],1)],1)},staticRenderFns:[]},g=o("VU/8")(d,b,!1,null,null,null);t.default=g.exports},xrTZ:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){module.exports=t(e)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.1",buffer;if(void 0!==module&&module.exports)try{buffer=eval("require('buffer').Buffer")}catch(e){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},o=0,r=e.length;o<r;o++)t[e.charAt(o)]=o;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],o=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[b64chars.charAt(o>>>18),b64chars.charAt(o>>>12&63),t>=2?"=":b64chars.charAt(o>>>6&63),t>=1?"=":b64chars.charAt(63&o)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e)).toString("base64")}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e)).toString("base64")}:function(e){return btoa(utob(e))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,function(e){return"+"==e?"-":"_"}).replace(/=/g,""):_encode(String(e))},encodeURI=function(e){return encode(e,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,o=t%4,r=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),n=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return n.length-=[0,0,2,1][o],n.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,function(e){return"-"==e?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(e){return encode(this,e)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global.Meteor&&(Base64=global.Base64),void 0!==module&&module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(exports,__webpack_require__("DuR2"))}});