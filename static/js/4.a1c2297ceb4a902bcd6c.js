webpackJsonp([4],{EnLE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("vMJZ"),r={data:function(){return{loading:!1,query:{page:1,pageSize:6,pageNumber:1},bookData:[]}},mounted:function(){this.getListData()},methods:{getListData:function(){var t=this;this.loading=!0,n.a.getBook(this.query).then(function(e){var a=Math.ceil(e.data.data.count/t.query.pageSize);a&&(t.query.pageNumber=a),t.bookData=e.data.data.rows}).then(function(){t.loading=!1})},openUrl:function(t){t&&window.open(t)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"min-height":"600px"}},[t.bookData.length>0?a("div",[a("el-row",{attrs:{gutter:10}},t._l(t.bookData,function(e,n){return a("el-col",{key:n,staticStyle:{"margin-bottom":"10px"},attrs:{span:8}},[a("div",{on:{click:function(a){return t.openUrl(e.url)}}},[a("el-card",{staticStyle:{"font-size":"14px","text-align":"center"},attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticStyle:{width:"240px",overflow:"hidden"}},[a("img",{staticStyle:{width:"200px",height:"240px"},attrs:{src:e.cover,alt:"",lazy:"loaded"}})])])],1)])}),1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.query.page,"page-size":t.query.pageSize,total:t.query.pageNumber*t.query.pageSize},on:{"current-change":t.getListData,"update:currentPage":function(e){return t.$set(t.query,"page",e)},"update:current-page":function(e){return t.$set(t.query,"page",e)}}})],1)],1):t.bookData&&0!=t.bookData.length?t._e():a("el-card",{staticStyle:{"margin-bottom":"20px",padding:"20px 0px 20px 0px","text-align":"center"},attrs:{shadow:"never"}},[a("font",{staticStyle:{"font-size":"30px",color:"#dddddd"}},[a("b",[t._v("还没有书本资料 (╯°Д°)╯︵ ┻━┻")])])],1)],1)},staticRenderFns:[]},o=a("VU/8")(r,i,!1,null,null,null);e.default=o.exports}});
//# sourceMappingURL=4.a1c2297ceb4a902bcd6c.js.map