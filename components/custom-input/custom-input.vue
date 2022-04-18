<template>
	<view class="custom_input" :class="{}">
		<textarea class="input_control textarea_outline" 
			:class="{'input_focus': focus || childVal !== ''}"
			@input="onControlInput" 
			@focus="onControlFocus" 
			@blur="onControlBlur" 
			v-if="type === 'textarea'" :value="childVal" />
		<input v-else class="input_control"
			:class="{
				'input_outline':borderType === 'outLine',
				'input_fill':borderType === 'inputFill',
				'input_focus': focus || childVal !== ''
			}"
			:type="type"
			@input="onControlInput" 
			@focus="onControlFocus" 
			@blur="onControlBlur" 
			:value="childVal" />
		<text class="placeholder_text" :class="{'placeholder_focus': focus || childVal !== ''}">{{placeholder}}</text>
		<text class="clear_icon"></text>
	</view>
</template>

<script>
	/**
	 * @Author: NXJ
	 * @property {String} value 组件的值，
	 * @property {String} borderType = [outLine|inputFill] 边框类型
	 * @property {String} type = [textarea|input|password] 输入框类型
	 * @property {String} colorStyle = [default|primary|success|warning|error] 颜色类型
	 * @property {String} placeholder =  占位符内容
	 */
export default {
		name: 'CustomInput',
		model: {
			prop: 'value', // 将value作为该组件被使用(被父组件调用)时,v-model能取到的值
			event: 'input' // emit(触发)input的时候，参数的值就是父组件v-model收到的值。
		},
		props: {
			value: String,
			type: {
				type: String,
				default: 'input'
			},
			borderType: {
				type: String,
				default: 'outLine'
			},
			colorStyle: {
				type: String,
				default: ''
			},
			placeholder: String,
		},
		data() {
			return {
				focus: false,
				childVal: this.value
			};
		},
		watch: {
			value(newVal) {//使用父组件中变量名为函数名，监听value的变化，如果变化，则改变子组件中的值
				this.childVal = newVal;
			}
		},
		methods:{
			onControlInput(e){
				this.$emit('input',e.target.value)
			},
			onControlFocus(e){
				this.$emit('focus',e)
				this.focus = true
			},
			onControlBlur(e){
				this.$emit('blur',e)
				this.focus = false
			},
			
		}
	}
</script>

<style lang="scss">
	.custom_input{
		position: relative;
		.input_control{
			font-size: 32upx;
			line-height: 1.5;
			padding: 24upx;
			display: block;
			position: relative;
			z-index: 1;
			background-color: transparent;
			&.input_fill{
				border-bottom: 1px solid #d0d0d5;    
				&::after {
					content: '';
					position: absolute;
					z-index: 1;
					background-color: #2486ff;
					height: 4upx;
					left: 0;
					right: 0;
					bottom: -2upx;
					transform: scaleX(0);
					transition: transform .25s;
				}
				&.input_focus::after{
					transform: scaleX(1);
				}
			}
			&.textarea_outline{
				width: auto;
				height: 150px;
			}
			&.input_outline,
			&.textarea_outline {
			    border: 1upx solid #d0d0d5;
			    border-radius: 4px;
			    transition: border-color .25s;
			}
			&.input_outline.input_focus,
			&.textarea_outline.input_focus {
			    border-color: #2486ff;
			}
		}
		.placeholder_text{
			font-size: 32upx;
			position: absolute;
			left: 30upx;
			top: 48upx;
			transform: translateY(-50%);
			transition: all 0.25s;
			color: #999;
			z-index: 0;
			&.placeholder_focus{
				z-index: 10;
				font-size: 26upx;
				left: 22upx;
				padding: 0 6upx;
				top: 0;
				background: #FFF;
				transform: translateY(-50%);
				color: #007AFF;
			}
		}
	}
</style>
