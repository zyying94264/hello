webpackJsonp([0],{LmcM:function(t,e){},dXoZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),l=a.n(s),r=a("NYxO"),o=a("f8FR"),n=a.n(o),c=function(){return n.a.request({url:"mock",method:"get"})},i={data:function(){return this.$store.state.select},computed:l()({},Object(r.c)(["select"]),{isRellyShow:function(){return this.$store.getters.isShowMethod}}),methods:{scanForm:function(){this.$store.dispatch("isShowForm")},handle:function(){console.log(this.studentName)},handleClear:function(){},play:function(t){this.$Modal.info({title:"用户信息",content:"姓名："+t.name+"\n        <br>年龄："+t.age+"\n        <br>地址："+t.address})},getInitData:function(){var t=this;c().then(function(e){200==e.status&&t.$store.dispatch("getList",e.data.data.projects)})},changepage:function(t){this.select.page=t;var e=(t-1)*this.select.pageSize,a=t*this.select.pageSize;this.select.tData=this.select.ajaxHistoryData.slice(e,a)},pagesize:function(t){var e=(this.select.page-1)*t,a=this.select.page*t;this.select.tData=this.select.ajaxHistoryData.slice(e,a),this.select.pageSize=t},remove:function(t){var e=this;t.id;n.a.request({url:"mock",method:"get"}).then(function(t){200==t.status&&e.getInitData()})},search:function(){var t=this,e=this.select.keyWords;e.stuname,e.age,e.sex;c().then(function(e){t.$store.dispatch("getList",e.data.data.projects)})}},mounted:function(){this.getInitData()}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"studentSelect"},[a("div",{staticClass:"check"},[a("h2",{staticClass:"sel",on:{click:t.scanForm}},[a("Row",[a("Col",{attrs:{span:"22"}},[t._v("查询条件")]),t._v(" "),a("Col",{attrs:{span:"2"}},[a("Icon",{attrs:{type:"ios-arrow-down"}})],1)],1)],1),t._v(" "),t.isRellyShow?a("Form",{ref:"studentForm",staticClass:"formInfo",attrs:{"label-position":"right","label-width":100}},[a("Row",[a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"来源",prop:"origin"}},[a("Col",{attrs:{span:"12"}},[a("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns12,function(e,s){return a("Option",{key:s,attrs:{value:e.value}},[t._v("\n              "+t._s(e.title))])}),1)],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"用户类型",prop:"usertypes"}},[a("Col",{attrs:{span:"12"}},[a("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns12,function(e,s){return a("Option",{key:s,attrs:{value:e.value}},[t._v("\n              "+t._s(e.title))])}),1)],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"设备",prop:"service"}},[a("Col",{attrs:{span:"12"}},[a("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns12,function(e,s){return a("Option",{key:s,attrs:{value:e.value}},[t._v("\n              "+t._s(e.title))])}),1)],1)],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"学生姓名",prop:"studentname"}},[a("Col",{attrs:{span:"24"}},[a("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索","v-model":this.select.stuName},on:{"on-change":t.handle}})],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"登录名","label-position":"left",prop:"loginname"}},[a("Col",{attrs:{span:"24"}},[a("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":t.handleClear},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"用户身份","label-position":"left",prop:"userId"}},[a("Col",{attrs:{span:"12"}},[a("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns12,function(e,s){return a("Option",{key:s,attrs:{value:e.value}},[t._v("\n              "+t._s(e.title))])}),1)],1)],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"销售分中心",prop:"sale"}},[a("Col",{attrs:{span:"24"}},[a("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":t.handleClear},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"咨询师","label-position":"left",prop:"aquire"}},[a("Col",{attrs:{span:"24"}},[a("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":t.handleClear},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"网站","label-position":"left",prop:"network"}},[a("Col",{attrs:{span:"12"}},[a("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns12,function(e,s){return a("Option",{key:s,attrs:{value:e.value}},[t._v("\n              "+t._s(e.title))])}),1)],1)],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"年龄",prop:"class"}},[a("Col",{attrs:{span:"12"}},[a("Select",{staticClass:"search-col",attrs:{"v-model":this.select.tData.age}},t._l(this.select.tData,function(e,s){return a("Option",{key:s,attrs:{value:e.value}},[t._v("\n              "+t._s(e.age))])}),1)],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"注册时间","label-position":"left",prop:"register"}},[a("Col",{attrs:{span:"10"}},[a("DatePicker",{attrs:{type:"date",placeholder:"Select date"},model:{value:t.formItem.date,callback:function(e){t.$set(t.formItem,"date",e)},expression:"formItem.date"}})],1),t._v(" "),a("Col",{attrs:{span:"2",offset:"1"}}),t._v(" "),a("Col",{attrs:{span:"10"}},[a("DatePicker",{attrs:{type:"date",placeholder:"Select date"},model:{value:t.formItem.date,callback:function(e){t.$set(t.formItem,"date",e)},expression:"formItem.date"}})],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"回访提交时间","label-position":"left",prop:"submit"}},[a("Col",{attrs:{span:"10"}},[a("DatePicker",{attrs:{type:"date",placeholder:"Select date"},model:{value:t.formItem.date,callback:function(e){t.$set(t.formItem,"date",e)},expression:"formItem.date"}})],1),t._v(" "),a("Col",{attrs:{span:"2",offset:"1"}},[t._v("--")]),t._v(" "),a("Col",{attrs:{span:"10"}},[a("DatePicker",{attrs:{type:"date",placeholder:"Select date"},model:{value:t.formItem.date,callback:function(e){t.$set(t.formItem,"date",e)},expression:"formItem.date"}})],1)],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"每页显示数目",prop:"reveal"}},[a("Col",{attrs:{span:"24"}},[a("Input",{staticClass:"search-input",attrs:{clearable:"",value:t.looknum},on:{"on-change":t.handleClear},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"渠道","label-position":"left",prop:"channel"}},[a("Col",{attrs:{span:"12"}},[a("Select",{staticClass:"search-col",model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.columns12,function(e,s){return a("Option",{key:s,attrs:{value:e.value}},[t._v("\n              "+t._s(e.title))])}),1)],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("form-item",{attrs:{label:"网页地址","label-position":"left",prop:"url"}},[a("Col",{attrs:{span:"24"}},[a("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":t.handleClear},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1)],1),t._v(" "),a("form-item",{attrs:{prop:"search"}},[a("Row",[a("Col",{attrs:{span:"2",offset:"11"}},[a("Button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")])],1)],1)],1)],1):t._e()],1),t._v(" "),a("div",{staticClass:"checkout"},[a("h2",{staticClass:"sel"},[t._v("\n        查询结果\n      ")]),t._v(" "),a("Table",{attrs:{border:"",columns:t.columns12,data:this.select.tData},scopedSlots:t._u([{key:"name",fn:function(e){var s=e.row;return[a("strong",[t._v(t._s(s.name))])]}},{key:"action",fn:function(e){var s=e.row;return e.index,[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.play(s)}}},[t._v("视图")]),t._v(" "),a("Button",{attrs:{type:"error",size:"small"},on:{click:function(e){t.remove(s)}}},[t._v("删除")])]}}])}),t._v(" "),a("Page",{staticClass:"pagelist",attrs:{total:t.dataCount,"page-size":t.pageSize,"show-sizer":"","show-elevator":""},on:{"on-change":t.changepage,"on-page-size-change":t.pagesize}})],1)])},staticRenderFns:[]};var u=a("VU/8")(i,p,!1,function(t){a("LmcM")},null,null);e.default=u.exports},f8FR:function(t,e){}});
//# sourceMappingURL=0.9d4997904f3c65cec1f2.js.map