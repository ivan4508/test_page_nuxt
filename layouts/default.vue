<template>
<div>
  <AppHeader />
  <Nuxt />
  <AppFooter />
</div>
</template>
<script>
  import AppHeader from '@/components/Header.vue';
  import AppFooter from '@/components/Footer.vue';
  export default{
    components:{
      AppHeader,
      AppFooter
    }
  }
</script>