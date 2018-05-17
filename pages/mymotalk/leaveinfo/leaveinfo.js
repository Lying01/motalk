// pages/mymotalk/leaveinfo/leaveinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'leave1',
        name: '请假申请1',
        open: false,
        isChecked: false, 
        pages: ['请假时间：2018-5-29 周二','请假原因：ABC','请假结果：成功']
      },
      {
        id: 'leave2',
        name: '请假申请2',
        open: false,
        isChecked: false,
        pages: ['请假时间：2018-5-29 周二', '请假原因：ABC','请假结果：请假中']
      },
      {
        id: 'leave3',
        name: '请假申请3',
        open: false,
        isChecked: false,
        pages: ['请假时间：2018-5-29 周二', '请假原因：ABC','请假结果：请假中']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    var isChecked = this.data.isChecked;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
        list[i].isChecked = !list[i].isChecked
      } else {
        list[i].open = false
        list[i].isChecked = false
      }
    }
    this.setData({
      list: list
    });
  },
  toleave:function(e){
    wx.navigateTo({
      url: '../appleave/appleave',
    })
  }
})