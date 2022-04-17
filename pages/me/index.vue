<template>
	<view class="container">
		<view class="user_message">
			<view class="header_box">
				<image class="header" src="../../static/header.jpeg" mode="scaleToFill"></image>
			</view>
			<view class="info">
				<view class="remark">
					<text>莫莫</text>
					<view class="gender">
						<image class="gender_icon" src="../../static/icon/women.png" mode=""></image>
					</view>
				</view>
				<view class="nickname">昵称：沫沫</view>
				<view class="moid">密聊号：0909</view>
				<view class="district">地区：南宁</view>
			</view>
			<view class="editor_info">
				<image class="editor_icon" src="../../static/icon/editor.png" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="select_list">
			<mo-list-group>
				<mo-list icon="../../static/icon/service.png" title="服务" />
				<mo-list icon="../../static/icon/setting.png" title="设置" />
			</mo-list-group>
			<mo-button @click='logout'>退出登录</mo-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			logout(){
				uni.navigateTo({
					url: '../login/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
	}
	.user_message{
		padding: 42rpx 24rpx;
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		margin-bottom: 24rpx;
		background-color: #FFF;
		position: relative;
		&::after{
			content: "";
			width: 100%;
			position: absolute;
			bottom: 0;
			right: 0;
			height: 1px;
			background-color: #cecece;
			transform: scaleY(.5);
		}
	}
	.header_box{
		width: 160rpx;
		height: 160rpx;
		.header{
			width: 160rpx;
			height: 160rpx;
			border-radius: 10rpx;
		}
	}
	.remark{
		display: flex;
		flex-direction: row;
		align-items: center;
		text{
			font-size: 48rpx;
			line-height: 64rpx;
			font-weight: 700;
			color: #383838;
		}
		.gender{
			width: 52rpx;
			height: 52rpx;
			.gender_icon{
				padding: 0 12rpx;
				width: 52rpx;
				height: 52rpx;
			}
		}
	}
	.info{
		flex: 1;
		padding: 6rpx 36rpx;
		view{
			padding: 4rpx 0;
			// line-height: 40rpx;
			font-size: 28rpx;
			color: #9a9a9a;
		}
	}
	.editor_info{
		width: 52rpx;
		height: 52rpx;
		.editor_icon{
			width: 52rpx;
			height: 52rpx;
		}
	}
</style>
