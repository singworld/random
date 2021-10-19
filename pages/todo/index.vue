<template>
	<view>
	<view class="content">
		  <view>
		    <LuckyWheel
		      ref="luckyWheel"
		      width="600rpx"
		      height="600rpx"
		      :blocks="blocks"
		      :prizes="prizes"
		      :buttons="buttons"
		      :defaultStyle="defaultStyle"
		      @start="startCallBack"
		      @end="endCallBack"
		    />
		  </view>
		  
		 <!-- <view>
			  <view :index="index" 
					v-for="(item, index) in configList" :key="item.id">
					<u-input v-model="item.name" border="true" />
					<u-button @click="modfiy(item.id,item.name)" shape="square" type="primary">修改</u-button>
			   </view>
		   </view> -->
		   
	<view class="">
		<text class="textleft">名称</text> <text class="textright">权重</text>
		<u-form  ref="uForm">
			<u-form-item  :index="index" 
					v-for="(item, index) in configList" :key="item.id">
				<u-input v-model="item.name" /> 
				<u-number-box slot="right" v-model="item.weights" @change="item.weights++"></u-number-box>
			</u-form-item>
		</u-form>
		<u-button @click="submit">保存配置</u-button>
	</view>
	
		   <u-loading :show="showload" mode="flower"></u-loading>
		  <!-- <u-modal v-model="show" :content="content" z-index="9999999999999"></u-modal> -->
		<u-tabbar v-model="current" :list="TabbarList" :mid-button="true" ></u-tabbar>
	</view>
	<view>
	<u-modal negative-top="-300rpx" v-model="show" :zoom="false" show-cancel-button="true" z-index="9999999999999"></u-modal>
	</view>
	</view>
</template>

<script>
	import api from "../../util/api.js"
	import util from "../../util/util.js"
	import LuckyWheel from "../../components/uni-luck-draw/lucky-wheel"
	export default {
		components: { LuckyWheel },
		data() {
			return {
				configList:[],
				value:"hello",
				total:1,
				show: false,
				showload:false,
				content: '点确认添加到任务列表，取消重新选择!',
				TabbarList:null,
				blocks: [
				          { padding: '13px', background: '#FF99CC' }
				        ],
				buttons: [
				  { radius: '50px', background: '#d64737' },
				  { radius: '45px', background: '#fff' },
				  { radius: '41px', background: '#f6c66f', pointer: true },
				  {
					radius: '35px', background: '#ffdea0',
					fonts: [{ text: '简单\n选择', fontSize: '18px', top: -18 }]
				  }
				],
			    prizes: [],
				defaultStyle: {
				  fontColor: '#FF99CC',
				  fontSize: '14px'
				},
			};
		},
		onLoad() {
			this.TabbarList = api.TabbarList;
			this.getTtConfig()
		},
		onReady() {
				// this.$refs.uForm.setRules(this.rules);
			},
		methods: {
			modfiy(id,name){
				console.log("ididi",name)
				let data = {
					"id":id,
					"name":name
				}
				this.modifyConfig(data)
			},
			submit(formName){
				console.log("formName",this.configList)
				// add or update 
				util.request(api.AddOrUpdate,this.configList, 'POST').then(res => {
					console.log("save",res)
				  if (res.errno === 0) {
					  //保存成功
					  uni.showToast({
					      title: '保存成功',
					      duration: 2000
					  });
					  this.bulidMap()
				  } else {
				    console.log(res);
				  }
				 }
				
				).catch((err) => {
				  console.log(err);
				});
			},
			

			modifyConfig(data){
				util.request(api.ModifyConfig, {
					"id":data.id,
					"name":data.name
				}
				, 'POST').then(res => {
					console.log("save",res)
				  if (res.errno === 0) {
					  this.getTtConfig()
				    //存储用户信息
				    // wx.setStorageSync('userInfo', res.data.userInfo);
				  } else {
				    console.log(res);
				  }
				 }
				
				).catch((err) => {
				  console.log(err);
				});
			},
			  
			  
			  random_weight(){
					 let total = this.total  
				     let ra = Math.random() * total >> 0   
				  
				      let curr_sum = 0
				      let ret = 0
				      let keys = [...Array(6).keys()]       
				      for(let k in keys) {
							  curr_sum += this.configList[k].weights
					          if (ra <= curr_sum){
									  ret = k
						              break
								}         
					             
					  }
				         
				      return ret
			  },
			      
			
			 // 点击抽奖按钮触发回调
			      startCallBack () {
			        // 先开始旋转
			        this.$refs.luckyWheel.play()
			        // 使用定时器来模拟请求接口
			        setTimeout(() => {
			          // 3s后得到中奖索引
			          let index = this.random_weight()
			          // 缓慢停止游戏
			          this.$refs.luckyWheel.stop(index)
			        }, 500)
			      },
			      // 抽奖结束触发回调
			      endCallBack (prize) {
			        // 奖品详情
			        console.log(prize)
					uni.showModal({
					    title: '提示',
					    content: '确认添加，取消重转',
					    success:  (res) => {
					        if (res.confirm) {
					            console.log('用户点击确定');
								
								this.saveTtlist(prize)
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
					
					
			      },
				  getTtConfig(){
					  
					  
				  	util.request(api.GetConfig).then(res => {
				  		console.log("save",res)
				  	  if (res.errno === 0) {
				  	     let configList  = res.data.configList;
						 // if(configList.length===0){
							//  // this.addConfig()
							//  return;
						 // }
						 
						 this.configList =configList
						 this.bulidMap();
						 
				  	  } else {
				  	    console.log(res);
				  	  }
				  	 }
				  	
				  	).catch((err) => {
				  	  console.log(err);
				  	});
				  },
				  
				  bulidMap(){
					  const prizes = []
					  
					  if(!this.configList || this.configList.length<1){
						  
						  for (var i = 0; i <6; i++) {
							this.configList.push({id:i,name:"第"+(i+1)+"个任务",weights:1})
						  }
						  
					  }
					  
					  this.total = this.configList.reduce((sum, e) => sum + Number(e.weights || 0), 0)
					  
					  this.configList.forEach((item, index) => {
					  							let name= item.name;
					    prizes.push({
					      title: ""+name,
					      background: index % 2 ? '#f9e3bb' : '#f8d384',
					      fonts: [{ text: name, top: '10%' }],
					      imgs:[{ src: require(`../../static/wz.png`), width: '30%', top: '35%' }],
					    })
					  })
					  this.prizes = prizes
				  },
				  
				  
				  //保持头像
				  addConfig(){
					  this.showload =true
				  	util.request(api.AddConfig).then(res => {
				  	  if (res.errno === 0) {
						  this.getTtConfig()
						  this.this.showload =false
				  	    //存储用户信息
				  	    // wx.setStorageSync('userInfo', res.data.userInfo);
				  	  } else {
				  	    console.log(res);
				  	  }
				  	 }
				  	
				  	).catch((err) => {
				  	  console.log(err);
				  	});
				  },
				  
				  //ttlist
				  saveTtlist(res){
					 let ttList ={
					  						  name: res.title,
					  						  icon: res.imgs
					  }
					  console.log("ttList",ttList)
					  let title = res.title
				  	util.request(api.SaveTtlist, {
					  name:title,
					  title:title
				  	}, 'POST').then(res => {
				  		console.log("save",res)
				  	  if (res.errno === 0) {
						   uni.switchTab({
							   url: '/pages/index/index',
							   success:(res) =>{
								   let page = getCurrentPages().pop()
								   if(page == undefined || page == null) return
								   page.onLoad()
							   }
						   });
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

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
	}
	
	.textleft{
		margin: auto;
		font-size: 38rpx;
		color: $u-content-color;
		
	}
	
	.textright{
		float: right;
		margin: auto;
		font-size: 38rpx;
		font-weight: 30rpx;
		color: $u-content-color;
	}

</style>
