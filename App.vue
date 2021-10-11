<script>
	import * as user from './util/user.js'
	var app = getApp();
	export default {
		 globalData: {  
		            hasLogin: false 
		        },  
		onLaunch: function() {
			
			const updateManager = uni.getUpdateManager();
			
			updateManager.onCheckForUpdate(function (res) {
			  // 请求完新版本信息的回调
			  console.log("更新",res.hasUpdate);
			});
			
			updateManager.onUpdateReady(function (res) {
			  uni.showModal({
			    title: '更新提示',
			    content: '新版本已经准备好，是否重启应用？',
			    success(res) {
			      if (res.confirm) {
			        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			        updateManager.applyUpdate();
			      }
			    }
			  });
			
			});
			
			updateManager.onUpdateFailed(function (res) {
			  console.log('新版更新失败',res)
			});
			
			console.log('App Launch')
			
			// uni.clearStorageSync();
			// user.checkLogin().catch((e) => {
			// 	      user.loginByWeixin().then(res => {
						  
			// 			  console.log("resvue",res)
			// 	          this.globalData.hasLogin = true;
			// 			  console.log("globalData.hasLogin",this.globalData.hasLogin)
				
			// 	//         wx.navigateBack({
			// 	//           delta: 1
			// 	//         })
			// 	      }).catch((err) => {

			// 	        this.globalData.hasLogin = false;
			// 	        uni.showErrorToast('微信登录失败');
			// 	      });
				
				
				
			//       }).catch((err) => {
			//         uni.showToast({
			//             title: '失败',
			//             duration: 2000
			//         });
			//       });
			
		
			
			
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
		
		
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
</style>
