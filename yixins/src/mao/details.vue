<template>
	<div>
		<div class="deta">
			<div class="header">
				<img src="../assets/logo.png"/>
			</div>
			<div class="deta-title">
				<div class="d-title">
					<p>{{name}}</p>
					<i>分享</i>
				</div>
				<p class="de-price">￥{{price}}</p>
				<div class="datga-slite">
					<span>运费￥0</span>
					<span style="float: right;">浏览{{brode}}次</span>
				</div>
				<div class="vip">
					<span>会员卡</span>
					<p>本商品1111111111111111111111111111111111111111111111111111111111111111</p>
				</div>
			</div>
		</div>
		
		<div class="pome">
			<p class="pome-center" @click="btnzan">{{flge}}赞</p>
			<p class="p-cen">6人觉得赞</p>
			<ul class="pome-lis">
				<li><img src="../../build/logo.png"/></li>
				<li><img src="../../build/logo.png"/></li>
				<li><img src="../../build/logo.png"/></li>
				<li><img src="../../build/logo.png"/></li>
			</ul>
		</div>
		<div class="script-pri">
			<p @click="swicth(1)">图片详情</p>
			<p>|</p>
			<p @click="swicth(2)">商品评论</p>


		</div>
			<component :is="cureet"></component>
		
		<div class="deta-fidex">
			<ul class="list-fidex">
				<li>客服</li>
				<li @click="btnlis">主页</li>
				<li @click="btncrat">购物车</li>
			</ul>
			<span style="background: yellow;" @click="btnprice">加入购物车</span>
			<span style="background: orange;">立即购买</span>
		</div>
	</div>
</template>

<script>
	import v1 from '@/mao/v1'
	import v2 from '@/mao/v2'
	export default{
		components:{
			v1,
			v2
		},
		data(){
			return{
				name:'',
				price:'',
				brode:'',
				num:'',
				type:false,
				snus:1,
				cureet:v1,
				flge:false
			}
		},
		mounted(){
			var a=[]
			a = this.$route.query.names
			for(var i=0;i<a.length;i++){
				this.name=a[i].name
				this.price=a[i].price
				this.brode=a[i].brode
				this.num=a[i].num
			}
			
		},
		methods:{
			swicth(index){
				this.cureet= `v${index}`
			},
			btnzan(){
				this.flge=true
				if(this.flge==true){
					alert('已点赞')
				}
			},
			btnlis(){
				this.$router.push({
					path:'/index'
				})
			},
			btnprice(){
				var arr={
					name:this.name,
					price:this.price,
					brode:this.brode,
					num:this.num,
					type:this.type,
					snus:this.snus
				}
				console.log(arr,1)
				localStorage.setItem('deta',JSON.stringify(arr))
			},
			btncrat(){
				this.$router.push({
						path:"cart",
				})
			}
		}
	}
</script>
 
<style lang="scss">
	ul,li{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	p{
		margin: 0;
		padding: 0;
	}
	body{
		margin: 0;
		padding: 0;
	}
	@import '@/assets/css/rem.scss';
	.header{
		width:100vw;
		height: rem(600);
		img{
			width:100%;
			height: 100%;
		}
	}
	.deta-fidex{
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		z-index: 11;
		ul{
			width: 45vw;
			display: flex;
			height: rem(120);
			li{
				background: #fff;
				width: 15vw;
				line-height: rem(120);
				text-align: center;
			}
		}
		span{
			color: #fff;
			text-align: center;
			width: 27.5vw;
			height: rem(120);
			line-height: rem(120);
		}
	}
	.deta-title{
		background: #fff;
		box-sizing: border-box;
		padding: rem(30);
		.d-title{
			display: flex;
			p{
				width: 80vw;
				font-size: rem(24);
				
			}
			i{
				width:rem(30);
				height: rem(30);
			}
		}
		.de-price{
			color: orange;
			font-size: rem(30);
			line-height: rem(60);
		}
		.datga-slite{
			height: rem(60);
			span{
				float: left;
				color: #ccc;
				font-size: rem(24);
			}
		}
		.vip{
			height: rem(80);
			display: flex;
			span{
				font-size: rem(28);
				color: #ccc;
			}
			p{
				width: 76vw;
				word-wrap: break-word;
				margin-left:rem(15);
				font-size: rem(20);
			}

		}
	}
	.pome{
		margin-top: rem(20);
		width: 100vw;
		height: rem(200);
		.pome-center{
			margin: 0 auto;
			width: rem(140);
			height: rem(60);
			background: yellow;
			border-radius: rem(40);
			text-align: center;
			color: #fff;
			font-size: rem(28);
			line-height: rem(60);
		}
		.p-cen{
			margin-top: rem(20);
			text-align: center;
			font-size:rem(20);
		}
		.pome-lis{
			width: 60vw;
			margin: rem(20) auto;
			li{
				display: inline-block;
				img{
					width: rem(40);
					height: rem(40);
				}
			}
		}
	}
	.script-pri{
		width: 100vw;
		display: flex;
		justify-content: space-around;
		span{
			
			font-size: rem(24);
			color: #fff;

		}
	}
	.bottomTabbar{
		/*display: none;*/
	}
</style>