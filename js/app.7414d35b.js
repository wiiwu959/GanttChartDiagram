(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/GanttChartDiagram/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"0b26":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAMtJREFUWEftl9ENgzAMRB8TFDbpBi0bdJMyQpmIFehG7QStLOUXhDhHshTzkx8cPd3ZPqUj+NcF5yMBVYe8FHwAT+AK9MAKzOWUGD0ADW7ZoBhVSA9AU+u2AfgG7oqEHoC/HYAPMEQG/JaePM3ooWB4i8MPidlnkFNZMxfAhuOlTrBd7GHx6f46UpiAR1Ta+6cZBTOLlVYJv6gzixV7rTa8xZnFqsVV65tJkmoqNqNgZrHSQ+EXdWaxYm9msdcezHex2ofV6r0sbhfwD6WkNilWZR5iAAAAAElFTkSuQmCC"},"432e":function(t,e,a){"use strict";var n=a("9c98"),i=a.n(n);i.a},"4ffd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABHNCSVQICAgIfAhkiAAAArxJREFUaEPtmr9rU1EUxz8ngkPbRUUUEVpFioMKBsQfYJGaGAfR1V+bgnXSLuqfYEHQTRdFRBA3BweTpiDBqogGERV0UHSwOqgFfwyCPfISS5Mmae7NTXgvj/sgS9753nO+53vuuRfeERo9ed2HshUliZAEVja0DeOFMoVQRCmS4AkpuVsvDKn5M6trEG4i7Agj7pZ9Kg9RjpKR95VrVBPM6XGEi0Bfy47CBf4ETpGWa7NhzBHM6QjC5XDja5N35SR75EqwWplgXtcywwuE3ja5CHcZ5RcJNpGSd4KqMM6DrttzzVKoTJJmpzCu24BHzey79P32gOBpKDWWOD6jAcE7wIE4sgNuBwQ/AytiSvBDQFBjSq5EyxM0UTezDIaXVFu+/Q1XP5mgwRW/kJe2KDi2Ds4MVLuZ+AapohlBV7wnaJbnxlauCrjivYJewSYZcC0xV3zbSjSfhN1LXfV2w9t0Z+uD3hN0E8cI7RWclyarm8yxVTDYU5vo9b2wf3n1/89/QO6rkSjY4G2ugNZ7sFG4rl3QFd+2LuoJVmTAphl4Bc22cl0rqybjS7QiA65d1KbEQ2kyDlVVgnqChhns2B409N/QzCtomMGOKWijgD8HDdWqZ+YVNEmea4m54kM5B2O/B/1Npknt21RAKCVqsncXsvEEDTPYsWPC0H/3XtVsSiz2x8S5ARhZXS3m5DQceelaB+VP2M5DCJ38QutI8UtA8B6QcVwoqvCskNfzKGejGqFTXMJYQPAgyi2nhaIKFg4JT7WH7zwGNkY1zpbiUl7Rx5byOGVWNyA8Q1jc0mJRAyl/SLCZlLyeG4iN11DeKGm5FOR9/kjzCYQLXTzSPP1/pPnGbFHVDqVPaD8zXAd2Ra3ymsRzn78cZq9MVdrVEpx9m9dBZhhCGILSrz9ihD+iFBAKLKLAsLypF98/k+O0m/Cn8vAAAAAASUVORK5CYII="},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={name:"app"},r=o,l=(a("034f"),a("2877")),c=Object(l["a"])(r,i,s,!1,null,null,null),u=c.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gantt-app"},[n("div",{staticClass:"bar"},[n("div",{staticClass:"left"},[n("button",{staticClass:"export-item button",on:{click:function(e){return t.zoom("in")}}},[n("img",{attrs:{src:a("d3b1"),alt:""}})]),n("button",{staticClass:"export-item button",on:{click:function(e){return t.zoom("out")}}},[n("img",{attrs:{src:a("71f6"),alt:""}})])]),n("div",{staticClass:"right"},[n("button",{staticClass:"button",on:{click:function(e){t.exportListOn=!t.exportListOn}}},[t._v(" 輸出 "),!0===t.exportListOn?n("ul",{staticClass:"export-list",on:{click:function(e){t.exportListOn=!1}}},[n("li",{staticClass:"export-item",on:{click:function(e){return t.exportFile("pdf")}}},[t._v("Export to PDF")]),n("li",{staticClass:"export-item",on:{click:function(e){return t.exportFile("png")}}},[t._v("Export to PNG")])]):t._e()]),n("button",{staticClass:"button",on:{click:function(e){return t.saveFile()}}},[n("img",{attrs:{src:a("a3de"),alt:""}})]),n("button",{staticClass:"button",on:{click:function(e){return t.exit()}}},[n("img",{attrs:{src:a("5b5e"),alt:""}})])])]),n("div",{ref:"gantt",staticClass:"left-container"})])},f=[],m=a("6bfb"),A=a.n(m),h=(a("f44c"),a("4c77"),a("59ca")),g=a.n(h),v=(a("ea7b"),a("66ce"),{apiKey:"AIzaSyAjaQz8rNEcyRX1CDQnfT41Qvx8ypfWFN0",authDomain:"vueproject-307f3.firebaseapp.com",databaseURL:"https://vueproject-307f3.firebaseio.com",projectId:"vueproject-307f3",storageBucket:"vueproject-307f3.appspot.com",messagingSenderId:"965270400261",appId:"1:965270400261:web:82ab127529a939483c1b6c",measurementId:"G-RDP5JZKYE0"}),C=g.a.initializeApp(v),b=C,x={name:"Gantt",data:function(){return{file:{},data:{},exportListOn:!1}},beforeMount:function(){var t=this;A.a.$_eventsInitialized||(A.a.attachEvent("onTaskSelected",(function(e){var a=A.a.getTask(e);t.$emit("task-selected",a)})),A.a.attachEvent("onAfterTaskAdd",(function(e,a){t.$emit("task-updated",e,"inserted",a),a.progress=a.progress||0,A.a.getSelectedId()==e&&t.$emit("task-selected",a)})),A.a.attachEvent("onAfterTaskUpdate",(function(e,a){t.$emit("task-updated",e,"updated",a)})),A.a.attachEvent("onAfterTaskDelete",(function(e){t.$emit("task-updated",e,"deleted"),A.a.getSelectedId()||t.$emit("task-selected",null)})),A.a.attachEvent("onAfterLinkAdd",(function(e,a){t.$emit("link-updated",e,"inserted",a)})),A.a.attachEvent("onAfterLinkUpdate",(function(e,a){t.$emit("link-updated",e,"updated",a)})),A.a.attachEvent("onAfterLinkDelete",(function(e,a){t.$emit("link-updated",e,"deleted")})),A.a.$_eventsInitialized=!0,A.a.config.open_tree_initially=!0,A.a.ext.zoom.init({levels:[{name:"day",scale_height:27,min_column_width:80,scales:[{unit:"day",step:1,format:"%M %d日"}]},{name:"week",scale_height:50,min_column_width:50,scales:[{unit:"week",step:1,format:function(t){var e=A.a.date.date_to_str("%M %d日"),a=A.a.date.add(t,-6,"day");A.a.date.date_to_str("%W")(t);return e(t)+" - "+e(a)}},{unit:"day",step:1,format:"%j %D"}]},{name:"month",scale_height:50,min_column_width:120,scales:[{unit:"month",format:"%F, %Y"},{unit:"week",format:"Week #%W"}]},{name:"quarter",height:50,min_column_width:90,scales:[{unit:"month",step:1,format:"%M"},{unit:"quarter",step:1,format:function(t){var e=A.a.date.date_to_str("%M"),a=A.a.date.add(A.a.date.add(t,3,"month"),-1,"day");return e(t)+" - "+e(a)}}]},{name:"year",scale_height:50,min_column_width:30,scales:[{unit:"year",step:1,format:"%Y"}]}]}),A.a.ext.zoom.setLevel("month"))},mounted:function(){this.file=this.$route.params.file,this.data=this.$route.params.data,A.a.init(this.$refs.gantt),this.file.tasks&&A.a.parse(this.file.tasks);var t=document.createElement("script");t.setAttribute("src","https://export.dhtmlx.com/gantt/api.js"),document.head.appendChild(t),A.a.render()},methods:{saveFile:function(){var t=this;this.file.tasks=A.a.serialize(),b.auth().onAuthStateChanged((function(e){if(e){for(var a=new Date,n=a.getTime(),i=0;i<t.data.files.length;i++)if(t.data.files[i].id===t.file.id){t.data.files[i]=JSON.parse(JSON.stringify(t.file)),t.data.files[i].updateTime=n;break}b.database().ref(e.uid).set(t.data).then((function(){})).catch((function(t){console.log(t)}))}}))},exit:function(){var t=this;if(JSON.stringify(this.file.tasks)!==JSON.stringify(A.a.serialize())){var e=confirm("您有未儲存的內容，是否要儲存？");e?(this.saveFile(),t.$router.push({name:"file",params:{path:t.file.path,pathList:t.file.pathList}})):this.$router.push({name:"file",params:{path:t.file.path,pathList:t.file.pathList}})}else this.$router.push({name:"file",params:{path:t.file.path,pathList:t.file.pathList}})},exportFile:function(t){switch(t){case"pdf":A.a.exportToPDF();break;case"png":A.a.exportToPNG();break}},zoom:function(t){"in"===t?A.a.ext.zoom.zoomIn():A.a.ext.zoom.zoomOut()}}},w=x,k=(a("432e"),Object(l["a"])(w,d,f,!1,null,"42a63416",null)),I=k.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bar"},[n("button",{staticClass:"menu-button",class:{"menu-on":t.menuOn},on:{click:function(e){t.menuOn=!t.menuOn}}},[n("img",{attrs:{src:a("c6ab")}})]),n("ul",{staticClass:"path"},[n("span",[t._v("當前資料夾：")]),t._l(t.pathList,(function(e,a){return n("li",{key:a,staticClass:"path-link",on:{click:function(e){return t.changePath(a)}}},[t._v(t._s(e))])}))],2)]),n("div",{staticClass:"wrap"},[t.menuOn?n("aside",{staticClass:"menu"},[n("ul",{staticClass:"menu-list"},[n("li",{staticClass:"menu-item",on:{click:function(e){return t.createFile("folder")}}},[t._v("新增資料夾")]),n("li",{staticClass:"menu-item",on:{click:function(e){return t.createFile("file")}}},[t._v("新增檔案")])])]):t._e(),n("main",{staticClass:"main"},[n("div",{staticClass:"folders"},[t._m(0),n("ul",{staticClass:"list"},t._l(t.folderList,(function(e,i){return n("li",{key:i,staticClass:"list-item",class:{active:0===t.optionOn},on:{click:function(a){return t.openFolder(e)}}},[n("div",{staticClass:"left"},[n("span",{staticClass:"name"},[t._v(t._s(e.name))]),n("span",{staticClass:"last-time"},[t._v(t._s(t._f("dateFormat")(e.updateTime)))]),n("span",{staticClass:"created-time"},[t._v(t._s(t._f("dateFormat")(e.createTime)))])]),n("button",{staticClass:"option-button",on:{click:function(a){a.stopPropagation(),t.optionOn=e.id}}},[n("img",{attrs:{src:a("0b26"),alt:"選項按鈕"}})]),t.optionOn===e.id?n("ul",{staticClass:"option-list"},[n("li",{staticClass:"option-list-item",on:{click:function(a){a.stopPropagation(),t.renameFile(e),t.optionOn=null}}},[t._v("重新命名")]),n("li",{staticClass:"option-list-item",on:{click:function(a){a.stopPropagation(),t.copyFile(e),t.optionOn=null}}},[t._v("複製資料夾")]),n("li",{staticClass:"option-list-item",on:{click:function(a){a.stopPropagation(),t.deleteFile(e),t.optionOn=null}}},[t._v("刪除資料夾")])]):t._e()])})),0)]),n("div",{staticClass:"files"},[t._m(1),n("ul",{staticClass:"list"},t._l(t.fileList,(function(e,i){return n("li",{key:i,staticClass:"list-item",class:{active:1===t.optionOn},on:{click:function(a){return t.openFile(e)}}},[n("div",{staticClass:"left"},[n("span",{staticClass:"name"},[t._v(t._s(e.name))]),n("span",{staticClass:"last-time"},[t._v(t._s(t._f("dateFormat")(e.updateTime)))]),n("span",{staticClass:"created-time"},[t._v(t._s(t._f("dateFormat")(e.createTime)))])]),n("button",{staticClass:"option-button",on:{click:function(a){a.stopPropagation(),t.optionOn=e.id}}},[n("img",{attrs:{src:a("0b26"),alt:"選項按鈕"}})]),t.optionOn===e.id?n("ul",{staticClass:"option-list"},[n("li",{staticClass:"option-list-item",on:{click:function(a){a.stopPropagation(),t.renameFile(e),t.optionOn=null}}},[t._v("重新命名")]),n("li",{staticClass:"option-list-item",on:{click:function(a){a.stopPropagation(),t.copyFile(e),t.optionOn=null}}},[t._v("複製檔案")]),n("li",{staticClass:"option-list-item",on:{click:function(a){a.stopPropagation(),t.deleteFile(e),t.optionOn=null}}},[t._v("刪除檔案")])]):t._e()])})),0)])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",{staticClass:"name"},[t._v("資料夾")]),a("span",{staticClass:"last-time"},[t._v("上次儲存時間")]),a("span",{staticClass:"created-time"},[t._v("建立時間")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",{staticClass:"name"},[t._v("檔案")]),a("span",{staticClass:"last-time"},[t._v("上次儲存時間")]),a("span",{staticClass:"created-time"},[t._v("建立時間")])])}],S=(a("fb6a"),a("a434"),a("b0c0"),a("d3b7"),a("25f0"),a("5319"),{name:"file",data:function(){return{mainWidth:"".concat(window.innerWidth,"px"),menuOn:!1,optionOn:null,path:this.$route.params.path||"/",pathList:this.$route.params.pathList||["/"],data:{},folderList:[],fileList:[]}},filters:{dateFormat:function(t){return t=new Date(t),t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()}},methods:{createID:function(){var t=Date.now();return"undefined"!==typeof performance&&"function"===typeof performance.now&&(t+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var a=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?a:3&a|8).toString(16)}))},updateDatabase:function(){var t=this;b.auth().onAuthStateChanged((function(e){e&&b.database().ref(e.uid).set(t.data).then((function(){})).catch((function(t){alert(t)}))}))},createFile:function(t){var e=this,a=new Date,n=a.getTime();"folder"===t?e.data.files.push({id:"folder-"+e.createID(),path:e.path,pathList:e.pathList.slice(),name:"新資料夾",type:"folder",updateTime:n,createTime:n}):"file"===t&&e.data.files.push({id:"file-"+e.createID(),path:e.path,pathList:e.pathList.slice(),name:"新檔案",type:"file",tasks:{},createTime:n,updateTime:n}),this.updateDatabase()},copyFile:function(t){var e=this,a=new Date,n=a.getTime();"folder"===t.type?e.data.files.push({id:"folder-"+e.createID(),path:t.path,pathList:t.pathList.slice(),name:t.name+" - 複製",type:"folder",createTime:n,updateTime:n}):"file"===t.type&&e.data.files.push({id:"folder-"+e.createID(),path:t.path,pathList:t.pathList.slice(),name:t.name+" - 複製",tasks:{},type:"file",createTime:n,updateTime:n}),this.updateDatabase()},deleteFile:function(t){for(var e=this.data.files.length,a=0;a<e;a++)if(this.data.files[a].id===t.id){this.data.files.splice(a,1);break}this.updateDatabase()},renameFile:function(t){var e=prompt("請輸入新名稱");if(""!=e){for(var a=new Date,n=a.getTime(),i=this.data.files.length,s=0;s<i;s++)if(this.data.files[s].id===t.id){this.data.files[s].name=e,this.data.files[s].updateTime=n;break}this.updateDatabase()}},updateList:function(){var t=this.data.files.length;this.fileList=[],this.folderList=[];for(var e=0;e<t;e++){var a=this.data.files[e];this.path===a.path&&("file"===a.type?this.fileList.push(a):"folder"===a.type&&this.folderList.push(a))}},openFolder:function(t){this.path!=t.path+t.name+"/"&&(this.path=t.path+t.name+"/",void 0!=t.pathList?this.pathList=t.pathList.slice():this.pathList=[],this.pathList.push(t.name+"/"),this.updateList())},openFile:function(t){this.$router.push({name:"gantt",params:{file:t,data:this.data}})},changePath:function(t){for(var e="",a=0;a<=t;a++)e+=this.pathList[a];for(var n=0;n<this.data.files.length;n++)if("folder"===this.data.files[n].type){var i=this.data.files[n].path+this.data.files[n].name+"/";if(i===e){this.openFolder(this.data.files[n]);break}}}},beforeMount:function(){var t=this;b.auth().onAuthStateChanged((function(e){e&&b.database().ref(e.uid).on("value",(function(e){t.data=e.val(),t.updateList()}))}))},mounted:function(){var t=this;window.addEventListener("click",(function(e){var a=e.target.nodeName;"IMG"!=a&&"BUTTON"!=a&&(t.optionOn=null)}))}}),_=S,D=(a("dc51"),Object(l["a"])(_,E,y,!1,null,"36c3b81c",null)),O=D.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[n("header",{staticClass:"header"},[n("img",{staticClass:"gantt-logo",attrs:{src:a("4ffd")}}),null!==t.userInformation?n("span",{staticClass:"hello"},[t._v(t._s(t._f("greetFormat")(t.userInformation.nickname||"")))]):t._e(),null!==t.userInformation?n("button",{staticClass:"signout-button",on:{click:function(e){return t.signOut()}}},[t._v("登出")]):t._e()]),n("router-view")],1)},B=[],V={name:"index",data:function(){return{userInformation:null}},filters:{greetFormat:function(t){new Date;if(""!==t)switch(Math.round(Math.random())){case 0:return t+"，今天打算做什麼呢？";case 1:return"嗨！"+t}}},methods:{signOut:function(){var t=this;b.auth().signOut().then((function(){t.userInformation=null,t.$router.push({name:"signin"})})).catch((function(t){alert(t)}))}},mounted:function(){var t=this,e=b.database();b.auth().onAuthStateChanged((function(a){a?e.ref(a.uid).on("value",(function(e){t.userInformation=e.val().userInformation})):t.userInformation=null}))}},T=V,L=(a("9ac0"),Object(l["a"])(T,F,B,!1,null,"4cc21fe6",null)),M=L.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all",attrs:{id:"vue-app"}},[a("div",{staticClass:"top-bar"}),a("div",{staticClass:"main"},[a("ul",{staticClass:"menu"},[a("li",{staticClass:"li"},[a("router-link",{staticClass:"button",attrs:{to:"/signup",id:"signup-button"}},[t._v("註冊")])],1),a("li",{staticClass:"li"},[a("router-link",{staticClass:"button",attrs:{to:"/signin",id:"login-button"}},[t._v("登入")])],1)]),a("form",{staticClass:"form"},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"email"}},[t._v("信箱：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newInput.username,expression:"newInput.username"}],staticClass:"email",attrs:{id:"email",type:"email",placeholder:"請輸入信箱",required:""},domProps:{value:t.newInput.username},on:{input:function(e){e.target.composing||t.$set(t.newInput,"username",e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"password"}},[t._v("密碼：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newInput.password,expression:"newInput.password"}],staticClass:"password",attrs:{id:"password",type:"password",placeholder:"請輸入密碼",required:""},domProps:{value:t.newInput.password},on:{input:function(e){e.target.composing||t.$set(t.newInput,"password",e.target.value)}}})]),a("div",{staticClass:"field"},[a("input",{staticClass:"submit",attrs:{type:"button",value:"送出"},on:{click:function(e){return t.signIn()}}})])])])])},Q=[],z=(b.auth(),{name:"signin",data:function(){return{newInput:{username:"",password:""}}},methods:{signIn:function(){var t=this;b.auth().signInWithEmailAndPassword(this.newInput.username,this.newInput.password).then((function(e){alert("登入成功！"),t.$router.push({path:"/redirect"})})).catch((function(t){switch(t.code){case"auth/invalid-email":alert("帳號格式錯誤。");break;case"auth/user-disabled":alert("帳戶被停用");break;case"auth/user-not-found":alert("帳號不存在。");break;case"auth/wrong-password":alert("密碼錯誤。");break}}))}}}),j=z,R=(a("cf85"),Object(l["a"])(j,N,Q,!1,null,"eb094708",null)),J=R.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all",attrs:{id:"vue-app"}},[a("div",{staticClass:"top-bar"}),a("div",{staticClass:"main"},[a("ul",{staticClass:"menu"},[a("li",{staticClass:"li"},[a("router-link",{staticClass:"button",attrs:{to:"/signup",id:"signup-button"}},[t._v("註冊")])],1),a("li",{staticClass:"li"},[a("router-link",{staticClass:"button",attrs:{to:"/signin",id:"login-button"}},[t._v("登入")])],1)]),a("form",{staticClass:"form"},[t._m(0),a("div",{staticClass:"field"},[a("label",{attrs:{for:"nickname"}},[t._v("暱稱：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newInput.nickname,expression:"newInput.nickname"}],staticClass:"text",attrs:{id:"nickname",type:"text",placeholder:"請輸入暱稱",required:""},domProps:{value:t.newInput.nickname},on:{input:function(e){e.target.composing||t.$set(t.newInput,"nickname",e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"email"}},[t._v("信箱：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newInput.username,expression:"newInput.username"}],staticClass:"email",attrs:{id:"email",type:"email",placeholder:"請輸入信箱",required:""},domProps:{value:t.newInput.username},on:{input:function(e){e.target.composing||t.$set(t.newInput,"username",e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"password"}},[t._v("密碼：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newInput.password,expression:"newInput.password"}],staticClass:"password",attrs:{id:"password",type:"password",placeholder:"請輸入密碼",required:""},domProps:{value:t.newInput.password},on:{input:function(e){e.target.composing||t.$set(t.newInput,"password",e.target.value)}}})]),a("div",{staticClass:"field"},[a("input",{staticClass:"submit",attrs:{type:"button",value:"送出"},on:{click:function(e){return t.signUp()}}})])])])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"greet"},[t._v(" 歡迎來到 Gantt Chart Editor ^^"),a("br"),t._v(" 註冊帳號，立即開始使用吧！ ")])}],K=b.database(),G={name:"signup",data:function(){return{newInput:{username:"",password:"",nickname:""}}},methods:{createID:function(){var t=Date.now();return"undefined"!==typeof performance&&"function"===typeof performance.now&&(t+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var a=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?a:3&a|8).toString(16)}))},signUp:function(){var t=this,e=this;b.auth().createUserWithEmailAndPassword(this.newInput.username,this.newInput.password).then((function(a){var n=new Date,i=n.getTime();K.ref(a.user.uid).set({userInformation:{signupTime:i,username:t.newInput.username,nickname:t.newInput.nickname},files:[{id:"folder-"+t.createID(),createTime:i,path:"",pathList:Array(),name:"",type:"folder"},{id:"file-"+t.createID(),path:"/",pathList:["/"],name:"新檔案",type:"file",createTime:i,updateTime:i,tasks:{data:[{id:1,text:"新任務",start_date:n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),duration:3,progress:.6}]}},{id:"folder-"+t.createID(),path:"/",pathList:["/"],name:"新資料夾",type:"folder",createTime:i,updateTime:i}]}).then((function(){alert("註冊成功！"),e.$router.push({name:"file"})}))})).catch((function(t){switch(t.code){case"auth/invalid-email":alert("帳號格式錯誤。");break;case"auth/email-already-in-use":alert("已存在此使用者");break;case"auth/operation-not-allowed":alert("不允許此操作");break;case"auth/weak-password":alert("密碼強度不足。");break}}))}}},q=G,Y=(a("9994"),Object(l["a"])(q,P,U,!1,null,"2978a25a",null)),W=Y.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"redirect"}})},H=[],X={created:function(){this.$router.push({path:"/"})}},$=X,tt=Object(l["a"])($,Z,H,!1,null,"6d50e400",null),et=tt.exports;n["a"].use(p["a"]);var at=new p["a"]({routes:[{path:"/",component:M,children:[{path:"/",name:"file",component:O},{path:"/signin",name:"signin",component:J},{path:"/signup",name:"signup",component:W},{path:"/gantt",name:"gantt",component:I}]},{path:"/redirect",name:"redirect",component:et},{path:"*",name:"other",redirect:"/"}]}),nt=a("0ff2");n["a"].use(nt["a"]),n["a"].config.productionTip=!1,at.beforeEach((function(t,e,a){b.auth().onAuthStateChanged((function(e){e?a():"/signin"!==t.path&&"/signup"!==t.path?a("/signin"):a()}))})),new n["a"]({el:"#app",router:at,render:function(t){return t(u)}})},"5b5e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAABHNCSVQICAgIfAhkiAAAASpJREFUWEftlV1xAkEQhLsd4AAkxAEVB+AAFKSQgAMcBAeJgyABCUjAQacm2aMC7O0/eaB2Xu+259uemz6isiRNAHwA2JA8VsqBNQKSXhzMzOmsSe5rNIuBHMwXAHPob1VBFQFJWgB498AMYDuSmxKnsoEkrRxMrN+e5Dr20u3zLCBJbwB2GU0+AdgIz6lnkoEk2YjMndyyzXtNhUoCqoAZ4A1qSfIUu00QyGWMbZKtd23Z2MypYFaNAjWGGS4ThfICeQKv1p3b86NZdQcUCLx/gboCSgi81lB3AXoBygi81lBXAfoDVBB4raEuAcoGGdMK7jdAfWqSDgDmrTr5dEh6e3egwa1HOLQNjNR+wtPQyJsDjQm6rY1+gx0otqXdoe5Q37LSb+Dpcugb9CK3LO+B0r4AAAAASUVORK5CYII="},"71f6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAjZJREFUSEu1Vo0xg0EQfa8CVIAKUAGpQDogFaACVIAKRAWoQFKBqAAdUMGaF3eZdfnuJ9/IzmRC7nbf7tu/IzJiZpsAjgEcAdgJ37r9ET5PAJ5J6v+VhV0aZnYK4AaAwGtyC+Ca5Fftoj//AxyifHTRtdoS6IDkrFVhARxAXwDsJ8rfAERrpFQsiP695N5K4B54AuDQGRPgOclxJh0Cv0p0BH7Qkvc5cMjpvQN4U1QteTMzOXbidCckBzXKGSh+d4WkSHdaQKNxM1Mq1AFRlG8xmBUBq4J9tKMcvTkrZqZ2k/NRHkjKbhHYU/VNsqWFlgwmlH+R3KoB+6KqelqIeghArRhlt1RkotrcZQ0CVaoKTm2lIVISOTqvejNTlasdm/JcAk4NdTngHV0ZWINhO1i9I3leibLzuE/EPsczkgc9gTWzz6Iuyc49sDg3M0Xoc1ntwdSxMAtewxbT8ZSkqC+2U9qDTZPHWzQzFeSl+606C+LI/EMTgDHJUQvlHQPok6SCKUoE1tBQkW242xqDF7leDPQqp/P2a22jRY7jH6FvVWgeXMfqUznhF72GhT5pZNKXI4q6+DJJHwIaGl3gNeZ0ro0Wd3R1Ny+VfBj4itLv5hLwJ4C4EPzkKoJney0MBBkUpSn985YJRRhHpmjX08ffzYIXm9zlX0YX+czt2kyddII3AbckuFKkS+D/DiwHWiJfC3AL+NqAq+Cr5K/P3Qzt07VGnCm436dznyj66ITItYyGejr/AC02DCVDQW9WAAAAAElFTkSuQmCC"},"85ec":function(t,e,a){},9994:function(t,e,a){"use strict";var n=a("b336"),i=a.n(n);i.a},"9ac0":function(t,e,a){"use strict";var n=a("a463"),i=a.n(n);i.a},"9c98":function(t,e,a){},a3de:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAVlJREFUSEvtl31RAzEQxd9TADgABYCD4gAUAA6KAooCcAAS6gAc0CoAFAAKlnmdFMo218tO7o5hpvkvc9n97XvJ5YMAYGZjAOcAjtTvsM0AnJD88DmZoLcdwnyqLFxgfTjsEazUa3CBbQV6lQbV1PHYEPwL7sGaj6caqhPSaPvQ4B/bXYV9K146MPsLxQv4FlyzoEOx3upQcM3gLbjGvVDsv7P6DcBrkqgzfCckN7OBtMV/AhiTfFgdaGYXAO4iBUSsFnREUsfbWjMzKdfJVqQ+Ar4hOdlkiZnp+3Wbbbm9elPMAcnlvGbHmdk+gJdOwSRZkrDlIvCdImL1Xu626BbZLoD3kgIj4Eu/mj0gre77rsGa3+Mm1WYmtc8ANM+tLaJYybJ35ATV7bL4QRAFC65XwTT9s+qPAJwCkOLiNtSF3hc0H+IJk3PhbPFvpveT9tu+nzJzABOS0y/EENvCxkts+QAAAABJRU5ErkJggg=="},a463:function(t,e,a){},b336:function(t,e,a){},bb0f:function(t,e,a){},c1c2:function(t,e,a){},c6ab:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABHNCSVQICAgIfAhkiAAAAQxJREFUaEPtmNERwjAMQ+1JGIFuwLFJR4BNugKbMAIjsIl7/W/RR3SnkCrfqSXrJTlfMwZfOXh/4Qb/nbAJmmDnCfiIdg4I2jNBGFHnG0ywc0DQnglW1RIRVxiVbsMzMz9H8pBgVb0j4qbzD5Xvmbl53F1u8AwEtzs4wYOi2/BouoM63xxleAc5MroqblCXPUfZBDk56qpAglU1R8RFZxEqvzLz60nmKIEzTDLDD9se1eAzINwAX1GhN4q0G6TEKCxigsLwKdKQoEc1Ss5NRfxX7Wd8nkWbThfl47YjSrEgLAJfUaE3irQbpMQoLGKCwvAp0iZIiVFYxASF4VOkTZASo7CICQrDp0gPT3AFr0xLOX+OU1QAAAAASUVORK5CYII="},cf85:function(t,e,a){"use strict";var n=a("c1c2"),i=a.n(n);i.a},d3b1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAlVJREFUSEu1VotRVEEQ7I4AjECIAIhAicDLAIhAiACNQI1AjACIAC4CIAIkA4hgqH7OUnPL/t6VN1VXV++93emd7vksUTEz2wbwBcBnADv+r9V//XcF4JqknmcbSzvM7BjADwAC79lPAN9JPvcWxu8rwB7lZYhu1JdAD0nej254A3bQGwD72eYXAKI1USoWRP9etm4WeAS+BfApOBPgKcmLihwC/5btEfjBiO4TsGv6OwA8KKoR3cxMBzsKe29JHvYop1P8GBJJke7koGYmCbZILnOnZiYpVAHJpLcYrJqAlcEx2pMSvWY2SUHyXSWYmcpNh0/2h6T8NoEjVS8kiyXUAna5op9nkh96wDGpqicdAF4AUCkm220lmai2sFiNQJmqhJOmaiLJ9Cw2onY66JT1ZqYsVzkO6dwCzh2VmIsHnQ2sxvDRvf4ieVpCGKB6NnDU+J7kwZrA6tlf095S9ke/oloRRi2LNdgpJ2l/51NM/pckxUCznPIaLHYer3c1lin5opmZ3p2Hd8VesBKxZ+QKTQAuSJ60Tpy+FRrQE0kF07TUq0WVkmwrrFYbPKvVordaaZoz0G2XwojTSXWqRIvgWqM61SHioFez0C+PTPt1EEXdvJnkF4EaeI85fddESzO6O5trDV9RxtncAn4CkAZC7FxN8OKdyxNO5SCHojSnfyoZT8LUMkW7rj5xbRW8CpyVi5y+6Vmbtd7f8zwpgg8BjwgcyquUJ+/A/zuwy9QF3wjwCPjGgLvgc/RbZ20l4ZYbjbiScP+uzutEsc4ej1zDaKGr8ysO3y0llCCg9gAAAABJRU5ErkJggg=="},dc51:function(t,e,a){"use strict";var n=a("bb0f"),i=a.n(n);i.a}});
//# sourceMappingURL=app.7414d35b.js.map