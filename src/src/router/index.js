import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: home
    },
    // {
    //   path: '/phoneMsg',//手机短信
    //   name: 'phoneMsg',
    //   component: () => import ('./../components/views/phoneMsg.vue')
    // },
    //产品与服务
    {
      path: '/sms',//行业短信
      name: 'sms',
      component: () => import ('./../components/views/sms.vue')
    },
    {
      path: '/code',//验证码
      name: 'code',
      component: () => import ('./../components/views/code.vue')
    },
    {
      path: '/smsInternational',//国际短信
      name: 'smsInternational',
      component: () => import ('./../components/views/smsInternational.vue')
    },
    {
      path: '/mobileMms',//手机彩信
      name: 'mobileMms',
      component: () => import ('./../components/views/mobileMms.vue')
    },
    {
      path: '/serviceVoice',//语音服务
      name: 'serviceVoice',
      component: () => import ('./../components/views/serviceVoice.vue')
    },
    {
      path: '/iot',//物联网卡
      name: 'iot',
      component: () => import ('./../components/views/iot.vue')
    },
    //解决方案
    {
      path: '/electronicBusiness',//电子商务
      name: 'electronicBusiness',
      component: () => import ('./../components/views/electronicBusiness.vue')
    },
    {
      path: '/internet',//互联网
      name: 'internet',
      component: () => import ('./../components/views/internet.vue')
    },
    {
      path: '/logisticsExpress',//物流快递
      name: 'logisticsExpress',
      component: () => import ('./../components/views/logisticsExpress.vue')
    },
    {
      path: '/bank',//银行金融
      name: 'bank',
      component: () => import ('./../components/views/bank.vue')
    },
    //关于我们
    {
      path: '/aboutUs',//关于我们
      name: 'aboutUs',
      component: () => import ('./../components/views/aboutUs.vue')
    },
    //免费注册
    {
      path: '/registrationFree',
      name: 'registrationFree',
      component: () => import ('./../components/views/registrationFree.vue')
    },
    {
      path: '/commonOne',//公共组件1
      name: 'commonOne',
      component: () => import ('./../components/common/commonOne.vue')
    },
  ]
})
