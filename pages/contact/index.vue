<template>
	<view>
		<view class="friend_for_group">
			<view class="group_name">
				<text>测试组</text>
			</view>
			<mo-list v-for="(item,index) in friends" :showRight="false" :icon="item.header" :key="item.id" :title="item.userName"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				friends: [
					{
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
					},
				]
			};
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
