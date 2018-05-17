// pages/mymotalk/mypower/mypower.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'course1',
        name: 'course1',
        open: false,
        isChecked: false,
        pages: ['蓝思值：200', '口语能力：30']
      },
      {
        id: 'course2',
        name: 'course2',
        open: false,
        isChecked: false,
        pages: ['蓝思值：200', '口语能力：30']
      },
      {
        id: 'course3',
        name: 'course3',
        open: false,
        isChecked: false,
        pages: ['蓝思值：200', '口语能力：30']
      },
      {
        id: 'course4',
        name: 'course4',
        open: false,
        isChecked: false,
        pages: ['蓝思值：200', '口语能力：30']
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
  }
})