<template>
	<div>
		<div class='biao' @click="fan">
			<span>< </span>优惠券详情
		</div>
		<div class='warp'>
			<img class='title' src="../../static/img/14.png" alt="" />
			<div class='box'>
				<div class='daijin'>
					<div>艺欣艺术100代金券</div>
					<div>-- 100元 --</div>
					<div>马上领取</div>
				</div>
				<div :class="zhans?'active':''" class='ren'>
					<ul class='listr' :class="zhans?'active':''">
						<li v-for='item in swipimg'><img :src="item" alt="" /></li>
					</ul>
					<div>60人已领</div>
					<div @click="zhansa()">{{shouqu}}⬇</div>
				</div>
				<div class='youxiao'>
					<div class='youxiao-one'>
						<div>有效期</div>
						<div>2019-11-11至2020-11-11</div>
					</div>
					<div class='youxiao-two'>
						<div><i class='iconfont icon-fenxiang3'></i></div>
						<div>分享</div>
					</div>
				</div>
				<div class='xinxi'>
					<div class='xinxi1'>店铺信息</div>
					<div class='xinxi2'>
						<i class='iconfont icon-weizhi'></i>
						<span class='weizhi1'>浙江事闪现食谱安爱啊</span>
						<span class='weizhi'>></span>
					</div>
					<div class='xinxi3'><i class='iconfont icon-biao'></i>24小时</div>
					<div class='xinxi4'>
						<span><i class='iconfont icon-tel'></i>拨打电话</span>
						<span>|</span>
						<span><i class='iconfont icon-weixin '></i>联系客服</span>
					</div>
					<div class='xinxi5'>使用规则</div>
					<div class='xinxi6'>阿三发射点范德萨范德萨富士达范德萨发手动阀手动阀撒旦</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'youhuixiang',
		data(){
			return{
				
				swipimg:[
				"../../static/img/1.jpg",
				"../../static/img/2.jpg",
				"../../static/img/3.jpg",
				"../../static/img/4.jpg",
				"../../static/img/5.jpg",
				"../../static/img/1.jpg",
				"../../static/img/2.jpg",
				"../../static/img/3.jpg",
				"../../static/img/4.jpg",
				"../../static/img/5.jpg",
				"../../static/img/1.jpg",
				"../../static/img/2.jpg",
				"../../static/img/3.jpg",
				"../../static/img/4.jpg",
				"../../static/img/5.jpg",
				"../../static/img/1.jpg",
				"../../static/img/2.jpg",
				"../../static/img/3.jpg",
				"../../static/img/4.jpg",
				"../../static/img/5.jpg",
				"../../static/img/1.jpg",
				"../../static/img/2.jpg",
				"../../static/img/3.jpg",
				"../../static/img/4.jpg",
				"../../static/img/5.jpg",
				],
				zhans:false,
				shouqu:'展开'
			}
		},
		methods:{
			fan(){
				this.$router.push({
					path:"/index"
				})
			},
			zhansa(){
				this.zhans=!this.zhans
				if(this.zhans){
					this.shouqu='收取';
				}else{
					this.shouqu="展开";
				}
			}
		},
		
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

.biao{
	width:100%;
	height:rem(100);
	line-height: rem(100); 
	font-size: rem(40);
	& span{
		font-size: rem(40);
	}
}
.warp{
	width:100%;
	min-height:100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	background: rgb(51,122,255);
	& .title{
		width: 100vw;
		height:rem(150);
	}
	& .box{
		padding:rem(20);
		box-sizing: border-box;
		width:rem(692);
		height:100vh;
		background:#fff;
		& .daijin{
			text-align: center;
			width:100%;
			height:rem(280);
			border-bottom: 1px dashed #ddd;
			& div:nth-child(1){
				font-size: rem(40);
			}
			& div:nth-child(2){
				font-size: rem(30);
				margin-top:rem(10);
				color:#ccc;
			}
			& div:nth-child(3){
				margin-top:rem(20);
				width:rem(600);
				height:rem(100);
				line-height: rem(100);
				border-radius: rem(50);
				background: rgb(68,137,254);
				margin-left:rem(30);
				color:#fff;
			}
		}
		& .ren{
			width:100%;
			height:rem(300);
			text-align: center;
			& .listr{
				overflow: hidden;
				width:100%;
				height:rem(130);
				display: flex;
				flex-wrap: wrap;
				margin-top:rem(60);
				& li img{
					width:rem(60);
					height:rem(60);
					border-radius: 50%;
					margin-left:rem(20);
				}
			}
			& .active{
				overflow: none;
				min-height:rem(300);
			}
			& div{
				margin-top:rem(10);
			}
		}
		& .active{
			height:rem(400);
		}
		& .youxiao{
			width:100%;
			height:rem(100rem);
			display: flex;
			& .youxiao-one{
				& div:nth-child(2){
					font-size: rem(20);
					color:#ddd;
					margin-top:rem(20);
				}
			}
			& .youxiao-two{
				text-align: center;
				margin-left:rem(280);
				& div:nth-child(2){
					font-size: rem(20);
					margin-top:rem(10);
				}
				
			}
		}
		& .xinxi{
			width:100%;
			min-height:rem(300);
			margin-top:rem(30);
			
			& .xinxi2{
				& i{
					font-size: rem(22);
					color:#ccc;
				}
				& .weizhi1{
					width:rem(400);
					display: inline-block;
					margin-top:rem(20);
					font-size: rem(22);
					color:#ccc;
				}
				& .weizhi{
					margin-left:rem(150);
					font-size: rem(35);
					color:#ccc;
				}
			}
			& .xinxi3{
				margin-top:rem(20);
				font-size: rem(22);
				color:#ccc;
			}
			& .xinxi4{
				width:100%;
				display: flex;
				justify-content: space-around;
				margin-top:rem(20);
				& .icon-tel{
					color:blue;
				}
				& .icon-weixin{
					color:green;
				}
			}
			& .xinxi5{
				margin-top:rem(20);
			}
			& .xinxi6{
				margin-top:rem(20);
				color:red;
				font-size: rem(28);
			}
		}
	}
}
</style>