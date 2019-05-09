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
            <li class="expressService">
                <p class="expressServiceTitle">{{expressService.title}}</p>
                <ul>
                    <li v-for="(item,index) in expressService.content" :key="index">
                        <p>{{item.title}}</p>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
            </li>
            <li class="scenes">
                <p>物流快递行业的短信应用场景</p>
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
            //物流快递行业发展现状
            explain: {
                title: '物流快递行业发展现状',
                content: '长期以来，邮件、包裹等货物运输到目的地后，往往通过传统的手工电话通知的方式告知对方提货。但由于种种原因，客户手机关机、商务事宜不方便接听电话时常有之，导致货物不能按时交付、仓库压货，并且，更多的快递公司在快递投递失败或他人代收的情况下，未通知原收件人，导致收件人不能及时收取。'
            },
            //物流快递行业的服务内容
            expressService: {
                title: '物流快递行业的服务内容',
                content: [
                    {
                        title: '① 客户服务',
                        content: '客户服务（发货、收货、退货、结算提醒、运单管理、满意度调查等）'
                    },
                    {
                        title: '② 车辆运输服务',
                        content: '车辆运输服务（车辆跟踪、资源调配、事件提醒、敏感区域监控）'
                    }
                ]
            },
            
            //合作客户
            partner: {
                title: '合作客户',
                customer: [
                    {imgSrc: require('img/partner_07.png'),imgAlt: '递易'},
                    {imgSrc: require('img/partner_08.png'),imgAlt: '闪送'},
                    {imgSrc: require('img/partner_09.png'),imgAlt: '中通快递'},
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
            background: url('./../../assets/img/logisticsExpressBanner.png') no-repeat;
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
        //物流快递行业的服务内容
        .expressService{
            background-color: #ffffff;
            padding-bottom: 20px;
            margin-bottom: $mg_b;
            .expressServiceTitle{
                font-size: 18px;
                color: #333333;
                text-align: center;
                padding-top: 16px;
                padding-bottom: 16px;
            }
            ul{
                padding-left: 15px;
                padding-right: 15px;
                li{
                    background-color: #f8f8f8;
                    border: 1px solid #cccccc;
                    p:nth-child(1){
                        background-color: #e1edf6;
                        height: 40px;
                        line-height: 40px;
                        padding-left: 18px;
                        font-size: 15px;
                    }
                    p:nth-child(2){
                        padding: 25px 12px 25px 18px;
                        font-size: 14px;
                    }
                }
                li:nth-child(2){
                    border-top: none;
                }
            }
            
        }
        //物流快递行业的短信应用场景
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
                width: 292px;
                height: 188px;
                background: url('./../../assets/img/logisticsExpressScene.png') no-repeat;
                background-size: 100% 100%;
            }
        }
        //合作客户
        .partner{
            margin-bottom: $mg_b;
        }
    }
</style>
