// pages/shouye_3/shouye_3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sj: [
      {
        img: "../../images/sj1.png",
        t1: "何耀辉",
        t2: "Nike签约教练，女子健康运动倡导者，擅长 NTC/瑜伽，坐标北京。"
      },
      {
        img: "../../images/sj2.png",
        t1: "周飞",
        t2: "NTC签约教练，擅长跑步/体能训练/减脂塑形/舞蹈有氧训练课，坐标广州。"
      },
      {
        img: "../../images/sj3.png",
        t1: "陈曦",
        t2: "NTC签约教练，擅长NTC，减脂塑型、运动损伤康复、长跑专项体能训练，坐标北京。"
      },
      {
        img: "../../images/sj4.png",
        t1: "王立鑫",
        t2: "NTC签约教练，擅长体能训练/瑜伽/营养搭配/体态调整，坐标上海。"
      },
      {
        img: "../../images/sj5.png",
        t1: "王正军",
        t2: "NTC签约教练，擅长体能训练/团队训练，坐标上海。"
      },
      {
        img: "../../images/sj6.png",
        t1: "宋美美",
        t2: "NTC签约教练，擅长 NTC/舞蹈/身心类课程/有氧训练课/马拉松，坐标广州。"
      },
      {
        img: "../../images/sj7.png",
        t1: "钱昂",
        t2: "NTC签约教练，艺人私教。专长于NTC/体能/自重训练，坐标北京。"
      },
      {
        img: "../../images/sj8.png",
        t1: "于洋",
        t2: "NTC签约教练，擅长NTC/核心/功能性训练/瑜伽，坐标上海。"
      },
    ]
  },
  bindSj: function () {
    wx.navigateTo({
      url: '../shouye_3_1/shouye_3_1',
    })
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
    wx.showModal({
      showCancel: false,
      confirmText: '知道了',
      title: '训练说明',
      content: '这是一个由Nike专业教练组成的私教训练专区，你可以根据自己的训练偏重,选择一-位合适的教练开启私人专业训练。想要查看更多训练内容及专业指导，点击教练头像即可。',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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