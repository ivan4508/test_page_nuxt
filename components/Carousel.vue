<template lang='pug'>
div.wrapp__carousel
  button.btn.btn_prev(type='button' @click='prevSlide')
          i.arrow
  button.btn.btn_next(type='button' @click='nextSlide')
          i.arrow
  p.count {{count}} / {{listSlide.length}}
  VueSlickCarousel.carousel_text(
    ref='carouselText'
    v-bind='settings'
    @beforeChange='countUpd')
    div(
    v-for='(item,i) in listSlide'
    :key='i'
    @click='nextSlide')
        h4.title {{item.title}}
        p.desc {{item.desc}}
        .mode_available
          h5 Mode available:
          ul
            li(
            v-for='(name,i) in item.modesList'
            :key='i')
              span(:class='modeClass(name)') {{name}}
  VueSlickCarousel.carousel_img(
    ref='carouselImg'
    v-bind='settings')
    div(
    v-for='(item,i) in listSlide'
    :key='i'
    @click='nextSlide')
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
        modesList:['daily','hourly','block','whales'],
        slideName:'slide_01.png'
      },
      {
        title:'HODLer outflows',
        desc:'HODLer outflows visualises the location and amount of bitcoins that were moved on a specific date. This tool helps you understand which old coins are moving and can indicate sell pressure that is created by long time holders.',
        modesList:['daily','hourly','block','hodlers'],
        slideName:'slide_02.png'
    },
      {
        title:'Volume Profile',
        desc:'Volume profile visualises the amount of Bitcoins accumulated at specific price levels. These accumulation levels act as good indications of supports and resistances.',
        modesList:['daily','hourly','block','whales'],
        slideName:'slide_03.png'}
      ],
    }),
    components: { VueSlickCarousel },
    methods:{
      nextSlide(){
        this.$refs.carouselText.next();
        this.$refs.carouselImg.next();
      },
      prevSlide(){
        this.$refs.carouselText.prev();
        this.$refs.carouselImg.prev();
      },
      pathUrl(val){
        return require('@/static/img/carousel_sliders/'+val)
      },
      countUpd(oldSlide,newSlide){
        this.count=newSlide+1;
      },
      modeClass(name){
        return name +'__mode';
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
  display: flex;
  align-items:center;
  position: relative;
  @include lg-block{
    display: block;
  }
  @include md-block{
    border-top:1px solid #fff;
    padding-top:90px;
    padding-bottom: 90px;
    padding-left: 15px;
    padding-right: 15px;
  };
  .carousel_text{
    max-width:25%;
    @include lg-block{
      max-width:100%;
    };
  }
  .carousel_img{
    width:70%;
    @include lg-block{
      max-width:100%;
      margin:auto;
    }
  }
  .wrapp__arrow{

  }
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
  .count{
    position: absolute;
    top: 30%;
    left: 0;
    @include lg-block{
      position: static;
    }
  }
  .btn{
    padding: 23px;
    border-radius:100%;
    height: 64px;
    width: 64px;
    border:none;
    outline:none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #404049;
    position: absolute;
    @include lg-block{
      position: static;
    };
  }
  .btn_next{
    top:15%;
    transform:rotate(180deg);
    @include lg-block{
      position: relative;
      z-index: 2;
      float:right;
      transform:rotate(270deg);
    };
    @include md-block{
      position: absolute;
      top:10px;
      left:43%;
      transform:rotate(180deg);
    };
  }
  .btn_prev{
    bottom:15%;
     transform:rotate(0deg);
     @include lg-block{
      position: relative;
      z-index: 2;
      float:left;
      transform:rotate(90deg);
     };
     @include md-block{
      position: absolute;
      bottom:10px;
      left: 43%;
      transform:rotate(0deg);
     };
  }

  .daily__mode{
    background-color: #E7E7E7;
    color:#000000;
  }
  .hourly__mode{
    background-color: #8D8D8D;
    color:#FFFFFF;
  }
  .block__mode{
    background-color: #000000;
    color:#FFFFFF;
  }
  .whales__mode{
    background-color: #68A0F6;
    color:#FFFFFF;
  }
}
</style>