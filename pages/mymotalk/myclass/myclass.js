// pages/mymotalk/myclass/myclass.js
//获取应用实例  
var app = getApp()
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["正在就读", "历史就读"],
    activeIndex: "0",
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  seeDetail:function(e){
    wx.navigateTo({
      url: '../classdetail/classdetail',
    })
  }
}); 