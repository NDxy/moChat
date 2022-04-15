<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
	// @import '~@/common/style/variable.scss';
	@import 'common/style/variable.scss';
	
	.register{
		color: $mo-color-warning;
	}
	
</style>
