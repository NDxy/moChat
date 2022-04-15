<template>
	<view class="container">
		<view class="header">
			<view class="headerImg">
				<image src="../../static/header.jpeg" mode="选择头像"></image>
			</view>
		</view>
		<view class="forms">
			<mo-input icon="phone" :showClear="true" v-model="userName" placeholder="请输入昵称"/>
			<mo-select icon="label" hint="有趣的简介可以吸引更多的朋友喔">简介</mo-select>
			<mo-select icon="gender">性别</mo-select>
			<mo-select icon="birthday">生日</mo-select>
			<mo-select icon="district">地区</mo-select>
			<mo-select icon="vocation">职业</mo-select>
			<mo-button @click='completion'>提交信息</mo-button>
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
			completion(){
				
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
