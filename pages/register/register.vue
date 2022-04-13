<template>
	<view class="container">
		<view class="header">
			<view class="title">
				新用户注册
			</view>
		</view>
		<view class="forms">
			<mo-input icon="phone" type="text" :showClear="true" v-model="userName" placeholder="请输入手机号码/账号名/邮箱"/>
			<mo-input icon="verification" type="text" :showClear="true" v-model="password" placeholder="验证码"/>
			<mo-input icon="password" type="password" :showClear="true" v-model="password" placeholder="请输入用户密码"/>
			<mo-input icon="password" type="password" :showClear="true" v-model="password" placeholder="请确认用户密码"/>
			<mo-button>立即注册</mo-button>
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
			toRigister(){
				uni.navigateTo({
					url: '../register/register'
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
