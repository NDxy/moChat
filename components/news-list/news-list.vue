<template>
	<view class="news-list">
		<view class="header_icon">
			<image class="icon" :src="header" mode=""></image>
		</view>
		<view class="title_massge">
			<view class="title">{{title}}</view>
			<view class="massge">{{massge}}</view>
		</view>
		<view class="time_status">
			<view class="time">{{time}}</view>
			<view class="status">{{statusCheck}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'NewsList',
		props: {
			title: {
				type: String,
				default: ''
			}, // 标题
			massge: {
				type: String,
				default: ''
			}, // 扩展信息
			header: {
				type: String,
				default: ''
			}, // 头像
			status: {
				type: String,
				default: ''
			}, // 缩略图
			time: {
				type: String,
				default: ''
			} //日期
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		},
		computed: {
			statusCheck(){
				let statusTxt = "1"
				switch (this.status){
					case '1':
						statusTxt = "在线"
						break;
					case '2':
						statusTxt = "免扰"
						break;
					case '3':
						statusTxt = "禁言"
						break;
					default:
						break;
				}
				return statusTxt
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news-list {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		// padding: 24upx;
		position: relative;
		
		.header_icon {
			width: 110upx;
			height: 110upx;
			padding: 24upx;
			.icon{
				width: 110upx;
				height: 110upx;
			}
		}
		
		.title_massge,.time_status {
			display: flex;
			flex-direction: column;
			padding: 36upx 0;
			justify-content: space-between;
			.title{
				color: #383838;
				font-weight: 700;
				font-size: 32upx;
			}
			.massge,.time,.status{
				color: #9a9a9a;
				font-size: 24upx;
			}
			
		}
		
		.title_massge{
			box-sizing: border-box;
			width: calc(100% - 344upx);
		}
		
		.time_status{
			width: 210upx;
			padding: 36upx 24upx;
			align-items: flex-end;
		}
		
		&::after{
			content: "";
			width: calc(100% - 158upx);
			position: absolute;
			bottom: 0;
			right: 0;
			height: 1px;
			background-color: #cecece;
			transform: scaleY(.5);
		}
	}
</style>
