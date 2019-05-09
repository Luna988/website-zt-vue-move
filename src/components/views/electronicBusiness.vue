<template>
    <div class="mobileMms">
        <ul>
            <li class="banner">
                <p>
                    <router-link to="registrationFree"><el-button  size="mini">立即注册</el-button></router-link>
                </p>
            </li>
            <li class="electronicBusiness">
                <commonSituation :explain="explain"></commonSituation>
            </li>
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
                title: '电商行业现状',
                content: '助通科技为电商企业提供基于移动互联的融合通信、移动客服、移动营销、交易验证、物流跟踪、客户关怀等移动信息服务,为电商企业提供从基础通信资源的整合导入到具体应用实施的一整套移动电商解决方案。'
            },
            //应用场景
            applicationText: {
                activeNames: ['1'],
                title: '电商行业短信应用场景',
                content: [
                    {
                        title:'登录、验证码',name:'1',
                        content:'① 手机登录、手机找回密码、开通手机动态密码；',
                        content2:'② 账户异常安全短信提醒等。'
                    },
                    {
                        title:'各类通知',name:'2',
                        content:'① 付款通知、发货通知及跟踪物流状态查询等等；',
                        content2:'② 降价通知、促销通知、积分通知；',
                        content3:'③ 积分通知、订单状态查询。',
                    },
                    {
                        title:'支付功能',name:'3',
                        content:'① 手机动态口令、无线支付、安全保护问题；',
                        content2:'② 开启/关闭余额支付功能；',
                        content3:'③ 管理数字证书等。此外，客户公司可根据商城与客户之间应用防伪查询，依据短信平台数据的防伪应用开辟商品防伪码查询机制。',
                    },
                    {
                        title:'节日关怀',name:'4',
                        content:'① 节日关怀祝福每逢节假日，系统可自动对会员用户，发送节日祝福；',
                        content2:'② 系统可自动对过生日的会员用户，发送温馨生日祝福。',
                    },
                ]
            },
            //合作客户
            partner: {
                title: '合作客户',
                customer: [
                    {imgSrc: require('img/partner_01.png'),imgAlt: '同城旅游'},
                    {imgSrc: require('img/partner_02.png'),imgAlt: '携程'},
                    {imgSrc: require('img/partner_03.png'),imgAlt: '中国青旅'},
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
            background: url('./../../assets/img/electronicBusinessBanner.png') no-repeat;
            background-size: 100% 100%;
            margin-bottom: $mg_b;
            p{
                width: 100%;
                padding-top: 123px;
                a{
                    margin-left: 166px;
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
        //合作客户
        .partner{
            margin-bottom: $mg_b;
        }
    }
</style>

