<template>
	<div class='warp'>
		<div class='biao' @click="fan">
			<span>< </span>店铺图片
		</div>
		<div class='box'>
			<ul class='list'>
				<li v-for="item in list"><img :src="item" alt="" /></li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'dianimg',
		data(){
			return{
				list:["../../static/img/1.jpg","../../static/img/2.jpg","../../static/img/3.jpg","../../static/img/4.jpg","../../static/img/5.jpg","../../static/img/1.jpg","../../static/img/1.jpg","../../static/img/1.jpg","../../static/img/2.jpg"],
			}
		},
		methods:{
			fan(){
				this.$router.push({
					path:"/index"
				})
			},
		}
	}
</script>

<style scoped="" lang="scss">
@import "@/assets/css/rem.scss";
ul,li{
	padding:0;
	margin:0;
	list-style: none;
}
.warp{
	
	& .biao{
		width:100%;
		height:rem(100);
		line-height: rem(100); 
		font-size: rem(40);
		& span{
			font-size: rem(40);
		}
	}
	& .box{
		background:#ddd;
		width:100%;
		min-height:100%;
		box-sizing: border-box;
		padding:rem(0) rem(35) rem(35) rem(35);
		
		& .list{
			width:100%;
			height:100%;
			overflow: hidden;
			overflow: scroll;
			display: flex;
			flex-wrap: wrap;
			& li{
				width:rem(300);
				height:rem(300);
				margin-left:rem(28);
				margin-top:rem(30);
				& img{
					width:rem(300);
					height:rem(300);
				}
			}
		}
			
			
		
	}
	
}

</style>