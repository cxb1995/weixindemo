
Page({
  data:{
    latitude: " ",
    longitude: " "
  },
  onLoad:function(options){
    var _this = this
      wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function(res) {
            _this.setData({
                latitude: res.latitude,
                longitude:res.longitude
         })
      }
      })
  },
  onReady:function(){
    // 页面渲染完成
    longitude: 113.3245211
    latitude : 23.10229
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  mymapnow:function(){
    var _this = this
    wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function(res) {
            _this.setData({
                latitude: res.latitude,
                longitude:res.longitude
         })
      }
      })
    }
})
