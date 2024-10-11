<template>
	<view class="content">
		<view class="header">
			<view class="headerTitle">
				每天阅读
			</view>
			<view class="buttonList">
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
					activeColor="#626ae7"></uni-segmented-control>
			</view>
		</view>
		<view class="body">
			<view class="bodyTitle">
				学习周期({{timeValue}}天)
			</view>
			<view class="bodySlider">
				<slider @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#626ae7"
					block-size="28" min="1" max="365" @changing='sliderValue' />
			</view>
		</view>
		<view class="footer">
			<view class="footerTitle">
				请选择英语等级（选一种）
			</view>
			<view class="footerRadio">
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in radioList" :key="item.value">
						<view class="labelStyle">
							<radio :value="item.value" :checked="index === current" color="#626ae7"/>
							<view>{{item.text}}</view>
						</view>
					</label>
				</radio-group>
			</view>
			<view class="footerDetails">
				<view class="Details">
					萌学(Beginner):非常简单的句子和基础词汇，强调日常场景。
				</view>
				<view class="Details">
					小学(Elementary):简单的故事和描述，语法和词汇略有增加。初中(Intermediate):较复杂的句型和多样主题，包含基本的观点和分析。
				</view>
				<view class="Details">
					高中(Advanced):复杂句型和深入主题讨论，包含批判性分析。
				</view>
				<view class="Details">
					成年(Adult):高级词汇和长文，涉及专业领域和深度分析。
				</view>
			</view>
			<view class="footerButton">
				<button class="buttonStyle">准备开始学习吧</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const current = ref(null)
	const items = ref(['1遍', '2遍', '3遍', '4遍'])
	const timeValue = ref(1)
	const radioList = ref([{
		"value": 0,
		"text": "蒙学"
	}, {
		"value": 1,
		"text": "小学"
	}, {
		"value": 2,
		"text": "初中"
	}, {
		"value": 3,
		"text": "高中"
	}, {
		"value": 4,
		"text": "成年"
	}])
	//每天阅读按钮选中之后的回调
	const onClickItem = (index) => {
		console.log(index.currentIndex)
	}
	//学习周期滑动之后的回调
	const sliderValue = (e) => {
		console.log(e.detail.value)
		timeValue.value = e.detail.value
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 40rpx;
		.header {
			.headerTitle {
				font-size: $uni-font-size-title;
			}

			.buttonList {
				margin: 30rpx 0;
			}
		}

		.body {
			.bodyTitle {
				font-size: $uni-font-size-title;
			}

			.bodySlider {
				margin: 30rpx 0;
			}
		}

		.footer {
			.footerTitle {
				font-size: $uni-font-size-title;
			}
			.footerRadio{
				.labelStyle{
					display: flex;
					align-items: center;
					margin-top: 20rpx;
					font-size: 35rpx;
				}
			}
			.footerDetails{
				.Details{
					margin-top: 20rpx;
				}
			}
			.buttonStyle{
				margin-top: 50rpx;
				color: #FFF;
				background: #626ae7;
			}
		}
	}
</style>