<template>
	<view class="container">
		<view class="header">
			<view class="header_handle" @click="_changeImage">
				<view class="headerImg">
					<image class="" :src="infoFrom.headerImage!=''?infoFrom.headerImage:headerdefault" mode="aspectFill" alt="选择头像"></image>
				</view>
				<view class="hint">
					点击更换头像
				</view>
			</view>
		</view>
		<view class="forms">
			<mo-input icon="nickname" v-model="infoFrom.accountName" placeholder="请输入昵称" />
			<!-- <mo-select @click="_editPage('label')" icon="label" v-model="infoFrom.label" hint="有趣的简介可以吸引更多的朋友喔">简介</mo-select> -->
			<mo-select @click="_editPage('gender')" icon="gender" :value="(infoFrom.gender==0?'男':infoFrom.gender==1?'女':'保密')" hint="请选择性别">性别</mo-select>
			<mo-select @click="_editPage('birthday')" icon="birthday" v-model="infoFrom.birthday" hint="请选择生日">生日</mo-select>
			<!-- <mo-select @click="_editPage('district')" icon="district" v-model="infoFrom.district" hint="请选择地区">地区</mo-select> -->
			<!-- <mo-select @click="_editPage('vocation')" icon="vocation" v-model="infoFrom.vocation" hint="请选择职业">职业</mo-select> -->
			<mo-button @click="_completion">提交信息</mo-button>
		</view>
		
	</view>
</template>

<script>
	import { register } from '../../common/api/index.js'
	let _this;
	export default {
		data() {
			return {
				headerdefault: '../../static/header.jpeg',
				infoFrom:{
					phoneNumber: '',
					accountNo: '',
					password: '',
					smsCode: '',
					bizId: '',
					headerImage: '',
					accountName: '',
					label: '',
					gender: 2,
					birthday: '',
					district: '广西',
					vocation: '互联网'
				}
			};
		},
		// components:{
		// 	moInput
		// },
		onLoad(options) {
			_this = this; 
			_this.infoFrom = { ...this.infoFrom, ...JSON.parse(options.info) } 
			console.log(_this.infoFrom)
		},
		methods:{
			_completion(){
				register(this.infoFrom).then(res => {
					if(res.code == 0){
						uni.showToast({
							icon: 'none',
							title: '注册成功',
							success() {
								setTimeout(() => {
									uni.reLaunch({
										url: '../login/login'
									})
								}, 1500)
							}
						})
					}else{
						uni.showToast({
							icon:'none',
							title: res.msg
						})
					}
				}).catch(err => {
					
				})
			},
			_editPage(path){
				this.updateInfoData()
				uni.navigateTo({
					url: `../userInfo/${path}?userInfo=${JSON.stringify(this.infoFrom)}`
				})
				
			},
			_changeImage(){
				uni.chooseImage({
					success(res) {
						console.log(res)
						_this.headerImage = res.tempFilePaths;
					},
					fail(err) {
						
					}
				})
			},
			updateInfoData(){
				uni.$once('updateInfo', data => {
					this.infoFrom = { ...this.infoFrom, ...data }
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		padding: 24rpx;
		.header{
			margin: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.header_handle{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.headerImg{
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 150rpx;
					height: 150rpx;
				}
			}
			.hint{
				padding: 12rpx;
				font-size: 24rpx;
				color: #999;
			}
		}
	}
</style>
