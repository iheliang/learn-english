<template>
	<view class="content">
		<view class="header">
			<image src="../../static/logo.png" mode=""></image>
			<view class="headerContent">
				<view class="headerTitle">
					情景对话
				</view>
				<view class="subTitle">
					共21篇
				</view>
			</view>
			<button class="shareButton">分享</button>
		</view>
		<view class="body">
			<view class="bodyContent" v-for="(item, index) in contentList" :key="index">
				<view class="contentIndex">
					{{item.sum}}
				</view>
				<view class="contentInfo">
					<view class="infoEnglish">
						{{item.english}}
					</view>
					<view class="infoChinese">
						{{item.chinese}}
					</view>
				</view>
				<uni-icons type="right" size="25"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const contentList = ref([{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	},{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	},{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	},{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	},{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	},{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	},{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	},{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	},{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	},{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	},{
		sum: "1",
		english: "Good Morning!",
		chinese: "下午好"
	}])
</script>

<style lang="scss" scoped>
	.content {

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30rpx;
			border-bottom: 1rpx solid #d3d3d3;

			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 30rpx 0 0 30rpx;
			}

			.headerContent {
				flex-grow: 1;
				margin-left: 30rpx;

				.headerTitle {
					font-size: 50rpx;
					font-weight: bold;
				}

				.subTitle {}
			}

			.shareButton {
				line-height: 70rpx;
				height: 70rpx;
				background: #ea916c;
				border-radius: 30rpx 0 0 30rpx;
			}

		}

		.body {
			padding: 0 30rpx;

			.bodyContent {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 2rpx solid #d3d3d3;
				padding: 30rpx 0;

				.contentIndex {
					font-size: 35rpz;
				}

				.contentInfo {
					flex-grow: 1;
					margin-left: 30rpx;

					.infoEnglish {
						font-weight: bold;
					}

					.infoChinese {}
				}
			}
		}
	}
</style>