<template lang='pug'>
header.header
	.logo__wrap
		a(href='#' aria-current="page")
			img.logo(src='../static/img/logo.png')
	<NavBarHeader />
	section.box
		.item.first
			h1.label Track bitcoin whales and hodlers
			button.btn(type='button') 7 day Whalemode trial
		.item.last
			img(src='../static/img/img_header.svg')
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
	flex-wrap:wrap;
	@include page();
	padding-top:20px;
	padding-bottom:20px;
	margin:auto;
	@include lg-block{
		justify-content:center;
		.logo__wrap{
			margin-bottom: 25px;
			flex-basis: 100%;
			img{
				margin:auto;
			}
		}
	};
	.box{
		flex-basis: 100%;
		@include section();
		display: flex;
		.item{
			flex-basis: fit-content;
		}
	}
	.first{
		.label{
			@include font(Gosha Sans,bold,72px,88px,#2D2D34);
			margin-bottom: 40px;
			}
		.btn{
			@include font(Inter,bold,19px,32px,#FFFFFF);
			letter-spacing: 0.07em;
			text-transform: uppercase;
			font-feature-settings: 'tnum' on, 'lnum' on;
			background: #2D2D34;
			border-radius: 16px;
			margin:0;
			padding:16px 38px;
		}
	}
	.last{
		display: flex;
		img{
			margin:auto;
		}
	}
	@include md-block{
		display: block;
		.logo__wrap{
			margin-bottom: 0;
		}
	};
}
</style>
