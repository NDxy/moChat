<template>
	<view class="mo_form_item">
		<view class="form_button_main" :class="{'mini_btn': size == 'mini'}" @click="onClick">
			<slot />
		</view> 
	</view>
</template>

<script>
	export default {
		name:"MoButton",
		props:{
			disabled: Boolean,
			size: {
				type: String,
				default: 'default'
			}
		},
		data() {
			return {
				inputVal: this.value,
				eyes: false,
				inputType: this.type
			};
		},
		watch:{
			value(newV, oVal){
				this.inputVal = newV
			},
			type(newV, oVal){
				this.inputType = type
				this.eyes = newV != 'password'
			}
		},
		methods:{
			onClick(){
				this.$emit('click')
			}
		}
	}
</script>
