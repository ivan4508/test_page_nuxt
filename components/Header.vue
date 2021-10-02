<template lang='pug'>
header.header
	.logo__wrap
		a(href='#' aria-current="page")
			img.logo(src='../static/img/logo.png')
	<NavBarHeader />
</template>
<script>
	import NavBarHeader from '@/components/nav/NavBarHeader.vue';
	export default {
		components:{
			NavBarHeader
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
			flex-basis: 100%;
			img{
				margin:auto;
			}
		}
	};
	@include md-block{
		display: block;
		.logo__wrap{
			margin-bottom: 0;
		}
	};
}
</style>
