<template>
	<view class="container">
		<view class="header">
			<view class="title">
				新用户注册
			</view>
		</view>
		<view class="forms">
			<mo-input icon="phone" type="text" :showClear="true" v-model="infoFrom.phoneNumber" placeholder="请输入手机号码/账号名/邮箱"/>
			<mo-input icon="verification" type="text" :maxLenght="6" v-model="infoFrom.smsCode" placeholder="验证码" :btnRight="btnRight" :rbtnDisabled="rbtnDisabled" @rbtnClick='getVerification'/>
			<mo-input icon="phone" type="text" :maxLenght="6" :showClear="true" v-model="infoFrom.accountNo" placeholder="请输入密聊号,不填系统将自动生成"/>
			<mo-input icon="password" type="password" v-model="infoFrom.password" placeholder="请输入用户密码"/>
			<mo-input icon="password" type="password" v-model="passwordChk" placeholder="请确认用户密码"/>
			<mo-button @click='_register'>立即注册</mo-button>
		</view>
		
	</view>
</template>

<script>
	import { chkPhone } from '../../common/js/utils.js'
	import { genSmsCode } from '../../common/api/index.js'
	export default {
		data() {
			return {
				infoFrom: {
					phoneNumber: '',
					accountNo: '',
					password: '',
					smsCode: '',
					bizId: '',
				},
				passwordChk: '',
				btnRight: '获取验证码',
				rbtnDisabled: false
			};
		},
		methods:{
			_register(){
				// if(!formChk) return
				uni.navigateTo({
					url: `./completion?info=${JSON.stringify(this.infoFrom)}`
				})
			},
			formChk(){
				if(this.infoFrom.phoneNumber == '' || !chkPhone(this.infoFrom.phoneNumber)){
					uni.showToast({
						icon:'none',
						title: '请输入正确手机号码'
					})
					return false
				}
				if(!this.chkAccountNo(this.infoFrom.accountNo)) return false
				if(this.infoFrom.smsCode == ''){
					uni.showToast({
						icon:'none',
						title: '请输入手机验证码'
					})
					return false
				}
				if(this.infoFrom.password == ''){
					uni.showToast({
						icon:'none',
						title: '请输入用户密码'
					})
					return false
				}
				if(this.passwordChk == ''){
					uni.showToast({
						icon:'none',
						title: '请确认密码'
					})
					return false
				}
				if(this.passwordChk != this.infoFrom.password){
					uni.showToast({
						icon:'none',
						title: '两次密码输入不一致'
					})
					return false
				}
				return true
			},
			getVerification(e){
				if(this.infoFrom.phoneNumber == '' || !chkPhone(this.infoFrom.phoneNumber)){
					uni.showToast({
						icon:'none',
						title: '请输入正确手机号码'
					})
					return false
				}
				genSmsCode(this.infoFrom.phoneNumber).then(res => {
					if(res.code == 0){
						this.countDown(60)
						this.infoFrom.bizId = res.data.bizId
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
			chkAccountNo(accountNo){
				if(this.accountNo == ''){
					uni.showToast({
						icon:'none',
						title: '请输入密聊号'
					})
					return false
				}
				if(this.accountNo.lenght < 6 || this.accountNo[0] == 0){
					uni.showToast({
						icon:'none',
						title: '密聊号必须为6为不以0开头的数字'
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
			.hint{
				font-size: 24rpx;
				color: #999;
			}
		}
	}
</style>
