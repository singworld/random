const WxApiRoot = 'https://wx.jianxiaoxin.com/wx/'
// const WxApiRoot = 'http://192.168.0.114:8080/wx/'
// const WxApiRoot = 'http://127.0.0.1:8080/wx/'




export default {
	 AuthLoginByWeixin : WxApiRoot + 'auth/login_by_tt' ,//微信登录
	 SaveUserInfoApi : WxApiRoot + 'auth/saveUserInfo', //保存头像
	 TaskIndex : WxApiRoot + 'home/taskindex', //获取任务
	 Upload : WxApiRoot + 'home/upload', //上传打卡图片upload
	 GetTaskArchive : WxApiRoot + 'home/getTaskArchive',  //获取归档的日志
	 SaveTtlist : WxApiRoot + 'home/saveTtlist',  //保持ttlist
	 GetConfig : WxApiRoot + 'home/getConfig', //获取配置
	 ModifyConfig : WxApiRoot + 'home/modifyConfig', //保持配置
	 AddConfig:WxApiRoot + 'home/addConfig', 
	 GetGoods:WxApiRoot + 'home/getGoods', 
	 BuyGoods:WxApiRoot + 'home/buyGoods',
	 GetGift:WxApiRoot + 'home/getGift',
	 UseGift:WxApiRoot + 'home/useGift',
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
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
										text: '选择',
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