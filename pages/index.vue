<template lang='pug'>
main.main
  section.vantage
    .items
      .item.first
        h2.label Excellent vantage point
        p.text We use blockchain data to derive insight not otherwise available in legacy markets. Are long term HODLers selling, at what prices are large players accumulating, is the market overheated with greed? All that and more is what Whalemap is for.
    .items
  <Carousel/>
</template>

<script>
  import Carousel from '@/components/Carousel.vue';
export default {
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
</style>