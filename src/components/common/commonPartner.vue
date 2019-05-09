<template>
    <div class="commonPartner">
        <p>{{partner.title}}</p>
        <ul>
            <li v-for="(item,index) in partner.customer" :key="index"><img :src="item.imgSrc" :alt="item.imgAlt"></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'commonPartner',
    props: ['partner']
}
</script>
<style lang="scss" scoped type="text/css">
    .commonPartner{
        background-color: #ecf1f6;
        height: 170px;
        padding: 0 7px 18px 7px;
        p{
            text-align: center;
            font-size: 18px;
            color: #333333;
            padding-top: 18px;
            padding-bottom: 17px;
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;
            li{
                padding: 0 5px;
                img{
                    width: 110px;
                    height: 100px;
                }
            }
        }
    }
</style>

