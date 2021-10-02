<template lang='pug'>
main.main
  h1 Main
</template>

<script>
export default {}
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