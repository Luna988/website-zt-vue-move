<template>
    <div class="mobileMms">
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
    name: 'mobileMms',
    data () {
        return {
            commonOnesData: {
                commonOnesTitle: '他们为什么都选择助通科技？',
                commonOnes: [
                    {
                        imgSrc: require('img/codeL_01.png'),
                        introduceTitle: '3秒可达',
                        introduction: '三网合一，专属通道，验证码优先机制，保证验证码的及时性。',
                    },
                    {
                        imgSrc: require('img/codeL_02.png'),
                        introduceTitle: '到达率99.5%',
                        introduction: '支持大容量、高并发，8年短信行业经验，到达率99.5%以上',
                    },
                    {
                        imgSrc: require('img/codeL_03.png'),
                        introduceTitle: '易开发',
                        introduction: '相关API接口文档，技术支持协助对接联调，简单易用，方便快捷',
                    },
                    {
                        imgSrc: require('img/codeL_04.png'),
                        introduceTitle: '易管理',
                        introduction: '线上直接查询收发明细，发送状态报告实时返回，不定期业务培训升级',
                    },
                ],
            },
            lists: {
                title: '验证码的使用场景',
                list: [
                    {
                        imgSrc: require('img/codeBanner_01.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/codeBanner_02.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/codeBanner_03.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/codeBanner_04.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/codeBanner_05.png'),
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
            height: 300px;
            background: url('./../../assets/img/codeBanner.png') no-repeat;
            // background: url('img/sms_banner.png') no-repeat;
            background-size: 100% 100%;
            margin-bottom: $mg_b;
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