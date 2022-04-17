<template>
	<view class="container">
		<view class="header">
			<view class="header_handle" @click="changeImage">
				<view class="headerImg">
					<image class="" :src="headerImage!=''?headerImage:headerdefault" mode="aspectFill" alt="选择头像"></image>
				</view>
				<view class="hint">
					点击更换头像
				</view>
			</view>
		</view>
		<view class="forms">
			<mo-input icon="nickname" :showClear="true" v-model="userName" placeholder="请输入昵称"/>
			<mo-select icon="label" hint="有趣的简介可以吸引更多的朋友喔">简介</mo-select>
			<mo-select icon="gender" hint="请选择性别">性别</mo-select>
			<mo-select icon="birthday" hint="请选择生日">生日</mo-select>
			<mo-select icon="district" hint="请选择地区">地区</mo-select>
			<mo-select icon="vocation" hint="请选择职业">职业</mo-select>
			<mo-button @click='completion'>提交信息</mo-button>
		</view>
		
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				headerImage: '',
				headerdefault: '../../static/header.jpeg'
			};
		},
		onLoad() {
			_this = this
		},
		methods:{
			completion(){
				
			},
			getVerification(e){
				this.rbtnDisabled = true;
				this.countDown(60)
			},
			changeImage(){
				uni.chooseImage({
					success(res) {
						console.log(res)
						_this.headerImage = res.tempFilePaths;
					},
					fail(err) {
						
					}
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
