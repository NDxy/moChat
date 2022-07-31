<template>
	<view class="container">
		<mo-tipmenu :range="range" :show="showTip" @showmenu="isShow => { showTip = isShow}" @change="_menuChange"/>
		<view class="content">
			<view class="news_lists">
				<news-list @click="_pathTo" title="刘一" time="2021年6月1日" massge="在吗？" header="../../static/header.jpeg" status="1"></news-list>
				<news-list @click="_pathTo" title="陈二" time="2021年6月1日" massge="有事？" header="../../static/header.jpeg" status="1"></news-list>
				<news-list @click="_pathTo" title="张三" time="2021年6月1日" massge="你是谁？" header="../../static/header.jpeg" status="1"></news-list>
				<news-list @click="_pathTo" title="李四" time="2021年6月1日" massge="你在做什么？" header="../../static/header.jpeg" status="1"></news-list>
			</view>
		</view>
		<button @click="showTip = true">测试使用按钮</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				range: [{
					label: '发起群聊',
					value: 1,
					path: '/pages/friendsAndGroup/group/create-group'
				},{
					label: '添加好友',
					value: 2,
					path: '/pages/friendsAndGroup/friends/and-new-friends'
				},{
					label: '我的二维码',
					value: 3,
					path: '/pages/userInfo/userQRcode'
				}],
				showTip: false
			}
		},  
		onNavigationBarButtonTap(e) {
			this.showTip = true
		},
		onLoad() {

		},
		methods: {
			_pathTo(){
				uni.navigateTo({
					url: '../chat/index'
				})
			},
			_menuChange(e){
				this.showTip = true
				uni.navigateTo({
					url: e.path
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.news_lists{
		width: 100%;
	}
</style>
