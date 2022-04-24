<template>
	<view class="container">
		<view class="header">
			<view class="title">
				更换手机号码
			</view>
		</view>
		<view class="forms" v-if="step == 1">
			<mo-input icon="phone" type="text" :showClear="true" v-model="userName" placeholder="请输入当前绑定的手机号码"/>
			<mo-input icon="verification" type="text" :showClear="true" v-model="verification" placeholder="验证码" :btnRight="btnRight" :rbtnDisabled="rbtnDisabled" @rbtnClick='getVerification'/>
			<mo-button @click="resetPassword">提交认证</mo-button>
		</view>
		
		<view class="forms" v-else>
			<mo-input icon="phone" type="text" :showClear="true" v-model="userName" placeholder="请输入需新绑定的手机号码"/>
			<mo-input icon="verification" type="text" :showClear="true" v-model="verification" placeholder="验证码" :btnRight="btnRight" :rbtnDisabled="rbtnDisabled" @rbtnClick='getVerification'/>
			<mo-button @click="resetPassword">立即更换</mo-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				step: 1,
				userName: '',
				verification: '',
				btnRight: '获取验证码',
				rbtnDisabled: false
			};
		},
		methods:{
			resetPassword(){
				this.step = 2
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
