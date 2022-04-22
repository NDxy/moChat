<template>
	<view class="mo_form_item">
		<view class="mo_form_item_group">
			<view class="form_item_main" @click="onClick(item)" v-for="(item, index) in range" :key="item.value">
				<view class="icon" v-if="item.icon">
					<image :src="'../../static/icon/' + item.icon + '.png'" mode="scaleToFill"></image>
				</view>
				<view class="title flex_1">
					<text>{{item[rangeKey]}}</text>
				</view>
				<view class="icon select_icon" :class="{ 'select_changed': valueModel === item.value }">
					<image :src="'../../static/icon/changed.png'" mode="scaleToFill"></image>
				</view>
			</view> 
		</view>
		<input class="value_hind" type="text" :value="valueModel" @input="onControlInput"/>
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
			range: {
				type: [Array, Object],
				default: ""
			},
			rangeKey: {
				type: String,
				default: 'label'
			},
			value: {
				type: [String, Number, Boolean, Array, Object],
				default: ""
			},
			disabled: {
				type: Boolean,
				default: false
			},
			//TODO: 多选适配
		},
		data() {
			return {
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
				if(this.disabled) return
				this.valueModel = e.value
				this.$emit('change', e)
			}
		}
	}
</script>