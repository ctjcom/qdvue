<template>
  <div class="list" ref="list">
    <div
      class="book-list"
      ref="solid"
      :style="listStyle"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
    >
    <bookItem v-for="(item,i) of list" :key="i" :title="item.name" :writer="item.author" :imgurl="item.images" :id="item.id"></bookItem>
    </div>
  </div>
</template>

<script>
import bookItem from "./book_item";
import { constants } from 'crypto';
export default {
  data() {
    return {
      list:[],//保存书籍的数组
      listStyle: {
        marginLeft: 0
      },
      clientX: 0, //横屏滚动的起始点坐标
      clientY: 0,
      moveX: 0, //手指滑动时的坐标
      moveY: 0,
      scrollWidth: 0, //滑动元素的真实宽
      offsetWidth: 0, //显示容器的宽度
      marginLeft: 0, //记录位移距离
      maxLeft: 0 //最大位移
    };
  },
  props:{type:{
    default:"",
  }},
  created(){
    console.log(this.type)
    this.axios.get("/type",{params:{type:this.type}}).then(res=>{
      this.list=res.data.slice(0,6);
      console.log(this.list)
    })
  },
  methods: {
    start(e) {
      this.clientX = e.touches[0].clientX;
      this.clientY = e.touches[0].clientY;
      this.scrollWidth = this.$refs.solid.scrollWidth;
      this.offsetWidth = this.$refs.list.offsetWidth;
      this.maxLeft = this.scrollWidth - this.offsetWidth;
    },
    move(e) {
      //获取滑动时的坐标
      this.moveX = e.touches[0].clientX;
      this.moveY = e.touches[0].clientY;
      //计算xy轴移动距离
      var x = this.clientX - this.moveX;
      var y = this.clientY - this.moveY;
      //转正数
      var w = x < 0 ? x * -1 : x;
      var h = y < 0 ? y * -1 : y;
      if (w > h) {
        //如果是在x轴移动就取消默认事件
        e.preventDefault();
      }
      //位移
      var marginLeft = this.marginLeft + this.moveX - this.clientX;
      if (marginLeft > 0) {
        marginLeft = 0;
      }
      if (marginLeft < -this.maxLeft) {
        marginLeft = -this.maxLeft;
      }
      this.listStyle.marginLeft = marginLeft + "px";
    },
    end() {
      //记录此次滑动的距离到总距离中
      this.marginLeft += this.moveX - this.clientX;
      if (this.marginLeft > 0) {
        //右滑到顶时
        this.marginLeft = 0;
      }
      if (this.marginLeft < -this.maxLeft) {
        //左滑到底时
        this.marginLeft = -this.maxLeft;
      }
    }
  },
  components: {
    bookItem
  }
};
</script>

<style scoped>
.list {
  overflow: hidden;
  background-color: #fff;
}
.book-list {
  display: flex;
  flex-wrap: nowrap;
  padding-left: 0.5rem;
}
</style>
