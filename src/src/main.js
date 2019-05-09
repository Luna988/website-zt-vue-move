// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible'
import '@/assets/styles/common.css'
// import '@/assets/styles/tocho-net-gsh.scss'
import validates from '@/assets/js/validationRule.js'//全局验证
// import onlineService from '@/assets/js/onlineService.js'//全局引入Udesk
// import touch from '@/assets/js/touch.js'//全局

import api from './axios_api/index.js'//引入axios
Vue.prototype.$api = api;// 绑定 axios 到全局（vue对象原型方法）
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(validates);//js验证
// Vue.use(onlineService);//Udesk

// Vue.prototype.touch=touch



//接口路径配置
// import globalPath from '@/assets/js/globalPath.vue' 
// Vue.prototype.API = globalPath.globalPath //接口路径配置
Vue.prototype.API = 'api/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
