webpackJsonp([11],{"9ImE":function(t,e){},C7EL:function(t,e){},CMvz:function(t,e){},Hl2I:function(t,e){},IcnI:function(t,e,n){"use strict";var o,i=n("7+uW"),r=n("NYxO"),a={state:{githubUsername:"",blogTitle:"",blogDescribe:"",htmlTitle:"",fontColor:"",useBackgroundImage:!1,backgroundColorLeft:"",backgroundColorRight:"",audioUrl:"",mini:!1,webSites:[],audioAutoPlay:!1},mutations:{SET_CONFIGURATION:function(t,e){t.githubUsername=e.githubUsername||"GitHub-Fanghanjia",t.blogTitle=e.blogTitle||t.githubUsername,t.blogDescribe=e.blogDescribe||"欢迎来到"+t.githubUsername+"的个人博客。",t.htmlTitle=e.htmlTitle||t.githubUsername+"的博客",t.fontColor=e.fontColor||"#ffffff",t.useBackgroundImage=e.useBackgroundImage||!1,t.backgroundColorLeft=e.backgroundColorLeft||"#155799",t.backgroundColorRight=e.backgroundColorRight||"#159957",t.audioUrl=e.audioUrl||"",t.mini=e.mini||!1,t.webSites=e.webSites||[],t.audioAutoPlay=e.audioAutoPlay||!1,t.blogSource=e.blogSource||!1}},actions:{reloadLocal:function(t,e){(0,t.commit)("SET_CONFIGURATION",e)},initData:function(t){var e=t.commit,n=void 0;(n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("GET","../../../static/configuration.json?v="+Date.now(),!1),n.send(),e("SET_CONFIGURATION",JSON.parse(n.responseText))}}},u=n("vMJZ"),c={state:{location:null,name:null,avatarUrl:null},mutations:{SET_LOCATION:function(t,e){t.location=e},SET_AVATARURL:function(t,e){t.avatarUrl=e},SET_NAME:function(t,e){t.name=e}},actions:{getUserInfo:function(t){var e=t.commit;u.a.getInfo().then(function(t){var n=t.data;e("SET_LOCATION",n.location),e("SET_AVATARURL",n.avatar_url),e("SET_NAME",n.name)})}}},l=n("lbHh"),s=n.n(l),f=function(t,e,n){return n?s.a.set(t,e,{expires:n}):s.a.set(t,e)},d=function(t){return s.a.remove(t)},p={state:{token:function(t){return s.a.get(t)}("TOKEN_KEY")},mutations:{SET_TOKEN:function(t,e){t.token=e,f("TOKEN_KEY",e,30)},REMOVE_TOKEN:function(t){t.token=null,d("TOKEN_KEY")}},actions:{authentication:function(t,e){var n=t.commit;u.a.verifToken(e).then(function(t){var o=t.data;v.state.configuration.githubUsername==o.login?(n("SET_TOKEN",e),i.default.prototype.$notify({title:"成功",message:"Token绑定成功",type:"success"})):i.default.prototype.$message({message:"Token不一致",type:"error"})})},cancelToken:function(t){(0,t.commit)("REMOVE_TOKEN"),i.default.prototype.$message({message:"Token注销成功",type:"info"})}}},m=n("bOdI"),h=n.n(m),g=(o={token:function(t){return t.token.token},githubUsername:function(t){return t.configuration.githubUsername},blogTitle:function(t){return t.configuration.blogTitle},blogDescribe:function(t){return t.configuration.blogDescribe},htmlTitle:function(t){return t.configuration.htmlTitle},fontColor:function(t){return t.configuration.fontColor},useBackgroundImage:function(t){return t.configuration.useBackgroundImage},backgroundColorLeft:function(t){return t.configuration.backgroundColorLeft},backgroundColorRight:function(t){return t.configuration.backgroundColorRight},audioUrl:function(t){return t.configuration.audioUrl},mini:function(t){return t.configuration.mini},audioAutoPlay:function(t){return t.configuration.audioAutoPlay},webSites:function(t){return t.configuration.webSites}},h()(o,"audioUrl",function(t){return t.configuration.audioUrl}),h()(o,"blogSource",function(t){return t.configuration.blogSource}),h()(o,"location",function(t){return t.user.location}),h()(o,"avatarUrl",function(t){return t.user.avatarUrl}),h()(o,"name",function(t){return t.user.name}),o);i.default.use(r.a);var b=new r.a.Store({modules:{configuration:a,user:c,token:p},getters:g}),v=e.a=b},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i={name:"App",mounted:function(){var t=this;this.$store.dispatch("initData"),this.$store.dispatch("getUserInfo"),this.monitorHandle(),window.onresize=function(){t.monitorHandle()}},methods:{monitorHandle:function(){console.log(window.location.hash.split("/"));var t=this.$util.getWindowSize(),e=window.location.hash.split("/");"pc"==e[1]&&t.height>1.2*t.width&&this.$router.push("/mobile/mHome"),"mobile"==e[1]&&t.height<=1.2*t.width&&this.$router.push("/")}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a,u,c,l,s,f=n("VU/8")(i,r,!1,function(t){n("9ImE")},null,null).exports,d=n("YaEn"),p=n("IcnI"),m={getWindowSize:function(){var t={};return t.width=window.innerWeight||document.documentElement.clientWidth||document.body.clientWidth,t.height=window.innerWeight||document.documentElement.clientHeight||document.body.clientHeight,t},formatNumber:function(t){var e=parseInt(t),n=parseInt(e/60),o=parseInt(e%60);return(n<10?"0":"")+n+":"+(o<10?"0":"")+o},formatUTC:function(t){var e=function(t){return t>=10?t:"0"+t},n=t.split(/[^0-9]/),o=new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5]),i=new Date(o.getTime()+288e5);return e(i.getFullYear())+"-"+e(i.getMonth()+1)+"-"+e(i.getDate())+" "+e(i.getHours())+":"+e(i.getMinutes())+":"+e(i.getSeconds())},copy:function(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select();var n=void 0;try{n=document.execCommand("copy")}catch(t){}return document.body.removeChild(e),n},parseHeaders:function(t){try{for(var e=t.link.split(","),n=0;n<e.length;n++){var o=e[n];if(!(o.indexOf('rel="last"')<0))for(var i=o.split(/[\?&]/),r=0;r<i.length;r++){var a=i[r].split("=");if("page"==a[0])return parseInt(a[1])}}}catch(t){}return 0}},h=n("jn0r"),g=(n("ZsCP"),n("Fd2+")),b=(n("CMvz"),n("zL8q")),v=n.n(b),w=(n("tvR6"),n("OS1Z")),y=n.n(w),k=(n("pw1w"),n("Hl2I"),n("C7EL"),n("/hYm"),{adapter:(a=document,u=window,c=a.documentElement,l="orientationchange"in window?"orientationchange":"resize",s=function(){var t=c.clientWidth;t&&(c.style.fontSize=t>=640?"20px":t/750*100+"px")},void(a.addEventListener&&(u.addEventListener(l,s,!1),a.addEventListener("DOMContentLoaded",s,!1))))});o.default.use(g.a),o.default.use(v.a),o.default.use(y.a),o.default.prototype.$util=m,o.default.prototype.$requestHttp=h.a,o.default.prototype.$markDown=function(t){return y.a.markdownIt.render(t)},o.default.prototype.$share=function(t){t?t=(window.location+"").split("#")[0]+"#"+t:t=window.location;m.copy(t)?o.default.prototype.$confirm("链接已复制,去分享给好友吧！","分享",{showCancelButton:!1,showClose:!1,type:"success"}):o.default.prototype.$confirm("链接复制失败,可能由于浏览器不兼容！","分享",{showCancelButton:!1,showClose:!1,type:"warning"})},o.default.prototype.$adapter=k,o.default.config.productionTip=!1,new o.default({el:"#app",router:d.b,store:p.a,components:{App:f},template:"<App/>"})},YaEn:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n("7+uW"),i=n("/ocq");o.default.use(i.a);var r=[{path:"/",redirect:"/pc/pHome"},{path:"/pc/pHome",redirect:"/pc/pHome/new",component:function(t){return Promise.all([n.e(1),n.e(0)]).then(function(){var e=[n("sfhk")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"pHome",meta:{type:"user",icon:"el-icon-star-off",title:"最新动态"},children:[{path:"new",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("8BV/")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"new",meta:{title:"最新动态"}}]},{path:"/pc/blog",redirect:"/pc/blog/blogMain",component:function(t){return Promise.all([n.e(1),n.e(0)]).then(function(){var e=[n("sfhk")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"blog",meta:{type:"user",icon:"el-icon-edit-outline",title:"博客列表"},children:[{path:"blogMain",component:function(t){return Promise.all([n.e(3),n.e(0)]).then(function(){var e=[n("WxwT")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"blogMain",meta:{title:"博客列表"}},{path:"details/:id",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){var e=[n("DcjJ")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"details",meta:{title:"博客详情"}},{path:"blogAdd",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){var e=[n("3Nl4")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"blogAdd",meta:{title:"发表博客"}},{path:"blogEdit/:id",component:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("3X5T")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"blogEdit",meta:{title:"博客编辑"}}]},{path:"/pc/bookShelf",redirect:"/pc/bookShelf/bookMain",component:function(t){return Promise.all([n.e(1),n.e(0)]).then(function(){var e=[n("sfhk")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"bookShelf",meta:{type:"user",icon:"el-icon-tickets",title:"书架"},children:[{path:"bookMain",component:function(t){return n.e(5).then(function(){var e=[n("EnLE")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"bookMain",meta:{title:"书架"}}]},{path:"/pc/system",redirect:"/pc/system/systemMain",component:function(t){return Promise.all([n.e(1),n.e(0)]).then(function(){var e=[n("sfhk")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"system",meta:{type:"user",icon:"el-icon-setting",title:"系统配置",LoginRequired:!0},children:[{path:"systemMain",component:function(t){return n.e(2).then(function(){var e=[n("fAB7")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"systemMain",meta:{title:"系统配置"}}]},{path:"/mobile/mHome",component:function(t){return n.e(9).then(function(){var e=[n("Cokh")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"mHome",meta:{title:"首页"}}],a=new i.a({routes:r});a.beforeEach(function(t,e,n){document.title=t.meta.title,n()}),e.b=a},ZsCP:function(t,e){},jn0r:function(t,e,n){"use strict";var o=n("//Fk"),i=n.n(o),r=n("mtWM"),a=n.n(r),u=n("7+uW"),c=n("IcnI"),l=a.a.create({baseURL:"https://api.github.com",timeout:8e3});l.interceptors.request.use(function(t){if(t.url.startsWith("http"))t.baseURL="";else{var e=c.a.state.token.token;if(e){var n="?";t.url.indexOf("?")>=0&&(n="&"),t.url=t.url+n+"access_token="+e+"&v="+Date.now()}else{var o="?";t.url.indexOf("?")>=0&&(o="&"),t.url=t.url+o+"v="+Date.now()}}return t},function(t){}),l.interceptors.response.use(function(t){t.data;return t},function(t){var e=void 0;switch(t.response.status){case 401:e="Token错误";break;default:e=t.response.data.message}return u.default.prototype.$message({message:e,type:"error"}),i.a.reject("error")}),e.a=l},pw1w:function(t,e){},tvR6:function(t,e){},vMJZ:function(t,e,n){"use strict";var o=n("jn0r"),i=n("IcnI");e.a={verifToken:function(t){return Object(o.a)({url:"/user?access_token="+t})},getInfo:function(){var t=i.a.state.configuration.githubUsername;return Object(o.a)({url:"/users/"+t})},getBook:function(t){return Object(o.a)({url:"https://www.jiangshuaijie.com/server/api/v1/book/index?page="+t.page+"&pageSize="+t.pageSize})}}}},["NHnr"]);