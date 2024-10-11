<template>
	<view class="content">
		<view class="header">
			<view class="headerTop">
				<view class="headerTitle">
					学习进度
				</view>
				<view class="headerIcon">
					<image src="../../static/交换.png" mode=""></image>
					<image src="../../static/时钟-fill.png" mode=""></image>
				</view>
			</view>
			<view class="headerContent">
				<slider @change="" disabled="true" value="5" max="10" block-size="12" block-color="#626ae7" activeColor="#626ae7"/>
			</view>
			<view class="headerBottom">
				<view class="">
					共7天 | 每日2篇
				</view>
				<view class="">
					65%
				</view>
			</view>
		</view>
		<view class="body">
			<view class="done" v-show="isShow">
				今日学习已完成，真棒！
			</view>
			<view class="noDone" v-show="!isShow">
				今天你还没有学习哟，要坚持学习哦！！！
			</view>
		</view>
		<view class="footer">
			<view class="footerTop">
				<view class="footerTitle">
					学习内容
				</view>
				<view class="titleIcon">
					<image src="../../static/交换 (1).png" mode=""></image>
				</view>
			</view>
			<view class="footerBottom">
				<view class="contentTop" @click="clickContent">
					<image src="../../static/Snipaste_2024-10-05_15-53-36.png" mode="aspectFill"></image>
				</view>
				<view class="contentBottom" @click="clickContent">
					<image src="../../static/Snipaste_2024-10-05_15-53-36.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const isShow = ref('false') //显示完成情况
	//用户点击学习内容跳转到听力模式
	const clickContent =()=>{
		uni.navigateTo({
			url:"/pages/essay/essayMode/listenMode/listenMode"
		})
	}
</script>

<style lang="scss" scoped>
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		.header{
			width: 700rpx;
			height: 270rpx;
			background: #ebfbf8;
			margin: 20rpx auto;
			.headerTop{
				display: flex;
				justify-content: space-between;
				margin: 40rpx 30rpx;
				.headerTitle{
					font-size: 40rpx;
					font-weight: bold;
				}
				.headerIcon{
					width: 150rpx;
					display: flex;
					justify-content: space-between;
					image{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
			.headerContent{
				
			}
			.headerBottom{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin: 30rpx 30rpx;
			}
		}
		.body{
			.done{
				width: 650rpx;
				height: 90rpx;
				line-height: 90rpx;
				background: #18a848;
				color: #fff;
				padding-left: 30rpx;
				border-radius: 30rpx;
			}
			.noDone{
				width: 650rpx;
				height: 90rpx;
				line-height: 90rpx;
				background: #f5c4c7;
				color: red;
				padding-left: 30rpx;
				border-radius: 30rpx;
			}
		}
		.footer{
			width: 700rpx;
			margin: 20rpx auto;
			.footerTop{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 20rpx 30rpx;
				.footerTitle{
					font-size: 40rpx;
					font-weight: bold;
				}
				image{
					width: 50rpx;
					height: 50rpx;
				}
			}
			.footerBottom{
				display: flex;
				flex-direction: column;
				gap: 20rpx;
				.contentTop, .contentBottom{
					width: 700rpx;
					height: 350rpx;
					image{
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}
		}
	}
</style>
