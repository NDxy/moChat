<template>
	<view class="mo_date_picker">
		<view class="mo_form_item">
			<view class="form_item_main" @click="showPopup = true">
				<view class="icon" v-if="icon != ''">
					<image :src="'../../static/icon/' + icon + '.png'" mode="scaleToFill"></image>
				</view>
				<view class="title">
					<template>
						<text>
							<slot />
						</text>
					</template>
				</view>
				<input class="value align_right" type="text" :value="valueModel" :placeholder="hint" placeholder-class="hint" :disabled="true" @input="onControlInput" />
				<view class="icon right_icon">
					<image :src="'../../static/icon/right.png'" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="popup_box" :class="{ popup_show: showPopup }">
			<view class="popup_mask" @click="showPopup = false"></view>
			<view class="popup_content">
				<text class="popup_share_title">{{hint}}</text>
				<view v-if="mode == 'selector'" class="picker ss">
					<picker-view :indicator-style="indicatorStyle" v-model="arrValue" @change="bindChange">
						<picker-view-column>
							<view class="item" v-for="(item,index) in range" :id="item[rangeKey]" :key="item.value">{{item.label}}</view>
						</picker-view-column>
					</picker-view>
				</view>
				<view v-else-if="mode == 'multiSelector'" class="picker mm">
					<picker-view :indicator-style="indicatorStyle" v-model="arrValue" @change="bindChange">
						<picker-view-column  v-for="(items,index) in range" :key="index">
							<view class="item" v-for="(item,index) in items" :key="item.value">{{(rangeKey!=''?item[rangeKey]:item)}}</view>
						</picker-view-column>
					</picker-view>
				</view>
				<view class="popup_share_btn">
					<text class="" @click="confirm">确认</text>
					<text class="" @click="cancel">取消</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let _this;
	export default {
		name: 'moDatePicker',
		model: {
			prop: 'value', // 将value作为该组件被使用(被父组件调用)时,v-model能取到的值
			event: 'input' // emit(触发)input的时候，参数的值就是父组件v-model收到的值。
		},
		props: {
			range: {
				type: [Array, Object],
				required: true
			},
			rangeKey: {
				type: String,
				default: ''
			},
			value: {
				type: [String, Number, Boolean, Array, Object],
				default: ""
			},
			hint: {
				type: String,
				default: ''
			},
			icon: {
				type: String,
				default: ''
			},
			mode: {
				type: String,
				required: true
			}
		},
		computed: {
            valueModel: {
                get: function () {
                    //实际使用的是value值
                    return this.value;
                },
                set: function (val) {
                    //侦听到setter()事件，将值传递回父级组件
                    this.$emit('input', val);
                }
            }
        },
		data() {
			return {
				datas: {},
				showPopup: false,
				indicatorStyle: `height: 50px;`,
				arrValue: []
			};
		},
		mounted() {
			_this = this
			console.log(this.range)
		},
		methods: {
			bindChange(e) {
				_this.datas = {
				}
			},
			confirm() {
				_this.$emit("change", _this.datas);
				this.valueModel = _this.datas.text
				_this.showPopup = false
			},
			cancel() {
				_this.showPopup = false
			},
			onControlInput(e){
				this.$emit('input', e.detail.value)
			}
		}
	}
</script>

<style lang="scss">
	.popup_box {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -199;
		visibility: hidden;

		// display: none;
		&.popup_show {
			z-index: 199;
			visibility: initial;
		}

		.popup_mask {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: rgba($color: #000000, $alpha: 0.3);
		}

		.popup_content {
			height: 800rpx;
			width: 100%;
			display: flex;
			position: absolute;
			bottom: 0;
			flex-direction: column;
			background-color: #FFF;
			border-top-right-radius: 36upx;
			border-top-left-radius: 36upx;
		}

		.search_input {
			height: 40rpx;
			padding: 30rpx 20rpx;
			border-bottom: 1px #f5f5f5 solid;
		}

		.schoolList {
			width: 100%;
			height: calc(100% - 300rpx);

			.no-content {
				padding: 100rpx 24rpx;
				text-align: center;
				color: #999;
				font-size: 28rpx;
			}
		}
		.picker{
			display: flex;
			justify-content: center;
			align-items: center;
		}
		picker-view {
			width: 86%;
			height: 600rpx;
		}

		.item {
			line-height: 100rpx;
			text-align: center;
		}

		.popup_share_btn,
		.popup_share_title {
			height: 100rpx;
			line-height: 100rpx;
			font-weight: bolder;
			border-bottom: 1px #f5f5f5 solid;
			text-align: center;
			color: #333;
			box-sizing: border-box;
		}

		.popup_share_btn {
			display: flex;
			justify-content: space-around;
			color: #007AFF;
			border: none;
			border-top: 1px #f5f5f5 solid;

			text {
				width: 50%;
			}
		}
	}
</style>
