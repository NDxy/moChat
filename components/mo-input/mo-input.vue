<template>
	<view class="mo_input">
		<view class="input_main">
			<view class="icon" v-if="icon != ''">
				<image :src="'../../static/icon/' + icon + '.png'" mode=""></image>
			</view>
			<view class="input_box">
				<input :type="inputType" :value="inputVal" @input="onControlInput" :placeholder="placeholder" placeholder-class="plhd_class"/>
			</view>
			<view class="icon clear_icon" v-if="showClear && inputVal!='' && type != 'password'" @click="clearInput">
				<image src="../../static/icon/close.png" mode="clear"></image>
			</view>
			<view class="icon see_icon" v-if="type == 'password' && inputVal!=''" @click="showPassword">
				<image :src="'../../static/icon/'+ (eyes?'nosee':'cansee') +'.png'" mode="see"></image>
			</view>
			<view v-if="btnRightTxt != ''" class="btn_right" :class="{disabled: rbtnDisabled}" @click="rbtnClick">
				{{btnRightTxt}}
			</view>
		</view> 
	</view>
</template>

<script>
	export default {
		name:"MoInput",
		model: {
			prop: 'value', // 将value作为该组件被使用(被父组件调用)时,v-model能取到的值
			event: 'input' // emit(触发)input的时候，参数的值就是父组件v-model收到的值。
		},
		props:{
			value: {
				type: String,
				default: ""
			},
			type: {
				type: String,
				default: "text"
			},
			placeholder: {
				type: String,
				default: "请输入内容"
			},
			icon: {
				type: String,
				default: ''
			},
			showClear: {
				type: Boolean,
				default: false
			},
			btnRight: {
				type: String,
				default: ''
			},
			rbtnDisabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				inputVal: this.value,
				eyes: false,
				inputType: this.type,
				btnRightTxt: this.btnRight
			};
		},
		watch: {
			value(newV, oVal){
				console.log(newV)
				this.inputVal = newV
			},
			type(newV, oVal){
				this.inputType = type
				this.eyes = newV != 'password'
			},
			btnRight(newV, oVal){
				this.btnRightTxt = newV
			}
		},
		methods:{
			onControlInput(e){
				console.log(e)
				this.$emit('input',e.target.value)
			},
			clearInput(){
				console.log(this.inputVal)
				this.inputVal = ''
			},
			showPassword(){
				this.eyes = !this.eyes
				this.inputType = this.eyes?'text':'password'
			},
			rbtnClick(){
				if(this.rbtnDisabled){
					return
				}
				this.$emit('rbtnClick')
			}
		}
	}
</script>

<style lang="scss">
	.mo_input{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24rpx 0;
		.input_main{
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
				// width: 80rpx;
				// height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 52rpx;
					height: 52rpx;
				}
			}
			.input_box{
				flex: 1;
				input{
					width: 100%;
					padding: 0 12rpx;
					box-sizing: border-box;
				}
			}
		}
		.plhd_class{
			color: #999;
		}
		.btn_right{
			color: #20c3d0;
			&.disabled{
				color: #B9E8EA;
			}
		}
	}
</style>
