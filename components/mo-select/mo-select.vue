<template>
	<view class="mo_select">
		<view class="select_main">
			<view class="icon" v-if="icon != ''">
				<image :src="'../../static/icon/' + icon + '.png'" mode=""></image>
			</view>
			<view class="title">
				<template>
					<text>
						<slot />
					</text>
				</template>
			</view>
			<view class="hint" v-if="hint != ''">
				<text>{{hint}}</text>
			</view>
			<view class="icon right_icon">
				<image :src="'../../static/icon/right.png'" mode="see"></image>
			</view>
		</view> 
	</view>
</template>

<script>
	export default {
		name:"mo-input",
		props:{
			icon: {
				type: String,
				default: ''
			},
			rbtnDisabled: {
				type: Boolean,
				default: false
			},
			hint: String
		},
		data() {
			return {
				btnRightTxt: this.btnRight
			};
		},
		watch:{
		},
		methods:{
		}
	}
</script>

<style lang="scss">
	.mo_select{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24rpx 0;
		.select_main{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 80%;
			height: 80rpx;
			padding: 12rpx 24rpx;
			border-radius: 50rpx;
			background-color: #f6f6f6;
			.icon{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 52rpx;
					height: 52rpx;
				}
			}
			.title{
				padding: 0 12rpx;
				// flex: 1;
				// text{
				// 	display: block;
				// 	width: 100%;
				// 	box-sizing: border-box;
				// }
			}
			.hint{
				flex: 1;
				text{
					display: block;
					width: 100%;
					padding: 0 12rpx;
					box-sizing: border-box;
					color: #999;
					overflow: hidden;
					white-space: nowrap;// 控制不换行
					text-overflow: ellipsis;// 控制省略部分以...结束
				}
			}
		}
	}
</style>
