<template>
	<view class="wrap">
		<u-button >剩余学分：{{userInfo.points}}</u-button>
		<u-waterfall v-model="ttGoodList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<u-lazy-load @click="buy(item.id)" threshold="-450" height="100" img-mode="aspectFit" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.name}}
						<text class="demo-price">
												{{item.price}}积分
						</text>
					</view>
					
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
					<u-lazy-load @click="buy(item.id)" threshold="-450" height="100" img-mode="aspectFit" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.name}}
						<text class="demo-price">
						{{item.price}}积分
						</text>
					</view>
					
				</view>
			</template> 
		</u-waterfall>
		
		<template>
			<u-subsection active-color="#ff9900" :list="list" :current="current" @change="sectionChange"></u-subsection>
		</template>
		
		<view>
		<u-swipe-action  :index="index" :show="item.show"
			v-for="(item, index) in giftList" :key="item.id" 
			@click="click" @open="open"
			:options="options" :disabled="current" bg-color="#FF99CC"
		>
			<view class="item u-border-bottom">
				<view class="title-wrap">
					<text class="title u-line-2">{{ item.name }}</text>
				</view>
				
			</view>
		</u-swipe-action>
		</view>
		
	</view>
</template>

<script>
	import util from "../../util/util.js"
	import api from "../../util/api.js"
	export default {
		data() {
					return {
						ttGoodList: null,
						userInfo:{},
						list: [
											{
												name: '未使用'
											}, 
											{
												name: '已使用'
											}, 
											
										],
						current: 0,
						giftList:[
							{
								id:1,
								name: '陪聊券',
								show:0
							},
							{
								id:2,
								name: '陪玩券',
								show:0
							},
							{
								id:3,
								name: '学习券',
								show:0
							},
						],
						options: [
							{
								text: '使用',
								style: {
									backgroundColor: '#007aff'
								}
							},						
						],
					}
				},
				onLoad() {
					this.getGoods()
					this.getGift()
					
				},
				onReachBottom() {
					
				},
				methods: {
					useGift(id){
						util.request(api.UseGift+"?id="+id,
						  {}
						, 'POST').then(res => {
							console.log("save",res)
						  if (res.errno === 0) {
						    //
							this.getGift()
						  } else {
						    console.log(res);
							uni.showToast({
							    title: res.errmsg,
							    duration: 2000
							});
						  }
						 }
						
						).catch((err) => {
						  console.log(err);
						});
					},
					getGoods(){
						util.request(api.GetGoods).then(res => {
							console.log("GetGoods",res)
						  if (res.errno === 0) {
							  this.ttGoodList = res.data.ttGoodList;
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
					buy(id){
						console.log(id)
						uni.showModal({
						    title: '提示',
						    content: '确认兑换吗？',
						    success:  (res) => {
						        if (res.confirm) {
						            console.log('用户点击确定');
									this.buyGoods(id)
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
						
					},
					buyGoods(id){
						util.request(api.BuyGoods+"?id="+id, 
						  {}
						, 'POST').then(res => {
							console.log("save",res)
						  if (res.errno === 0) {
						    //
							this.getGift()
						  } else {
						    console.log(res);
							uni.showToast({
							    title: res.errmsg,
							    duration: 2000
							});
						  }
						 }
						
						).catch((err) => {
						  console.log(err);
						});
					},
					
					sectionChange(index) {
						this.current = index;
						//获取列表
						this.getGift();
					},
					getGift(){
						util.request(api.GetGift+"?status="+this.current).then(res => {
						  if (res.errno === 0) {
							  this.giftList = res.data.giftList;
							  this.userInfo = res.data.userInfo
							  
						  } else {
						    console.log(res);
						  }
						 }
						
						).catch((err) => {
						  console.log(err);
						});
					},
					
					
					click(index, flag) {
						
						console.log("使用了")
						this.useGift(this.giftList[index].id)
						// if(flag == 1) {
						// 	this.taskList.splice(index, 1);
						// 	this.$u.toast(`删除了第${index}个cell`);
						// } else {
						// 	this.activeIndex = index
						// 	this.activeId = this.taskList[index].id
						// 	this.show=true
						// }
					},
					// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
					open(index) {
						// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
						// 原本为'false'，再次设置为'false'会无效
						this.giftList[index].show = true;
						this.giftList.map((val, idx) => {
							if(index != idx) this.giftList[idx].show = false;
						})
						
					}
				}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style lang="scss" scoped>
	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}
	
	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}
	
	.demo-image {
		width: 100%;
		border-radius: 4px;
	}
	
	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}
	
	.demo-tag {
		display: flex;
		margin-top: 5px;
	}
	
	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}
	
	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}
	
	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
		float: right;
	}
	
	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
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
		color: #FFFCF3;
		margin-top: 20rpx;
	}
	
</style>
