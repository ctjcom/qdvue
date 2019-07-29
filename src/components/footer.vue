<template>
  <div>
    <footer>
      <div class="footer-backtop">
        <strong>登录后获得更多特色功能</strong>
        <span>.</span>
        <a href="#">立即登录</a>
      </div>
      <div class="footer-link">
        <a href="#">客户端</a>
        <a href="#">触屏版</a>
        <a href="#">电脑版</a>
        <a href="#">帮助</a>
        <a href="#">反馈</a>
      </div>
      <div class="footer-copy">Copyright © 2002-2019 m.qidian.com</div>
      <a href="#" class="footer-app">
        <div class="app-logo">
          <img src="../../public/img/0.png" alt />
          <div>
            <h3>安装起点读书客户端</h3>
            <p>看更多正版好书</p>
          </div>
        </div>
        <span>下载</span>
      </a>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer > .footer-backtop {
  font-size: 0.875rem;
  line-height: 3.4375rem;
  text-align: center;
  padding: 0 1rem;
  border-bottom: 1px solid #f0f1f2;
}
footer > .footer-backtop span {
  font-family: Georgia, Helvetica, Arial;
  padding: 0 0.5ch;
}
footer > .footer-backtop strong {
  font-weight: bold;
}
footer > .footer-backtop a {
  color: #4284ed;
}
footer > .footer-link {
  font-size: 0.875rem;
  display: box;
  display: -webkit-box;
  padding: 0.5625rem 1.1875rem 0;
  text-align: center;
  color: #969ba3;
  justify-content: space-between;
}
footer > .footer-link a {
  display: block;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  color: #33373d;
}
footer > .footer-copy {
  font-size: 0.75rem;
  font-weight: 300;
  padding-top: 0.25rem;
  padding-bottom: 1rem;
  text-align: center;
  color: #969ba3;
}
footer > .footer-app {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  color: inherit;
  height: 3.75rem;
  padding: 0.75rem 0.6rem 0 0.6rem;
  background-color: #f6f7f9;
}
footer > .footer-app .app-logo {
  display: flex;
}
footer > .footer-app img {
  width: 2.25rem;
  height: 2.25rem;
}
footer > .footer-app h3 {
  font-size: 0.875rem;
  font-weight: bold;
}
footer > .footer-app p {
  font-size: 0.75rem;
  color: #969ba3;
}
footer > .footer-app span {
  line-height: 1.625rem;
  margin: auto 0;
  font-size: 0.875rem;
  display: inline-block;
  width: 4rem;
  text-align: center;
  color: #fff;
  border-radius: 99px;
  background-color: #ed424b;
}
</style>

