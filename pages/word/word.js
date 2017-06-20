Page({
  data: {
    list: [],
    maxtime: '',
    loadingHidden: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    //加载最新
    this.requestData('newlist');
  },

  /**
   * 上拉刷新
   */
  bindscrolltoupper: function () {
    //加载最新
    console.log('上啦刷新')
    this.requestData('newlist');
  },

  /**
   * 加载更多
   */
  bindscrolltolower: function () {
    console.log('到底部刷新')
    //加载更多
    this.requestData('list');
  },

  /**
   * 请求数据
   */
  requestData: function (a) {
    console.log(a)
    var that = this;
    // console.log(that.data.maxtime)
    wx.request({
      url: 'http://api.budejie.com/api/api_open.php',
      data: {
        a: a,
        c: 'data',
        maxtime: that.data.maxtime,
        type: '29',
      },
      method: 'GET',
      success: function (res) {
        console.log(res)
        console.log('上一页', that.data.list)
        that.setData({
          // 拼接数组
          list: that.data.list.concat(res.data.list),
          loadingHidden: true,
          maxtime: res.data.info.maxtime
        })
          console.log(that.data.list.concat(res.data.list))
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})