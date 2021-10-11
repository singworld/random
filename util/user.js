import api from "./api.js"
import util from "./util.js"

/**
 * 判断用户是否登录
 */
function checkLogin () {
  return new Promise(function(resolve, reject) {
	  // console.log(uni.getStorageSync('userInfo') , uni.getStorageSync('token'))
	  
    if (uni.getStorageSync('token')) {
		console.log("判断用户登录")
      checkSession().then(() => {
        resolve(true);
      }).catch(() => {
        reject(false);
      });
    } else {
      reject(false);
    }
  });
}

/**
 * Promise封装wx.checkSession
 */
function checkSession() {
  return new Promise(function(resolve, reject) {
    uni.checkSession({
      success: function() {
        resolve(true);
      },
      fail: function() {
        reject(false);
      }
    })
  });
}


/**
 * 调用微信登录
 */
function loginByWeixin() {

  return new Promise(function(resolve, reject) {
    return login().then((res) => {
      //登录远程服务器
      util.request(api.AuthLoginByWeixin, {
        code: res.code,
      }, 'POST').then(res => {
        if (res.errno === 0) {
          //存储用户信息
          uni.setStorageSync('token', res.data.token);
		  uni.setStorageSync('userInfo', res.data.userInfo);
          resolve(res);
        } else {
          reject(res);
        }
       }
	  
	  ).catch((err) => {
        reject(err);
      });
	  
	  
    }).catch((err) => {
      reject(err);
    })
  });
}


/**
 * Promise封装wx.login
 */
function login() {
  return new Promise(function(resolve, reject) {
    uni.login({
      success: function(res) {
        if (res.code) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function(err) {
        reject(err);
      }
    });
  });
}

export {
	checkLogin,
	loginByWeixin,
}