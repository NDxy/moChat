<template>
	<view class="container">
		<view class="page_bg">
			<view class="info_main">
				<view class="info_header">
					<view class="user_name_label">
						<view class="nickname">{{info.accountName}}</view>
						<view class="label">{{info.accountNo}}</view>
					</view>
					<view class="user_header">
						<image :src="info.avatar" mode="aspectFit"></image>
					</view>
				</view>
				<view class="user_info">
					<view class="infos">
						<view class="setting_item">
							<view class="setting_title">
								<text>发送添加朋友申请</text>
							</view>
							<view class="setting_content">
								<view class="textarea_box">
									<textarea class="textarea_settting" v-model="info.message" placeholder="填写验证信息" />
								</view>
							</view>
						</view>
					</view>
					<view class="btn_box">
						<mo-button @click="_addFriend">添加好友</mo-button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		addFriend
	} from '../../../common/api/index.js'
	export default {
		data() {
			return {
				info: {}
			};
		},
		onLoad(option) {
			this.info = JSON.parse(option.info)
		},
		methods: {
			_addFriend() {
				addFriend(this.info).then(res => {
					if (res.code == 0) {

					} else {
						uni.showToast({
							icon: 'none',
							title: res.msg
						})
					}
				}).catch(err => {
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page_bg {
		width: 100%;
		height: 100%;
		background-color: #FFF;
		/* 浏览器不支持的时候显示 */
		background-image:
			radial-gradient(circle at 50% 50%, #2d82b5 15%, transparent 0%),
			radial-gradient(circle at 30% 40%, #55C976 11%, transparent 0%),
			radial-gradient(circle at 2% 19%, #dd524d 10%, transparent 10%),
			radial-gradient(circle at 80% 20%, #88cdf6 20%, transparent 20%);

	}

	.info_main {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		.info_header {
			height: 20%;
			width: 90%;
			display: flex;
			flex-direction: row;
			position: relative;

			.user_name_label {
				flex: 1;
				padding: $mo-spacing-base;
				line-height: 60rpx;

				.nickname {
					font-size: $mo-font-llg;
					font-weight: 700;
				}

				.label {
					color: $mo-text-color-grey;
				}
			}

			.user_header {
				position: absolute;
				bottom: -100rpx;
				right: 36rpx;
				width: 300rpx;
				height: 300rpx;
				border-radius: 50%;
				box-shadow: 0rpx 0rpx 10rpx #2d82b5;
				border: 2rpx solid rgba(165, 165, 165, 0.4);
				z-index: 999;

				image {
					width: 300rpx;
					height: 300rpx;
					border-radius: 50%;
				}
			}
		}

		.user_info {
			height: 80%;
			width: 90%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			box-sizing: border-box;
			padding: $mo-spacing-lg;
			backdrop-filter: blur(15px);
			background-color: rgba(255, 255, 255, 0.4);
			border-top-left-radius: 24rpx;
			border-top: 2rpx solid rgba(165, 165, 165, 0.2);
			border-left: 2rpx solid rgba(165, 165, 165, 0.2);
			box-shadow: -22rpx 22rpx 22rpx rgba(1, 92, 146, 0.2);

			.infos {
				line-height: 64rpx;

				.info_item {
					font-size: $mo-font-base;
					color: $mo-text-color-grey;

					&.nick {
						font-size: $mo-font-lg;
						color: $mo-text-color;
					}
				}
			}

			.btn_box {
				display: flex;
				justify-content: space-between;
				flex-direction: column;
			}
		}
	}

	.textarea_settting {
		border-radius: 24rpx !important;
		box-shadow: inset 0 0 8rpx rgba(1, 92, 146, 0.2);
	}
</style>
