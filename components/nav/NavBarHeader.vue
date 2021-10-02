<template lang='pug'>
nav.navbar(:class='{active}')
	.btn_group
		button.btn(type='button' @click='navToggle')
			i.list_link_mobile
		button.btn(type='button')
			i.sign_up_mobile
	.nav__wrap
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
			],
			active:false

		}),
		methods:{
			navToggle(){
				this.active=!this.active
			}
		}
	};
</script>
<style lang='scss'>
@import '../../static/css/main.scss';
.navbar{
	display: flex;
	align-items:center;
	position: relative;
	&:not(.active){
		@include md-block{
			.navbar__list{
				display: none;
			}
			.nav__wrap{
				.btn{
					display: none;
				}
			}
		};
	}
	@include md-block{
		align-items:flex-start;
		&.active{
			.nav__wrap{
				position: absolute;
				top:0;
				left:0;
				right: 0;
				z-index: 1;
				background-color: #fff;
			}
		}
	};
}

.nav__wrap{
	display: flex;
	align-items:center;
	@include md-block{
		flex-wrap:wrap;
		padding-left:15px;
		.navbar__list{
			flex-basis:100%;
		}
		.btn{
			margin:15px 15px 15px 0;
		}
	};

}
.navbar__list{
	.navbar__item{
		float:left;
		margin-right: 24px;
		a{
			text-decoration: none;
		}
	}
	@include md-block{
		display: block;
		padding-top: 35px;
		.navbar__item{
			float:none;
		}
	};
}

.navbar__list{
	.navbar__link{
		@include font(Inter,bold,15px,32px,#2D2D34);
	}
}
.btn{
	position: relative;
	padding:4px 24px;
	margin-left:16px;
	margin-right: 16px;
	cursor: pointer;
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
	display: none;
	@include md-block{
		display: flex;
		position: absolute;
		justify-content:space-between;
		padding-left: 15px;
		padding-right: 15px;
		left:0;
		right:0;
		.btn{
			transform:translateY(-20px);
			padding:0;
			min-height: 30px;
			min-width: 20px;
			outline: none;
			border:none;
			position: relative;
			z-index: 2;
		}
	}

}
.list_link_mobile{
	&:after{
	position: absolute;
	left: 0;
	top: 25%;
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