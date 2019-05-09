<template>
<div >
  <!-- <p>{{commonOnesData}}</p> -->
  <p class="commonOneTitle">{{commonOnesDatas.commonOnesTitle}}</p>
  <ul class="commonOneContainer">
      <li v-for="(item, index) in commonOnesDatas.commonOnes" :key="index">
          <p class="commonOneImgBox"><img :src='item.imgSrc' alt=""></p>
          <div class="commonOneDescription">
              <p>{{item.introduceTitle}}</p>
              <p>{{item.introduction}}</p>
          </div>
      </li>
  </ul>
</div>
    
</template>
<script>
export default {
  name: 'commonOne',
  data(){
    return {
      
    }
  },
  props: ['commonOnesDatas']
}
</script>
<style scoped lang="scss" type="text/css">
// .production{
//     background-color: #ffffff;
//     margin-bottom: $mg_b;
//   }
//         .productionTitle{
//     background-color: #ffffff;
//     margin-bottom: $mg_b;
//   }
//   .productionContainer{
//     text-align: center;
//     font-size: 18px;
//     color: #010101;
//     padding: 15px 0;
//   }
//         .advantage{
//             @extend .production;
//             padding-bottom: 6px;
//             .commonOneTitle{
//             @extend .productionTitle;
//             }
//             .commonOneContainer{
//             @extend .productionContainer;
//             padding: 0 15px;
//             li{
//                 border: 1px solid #eaeaea;
//                 margin-bottom: 5px;
//                 display: flex;
//                 align-items: center;
//                 padding-top: 12px;
//                 padding-bottom: 12px;
//             }
//             }
//             .commonOneImgBox{
//             padding-left: 13px;
//             img{
//                 width: 50px;
//                 height: 50px;
//             }
//             }
//             .commonOneDescription{
//             padding-left: 13px;
//             padding-right: 30px;
//             p:nth-child(1){
//                 font-size: 15px;
//                 color: #333333;
//                 padding-bottom: 4px;
//             }
//             p:nth-child(2){
//                 font-size: 14px;
//                 color: #666666;
//             }
//             }
//         }



    .commonOneTitle{
        text-align: center;
        font-size: 18px;
        color: #010101;
        padding: 18px 0;
    }
    .commonOneContainer{
      padding: 0 15px;
      li{
        border: 1px solid #eaeaea;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }
    .commonOneImgBox{
      padding-left: 13px;
      img{
        width: 50px;
        height: 50px;
      }
    }
    .commonOneDescription{
      padding-left: 13px;
      padding-right: 30px;
      p:nth-child(1){
        font-size: 14px;
        color: #333333;
        padding-bottom: 4px;
      }
      p:nth-child(2){
        font-size: 12px;
        color: #666666;
      }
    }
</style>
