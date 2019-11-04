<template>
	<div class="address">
		<div class="title">
			<div class="pack" @click="onPack()"><i class="iconfont icon-fanhui"></i></div>
			<div class="name">我的地址</div>
			<div class="carry" @click="onPack()">完成</div>
		</div>
		<ul class="list">
			<li v-for="item,index in arr" @click="onAddress(index)">
				<p><i v-show="defaultIndex == index" class="iconfont icon-duigouxuanzhong"></i></p>
				<div>
					<p>{{item.name}}</p>
					<span>{{item.address}}</span>
				</div>
				<i class="iconfont icon-biao"></i>
			</li>
			<div class="addAddress" @click="onShow()">新增地址</div>
		</ul>
		<qaddaddress v-show="flag" @zichuan="zichuanzhi"></qaddaddress>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				flag:false,
				arr:[
					{
						name:'齐',
						address:'北京工商管理专修学院'
					},{
						name:'毛',
						address:'北京工商管理专修学院'
					},{
						name:'虎',
						address:'北京工商管理专修学院'
					}
				],
				defaultIndex:0
			}
		},
		methods:{
			onPack(){
				this.$parent.flag5Fn();
			},
			onAddress(index){
				this.defaultIndex = index
			},
			onShow(){
				this.flag = true;
			},
			onShow2(flag){
				this.flag = flag;
			},
			zichuanzhi(obj){
				this.onShow2(false)
				this.arr.push(obj)
			}
		}
	}
</script>
<style scoped="" lang="scss">
@import '@/assets/css/rem.scss';
*{
	margin:0;
	padding:0;
}
.list{
	background: #fff;
	margin-top:rem(30);
	li{
		border-bottom: rem(1) solid #f4f4f4;
		display: flex;
		justify-content:space-between;
		align-items: center;
		padding:rem(10) rem(30);
		span{
			color:#999;
			font-size:rem(28);
		}
		>p{
			width:rem(20);
		}
		>div{
			width:rem(500)
		}
	}
	.addAddress{
		order:10;
		padding-left:rem(70);
		line-height: rem(100);
	}
}
.address{
	transition:0.3s;
	position: fixed;
	top:0;
	left:100vw;
	width:100vw;
	height:100vh;
	background: #f4f4f4;
	.title{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-top:rem(30);
		padding-left:rem(33);
		.name{
			margin-left:rem(240);
		}
		.carry{
			background: green;
			text-align: center;
			line-height: rem(60);
			color:#fff;
			padding:rem(0) rem(20);
			border-radius: rem(10);
			margin-left:rem(190);
		}
	}
}
</style>