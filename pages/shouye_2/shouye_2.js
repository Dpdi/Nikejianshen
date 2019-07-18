// pages/shouye_2/shouye_2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dsxl:[
      {
        img:"../../images/dsxl1.png",
        t1:"基本燃脂",
        t2:"初级-耐力"
      },
      {
        img: "../../images/dsxl2.png",
        t1: "核心缩腹 2.0",
        t2: "初级-灵活性"
      },
      {
        img: "../../images/dsxl3.png",
        t1: "拓展空间",
        t2: "初级-灵活性"
      },
      {
        img: "../../images/dsxl4.png",
        t1: "燃烧点",
        t2: "初级-耐力"
      },
      {
        img: "../../images/dsxl5.png",
        t1: "循环刺激",
        t2: "初级-灵活性"
      },
      {
        img: "../../images/dsxl6.png",
        t1: "开启时间",
        t2: "初级-灵活性"
      }
    ]
  },
  bindGl: function () {
    wx.navigateTo({
      url: '../shouye_2_1/shouye_2_1',
    })
  },
  gdxl: function () {
    wx.showModal({
      showCancel: false,
      confirmText: '立即下载',
      content: '下载NTC,即可获得更多\r\n专业训练指导',
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

  }
})