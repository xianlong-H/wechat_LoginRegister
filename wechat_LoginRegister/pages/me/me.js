// pages/me/me.js
Page({
  data: {
  loginOK: false
  },
  //去登陆页
  denglu() {
  wx.navigateTo({
   url: '/pages/login/login',
  })
  },
  //去注册页
  zhuce() {
  wx.navigateTo({
   url: '/pages/index/index',
  })
  },
  onShow() {
  let user = wx.getStorageSync('user')
  if (user && user.name) {
   this.setData({
    loginOK: true,
    name: user.name
   })
  } else {
   this.setData({
    loginOK: false
   })
  }
  },
  
  //退出登陆
  tuichu() {
  wx.setStorageSync('user', null)
  let user = wx.getStorageSync('user')
  if (user && user.name) {
   this.setData({
    loginOK: true,
    name: user.name
   })
  } else {
   this.setData({
    loginOK: false
   })
  }
  }
  })