// pages/mymotalk/appleave/appleave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: ""
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
})