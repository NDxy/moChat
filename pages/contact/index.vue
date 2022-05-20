<template>
	<view>
		<view class="friend_for_group">
			<mo-list v-for="(item,index) in menuList" :icon="item.header" :key="item.id" :title="item.userName" @click="_toAwait(item.path)"/>
		</view>
		<view class="friend_for_group">
			<view class="group_name">
				<text>测试组</text>
			</view>
			<mo-list v-for="(item,index) in friends" :showRight="false" :icon="item.avatar" :key="item.userId" :title="item.userName"/>
		</view>
	</view>
</template>

<script>
	import {
		loadFriends
	} from '../../common/api/index.js'
	export default {
		data() {
			return {
				menuList: [{
					userName: '新的朋友',
					header: '../../static/header.jpeg',
					id: '1',
					path: '/pages/friendsAndGroup/friends/await-pass'
				}],
				friends: [
					/* {
						userName: '刘一',
						header: '../../static/header.jpeg',
						id: '1'
					},
					{
						userName: '陈二',
						header: '../../static/header.jpeg',
						id: '2'
					},
					{
						userName: '张三',
						header: '../../static/header.jpeg',
						id: '3'
					},
					{
						userName: '李四',
						header: '../../static/header.jpeg',
						id: '4'
					},
					{
						userName: '王五',
						header: '../../static/header.jpeg',
						id: '5'
					},
					{
						userName: '赵六',
						header: '../../static/header.jpeg',
						id: '6'
					},
					{
						userName: '孙七',
						header: '../../static/header.jpeg',
						id: '7'
					},
					{
						userName: '周八',
						header: '../../static/header.jpeg',
						id: '8'
					},
					{
						userName: '吴九',
						header: '../../static/header.jpeg',
						id: '9'
					},
					{
						userName: '郑十',
						header: '../../static/header.jpeg',
						id: '10'
					}, */
				]
			};
		},
		onLoad() {
			this.queryFriends()
		},
		methods:{
			_toAwait(url){
				uni.navigateTo({
					url: url
				})
			},
			queryFriends(){
				loadFriends().then(res => {
					if (res.code == 0) {
						this.friends = res.data.items
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

<style lang="scss" scoped>
	.group_name{
		padding: 12rpx 24rpx;
		background-color: #f8f8f8;
		font-size: 24rpx;
	}
</style>
