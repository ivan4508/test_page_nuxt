<template lang='pug'>
nav.nav.d-flex
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
	.nav{
		.navbar__item{
			margin-right: 24px;
			float: left;
			a{
				text-decoration: none;
				@include font(Inter,normal,19px,24px,#2D2D34);
			}
		}
	}
}
</style>