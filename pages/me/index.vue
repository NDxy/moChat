<template>
	<view class="container" :style="'padding-top:'+ statusbarHeight + 'rpx'">
		<view class="main">
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
					<mo-list :border="false" icon="../../static/icon/service.png" @click="_toPage('../service/service')" title="服务" />
					<mo-list :border="false" icon="../../static/icon/setting.png" @click="_toPage('../setting/setting')" title="设置" />
			</view>
			<mo-button @click="_logout">退出登录</mo-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusbarHeight: 45,
			};
		},
		onLoad() {
			this.statusbarHeight = uni.getStorageSync('SET_CUSTOM_BAR') * 2
		},
		methods: {
			_toPage(path) {
				uni.navigateTo({
					url: path
				})
			},
			_logout() {
				uni.reLaunch({
					url: '../login/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		height: 100vh;
		background: rgb(89, 195, 255);
		position: relative;
		background: linear-gradient(123deg, rgba(89, 195, 255, 1) 4%, rgba(167, 211, 250, 1) 17%, rgba(215, 221, 247, 1) 40%, rgba(200, 248, 255, 1.0) 65%, rgba(230, 251, 255, 1) 97%);

		&::after {
			content: "";
			width: 100%;
			height: 100%;
			position: absolute;
			background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 10%, $mo-bg-color-gray 80%);
			bottom: 0;
			right: 0;
		}

		.main {
			position: relative;
			z-index: 9;
		}
	}

	.user_message {
		padding: 42rpx 24rpx;
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		margin: 36rpx;
		border-radius: 10rpx;
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 10%, $mo-bg-color-gray 50%);
        backdrop-filter: blur(4px); 
		position: relative;
	}

	.header_box {
		width: 160rpx;
		height: 160rpx;

		.header {
			width: 160rpx;
			height: 160rpx;
			border-radius: 10rpx;
		}
	}

	.select_list{
		margin: 36rpx;
		border-radius: 36rpx;
		overflow: hidden;
		background-color: #FFF;
		
	}
	.remark {
		display: flex;
		flex-direction: row;
		align-items: center;

		text {
			font-size: 48rpx;
			line-height: 64rpx;
			font-weight: 700;
			color: #383838;
		}

		.gender {
			width: 52rpx;
			height: 52rpx;

			.gender_icon {
				padding: 0 12rpx;
				width: 52rpx;
				height: 52rpx;
			}
		}
	}

	.info {
		flex: 1;
		padding: 6rpx 36rpx;

		view {
			padding: 4rpx 0;
			// line-height: 40rpx;
			font-size: 28rpx;
			color: #9a9a9a;
		}
	}

	.editor_info {
		width: 52rpx;
		height: 52rpx;

		.editor_icon {
			width: 52rpx;
			height: 52rpx;
		}
	}
</style>
