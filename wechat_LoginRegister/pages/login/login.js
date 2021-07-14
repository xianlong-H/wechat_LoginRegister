// pages/login/login.js
Page({
  data: {
  zhanghao: '',
  mima: ''
  },
  //获取输入的账号
  getZhanghao(event) {
  //console.log('账号', event.detail.value)
  this.setData({
   zhanghao: event.detail.value
  })
  
  },
  //获取输入的密码
  getMima(event) {
  // console.log('密码', event.detail.value)
  this.setData({
   mima: event.detail.value
  })
  },
  //点击登陆
  login() {
  let zhanghao = this.data.zhanghao
  let mima = this.data.mima
  console.log('账号', zhanghao, '密码', mima)
  if (zhanghao.length < 4) {
   wx.showToast({
    icon: 'none',
    title: '账号至少4位',
   })
   return
  }
  if (mima.length < 4) {
   wx.showToast({
    icon: 'none',
    title: '账号至少4位',
   })
   return
  }
  
  //登陆
  wx.cloud.database().collection('user').where({
   zhanghao: zhanghao
  }).get({
   success(res) {
    console.log("获取数据成功", res)
    let user = res.data[0]
    console.log("user", user)
    if (mima == user.mima) {
     console.log('登陆成功')
     wx.showToast({
      title: '登陆成功',
     })
    //  wx.navigateTo({
    //   url: '../home/home?name=' + user.name,
    //  })
     wx.navigateTo({
      url: '/pages/me/me',
     })
     //保存用户登陆状态
     wx.setStorageSync('user', user)
    } else {
     console.log('登陆失败')
     wx.showToast({
      icon: 'none',
      title: '账号或密码不正确',
     })
    }
   },
   fail(res) {
    console.log("获取数据失败", res)
   }
  })
  
  }
  })