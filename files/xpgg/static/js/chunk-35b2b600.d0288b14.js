(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35b2b600"],{"0c3e":function(e,t,r){},"2f87":function(e,t,r){"use strict";var n=r("9379"),i=r.n(n);i.a},"333d":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[r("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];r("c5f6");Math.easeInOutQuad=function(e,t,r,n){return e/=n/2,e<1?r/2*e*e+t:(e--,-r/2*(e*(e-2)-1)+t)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,r){var n=o(),i=e-n,l=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=l;var o=Math.easeInOutQuad(c,n,i,t);s(o),c<t?a(e):r&&"function"===typeof r&&r()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},page_size:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.page_size},set:function(e){this.$emit("update:page_size",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,page_size:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,page_size:this.pageSize}),this.autoScroll&&l(0,800)}}},u=c,d=(r("36ff"),r("2877")),p=Object(d["a"])(u,n,i,!1,null,"16564f64",null);t["a"]=p.exports},"36ff":function(e,t,r){"use strict";var n=r("0c3e"),i=r.n(n);i.a},6724:function(e,t,r){"use strict";r("8d41");var n="@@wavesContext";function i(e,t){function r(r){var n=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),a=i.ele;if(a){a.style.position="relative",a.style.overflow="hidden";var s=a.getBoundingClientRect(),o=a.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",a.appendChild(o)),i.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(r.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(r.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=i.color,o.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=r:e[n]={removeHandle:r},r}var a={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},s=function(e){e.directive("waves",a)};window.Vue&&(window.waves=a,Vue.use(s)),a.install=s;t["a"]=a},"8d41":function(e,t,r){},9379:function(e,t,r){},d78e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"filter-container"},[r("el-row",{staticClass:"saltminion_global"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleAddRole}},[e._v("新增角色")]),e._v(" "),r("div",{staticStyle:{float:"right"}},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"角色名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")])],1)],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"Loading",data:e.rolesList,border:"",size:"medium",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[r("el-table-column",{attrs:{align:"center",prop:"id",sortable:"custom",label:"ID",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"name",sortable:"custom",label:"角色名称",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"header-center",label:"描述",width:"450"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.description)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"操作","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.handleEdit(t)}}},[e._v("编辑权限")]),e._v(" "),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,page_size:e.listQuery.page_size},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:page_size":function(t){return e.$set(e.listQuery,"page_size",t)},pagination:e.getRoles}}),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑权限":"新增角色"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"roleForm",attrs:{model:e.role,rules:e.rules,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"角色名",prop:"name",error:e.name_error}},[r("el-input",{ref:"role_name_focus",staticStyle:{width:"240px"},attrs:{placeholder:"角色名"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"描述"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户:",prop:"user_list"}},[r("el-transfer",{ref:"dataTransfer",attrs:{filterable:"","filter-placeholder":"搜索用户",titles:["用户选择","已选用户"],data:e.user_list,"target-order":"push"},model:{value:e.temp.user_list,callback:function(t){e.$set(e.temp,"user_list",t)},expression:"temp.user_list"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"菜单"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1,e.confirmLoading=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.confirmRole}},[e._v("确定")])],1)],1)],1)},i=[],a=r("cebc"),s=(r("6b54"),r("6762"),r("2fdb"),r("75fc")),o=(r("ac4d"),r("8a81"),r("ac6a"),r("96cf"),r("3b8d")),l=r("df7c"),c=r.n(l),u=r("ed08"),d=r("333d"),p=r("cc5e"),f=r("5c96"),h=r("6724"),g={id:"",name:"",description:"",routes:[]},m={name:"RolePermission",components:{Pagination:d["a"]},directives:{waves:h["a"]},data:function(){return{role:Object.assign({},g),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"},routes_id:[],rules:{name:{required:!0,message:"请输入角色名称",trigger:"blur"}},name_error:"",listLoading:!1,dialogUsersVisible:!1,user_list:[],temp:{user_list:[],role:""},total:0,listQuery:{page:1,page_size:10,id:"",name:"",ordering:""},confirmLoading:!1}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles(),this.getUsers()},methods:{getRoutes:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.listLoading=!0,e.next=3,Object(p["d"])();case 3:t=e.sent,this.serviceRoutes=t.data,this.routes=this.generateRoutes(t.data),this.listLoading=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRoles:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.listLoading=!0,e.next=3,Object(p["c"])(this.listQuery);case 3:t=e.sent,this.rolesList=t.data.results,this.total=t.data.count,this.listLoading=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getUsers:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p["e"])();case 3:t=e.sent,r=t.data,r.forEach(function(e,t){n.user_list.push({label:e.username,key:e.id})}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),f["Message"].error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}(),generateRoutes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],n=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var l=s.value;l.hidden&&(l.meta.title=l.meta.title+" (不显示在侧边栏)");var u=this.onlyOneShowingChild(l.children,l);l.children&&u&&!l.alwaysShow&&(l=u);var d={path:c.a.resolve(t,l.path),title:l.meta&&l.meta.title};l.children&&(d.children=this.generateRoutes(l.children,d.path)),r.push(d)}}catch(p){i=!0,a=p}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}return r},generateArr:function(e){var t=this,r=[];return e.forEach(function(e){if(r.push(e),e.children){var n=t.generateArr(e.children);n.length>0&&(r=[].concat(Object(s["a"])(r),Object(s["a"])(n)))}}),r},handleAddRole:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.role=Object.assign({},g),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.temp.user_list=[],this.dialogVisible=!0,this.$nextTick(function(){t.$refs.dataTransfer.clearQuery("left"),t.$refs.dataTransfer.clearQuery("right"),t.$refs["roleForm"].resetFields(),t.$refs["role_name_focus"].focus()});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleEdit:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.temp.user_list=t.row.user_list,this.$nextTick(function(){r.$refs.dataTransfer.clearQuery("left"),r.$refs.dataTransfer.clearQuery("right"),r.$refs["roleForm"].resetFields(),r.role=Object(u["b"])(t.row);var e=r.generateRoutes(r.role.routes);r.$refs.tree.setCheckedNodes(r.generateArr(e)),r.checkStrictly=!1});case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleDelete:function(e){var t=this,r=e.$index,n=e.row;this.$confirm("确认要删除该角色?","警告",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.next=3,Object(p["b"])(n.id);case 3:t.rolesList.splice(r,1),t.$message({type:"success",message:"删除成功!"}),t.listLoading=!1;case 6:case"end":return e.stop()}},e)}))).catch(function(){t.$message({type:"info",message:"取消"})})},generateTree:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments.length>2?arguments[2]:void 0,n=[],i=!0,a=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var u=o.value,d=c.a.resolve(t,u.path);u.children&&(u.children=this.generateTree(u.children,d,r)),(r.includes(d)||u.children&&u.children.length>=1)&&(n.push(u),this.routes_id.push(u.id))}}catch(p){a=!0,s=p}finally{try{i||null==l.return||l.return()}finally{if(a)throw s}}return n},confirmRole:function(){var e=this;this.$refs["roleForm"].validate(function(t){if(!t)return!1;var r="edit"===e.dialogType,n=e.$refs.tree.getCheckedKeys();if(e.name_error="",e.routes_id=[],e.role.routes=e.generateTree(Object(u["b"])(e.serviceRoutes),"/",n),r){var i=Object(u["b"])(e.role);i.routes=e.routes_id,i.user_list=e.temp.user_list,e.confirmLoading=!0,Object(p["f"])(e.role.id,i).then(function(t){if(e.confirmLoading=!1,t.data.status)e.dialogVisible=!1,f["Message"].success(t.data.results),e.getRoles();else{var r=t.data.results;if("[object Object]"===Object.prototype.toString.call(r))for(var n in r)e["".concat(n,"_error")]=r[n][0];else f["Message"].error(JSON.stringify(r))}})}else{var a=Object(u["b"])(e.role);a.routes=e.routes_id,a.user_list=e.temp.user_list,e.confirmLoading=!0,Object(p["a"])(a).then(function(t){e.confirmLoading=!1;var r=t.data;if(r.status)e.dialogVisible=!1,f["Message"].success(r.results),e.getRoles();else{var n=r.results;if("[object Object]"===Object.prototype.toString.call(n))for(var i in n)e["".concat(i,"_error")]=n[i][0];else f["Message"].error(JSON.stringify(n))}})}})},onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=null,n=e.filter(function(e){return!e.hidden});return 1===n.length?(r=n[0],r.path=c.a.resolve(t.path,r.path),r):0===n.length&&(r=Object(a["a"])({},t,{path:"",noShowingChildren:!0}),r)},handleFilter:function(){this.listQuery.page=1,this.getRoles()},sortChange:function(e){var t=e.prop,r=e.order;"name"===t?this.listQuery.ordering="ascending"===r?"name":"-name":"id"===t&&(this.listQuery.ordering="ascending"===r?"id":"-id"),this.handleFilter()}}},v=m,b=(r("2f87"),r("2877")),y=Object(b["a"])(v,n,i,!1,null,"386b09ab",null);t["default"]=y.exports}}]);