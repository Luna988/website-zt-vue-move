<template>
    <div class="aboutUs">
        <ul>
            <li class="firmIntroduce">
                <div>
                    <p>{{firm.title}}</p>
                    <p>{{firm.titleEnglish}}</p>
                </div>
                <div>
                    <p>{{firm.name}}</p>
                    <p>{{firm.introduce}}</p>
                </div>
            </li>
            <li class="partners">
                <div>
                    <p>{{partners.title}}</p>
                    <p>{{partners.titleTip}}</p>
                </div>
                <div></div>
            </li>
            <li class="process">
                <div>
                    <p>{{process.title}}</p>
                    <p>{{process.titleTip}}</p>
                </div>
                <div></div>
            </li>
            <li class="contact">
                <p>{{contact.title}}</p>
                <ul>
                    <li v-for="(item,index) in contact.content" :key="index">{{item.title}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'aboutUs',
    data () {
        return {
            firm: {
                title: '公司简介',
                titleEnglish: 'COMPANY PROFILE',
                name: '上海助通信息科技有限公司',
                introduce: '助通科技创立于2011年，是国内领先的互联网增值业务解决方服务商。助通科技拥有丰富的码号资源与强大的运营能力，专注SMS行业短信、MMS行业彩信、国际短信、物联网卡等业务。公司总部位于上海，分支机构遍及北京、深圳、杭州，以专业化、高标准的团队服务超过8万家客户。'
            },
            //合作客户
            partners: {
                title: '合作客户',
                titleTip: '他们都在使用助通云通讯',
            },
            //合作流程
            process: {
                title: '合作流程',
                titleTip: '我们等着你来',
            },
            //联系我们
            contact: {
                title: '联系我们',
                content: [
                    {title: '客服工作时间：8:00-22:00'},
                    {title: '24小时服务电话：400-008-7058'},
                ]

            }
        }
    }

}
</script>
<style lang="scss" scoped type="text/css">
.aboutUs{
    background-color: #eaeaea;
    $mg_b: 5px;
    .firmIntroduce{
        background-color: #ffffff;
        height: 231px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        margin-bottom: $mg_b;
        div:nth-child(1){
            padding-top: 18px;
            padding-bottom: 18px;
            text-align: center;
            p:nth-child(1){
                color: #333333;
                font-size: 18px;
            }
            p:nth-child(2){
                color: #666666;
                font-size: 10px;
            }
        }
        div:nth-child(2){
            border: 1px solid #ebebeb; 
            border-radius: 8px;
            padding: 16px 10px;
            p:nth-child(1){
                text-align: center;
                color: #333333;
                font-size: 15px;
                padding-bottom: 8px;
            }
            p:nth-child(2){
                font-size: 12px;
                color: #666666;
                text-indent: 20px;
                line-height: 18px;
            }
        }
    }
    //合作客户
    .partners{
        background-color: #f7f7f7;
        height: 309px;
         margin-bottom: $mg_b;
        div:nth-child(1){
            padding-top: 18px;
            padding-bottom: 14px;
            text-align: center;
            p:nth-child(1){
                font-size: 18px;
                color: #333333;
                padding-bottom: 4px;
            }
            p:nth-child(2){
                color: #666666;
                font-size: 10px;
            }
        }
        div:nth-child(2){
            width: 333px;
            height: 216px;
            margin: 0 auto;
            background: url('./../../assets/img/aboutUsPartner.png') no-repeat;
            background-size: 100% 100%;
           
        }
    }
    //合作流程
    .process{
        @extend .partners;
        background-color: #ffffff;
        height: 619px;
        div:nth-child(2){
            height: 524px;
            background: url('./../../assets/img/aboutUsProcess.png') no-repeat;
            background-size: 100% 100%;
        }
    }
    //联系我们
    .contact{
        background-color: #ffffff;
        // height: 158px;
        text-align: center;
        padding-bottom: 17px;
        // margin-bottom: 50px;
        p{
            font-size: 18px;
            color: #333333;
            padding-top: 18px;
            padding-bottom: 12px;
        }
        li{
            font-size: 15px;
            color: #666666;
        }
    }
}
    
</style>
