// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    g_course:["全部","G1","G2","G3","G4","G5","G6","G7","G8","G9"],
    index:0,
    type_courses:["全部","原版教材类型课程","阅读/写作类型课程","短期特色类型课程"],
    typeIndex:0
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
  
  },


  // G系列选择  蓝思值等级选择
  g_coursechange: function(e){
    this.setData({
      index: e.detail.value
    })
  },

  // 课程类型选择
  type_course: function(e){
    this.setData({
      typeIndex: e.detail.value
    })
  },

  tocoursedetails: function(){
    wx.navigateTo({
      url: '../course_details/course_details',
    })
  }
})