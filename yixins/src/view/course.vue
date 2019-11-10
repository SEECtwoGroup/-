<template>
	<div>
		<!--搜索栏-->
		<mt-search
		  v-model="value"
		  cancel-text="取消"
		  placeholder="搜索">
		</mt-search>
		<div class="coures">
			<!--列表-->
			<div class="coures_left">
				<ul>
					<li v-for="(item,index) in arrt" @click="btnlin(index)">{{item.name}}</li>
				</ul>
			</div>
			
			<div class="coures_right">
				<div class="right_box" v-for="(item,index) in liisdata">
					<img src="../assets/logo.png"/>
					<div class="right_text">
						<p>{{item.name}}</p>
						<span class="right_price">￥{{item.price}}</span><span class="right_xq" @click="btndeta(index)">进入详情页</span></br>
						<span>{{item.brode}}浏览</span><span>{{item.num}}赞</span><span>{{item.slite}}评论</span>
						<p class="right-cart">购物车</p>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	import { Search } from 'mint-ui';
	
	export default{
		data(){
			return{
				value:"",
				arrt:[
				{
					name:'全部',
					inde:1
				},
				{
					name:'天使宝宝',
					inde:2
				},
				{
					name:'舞蹈启蒙',
					inde:3
				},
				{
					name:'舞蹈低段',
					inde:4
				},
				{
					name:'舞蹈中段',
					inde:5
				},
				{
					name:'舞蹈高段',
					inde:6
				}
				],
				aster:[
					{
						name:'易欣艺术 美术、天使宝宝班300元学费任你砍！砍！砍！',
						price:300,
						brode:'2600',
						num:'6',
						slite:'2',
						index:0
						
					},
					{
						name:'易欣艺术 500元学费任你砍！砍！砍！',
						price:300,
						brode:'2600',
						num:'6',
						slite:'2',
						index:1
						
					},
					{
						name:'易欣艺术 2000元学费任你砍！砍！砍！',
						price:300,
						brode:'2600',
						num:'6',
						slite:'2',
						index:2
						
					},
					{
						name:'易欣艺术 100元学费任你砍！砍！砍！',
						price:300,
						brode:'2600',
						num:'6',
						slite:'2',
						index:3
						
					}
				],
				liisdata:[]
			}
		},
		methods:{
			btndeta(index){
				console.log(index)
				var arr=[]
				
				for(var i=0;i<this.aster.length;i++){
					if(index==this.aster[i].index){
						arr.push(this.aster[i])
					}
				}
				console.log(arr)
				
				this.$router.push({
						path:"deta",
						query:{
							names:arr
						}
					})

			},
			btnlin(index){
				console.log(index)
				
				console.log(this.liisdata)
				console.log(this.aster)
				for(var a=0;a<this.aster.length;a++){
					if(index==0){
						this.liisdata.push(this.aster[a])
					}else if(index==this.aster[a].index){
						this.liisdata=[]
						this.liisdata.push(this.aster[a])
					}
				}
			}
		}
	}
	
</script>
<style scoped="" lang="scss">
	@import '@/assets/css/rem.scss';
	body{
		background: rgb(217,217,217);
		overflow: hidden;
	}
	ul,li{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.mint-searchbar-inner{
		border-radius:rem(30);
	}
	.mint-search{
		height:rem(104);	
	}
	.coures{
		width: 100vw;
		height: 100vh;
		display: flex;
		.coures_left{
			width: 25vw;
			height:83vh;
			/*background:#fff;*/
			ul{
				li{
					height: rem(100);
					border-bottom: 1px solid #ccc;
					text-align: center;
					line-height: rem(100);
				}
			}
		}
		.coures_right{
			width: 75vw;
			height:83vh;
			box-sizing: border-box;
			padding: rem(25);
			overflow: hidden;
			background: #fff;
			.right_box{
				display: flex;
				height:(300);
				position:relative;
				img{
					width: rem(120);
					height: rem(160);
				}
				.right_text{
					margin-left: rem(10);
					p{
						padding: 0;
						margin: 0;
						font-size: rem(24);
					}
					span{
						font-size: rem(20);
						color: #ccc;
						margin-left:rem(10);
					}
					.right_price{
						color: orange;
						line-height: rem(40);
					}
					.right_xq{
						font-size: rem(40);
						color: #000;
						margin-left: rem(30);
					}
					.right-cart{
						width:rem(60);
						height:rem(60);
						position: absolute;
						right: 0;
						top: rem(100);
					}
				}
				
			}
		}
	}
</style>