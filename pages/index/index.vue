<template>
	<view>
		<view class="content">
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
				  
				 
				</view>
			  <!-- #endif -->
			<!-- <u-line class="u-line" color="#FF99CC" hair-line="false" margin="0rpx"></u-line> -->
			 <u-gap height="10" bg-color="#FF99CC" margin-top="2" ></u-gap>
			 <u-gap height="10" bg-color="#FF99CC" margin-top="4"></u-gap>
			 <u-gap height="10" bg-color="#FF99CC" margin-top="6"></u-gap>
		</view>
		
		

		<view>
			<u-card title="我的任务" :thumb="thumb">
			<view class="" slot="body">
				<u-swipe-action  :index="index" :show="item.show"
					v-for="(item, index) in taskList" :key="item.id" 
					@click="click" @open="open"
					:options="options"
				>
					<view class="item u-border-bottom">
						<image mode="aspectFill" src="../../static/wz.png" />
						<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
						<view class="title-wrap">
							<text class="title u-line-2">{{ item.name }}</text>
						</view>
						
					</view>
				</u-swipe-action>
			</view>
			</u-card>
		</view>
		

		
		
		<view class="popup-context">
			<u-popup  v-model="show" mode="bottom">
				<view>
					<view class="text-box popuptext">
					             <text>拍照打卡完成你的任务吧！</text>
					</view>
					<view class="u-line">
						<u-line class="u-line" color="#FF99CC" hair-line="false" margin="0rpx"></u-line> 
					</view>
					<u-upload  :action="action"  ref="uUpload" :custom-btn="true" :auto-upload="false" max-count="1" >
						<view slot="addBtn" class="slot-btn"  hover-class="slot-btn__hover" hover-stay-time="150">
							<u-icon name="plus" size="200" :color="$u.color['lightColor']"></u-icon>
						</view>
					</u-upload>
					<view class="remark">
						<u-input  placeholder="(选填)记录一句备注吧!" v-model="remark" :type="text" />
					</view>
					<view class="input-line">
						<u-line length="60%" class="input-line" color="#B399FF" hair-line="false"></u-line> 
					</view>
					<u-button type="primary" shape="square" :custom-style="customStyle" @click="submit">上传</u-button>
				</view>
			</u-popup>
		</view>
		
		
		<u-tabbar v-model="current" :list="TabbarList" :mid-button="true"></u-tabbar>
	</view>
	
	
	

	
</template>

<script>
	import util from "../../util/util.js"
	import api from "../../util/api.js"
	import * as user from '../../util/user.js'
	var app = getApp();
	export default {
		
		
		
		data() {
			return {
				thumb:"https://wx.jianxiaoxin.com/wx/storage/fetch/9ykjwr5fb8947rmilsx9.png",
				action: api.Upload,
				remark:"",
				TabbarList:null,
				activeId:null,
				activeIndex:null,
				customStyle: {
						marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
						color: 'white',
						width:"350rpx",
						background:"#FF99CC"
					},
								
				userInfo: {
				  nickName: '小可爱',
				  avatarUrl: null,
				  gender: 1,
				},
						
								current: 0,
								
								taskList: [],
								disabled: false,
								btnWidth: 180,
								show: false,
								options: [
									{
										text: '打卡',
										style: {
											backgroundColor: '#007aff'
										}
									},
									{
										text: '删除',
										style: {
											backgroundColor: '#dd524d'
										}
									}
							
								],
								
							
			}
			
			
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
			
		
			async submit() {
							// let files = [];
							// // 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
							// files = this.$refs.uUpload.lists.filter(val => {
							// 	return val.progress == 100;
							// })
							// 如果您不需要进行太多的处理，直接如下即可
							// files = this.$refs.uUpload.lists;
							let token = uni.getStorageSync('token');
							
							console.log("activeId",this.activeId)
							
							this.$refs.uUpload.formData ={
								'remark':this.remark,
								'activeId':this.activeId
							} 
							
							
							
							var header = {
							  'Content-Type': 'application/json',
							  'X-Litemall-Token': uni.getStorageSync('token')
							}
							
							this.$refs.uUpload.header=header
							let message = await this.$refs.uUpload.upload()
							this.$refs.uUpload.remove(0)
							this.taskList.splice(this.activeIndex, 1);
							this.show=false
							
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
			//保持头像
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
			},
			getTaskIndex(){
				util.request(api.TaskIndex).then(res => {
					console.log("getTaskIndex",res)
				  if (res.errno === 0) {
					  this.taskList = res.data.taskList;
					  // this.taskList.map((val, idx) => {
					  // 	this.taskList[idx].show = false;
					  // })
				    //
				    // wx.setStorageSync('userInfo', res.data.userInfo);
				  } else {
				    console.log(res);
				  }
				 }
				
				).catch((err) => {
				  console.log(err);
				});
			},
			
		
			click(index, flag) {
				if(flag == 1) {
					this.taskList.splice(index, 1);
					this.$u.toast(`删除了第${index}个cell`);
				} else {
					// this.taskList[index].show = false;
					// this.taskList.splice(index, 1);
					// this.$u.toast(`打卡成功`);
					this.activeIndex = index
					this.activeId = this.taskList[index].id
					this.show=true
				}
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.taskList[index].show = true;
				this.taskList.map((val, idx) => {
					if(index != idx) this.taskList[idx].show = false;
				})
				
			}
	
		},	
		//发送给朋友
		onShareAppMessage(res) {
			// 此处的distSource为分享者的部分信息，需要传递给其他人
			let distSource = uni.getStorageSync('distSource');
			if (distSource) {
				return {
					title: '欢迎使用',
					type: 0,
					path: '/pages/index/index?id=' + distSource,
					summary: "",
					imageUrl: "https://58d.oss-cn-hangzhou.aliyuncs.com/goods/ttg_1596073788000.png"
				}
			}
		},
		//分享到朋友圈
		onShareTimeline(res) {
			let distSource = uni.getStorageSync('distSource');
			if (distSource) {
				return {
					title: '欢迎使用',
					type: 0,
					query: 'id=' + distSource,
					summary: "",
					imageUrl: ""
				}
			}
		},

				
		onLoad() {
			console.log("页面加载")
				wx.showShareMenu({
					withShareTicket:true,
					//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
					menus:["shareAppMessage","shareTimeline"]
				})
			
			
			let userInfo = uni.getStorageSync("userInfo")
			// if(userInfo.nickName) this.userInfo=userInfo
			
			console.log("onload里面的userInfo",userInfo)
			
			let token = uni.getStorageSync("token")
			console.log("onload里面的token",token)
			uni.removeStorageSync('token');
			
			this.TabbarList = api.TabbarList;
			
			// uni.clearStorage();
			user.checkLogin().catch((e) => {
				      user.loginByWeixin().then(res => {
						  
						  console.log("resvue",res)
				          app.globalData.hasLogin = true;
						  console.log("globalData.hasLogin",app.globalData.hasLogin)
							this.getTaskIndex()
				//         wx.navigateBack({
				//           delta: 1
				//         })
				      }).catch((err) => {
			
				        app.globalData.hasLogin = false;
				        console.log('微信登录失败');
				      });
				
				
				
			      }).catch((err) => {
			        uni.showToast({
			            title: '失败',
			            duration: 2000
			        });
			      });
			
			
			
			
			
		},
		onShow(){
			
			// let userInfo = uni.getStorageSync("userInfo")
			// console.log("onshow 里面的userInfo",userInfo)
			// if(userInfo.nickName) this.userInfo=userInfo
		},
		
		onReady(){
			this.getTaskIndex()
			let userInfo = uni.getStorageSync("userInfo")
			console.log("onReady 里面的userInfo",userInfo)
			if(userInfo.nickName) this.userInfo=userInfo
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
	
	.u-card-wrap { 
			background-color: $u-bg-color;
			padding: 1px;
		}
		
		.u-body-item {
			font-size: 32rpx;
			color: #333;
			padding: 20rpx 10rpx;
		}
			
		.u-body-item image {
			width: 120rpx;
			flex: 0 0 120rpx;
			height: 120rpx;
			border-radius: 8rpx;
			margin-left: 12rpx;
		}
	
	
		.item {
			display: flex;
			padding: 20rpx;
		}
		
		image {
			width: 120rpx;
			flex: 0 0 120rpx;
			height: 120rpx;
			margin-right: 20rpx;
			border-radius: 12rpx;
		}
		
		.title {
			text-align: left;
			font-size: 28rpx;
			color: $u-content-color;
			margin-top: 20rpx;
		}
	

	
	.slot-btn {
		width: 550rpx;
		height: 240rpx;
		// display: flex;
		// justify-content: center;
		// align-items: center;
		margin: 20rpx 100rpx;
		text-align: center;
		background: rgb(244, 245, 246);
		border-radius: 10rpx;
	}
	
	.slot-btn__hover {
		background-color: rgb(235, 236, 238);
	}
	
	.popup-context{
		
		 text{
			 color:#B399FF;
			 margin: 50rpx;
			 line-height: 50rpx;
		 }	
	
	
		
		
	}
	
	.remark{
		width: 550rpx;
		// text-align: center;
		margin-left:150rpx;
		
	}
	
	.input-line{
			margin-left:150rpx;
		}
	
</style>
