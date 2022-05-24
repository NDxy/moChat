<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
				<mo-list :widen="true" :showRight="false" v-for="(item, index) in newFriendsList" :key="item.invitId"
					:icon="item.avatar" :note="'密聊号：'+item.userIdInvitor" :title="item.accountNameInvitor" @click="_tofriendsInfo(item)">
						<template v-slot:rightBox>
							<text v-if='item.isExpired'>已过期</text> <mo-button v-else @click.stop="_toAddFriends(item)" size="mini">添加</mo-button>
						</template>
					</mo-list>
		</scroll-view>
	</view>
</template>

<script>
	import {
		queryFriendInvite
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
				}],
				accountNo: ''
			};
		},
		onLoad() {
			this.queryInvite()
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
			queryInvite(accountNo) {
				queryFriendInvite({startTime: '2022-05-12'}).then(res => {
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
