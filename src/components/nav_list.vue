<template>
  <div>
    <ul class="nav-list">
      <li>
        <a href="#">
          <p class="ioc iconfont icon-leimupinleifenleileibie" style="color:#0091de"></p>
          <span>分类</span>
        </a>
      </li>
      <li>
        <a href="#">
          <p class="ioc iconfont icon-paixingbang" style="color:rgb(255, 113, 113)"></p>
          <span>排行榜</span>
        </a>
      </li>
      <li>
        <a href="#">
          <p class="ioc iconfont icon-yezi" style="color:rgb(255, 149, 123)"></p>
          <span>免费</span>
        </a>
      </li>
      <li>
        <a href="#">
          <p class="ioc iconfont icon-wanben" style="color:rgb(250, 179, 86)"></p>
          <span>完本</span>
        </a>
      </li>
      <li>
        <a href="#">
          <p class="ioc iconfont icon-huangguan" style="color:rgb(216, 103, 245)"></p>
          <span>大神</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-list {
  display: flex;
  margin: 0.375rem 0;
  padding: 0.75em 0.625rem;
  background-color: #fff;
  justify-content: space-between;
}
.nav-list a {
  display: block;
  font-size: 0.75rem;
  width: 3.5rem;
  height: 3.625rem;
  text-align: center;
  color: initial;
}
.nav-list .ioc{
  font-size:2.2rem;
}
</style>
