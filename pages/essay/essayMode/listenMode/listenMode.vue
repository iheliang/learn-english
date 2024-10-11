<template>
	<view class="content">
		<view class="header">
			<view class="headerTitle">
				<view class="titleLeft">
					<image class="erji" src="/static/耳机.png" mode=""></image>
					<view class="">
						听力模式
					</view>
				</view>
				<view class="titleRight">
					<image src="/static/下载.png" mode=""></image>
					<image src="/static/标签1.png" mode=""></image>
					<image src="/static/分享.png" mode=""></image>
				</view>
			</view>
			<view class="headerContent">

			</view>
		</view>
		<view class="body">
			<view class="bodyTitle">
				好不好，点评一下吧
			</view>
			<view class="starStyle">
				<l-starRate :value="starValue" @input="getvalue" :disabled="false"></l-starRate>
				<button @click="sendComment">发送</button>
			</view>
			<view class="comment">
				<textarea name="" id="" cols="30" rows="10" maxlength="100" v-model="commentValue"></textarea>
			</view>
		</view>
		<view class="footer">
			<view class="commentName">
				用户名字
			</view>
			<view class="commentStar">
				<l-starRate :value="commentStar" :disabled="true"></l-starRate>
			</view>
			<view class="commentContent">
				评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
			</view>
		</view>
		<view class="bottomNavBar">
			<view class="navItem" @click="modelSwitch('切换模式')">
				<image src="/static/切换.png" class="navIcon"></image>
				<view>切换模式</view>
			</view>
			<view class="navItem" @click="handleClick()">
				<image src="/static/活动直播间.png" class="navIcon"></image>
				<view>开始播放</view>
			</view>
			<view class="navItem" @click="handleClick()">
				<image src="/static/播放器_关闭翻译歌词_32.png" class="navIcon"></image>
				<view>关闭译文</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const starValue = ref(0) //用户当前评论星星值
	const commentValue = ref("") //用户当前的评论内容
	const commentStar = ref(3) //他人评论

	//获取星星值的方法
	const getvalue = (e) => {
		starValue.value = e
	}

	const sendComment = () => {
		if (starValue.value === 0 || commentValue.value.trim() === "") {
			uni.showToast({
				title: '请完整填写评论',
				icon: "none",
				duration: 1500
			})
			return
		} else {
			//提交用户评论
			console.log(starValue.value, commentValue.value)
		}
	}
	
	const modelSwitch =()=>{
		uni.navigateTo({
			url:"/pages/essay/essayMode/listenMode/readMode"
		})
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		background: #f3f4f6;
		padding: 30rpx 0;
		padding-bottom: 170rpx;
		.header {
			width: 630rpx;
			height: 780rpx;
			margin: 20rpx auto;
			background: #FFF;

			.headerTitle {
				display: flex;
				justify-content: space-between;
				padding: 20rpx;
				border-bottom: 3rpx solid #666;

				.titleLeft {
					width: 200rpx;
					display: flex;
					justify-content: space-between;

					image {
						width: 50rpx;
						height: 50rpx;
					}
				}

				.titleRight {
					width: 250rpx;
					display: flex;
					justify-content: space-between;

					image {
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
		}

		.body {
			display: flex;
			flex-direction: column;
			width: 630rpx;
			margin: 20rpx auto;

			.bodyTitle {
				font-weight: bold;
			}

			.starStyle {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 20rpx 0;
				button {
					margin-left: 37%;
					width: 150rpx;
					background: #626ae7;
					color: #FFF;
					border-radius: 20rpx;
				}
			}

			.comment {
				width: 630rpx;
				height: 200rpx;
				background: #FFF;
				border-radius: 20rpx;

				textarea {
					width: 100%;
					height: 100%;
					padding: 20rpx;
					border-radius: 20rpx;
					border: 1px solid #ccc;
					box-sizing: border-box;
					overflow: auto;
					resize: none;
				}
			}
		}

		.footer {
			display: flex;
			flex-direction: column;
			width: 590rpx;
			height: 270rpx;
			margin: 20rpx auto;
			padding: 20rpx;
			background: #FFF;
			border-radius: 20rpx;
			border: 1px solid #ccc;

			.commentName {}

			.commentStar {}

			.commentContent {}
		}

		.bottomNavBar {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100rpx;
			background-color: #fff;
			border-top: 1px solid #ddd;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 10rpx 0;
			padding-bottom: env(safe-area-inset-bottom);
			.navItem {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.navIcon {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
	}
</style>