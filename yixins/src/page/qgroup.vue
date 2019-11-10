<template>
	<div class="box">
		<div class="title">
			<div class="pack" @click="onPack()"><i class="iconfont icon-fanhui"></i></div>
			<div class="name">我的拼团</div>
		</div>
		<div class="tabbar">
			<p v-for="item,index in list" :class="index == activeNum?'active':''" @click="tabbar(index)">{{item}}(0)</p>
		</div>
		<div class="btm">
			<div class="btmShow" v-if="!arr.length>0">暂无数据</div>
			<ul class="btm-list" v-else="">
				<li v-for="item in arr">
					<p class="list-name">{{item.name}}</p>
					<p class="list-count">{{item.count}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			arr:{
				type:Array,
				default:()=>[]
			}
		},
		data(){
			return{
				list:['待拼成','以拼成','拼团失败'],
				activeNum:0,
			}
		},
		methods:{
			onPack(){
				this.$parent.flag4Fn();
			},
			tabbar(index){
				this.activeNum = index;
				this.$parent.onFilter(index)
			}
		}
	}
</script>
<style scoped="" lang="scss">
@import '@/assets/css/mys.scss';
@import '@/assets/css/rem.scss';
</style>