<template>
	<view class="container">
		<view class="setting_item">
			<view class="setting_title">
				<text>选择你的性别</text>
			</view>
			<view class="setting_content">
				<mo-picker v-model="gender" mode="selector" :range="range" randeKey="icon"/></mo-picker> 
			</view>
			<view class="setting_hint">
				<!-- <text>简介7天内只能修改三次</text> -->
			</view>
			<mo-button @click="_save">保 存</mo-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gender: 1,
				range: [{
					label: '男生',
					value: 1,
					icon: 'men'
				},{
					label: '女生',
					value: 2,
					icon: 'women'
				}]
			};
		},
		onLoad(options) {
			this.gender = JSON.parse(options.userInfo).gender
		},
		methods:{
			_save(){
				uni.$emit('updateInfo', {gender: this.gender})
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>