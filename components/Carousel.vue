<template lang='pug'>
div.wrapp__carousel
  VueSlickCarousel(
  ref='carousel'
  v-bind='settings')
    div(v-for='item in listSlide' @click='nextSlide')
      h4.title {{item.title}}
      p.desc {{item.desc}}
      img(
      :src='pathUrl(item.slideName)'
      :alt='item.title')
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    data:()=>({
      settings:{
        arrows:true,
        adaptiveHeight:true,
        focusOnSelect:true,
        speed:500
      },
      listSlide:[
      {
        title:'Large wallet inflows',
        desc:'Large Wallet Inflows visualises the accumulation locations of different sized investors including Whales. These locations serve as reliable support and resistance levels.',
        slideName:'slide_01.png'
      },
      {
        title:'HODLer outflows',
        desc:'HODLer outflows visualises the location and amount of bitcoins that were moved on a specific date. This tool helps you understand which old coins are moving and can indicate sell pressure that is created by long time holders.',
        slideName:'slide_02.png'
    },
      {
        title:'Volume Profile',
        desc:'Volume profile visualises the amount of Bitcoins accumulated at specific price levels. These accumulation levels act as good indications of supports and resistances.',
        slideName:'slide_03.png'}
      ],
    }),
    components: { VueSlickCarousel },
    methods:{
      nextSlide(){
        this.$refs.carousel.next();
      },
      pathUrl(val){
        return require('@/static/img/carousel_sliders/'+val)
      }
    }
  }
</script>
<style lang="scss">
@import '../static/css/main.scss';
.wrapp__carousel{
  @include section();
  max-width: 1034px;
}
</style>