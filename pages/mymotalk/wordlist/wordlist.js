// pages/mymotalk/wordlist/wordlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'a',
        name: 'a',
        open: false,
        isChecked: false,
        pages: ['about', 'at', 'AOI', 'after', 'alone']
      },
      {
        id: 'b',
        name: 'b',
        open: false,
        isChecked: false,
        pages: ['bit', 'badge', 'boy', 'blood', 'before', 'bog','bout']
      },
      {
        id: 'd',
        name: 'd',
        open: false,
        isChecked: false,
        pages: ['dog', 'dialog', 'ditto', 'define', 'dream']
      },
      {
        id: 'f',
        name: 'f',
        open: false,
        isChecked: false,
        pages: ['find', 'foot']
      },
      {
        id: 'g',
        name: 'g',
        open: false,
        isChecked: false,
        pages: ['good']
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