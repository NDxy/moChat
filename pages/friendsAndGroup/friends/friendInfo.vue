<template>
	<view class="container">
		<view class="page_bg"></view>
		<view class="info_main">
			<view class="header"></view>
			<view></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {}
			};
		},
		onLoad(option) {
			this.info = JSON.parse(option.info)
		}
	}
</script>

<style lang="scss" scoped>
	.page_bg{
		width: 100%;
		height: 100%;
		background-color: #FFF; /* 浏览器不支持的时候显示 */
		background-image: 
			radial-gradient(circle at 50% 50%, red 15%, transparent 0%), 
			radial-gradient(circle at 30% 40%, #CCC 16%, transparent 0%), 
			radial-gradient(circle at 2% 90%, red 15%, transparent 16%), 
			radial-gradient(circle at 60% 60%, #FFF 16%, transparent 17%), 
			radial-gradient(circle at 80% 20%,  blue 20%, transparent 21%);
		
	}
</style>
