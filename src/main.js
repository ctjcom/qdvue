import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入全局css样式
import './assets/css/normalize.css'
import './assets/css/base.css'
//引入Mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//引入字体图标
import './assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
