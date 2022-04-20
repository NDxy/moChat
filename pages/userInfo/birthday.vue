<template>
	<view class="container">
		<view class="setting_item">
			<view class="setting_title">
				<text>填写您自己的简介或是自己的座右铭</text>
			</view>
			<view class="setting_content">
				<mo-date-picker icon="birthday" v-model="birthday" hint="请选择生日">生日信息</mo-date-picker>
			</view>
			<view class="setting_hint">
				<text>简介7天内只能修改三次</text>
			</view>
			<mo-button @click="_save">保 存</mo-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				birthday: ''
			};
		},
		onLoad(options) {
			this.birthday = JSON.parse(options.userInfo).birthday
		},
		methods:{
			_save(){
				uni.$emit('updateInfo', {birthday: this.birthday})
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	.container{
		background-color: $mo-bg-color;
	}
</style>
