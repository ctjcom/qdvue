<template>
  <div class="login" @click="hidelogin">
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
            <div>
              <span class="iconfont icon-yonghu"></span>
              <input type="text" placeholder="请输入邮箱/个性账号" />
            </div>
          </li>
          <li>
            <div>
              <span class="iconfont icon-suo"></span>
              <input type="password" placeholder="请输入密码" />
            </div>
            <span class="iconfont icon-pwd-hidden"></span>
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
            <p class="iconfont icon-qq" style="color:#0091de;backgroundColor:#92d7fc"></p>
            <span>QQ</span>
          </a>
        </li>
        <li>
          <a href="#">
            <p class="iconfont icon-shouji"></p>
            <span>短信登录</span>
          </a>
        </li>
        <li @click="showlogin">
          <a href="#">
            <p class="iconfont icon-gengduo1"></p>
            <span>更多</span>
          </a>
        </li>
      </ul>
    </div>
    <!--更多的登录方式-->
    <div class="login-methods" v-show="isShow">
      <div class="toggle-btn" @click="isShow=false">
        <span>收起</span>
        <em class="iconfont icon-jiankuohaoxixia" style="margin-left:0.3rem"></em>
      </div>
      <ul>
        <li>
          <a href="#">
            <p class="iconfont icon-weibo" style="color:red"></p>
            <span>微博</span>
          </a>
        </li>
        <li>
          <a href="#">
            <p class="iconfont icon-zhifubao" style="color:#92d7fc"></p>
            <span>支付宝</span>
          </a>
        </li>
        <li>
          <a href="#">
            <p class="iconfont icon-icon_baidulogo" style="color:#1e35bb"></p>
            <span>百度</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
    
<script>
import { constants } from 'crypto';
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showlogin(){
      this.isShow = true;
    },
    hidelogin(e){
      if(e.target.nodeName=="DIV"){
        this.isShow=false;
      } 
    }
  },
 
};
</script>

<style scoped>
.login {
  font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
  color: #61708f;
  font-size: 0.7rem;
  height: 100%;
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
  width: 12rem;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login .login-from .from-list li span{
  margin-right: 0.9rem;
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
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 auto 1rem;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 2.5rem;
  background: #fdf6f6fa;
  border: 1px solid #eee;
  box-shadow: 0 2px 5px 0 #eee;
}
.login .login-method .login-list li a {
  color: #61708f;
}
/*更多登录方式(默认隐藏)*/
.login-methods {
  box-shadow: 0 -2px 5px 0 #eee;
}
.login-methods .toggle-btn {
  padding: 1rem 0 1.5rem 0;
}
.login-methods ul {
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
}
.login-methods ul li a {
  color: #61708f;
}
.login-methods ul li p {
  /*图标样式*/
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  line-height: 2.5rem;
  background: #fdf6f6;
  border: 1px solid #eee;
  box-shadow: 0 2px 5px 0 #eee;
  margin: 0 auto 1rem;
  border-radius: 50%;
}
</style>
