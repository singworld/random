<script>
	import * as user from './util/user.js'
	var app = getApp();
	export default {
		 globalData: {  
		            hasLogin: false 
		        },  
		onLaunch: function() {
			console.log('App Launch')
			
			user.checkLogin().catch((e) => {
				      user.loginByWeixin().then(res => {
						  
						  console.log("resvue",res)
				          this.globalData.hasLogin = true;
						  console.log("globalData.hasLogin",this.globalData.hasLogin)
				
				//         wx.navigateBack({
				//           delta: 1
				//         })
				      }).catch((err) => {

				        this.globalData.hasLogin = false;
				        uni.showErrorToast('微信登录失败');
				      });
				
				
				
			      }).catch((err) => {
			        uni.showToast({
			            title: '失败',
			            duration: 2000
			        });
			      });
			
		
			
			
			
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
