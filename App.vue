<script>
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success: (e) => {
					let statusBar = 0
					let customBar = 0

					// #ifdef MP
					statusBar = e.statusBarHeight
					customBar = e.statusBarHeight + 45
					if (e.platform === 'android') {
						customBar = e.statusBarHeight + 50
					}
					// #endif

					// #ifdef MP-WEIXIN
					statusBar = e.statusBarHeight
					const custom = wx.getMenuButtonBoundingClientRect()
					customBar = custom.bottom + custom.top - e.statusBarHeight
					// #endif

					// #ifdef MP-ALIPAY
					statusBar = e.statusBarHeight
					customBar = e.statusBarHeight + e.titleBarHeight
					// #endif

					// #ifdef APP-PLUS
					statusBar = e.statusBarHeight
					customBar = e.statusBarHeight + 45
					// #endif

					// #ifdef H5
					statusBar = 0
					customBar = e.statusBarHeight + 45
					// #endif

					uni.setStorageSync('SET_STATUS_BAR', statusBar)
					uni.setStorageSync('SET_CUSTOM_BAR', customBar)
					uni.setStorageSync('SET_SYSTEM_INFO', e)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/common/style/common.scss';
	@import '@/common/icon/iconfont.css';
</style>
