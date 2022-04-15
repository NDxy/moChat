<template>
	<view class="container">
		<view class="header">
			<view class="title">
				重置密码
			</view>
		</view>
		<view class="forms">
			<mo-input icon="phone" type="text" :showClear="true" v-model="userName" placeholder="请输入手机号码/账号名/邮箱"/>
			<mo-input icon="verification" type="text" :showClear="true" v-model="verification" placeholder="验证码" :btnRight="btnRight" :rbtnDisabled="rbtnDisabled" @rbtnClick='getVerification'/>
			<mo-input icon="password" type="password" :showClear="true" v-model="password" placeholder="请输入用户密码"/>
			<mo-input icon="password" type="password" :showClear="true" v-model="password" placeholder="请确认用户密码"/>
			<mo-button @click="resetPassword">立即重置</mo-button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '12312',
				password: '',
				verification: '',
				btnRight: '获取验证码',
				rbtnDisabled: false
			};
		},
		methods:{
			resetPassword(){
				uni.navigateTo({
					// url: '../register/register'
				})
			},
			getVerification(e){
				this.rbtnDisabled = true;
				this.countDown(60)
			},
			countDown(time) {
				if(time === 0){
					this.rbtnDisabled = false;
			        this.btnRight = '获取验证码';
			        clearTimeout(this.timer);
				} else {
					time -= 1
					this.btnRight = time + 's重新获取';
					this.timer = setTimeout(()=>{this.countDown(time)},1000)
				}
			},
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
