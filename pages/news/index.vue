<template>
	<view class="content">
		<view class="news_lists">
			<news-list title="莫莫" time="2021年6月1日" massge="嗯啊 爱你哟 小宝贝" header="../../static/logo.png" status="1"></news-list>
			<news-list title="莫莫" time="2021年6月1日" massge="嗯啊 爱你哟 小宝贝" header="../../static/logo.png" status="1"></news-list>
			<news-list title="莫莫" time="2021年6月1日" massge="嗯啊 爱你哟 小宝贝" header="../../static/logo.png" status="1"></news-list>
			<news-list title="莫莫" time="2021年6月1日" massge="嗯啊 爱你哟 小宝贝" header="../../static/logo.png" status="1"></news-list>
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
