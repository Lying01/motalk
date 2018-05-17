let app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showTopTips: false,
    userInfo:"",
    radioItems: [
      { name: '男', value: '0' },
      { name: '女', value: '1', checked: true }
    ],
    date: "2018-05-15",
    isAgree: false
  },

  //性别选项
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }
    this.setData({
      radioItems: radioItems
    });
  },

  // 生日
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  
  showToast_link: function () { 
    wx.showLoading({
      title: '加载中',
    });
  },
  // 保存
  bindGetUserInfo: function(e){
    console.log(e.detail.userInfo);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
    if (e.detail.userInfo != undefined){
      wx.switchTab({
        url: '../course/course',
      })
    }
  }

});