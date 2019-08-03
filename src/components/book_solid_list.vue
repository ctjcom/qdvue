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
      <bookItem title="都市剑说" writer="华表" :imgurl="require(`../../public/img/150.jpg`)"></bookItem>
      <bookItem title="万古最强部落" writer="山人有妙计" :imgurl="require(`../../public/img/150 (1).jpg`)"></bookItem>
      <bookItem title="我是勤行第一人" writer="光暗之心" :imgurl="require(`../../public/img/150 (2).jpg`)"></bookItem>
      <bookItem title="超神星卡师" writer="沉砚" :imgurl="require(`../../public/img/150 (3).jpg`)"></bookItem>
      <bookItem title="暗影熊提伯斯的位面之旅" writer="暗影熊" :imgurl="require(`../../public/img/150 (4).jpg`)"></bookItem>
      <bookItem title="我师叔是林正英" writer="白袍飞扬" :imgurl="require(`../../public/img/150 (5).jpg`)"></bookItem>
      <bookItem title="我能点化万物" writer="锈迹符文" :imgurl="require(`../../public/img/150 (6).jpg`)"></bookItem>
    </div>
  </div>
</template>

<script>
import bookItem from "./book_item";
export default {
  data() {
    return {
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
