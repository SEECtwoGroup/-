<template>
	<div>
		<div class='biao' @click="fan">
			<span>< </span>动态
		</div>
		<div class='aaa'><img class='aaa' src="../../static/img/11.jpg" alt="" /></div>
	</div>
</template>

<script>
	export default{
		name:'trends',
		methods:{
			fan(){
				this.$router.push({
					path:"/index"
				})
			}
		}
	}
</script>

<style scoped="" lang="scss">
@import "@/assets/css/rem.scss";
	.aaa{
	
		& img{
			width:100%;
			height:rem(400);
		}
	}
	.biao{
		width:100%;
		height:rem(100);
		line-height: rem(100); 
		font-size: rem(40);
		& span{
			font-size: rem(40);
		}
	}
</style>