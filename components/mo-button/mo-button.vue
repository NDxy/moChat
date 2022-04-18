<template>
	<view class="mo_button">
		<view class="button_main" @click="onClick">
			<slot />
		</view> 
	</view>
</template>

<script>
	export default {
		name:"MoButton",
		props:{
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
			},
			onClick(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.mo_button{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24rpx 0;
		.button_main{
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 80%;
			height: 80rpx;
			padding: 12rpx;
			border-radius: 50rpx;
			background-image: linear-gradient(to right, #20c3d0, #b9e8ea);
			text-align: center;
			font-size: 36rpx;
			font-weight: 700;
			color: #FFF;
			letter-spacing: 12rpx
		}
	}
</style>
