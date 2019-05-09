<template>
  <div class="home">
    <ul>
      <li class="banner">
        <div>
          <p><span class="color_num">106</span>专用通道  三网通用</p>
          <p><span class="color_num">3-5</span>秒到达！独立端口</p>
          <p>流速<span class="color_num">800</span>条/s</p>
        </div>
      </li>
      <!-- 产品介绍 -->
      <li class="production">
        <p class="productionTitle">产品介绍</p>
        <ul class="productionContainer">
          <li v-for="(item, index) in products" :key="index">
            <p class="imgBox"><img :src='item.imgSrc' :alt='item.imgAlt'></p>
            <div class="description">
              <p>{{item.introduceTitle}}</p>
              <p>{{item.introduction}}</p>
            </div>
            <p class="paths">
              <router-link :to="item.path">详情</router-link>
            </p>
          </li>
        </ul>
      </li>
      <!-- 三网合一 -->
      <li class="sanwang">
        <div>
          <p>三网合一、五秒必达</p>
          <p>极速验证、8年技术沉淀</p>
        </div>
        <div></div>
      </li>
      <!-- 核心优势 -->
      <li class="advantage">
        <commonOne :commonOnesDatas="commonOnesData"></commonOne>
      </li>
      <!-- 立即咨询 -->
      <li class="seek">
        <p class="seekTitle">立即咨询</p>
        <el-form :model="loginForms" :rules="rules" ref="loginForms" label-width="24%" class="demo-loginForms" size="small">
          <el-form-item label="姓名" prop="userName" :rules="filter_rules({type:'userNameChinese',message:'请输入用户名称',min:2,max:5})"> 
            <el-input type="text" v-model="loginForms.userName" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="mobile" :rules="filter_rules({required:true,type:'mobile',message:'请输入手机号'})">
            <el-input type="iphone" v-model="loginForms.mobile" placeholder="请输入手机号" ></el-input>
          </el-form-item>
          <!-- <el-form-item  label="验证码" prop="code">
              <el-input type="number" v-model="loginForms.code" style="width:52%;font-size:13px;border-color:#DCDFE6;color:#adadad;" placeholder="请输入6位验证码"></el-input>
              <el-button type="primary" @click="getPhoneCode(loginForms.mobile)" style="margin-left:2%;width:44%;font-size:13px;padding:9px 0;background-color:transparent;border-color:#666666;color:#7c91a1;" v-if="nmb==120">获取验证码</el-button>
              <el-button  type="primary" style="margin-left:4%;width:44%;font-size:13px;width:93px;padding:9px 0;background-color:transparent;border-color:#666666;color:#7c91a1;" disabled v-else>重新获取({{nmb}})</el-button>
          </el-form-item> -->
          <el-form-item label="邮箱" prop="email" :rules="filter_rules({type:'email',message:'请输入邮箱'})">
            <el-input type="text" v-model="loginForms.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="公司" prop="firm" :rules="filter_rules({type:'firm',message:'请输入公司名称'})">
            <el-input type="text" v-model="loginForms.firm" placeholder="请输入公司名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%;">免费申请</el-button>
          </el-form-item>
        </el-form>
      </li>
      <!-- 底部链接 -->
      <li class="footLinks">
        <!-- <commonFooter :footLinks="footLinks"></commonFooter> -->
        <div class="commonFooterBox" v-for="(items,index) in footLinks" :key="index">
            <p class="commonFooterTitle">{{items.footLinkTitle}}</p>
            <ul class="commonFooterContain">
                <li v-for="(item,index2) in items.footLinkChild" :key="index2">{{item.title}}</li>
            </ul>
        </div>
        <div class="footLinksDiv">
          <p>关注助通科技</p>
          <p>微信公众号</p>
          <p></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import commonOne from '@/components/common/commonOne.vue'
import commonFooter from '@/components/common/commonFooter.vue'
export default {
  name: 'home',
  data () {
    return {
      //立即注册开始
      nmb:120,
      loginForms: {
        userName: '',
        mobile: '',
        code: '',
        email: '',
        firm: '',
      },
      rules: {
        code: [
          { required: true, type: 'number', message: '请输入正确验证码！', trigger: 'change' }
        ],
      },
      //立即注册结束
      banners: {
        title_1: '专用通道  三网通用',
        title_2: '秒到达！独立端口',
        title_3: '专用通道  三网通用',
      },
      //产品介绍
      products: [
        {
          imgSrc: require('./../assets/img/home_01.png'),
          imgAlt: '手机短信',
          introduceTitle: '手机短信',
          introduction: '实时监控，秒级触达，全网覆盖，安全稳定，24小时免审机制',
          path: '/sms'
        },
        {
          imgSrc: require('./../assets/img/home_02.png'),
          imgAlt: '手机彩信',
          introduceTitle: '手机彩信',
          introduction: '长短信、多图文、音视频多方位媒体，全方位展示，时尚新媒体传播方式',
          path: '/mobileMms'
        },
        {
          imgSrc: require('./../assets/img/home_03.png'),
          imgAlt: '语音验证',
          introduceTitle: '语音验证',
          introduction: '支持大容量、高并发处理，方便快捷、安全可靠，极大提升用户体验',
          path: '/serviceVoice'
        },
        {
          imgSrc: require('./../assets/img/home_04.png'),
          imgAlt: '物联网卡',
          introduceTitle: '物联网卡',
          introduction: '采用专用号段和独立网元，满足智能硬件和物联网行业对设备联网的管理需求',
          path: '/iot'
        }
      ],
      //核心优势
      commonOnesData: {
        commonOnesTitle: '核心优势',
        commonOnes: [
          {
              imgSrc: require('./../assets/img/advantage_01.png'),
              introduceTitle: '三网合一',
              introduction: '号段正规，实现三网同号发短信，全国各地都可以发',
          },
          {
              imgSrc: require('./../assets/img/advantage_02.png'),
              introduceTitle: '稳定极速',
              introduction: '优质通道，独享短端口，VIP服务不受任何节假日冲击',
          },
          {
              imgSrc: require('./../assets/img/advantage_03.png'),
              introduceTitle: '接入灵活',
              introduction: '提供各种开发环境的API，一段代码即可完成对接',
          },
          {
              imgSrc: require('./../assets/img/advantage_04.png'),
              introduceTitle: '个性服务',
              introduction: '一对一VIP优质服务，专业的客服服务团队为您提供7x24x365的服务响应',
          },
          {
              imgSrc: require('./../assets/img/advantage_05.png'),
              introduceTitle: '管控轻松',
              introduction: '余额报警，透明查询收发明细，每日发送详情推送',
          },
          {
              imgSrc: require('./../assets/img/advantage_06.png'),
              introduceTitle: '短信5秒内到达',
              introduction: '无延迟、无丢包，高并发解决方案，让业务流程万无一失',
          }
        ],
      },
      //底部链接
      footLinks: [
        {
          footLinkTitle: '产品介绍',
          footLinkChild: [
            {
              title: '行业短信',
              // path: '/sms',
            },
            {
              title: '验证码',
              // path: '/code',
            },
            {
              title: '国际短信',
              // path: '/smsInternational',
            },
            {
              title: '手机彩信',
              // path: '/mobileMms',
            },
            {
              title: '语音服务',
              // path: '/serviceVoice',
            },
            {
              title: '物联网卡',
              // path: '/iot',
            },
          ]
        },
        {
          footLinkTitle: '解决方案',
          footLinkChild: [
            {
              title: '电子商务',
              // path: '/electronicBusiness',
            },
            {
              title: '互联网',
              // path: '/internet',
            },
            {
              title: '物流快递',
              // path: '/logisticsExpress',
            },
            {
              title: '银行金融',
              // path: '/bank',
            }
          ]
        },
        {
          footLinkTitle: '关于我们',
          footLinkChild: [
            {
              title: '关于我们',
              // path: '/aboutUs',
            }
          ]
        }
      ],
    }
  },
  components: {
    commonOne,
    commonFooter,
  },
  methods: {
    //立即咨询开始
    
    //立即咨询结束

    // 获取手机验证码
    getPhoneCode(val){
      // console.log(val)
      if(this.loginForms.userName && /^1[3|4|5|7|8][0-9]\d{8}$/.test(this.loginForms.mobile)){
          axios({
              method: 'post',
              url: this.API.api+'getLoginCode',
              data:{
                  userName:this.loginForms.userName,
                  mobile:this.loginForms.mobile
              }
          })
          .then( res=> {
              if(res.data.code == 200){
                  --this.nmb;
                  const timer= setInterval(res=>{
                      --this.nmb;
                      if(this.nmb < 1){
                          this.nmb = 120;
                          clearInterval(timer);
                      };
                  },1000);
                  this.$message({
                      type: 'success',
                      duration:'2000',
                      message:'验证码已发送至手机!'
                  });
              }else{
                
                  this.$message({
                      type: 'error',
                      duration:'2000',
                      message:res.data.message
                  });
              }
          })
      }else{
          this.$message({
              message: '请先填写正确用户名与手机号',
              type: 'warning'
          });
      }
    },
    //登录
    codeLogin(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
                axios({
                    method: 'post',
                    url: this.API.api+'login',
                    data:this.loginForms
                })
                .then( res=> {
                    if(res.data.code == 200){
                        //存token
                        let d = new Date();
                        d.setTime(d.getTime()  + 1000 * 60 * 30);
                        let expires = "expires=" + d.toUTCString();
                        document.cookie = "token=Bearer "+ res.data.data +";expires="+expires;
                        this.$router.push('/home');
                    }else{
                        this.$message({
                            message: res.data.data,
                            type: 'warning'
                        });
                    }
                })             
            } else {
                console.log('error submit!!');
                return false;
            }
        })
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
$mg_b: 5px;
  .home{
    width: 375px;
    margin: 0 auto;
    background-color: #eaeaea;
  }
  .banner{
    width: 375px;
    height: 330px;
    background: url('./../assets/img/banner.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    div{
      position: absolute;
      right: 15px;
      text-align: right;
      top: 35px;
      p:nth-child(1){
        font-size: 18px;
        color: #FEFEFE;
        padding-bottom: 8px;
      }
      p:nth-child(2){
        font-size:12px;
        color: #EDEDED;
        padding: 1px 0;
      }
      p:nth-child(3){
        @extend p:nth-child(2);
      }
    }
  }
  //产品介绍
  .production{
    background-color: #ffffff;
    margin-bottom: $mg_b;
  }
  .productionTitle{
    text-align: center;
    font-size: 18px;
    color: #010101;
    padding: 15px 0;
  }
  .productionContainer{
    padding: 0 20px;
    li{
      border-top: 1px solid #eaeaea;
      display: flex;
      align-items: center;
      padding-top: 18px;
      padding-bottom: 18px;
    }
  }
  .imgBox{
    padding-left: 3px;
    img{
      width: 40px;
      height: 40px;
    }
  }
  .description{
    padding-left: 12px;
    padding-right: 12px;
    color: #333333;
    p:nth-child(1){
      font-size: 14px;
      padding: 4px 0;
    }
    p:nth-child(2){
      font-size: 12px;
    }
  }
  .paths{
    text-align: center;
    font-size: 12px;
    border: 1px solid #1588e0;
    border-radius: 3px;
    a{
      display: inline-block;
      width: 58px;
      padding: 6px 0;
    }
  }
  //三网合一、五秒必达
  .sanwang{
    width: 375px;
    height: 326px;
    background-color: #F8FBFC;
    margin-bottom: $mg_b;
    div:nth-child(1){
      padding-top: 17px;
      text-align: center;
      color: #010101;
      p:nth-child(1){
        font-size: 18px;
      }
      p:nth-child(2){
        font-size: 12px;
        margin-top: 8px;
      }
    }
    div:nth-child(2){
      width: 290px;
      height: 236px;
      margin: 18px auto 0 auto;
      background: url('./../assets/img/home_banner02.png') no-repeat;
      background-size: 100% 100%;
    }
  }
  //核心优势
  .advantage{
    @extend .production;
    padding-bottom: 6px;
  }
  //立即咨询
  .seek{
    width: 375px;
    height: 330px;
    margin-bottom: $mg_b;
    background: url('./../assets/img/home_seek.png') no-repeat;
    background-size: 100% 100%;
    .seekTitle{
      @extend .productionTitle;
    }
    form{
      padding-right: 30px;
    }
  }
  //底部链接
  .footLinks{
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 25px;
    background-color: #2e2e2e;
    .commonFooterBox{
      padding-top: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid #666666;
      .commonFooterTitle{
        font-size: 17px;
        color: #ffffff;
        padding-left: 4px;
        padding-bottom: 3px;
      }
      .commonFooterContain{
        display: flex;
        flex-wrap: wrap;
        li{
            height: 18px;
            line-height: 18px;
            font-size: 14px;
            // background-color: #333333;
            margin: 4px 4px;
          a{
            width: 100%;
            font-size: 14px;
            color: #999999;
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      }
    }


    //////
    .footLinksDiv{
      margin-top:10px;
      p:nth-child(1){
        font-size: 17px;
        color: #ffffff;
      }
      p:nth-child(2){
        padding: 8px 0 14px 0;
        font-size: 14px;
        color: #999999;
      }
      p:nth-child(3){
        width: 106px;
        height: 106px;
        background: url('./../assets/img/wechat.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  // banner图上数字颜色
  $coolor_num: #FC6F37;
  .color_num{
    color: $coolor_num;
  }
  
</style>
<style lang="scss" type="text/css">
.seek{
  .el-form-item__content{
    width: 76%;
    line-height: 30px;
  }
  .el-form-item{
    margin-bottom: 16px;
  }
  .el-input__inner{
    height: 34px;
    background-color: transparent;
    border-color: #666666;
    color: #666666;
  }
  .el-button{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .el-input__inner{
    // border-color: #DCDFE6;
    border-color: #666666;
    line-height: 16px;
    // border-color: #DCDFE6;
    // background-color: green;
    // padding-top: 11px;
    // padding-top: 11px;
    // padding-bottom: 11px;
  }
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #7c91a1;
  }
  //聚焦输入框颜色
  .el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus{
    border-color: #409EFF;
  }
}
      
</style>

