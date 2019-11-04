<template>
	<div class="cart">
		<div class="shoufalse" v-show="yuc">
			<p>购物车空</p>
		</div>
		<div class="cart_list" v-show="tysr">
			<div class="cart_box" v-for="(item,index) in atd">
				<input type="checkbox" v-model="item.type" />
				<img src="../../build/logo.png"/>
				<div class="cart-text">
					<p>{{item.name}}</p>
					<span>进入详情页</span>
					<span class="muony">￥{{item.price}}</span>
					<div class="cart-btn">
						<ul>
							<li @click="add(index)">-</li>
							<li>{{item.snus}}</li>
							<li @click="att">+</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
		<div class="cart-fidex">
			<label>
				<input type="checkbox" v-model="allSlit"/>
				<span>全选</span>
			</label>
			<span class="cart-price">合计:<i>￥{{all.num1}}</i></span>
			<span class="cart_btnsa">去结算({{all.num2}})</span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				yuc:false,
				tysr:false,
				coe:'',
				arr: [
					{
						num:1,
						name: "",
						price: 300,
						fn1: false

					}
				],
				atd:[]
			}
		},
		mounted(){
			var lis= JSON.parse(localStorage.getItem("deta") || '[]')
			this.atd.push(lis)
			console.log(this.atd)
			if(this.atd==''){
				this.yuc=true
			}else{
				this.tysr=true
			}
			
		},
		computed:{
			allSlit: {
				get() {
					return this.atd.every(item => {
						return item.type == true
					})
				},
				set(val) {
					return this.atd.forEach(item => {
						return item.type = val
					})
				}
			},
			all() {
				let num1 = 0;
				let num2 = 0;
				this.atd.forEach(item => {
					if(item.type) {
						num1+= item.snus*item.price
						num2 += item.snus
					}
				})
				return {
					num1,
					num2

				}
			}
		},
		methods:{
			add(index){
				this.atd.forEach(item => {
					item.snus--
					if(item.snus<1){
						this.atd.splice(index,1)
						localStorage.removeItem('deta')
					}
				})
				
//				for(var i=0,i<this.atd.length;i++){
//					if(this.atd[index].snus<1){
//						localStorage.removeItem(deta)
//					}
//				}
				
				
				
			},
			att(index){
				this.atd.forEach(item => {
					item.snus++
				})
			}
		}
	}
</script>
<style lang="scss">
	@import '@/assets/css/rem.scss';
	ul,li{
		list-style: none;
	}
	body{
		overflow: hidden;
		background: #ccc;
	}
	.cart{
		width: 100vw;
		height: 100vh;
		.shoufalse{
			p{
				text-align: center;
				font-size: rem(50);
				line-height: 50vh;
			}
		}
	}
	.cart_list{
		.cart_box{
			background: #fff;
			width: 100vw;
			height: rem(200);
			box-sizing: border-box;
			padding: rem(20);
			display: flex;
			input{
				width: rem(30);
				height: rem(30);
				margin-top: rem(60);
			}
			img{
				width: rem(150);
				height: (150);
			}
			.cart-text{
				margin-left: rem(20);
				position: relative;
				p{
					font-size: rem(26);
					padding: 0;
					margin: 0;
				}
				span{
					font-size: rem(20);
					line-height: rem(20);
				}
				.muony{
					font-size: rem(25);
					color: orange;
					display: block;
				}
				.cart-btn{
					ul{
						position: absolute;
						right: rem(20);
						top: rem(40);
						padding: rem(0);
						border:1px solid #ccc;
						height: rem(40);
						width: rem(120);
						li{
							width: rem(40);
							text-align: center;
							float: left;
						}
					}
				}
			}
		}
	}
	.cart-fidex{
		position: fixed;
		left: 0;
		bottom:rem(120);
		width: 100vw;
		height: rem(100);
		background: #fff;
		input{
			width: rem(25);
			height: rem(25);
		
		}
		label{
			span{
				font-size: rem(16);
				line-height: rem(40);
			}
		}
		.cart-price{
			i{
				font-style: normal;
				color: orange;
			}
		}
		.cart_btnsa{
			width: rem(160);
			height: rem(100);
			background:orange;
			display: inline-block;
			line-height: rem(100);
			text-align: center;
			color: #fff;
			margin-left: rem(214);
		}
	}
	
</style>