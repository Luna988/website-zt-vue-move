<template>
    <div class="sms">
        <ul>
            <li class="banner">
                <p>
                    <router-link to="registrationFree"><el-button type="warning" size="mini">立即注册</el-button></router-link>
                </p>
            </li>
            <li class="advantage">
                <commonOne :commonOnesDatas="commonOnesData"></commonOne>
            </li>
            <li>
                <commonSwiper :lists="lists"></commonSwiper>
            </li>
            <li>
                <commonFooter :footLinks="footLinks" :isLine="isLine"></commonFooter>
            </li>
        </ul>
    </div>
</template>
<script>
import commonOne from '@/components/common/commonOne.vue'
import commonSwiper from '@/components/common/commonSwiper.vue'
import commonFooter from '@/components/common/commonFooter.vue'
export default {
    name: 'sms',
    data () {
        return {
            commonOnesData: {
                commonOnesTitle: '他们为什么都选择助通科技？',
                commonOnes: [
                    {
                        imgSrc: require('img/sms_01.png'),
                        introduceTitle: '三网合一',
                        introduction: '对接三大运营商，覆盖各行各业，10690号段，全国各地都可以发',
                    },
                    {
                        imgSrc: require('img/sms_02.png'),
                        introduceTitle: '到达率99.5%',
                        introduction: '排除停机、空号、运营商黑名单等原因，到达率99.5%以上',
                    },
                    {
                        imgSrc: require('img/sms_03.png'),
                        introduceTitle: '通道组护航',
                        introduction: '一账户多通道，遵循智能排队机制，保证短信后台不间断、不拥堵',
                    },
                ],
            },
            lists: {
                title: '行业短信使用场景',
                list: [
                    {
                        imgSrc: require('img/smsBanner_01.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/smsBanner_02.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/smsBanner_03.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/smsBanner_04.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/smsBanner_05.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/smsBanner_06.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                ],
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
        commonSwiper,
        commonFooter,
    },
    beforeCreate(){
        this.isMask = true;
        console.log(this.isMask);
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
    .sms{
        background-color: #eaeaea;
        .banner{
            width: 375px;
            height: 300px;
            background: url('./../../assets/img/sms_banner.png') no-repeat;
            // background: url('img/sms_banner.png') no-repeat;
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
    }
</style>