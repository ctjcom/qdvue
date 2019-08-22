<template>
  <div class="head">
    <!--公共头部-->
    <div class="head-left">
      <a href="javascript:;" @click="gopage">
        <span class="icon iconfont icon-jiankuohaoxizuo"></span>
      </a>
      <h3 class="head-title">{{title}}</h3>
    </div>
    <div class="head-right" v-show="rightStyle">
      <span class="iconfont icon-fangdajing"></span>
      <span class="iconfont icon-gengduo"></span>
    </div>
  </div>
</template>

<script>
export default {
    data(){
       return{

       }
    },
    methods:{
      gopage(){
        this.$router.go(-1);
      }
    },
    props:{
        title:{
            default:"",
        },
        rightStyle:{
            default:true,
        }
    }
};
</script>

<style scoped>
.head {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 2.75rem;
  padding: 0.6875rem 0.625rem;
}
.head-left {
  display: flex;
  align-items: center;
}
.head-left .icon{
    font-size: 1.3rem;
    color: #33373d;

}
.head-title {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  position: absolute;
  left: 2.6875rem;
  overflow: hidden;
  max-width: 60%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.head-right>span{
    margin-right:0.8rem;
}
</style>