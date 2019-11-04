<template>
	<div class="bottomTabbar">
		<ul>
			<li @click="fn(0)" :class="{active:curIndex==0}">
				<router-link :to="{path:'index'}" tag="li">
					<i class="iconfont icon-weibiaoti-"></i>
					<p>首页</p>
				</router-link>
			</li>
			<li @click="fn(1)" :class="{active:curIndex==1}">
				<router-link :to="{path:'cart'}" tag="li">
					<i class="iconfont icon-gouwuche"></i>
					<p>购物车</p>
				</router-link>
			</li>
			<li @click="fn(2)" :class="{active:curIndex==2}">
				<router-link :to="{path:'course'}" tag="li" >
					<i class="iconfont icon-kecheng"></i>
					<p>开设课程</p>
				</router-link>
			</li>
			<li @click="fn(3)" :class="{active:curIndex==3}">
				<router-link :to="{path:'my'}" tag="li" >
					<i class="iconfont icon-wode"></i>
					<p>我的</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				curIndex:0
			}
		},
		methods:{
			fn(index){
				this.curIndex = index; 
			}
		}
	}
</script>
<style scoped="" lang="scss">
@import "@/assets/css/rem.scss";
*{
	margin:0;
	padding:0;
}
.bottomTabbar{
	position: fixed;
	bottom:0px;
	left:0;
	width:100vw;
	height:rem(120);
	border-top:1px solid #999;
	background:#fff;
	ul{
		width:100vw;
		height:100%;
		display: flex;
		justify-content: space-around;
		list-style: none;
		li{
			display: flex;
			align-items: center;
			flex-flow: column;
			justify-content: center;
			i{
				font-size:rem(50)
			}
		}
		.active{
			color:orange;
		}
	}
}
</style>