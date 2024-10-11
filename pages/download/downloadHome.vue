<template>
	<view class="content">
		<view class="header">
			<view class="headerTop">
				电子版下载
			</view>
			<view class="headerBottom">
				立即下载电子版，随时随地助你轻松学习英语！
			</view>
		</view>
		<view class="body">
			<picker class="picker-container" mode="selector" :range="array" @change="pickerChange">
				<view>{{array[index]}}</view>
			</picker>
			<uni-icons type="right" size="25"></uni-icons>
		</view>
		<view class="footer">
			<view class="footerItem" v-for="(item, index) in cardList" :key="index">
				<view class="itemLeft">
					<image src="/static/pdf文件.png" mode=""></image>
				</view>
				<view class="itemRight">
					<view class="itemTitle">
						{{item.title}}
					</view>
					<view class="itemDetails">
						{{item.description}}
					</view>
					<view class="itemButtom">
						<view class="itemPrice">
							￥{{item.price}}/{{item.points}}学点
						</view>
						<image src="../../static/下载.png" mode="" @click="download(item.downloadUrl)"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const array = ref(["蒙学", "小学", "初中", "高中", "成年"]);
	const index = ref(0);
	const cardList = ref([{
		title: "英语小短文100篇",
		description: "经过大量用户反馈精心筛选和优化的小短文，确保你能从中获得最佳的学习效果。",
		price: "10",
		points: "20",
		downloadUrl: "https://example.com/download1.pdf" // 假设的下载链接
	}, {
		title: "英语小短文200篇",
		description: "经过大量用户反馈精心筛选和优化的小短文，确保你能从中获得最佳的学习效果。",
		price: "20",
		points: "20",
		downloadUrl: "https://example.com/download2.pdf"
	}, {
		title: "场景英语100篇",
		description: "经过精心筛选和优化的场景英语，专为提升你在实际对话中的英语表达能力。",
		price: "20",
		points: "20",
		downloadUrl: "https://example.com/download3.pdf"
	}, {
		title: "场景英语100篇",
		description: "经过精心筛选和优化的场景英语，专为提升你在实际对话中的英语表达能力。",
		price: "20",
		points: "20",
		downloadUrl: "https://example.com/download3.pdf"
	}, {
		title: "场景英语100篇",
		description: "经过精心筛选和优化的场景英语，专为提升你在实际对话中的英语表达能力。",
		price: "20",
		points: "20",
		downloadUrl: "https://example.com/download3.pdf"
	}, {
		title: "场景英语100篇",
		description: "经过精心筛选和优化的场景英语，专为提升你在实际对话中的英语表达能力。",
		price: "20",
		points: "20",
		downloadUrl: "https://example.com/download3.pdf"
	}, {
		title: "场景英语100篇",
		description: "经过精心筛选和优化的场景英语，专为提升你在实际对话中的英语表达能力。",
		price: "20",
		points: "20",
		downloadUrl: "https://example.com/download3.pdf"
	}])
	
	//选择难度赋值函数
	const pickerChange = (e) => {
		index.value = e.detail.value
		console.log(e)
	}
	
	//用户点击下载按钮后的逻辑
	const download = (url) => {
	  uni.downloadFile({
	    url: url,
	    success: (res) => {
	      if (res.statusCode === 200) {
	        // 打开下载的文件
	        uni.openDocument({
	          filePath: res.tempFilePath,
	          success: () => {
	            console.log('打开文档成功');
	          }
	        });
	      }
	    },
	    fail: (err) => {
	      console.log('下载失败', err);
	      uni.showToast({
	        title: '下载失败',
	        icon: 'none'
	      });
	    }
	  });
	};
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		padding: 30rpx;
		.header {
			.headerTop {
				font-size: 50rpx;
				font-weight: bold;
			}

			.headerBottom {
				margin-top: 40rpx;
			}
		}

		.body {
			display: flex;
			align-items: center;
			width: 130rpx;
			justify-content: space-between;
			margin: 30rpx 0;

			.picker-container {
				width: 300rpx;
				font-size: 40rpx;
				color: #626ae7;
			}
		}

		.footer {
			.footerItem {
				display: flex;
				align-items: center;
				height: 200rpx;
				width: 660rpx;
				padding: 20rpx;
				background: #f3f4f6;
				margin-bottom: 30rpx;
				.itemLeft {

					image {
						width: 150rpx;
						height: 150rpx;
					}
				}

				.itemRight {
					flex: 1;
					margin-left: 10rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.itemTitle {
						font-size: 35rpx;
						font-weight: bold;
					}

					.itemDetails {
						font-size: 22rpx;
						height: 100rpx;
						overflow: auto;
					}

					.itemButtom {
						display: flex;
						justify-content: space-between;

						.itemPrice {
							font-weight: bold;
							margin-right: 200rpx;
						}

						image {
							width: 50rpx;
							height: 50rpx;
							margin-right: 30rpx;
						}
					}
				}
			}
		}
	}
</style>