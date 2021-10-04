<template lang='pug'>
div.wrapp__carousel
  button.btn.btn_prew(type='button' @click='prevSlide')
          i.arrow
  button.btn.btn_next(type='button' @click='nextSlide')
          i.arrow
  p.count {{count+1}} / {{listSlide.length}}
  VueSlickCarousel(
  ref='carousel'
  v-bind='settings'
  @beforeChange='countUpd'
  )
    div.inner__wrapp_carousel(
    v-for='item in listSlide'
    @click='nextSlide')
      .inner__wrapp_carousel_text
        h4.title {{item.title}}
        p.desc {{item.desc}}
      img.img(
      :src='pathUrl(item.slideName)'
      :alt='item.title')
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  export default {
    data:()=>({
      count:1,
      settings:{
        arrows:false,
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
      prevSlide(){
        this.$refs.carousel.prev();
      },
      pathUrl(val){
        return require('@/static/img/carousel_sliders/'+val)
      },
      countUpd(fromSlide,currentSlide){
        this.count=currentSlide;
      }
    }
  }
</script>
<style lang="scss">
@import '../static/css/main.scss';
.wrapp__carousel{
  @include page();
  max-width:1600px;
  margin: auto;
  .count{
    @include font(Inter,bold,17px,32px,#FFFFFF);
    letter-spacing: 0.07em;
    font-feature-settings: 'tnum' on, 'lnum' on;
  }
  .title{
    @include font(Inter,bold,17px,32px,#FFFFFF);
    letter-spacing: 0.07em;
    text-transform: uppercase;
    font-feature-settings: 'tnum' on, 'lnum' on;
  }
  .desc{
    @include font(Inter,normal,19px,32px,rgba(255, 255, 255, 0.5));
    font-feature-settings: 'tnum' on, 'lnum' on;
  }
  .inner__wrapp_carousel{
    display: flex !important;
    align-items:center;
  }
  .inner__wrapp_carousel_text{
    position: absolute;
    max-width: 3%;
  }
  .btn{
    padding: 28px 23px;
    border-radius:100%;
    border:none;
    outline:none;
    background: #404049;
    box-shadow: 0px 16px 56px rgba(0, 0, 0, 0.14);
    transform: matrix(0, -1, -1, 0, 0, 0);
  }

  .img{
   transform:translateX(30%);
  }
}
</style>