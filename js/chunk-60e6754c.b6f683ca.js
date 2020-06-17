(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60e6754c"],{"1fdb":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-table"},[s("div",{staticClass:"table-search"},[s("div",{staticClass:"title-wrap"},[s("span",{staticClass:"table-name"},[t._v(t._s(t.tableName))]),s("MyButton",{attrs:{color:"bg-success",size:"btn-small"},on:{click:function(e){return t.showModal({})}}},[[t._v("add")]],2)],1),s("Modal",{attrs:{title:"Add new row"},on:{okclose:t.updateMethod,close:t.closeModalReset},scopedSlots:t._u([{key:"default",fn:function(){return t._l(t.editableFields,(function(e){return s("label",{key:e.title,staticClass:"add-input"},[t._v(" "+t._s(e.title)+" "),"checkbox"===t.setInputType(e)?s("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[e.getValue()],expression:"answers[col.getValue()]"}],staticClass:"slot-input",class:{"empty-input":""===t.answers[e.getValue()]&&t.failedSend},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.answers[e.getValue()])?t._i(t.answers[e.getValue()],null)>-1:t.answers[e.getValue()]},on:{input:t.setInputStyle,change:function(s){var a=t.answers[e.getValue()],r=s.target,i=!!r.checked;if(Array.isArray(a)){var n=null,l=t._i(a,n);r.checked?l<0&&t.$set(t.answers,e.getValue(),a.concat([n])):l>-1&&t.$set(t.answers,e.getValue(),a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.answers,e.getValue(),i)}}}):"radio"===t.setInputType(e)?s("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[e.getValue()],expression:"answers[col.getValue()]"}],staticClass:"slot-input",class:{"empty-input":""===t.answers[e.getValue()]&&t.failedSend},attrs:{type:"radio"},domProps:{checked:t._q(t.answers[e.getValue()],null)},on:{input:t.setInputStyle,change:function(s){t.$set(t.answers,e.getValue(),null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[e.getValue()],expression:"answers[col.getValue()]"}],staticClass:"slot-input",class:{"empty-input":""===t.answers[e.getValue()]&&t.failedSend},attrs:{type:t.setInputType(e)},domProps:{value:t.answers[e.getValue()]},on:{input:[function(s){s.target.composing||t.$set(t.answers,e.getValue(),s.target.value)},t.setInputStyle]}})])}))},proxy:!0},{key:"trigger",fn:function(){return[s("span",{ref:"triggerElement"})]},proxy:!0}])}),t.search?s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRequest,expression:"searchRequest"}],staticClass:"input-search",attrs:{placeholder:"search",type:"text"},domProps:{value:t.searchRequest},on:{input:[function(e){e.target.composing||(t.searchRequest=e.target.value)},t.usersArr]}}):t._e()],1),s("thead",{staticClass:"table-header"},[s("tr",{staticClass:"tr"},t._l(t.columns,(function(e){return s("th",{key:e.title,class:t.deckClass(e)},[t._v(" "+t._s(e.title)+" "),e.sortable?s("button",{staticClass:"b-sort",on:{click:function(s){return t.clickHandle(e.value)}}},[0===t.sortClickCounter||t.currentSortedField!=e.value?s("i",{staticClass:"fas fa-sort"}):t._e(),1===t.sortClickCounter&&t.currentSortedField===e.value?s("i",{staticClass:"fas fa-sort-down"}):t._e(),2===t.sortClickCounter&&t.currentSortedField===e.value?s("i",{staticClass:"fas fa-sort-up"}):t._e()]):t._e()])})),0)]),s("tbody",{staticClass:"table-body"},t._l(t.usersSet,(function(e,a){return s("tr",{key:e.id,staticClass:"tr"},t._l(t.columns,(function(r){return s("td",{key:r.title,class:t.deckClass(r)},[t._v(" "+t._s(t.getDeckValue(e,r,a))+" "),"actions"===r.value?s("div",{staticClass:"controls"},[s("MyButton",{attrs:{color:"bg-error",size:"btn-small"},on:{click:function(s){return t.removeTableRow(e)}}},[[t._v("delete")]],2),s("MyButton",{attrs:{color:"bg-warning",size:"btn-small"},on:{click:function(s){return t.showModal(e)}}},[[t._v("edit")]],2)],1):t._e()])})),0)})),0)])},r=[],i=s("2b0e"),n=s("4b86"),l=s("714b"),o=i["a"].extend({components:{MyButton:n["a"],Modal:l["a"]},name:"DataTable",props:{items:Array,columns:Array,search:Object,tableName:String,apiUrl:String},data:function(){return{sortClickCounter:0,flag:!1,currentSortedField:"",searchRequest:"",modalContent:"Hello world",answers:{},currentRow:{},localItems:null,failedSend:!1}},created:function(){this.$store.commit("initTable",{tableName:this.tableName,initialState:this.items}),this.apiUrl?this.$store.dispatch("getUsers",{url:this.apiUrl,key:this.tableName}):this.$store.commit("refreshLocalIdes",{key:this.tableName})},methods:{setInputType:function(t){return"birthday"===t.getValue()?"date":t["type"]?t["type"]:"text"},addLocalRow:function(){var t=this.makeNewLocalRow(),e=this.checkObjectIsEmpty(this.currentRow);e?(this.$store.commit("addLocalTableRow",{key:this.tableName,row:t}),this.$store.commit("refreshLocalIdes",this.tableName)):this.$store.commit("updateLocalTableRow",{key:this.tableName,row:t})},makeNewLocalRow:function(){var t=this,e=Object.assign({},this.currentRow);this.columns.forEach((function(s){var a=s.getValue();if(!1!==s.editable)if("age"===a){var r=t.answers["age"];e[a]=t.calculateAge(r)}else e[a]=t.answers[a];else e[a]=""}));var s=this.checkObjectIsEmpty(this.currentRow);if(s){var a=this.$store.state.tables[this.tableName].length;e.id=a}return e},calculateAge:function(t){var e=new Date(t).getFullYear();return(new Date).getFullYear()-e},showModal:function(t){var e=this;this.currentRow=Object.assign({},t),this.failedSend||(this.answers={},this.editableFields.forEach((function(t){var s=t.getValue(),a=e.currentRow[s]?e.currentRow[s]:"";e.$set(e.answers,s,a)})));var s=this.$refs.triggerElement;s&&s.click()},closeModalReset:function(){this.failedSend=!1},refreshData:function(){this.$store.dispatch("getUsers")},removeTableRow:function(t){var e=confirm("Do you really want remove "+t["name"]);e&&this.apiUrl?this.$store.dispatch("removeUser",{itemId:t["id"],url:this.apiUrl,key:this.tableName}):(this.$store.commit("removeLocalRow",{key:this.tableName,itemId:t["id"]}),this.$store.commit("refreshLocalIdes",{key:this.tableName}))},updateMethod:function(){if(this.validateInputs()){if(this.validateInputs()){var t=this.createRemoteConfig(),e=this.checkObjectIsEmpty(this.currentRow);if(this.apiUrl)if(e)this.$store.dispatch("addUser",t);else this.$store.dispatch("editUser",t);else this.addLocalRow();this.failedSend=!1}}else this.failedSend=!0,this.showModal(this.currentRow)},createRemoteConfig:function(){var t=this,e=Object.assign({},this.currentRow);return Object.keys(this.answers).forEach((function(s){var a=s;e[a]=t.answers[a]})),{row:e,url:this.apiUrl,key:this.tableName}},checkObjectIsEmpty:function(t){for(var e in t)if(e)return!1;return!0},validateInputs:function(){var t=this,e=!0;return Object.keys(this.answers).forEach((function(s){var a=s;""===t.answers[a]&&(e=!1)})),e},setInputStyle:function(t){t.target.classList.remove("empty-input")},usersArr:function(){var t=[];""===this.searchRequest&&(t=this.items.slice());for(var e=0,s=this.items;e<s.length;e++)for(var a=s[e],r=a,i=0,n=this.search.fields;i<n.length;i++)for(var l=n[i],o=l,c=0,u=this.search.filters;c<u.length;c++){var d=u[c],h=d;if(h(r[o]).includes(h(this.searchRequest))){if(t.includes(r))break;t.push(r)}}this.localItems=t.slice()},clickHandle:function(t){this.currentSortedField!==t&&(this.currentSortedField=t,this.sortClickCounter=0),this.sortClickCounter++,3===this.sortClickCounter&&(this.sortClickCounter-=3),this.sortData(t)},sortData:function(t){switch(this.sortClickCounter){case 1:this.items.sort((function(e,s){return e[t]>s[t]?1:-1}));break;case 2:this.items.sort((function(e,s){return e[t]<s[t]?1:-1}));break;case 0:this.items.sort((function(t,e){return t.id>e.id?1:-1}));break}},getDeckValue:function(t,e,s){var a=e.title;switch(a){case"№":return s+1;case"Возраст":return"function"===typeof e.value?e.value(t):t[e.value];default:return t[e.value]}},deckClass:function(t){return"_index"===t.value?"users-order":"number"===t.type?"align-right":"td"}},computed:{usersSet:function(){return this.localItems?this.$data.localItems:this.items},tdWidth:function(){return 800/this.columns.length},editableFields:function(){return this.columns.filter((function(t){return!1!==t.editable}))}}}),c=o,u=(s("e5e5"),s("2877")),d=Object(u["a"])(c,a,r,!1,null,"cb4c3256",null);e["a"]=d.exports},"292d":function(t,e,s){"use strict";var a=s("f0ef"),r=s.n(a);r.a},"4b86":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{class:[t.color,t.size],on:{click:function(e){return t.sendClick()}}},[t._t("default",[t._v("Press")])],2)},r=[],i=s("2b0e"),n=i["a"].extend({name:"MyButton",props:{size:String,color:String},data:function(){return{pressed:"",pressedValue:""}},methods:{sendClick:function(){this.$emit("click")}}}),l=n,o=(s("8635"),s("2877")),c=Object(o["a"])(l,a,r,!1,null,"1b06051c",null);e["a"]=c.exports},"5da0":function(t,e,s){},"714b":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[t.visible?s("div",{staticClass:"modal-bg"},[t.visible?s("div",{staticClass:"modal"},[s("div",{staticClass:"close-slot",on:{click:t.closeModal}},[s("MyButton",{attrs:{color:"bg-dark",size:"btn-small"}},[[t._v("x")]],2)],1),s("h3",{staticClass:"modal-header"},[t._v(t._s(t.title))]),s("div",{staticClass:"modal-body"},[t._t("default",[t._v("Modal default content fdfghf fdhfhfgh fdgghfghfg ryrty rtyrtyrety ertyrtyrty ertyrtyrtyr retyrety")])],2),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"button-wrap",on:{click:t.tryClose}},[s("MyButton",{attrs:{color:"bg-success",size:"btn-small"}},[[t._v("ok")]],2)],1)])]):t._e()]):t._e(),s("div",{staticClass:"trigger-box",on:{click:t.open}},[t._t("trigger",[t._v("Def_button")])],2)])},r=[],i=s("2b0e"),n=s("4b86"),l=i["a"].extend({components:{MyButton:n["a"]},name:"Modal",props:{title:String},data:function(){return{visible:!1,pressedValue:""}},methods:{tryClose:function(){this.visible=!1,this.$emit("okclose")},open:function(){this.visible=!0,this.$emit("open")},closeModal:function(){this.visible=!1,this.$emit("close")}}}),o=l,c=(s("292d"),s("2877")),u=Object(c["a"])(o,a,r,!1,null,"3eb5e3c2",null);e["a"]=u.exports},8635:function(t,e,s){"use strict";var a=s("d5af"),r=s.n(a);r.a},d5af:function(t,e,s){},e5e5:function(t,e,s){"use strict";var a=s("5da0"),r=s.n(a);r.a},f0ef:function(t,e,s){}}]);
//# sourceMappingURL=chunk-60e6754c.b6f683ca.js.map