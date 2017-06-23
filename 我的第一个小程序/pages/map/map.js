Page({
  data: {
    markers: [{
      iconPath: "/image/map.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
   onLoad:function(options){
    // 生命周期函数--监听页面加载
    // console.log(options)
    var lat = options.lat;
    console.log(lat)
    var lont = options.lont;
    console.log(lont)
    // var mar = this.map
    // mar.markers[0].latitude = lat
    // mar.markers[0].longitude = lont
    // var a = this.markers[0].latitude
    // var b = this.markers[0].longitude
      var that = this;
      that.setData({
        "markers[0].latitude":lat,
        "markers[0].longitude":lont
      })
  }
})