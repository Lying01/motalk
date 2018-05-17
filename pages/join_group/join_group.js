// pages/course_details/course_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasTime:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    let overTime = new Date("2018-06-01").getTime();
    setInterval(function () {
      let nowTime = new Date().getTime();
      let hasTime = (overTime - nowTime)
      let days = Math.floor(hasTime / 1000 / 60 / 60 / 24);
      let hous = Math.floor(hasTime / 1000 / 60 / 60 % 24);
      let mins = Math.floor(hasTime / 1000 / 60 % 60);
      let seconds = Math.ceil(hasTime / 1000 % 60);
      if (hous < 10) {
        hous = "0" + hous;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (mins < 10) {
        mins = "0" + mins;
      }
      let str = days + "天 " + hous + ":" + mins + ":" + seconds;
      self.setData({
        hasTime:str
      })
      // console.log();
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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