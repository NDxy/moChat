<template>
	<view class="mo_select">
		<view class="select_main" @click="onClick">
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
			<input class="value" type="text" :value="valueModel" :placeholder="hint" placeholder-class="hint" :disabled="true" @input="onControlInput" />
			<view class="icon right_icon">
				<image :src="'../../static/icon/right.png'" mode="scaleToFill"></image>
			</view>
		</view> 
	</view>
</template>

<script>
	export default {
		name:"MoSelect",
		model: {
			prop: 'value', // 将value作为该组件被使用(被父组件调用)时,v-model能取到的值
			event: 'input' // emit(触发)input的时候，参数的值就是父组件v-model收到的值。
		},
		props:{
			value: {
				type: [String, Number, Boolean, Array, Object],
				default: ""
			},
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
		methods:{
			onControlInput(e){
				this.$emit('input', e.detail.value)
			},
			onClick(e){
				this.$emit('click', e.detail.value)
			}
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
			width: 86%;
			height: 80rpx;
			padding: 12rpx 24rpx;
			border-radius: 50rpx;
			background-color: $mo-bg-color-white;
			.icon{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: $mo-icon-base;
					height: $mo-icon-base;
				}
				&.right_icon{
					image{
						width: $mo-icon-sm;
						height: $mo-icon-sm;
					}
				}
			}
			.title{
				padding: 0 12rpx;
			}
			.value{
				flex: 1;
				display: inline-block;
				width: 100%;
				padding: 0 12rpx;
				box-sizing: border-box;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				text-align: right;
				.hint{
					color: $mo-text-color-placeholder;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>
