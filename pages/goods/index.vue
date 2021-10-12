<template>
	<view class="wrap">
		<u-button @click="clear">清空列表</u-button>
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<u-lazy-load @click="buy(item.id)" threshold="-450" height="100" img-mode="aspectFit" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.title}}
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
						{{item.title}}
						<text class="demo-price">
						{{item.price}}积分
						</text>
					</view>
					
				</view>
			</template> 
		</u-waterfall>
		
		<template>
			<u-subsection active-color="#ff9900" :list="list" :current="0" @change="sectionChange"></u-subsection>
		</template>
		
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
</template>

<script>
	export default {
		data() {
					return {
						flowList: [
							{
								id:1,
								price: 35,
								title: '奶茶券',
								image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
							},
							{
								id:2,
								price: 75,
								title: '陪聊券',
								image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
							},
							{
								id:3,
								price: 35,
								title: '奶茶券',
								image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
							},
							{
								id:4,
								price: 75,
								title: '陪聊券',
								image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
							},
						],
						list: [
											{
												name: '未使用'
											}, 
											{
												name: '已使用'
											}, 
											
										],
						current: 1
					}
				},
				onLoad() {
				},
				onReachBottom() {
					
				},
				methods: {
					buy(id){
						console.log(id)
					},
					
					sectionChange(index) {
									console.log(index)
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
</style>
