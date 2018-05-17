// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {}
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let timer;
    (function ifhasopsign(){
      let opsign = wx.getStorageSync('opsign') || undefined;
      if (!opsign) {
        timer = setTimeout(function(){
          ifhasopsign();
        },500)
      } else {
        clearTimeout(timer);
      }
    })();

    setTimeout(function(){
      wx.reLaunch({
        url: "../userinfo/userinfo",
      })
    },3000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation
    // animation.translateY(-10).step()
    // this.setData({
    //   animationData: animation.export()
    // })

    setTimeout(function () {
      animation.rotate(360).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
    setTimeout(function () {
      animation.translateY(10).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 2000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})