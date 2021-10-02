<template lang='pug'>
header.header
	.logo__wrap
		a(href='#' aria-current="page")
			img.logo(src='../static/img/logo.png')
	<NavBar />
</template>
<script>
	import NavBar from '@/components/nav/NavBar.vue';
	export default {
		components:{
			NavBar
		}
	}
</script>
<style lang='scss'>
@import '../static/css/main.scss';
.header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	@include page();
	padding-top:20px;
	padding-bottom:20px;
	margin:auto;
	@include lg-block{
		flex-wrap:wrap;
		justify-content:center;
		.logo__wrap{
			margin-bottom: 25px;
		}
	};
	@include md-block{
		.logo__wrap{
			margin-bottom:-25px;
		}
	};
}
</style>
