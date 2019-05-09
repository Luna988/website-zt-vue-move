<template>
    <div class="commonFooter">
        <div class="commonFooterBox" :style="{ 'border-bottom': line}" v-for="(items,index) in footLinks" :key="index">
            <p class="commonFooterTitle">{{items.footLinkTitle}}</p>
            <ul class="commonFooterContain">
                <li v-for="(item,index2) in items.footLinkChild" :key="index2">
                <router-link :to="item.path">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'commonFooter',
    data () {
        return {
            line: '1px solid #666666',
        }
    },
    props: ['footLinks','isLine'],
    created: function(){
        if(this.isLine == 'false'){
            this.line = 'none';
        }
    }
}
</script>
<style lang="scss" scoped type="text/css">
// 底部链接
.commonFooter{
    padding-left: 11px;
    padding-right: 15px;
    padding-bottom: 15px;
    background-color: #4a4a4a;
    .commonFooterBox{
      padding-top: 14px;
      padding-bottom: 5px;
      .commonFooterTitle{
        font-size: 17px;
        color: #ffffff;
        padding-left: 4px;
        padding-bottom: 11px;
      }
      .commonFooterContain{
        display: flex;
        flex-wrap: wrap;
        li{
            height: 27px;
            line-height: 27px;
            background-color: #333333;
            margin: 4px 4px;
          a{
            width: 100%;
            font-size: 14px;
            color: #999999;
            // background-color: red;
            // padding: 5px 8px;
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      }
    }
  }

</style>
