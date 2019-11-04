<template>
	<div class="my">
		<div class="title">我的</div>
		<div class="avatar">
			<div class="avatar-img"><img src="@/assets/img/tx.png"/></div>
			<div class="avatar-name">齐文蒸</div>
		</div>
		<div class="order">
			<div class="order-top">
				<i class="iconfont icon-dingdan"></i>
				<h4>我的订单</h4>
				<span @click="goToPage(0)">查看全部 ></span>
			</div>
			<ul class="order-btm">
				<li @click="goToPage(0)">
					<i class="iconfont icon-daishouhuo"></i>
					<span>待收货</span>
				</li>
				<li @click="goToPage(1)">
					<i class="iconfont icon-huowu"></i>
					<span>待取货</span>
				</li>
				<li @click="goToPage(2)">
					<i class="iconfont icon-yiwancheng"></i>
					<span>已完成</span>
				</li>
				<li @click="goToPage(3)">
					<i class="iconfont icon-yiguanbigongdanshu"></i>
					<span>已关闭</span>
				</li>
			</ul>
		</div>
		<ul class="btm">
			<li @click="goToReservation()">
				<div>
					<i class="iconfont icon0 icon-check1"></i>
					<p>我要预约</p>
					<span>></span>
				</div>
			</li>
			<li @click="goToCoupon()">
				<div>
					<i class="iconfont icon1 icon-youhuiquan1"></i>
					<p>我的优惠券</p>
					<span>></span>
				</div>
			</li>
			<li @click="goTobargain()">
				<div>
					<i class="iconfont icon2 icon-kanjiahuodong"></i>
					<p>我发起的砍价</p>
					<span>></span>
				</div>
			</li>
			<li @click="goTogroup()">
				<div>
					<i class="iconfont icon3 icon-pintuan"></i>
					<p>我的拼团</p>
					<span>></span>
				</div>
			</li>
			<li @click="goToaddress()">
				<div>
					<i class="iconfont icon4 icon-location"></i>
					<p>收货地址</p>
					<span>></span>
				</div>
			</li>
			<li>
				<div>
					<i class="iconfont icon5 icon-xiaochengxu"></i>
					<p>做一样的小程序</p>
					<span>></span>
				</div>
			</li>
		</ul>
		<q-order :id="flag0?'lei':''" ref="order" :arr="pageArr"></q-order>
		<qreservation :id="flag1?'lei':''" :arr="pageArr"></qreservation>
		<coupon :id="flag2?'lei':''"></coupon>
		<bargain :id="flag3?'lei':''" :arr="pageArr"></bargain>
		<group :id="flag4?'lei':''" :arr="pageArr"></group>
		<qaddress :id="flag5?'lei':''"></qaddress>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				flag0:false,
				flag1:false,
				flag2:false,
				flag3:false,
				flag4:false,
				flag5:false,
				aaa:[
					{
						title:'育儿经典!',
						count:'10',
						types:'0'
					},{
						title:'街舞!',
						count:'6',
						types:'2'
					},{
						title:'体育!',
						count:'34',
						types:'3'
					},{
						title:'篮球!',
						count:'5',
						types:'2'
					},{
						title:'舞蹈!',
						count:'2',
						types:'1'
					},{
						title:'橄榄球!',
						count:'23',
						types:'1'
					}
				],
				pageArr:[
					{
						title:'育儿经典!',
						count:'10',
						types:'0'
					},{
						title:'街舞!',
						count:'6',
						types:'2'
					},{
						title:'体育!',
						count:'34',
						types:'3'
					},{
						title:'篮球!',
						count:'5',
						types:'2'
					},{
						title:'舞蹈!',
						count:'2',
						types:'1'
					},{
						title:'橄榄球!',
						count:'23',
						types:'1'
					}
				]
			}
		},
		methods:{
			onFilter(index){
				let arr = [];
				this.aaa.forEach(item=>{
					if(item.types == index){
						arr.push(item)
					}
				})
				this.pageArr = arr;
			},
			goToPage(activeNum){
				this.flag0 = true;
				this.$refs.order.tabbar(activeNum);
			},
			goToReservation(){
				this.flag1 = true;
			},
			goToCoupon(){
				this.flag2 = true;
			},
			goTobargain(){
				this.flag3 = true;
			},
			goTogroup(){
				this.flag4 = true;
			},
			goToaddress(){
				this.flag5 = true;
			},
			flag0Fn(){
				this.flag0 = false;
			},
			flag1Fn(){
				this.flag1 = false;
			},
			flag2Fn(){
				this.flag2 = false;
			},
			flag3Fn(){
				this.flag3 = false;
			},
			flag4Fn(){
				this.flag4 = false;
			},
			flag5Fn(){
				this.flag5 = false;
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
#lei{
	position: fixed;
	left:0;
	top:0;
	transition:0.3s;
}
.my{
	margin-bottom: rem(120);
}
/*icon颜色*/
.icon0{
	color:#ec6462;
}
.icon1{
	color:#ee7f31;
}
.icon2{
	color:#e86762;
}
.icon3{
	color:#73c670;
}
.icon4{
	color:#f2af47;
}
.icon5{
	color:#73c670;
}
li{
	list-style: none;
}
/*底部*/
.btm{
	background: #f4f4f4;
	li{
		background: #fff;
		div{
			display: flex;
			justify-content: flex-start;
			height:rem(94);
			line-height: rem(94);
			margin-left:rem(44);
			border-bottom:rem(1) solid #e2e2e2;
			position: relative;
			i{
				font-size:rem(40)
			}
			p{
				margin-left:rem(20);
				color:#000;
			}
			span{
				position: absolute;
				right:rem(30);
				top:rem(0);
				font-size:rem(50);
				color:#666;
			}
		}
		
	}
	li:first-child{
		margin-bottom:rem(20);
	}
	li:first-child div{
		border:none;
	}
	li:last-child {
		margin-top:rem(20);
	}
	li:last-child div{
		border:none;
	}
	li:nth-child(5) div{
		border:none;
	}
}
/*我的订单*/
.order{
	padding:0 rem(30) rem(20);
	border-bottom:rem(1) solid #999;
	
	.order-top{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		i{
			color:#f2af47;
			margin-right:rem(10);
			font-size:rem(40);
		}
		span{
			font-size:rem(26);
			margin-left:rem(380);
		}
	}
	.order-btm{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top:rem(50);
		li{
			color:#666;
			display: flex;
			justify-content: center;
			flex-flow: column;
			text-align: center;
			font-size:rem(30);
			i{
				font-size:rem(60);
			}
		}
	}
}
/*顶部*/
.title{
	text-align: center;
	padding:rem(15) 0;
	/*border-bottom:rem(1) solid #999;*/
}
/*头像*/
.avatar{
	padding:rem(44) 0 rem(40);
	display: flex;
	justify-content: center;
	flex-flow: column;
	align-items: center;
	.avatar-img{
		width:rem(150);
		height:rem(150);
		border-radius: 50%;
		overflow: hidden;
		margin-bottom:rem(20);
		img{
			width:100%;
			height:100%;
		}
	}
}
</style>