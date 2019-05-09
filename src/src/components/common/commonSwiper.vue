<template>
    <div class="commonSwiper">
        <p class="productionTitle">{{lists.title}}</p>
        <ul class="touchSwiper">
            <li v-for="(item,index) in lists.list" :key="index"><img :src="item.imgSrc" alt=""></li>
        </ul>
        <!-- <ul class="touchSwiper">
            <li v-for="(item,index) in lists.list" :key="index" 
            :ref="index"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
            ><img :src="item.imgSrc" alt=""></li>
        </ul> -->
    </div>
</template>
<script>
import { Swiper,Slide } from 'vue-swiper-component'
export default {
    name: 'commonSwiper',
    data () {
        return {
            touchStatus: false,
      startY: 0,
      timer: null
        }
    },
    props: ['lists'],
    components: {
        Swiper,
        Slide,
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
        // letters () {
        // const letters = []
        // for (let i in this.cities) {
        //     letters.push(i)
        // }
        // return letters
        // }
    },
    mounted() {
        
        setTimeout(()=>{
            var div1 = document.querySelector(".touchSwiper");
            let div1Width = div1.offsetWidth;
            // console.log(div1Width);
            var commonSwiper = document.querySelector(".commonSwiper");
            //限制最大宽高，不让滑块出去
            var maxW =commonSwiper.offsetWidth-div1Width;
            // var maxH = document.body.clientHeight - div1.offsetHeight;
            var oL
            var oT
            //手指触摸开始，记录div的初始位置
            div1.addEventListener('touchstart', (e)=> {
                // console.log("start");
                var ev = e || window.event;
                var touch = ev.targetTouches[0];
                oL = touch.pageX - div1.offsetLeft;
                // oT = touch.clientY - div1.offsetTop;   
                document.addEventListener("touchmove", defaultEvent, false);
            });
            //触摸中的，位置记录
            div1.addEventListener('touchmove', (e)=> {
                // console.log("move");
                var ev = e || window.event;
                var touch = ev.targetTouches[0];
                this.status=touch.pageX
                if(this.status<0)return
                var oLeft = touch.pageX - oL;
                var oTop = touch.clientY - oT;
                if(oLeft > 0) {
                oLeft = 0;
                } else if(oLeft <= maxW) {
                oLeft = maxW;
                }
                div1.style.left = oLeft + 'px';
                // div1.style.top = oTop + 'px';
            });
            //触摸结束时的处理
            div1.addEventListener('touchend', ()=> {
                document.removeEventListener("touchmove", defaultEvent);
            });
            function defaultEvent(e) {
                e.preventDefault();
            }
        });
    },
}
</script>
<style lang="scss" scoped type="text/css">
* { touch-action: pan-y;list-style: none;} 
    $mg_b: 5px;
    .commonSwiper{
        position: relative;
         overflow: hidden;
         width: 375px;
        background-color: #ffffff;
        margin-bottom: $mg_b;
        padding-bottom: 16px;
        // width: 375px;
        height: 262px;
        .productionTitle{
            text-align: center;
            font-size: 18px;
            color: #010101;
            padding: 15px 0;
        }
        .wh_slide img{
            // width: 300px;
            height: 192px;
            margin: 0 auto;
        }
        //触摸滑动
        .touchSwiper{
            display: flex;
            position: absolute;
            padding-left: 8px;
            padding-right: 8px;
            li{
                padding-left: 7px;
                padding-right: 7px;
                img{
                    width: 300px;
                    height: 192px;
                    margin: 0 auto;
                }
            }
        }
    }
    
</style>

