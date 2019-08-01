<template>
  <div class="book-item">
    <img class="book-img" src="../../public/img/151.jpg" alt />
    <div class="book-body">
      <h4 class="book-title">第一序列</h4>
      <p class="book-desc">这次是一个新的故事。浩劫余生，终见光明。</p>
      <div class="book-foot">
        <span class="book-writer">
          <em class="iconfont icon-yonghu"></em>会说话的肘子
        </span>
        <div class="book-small">
          <span class="small-l">都市</span>
          <span class="small-m">连载中</span>
          <span class="small-r">291.21万字</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.book-item {
  display: flex;
  padding: 1rem;
  background: #fff;
}
.book-img {
  width: 4.125rem;
  height: 5.5rem;
  margin-right: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.book-body {
  text-align: left;
}
.book-title {
  line-height: 1.4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.book-desc {
  font-size: 0.875rem;
  overflow: hidden;
  height: 2.25rem;
  line-height: 1.1875rem;
  margin: 0.375rem 0;
  color: #969ba3;
}
.book-foot {
  display: flex;
  justify-content: space-between;
}
.book-foot .book-writer {
  font-size: 0.8125rem;
  display: block;
  overflow: hidden;
  max-width: calc(100vw - 2rem - (176rem / 16));
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #969ba3;
}
.book-small {
}
.book-small span {
  font-size: 0.5rem;
  line-height: 1.5;
  margin: 0 0.15em;
  padding: 0 0.25em;
  opacity: .8;
  border: 1px solid #969ba3;
  border-radius: 0.11111em;
}
.book-small .small-m{
    color:#ed424b;
    border: 1px solid #ed424b;
}
.book-small .small-r{
    color:#4284ed;
    border:1px solid #4284ed;
}
</style>
