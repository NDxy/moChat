<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
				<mo-list :widen="true" :showRight="false" v-for="(item, index) in newFriendsList" :key="item.userId"
					:icon="item.avatar" :note="'密聊号：'+item.accountNo" :title="item.accountName">
						<template v-slot:rightBox>
							<mo-button @click="_toAddFriends(item)" size="mini">添加</mo-button>
						</template>
					</mo-list>
		</scroll-view>
	</view>
</template>

<script>
	import {
		userList
	} from '../../../common/api/index.js'
	export default {
		data() {
			return {
				newFriendsList: [{
					"userId": "000001",
					"accountNo": 100001,
					"accountName": "张三",
					"avatar": "/static/header.jpeg",
					"registerTime": '2022-05-12'
				}, {
					"userId": "000002",
					"accountNo": 100002,
					"accountName": "李四",
					"avatar": "/static/header.jpeg",
					"registerTime": '2022-05-12'
				}, {
					"userId": "000003",
					"accountNo": 100003,
					"accountName": "王五",
					"avatar": "/static/header.jpeg",
					"registerTime": '2022-05-12'
				}],
				accountNo: ''
			};
		},
		onLoad() {
			// this.queryFriends(this.accountNo)
		},
		//点击搜索事件
		onNavigationBarButtonTap(e) {
			this.showTip = true
			this.queryFriends(this.accountNo)
		},
		//点击搜索事件
		onNavigationBarSearchInputConfirmed(e) {
			this.queryFriends(e.text)
		},
		onNavigationBarSearchInputChanged(e) {
			this.accountNo = e.text
		},
		methods: {
			_tofriendsInfo(info){
				uni.navigateTo({
					url: './friendInfo?info=' + JSON.stringify(info)
				})
			},
			_toAddFriends(info){
				uni.navigateTo({
					url: './addFriends?info=' + JSON.stringify(info)
				})
			},
			queryFriends(accountNo) {
				userList({
					accountNo
				}).then(res => {
					if (res.code == 0) {
						this.newFriendsList = res.data.items
					} else {
						uni.showToast({
							icon: 'none',
							title: res.msg
						})
					}
				}).catch(err => {
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
