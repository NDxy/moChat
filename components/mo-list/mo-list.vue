<template>
	<view class="mo_list">
		<view class="list_main" @click="onClick">
			<view class="left_icon" v-if="icon!=''">
				<image :src="icon" :class="{widen: widen}" mode="scaleToFill"></image>
			</view>
			<view class="list_content" :class="{widen: widen, border_line: border}">
				<view class="list_msg">
					<view class="title">{{title}}</view>
					<view class="note" v-if="note!=''">{{note}}</view>
				</view>
				<view class="right_box">
					<slot />
				</view>
				<view class="right_icon" v-if="showRight">
					<image src="../../static/icon/right.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"MoList",
		props:{
			icon: {
				type: String,
				default: ''
			},
			title: String,
			showRight: {
				type: Boolean,
				default: true
			},
			rightText: String,
			note: {
				type: String,
				default: ''
			},
			widen: {
				type: Boolean,
				default: false
			},
			border: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			onClick(e){
				this.$emit('click', e)
			}
		}
	}
</script>

<style lang="scss">
	.mo_list{
		padding: 0 0 0 36rpx ;
	}
	.list_main{
		display: flex;
		justify-content: center;
		align-items: center;
		.list_content{
			display: flex;
			justify-content: row;
			justify-content: center;
			align-items: center;
			flex: 1;
			padding-right: 24rpx;
			min-height: 100rpx;
			position: relative;
			&.widen{
				padding: 24rpx;
			}
			&.border_line::after{
				content: "";
				width: 100%;
				position: absolute;
				bottom: 0;
				right: 0;
				height: 1px;
				background-color: #cecece;
				transform: scaleY(.5);
			}
			.list_msg{
				flex: 1;
				.title{
					color: #383838;
					font-weight: 700;
					font-size: 32upx;
					padding: 6rpx 12rpx;
				}
				.note{
					font-size: 24rpx;
					padding: 6rpx 12rpx;
				}
			}
		}
		.left_icon{
			display: flex;
			justify-content: center;
			align-items: center;
			padding-right: 24rpx;
			image{
				border-radius: 10rpx;
				overflow: hidden;
				width: 52rpx;
				height: 52rpx;
			}
			.widen{
				width: 120rpx;
				height: 120rpx;
			}
		}
		.right_icon{
			display: flex;
			justify-content: center;
			align-items: center;
			// width: 40rpx;
			// height: 40rpx;
			image{
				width: 36rpx;
				height: 36rpx;
			}
		}
		.right_box{
			padding: 6rpx 12rpx;
		}
	}
	.note,.right_box{
		color: #9a9a9a;
	}
	
	
	.mo-list-group .mo-list:last-child .list_main .list_content::after {
		height: 0
	}
</style>
