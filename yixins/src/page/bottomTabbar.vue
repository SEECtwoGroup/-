<template>
	<div class="bottomTabbar">
		<ul>
			<li @click="fn(0)" :class="{active:curIndex==0}">
				<router-link :to="{path:'index'}" tag="li">
					<i class="iconfont icon-shouye"></i>
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
					<i class="iconfont icon-shenghuaweijibiohazard1"></i>
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
	border-top:rem(1) solid #999;
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
			font-size:rem(28);
			i{
				font-size:rem(50);
				color:#ccc;
			}
		}
		li.active{
			color:orange;
			i{
				color:orange;
			}
		}
	}
}
</style>