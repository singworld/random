import api from "./api.js"
import util from "./util.js"

/**
 * 判断用户是否登录
 */
function checkLogin () {
  return new Promise(function(resolve, reject) {
    if (uni.getStorageSync('userInfo') && uni.getStorageSync('token')) {
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
	  console.log(res)
      util.request(api.AuthLoginByWeixin, {
        code: res.code,
      }, 'POST').then(res => {
		  console.log("post",res)
        if (res.errno === 0) {
          //存储用户信息
		  console.log("data",res)
          wx.setStorageSync('token', res.data.token);
          resolve(res);
        } else {
          reject(res);
        }
       }
	  
	  ).catch((err) => {
		   console.log("post23")
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