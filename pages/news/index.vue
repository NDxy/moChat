<template>
	<view class="content">
		<view class="news_lists">
			<news-list @click="pathTo" title="莫莫" time="2021年6月1日" massge="嗯啊 爱你哟 小宝贝" header="../../static/header.jpeg" status="1"></news-list>
			<news-list title="莫莫" time="2021年6月1日" massge="嗯啊 爱你哟 小宝贝" header="../../static/header.jpeg" status="1"></news-list>
			<news-list title="莫莫" time="2021年6月1日" massge="嗯啊 爱你哟 小宝贝" header="../../static/header.jpeg" status="1"></news-list>
			<news-list title="莫莫" time="2021年6月1日" massge="嗯啊 爱你哟 小宝贝" header="../../static/header.jpeg" status="1"></news-list>
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
