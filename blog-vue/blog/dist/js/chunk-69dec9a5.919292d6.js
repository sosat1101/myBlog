(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69dec9a5"],{"0944":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"message-banner",style:t.cover},[e("div",{staticClass:"message-container"},[e("h1",{staticClass:"message-title"},[t._v("留言板")]),e("div",{staticClass:"animated fadeInUp message-input-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.messageContent,expression:"messageContent"}],attrs:{placeholder:"说点什么吧"},domProps:{value:t.messageContent},on:{click:function(e){t.show=!0},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addToList.apply(null,arguments)},input:function(e){e.target.composing||(t.messageContent=e.target.value)}}}),e("button",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"ml-3 animated bounceInLeft",on:{click:t.addToList}},[t._v(" 发送 ")])])]),e("div",{staticClass:"barrage-container"},[e("vue-baberrage",{attrs:{barrageList:t.barrageList},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"barrage-items"},[e("img",{staticStyle:{"border-radius":"50%"},attrs:{src:s.item.avatar,width:"30",height:"30"}}),e("span",{staticClass:"ml-2"},[t._v(t._s(s.item.nickname)+" :")]),e("span",{staticClass:"ml-2"},[t._v(t._s(s.item.messageContent))])])]}}])})],1)])])},n=[],i=(s("b141"),{mounted(){this.listMessage()},data(){return{show:!1,messageContent:"",barrageList:[]}},methods:{addToList(){if(""==this.messageContent.trim())return this.$toast({type:"error",message:"留言不能为空"}),!1;const t=this.$store.state.avatar?this.$store.state.avatar:this.$store.state.blogInfo.websiteConfig.touristAvatar,e=this.$store.state.nickname?this.$store.state.nickname:"游客";var s={avatar:t,nickname:e,messageContent:this.messageContent,time:Math.floor(3*Math.random())+7};this.messageContent="",this.axios.post("/api/messages",s).then(({data:t})=>{t.flag?(this.barrageList.push(s),this.$toast({type:"success",message:"留言成功"})):this.$toast({type:"error",message:t.message})})},listMessage(){this.axios.get("/api/messages").then(({data:t})=>{t.flag&&(this.barrageList=t.data)})}},computed:{cover(){var t="";return this.$store.state.blogInfo.pageList.forEach(e=>{"message"==e.pageLabel&&(t=e.pageCover)}),"background: url("+t+") center center / cover no-repeat"}}}),r=i,o=(s("a5af"),s("e607")),c=Object(o["a"])(r,a,n,!1,null,"18b04672",null);e["default"]=c.exports},a5af:function(t,e,s){"use strict";s("c7f0")},c7f0:function(t,e,s){}}]);