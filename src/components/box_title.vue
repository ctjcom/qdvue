<template>
  <div class="box-title">
    <div class="left-text">
      <h3 class="title">{{title}}</h3>
      <p class="desc">{{desc}}</p>
    </div>
    <div class="right-text">
      <a class="title-btn" href="#">
        更多
        <span class="iconfont icon-jiankuohaoxiyou"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: ""
    },
    desc: {
      default: ""
    }
  }
};
</script>

<style scoped>
.box-title {
  background-color: #fff;
  height: 1.75rem;
  padding: 0 1rem;
  border-top: 1rem solid transparent;
  display: flex;
  justify-content: space-between;
}
.left-text {
  display: flex;
  align-items: center;
}
.title {
  font-family: FZZCYSK;
  font-weight: 400;
  display: inline;
  color: #33373d;
  font-size: 0.915rem;
}
.title::before {
  display: inline-block;
  box-sizing: border-box;
  width: 0.625rem;
  height: 1em;
  content: "";
  vertical-align: -0.22ex;
  color: transparent;
  border-left: 2px solid #ed424b;
}
.desc {
  font-size: 0.8125rem;
  margin-left: 0.5rem;
  color: #969ba3;
}
.title-btn {
  font-size: 0.875rem;
  line-height: 1.5rem;
  padding: 0.5rem 0 0.5rem 0.75rem;
  white-space: nowrap;
  color: #969ba3;
}
</style>
