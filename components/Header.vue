<template lang='pug'>
header.header
	.logo__wrap
		a(href='#' aria-current="page")
			img.logo(src='../static/img/logo.png')
	.btn_group
		button(type='button' @click='isRunList')
			i.list_link_mobile
		button(type='button')
			i.sign_up_mobile
	nav.navbar
		ul.navbar__list
			li.navbar__item(v-for='link in listLink')
				a.navbar__link(:href='link.url') {{link.text}}
		button.btn.log_in(type='button') Log in
		button.btn.sign(type='button') Sign up
</template>
<script>
export default {
	data:()=>({
		listLink:[
			{url:'#',text:'Charts'},
			{url:'#',text:'Pricing'},
			{url:'#',text:'Knowledge'},
			{url:'#',text:'Company'}
		]
	})
};
</script>
<style lang='scss'>
@import '../static/css/main.scss';
@include reset();
.header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	@include page();
	padding-top:20px;
	padding-bottom:20px;
	margin:auto;
	@include sm-block{
		flex-wrap:wrap;
		justify-content:center;
		.logo__wrap{
			margin-bottom: 25px;
		}
	};
	.logo__wrap{
		/*@include sm-block{
			flex-grow: 1;
			text-align:center;
		}*/
	};
	.navbar{
		display: flex;
		align-items:center;
		@include sm-block{
			.navbar__list{
				display: none;
			}
			.btn{
				display: none;
			}
		};
	}
	.navbar__list{
		display: flex;
		align-items:center;
		.navbar__item{
			float:left;
			margin-right: 24px;
		}
		.navbar__link{
			@include font(Inter,bold,15px,32px,#2D2D34);
		}
	}
	.btn{
		padding:4px 24px;
		margin-left:16px;
		margin-right: 16px;
		&.log_in{
			@include font(Inter,bold,15px,24px,#2D2D34);
			border: 2px solid #2D2D34;
			box-sizing: border-box;
			border-radius: 10px;
		}
		&.sign{
			@include font(Inter,bold,15px,24px,#FFFFFF);
			background: #2D2D34;
			border: 1px solid #2D2D34;
			box-sizing: border-box;
			border-radius: 10px;
		}
	}
}
.btn_group{
	@include md-block{
		display: none;
	}
	@include xs-block{
		display: block;
	}

}
.list_link_mobile{
	position: relative;
	&:after{
	position: absolute;
	right: 0;
	content: "";
	height: 2px;
	width: 17px;
	border-radius: 1px;
	background: #000;
	box-shadow: -4px 8px 0 0 #000,-8px 16px 0 0 #000;
	}
}
</style>
