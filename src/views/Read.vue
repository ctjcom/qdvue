<template>
  <div class="read" :style="{'background-color':bgList[bgid]}">
    <!--顶部导航栏-->
    <Head v-show="istab"></Head>
    <!--内容-->
    <div class="read-content" :style="{'font-size':rangeValue+'px','color':textcolor}" @click="istab=!istab">
      测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据
      测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据
      测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据
      测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据
      测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据测试数据！！测试数据
    </div>
    <!--目录-->
    <div class="read-menu"></div>
    <!--底部设置。。。-->
    <div class="read-foot" v-show="istab">
      <!--设置面板-->
      <div class="set" v-show="isset">
        <!--字体设置-->
        <div class="font-set">
          <div class="btnrem" @click="setfont(-2)">A -</div>
          <mt-range v-model="rangeValue" :min="12" :max="26" :step="2"></mt-range>
          <div class="btnadd" @click="setfont(2)">A +</div>
        </div>
        <!--背景设置-->
        <ul class="bg-set" @click="bgset">
          <li :class="active[0]" data-id="0" :style="{'background-color':bgList[0]}"></li>
          <li :class="active[1]" data-id="1" :style="{'background-color':bgList[1]}"></li>
          <li :class="active[2]" data-id="2" :style="{'background-color':bgList[2]}"></li>
          <li :class="active[3]" data-id="3" :style="{'background-color':bgList[3]}"></li>
        </ul>
      </div>
      <div class="foot-bar">
        <a href="javascript:;">
          <span>1</span>
          <h3>目录</h3>
        </a>
        <a href="javascript:;">
          <span>2</span>
          <h3>进度</h3>
        </a>
        <a href="javascript:;" @click="isset=!isset">
          <span>3</span>
          <h3>设置</h3>
        </a>
        <a href="javascript:;" @click="tab">
          <span>4</span>
          <h3>{{tabtext}}</h3>
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
      rangeValue: 16, //字体大小
      bgList: ["#c4b395", "#c3d4e6", "#c8e8c8", "#fff","#000"], //背景列表
      bgid: 0, //背景选择
      bid:0,//保存当前所选的背景
      active: [],//激活样式
      textcolor:"#33373d",//文本的字体颜色
      showtab:true,//日夜切换
      tabtext:"夜间",
      isset:false,//控制设置面板显示隐藏
      istab:false,//控制上下导航显示隐藏
    };
  },
  methods: {

  
    tab(){
        if(this.showtab){
          this.textcolor="#ccc";
          this.bgid=4;
          this.tabtext="日间";
          this.showtab=false;
        }else{
          this.textcolor="#33373d";
          this.bgid=this.bid;
          this.tabtext="夜间";
          this.showtab=true;
        }
    },
    bgset(e) {
      if (e.target.nodeName == "LI") {
        this.textcolor="#33373d";
        this.bgid = e.target.dataset.id;
        this.bid = e.target.dataset.id;
        this.active = [];//先清空数组
        this.active[this.bgid] = "bg-active";
      }
    },
    setfont(i) {
      if (i > 0) {
        this.rangeValue += i;
      } else {
        this.rangeValue += i;
      }
      if (this.rangeValue < 12) {
        this.rangeValue = 12;
      }
      if (this.rangeValue > 26) {
        this.rangeValue = 26;
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
  padding: 0 0.75rem;
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
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
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
</style>