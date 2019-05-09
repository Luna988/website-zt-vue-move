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
            <li class="types">
                <p class="typesTitle">{{scenes.title}}</p>
                <ul class="typesBox">
                    <li class="typeContent" v-for="(items,index) in scenes.content" :key="index">
                        <p><img :src="items.imgSrc" alt=""></p>
                        <p>{{items.title}}</p>
                        <ul>
                            <li v-for="(item,num) in items.child" :key="num">{{item.title}}</li>
                        </ul>
                    </li>
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
                commonOnesTitle: '为什么要用语音验证码?',
                commonOnes: [
                    {
                        imgSrc: require('img/serviceVoice_01.png'),
                        introduceTitle: '5秒到达',
                        introduction: '优质语音短信通道，确保语音验证码5秒到达，99%到达率',
                    },
                    {
                        imgSrc: require('img/serviceVoice_02.png'),
                        introduceTitle: '防刷单',
                        introduction: '多种混音及异常行为限制，有效阻止虚假身份及短信接收机',
                    },
                    {
                        imgSrc: require('img/serviceVoice_03.png'),
                        introduceTitle: '免屏蔽',
                        introduction: '克服信号差及地区屏蔽等因素，实时发送，免屏蔽，提升用户体验',
                    },
                ],
            },
            // 验证码类型
            scenes: {
                title: '语音验证码类型',
                content: [
                    {
                        imgSrc: require('img/serviceVoiceBanner_01.png'),
                        title: '互联网企业',
                        child: [
                            {title: '电商'},
                            {title: '邮箱'},
                            {title: '社交媒体'},
                            {title: '其他应用'},
                            {title: '......'},
                        ]
                    },
                    {
                        imgSrc: require('img/serviceVoiceBanner_02.png'),
                        title: '垂直行业',
                        child: [
                            {title: '航空'},
                            {title: '金融'},
                            {title: '物流'},
                            {title: '医疗'},
                            {title: '快消行业'},
                        ]
                    },
                    {
                        imgSrc: require('img/serviceVoiceBanner_03.png'),
                        title: '终端厂商',
                        child: [
                            {title: '手机'},
                            {title: 'PAD'},
                            {title: '生产商'},
                            {title: '销售商'},
                            {title: '......'},
                        ]
                    },
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
            background: url('./../../assets/img/serviceVoiceBanner.png') no-repeat;
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
        //语音验证码类型
        .types{
            background-color: #f8f8f8;
            color: #333333;
            padding-bottom: 26px;
            margin-bottom: 5px;
            .typesTitle{
                font-size: 18px;
                padding-top: 18px;
                padding-bottom: 13px;
                text-align: center;
                color: #333333;
            }
            .typesBox{
                display: flex;
                flex-wrap: wrap;
                margin: 0 auto;
                padding-left: 11px;
                padding-right: 11px;
                .typeContent{
                    width: 109px;
                    height: 217px;
                    margin: 0 3px;
                    border: 1px solid #dddddd;
                    background-color: #ffffff;
                    text-align: center;
                    p:nth-child(1){
                        padding-top: 23px;
                        padding-bottom: 12px;
                        img{
                            width: 70px;
                            height: 54px;
                        }
                    }
                    p:nth-child(2){
                        font-size: 14px;
                        padding-bottom: 4px;
                    }
                    li{
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>