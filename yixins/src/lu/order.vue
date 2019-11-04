<template>
	<div>
		<div class='warp'>
			<div class='biao' @click="fan">
				<span>< </span>预约
			</div>
			<ul class='list'>
				<li @click="switchTab(1)">综合</li>
				<li @click="switchTab(2)">最热</li>
				<li @click="switchTab(3)">新品</li>
				<li @click="switchTab(4)">价格<i class='iconfont icon-shangxiajiantou'></i></li>
			</ul>
			<div class='zi'>
				<keep-alive>
					<conponent :is="current"></conponent>
				</keep-alive>
			</div>
		</div>
		
	</div>
</template>

<script>
	import v1 from './orderone/v1.vue'
	import v2 from './orderone/v2.vue'
	import v3 from './orderone/v3.vue'
	import v4 from './orderone/v4.vue'
	export default{
		name:'order',
		data(){
			return{
				current:'v1',
			}
		},
		methods:{
			fan(){
				this.$router.push({
					path:"/index"
				})
			},
			switchTab(index){
				
				this.current=`v${index}`
				console.log(this.current)
			},
		},
		components:{
			v1,v2,v3,v4
		}
	}
</script>

<style scoped="" lang="scss">
@import "@/assets/css/rem.scss";
*{
	margin:0;
	padding:0;
}
ul,li{
	list-style: none;
}
.warp{
	width:100%;
	height:100%;
	& .biao{
		width:100%;
		height:rem(100);
		line-height: rem(100); 
		font-size: rem(40);
		& span{
			font-size: rem(40);
		}
	}
	& .list{
		width:100vw;
		display: flex;
		justify-content: space-around;
		height:rem(100);
		& li{
			height:rem(100);
			line-height:rem(100);
		}
	}
}

</style>