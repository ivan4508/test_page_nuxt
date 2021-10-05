<template lang='pug'>
.wrapp_header
	header.header
		.logo__wrap
			a(href='#' aria-current="page")
				img.logo(src='../static/img/logo.png' alt='logo')
		<NavBarHeader />
		section.container
			.item.first
				h1.label Track bitcoin whales and hodlers
				button.btn(type='button') 7 day Whalemode trial
			.item.img_wrapp
				img.img(src='../static/img/img_header.svg')
		.box__tool
			a.link(
			v-for='item in toolList'
			:href='item.href'
			)
				img(:src='imgUrl(item.imgName)')
				p.text {{item.title}}
</template>
<script>
	import NavBarHeader from '@/components/nav/NavBarHeader.vue';
	export default {
		components:{
			NavBarHeader
		},
		data:()=>({
			toolList:[
			{href:'#',imgName:'charts.svg',title:'Charts'},
			{href:'#',imgName:'digests.svg',title:'Digests'},
			{href:'#',imgName:'tutorials.svg',title:'Tutorials'},
			{href:'#',imgName:'twitter.svg',title:'Twitter'},
			]
		}),
		methods:{
			imgUrl(val){
				return require('@/static/img/icon_tool/'+val);
			}
		}
	}
</script>
<style lang='scss'>
@import '../static/css/main.scss';
.wrapp_header{
	background:url('../static/img/header_bg.svg') no-repeat 0 265%;
	background-size: contain;
	padding-bottom: 59px;
}
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
		width: 100%;
		.logo__wrap{
			margin-left: 15px;
			margin-bottom: 25px;
			flex-basis: 100%;
			text-align:center;
			img{
				margin:auto;
			}
		}
	};
	.container{
		flex-basis: 100%;
		@include section();
		display: flex;
		flex-wrap:wrap;
		justify-content:space-between;
		padding-top: 81px;
		@include lg-block{
			padding-top: 70px;
			flex-direction: column-reverse;
		}
		.item{
			flex-basis: 50%;
		}
	}
	.first{
		@include lg-block{
			text-align: center;
		}
		.label{
			@include font(Gosha Sans,bold,72px,88px,#2D2D34);
			margin-bottom: 40px;
			@include lg-block{
				font-size:33px;
				line-height:46px;
				margin-top: 15px;
				margin-bottom: 30px;
			};
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
			@include xl-block{
				padding:10px 15px;
				font-size: 16px;
			};
		}
	}
	.img_wrapp{
		display: flex;
		.img{
			margin:auto;
			 transform: scale(1.2) translateX(180px);
			 @include lg-block{
			 	transform:none;
			 };
		}
	}
	.last{
		display: flex;
	}
	.box__tool{
		display: flex;
		flex-basis:100%;
		@include section();
		margin-top: -15px;
		@include xl-block{
			margin-top: 30px;
		};
		@include lg-block{
			margin-top: 30px;
			justify-content:center;
		}
		.link{
			text-decoration: none;
			margin-right: 7%;
			text-align: center;
			@include lg-block{
				max-width: 16%;
				&:last-child{
					margin-right: 0;
				}
			}
		}
		.text{
			@include font(Inter,bold,21px,40px,#2D2D34);
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
