<template>
	<view class="container">
		<view class="header">
			<view class="title">
				欢迎登录
			</view>
			<view class="hint">
				还没有账户？<text class="register" @click="_toRegister">立即注册</text>
			</view>
		</view>
		<view class="forms">
			<mo-input icon="phone" type="text" :showClear="true" v-model="userName" placeholder="请输入手机号码/账号名/邮箱" />
			<mo-input icon="password" type="password" :showClear="true" v-model="password" placeholder="请输入用户密码" />
			<mo-button @click="_toHome">登 录</mo-button>
		</view>
		<view class="forget">
			<text class="register" @click="_toResetPassword">忘记密码？</text>
		</view>
		<mo-modal></mo-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '1234',
				password: '1234'
			};
		},
		methods:{
			_toRegister(){
				uni.navigateTo({
					url: '../register/register'
				})
			},
			_toHome(){
				console.log(this.$refs)
				if(!this.check()){
					return
				}
				uni.switchTab({
					url: '../news/index'
				})
			},
			_toResetPassword(){
				uni.navigateTo({
					url: '../reset-password/reset-password'
				})
			},
			check(){
				if(this.userName == ''){
					uni.showToast({
						icon: 'none',
						title: '请输入用户名'
					})
					return false
				}
				if (this.password == ''){
					uni.showToast({
						icon: 'none',
						title: '请输入用户密码'
					})
					return false
				}
				return true
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
		}
	}
	
	.hint{
		font-size: 26rpx;
		color: #999;
	}
	// .register, .forget{
	// 	// color: $mo-color-warning;
	// }
	.forget{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 80rpx;
		@extend .hint
	}
</style>
