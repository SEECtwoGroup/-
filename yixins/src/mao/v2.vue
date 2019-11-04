<template>
	<div>
		<div class="v-header">
			<img src="../../build/logo.png"/>
			<input type="text" placeholder="说什么,让TA也来买买吧~"/>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	@import '@/assets/css/rem.scss';
	.v-header{
		display: flex;
		img{
			width:rem(40);
			height:rem(40);
		}
		input{
			border-radius: rem(30);
			outline: none;
		}
	}
</style>