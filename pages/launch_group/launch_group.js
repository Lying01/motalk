// pages/course_details/course_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teachers:["小军","大军","大兵","小兵","小菌"],
    teacherIndex:0,

    checkboxItems: [
      { name: '周一 19：00', value: '1' },
      { name: '周二 19：00', value: '2' },
      { name: '周三 19：00', value: '3' },
      { name: '周四 19：00', value: '4' },
      { name: '周五 19：00', value: '5',checked: 'true' },
    ],
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

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    console.log(e.detail);
    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },

  bindteachersChange: function(e){
    console.log(e.detail);
    let teacherIndex = e.detail.value;
    this.setData({
      teacherIndex: teacherIndex
    })
  },

  //更多章节
  syllabus_more: function () {
    wx.navigateTo({
      url: '../syllabus/syllabus'
    })
  }
})