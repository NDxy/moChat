<template>
	<view class="container">
		<view class="setting_item">
			<view class="setting_title">
				<text>填写您自己的简介或是自己的座右铭</text>
			</view>
			<view class="setting_content">
				<view class="textarea_box">
					<textarea class="textarea_settting" v-model="label" placeholder="有趣的简介可以吸引更多的朋友" />
				</view>
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
				label: ''
			};
		},
		onLoad(options) {
			this.label = JSON.parse(options.userInfo).label
		},
		methods:{
			_save(){
				uni.$emit('updateInfo', {label: this.label})
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
