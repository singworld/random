<script>
	import * as user from './util/user.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			user.checkLogin().catch((e) => {
				      user.loginByWeixin().then(res => {
						  
						  console.log("resvue",res)
				//         app.globalData.hasLogin = true;
				
				//         wx.navigateBack({
				//           delta: 1
				//         })
				      }).catch((err) => {
				        app.globalData.hasLogin = false;
				        util.showErrorToast('微信登录失败');
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
