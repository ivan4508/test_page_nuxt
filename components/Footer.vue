<template lang='pug'>
.footer__wrap
	footer.footer
		.items.first
			.item
			.item
		.items.last
			.item.d-flex
				p.copyright Whalemap 2021
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
	.first{}
	.last{
		border-top:1px solid #2D2D34;
		padding-top:32px;
		padding-bottom:40px;
	}
}

</style>