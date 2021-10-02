<template lang='pug'>
.footer__wrap
	footer.footer
		section.first
			.item
				h2.label Stop watching. Just try it
				p.text We have a free plan that lets you feel everything for yourself. Just sign up
				button.btn(type='button') sign up free
			.item
				img(src='../static/img/img_footer.png')
		section.last
			.item
				<NavBarFooter />
</template>
<script>
	import NavBarFooter from '@/components/nav/NavBarFooter.vue';
	export default {
		components:{
			NavBarFooter
		},
		data:()=>({
		}),
	};
</script>
<style lang="scss">
@import '../static/css/main.scss';
.d-flex{
	display: flex;
	justify-content: space-between;
}
.footer__wrap{
	background-color: #A8E4CD;
	width: 100%;
}
.footer{
	@include page();
	margin: auto;
	.first{
		@include section();
		display: flex;
		justify-content:center;
		padding-top: 107px;
		padding-bottom: 100px;
		.label{
			@include font(Gosha Sans,bold,48px,54px,#2D2D34);
			margin-bottom: 40px;
		}
		.text{
			@include font(Inter,normal,21px,40px,#2D2D34);
			margin-bottom: 80px;
		}
		.btn{
			@include font(Inter,bold,19px,32px,#2D2D34);
			text-transform: uppercase;
			letter-spacing: 0.07em;
			font-feature-settings: 'tnum' on, 'lnum' on;
			background: #7CD1B0;
			border-radius: 10px;
			border:none;
			outline: none;
			margin:0;
			padding: 16px 32px;
		}
	}
	.last{
		border-top:1px solid #2D2D34;
		padding-top:32px;
		padding-bottom:40px;
	}
}

</style>