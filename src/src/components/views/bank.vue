<template>
    <div class="mobileMms">
        <ul>
            <li class="banner">
                <p>
                    <router-link to="registrationFree"><el-button type="warning" size="mini">立即注册</el-button></router-link>
                </p>
            </li>
            <li class="electronicBusiness">
                <commonSituation :explain="explain"></commonSituation>
            </li>
            <li class="scenes">
                <p>银行金融行业的短信应用场景</p>
                <p></p>
            </li>
            <li class="partner">
                <commonPartner :partner="partner"></commonPartner>
            </li>
            <li>
                <commonFooter :footLinks="footLinks" :isLine="isLine"></commonFooter>
            </li>
        </ul>
    </div>
</template>
<script>
import commonFooter from '@/components/common/commonFooter.vue'
import commonSituation from '@/components/common/commonSituation.vue'
import commonPartner from '@/components/common/commonPartner.vue'
export default {
    name: 'mobileMms',
    data () {
        return {
            //银行金融行业发展现状
            explain: {
                title: '银行金融行业发展现状',
                content: '金融银行业普遍开始了采用短信方式通知金融服务信息，各大银行在完成数据大集中后，纷纷建立起自己的短信业务平台并开始向客户发送金融业务，服务类短信，信息的实时通知，信息的查询、交互是最核心的需求。现阶段，主要是通过行业应用网关，基于短消息等业务系统提供帐务信息查询、实时变动通知、客服关怀通知等金融信息服务。'
            },
            //合作客户
            partner: {
                title: '合作客户',
                customer: [
                    {imgSrc: require('img/partner_10.png'),imgAlt: '宜信普惠'},
                    {imgSrc: require('img/partner_11.png'),imgAlt: '拍拍贷'},
                    {imgSrc: require('img/partner_12.png'),imgAlt: '南京银行'},
                ]
            },
            //链接
            footLinks: [
                {
                    footLinkTitle: '解决方案',
                    footLinkChild: [
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
                        },
                    ]
                },
            ],
            //链接类型
            isLine: 'false',
        }
    },
    components: {
        commonFooter,
        commonSituation,
        commonPartner
    },
}
</script>

<style lang="scss" scoped type="text/css">
    $mg_b: 5px;
    .productionTitle{
    text-align: center;
    font-size: 18px;
    color: #010101;
    padding: 15px 0;
  }
    .mobileMms{
        background-color: #eaeaea;
        .banner{
            width: 375px;
            height: 180px;
            background: url('./../../assets/img/bankBanner.png') no-repeat;
            background-size: 100% 100%;
            margin-bottom: $mg_b;
            p{
                width: 100%;
                // padding-left: 166px;
                text-align: center;
                padding-top: 123px;
                a{
                    display: inline-block;
                    .el-button{
                        color: #ffffff;
                        font-size: 15px;
                        background: linear-gradient(#FF8B34,#FF5A00);
                        border-color: transparent;
                    }
                }
            }
        }
        .advantage{
            background-color: #ffffff;
            margin-bottom: $mg_b;
            padding-bottom: 6px;
        }
        .electronicBusiness{
            margin-bottom: $mg_b;
        }
        //银行金融行业的短信应用场景
        .scenes{
            margin-bottom: $mg_b;
            padding-bottom: 18px;
            background-color: #f9f9f9;
            text-align: center;
            p:nth-child(1){
                font-size: 18px;
                color: #333333;
                padding-top: 18px;
                padding-bottom: 18px;
            }
            p:nth-child(2){
                margin: 0 auto;
                width: 184px;
                height: 188px;
                background: url('./../../assets/img/bankScene.png') no-repeat;
                background-size: 100% 100%;
            }
        }
        //合作客户
        .partner{
            margin-bottom: $mg_b;
        }
    }
</style>
