<template>
	<view class="mo_input">
		<view class="input_main">
			<view class="icon" v-if="icon != ''">
				<image :src="'../../static/icon/' + icon + '.png'" mode=""></image>
			</view>
			<view class="input_box">
				<input :type="inputType" v-model="inputVal" :placeholder="placeholder" placeholder-class="plhd_class"/>
			</view>
			<view class="icon clear_icon" v-if="showClear && inputVal!='' && type != 'password'" @click="clearInput">
				<image src="../../static/icon/close.png" mode="clear"></image>
			</view>
			<view class="icon see_icon" v-if="type == 'password' && inputVal!=''" @click="showPassword">
				<image :src="'../../static/icon/'+ (eyes?'nosee':'cansee') +'.png'" mode="see"></image>
			</view>
		</view> 
	</view>
</template>

<script>
	export default {
		name:"mo-input",
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
			clearInput(){
				this.inputVal = ''
			},
			showPassword(){
				this.eyes = !this.eyes
				this.inputType = this.eyes?'text':'password'
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
			padding: 12rpx;
			border-radius: 50rpx;
			background-color: #f6f6f6;
			.icon{
				width: 80rpx;
				height: 80rpx;
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
	}
</style>
