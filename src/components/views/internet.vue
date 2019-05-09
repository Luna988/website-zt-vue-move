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
            <!-- 应用场景 -->
            <li>
                <commonApplication :applicationText="applicationText"></commonApplication>
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
import commonApplication from '@/components/common/commonApplication.vue'
export default {
    name: 'mobileMms',
    data () {
        return {
            //电商行业现状
            explain: {
                title: '互联网行业发展现状',
                content: '移动化转型步伐加快，移动端收入逐渐占据主导。随着移动宽带网络的不断完善和移动智能终端的迅速普及，移动互联网快速兴起。其便捷化、个性化、碎片化的特点满足了用户需求，成为互联网业务转型发展的重要方向。电子商务、搜索引擎、社交网络等传统业务均加快移动化转型步伐，并取得了显著成效。'
            },
            //应用场景
            applicationText: {
                activeNames: ['1'],
                title: '互联网行业短信应用场景',
                content: [
                    {title:'短信验证码',name:'1',content:'网络平台用户注册，身份核实，提高账户安全性，用户信息收集。'},
                    {title:'APP短信验证码',name:'2',content:'对于电子商务平台来说，必不可少，在增加用户注册的时候，并且还能够防止恶意用户注册。'},
                    {title:'异常登录提醒',name:'3',content:'当用户在不常用的手机上登录时，为保障用户的信息及资金安全，对用户进行异常登录提醒'},
                    {title:'订单短信、物流信息通知短信',name:'4',content:'能够很好地将信息快速传达到用户的手中，这样能够让用户快速清晰的了解。'},
                    {title:'手机游戏短信',name:'5',content:'针对于大中小企业网络游戏平台，与大批游戏玩家维持以及建立良好的信任感。'},
                    {title:'触发短信',name:'6',content:'专门针对企业客户量身定做的短消息业务，企业客户在使用电脑的同时就可完成与生产办公相结合的内部通讯。'},
                    {title:'消费提醒',name:'7',content:'将每次用户的消费金额以短信的形式发送给用户，让用户的消费透明化。'},
                ]
            },
            //合作客户
            partner: {
                title: '合作客户',
                customer: [
                    {imgSrc: require('img/partner_04.png'),imgAlt: '同城旅游'},
                    {imgSrc: require('img/partner_05.png'),imgAlt: '携程'},
                    {imgSrc: require('img/partner_06.png'),imgAlt: '中国青旅'},
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
        commonPartner,
        commonApplication
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
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
            background: url('./../../assets/img/internetBanner.png') no-repeat;
            background-size: 100% 100%;
            margin-bottom: $mg_b;
            p{
                width: 100%;
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
        //应用场景
        // .applications{
        //     background-color: #ffffff;
        //     padding-bottom: 20px;
        //     margin-bottom: $mg_b;
        //     p:nth-child(1){
        //         font-size: 18px;
        //         color: #333333;
        //         text-align: center;
        //         padding-top: 16px;
        //         padding-bottom: 16px;
        //     }

            
        // }
        //合作客户
        .partner{
            margin-bottom: $mg_b;
        }
    }
</style>

