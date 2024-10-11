<template>
	<view class="content">
		<view class="header">
			<image class="logo" src="../../static/logo.png" mode=""></image>
		</view>
		<view class="body">
			<view class="name">
				英语日日练
			</view>
			<view class="title">
				专属定制的英语短文，让你的学习之旅更贴心、更高效!
			</view>
		</view>
		<view class="footer">
			<button class="bottomBut" @click="bindTel">让我定制一个计划吧</button>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	const bindTel = ()=>{
		//通过调用接口将微信绑定到小程序中进行用户注册
	}
	
</script>

<style lang="scss" scoped>
	.content{
		padding: $uni-page-padding;
		display: flex;
		flex-direction: column;
		align-items: center;
		.header{
			margin: 100rpx auto;
			.logo{
				width: 200rpx;
				height: 200rpx;
			}
		}
		.body{
			
			.name{
				text-align: center;
				font-size: 60rpx;
			}
			.title{
				margin-top: 30rpx;
				font-size: 40rpx;
			}
		}
		.footer{
			.bottomBut{
				position: fixed;
				bottom: 120rpx;
				left: 50%;
				transform: translateX(-50%);
				width: 600rpx;
				background: #626ae7;
				color: #FFF;
			}
		}
	}

</style>
