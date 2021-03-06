import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    set:{//保存设置对象
      bid:0,//保存用户所选背景不包含夜间模式
      showtab:true,//日夜模式
      rangeValue: 16,//字体大小
      bgid: 0,//实际背景包含夜间模式
      textcolor:"#33373d",//字体颜色
      tabtext:"夜间",//日夜切换开关的文本内容
      active:["bg-active"],//激活样式
    }
  },
  mutations: {
    //更新设置信息
    setset(state,set){
        state.set=set;
        localStorage.setItem("set",JSON.stringify(state.set))
    },
    setbid(state,bid){
      state.set.bid=bid;
       //将设置信息保存在本地中 
      localStorage.setItem("set",JSON.stringify(state.set))
    },
    setshowtab(state,showtab){
      state.set.showtab=showtab;
      localStorage.setItem("set",JSON.stringify(state.set))
    },
    setrangeValue(state,rangeValue){
      state.set.rangeValue=rangeValue;
      localStorage.setItem("set",JSON.stringify(state.set))
    },
    setbgid(state,bgid){
      state.set.bgid=bgid;
      localStorage.setItem("set",JSON.stringify(state.set))
    },
    settextcolor(state,textcolor){
      state.set.textcolor=textcolor;
      localStorage.setItem("set",JSON.stringify(state.set))
    },
    settabtext(state,tabtext){
      state.set.tabtext=tabtext;
      localStorage.setItem("set",JSON.stringify(state.set))
    },
    setactive(state,active){
      state.set.active=active;
      localStorage.setItem("set",JSON.stringify(state.set))
    },
  },
  getters:{
      getset(state){
        return state.set;
      }
  },
  actions: {

  }
})

