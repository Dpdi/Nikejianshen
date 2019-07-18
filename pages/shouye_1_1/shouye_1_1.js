// pages/shouye_1_1/shouye_1_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView: false,
    activeNames: ['1'],
    tian:'',
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    }
  },
  bindWode: function () {
    wx.switchTab({
      url: '../wode/wode',
    })
  },
  show: function () {
    　　this.setData({
      showView: !this.data.showView
    　　})
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  tian1:function(){
    this.setData({
      tian:':2-3天'
    })
  },
  tian2: function () {
    this.setData({
      tian: ':3-4天'
    })
  },
  tian3: function () {
    this.setData({
      tian: ':4-5天'
    })
  },
  tian4: function () {
    this.setData({
      tian: ':5-6天'
    })
  },
  shi1: function () {
    this.setData({
      shi: ':每周0-1小时'
    })
  },
  shi2: function () {
    this.setData({
      shi: ':每周2-4小时'
    })
  },
  shi3: function () {
    this.setData({
      shi: ':每周5-8小时'
    })
  },
  shi4: function () {
    this.setData({
      shi: ':每周9+小时'
    })
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail.value
    });
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