<template>
	<view class="container">
		<view class="header">
			<view class="title">
				欢迎登录
			</view>
			<view class="hint">
				还没有账户？<text class="register" @click="toRegister">立即注册</text>
			</view>
		</view>
		<view class="forms">
			<mo-input icon="phone" type="text" :showClear="true" v-model="userName" placeholder="请输入手机号码/账号名/邮箱"/>
			<mo-input icon="password" type="password" :showClear="true" v-model="password" placeholder="请输入用户密码"/>
			<mo-button @click="toHome">登 录</mo-button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '12312',
				password: ''
			};
		},
		methods:{
			toRegister(){
				uni.navigateTo({
					url: '../register/register'
				})
			},
			toHome(){
				uni.switchTab({
					url: '../news/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		padding: 24rpx;
		.header{
			margin: 80rpx;
			.title{
				font-size: 48rpx;
			}
			.hint{
				font-size: 24rpx;
				color: #999;
			}
		}
	}
</style>
