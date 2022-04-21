<template>
	<view class="mo_form_item">
		<view class="form_item_main" @click="onClick">
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