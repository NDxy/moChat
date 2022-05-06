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
			<mo-button @click="_checkPhone">验证</mo-button>
		</view>
		<view class="forms" v-else>
			<view class="back" @click="_back">
				<image src="../../static/icon/arrow-left.png" mode=""></image>返回上一步
			</view>
			<mo-input icon="phone" type="text" :showClear="true" v-model="userName" placeholder="请输入需要绑定的手机号码"/>
			<mo-input icon="verification" type="text" :showClear="true" v-model="verification" placeholder="验证码" :btnRight="btnRight" :rbtnDisabled="rbtnDisabled" @rbtnClick='getVerification'/>
			<mo-button @click="_resetPhone">立即更换</mo-button>
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
			_checkPhone(){
				this.step = 2
			},
			_back(){
				this.step = 1
			},
			_resetPhone(){
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
		.back{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			padding: 36rpx;
			image{
				width: 52rpx;
				height: 52rpx;
			}
		}
	}
</style>
