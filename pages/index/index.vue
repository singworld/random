<template>
	<view class="content">
		<view>
			  <!-- #ifdef MP-WEIXIN -->
			  
				
				<view class="container">
				  <view class="userinfo">
				    
				      <button @click="getUserProfile"> 获取头像昵称2 </button>
					  
					  <button @click="getUser"> 获取头像昵称3 </button>
				     
				  </view>
				</view>
			  <!-- #endif -->
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://wx1.sinaimg.cn/mw2000/0087xQq5ly8gm9g4btu5ij30e80e8q39.jpg',
				text: '无头像'
			}
		},
		onLoad() {
		
		},
		methods: {
			getUser(){
				console.log("abc")
			},
			
			getUserProfile() {
				if(uni.getUserProfile) {
					console.log("33333kkkkkkkkk")
				}
				
			
				uni.getUserProfile({
					 desc: '登录',
					success(userInfo) {
						console.log("userInfo",userInfo)
					},
					fail(e){
						console.log("eeeee",e)
					},
					complete(){
						console.log("22222userInfo")
					}
					})
			},
	
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 28rpx;
		color: $u-content-color;
	}
	
	.button-demo {
		margin-top: 80rpx;
	}
	
	.link-demo {
		margin-top: 80rpx;
	}
</style>
