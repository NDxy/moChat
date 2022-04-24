<template>
	<view class="container">
		<view class="select_list">
			<mo-list-group>
				<mo-list icon="../../static/icon/setting.png" @click="_toPage('../reset-phone/reset-phone')" title="更换手机号"/>
				<mo-list icon="../../static/icon/service.png" @click="_toPage('../reset-password/reset-password')" title="重置密码" />
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
