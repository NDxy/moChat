<template>
	<view class="mo-list-group">
		<slot />
	</view>
</template>
<script>
	export default {
		name: 'UniList'
	}
</script>
<style>

	.mo-list-group {
		background-color: #fff;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column
	}

	.mo-list-group:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #cecece
	}

	.mo-list-group:before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #cecece
	}
</style>