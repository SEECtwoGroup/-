<template>
	<div class='warp'>
		<div class='biao' @click="fan">
			<span>< </span>联系我们
		</div>
		<div class='box'>
			<div class='shipu'>
				<div class='shipu-two'><img src="../../static/img/12.png" alt="" /></div>
				<div class='shipu-one'>
					<div>石浦艺欣技术学校</div>
					<div>距离我们1334.5km</div>
				</div>
				<div class='shipu-ther'>
					<div><i class='iconfont icon-weixin'></i></div>
					<div class='shang'>联系商家</div>
				</div>
			</div>
			<ul class='box-one'>
					<li class='weizhi'>
						<i class='iconfont icon-weizhi'></i>
						<span class='aaa'>asdgdsagdssadfsdagsad</span>
						<i class='jian iconfont icon-youjiantou'></i>
					</li>
					<li class='weizhi'>
						<i class='iconfont icon-tel'></i>
						<span class='aaa'>13933888314</span>
						<i class='jian iconfont icon-youjiantou'></i>
					</li>
					<li class='biao-one'>
						<i class='iconfont icon-biao'></i><span>24小时</span>
					</li>
					<li class='biao-two'>
						<i class='iconfont icon-qita'></i>
						<span v-for="item in wifi">{{item}}</span>
					</li>
					<li class='biao-one'>
						<i class='iconfont icon-tupian'></i>
						<span >店铺图片</span>
						<span class='aaa'>更多</span><i class='iconfont youjiantt icon-youjiantou'></i>
					</li>
					<li class='imget'>
						<img src="../../static/img/9.png" alt="" />
						<img src="../../static/img/9.png" alt="" />
						<img src="../../static/img/9.png" alt="" />
					</li>
					<li class='yixin'>
						<i class='iconfont icon-shifouyunxuweiwanchengpandianrenwukaidan'></i><span>艺欣艺术</span>
					</li>
					<li class='tu-one'>
						撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点
					</li>
					<li class='tu-one tu-two'>
						撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射点撒旦发射♥
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'contact',
		data(){
			return{
				wifi:["Wi-Fi","停车位","支付宝支付","微信支付"]
			}
		},
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
ul,li{
	list-style: none;
	margin:0;
	padding:0;
}

.warp{
	.biao{
		width:100%;
		height:rem(100);
		line-height: rem(100); 
		font-size: rem(40);
		border-bottom:1px solid #ddd;
		& span{
			font-size: rem(50);
		}
	}
	& .box{
		width:100%;
		padding:rem(30);
		box-sizing: border-box;
		min-height: rem(600);
		& .shipu{
			width:100%;
			height:rem(153);
			border-bottom:1px dashed #ddd;
			display: flex;
			align-items: center;
			& .shipu-two{
				width:rem(75);
				height:rem(75);
				border-radius: 50%;
				overflow: hidden;
				& img{
					width:rem(75);
					height:rem(75);
				}
			}
			& .shipu-one{
				margin-left:rem(30);
				width:rem(300);
				& div:nth-child(2){
					font-size: rem(20);
					color:#ccc;
				}
			}
			& .shipu-ther{
				text-align: center;
				margin-left:rem(100);
				& div:nth-child(1){
					color:rgb(112,195,41);
				}
				.shang{
					font-size: rem(16);
				}
			}
		}
	}
}
.box-one{
	width:100%;
	height:100%;
	background: #fff;
	& .tu img{
		height:100%;
		width:100%;
	}
	& .biao-one{
		margin-top:rem(30);
		& .aaa{
			
			margin-left:rem(250);
			display:inline-block;
			width:rem(70);
		}
		& .youjiantt{
			margin-left:rem(0);
		}
		& span{
			margin-left:rem(10);
			display:inline-block;
			width:rem(270);
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
	& .weizhi{
		margin-top:rem(30);
		& .aaa{
			width:rem(270);
			display: inline-block;
		}
		& .jian{
			margin-left:rem(330);
		}
		
	}
	& .imget{
		width:100%;
		height:rem(260);
		display: flex;
		justify-content: space-between;
		align-items: center;
		& img{
			width:rem(220);
			height:rem(220);
		}
	}
	& .yixin{
		& span{
			margin-left:rem(20);
		}
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
</style>