<template >
	<view class="chat_container">
		<view class="chat_massege_box">
			<view class="history_onload">
				{{historyOnload ? '已经没有更多的历史消息' : '下拉获取历史消息'}}
			</view>
			
		</view>
			<view class="action_box">
				<view class="send_box">
					<view class="radio">
						<image class="icon" src="../../static/icon/voice.png" mode="voice"></image>
					</view>
					<view class="input_box">
						<input type="text" value=""/>
					</view>
					<view class="more_media">
						<image class="icon" src="../../static/icon/emoji.png" mode=""></image>
					</view>
					<view class="send">
						<image class="icon" src="../../static/icon/send.png" mode="send"></image>
					</view>
				</view>
				<view class="emoji_box" v-if="emoji.show">
					
				</view>
				<view class="media_box" v-if="media.show">
					
				</view>
			</view>
	</view>
</template>

<script >
	export default {
		data() {
			return {
				//已经接收到的消息
				messages: [],
				//已经加载完所有历史消息
				historyOnload: false,
				emoji: {
					show: true
				},
				media: {
					show: false
				}
			};
		}
	}
</script>

<style lang="scss" scoped>
	.chat_container{
		height: 100vh;
		width: 100vh;
		background-color: #f5f5f5;
	}
	.action_box{
		// height: 120rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #F9F9F9;
		&::after{
			content: "";
			height: 1px;
			transform: scaleY(0.5);
			background-color: #ccc;
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
		}
		.send_box{
			height: 120rpx;
			width: 100%;
			box-sizing: border-box;
			padding: 12rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			.input_box{
				flex: 1;
				height:72rpx;
				line-height: 72rpx;
				background-color: #FFF;
				border-radius: 12rpx;
				margin: 0 24rpx;
				box-sizing: border-box;
				position: relative;
				input{
					top: -24rpx;
					position: absolute;
					height: 120rpx;
					width: 100%;
					padding: 12rpx 24rpx;
					box-sizing: border-box;
				}
			}
			.icon{
				width: 64rpx;
				height: 64rpx;
			}
		}
		.emoji_box,.media_box{
			height: 400rpx;
			position: relative;
			&::after{
				content: "";
				height: 1px;
				transform: scaleY(0.5);
				background-color: #ccc;
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
			}
		}
	}
</style>
