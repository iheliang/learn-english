<template>
	<view class="content">
		<view class="header">
			<view class="headerTop">
				<image src="/static/麦克风.png" mode=""></image>
				<view class="headerTitle">
					学习模式
				</view>
			</view>
			<view class="headerBottom">
				学习内容展示
			</view>
		</view>
		<view class="body">
			<view class="bodyTop">
				评分：87
			</view>
			<view class="bodyBottom">
				英语短句展示
			</view>
		</view>
		<view class="footer">
			<image src="/static/奖杯.png" mode=""></image>
			<view class="footerTop">
				85分超级厉害的
			</view>
			<view class="footerBottom">
				立即分享给你的小伙伴，试试他们的水准吧
			</view>
			<button>立即分享</button>
		</view>
		<view class="bottomNavBar">
			<view class="navItem" @click="modelSwitch()">
				<image src="/static/切换.png" class="navIcon"></image>
				<view>切换模式</view>
			</view>
			<view class="navItem" @click="handleClick()">
				<image src="/static/麦克风 (1).png" class="navIcon"></image>
				<view>按住朗读</view>
			</view>
			<view class="navItem" @click="handleClick()">
				<image src="/static/播放器_关闭翻译歌词_32.png" class="navIcon"></image>
				<view>关闭译文</view>
			</view>
		</view>
		<view>
			<button @tap="startRecord">开始录音</button>
			<button @tap="endRecord">停止录音</button>
			<button @tap="playVoice">播放录音</button>
			<button @click="trans()">翻译</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	// 创建音频上下文
	const innerAudioContext = uni.createInnerAudioContext();

	// 加载插件
	const plugin = requirePlugin("WechatSI");
	const manager = plugin.getRecordRecognitionManager();

	// 数据状态
	const voicePath = ref('');
	const text = ref('uni-app');

	// 设置录音识别管理器的事件监听器
	manager.onStop = (res) => {
		console.log("record file path", res.tempFilePath);
		console.log("识别结果", res.result);
		voicePath.value = res.tempFilePath;
	};

	manager.onStart = (res) => {
		console.log("成功开始录音识别", res);
	};

	manager.onError = (res) => {
		console.error("error msg", res.msg);
	};

	// 有新的识别内容返回，则会调用此事件
	manager.onRecognize = (res) => {
		console.log('改变', res);
	};

	// 开始录音的方法
	const startRecord = () => {
		manager.start({
			lang: "en_US",
		});
	};

	// 结束录音的方法
	const endRecord = () => {
		console.log('录音结束');
		manager.stop();
	};

	// 播放录音的方法
	const playVoice = () => {
		console.log('播放录音');
		if (voicePath.value) {
			innerAudioContext.src = voicePath.value;
			innerAudioContext.play();
		}
	};

	const modelSwitch = () => {
		uni.navigateTo({
			url: "/pages/essay/essayMode/listenMode/listenMode"
		})
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		background: #f3f4f6;
		padding: 30rpx 0;

		.header {
			width: 630rpx;
			height: 400rpx;
			background: #FFF;
			margin: 20rpx auto;

			.headerTop {
				display: flex;
				align-items: center;
				border-bottom: 2rpx solid #666;
				padding: 20rpx;

				image {
					width: 50rpx;
					height: 50rpx;
				}

				.headerTitle {}
			}

			.headerBottom {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 70rpx;
			}
		}

		.body {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 630rpx;
			height: 300rpx;
			background: #FFF;
			margin: 20rpx auto;

			.bodyTop {
				font-size: 40rpx;
				color: red;
			}

			.bodyBottom {}
		}

		.footer {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 630rpx;
			height: 420rpx;
			background: #FFF;
			margin: 20rpx auto;

			image {
				width: 100rpx;
				height: 100rpx;
				margin: 20rpx 0;
			}

			.footerTop {
				margin: 20rpx 0;
				font-size: 40rpx;
			}

			.footerBottom {}

			button {
				margin-top: 30rpx;
				background: #626ae7;
				color: #FFF;
			}
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