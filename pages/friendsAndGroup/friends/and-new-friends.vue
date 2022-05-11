<template>
	<view>
		
	</view>
</template>

<script>
	import { userList } from '../../../common/api/index.js'
	export default {
		data() {
			return {
				newFriendsList: [],
				accountNo: ''
			};
		},
		onLoad() {
			// this.queryFriends(this.accountNo)
		},
		onNavigationBarButtonTap(e) {
			this.showTip = true
			this.queryFriends(this.accountNo)
		},
		onNavigationBarSearchInputConfirmed(e){
			this.queryFriends(e.text)
		},
		onNavigationBarSearchInputChanged(e){
			this.accountNo = e.text
		},
		methods: {
			queryFriends(accountNo){
				userList({accountNo}).then(res => {
					if(res.code == 0){
						this.newFriendsList = res.data.items
					}else {
						uni.showToast({
							icon: 'none',
							title:res.msg
						})
					}
				}).catch(err => {
					uni.showToast({
						icon: 'none',
						title:res.msg
					})
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
