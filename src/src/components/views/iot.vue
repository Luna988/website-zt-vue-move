<template>
    <div class="mobileMms">
        <ul>
            <li class="banner">
                <p>
                    <router-link to="registrationFree"><el-button type="warning" size="mini">立即注册</el-button></router-link>
                </p>
            </li>
            <li class="iotExplain">
                <commonSituation :explain="explain"></commonSituation>
            </li>
            <li class="advantage">
                <commonOne :commonOnesDatas="commonOnesData"></commonOne>
            </li>
            <li>
                <commonSwiper :lists="lists"></commonSwiper>
            </li>
            <!-- <li>
                <p>hdjksdasna</p>
                <div class="alyTouch">
                    <div class="news-list news-content">
                        <div class="news-box">
                            <div class="box">

                                
                                <div class="det">
                                    <div class="news-item" style="background-image: url(https://img.alicdn.com/tfs/TB1lqPXDKuSBuNjSsplXXbe8pXa-600-300.jpg)">
                                    <div class="mask"></div>
                                    <p class="news-title">AI学习</p>
                                    <p class="news-desc">一键get技术技能</p>
                                    <a href="img/iotBanner_01.png" class="news-cover"></a>
                                    </div>
                                </div>
                                    
                                
                                <div class="det">
                                    <div class="news-item" style="background-image: url(https://img.alicdn.com/tfs/TB1TFLxDFOWBuNjy0FiXXXFxVXa-600-300.jpg)">
                                    <div class="mask"></div>
                                    <p class="news-title">AI解决方案</p>
                                    <p class="news-desc">人工智能零距离</p>
                                    <a href="https://market.tianchi.aliyun.com/markets/t/ianchi/outsource/ai/mobile?wh_ttid=phone#guid-1107728" class="news-cover"></a>
                                    </div>
                                </div>
                                    
                                
                                <div class="det">
                                    <div class="news-item" style="background-image: url(https://img.alicdn.com/tfs/TB1NXZuDNGYBuNjy0FnXXX5lpXa-600-300.jpg)">
                                    <div class="mask"></div>
                                    <p class="news-title">AI产品</p>
                                    <p class="news-desc">体验阿里AI能力</p>
                                    <a href="https://market.tianchi.aliyun.com/markets/tianchi/outsource/ai/mobile?wh_ttid=phone#guid-1107759" class="news-cover"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </li> -->
            <li>
                
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
import commonSituation from '@/components/common/commonSituation.vue'
export default {
    name: 'mobileMms',
    data () {
        return {
            commonOnesData: {
                commonOnesTitle: '物联网卡的特点',
                commonOnes: [
                    {
                        imgSrc: require('img/iot_01.png'),
                        introduceTitle: '全国统一网络',
                        introduction: '全国区域都可使用，无漫游，轻松开展全国业务',
                    },
                    {
                        imgSrc: require('img/iot_02.png'),
                        introduceTitle: '安全可靠',
                        introduction: '物联网卡专网专用，独立网元，安全性高，可靠性强',
                    },
                    {
                        imgSrc: require('img/iot_03.png'),
                        introduceTitle: '不断升级',
                        introduction: '专门针对新兴的智能硬件产业，在不同领域和行业，不断升级',
                    },
                    {
                        imgSrc: require('img/iot_04.png'),
                        introduceTitle: '价格稳定',
                        introduction: '规格统一，价格稳定，插拔式、贴片式、单切卡等多卡，灵活选择',
                    },
                    {
                        imgSrc: require('img/iot_05.png'),
                        introduceTitle: '在线监控',
                        introduction: '后台可实时监控设备运行情况以及流量消耗情况，及时处理异常情景',
                    },
                    {
                        imgSrc: require('img/iot_06.png'),
                        introduceTitle: '远程操作',
                        introduction: '可通过远程操作对卡片进行充值、暂停、激活、诊断处理',
                    },
                ],
            },
            lists: {
                title: '物联网卡的应用场景',
                list: [
                    {imgSrc: require('img/iotBanner_01.png')},
                    {imgSrc: require('img/iotBanner_02.png')},
                    {imgSrc: require('img/iotBanner_03.png')},
                    {imgSrc: require('img/iotBanner_04.png')},
                    {imgSrc: require('img/iotBanner_05.png')},
                    {imgSrc: require('img/iotBanner_06.png')},
                    {imgSrc: require('img/iotBanner_07.png')},
                    {imgSrc: require('img/iotBanner_08.png')},
                ],
            },
            //什么是物联网卡
            explain: {
                title: '什么是物联网卡',
                content: '由运营商（中国移动、中国联通、中国电信）提供的4G/3G/2G卡。硬件和外观与普通SIM卡完全一样，加载针对智能硬件和物联网设备的专业化功能，采用专用号段和独立网元，满足智能硬件和物联网行业对设 备联网的管理需求，以及集团公司连锁企业的移动信息化应用需求。'
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
        commonSituation
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
            background: url('./../../assets/img/iotBanner.png') no-repeat;
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
        .iotExplain{
            margin-bottom: $mg_b;
        }
//         //阿里云
//         .alyTouch{
//             //开始
//             .news-list{
//                 margin-bottom:.05333333rem;
//                 background-size:cover;
//                 background-repeat:no-repeat;
//                 min-height:5.33333333rem;
//                 position:relative;
//                 background-color:gray;
//                 display:-webkit-box;
//                 display:-moz-box;
//                 display:-webkit-flex;
//                 display:-ms-flexbox;
//                 display:flex;
//                 -webkit-box-direction:normal;
//                 -moz-box-direction:normal;
//                 -webkit-box-orient:vertical;
//                 -moz-box-orient:vertical;
//                 -webkit-flex-direction:column;
//                 -ms-flex-direction:column;
//                 flex-direction:column;
//                 -webkit-box-align:center;
//                 -moz-box-align:center;
//                 -webkit-align-items:center;
//                 -ms-flex-align:center;
//                 align-items:center;
//                 -webkit-box-pack:center;
//                 -moz-box-pack:center;
//                 -ms-flex-pack:center;
//                 -webkit-justify-content:center;
//                 justify-content:center;
// //////////////////////////////////////////////////////////
//                 position:absolute;
//                 display:block;
//                 width:100%;
//                 height:100%;
//                 top:0;
//                 left:0;
//                 background-color:rgba(43,43,43,.3);
// /////////////////////////////////////////////////////////////
//                 font-size:.48rem;
//                 line-height:.66666667rem;
//                 color:#fff;
//                 text-align:center;
//                 margin-bottom:.16rem;
//                 width:100%;
//                 position:relative;

//             }
//             //结束
//         }
    }
</style>

