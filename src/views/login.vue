<template>
  <div class="login">
    <!--登录img-->
    <a href="javascript:;">
      <img class="top-img" src="../../public/img/top_red_13.png" alt />
    </a>
    <!--登录logo-->
    <div class="logo-box">
      <img class="logo-img" src="../../public/img/0.png" alt />
    </div>
    <div class="login-body">
      <!--输入框-->
      <div class="login-from">
        <ul class="from-list">
          <li>
            <span>2</span>
            <input type="text" placeholder="请输入邮箱/个性账号" />
          </li>
          <li>
            <div>
              <span>2</span>
              <input type="password" placeholder="请输入密码" />
              <span>2</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="login-link">
        <a href="#">忘记密码</a>
        <a href="#">用户注册</a>
      </div>
      <!--登录按钮-->
      <a href="javascript:;" class="login-btn">登录</a>
    </div>
    <!--登录方式-->
    <div class="login-method">
      <ul class="login-list">
        <li>
          <a href="#">
            <p></p>
            <span>QQ</span>
          </a>
        </li>
        <li>
          <a href="#">
            <p></p>
            <span>短信登录</span>
          </a>
        </li>
        <li>
          <a href="#">
            <p></p>
            <span>更多</span>
          </a>
        </li>
      </ul>
    </div>
    <!--更多的登录方式-->
    <div class="login-methods">
      <div class="toggle-btn">
        <span>收起</span>
        <em></em>
      </div>
      <ul>
        <li>
          <a href="#">
            <p></p>
            <span>微博</span>
          </a>
        </li>
        <li>
          <a href="#">
            <p></p>
            <span>支付宝</span>
          </a>
        </li>
        <li>
          <a href="#">
            <p></p>
            <span>百度</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
    
<script>
export default {};
</script>

<style scoped>
.login {
  font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
  background-color: #fff;
  color: #61708f;
  font-size: 0.7rem;
}
.login .top-img {
  width: 100%;
  height: 5rem;
}
.login .logo-box {
  padding: 1.8rem 0;
  text-align: center;
}
.login .logo-img {
  display: inline-block;
  height: 3rem;
}
.login input {
  display: inline-block;
  vertical-align: middle;
  height: 2.6rem;
  color: initial;
  line-height: 2.6rem;
  width: 60%;
  background: none;
  font-size: 0.9rem;
}
/*登录主体*/
.login .login-body {
  padding: 0 1.8rem;
}
/*登录表单样式*/
.login .login-from .from-list li {
  width: 100%;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
}
.login .login-link {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}
.login .login-link a {
  color: #0091de;
}
/*登录按钮*/
.login .login-btn {
  display: block;
  text-align: center;
  color: #fff;
  width: 100%;
  height: 3rem;
  border-radius: 1.5rem;
  line-height: 3rem;
  font-size: 1rem;
  background: linear-gradient(to right, #ee434c, #f14b4e);
  opacity: 0.7;
}
/*登录方式*/
.login .login-method {
  padding: 3rem 5rem 0;
}
.login .login-method .login-list {
  display: flex;
  justify-content: space-between;
}
.login .login-method .login-list li p {
  /*图标样式*/
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: #ee434c;
}
.login .login-method .login-list li a {
  color: #61708f;
}
/*更多登录方式(默认隐藏)*/
.login-methods{
  box-shadow: 0 -2px 5px 0 #EEE;
}
.login-methods .toggle-btn{
  padding: 1rem 0 1.5rem 0;
}
.login-methods ul{
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
}
.login-methods ul li a{
  color: #61708F;
}
.login-methods ul li p{
  /*图标样式*/
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: #ee434c;
}
</style>
