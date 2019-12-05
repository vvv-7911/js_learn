<template>
  <div class="top-left">
    <div class="swiper-button-prev" @click="lastItem">
      <img src="https://www.dongqiudi.com/images/swiper-left.png" alt="">
    </div>
    <slider ref="slider" @slideToRight="slideRight" @slideToLeft="slideLeft" :showInfoList="sliderList" >
      <template v-slot:showArea="{currItem}">
        <transition tag="div" :name="slideDec">
          <div :key="currItem.text" class="swiper-container">
            <div class="swiper-wrapper">
              <p class="banner-title">{{currItem.text}}</p>
              <img :src="currItem.imgUrl" class="bg-imgs" alt="">
            </div>
          </div>
        </transition>
      </template>
      <template v-slot:clickArea="{scopeItem}">
        <div class="slide-oi" :class="{'active': scopeItem.currIndex === scopeItem.index}">
        </div>
      </template>
    </slider>
    <div class="swiper-button-next" @click="nextItem">
      <img src="https://www.dongqiudi.com/images/swiper-right.png" alt="">
    </div>
  </div>
</template>

<script>
import slider from '@/components/common_components/slider.vue'
export default {
  name: 'swiper',
  data () {
    return {
      sliderList: [
        {
          text: '老照片：98世界杯小贝染红，多少人曾爱慕你年轻时的容颜',
          imgUrl: 'https://csimg1.qunliao.info/fastdfs4/M00/F0/48/ChNLkl3fnB-AbARuABHt0jHJJBY149.jpg'
        },
        {
          text: '中超最佳11人评选进入倒计时，你投票了吗？',
          imgUrl: 'https://csimg1.qunliao.info/fastdfs4/M00/F0/49/ChNLkl3foqmATFivAADUEkHrJoM333.jpg?watermark/1/image/aHR0cDovL2ltZzEuZG9uZ3FpdWRpLmNvbS9mYXN0ZGZzMi9NMDAvMkEvRTIvQ2hPcU0xb1MtZVdBUERxM0FBQkE1VWdyQlQ4MTQyLnBuZz9pbWFnZVZpZXcyLzAvdy8xMjU=/dissolve/100/dx/15/dy/10'
        },
        {
          text: '避免猝死悲剧，遇到突发晕厥正确的急救措施',
          imgUrl: 'https://csimg1.qunliao.info/fastdfs4/M00/F0/4A/900x360/crop/-/ChNLkl3fp96AEbgTABkkNtwN1TE288.jpg'
        },
        {
          text: '阿森纳1-2法兰克福，镰田大地梅开二度，奥巴梅扬破门',
          imgUrl: 'https://csimg1.qunliao.info/fastdfs4/M00/F0/62/900x360/crop/-/ChNLkl3gP0SAX_jnAAFa2RC0W2k463.jpg'
        },
        {
          text: '曼联1-2爆冷遭阿斯塔纳逆转，林加德破门，钟塔西错失空门',
          imgUrl: 'https://bdimg2.qunliao.info/tos-cn-i-j5hyufq5o6/fastdfs4/M00/F0/5E/ChNLkl3gBPSAVCeLAAB9HbOwfNs577.jpg~tplv-j5hyufq5o6-crop:900:360.jpeg'
        }
      ],
      slideDec: 'slideRight'
    }
  },
  methods: {
    slideRight () {
      this.slideDec = 'slideRight'
    },
    slideLeft () {
      this.slideDec = 'slideLeft'
    },
    lastItem () {
      this.slideDec = 'slideLeft'
      this.$refs.slider.lastItem()
    },
    nextItem () {
      this.slideDec = 'slideRight'
      this.$refs.slider.nextItem()
    }
  },
  components: {
    slider
  }
}
</script>

<style scoped lang="stylus">
.top-left 
  position relative
  width 700px
  height 340px
  margin-right 40px
  overflow hidden
  float left
  background-size 100% 100%
  .swiper-container
    width 100%
    height 100%
    overflow hidden
    padding 0
    z-index 1
    .swiper-wrapper
      position relative
      width 100%
      height 100%
      z-index 1
      display flex
      transition-property transform
      text-align center
      font-size 38px
      font-weight 700
      background-color #eee
      align-items center
      justify-content center
      box-sizing content-box
      flex-shrink 0
      .banner-title
        width 100%
        height 50px
        bottom 0
        left 0
        position absolute
        text-align left
        font-size 24px
        color #fff
        font-weight 400
        z-index 20
        text-indent 20px
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
        opacity 1
      .bg-imgs 
        display block
        width 100%
        height 100%
    .swiper-pagination
      width 240px
      position absolute
      left 20px
      bottom 6px
      span 
        display inline-block
        width 40px
        height 40px
        margin 0 4px
        cursor pointer
        transform scale(1)
        opacity 1
        border-radius 0
        background grey
  .swiper-button-prev
    left 0
    background none
    width 40px
    height 80px
    position absolute
    top 50%
    margin-top -22px
    z-index 10
    cursor pointer
  .swiper-button-next
    right 0
    background none
    width 40px
    height 80px
    position absolute
    top 50%
    margin-top -22px
    z-index 10
    cursor pointer
</style>
