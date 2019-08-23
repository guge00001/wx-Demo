// pages/eg02/eg02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic01: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options)//打印数据
    // 获取传过来的数据
    that.setData({
      pic01: options.pic01,//options为页面路由过程中传递的pic参数
      title01: options.title01//options为页面路由过程中传递的title参数
    })
    wx.setNavigationBarTitle({
      title: that.data.title01//页面标题为路由参数
    })

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