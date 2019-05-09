<template>
    <div class="smsInternational">
        <ul>
            <li class="banner">
                <p>
                    <router-link to="registrationFree"><el-button type="warning" size="mini">立即注册</el-button></router-link>
                </p>
            </li>
            <li class="advantage">
                <commonOne :commonOnesDatas="commonOnesData"></commonOne>
            </li>
            <li class="scene">
                <p class="sceneTitle">{{scenes.title}}</p>
                <ul>
                    <li v-for="(item,index) in scenes.content" :key="index">{{item.title}}</li>
                </ul>
            </li>
            <li>
                <commonFooter :footLinks="footLinks" :isLine="isLine"></commonFooter>
            </li>
        </ul>
    </div>
</template>
<script>
import commonOne from '@/components/common/commonOne.vue'
import commonFooter from '@/components/common/commonFooter.vue'
export default {
    name: 'smsInternational',
    data () {
        return {
            commonOnesData: {
                commonOnesTitle: '他们为什么都选择助通科技？',
                commonOnes: [
                    {
                        imgSrc: require('img/smsInternational_01.png'),
                        introduceTitle: '覆盖范围',
                        introduction: '短信通道覆盖全球216个国家和地区，任何语言均可发送',
                    },
                    {
                        imgSrc: require('img/smsInternational_02.png'),
                        introduceTitle: '发送时间',
                        introduction: '短信通道即时响应，24小时随时可发，不受时间限制',
                    },
                    {
                        imgSrc: require('img/smsInternational_03.png'),
                        introduceTitle: '发送速度',
                        introduction: '即时发送，即时到达，5秒无延迟，成功率高达99.5%以上',
                    },
                    {
                        imgSrc: require('img/smsInternational_04.png'),
                        introduceTitle: '短信签名',
                        introduction: '没有短信签名也可以发送，建议添加短信签名，发送更轻松',
                    },
                ],
            },
            // 国际短信的使用场景
            scenes: {
                title: '国际短信的使用场景',
                content: [
                    {title: '订单通知'},
                    {title: '物流信息推送'},
                    {title: '触发类短信下发'},
                    {title: '会员活动折扣公告'},
                    {title: '注册验证码确认'},
                    {title: '会员关怀信息推送'}
                ]
            },
            //链接
            footLinks: [
                {
                    footLinkTitle: '产品与服务',
                    footLinkChild: [
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
                        },
                    ]
                },
            ],
            //链接类型
            isLine: 'false',
        }
    },
    components: {
        commonOne,
        commonFooter,
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
    .smsInternational{
        background-color: #eaeaea;
        .banner{
            width: 375px;
            height: 300px;
            background: url('./../../assets/img/smsInternationalBanner.png') no-repeat;
            background-size: 100% 100%;
            p{
                width: 100%;
                text-align: center;
                padding-top: 246px;
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
        //场景
        .scene{
            background-color: #f8f8f8;
            color: #333333;
            padding-bottom: 14px;
            margin-bottom: 5px;
            .sceneTitle{
                font-size: 18px;
                padding-top: 18px;
                padding-bottom: 13px;
                text-align: center;
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                margin: 0 auto;
                padding-left: 11px;
                padding-right: 11px;
                li{
                    width: 109px;
                    height: 40px;
                    margin: 3px 3px;
                    text-align: center;
                    line-height: 40px;
                    border: 1px solid #cccccc;
                    background-color: #ffffff;
                    font-size: 12px;
                }
            }
        }
    }
</style>