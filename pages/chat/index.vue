<template >
	<view class="chat_container">
		<view class="chat_massege_box" @click="hideAction">
			<view class="history_onload">
				{{historyOnload ? '已经没有更多的历史消息' : '下拉获取历史消息'}}
			</view>
			
		</view>
		<view class="action_box">
			<view class="send_box" @click="hideAction">
				<view class="radio">
					<image class="icon" src="../../static/icon/voice.png" mode="voice"></image>
				</view>
				<view class="input_box">
					<input type="text" v-model="input.message" @blur="inputBlur" @focus="inputFocus" @click.stop="inputFocus"/>
				</view>
				<view class="emoji" @click.stop="showEmoji">
					<image class="icon" src="../../static/icon/emoji.png" mode=""></image>
				</view>
				<view class="more_media" v-show="input.message == ''">
					<image class="icon" @click.stop="showMedia" src="../../static/icon/send.png" mode="send"></image>
				</view>
				<view class="send">
					<view class="send_btn" v-show="input.message != ''">
						<mo-button size="mini">发送</mo-button>
					</view>
				</view>
			</view>
			<view class="tool_box" :class="{'show_tool_box': tool.show && (emoji.show || media.show)}">
				<view class="emoji_box" :class="{'show_tool_item': emoji.show}"> 
					表情
				</view>
				<view class="media_box" :class="{'show_tool_item': media.show}">
					媒体
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//已经接收到的消息
				messages: [],
				//已经加载完所有历史消息
				historyOnload: false,
				input: {
					focus: false,
					message: ''
				},
				tool: {
					show: false
				},
				emoji: {
					show: false
				},
				media: {
					show: false
				}
			};
		},
		methods: {
			showEmoji(){
				this.tool.show = this.emoji.show?false:true;
				this.emoji.show = !this.emoji.show;
				this.media.show = false;
			},
			showMedia(){
				this.tool.show = this.media.show?false:true;
				this.media.show = !this.media.show ;
				this.emoji.show = false;
			},
			hideAction(){
				this.tool.show = false;
				this.emoji.show = false;
				this.media.show = false;
			},
			inputFocus(){
				this.input.show = true;
				// setTimeout(() => {
				// 	this.hideAction()
				// },600)
			},
			inputBlur(){
				this.input.show = false;
				this.hideAction()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chat_container{
		height: 100vh;
		width: 100vw;
		background-color: #f5f5f5;
	}
	.chat_massege_box{
		height: calc(100vh - 120rpx);
		padding: 24rpx 0;
		text-align: center;
		color: #999;
		font-size: 20rpx;
		box-sizing: border-box;
	}
	.action_box{
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
			.send_btn{
				padding: 0 0 12rpx 12rpx;
			}
		}
		.tool_box{
			height: 0;
			position: relative;
			transition: all 0.2s;
			&.show_tool_box{
				height: 500rpx;
				z-index: 0;
			}
		}
		.emoji_box,.media_box{
			height: 0;
			position: relative;
			opacity: 0;
			z-index: -10;
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
			&.show_tool_item{
				height: 500rpx;
				opacity: 1;
				z-index: 0;
				transition: all 0.2s 0.2s;
			}
		}
	}
</style>
