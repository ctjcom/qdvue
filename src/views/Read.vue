<template>
  <div
    class="read"
    :style="{'background-color':bgList[set.bgid],'height':'100%'}"
  >
    <!--顶部导航栏-->
    <Head v-show="istab"></Head>
    <!--内容-->
    <div ref="wrapper" :style="{ height:wrapperHeight+'px'}">
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
      :autoFill="isAutoFill"
    >
      <div
        class="read-content"
        :style="{'font-size':set.rangeValue+'px','color':set.textcolor}"
        @click="istab=!istab"
        v-for="(item,i) of book" :key="i"

      >
      <h3>{{item.title}}</h3>
      {{item.content}}</div>
    </mt-loadmore>
    </div>
    <!--目录-->
    <div class="read-menu" :class="{'menu-active':ismenu}" @click="hidemenu">
      <!--目录列表-->
      <div class="menu-body">
          <h3 class="menu-title">目录</h3>
          <div class="menu-list">
          <a href="javascript:;" class="menu-item" v-for="(item,i) of menu" :key="i" @click="menubook(i)">
            <span>{{item}}</span>
            <span class="iconfont icon-jiankuohaoxiyou"></span>
          </a>
          </div>
      </div>
    </div>
    <!--底部设置。。。-->
    <div class="read-foot" v-show="istab">
      <!--设置面板-->
      <div class="set" v-show="isset">
        <!--字体设置-->
        <div class="font-set">
          <div class="btnrem" @click="setfont(-2)">A -</div>
          <mt-range v-model="set.rangeValue" :min="12" :max="26" :step="2"></mt-range>
          <div class="btnadd" @click="setfont(2)">A +</div>
        </div>
        <!--背景设置-->
        <div class="line"></div>
        <ul class="bg-set" @click="bgset">
          <li :class="set.active[0]" data-id="0" :style="{'background-color':bgList[0]}"></li>
          <li :class="set.active[1]" data-id="1" :style="{'background-color':bgList[1]}"></li>
          <li :class="set.active[2]" data-id="2" :style="{'background-color':bgList[2]}"></li>
          <li :class="set.active[3]" data-id="3" :style="{'background-color':bgList[3]}"></li>
        </ul>
        <div class="line"></div>
      </div>
      <div class="foot-bar">
        <a href="javascript:;" @click="showmenu">
          <span class="iconfont icon-mulu"></span>
          <h3>目录</h3>
        </a>
        <a href="javascript:;">
          <span class="iconfont icon-jindu-"></span>
          <h3>进度</h3>
        </a>
        <a href="javascript:;" @click="isset=!isset">
          <span class="iconfont icon-shezhi-copy"></span>
          <h3>设置</h3>
        </a>
        <a href="javascript:;" @click="tab">
          <span class="iconfont icon-icon-test" v-show="!set.showtab"></span>
          <span class="iconfont icon-session_evning" v-show="set.showtab"></span>
          <h3>{{set.tabtext}}</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import head from "../components/head";
import { constants } from "crypto";
export default {
  data() {
    return {
      menu:[],//目录列表
      ismenu:false,
      set: {}, //设置对象
      bgList: ["#c4b395", "#c3d4e6", "#c8e8c8", "#fff", "#000"], //背景列表
      isset: false, //控制设置面板显示隐藏
      istab: false, //控制上下导航显示隐藏
      book: [],
      allLoaded: false,
      topStatus: "",
      isAutoFill: false,
      wrapperHeight:0,
      id:1,
    };
  },
  created() {
    //初始化设置参数
    this.set = this.$store.getters.getset;
    //获取书籍内容
    this.getbook(this.id);
    //获取目录
    this.getmenu();
  },
  mounted() {
    //设置上拉刷新父容器高度
    this.wrapperHeight =
      document.documentElement.clientHeight
  },
  methods: {
    loadTop() {
      //下拉刷新
      if(this.id>1){
        this.id-=1;
        this.getbook(this.id);
        //取出最后一个
        var book=this.book.pop()
        //console.log(book)
        //添加到开头
        this.book.unshift(book)
      }
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      //上拉刷新加载下一章
      this.id+=1
      this.getbook(this.id);
      //this.allLoaded = true; // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    },
    showmenu(){
      this.ismenu=true;
    },
    hidemenu(e){
      console.log(e.target)
      if(e.target.nodeName=="DIV"){
        this.ismenu=false;
      }

    },
    menubook(i){
      //通过目录跳转先清空
      this.book=[];
      this.getbook(i+1); 
    },
    getmenu(){
      //获取目录
      this.axios.get("/booktitles",{params:{
        id:this.$route.params.id,
      }}).then(res=>{
        this.menu=res.data.titles.split("-")
      })
    },
    getbook(id) {
      //获取书籍内容
      var id = id || 1;
      //console.log(id);
      this.axios
        .get("/book", {
          params: {
            book: this.$route.params.id,
            id: id
          }
        })
        .then(res => {
          this.book.push(res.data);
          this.id=id;
          this.ismenu=false;
        });
    },
    tab() {
      //日夜模式切换
      if (this.set.showtab) {
        this.$store.commit("settextcolor", "#ccc");
        this.$store.commit("setbgid", 4);
        this.$store.commit("settabtext", "日间");
        this.$store.commit("setshowtab", false);
      } else {
        //日间模式
        //console.log(this.set)
        this.$store.commit("settextcolor", "#33373d");
        //将背景切换为用户之前设置的背景
        this.$store.commit("setbgid", this.set.bid);
        this.$store.commit("settabtext", "夜间");
        this.$store.commit("setshowtab", true);
      }
    },
    bgset(e) {
      if (e.target.nodeName == "LI") {
        this.$store.commit("settextcolor", "#33373d");
        var id = e.target.dataset.id;
        this.$store.commit("setbid", id);
        this.$store.commit("setbgid", id);
        var active = [];
        active[id] = "bg-active";
        this.$store.commit("setactive", active);
        //变为日间
        this.$store.commit("settextcolor", "#33373d");
        this.$store.commit("setbgid", this.set.bid);
        this.$store.commit("settabtext", "夜间");
        this.$store.commit("setshowtab", true);
      }
    },
    setfont(i) {
      this.$store.commit("setrangeValue", (this.set.rangeValue += i));
      if (this.set.rangeValue < 12) {
        this.$store.commit("setrangeValue", 12);
      }
      if (this.set.rangeValue > 26) {
        this.$store.commit("setrangeValue", 26);
      }
    }
  },
  components: {
    Head: head
  }
};
</script>

<style scoped>
.read {
  background-color: #c4b395;
  overflow: scroll;
}
.head {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.read >>> .head-left .icon {
  color: #fff;
}
.read-content {
  padding:0.75rem;
  background-color: transparent;
}
.read-foot {
  left: 0;
  bottom: 0;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
}
.foot-bar {
  display: flex;
  justify-content: space-between;
}
.btnrem,
.btnadd {
  font-size: 1rem;
  width: 3rem;
  height: 1.5rem;
  padding: 0.5rem 0;
  text-align: center;
  color: #fff;
}
.read-foot a {
  display: block;
  font-size: 14px;
  font-weight: 0;
  padding-top: 0.375rem;
  width: 100%;
  color: #fff;
}
.read-foot > a > h3 {
  transform: scale(0.7);
}
.font-set {
  display: flex;
  justify-content: space-between;
  margin: 0 0.5rem;
  padding: 1rem 0;
}
/*目录面板*/
.read-menu{
  position: fixed;
  top:0;
  right:-100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.25);
  width:100%;
  display: flex;
  justify-content:flex-end;
  transition: all .5s;
}
.read .menu-active{
  right: 0;
}
.read-menu .menu-body{
  width:85%;
  background: #fff;
}
.menu-title{
  width:100%;
  height:2.3rem;
  line-height: 2.3rem;
  letter-spacing: 2rem;
  color:#ed424b;
  border-bottom: 1px solid #ed424b;
}
.menu-list{
  height:100%;
  overflow-y:scroll; 
}
.read-menu .menu-body .menu-item{
  display: flex;
  color:#000;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 .7rem;
  height:2.3rem;
  line-height: 2.3rem;
  border-bottom: 1px solid #eaeaea;
}
/*重置mintui样式*/
.read >>> .mt-range-thumb {
  width: 15px;
  height: 15px;
  top: 7px;
}
.mt-range {
  width: 80%;
}
.read >>> .mt-range-runway {
  right: -15px;
}
.read >>> .mt-range-content {
  margin-right: 15px;
}
/*背景设置*/
.bg-set {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
}
.bg-set > li {
  width: 20%;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid transparent;
}
.bg-set .bg-active {
  border: 1px solid red;
}
/*0.5px水平线*/
.line {
  width: 100%;
  border-top: 1px solid #ccc;
  transform: scale(1, 0.5);
}
</style>