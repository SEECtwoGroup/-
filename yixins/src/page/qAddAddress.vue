<template>
	<div class="qAddAddress">
		<div class="box">
			<p>姓名: <input type="text" value="name" v-model="name" /></p>
			<p>地址: <input type="text" value="address" v-model="address" /></p>
			<button @click="onqd()">确定</button>
			<button @click="onqx()">取消</button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				name:'',
				address:''
			}
		},
		methods:{
			onqd(){
				let obj={
					name:this.name,
					address:this.address
				}
				if(!this.name == '' && !this.address == ''){
					this.$emit('zichuan',obj);
				}else{
					alert('不能为空!')
				}
				
			},
			onqx(){
				this.$parent.onShow2(false)
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
.qAddAddress{
	width:100vw;
	height:100vh;
	position:fixed;
	top:0;
	left:0;
	background: rgba(0,0,0,0.5);
	.box{
		width:rem(500);
		height:rem(300);
		background: #fff;
		margin:rem(400) auto 0;
		overflow:hidden;
		p{
			margin:rem(30) 0 0 rem(50);
			input{
				border:none;
				border:rem(1) solid #ccc;
				outline: none;
			}
		}
		button{
			margin:rem(30) 0 0 rem(100);
			outline: none;
			border:none;
			background: skyblue;
			color:#fff;
			line-height: rem(60);
			padding:0 rem(30)
		}
	}
}
</style>