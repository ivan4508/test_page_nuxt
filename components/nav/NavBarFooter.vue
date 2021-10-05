<template lang='pug'>
.nav__footer.d-flex
	p.copyright Whalemap 2021
	ul.navbar
		li.navbar__item(v-for='link in listLink')
			a.navbar__link(href='link.url') {{link.text}}
	ul.socials
		li.navbar__item
			a(href='#')
				i.icon_telegram
		li.navbar__item
			a(href='#')
				i.icon_youtube
</template>
<script>
	export default {
		data:()=>({
			listLink:[
				{url:'#',text:'Company'},
				{url:'#',text:'Terms and conditions'},
				{url:'#',text:'Privacy policy'},
				{url:'#',text:'Cookie policy'},
				{url:'#',text:'Contact Us'}
			],
		})
	};
</script>
<style lang='scss'>
@import '../../static/css/main.scss';
.footer{
	.nav__footer{
		.navbar__item{
			margin-right: 24px;
			float: left;
			a{
				text-decoration: none;
				@include font(Inter,normal,19px,24px,#2D2D34);
			}
		}
		@include lg-block{
			flex-wrap:wrap;
			justify-content:center;
		}
		@include md-block{
			justify-content:space-between;
			padding-left: 15px;
			padding-right: 15px;
		}
	}
	.navbar{
		@include lg-block{
			flex-basis:100%;
			margin-top: 15px;
			margin-bottom: 15px;
			justify-content:center;
		}
		@include md-block{
			flex-direction:column;
			flex-basis: 50%;
			.navbar__item:not(:last-child){
				margin-bottom: 15px;
			}
		}
	}
	.socials{
		align-self:flex-end;
	}
}
</style>