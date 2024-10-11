<template>
	<view class="content">
		<view class="header">
			<view class="headerTitle">用户中心</view>
			<view class="subtext">
				学点：{{subtextVal}}
			</view>
		</view>
		<view class="body">
			<view class="itemCount" v-for="(item, index) in itemCounts" :key="index">
				<view class="itemContent">
					<image class="itemLeftIcon" :src="item.LeftIcon" mode=""></image>
					<view class="contentRight">
						<view class="contentTitle">
							{{item.title}}
						</view>
						<view class="contentSum">
							{{item.sum}}items
						</view>
					</view>
				</view>
				<view class="itemRightIcon">
					<uni-icons type="right" size="30"></uni-icons>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="footerTop">
				<view class="topItem">
					<view class="topTitle">
						赚学点
					</view>
					<view class="topContent">
						分享小程序到你的朋友圈，来解锁更多的学点
					</view>
				</view>
				<button class="topButton">去分享</button>
			</view>
			<view class="footerBottom">
				<view class="bottomTitle">
					<view class="titleLeft">
						最近学习（最近2条）
					</view>
					<view class="titleRight">
						<image src="../../static/时钟-fill.png" mode=""></image>
					</view>
				</view>
				<view class="buttomContent" v-for="(item, index) in 2" :key="index">
					<image src="../../static/Snipaste_2024-10-05_15-53-36.png" mode="" @click="clickNav"></image>
					<view class="contentSlider">
						<slider disabled="true" :value="sliderVal" max="100" block-size="18" block-color="#626ae7"
							activeColor="#626ae7" backgroundColor="#666" />
						<view class="sliderStyle">
							>>>已完成{{sliderVal}}%
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const sliderVal = ref(78)
	const subtextVal = ref(200)
	const itemCounts = ref([{
			LeftIcon: "../../static/标签1.png",
			title: "我的收藏",
			sum: "4"
		},
		{
			LeftIcon: "../../static/评论.png",
			title: "我的评论",
			sum: "3"
		}, {
			LeftIcon: "../../static/下载.png",
			title: "我的下载",
			sum: "1"
		}
	])
	const clickNav =()=>{
		uni.navigateTo({
			url:"/pages/essay/essayMode/listenMode/readMode"
		})
	}
</script>

<style lang="scss" scoped>
	.content {
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 300rpx;
			background: url("../../static/pngtree.jpg");

			.headerTitle {
				font-size: 70rpx;
				font-weight: bold;
				margin-left: 30rpx;
			}

			.subtext {
				font-size: 40rpx;
				font-weight: bold;
				margin-top: 200rpx;
				margin-right: 150rpx;
			}
		}

		.body {
			padding: 0 30rpx;

			.itemCount {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 25rpx 0;
				border-bottom: 2rpx solid #D3D3D3;

				.itemContent {
					display: flex;
					align-items: center;

					.itemLeftIcon {
						width: 50rpx;
						height: 50rpx;
						margin: 0 20rpx;
					}

					.contentRight {
						.contentTitle {
							font-size: 38rpx;
						}

						.contentSum {
							font-size: 28rpx;
						}
					}
				}
			}
		}

		.footer {
			padding: 0 30rpx;

			.footerTop {
				display: flex;
				flex-direction: column;
				padding-bottom: 30rpx;
				border-bottom: 2rpx solid #D3D3D3;

				.topItem {
					padding: 30rpx 0;

					.topTitle {
						font-size: 40rpx;
						font-weight: bold;
					}

					.topContent {
						font-size: 32rpx;
					}
				}

				.topButton {
					width: 200rpx;
					border-radius: 20rpx;
					background: #626ae7;
					color: #FFF;
				}
			}

			.footerBottom {
				.bottomTitle {
					display: flex;
					justify-content: space-between;
					padding: 30rpx 0;

					.titleLeft {
						font-size: 38rpx;
					}

					.titleRight {
						margin-right: 20rpx;

						image {
							width: 50rpx;
							height: 50rpx;
						}
					}
				}

				.buttomContent {
					padding-bottom: 30rpx;
					image {
						width: 690rpx;
						height: 300rpx;
					}
					.contentSlider{
						display: flex;
						align-items: center;
						justify-content: space-around;
						slider {
							width: 300rpx;
						}
						.sliderStyle{
							font-size: 35rpx;
							font-weight: bold;
						}
					}
					
				}
			}
		}
	}
</style>