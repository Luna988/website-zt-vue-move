<template>
    <div class="registration">
      <ul>
        <li class="banner"></li>
      </ul>
      <div class="registrationFree">
        <!-- 立即注册 -->
        <p class="registrationFreeTitle">免费注册</p>
        <el-form :model="loginForms" :rules="rules" :ref="loginForms" label-width="24%" class="demo-loginForms" size="small">
          <el-form-item label="姓名" prop="userName" :rules="filter_rules({type:'userNameChinese',message:'请输入用户名称',min:2,max:5})"> 
            <el-input type="text" v-model="loginForms.userName" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="mobile" :rules="filter_rules({required:true,type:'mobile',message:'请输入手机号'})">
            <el-input type="iphone" v-model="loginForms.mobile" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email" :rules="filter_rules({type:'email',message:'请输入邮箱'})">
            <el-input type="text" v-model="loginForms.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="公司" prop="firm" :rules="filter_rules({type:'firm',message:'请输入公司名称'})">
            <el-input type="text" v-model="loginForms.firm" placeholder="请输入公司名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="phoneLogin(loginForms)" style="width:100%;">免费申请</el-button>
          </el-form-item>
        </el-form>
      </div>
        
    </div>
</template>
<script>
import { METHODS } from 'http';
import { constants } from 'fs';
// import axios from 'axios';
var axios = require('axios');
export default {
  name: 'registration',
  data () {
    return {
      nmb:120,
      loginForms: {
        userName: '',
        mobile: '',
        // code: '',
        email: '',
        firm: '',
      },
      rules: {
        code: [
          { required: true, type: 'number', message: '请输入正确验证码！', trigger: 'change' }
        ],
      },
   
    }
    
  },
  methods: {
    phoneLogin(formName){
      // console.log(this.loginForms);
          // this.$refs[formName].validate((valid) => {
          //     if (valid) {
          //         axios({
          //             method: 'post',
          //             url: this.API.api+'login',
          //             data:this.loginForms
          //         })
          //         .then( res=> {
          //             if(res.data.code == 200){
          //                 //存token
          //                 let d = new Date();
          //                 d.setTime(d.getTime()  + 1000 * 60 * 30);
          //                 let expires = "expires=" + d.toUTCString();
          //                 document.cookie = "token=Bearer "+ res.data.data +";expires="+expires;
          //                 this.$router.push('/home');
          //             }else{
          //                 this.$message({
          //                     message: res.data.data,
          //                     type: 'warning'
          //                 });
          //             }
          //         })             
          //     } else {
          //         console.log('error submit!!');
          //         return false;
          //     }
          // });
          this.$refs[formName].validate((valid) => {
            console.log(this.API.api);
            
              // if (valid) {
                  axios({   
                      method: 'get',
                      // url: 'http://192.168.1.214:8094/aaa',
                      url: this.API+'aaa',
                  })
                  .then( res=> {
                    console.log(res);
                  })        
              // } else {
              //     console.log('error submit!!');
              //     return false;
              // }
          });
          // this.$refs[formName].validate((valid) => {
          //       if (valid) {
          //           alert('submit!');
          //       } else {
          //           console.log('error submit!!');
          //           return false;
          //       }
          //   });
      },
  },
  
}
</script>
<style scoped lang="scss" type="text/css">
$mg_b: 5px;
  .banner{
      width: 375px;
      height: 180px;
      background: url('./../../assets/img/registration.png') no-repeat;
      background-size: 100% 100%;
      margin-bottom: $mg_b;
  }
.registrationFree{
    width: 375px;
    background-size: 100% 100%;
    .registrationFreeTitle{
      text-align: center;
      font-size: 18px;
      color: #010101;
      padding: 15px 0;
    }
    form{
      padding-right: 10%;
      .el-input__inner{
        height: 30px;
        // line-height: 30px;
      }
      
    }
  }
</style>
<style lang="scss" type="text/css">
.registrationFree{
  .el-form-item__content{
    width: 76%;
    // line-height: 30px;
  }
  .el-form-item{
    margin-bottom: 16px;
  }
  .el-input__inner{
    height: 34px;
    background-color: transparent;
    border-color: #666666;
    color: #666666;
    padding-left: 10px;
    padding-right: 10px;
  }
  .el-button{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .el-input__inner{
    line-height: 16px;
    border-color: #DCDFE6;
    // background-color: green;
    // padding-top: 11px;
    // padding-top: 11px;
    // padding-bottom: 11px;
  }
  input::webkit-input-placeholder{
    color: #adadad;
  }
  //聚焦输入框颜色
  .el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus{
    border-color: #409EFF;
  }
}
      
</style>