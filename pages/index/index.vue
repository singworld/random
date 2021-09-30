<template>
	<view class="content">
		<view>
			  <!-- #ifdef MP-WEIXIN -->
			  
				
				<view class="container">
				  
				  <view v-if="userInfo.avatarUrl" class="userinfo">
					  <u-avatar :src="userInfo.avatarUrl" mode="circle" size="180" 
					  show-sex="true" :sex-icon="userInfo.gender | formatSex" ></u-avatar>
				  </view>
				  <view v-else>
					  <u-button @click="getUserProfile()" shape="square">获取头像</u-button>
				  </view>
				  
				  <view class="text-box">
				                  <text>{{welcomeMessage}} {{userInfo.nickName}}</text>
								
				  </view>
				  
				  <u-line class="u-line" color="#FF99CC" hair-line="false" margin="0rpx"></u-line>
				</view>
			  <!-- #endif -->
			
		
		</view>
	</view>
</template>

<script>
	import util from "../../util/util.js"
	import api from "../../util/api.js"
	export default {
		
		data() {
			return {
				userInfo: {
				  nickName: '小可爱',
				  avatarUrl: null,
				  gender: 1,
				}
			}
		},
	
		onLoad() {
			console.log("页面加载")
			let userInfo = uni.getStorageSync("userInfo")
			if(userInfo.nickName) this.userInfo=userInfo
			
		},
		computed:{
			welcomeMessage(){ 
				
				var now = new Date() 
				var hour = now.getHours()
				var message ="早上好"
				if(hour < 6){message ="凌晨好，"}
				else if (hour < 9){message ="早上好，"}
				else if (hour < 12){message ="上午好，"}
				else if (hour < 14){message ="中午好，"}
				else if (hour < 17){message ="下午好，"}
				else if (hour < 19){message ="傍晚好，"}
				else if (hour < 22){message ="晚上好，"}
				else {message ="夜里好，"}
				return message
			}
			
			
		},
		methods: {
			getUser(){
				console.log("abc")
			},
			
			getUserProfile() {
				uni.getUserProfile({
					 desc: '获取头像',
					success:res => {
						console.log("userInfo",res.userInfo)
						this.userInfo = res.userInfo
						//写入数据库
						this.saveUserInfo()
					},
					fail(e){
						console.log("eeeee",e)
					},
					})
			},
			
			saveUserInfo(){
				util.request(api.SaveUserInfoApi, {
				  userInfo: this.userInfo,
				}, 'POST').then(res => {
					console.log("save",res)
				  if (res.errno === 0) {
				    //存储用户信息
				    wx.setStorageSync('userInfo', res.data.userInfo);
				  } else {
				    console.log(res);
				  }
				 }
				
				).catch((err) => {
				  console.log(err);
				});
			}
	
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

	.text-box{
		text-align: center;
		text{
			font-size: 38rpx;
		}
	}
	
	.userinfo{
		text-align: center;
	}
	

</style>
