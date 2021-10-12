const WxApiRoot = 'http://127.0.0.1:8080/wx/'



export default {
	 AuthLoginByWeixin : WxApiRoot + 'auth/login_by_tt' ,//微信登录
	 SaveUserInfoApi : WxApiRoot + 'auth/saveUserInfo', //保存头像
	 TaskIndex : WxApiRoot + 'home/taskindex', //获取任务
	 Upload : WxApiRoot + 'home/upload', //上传打卡图片upload
	 GetTaskArchive : WxApiRoot + 'home/getTaskArchive',  //获取归档的日志
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 TabbarList:[{
										iconPath: "home",
										selectedIconPath: "home-fill",
										text: '我的任务',
										// count: 2,
										// isDot: true,
										customIcon: false,
										pagePath: '/pages/index/index',
									},
									{
										iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
										selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
										text: '发布',
										midButton: true,
										customIcon: false,
										pagePath: '/pages/todo/index',
									},
									{
										iconPath: "account",
										selectedIconPath: "account-fill",
										text: '打卡记录',
										// count: 23,
										// isDot: false,
										customIcon: false,
										pagePath: '/pages/center/index',
									},
								],
	 
}