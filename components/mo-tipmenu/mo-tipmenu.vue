<template>
	<view :class="{'hidden_tip': !showTip}">
		<view class="mask" @click="_hideTip"></view>
		<view class="mo_form_item mo_tipmenu" :style="{top: coordinate[0] + 'rpx', right: coordinate[1] + 'rpx'}">
			<view class="mo_form_item_group" :style="{backgroundColor: bgColor}">
				<view class="form_item_main" @click="_onClick(item)" v-for="(item, index) in range" :key="item.value">
					<view class="icon" v-if="item.icon">
						<image :src="'../../static/icon/' + item.icon + '.png'" mode="scaleToFill"></image>
					</view>
					<view class="title flex_1">
						<text>{{item[rangeKey]}}</text>
					</view>
				</view> 
			</view>
			<input class="value_hind" type="text" :value="valueModel" @input="_onControlInput"/>
		</view>
	</view>
</template>

<script>
	export default {
		name:"MoTipmenu",
		model: {
			prop: 'value', // 将value作为该组件被使用(被父组件调用)时,v-model能取到的值
			event: 'input' // emit(触发)input的时候，参数的值就是父组件v-model收到的值。
		},
		props:{
			range: {
				type: [Array, Object],
				default: {}
			},
			rangeKey: {
				type: String,
				default: 'label'
			},
			value: {
				type: [String, Number, Boolean, Array, Object],
				default: ""
			},
			position: {
				type: String,
				default: "bottom"
			},
			coordinate: {
				type: Array,
				default: () => [20, 40]
			},
			bgColor: {
				type: String,
				default: "rgba(0, 0, 0, 0.9)"
			},
			mask: {
				type: Boolean,
				default: true
			},
			show: {
				type: Boolean,
				default: true
			}
			//TODO: 多选适配
		},
		data() {
			return {
				showTip: false
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
		watch: {
			show(newV, oldV){
				this.showTip = newV
				this.$emit('showmenu', this.showTip)
			}
		},
		methods:{
			_onControlInput(e){
				this.$emit('input', e.detail.value)
			},
			_onClick(e){
				if(this.disabled) return
				this.valueModel = e.value
				console.log(e)
				this.$emit('change', e)
			},
			_hideTip(){
				this.showTip = false
				this.$emit('showmenu', this.showTip)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hidden_tip{
		position: relative;
		z-index: -1;
	}
	.mo_tipmenu{
		min-width: 25%;
		position: absolute;
		z-index: 9999;
		padding: 0;
		.mo_form_item_group{
			width: 100%;
			border-radius: 20rpx;
		}
	}
	.form_item_main{
		padding: 6rpx $mo-spacing-base!important;
		background-color: transparent !important;
		color: #FFF;
	}
	.mask{
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 99;
	}
</style>