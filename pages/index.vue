<template lang='pug'>
main.main
  .wrapp__vantage
    section.vantage
      .items
        .item.first
          h2.label Excellent vantage point
          p.text We use blockchain data to derive insight not otherwise available in legacy markets. Are long term HODLers selling, at what prices are large players accumulating, is the market overheated with greed? All that and more is what Whalemap is for.
    <Carousel/>
  .wrapp_blockchain_data
    section.blockchain_data
      .item.first
        h2.label Raw blockchain data
        p.text Our real-time analysis of the Bitcoin blockchain pipelines raw data into actionable charts. Whalemap allows to leverage fundamental blockchain data to make better investment decisions.
      .item.last
        p.text(v-for='desc in blockchainDataDesc') {{desc.text}}
          span.count {{desc.count}}
</template>

<script>
  import Carousel from '@/components/Carousel.vue';
export default {
  data:()=>({
    blockchainDataDesc:[
    {text:'Number of transactions',count:'45 596 361'},
    {text:'Number of addresses',count:'124 149'},
    {text:'Time since last block',count:'4,3 sec'},
    ]
  }),
  components:{
    Carousel
  }
}
</script>
<style lang="scss">
@import '../static/css/main.scss';
@include reset();
#__layout>div{
  display: flex;
  flex-direction: column;
  align-items:center;
  height:100vh;
  .main{
    flex-grow: 1;
  }
}
.wrapp__vantage{
  background-image: url('../static/img/vantage_bg.svg'),linear-gradient(180deg, #26262C 0%, #26262C 100%);
  background-repeat: no-repeat;
  background-position:right 10%;
  margin-top: 59px;
}
.vantage{
  @include section();
  padding-top: 170px;
  padding-bottom: 127px;
  .first{
    max-width: 48%;
    margin-left: 16%;
    .label{
      @include font(Gosha Sans,bold,72px,88px,#FFFFFF);
      margin-bottom: 40px;
    }
    .text{
      @include font(Inter,normal,21px,40px,#ADADB1);
      margin-bottom: 119px;
    }
  }
}
.wrapp_blockchain_data{
  background:url('../static/img/blockchain_data_bg_one.svg')  no-repeat center,url('../static/img/blockchain_data_bg_two.svg')  no-repeat;
  background-size: auto , cover;
  background-position: center;
  background-color: #F7F7F9;
}
.blockchain_data{
  @include section();
  padding-top: 260px;
  padding-bottom: 100px;
  display: flex;
  justify-content:space-between;
  .first{
    flex-basis:50%;
    .label{
      @include font(Gosha Sans,bold,48px,54px,#2D2D34);
      margin-bottom: 25px;
    }
    .text{
      @include font(Inter,normal,21px,40px,#2D2D34);
    }
  }
  .last{
    flex-basis:34%;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    .text{
      @include font(Inter,bold,19px,32px,#2D2D34);
      letter-spacing: 0.07em;
      text-transform: uppercase;
      font-feature-settings: 'tnum' on, 'lnum' on;
      margin-bottom:79px;
    }
    .count{
      @include font(Inter,bold,48px,32px,#70CBA8);
      font-feature-settings: 'tnum' on, 'lnum' on;
      text-transform:lowercase;
      display: block;
      margin-top: 16px;
    }
  }
}
</style>