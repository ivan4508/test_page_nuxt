<template lang='pug'>
div
  hr
  VueSlickCarousel.carousel_vantage(
  ref='carousel'
  v-bind='settings'
  @afterChange='countCarousel'

  )
    div(v-for='item in listSlide' @click='nextSlide')
      h4.title {{item.title}}
      p.desc {{item.desc}}
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
        slideUrl:'slide_01.png'
      },
      {
        title:'HODLer outflows',
        desc:'HODLer outflows visualises the location and amount of bitcoins that were moved on a specific date. This tool helps you understand which old coins are moving and can indicate sell pressure that is created by long time holders.',
        slideUrl:'slide_02.png'
    },
      {
        title:'Volume Profile',
        desc:'Volume profile visualises the amount of Bitcoins accumulated at specific price levels. These accumulation levels act as good indications of supports and resistances.',
        slideUrl:'slide_03.png'}
      ],
      count:0
    }),
    components: { VueSlickCarousel },
    methods:{
      countCarousel(){
        this.count++;
        console.log('count',this.count)
      },
      nextSlide(){
        this.$refs.carousel.next();
      }
    },
    computed:{

    }
  }
</script>
<style>
.carousel_vantage{
  max-width: 400px;
}
</style>