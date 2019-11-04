<template>
	<div>
		<div class="index">
			<mt-swipe class='swiper' :auto="4000">
				<mt-swipe-item class="huadong" v-for="(item,index) in swipimg">
					<img :src="item" :key="index"/>
				</mt-swipe-item>
			</mt-swipe>
			<ul class='list'>
				<li v-for="(item,index) in tai" @click="gouhop(index)">
					<img :src="item.imgs" alt="" /><span>{{item.name}}</span>
				</li>
			</ul>
			<div class='youhui'>
				<div class='title'>
					
				</div>
				<div class='center'>
					<div class='quan'>
						<img src="../../static/img/7.png" alt="" />
					</div>
					<div class='shijian' @click="youhuixiang()">
						<span class='shijian-two'>艺欣艺术100代金券</span><br />
						<span class='shijian-one'>2019-11-11至2020-11-11</span>
					</div>
					<div class='ling'>
						<div class='ling-one' @click="lingqu()">{{jiangquan}}</div>
						<div class='ling-tow'>60人已领</div>
					</div>
				</div>
			</div>
			<div class='bottom'>
				<div class='title'>
					
				</div>
				<ul class='biao'>
					<li class='biao-one'>
						<i class='iconfont icon-biao'></i><span>24小时</span>
					</li>
					<li class='biao-two'>
						<i class='iconfont icon-qita'></i>
						<span v-for="item in wifi">{{item}}</span>
					</li>
					<li class='biao-one'>
						<i class='iconfont icon-biao'></i><span>艺欣艺术</span>
					</li>
					<li class='tu'>
						<img src="../../static/img/9.png" alt="" />
					</li>
					<li class='tu-one'>
						撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点
					</li>
					<li class='tu-one tu-two'>
						撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射♥
					</li>
				</ul>
			</div>
			<div class='dianimg'>
				<div class='title'>
					<div class='big' @click="dianimg()">全部<i class='iconfont icon-youjiantou'></i></div>
				</div>
				<ul class='lists'>
					<li class='list-one'><img class='list-two' src="../../static/img/9.png" alt="" /></li>
					<li class='list-one'><img class='list-two' src="../../static/img/9.png" alt="" /></li>
					<li class='list-one'><img class='list-two' src="../../static/img/9.png" alt="" /></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'index',
		data(){
			return{
				jiangquan:'领取',
				jiangstate:true,
				swipimg:["../../static/img/1.jpg","../../static/img/2.jpg","../../static/img/3.jpg","../../static/img/4.jpg","../../static/img/5.jpg"],
				tai:[
					{
						name:'动态',
						imgs:"../../static/img/1.jpg",
						to:"/trends"
					},
					{
						name:'预约',
						imgs:"../../static/img/2.jpg",
						to:"/order"
					},
					{
						name:'优惠券',
						imgs:"../../static/img/3.jpg",
						to:"/preferential"
					},
					{
						name:'联系我们',
						imgs:"../../static/img/4.jpg",
						to:"/contact"
					}
				],
				wifi:["Wi-Fi","停车位","支付宝支付","微信支付"]
			}
		},
		methods:{
			
			lingqu(){
				if(this.jiangstate){
					this.jiangquan="已领取"
					this.jiangstate=!this.jiangstate
					console.log(this.jiangstate)
				}
				sessionStorage.setItem('cart',this.jiangquan)
			},
			gouhop(index){
				this.$router.push({
					path:this.tai[index].to
				})
			},
			dianimg(){
				this.$router.push({
					path:'/dianimg'
				})
			},
			youhuixiang(){
				this.$router.push({
					path:"/youhuixiang"
				})
			},
		},
		mounted(){
			this.jiangquan=sessionStorage.getItem('cart')||"领取"
			this.jiangquan=sessionStorage.getItem('carts')||'领取'
		},
	}
</script>
<style scoped="" lang="scss">
@import "@/assets/css/rem.scss";
*{
	margin:0;padding:0;
}
ul,li{
	list-style: none;
}
.active{
	color:#ddd;
}
.index{
	width:100vw;
	min-height:100vh;
	background: rgb(243,243,243);
}
.swiper{
	width:100vw;
	height:30vh;
}
.huadong{
	width:100vw;
	height:100vh;
}
.huadong img{
	width:100vw;
	height:30vh;
}
.list{
	width:100%;
	height:rem(200);
	display: flex;
	background:#fff;
	& li{
		width: rem(130);
		height: rem(200);
		text-align: center;
		margin-left:rem(10);
		& img{
			width: rem(100);
			height: rem(100);
			border-radius: 50%;
			margin-top:rem(30);
		}
		& span{
			
			border-radius: 50%;
			display: inline-block;
			margin-top:rem(10);
		}
	}
}
.youhui{
	width:100%;
	height:rem(265);
	background:#fff;
	margin-top:rem(20);
	box-sizing: border-box;
	padding:rem(0) rem(35) rem(35) rem(35);
	& .title{
		width:100%;
		height:rem(90);
		background:url('../../static/img/6.png');
		background-size: 100% 100%;
		border-bottom:1px solid #ddd;
	}
	& .center{
		width:100%;
		height:rem(175);
		display: flex;
		& .quan{
			width:rem(180);
			height:rem(135);
			margin-top:rem(20);
			& img{
				width:100%;
				height:100%;
				
			}
		}
		& .shijian{
			width:rem(320);
			margin-top:rem(30);
			margin-left:rem(20);
			& .shijian-two{
				font-size:rem(26);
			}
			& .shijian-one{
				font-size:rem(20);
				color:rgb(141,141,141);
			}
		}
		& .ling{
			width:rem(185);
			margin-top:rem(30);
			text-align: center;
			& .ling-one{
				width:rem(185);
				height:rem(70);
				border:1px solid #ddd;
				line-height: rem(70);
				text-align: center;
				border-radius: rem(35);
			}
			& .ling-tow{
				font-size: rem(20);
				color:#ccc;
			}
			& .ling-tow{
				font-size: rem(20);
				color:#ccc;
			}
		}
	}
	
}
.bottom{
	width:100%;
	min-height:rem(1000);
	background:#fff;
	margin-top:rem(30);
	box-sizing: border-box;
	padding:rem(0) rem(35) rem(35) rem(35);
	& .title{
		width:100%;
		height:rem(90);
		background:url('../../static/img/8.png');
		background-size: 100% 100%;
		border-bottom:1px solid #ddd;
	}
	& .biao{
		width:100%;
		height:100%;
		background: #fff;
		& .tu img{
			height:100%;
			width:100%;
		}
		& .biao-one{
			margin-top:rem(30);
			& span{
				margin-left:rem(10);
			}
		}
		& .biao-two{
			margin-top:rem(30);
			& span{
				display: inline-block;
				width:rem(145);
				height:rem(40);
				font-size:rem(20);
				line-height: rem(40);
				text-align: center;
				border:1px solid rgb(249,127,0);
				color:rgb(249,127,0);
				margin-right:rem(10);
			}
		}
	}
	& .tu{
		width:100%;
		height:rem(500);
		background:#fff;
		margin-top:rem(10);
	}
	& .tu-one{
		width:100%;
		height:rem(500);
		background:#fff;
		margin-top:rem(10);
		font-size:rem(50);
	}
	& .tu-two{
		color:#f00;
	}
}
.dianimg{
	width:100%;
	height:rem(500);
	background:#fff;
	margin-top:rem(30);
	box-sizing: border-box;
	padding:rem(0) rem(35) rem(35) rem(35);
	& .title{
		position: relative;
		width:100%;
		height:rem(90);
		background-size: 70% 100%;
		background: url("../../static/img/10.png") no-repeat;
		background-size: 50% 100%;
		background-position-x:50% ;
		border-bottom:1px solid #ddd;
		& img{
			width:100%;
			height:100%;
		}
		& .big{
			position: absolute;
			right:0;
			top:50%;
			margin-top:rem(-18);
		}
	}
	& .lists{
		display: flex;
		width:100%;
		height:rem(410);
		padding:rem(40);
		box-sizing: border-box;
		& .list-one{
			width:rem(200);
			height:rem(200);
			margin-right:rem(10);
			& .list-two{
				width:rem(200);
				height:rem(200);
				
			}
		}
		
	}
}
</style>