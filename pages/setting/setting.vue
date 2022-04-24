<template>
	<view class="container">
		<view class="select_list">
			<mo-list-group>
				<mo-list icon="../../static/icon/setting.png" @click="_toPage('./safe')" title="账号与安全"/>
				<mo-list icon="../../static/icon/service.png" note="设置在不做任何操作离线的间隔时间" @click="_toPage('../service/service')" title="静默离线时间" />
			</mo-list-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			_toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #f8f8f8;
	}
</style>
