<template>
	<view class="content">
			<u-time-line>
				<u-time-line-item :index="index" :show="item.show"
					v-for="(item, index) in taskList" :key="item.id" >
					<template v-slot:content>
						<view>
							<view class="u-order-title">{{item.name}}</view>
							<u-image width="100%" height="300rpx" :src="item.image" mode="aspectFill"></u-image>
							<view class="u-order-time">{{item.updateTime}}</view>
						</view>
					</template>
				</u-time-line-item>
			</u-time-line>
			
			
			
		<u-tabbar v-model="current" :list="TabbarList" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	var app = getApp();
	import api from "../../util/api.js"
	import util from "../../util/util.js"
	export default {
		data() {
			return {
				TabbarList:null,
				src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
				taskList:null
			}
		},
		onLoad() {
			// app.globalData.hasLogin = true;
			this.TabbarList = api.TabbarList;
			this.getTaskArchive()
		},
		onShow(){
			this.getTaskArchive()
		},
		methods: {
					getTaskArchive(){
						util.request(api.GetTaskArchive).then(res => {
							console.log("save",res)
						  if (res.errno === 0) {
						     this.taskList = res.data.taskList;
						  } else {
						    console.log(res);
						  }
						 }
						
						).catch((err) => {
						  console.log(err);
						});
					},
				}
	}
</script>

<style lang="scss" scoped>
	.content{
		margin: auto;
		width: 88%;
	}
	
		.u-node {
			width: 44rpx;
			height: 44rpx;
			border-radius: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #d0d0d0;
		}
		
		.u-order-title {
			color: #333333;
			font-weight: bold;
			font-size: 32rpx;
		}
		
		.u-order-desc {
			color: rgb(150, 150, 150);
			font-size: 28rpx;
			margin-bottom: 6rpx;
		}
		
		.u-order-time {
			color: rgb(200, 200, 200);
			font-size: 26rpx;
		}
</style>