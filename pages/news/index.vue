<template>
	<view class="container" :style="'padding-top:'+ statusbarHeight + 'rpx'">
		<view class="">
			
		</view>
		<view class="content">
			<view class="news_lists">
				<news-list @click="pathTo" title="刘一" time="2021年6月1日" massge="在吗？" header="../../static/header.jpeg" status="1"></news-list>
				<news-list @click="pathTo" title="陈二" time="2021年6月1日" massge="有事？" header="../../static/header.jpeg" status="1"></news-list>
				<news-list @click="pathTo" title="张三" time="2021年6月1日" massge="你是谁？" header="../../static/header.jpeg" status="1"></news-list>
				<news-list @click="pathTo" title="李四" time="2021年6月1日" massge="你在做什么？" header="../../static/header.jpeg" status="1"></news-list>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			pathTo(){
				uni.navigateTo({
					url: '../chat/index'
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
