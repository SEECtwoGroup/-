<template>
	<div class='preferential'>
		<div class='biao' @click="fan">
			<span>< </span>优惠券
		</div>
		<div class='aaa'>
			<img class='aaa' src="../../static/img/12.png" alt="" />
		</div>
		<div class='youhui'>
			<div class='youhui-one'>
				<img @click="xiangqing()" src="../../static/img/13.png" alt="" />
				<div class='lingqu'>
					<div>￥100</div>
					<div>代金券</div>
					<div @click="lingqu()">{{yilingqu}}</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'preferential',
		data(){
			return{
				yilingqu:'点击领取',
				yilingquone:true
			}
		},
		methods:{
			fan(){
				this.$router.push({
					path:"/index"
				})
			},
			lingqu(){
				if(this.yilingquone){
					this.yilingqu="已领取"
					this.yilingquone=!this.yilingquone
					console.log(this.yilingquone)
					sessionStorage.setItem('carts',this.yilingqu)
				}
			},
			xiangqing(){
				this.$router.push({
					path:"/youhuixiang"
				})
			}
		},
		mounted(){
			this.yilingqu=sessionStorage.getItem('cart')||'立即领取'
		},
	}
</script>

<style scoped="" lang="scss">
@import "@/assets/css/rem.scss";
.preferential{
	width:100vw;
	height:100vh;
	.aaa{
		& img{
			width:100%;
			height:rem(250);
		}
	}
	.biao{
		width:100%;
		height:rem(100);
		line-height: rem(100); 
		font-size: rem(40);
		& span{
			font-size: rem(50);
		}
	}
	.youhui{
		
		width:100%;
		height:rem(200);
		padding:rem(23);
		box-sizing: border-box;
		& .youhui-one{
			display: flex;
			height:rem(200);
			& img{
				height:rem(200);
			}
			& .lingqu{
				text-align: center;
				background:rgb(69,139,254);
				height:rem(200);
				width:rem(200);
				& div{
					margin-top:rem(10);
				}
				& div:nth-child(1){
					color:#fff;
					margin-top:rem(20);
				}
				& div:nth-child(2){
					font-size: rem(16);
				}
				& div:nth-child(3){
					width:rem(170);
					height:rem(50);
					background: #fff;
					line-height: rem(50);
					text-align: center;
					font-size: rem(16);
					border-radius: rem(30);
					margin-left:rem(12);
				}
			}
		}
	}
}
</style>