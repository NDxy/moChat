<template>
	<view class="container">
		<view class="header">
			<view class="title">
				欢迎登录
			</view>
			<view class="hint">
				<text class="register">欢迎登录mochat</text>
			</view>
		</view>
		<view class="forms">
			<view class="login_type_change">
				<view v-if="loginType == 1" class="type_item" @click="()=>{loginType = 2}">
					短信验证码登录<image src="../../static/icon/arrow-right.png" mode=""></image>
				</view>
				<view v-if="loginType == 2" class="type_item" @click="()=>{loginType = 1}">
					<image src="../../static/icon/arrow-left.png" mode=""></image>账号密码登录
				</view>
			</view>
			<view class="" v-show="loginType == 1">
				<mo-input icon="phone" type="text" :showClear="true" v-model="accountNo" placeholder="请输入账号" />
				<mo-input icon="password" type="password" :showClear="false" v-model="password" placeholder="请输入用户密码" />
				<mo-button @click="_loginByAccountNo">登 录</mo-button>
			</view>
			<view class="" v-show="loginType == 2">
				<mo-input icon="phone" type="text" :showClear="true" v-model="phoneNumber" placeholder="请输入手机号码/账号名/邮箱" />
				<mo-input icon="verification" type="text" :showClear="true" v-model="smsCode" placeholder="验证码" :btnRight="btnRight" :rbtnDisabled="rbtnDisabled" @rbtnClick='_getVerification'/>
				<mo-button @click="_loginByPhone">登 录</mo-button>
			</view>
			<view class="forget">
				<text class="register" @click="_toRegister">账号注册</text>｜<text class="register" @click="_toResetPassword">忘记密码？</text>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<!-- <view class="onetap_login">
				<view class="wechat_login">
					<image src="../../static/wechat.png" mode="scaleToFill"></image> 微信一键登录
				</view>
			</view> -->
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import { chkPhone } from '../../common/js/utils.js'
	import { loginByAccount, loginByPhoneNumber, genSmsCode } from '../../common/api/index.js'
	export default {
		data() {
			return {
				accountNo: '',
				password: '',
				phoneNumber: '',
				smsCode: '',
				bizId: '',
				btnRight: '获取验证码',
				rbtnDisabled: false,
				loginType: 1
				
			};
		},
		methods:{
			_toRegister(){
				uni.navigateTo({
					url: '../register/register'
				})
			},
			_toResetPassword(){
				uni.navigateTo({
					url: '../reset-password/reset-password'
				})
			},
			_loginByAccountNo(){
				if(!this.check(1)) return
				loginByAccount({
					accountNo: this.accountNo,
					password: this.password
				}).then(res => {
					if(res.code == 0) {
						uni.setStorageSync('mqttMessageKey', res.data.mqttMessageKey)
						uni.setStorageSync('TOKEN', res.data.token)
						uni.setStorageSync('LOGINED', true)
						uni.showToast({
							icon: 'none',
							title: '登录成功~'
						})
						this._toHome()
					}else{
						uni.showToast({
							icon:'none',
							title: res.msg
						})
					}
				})
			},
			_loginByPhone(){
				if(!this.check(2)) return
				loginByPhoneNumber({
					phoneNumber: this.phoneNumber,
					smsCode: this.smsCode,
					bizId : this.bizId
				}).then(res => {
					if(res.code == 0) {
						uni.setStorageSync('mqttMessageKey', res.data.mqttMessageKey)
						uni.setStorageSync('TOKEN', res.data.token)
						uni.setStorageSync('LOGINED', true)
						uni.showToast({
							icon: 'none',
							title: '登录成功~'
						})
						this._toHome()
					}else{
						uni.showToast({
							icon:'none',
							title: res.msg
						})
					}
				})
			},
			_getVerification(e){
				if(this.phoneNumber == '' || !chkPhone(this.phoneNumber)){
					uni.showToast({
						icon:'none',
						title: '请输入正确手机号码'
					})
					return false
				}
				genSmsCode(this.phoneNumber).then(res => {
					if(res.code == 0){
						this.countDown(60)
						this.bizId = res.data.bizId
						this.rbtnDisabled = true;
					}else{
						uni.showToast({
							icon:'none',
							title: res.msg
						})
					}
				}).catch(err => {
					console.log(err)
				})
			},
			_toHome(){
				uni.switchTab({
					url: '../news/index'
				})
			},
			check(type){
				if(this.accountNo == '' && type == 1){
					uni.showToast({
						icon: 'none',
						title: '请输入用户名'
					})
					return false
				}
				if (this.password == '' && type == 1){
					uni.showToast({
						icon: 'none',
						title: '请输入用户密码'
					})
					return false
				}
				if(this.phoneNumber == '' && type == 2 || !chkPhone(this.phoneNumber) && type == 2){
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码'
					})
					return false
				}
				if (this.smsCode == '' && type == 2){
					uni.showToast({
						icon: 'none',
						title: '请输入手机验证码'
					})
					return false
				}
				return true
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
		position: relative;
		background: rgb(89,195,255);
		background: linear-gradient(123deg, rgba(89,195,255,1) 4%, rgba(167,211,250,1) 17%, rgba(215,221,247,1) 40%, rgba(181,225,231,1) 65%, rgba(230,251,255,1) 97%);
		.header{
			position: relative;
			z-index: 1;
			padding: 200rpx 80rpx 120rpx 80rpx;
			.title{
				font-size: 48rpx;
				font-weight: 900;
			}
			.bg_icon{
				width: 240rpx;
				height: 240rpx;
				position: absolute;
				right: 40rpx;
				bottom: 40rpx;
				opacity: .3;
				transform: skewx(10deg);
				perspective: 600;
			}
		}
	}
	.forms{
		position: absolute;
		right: 0;
		left: 0;
		top: 350rpx;
		height: calc(100vh - 350rpx);
		z-index: 9;
		box-sizing: border-box;
		box-shadow: 0 -1px 2px #ffffff;
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 10%, $mo-bg-color-gray 50%);
        backdrop-filter: blur(4px); 
		padding: 24rpx;
		border-top-left-radius: 60rpx;
		border-top-right-radius: 60rpx;
	}
	.hint{
		font-size: 26rpx;
		color: #999;
	}
	.register, .forget{
		color: $mo-color-warning;
	}
	.forget{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 24rpx 64rpx;
		@extend .hint;
	}
	.login_type_change{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding: 24rpx 56rpx;
		color: #333;
		.type_item{
			display: flex;
			flex-direction: row;
			align-items: center;
			image{
				width: 52rpx;
				height: 52rpx;
			}
		}
	}
	.onetap_login{
		margin-top: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.wechat_login{
		display: flex;
		justify-content: center;
		align-items: center;
		image{
			margin-right: 12rpx;
			width: 60rpx;
			height: 60rpx;
		}
	}
</style>
