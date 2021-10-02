<template lang='pug'>
nav.navbar
	//- .btn_group
	//- 	button(type='button' @click='isRunList')
	//- 		i.list_link_mobile
	//- 	button(type='button')
	//- 		i.sign_up_mobile
	ul.navbar__list
		li.navbar__item(v-for='link in listLink')
			a.navbar__link(:href='link.url') {{link.text}}
	button.btn.log_in(type='button') Log in
	button.btn.sign(type='button') Sign up
</template>
<script>
	export default{
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
<style lang='scss' scoped>
@import '../../static/css/main.scss';
.navbar{
	display: flex;
	align-items:center;
	@include md-block{
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
	position: relative;
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
.btn_group{

	@include lg-block{
		display: none;
	}
	@include md-block{
		display: block;
		width: 100%;
		position: relative;
	}

}
.list_link_mobile{
	&:after{
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	content: "";
	height: 2px;
	width: 17px;
	border-radius: 1px;
	background: #000;
	box-shadow: -4px 8px 0 0 #000,-8px 16px 0 0 #000;
	}
}
.sign_up_mobile{
    height: 31px;
    width: 16px;
    position: absolute;
    top:0;
    bottom:0;
    right: 0;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.429 17L7.714 30 1 17' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='7.5' cy='6.5' r='5.5' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    cursor: pointer;
}
</style>