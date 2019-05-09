<template>
  <div id="app">
    <header>
      <router-link to="/"><img src="./assets/img/logo.png" alt="短信验证码平台"></router-link>
      <!-- <router-link to="/"><img v-if="!this.isMask" src="./assets/img/logo.png" alt="短信验证码平台"></router-link> -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-links"  @click="mask">
          111
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-collapse v-model="activeNames" v-for="(items,index) in menus" :key="index" accordion>
              <el-collapse-item :title="items.titles" :name="items.name">
                <el-dropdown-item>
                  <ul class="downContent" @click="mask">
                    <li v-for="(item,num) in items.childs" :key="num"><router-link :to="item.path">{{item.title}}</router-link></li>
                  </ul>
                </el-dropdown-item>
              </el-collapse-item>
            </el-collapse>
        </el-dropdown-menu>
      </el-dropdown>
    </header>
    <router-view/>
    <!-- <div class="mask" v-if="maskShow"></div> -->
    <div class="mask" @click="mask"></div>
    <!-- <footer @click="toResource">
      {{onlineAsk.title}}
    </footer> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      maskShow: false,
      isMask: true,
      activeNames: ['1'],
      menus: [
        {
          titles: '产品与服务',
          name: '1',
          childs: [
            {
              title: '行业短信',
              path: '/sms',
            },
            {
              title: '验证码',
              path: '/code',
            },
            {
              title: '国际短信',
              path: '/smsInternational',
            },
            {
              title: '手机彩信',
              path: '/mobileMms',
            },
            {
              title: '语音服务',
              path: '/serviceVoice',
            },
            {
              title: '物联网卡',
              path: '/iot',
            }
          ]
        },
        {
          titles: '解决方案',
          name: '2',
          childs: [
            {
              title: '电子商务',
              path: '/electronicBusiness',
            },
            {
              title: '互联网',
              path: '/internet',
            },
            {
              title: '物流快递',
              path: '/logisticsExpress',
            },
            {
              title: '银行金融',
              path: '/bank',
            }
          ]
        },
        {
          titles: '关于我们',
          name: '3',
          childs: [
            {
              title: '关于我们',
              path: '/aboutUs',
            }
          ]
        }
        
      ],
      onlineAsk: {
        title: '在线咨询',
        udeskUrl: 'https://zhutong.s2.udesk.cn/im_client/?web_plugin_id=1931',
      }
    }
  },
  beforeCreate(){
    // this.isMask = true;
    // console.log(this.isMask);
  },
  methods: {
    toResource(){
      window.location.href = this.onlineAsk.udeskUrl;//跳转至客服Udesk
    },
    mask(){
      // console.log(this.isMask);
      let aMask = document.getElementsByClassName('mask')[0];
      aMask.style.height = document.getElementById('app').offsetHeight + 'px';
      aMask.style.background='rgba(52,54,56,0.4)';
      aMask.style.zIndex = '2000';
      this.isMask?aMask.style.display = 'inline':aMask.style.display = 'none';
      this.isMask=!this.isMask;
      // this.maskShow = !this.maskShow;
      
    }
  },
}
</script>
<style lang="scss" scoped type="text/css">
  #app{
    width: 375px;
    margin: 0 auto;
    .mask{
      position: absolute;
      display: none;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
  }
  header{
    background-color: #323232;
    height: 50px;
    // line-height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
      display: inline-block;
    }
    img{
      width: 102px;
      height: 30px;
    }
    
  }
  .downContent li{
    background-color: #3B3B3B;
    
    font-size: 14px;
    padding-left: 46px;
    border-top: 0.5px solid #444444;
    border-bottom: 0.5px solid #444444;
    height: 40px;
    line-height: 40px;
    a{
      display: block;
      color: #dddddd;
    }
  }
  .downContent li:first-child.downContent li:last-child{
    border-bottom: 1px solid #444444;
  }
  .el-dropdown-links{
    width: 17px;
    height: 16px;
    background: url('./assets/img/homeR.png') no-repeat;
    background-size: 100% 100%;
    color: transparent;
  }
  footer{
    overflow: hidden;
    z-index: 999;
    position: fixed;
    bottom: 0;
    width: 375px;
    height: 50px;
    background: linear-gradient(#ff8931,#ff5b02);
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    font-size: 18px;
  }
  
</style>
<style lang="scss">
// #app{
  // position: relative;
  // .el-dropdown-menu{
  //   left: 86px !important;
  //   top: 40px !important;
  //   width: 288px !important;
  //   border: none !important;
  //   padding: 0 0 !important;
  // }
  // .el-dropdown-menu__item{
  //   padding-left: 0px !important;
  //   padding-right: 0px !important;
  // }
  // .el-collapse-item__header{
  //   background-color: #2E2E2E !important;
  //   color: #FFFFFF !important;
  //   font-size: 15px !important;
  //   padding-left: 30px !important;
  //   border-bottom: none !important;
  // }
  // .el-collapse-item__wrap{
  //   border-bottom: none !important;
  // }
  // .el-collapse-item__content{
  //   padding-bottom: 0 !important;
  // }
  // .el-collapse{
  //   border-top: 1px solid #3a3a3a !important;
  //   border-bottom: 1px solid #3a3a3a !important;
  // }
  // .el-popper[x-placement^=bottom] .popper__arrow::after{
  //   top: 0 !important;
  // }
  // .el-popper[x-placement^=bottom] .popper__arrow{
  //   border-bottom-color: red !important;
  // }
// }




.el-dropdown-menu{
    left: 86px !important;
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      left: 166px !important;
    }
    @media screen and (min-width: 1024px) {
      left: 255px !important;
    }
    top: 51px !important;
    width: 288px !important;
    border: none !important;
    padding: 0 0 !important;
    background-color: #2E2E2E !important;
    margin: 0 0 !important;
  }
  .el-dropdown-menu__item{
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .el-collapse-item__header{
    background-color: #2E2E2E !important;
    color: #FFFFFF !important;
    font-size: 15px !important;
    padding-left: 30px !important;
    border-bottom: none !important;
  }
  .el-collapse-item__wrap{
    border-bottom: none !important;
  }
  .el-collapse-item__content{
    padding-bottom: 0 !important;
  }
  .el-collapse{
    border-top: 1px solid #3a3a3a !important;
    border-bottom: 1px solid #3a3a3a !important;
  }
  .el-popper[x-placement^=bottom] .popper__arrow::after{
    top: 0 !important;
  }
  .el-popper[x-placement^=bottom]{
    margin-top: 0 !important;
  }
</style>


