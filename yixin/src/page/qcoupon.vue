<template>
	<div class="box">
		<div class="title">
			<div class="pack" @click="onPack()"><i class="iconfont icon-fanhui"></i></div>
			<div class="name">我的优惠券</div>
		</div>
		<div class="tabbar">
			<p v-for="item,index in list" :class="index == activeNum?'active':''" @click="tabbar(index)">{{item}}(0)</p>
		</div>
		<div class="btm">
			<div class="btmShow" v-if="!arr.length>0">暂无数据</div>
			<ul class="btm-list" v-else="">
				<li >
					<p class="list-count">数据</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:['未使用','使用记录','已过期'],
				activeNum:0,
				arr:[]
			}
		},
		methods:{
			onPack(){
				this.$parent.flag2Fn();
			},
			tabbar(index){
				this.activeNum = index;
			}
		}
	}
</script>
<style scoped="" lang="scss">
@import '@/assets/css/mys.scss';
@import '@/assets/css/rem.scss';
</style>