<template>
	<view class="mo_modal" v-show="opts.visible">
		<view class="modal_mask">
			
		</view>
		<view class="modal_box">
			
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MoModal',
		data() {
			return {
				// 混入props参数，处理函数式调用
				opts: {
					visible: false,
				},
				toastIcon: {
				},
				closeAnim: false,
				oIndex: 202107,
				timer: null,
				// 长按定位初始化（避免弹框跳动闪烁）
				positionStyle: { position: 'absolute', left: '-999px', top: '-999px' },
			}
		},
		methods: {
			show(args) {
				// this.opts = Object.assign({}, this.defaultOptions, args, {isVisible: true})
				// console.log(this.opts)
				this.opts.visible = true
				// 自动关闭
				if(this.opts.time) {
					this.timer = setTimeout(() => {
						this.close()
					}, this.opts.time * 1000)
				}
			},
		}
		
	}
</script>