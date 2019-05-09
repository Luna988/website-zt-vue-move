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
                        imgSrc: require('img/mobileMmsL_01.png'),
                        introduceTitle: '投放灵活，多形式展现',
                        introduction: '较传统短信，无字数和形式的限制，多格式发送，客户体验度好',
                    },
                    {
                        imgSrc: require('img/mobileMmsL_02.png'),
                        introduceTitle: '长短信发送',
                        introduction: '支持超大彩信、多帧图片及文字，满足客户对长短信的发送需求',
                    },
                    {
                        imgSrc: require('img/mobileMmsL_03.png'),
                        introduceTitle: '发送速度',
                        introduction: '不受传统广告制作发行周期的影响，投放灵活，效果显著',
                    },
                    {
                        imgSrc: require('img/mobileMmsL_04.png'),
                        introduceTitle: '全新的媒体传播形式',
                        introduction: '时尚新颖，图文并茂，增加客户新鲜感强，营销效果显著',
                    },
                ],
            },
            lists: {
                title: '手机彩信的使用场景',
                list: [
                    {
                        imgSrc: require('img/mobileMmsBanner_01.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/mobileMmsBanner_02.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/mobileMmsBanner_03.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/mobileMmsBanner_04.png'),
                        introduceTitle: '',
                        introduction: '',
                    },
                    {
                        imgSrc: require('img/mobileMmsBanner_05.png'),
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
            background: url('./../../assets/img/mobileMmsBanner.png') no-repeat;
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