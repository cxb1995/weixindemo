//index.js
//获取应用实例
var app = getApp()
var detail = '../showimg/showimg'
var job = '../job/job'
Page({
  data: { date1:[
	{"name":"2046","url1":"http://img.hairbobo.com/uploadimg/16/08/14/160814225310555.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322074312575.jpg","num":"58","city":"北京","type":"1","uid":"1"},
	{"name":"2046","url1":"http://img.hairbobo.com/uploadimg/16/08/14/160814225310555.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322073832180.jpg","num":"35","city":"北京","type":"1","uid":"2"},
	{"name":"2046","url1":"http://img.hairbobo.com/uploadimg/16/08/14/160814225310555.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322073729234.jpg","num":"28","city":"北京","type":"1","uid":"3"},
	{"name":"木良老师V信124077994","url1":"http://img.hairbobo.com/uploadimg/16/11/21/161121225710153.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/21/p170321191740105.jpg","num":"26","city":"广州","type":"1","uid":"4"},
	{"name":"秀琇","url1":"http://img.hairbobo.com/uploadimg/16/09/22/160922150455579.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322170155860.jpg","num":"23","city":"大连","type":"1","uid":"5"},
	{"name":"2046","url1":"http://img.hairbobo.com/uploadimg/16/08/14/160814225310555.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322073910166.jpg","num":"22","city":"北京","type":"1","uid":"6"},
	{"name":"user814500","url1":"http://img.hairbobo.com/images/register_hairdresser/nan_fxs.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322110647298.jpg","num":"22","city":"长春","type":"0","uid":"7"},
 	
	{"name":"沙也","url1":"http://img.hairbobo.com/uploadimg/16/07/08/160708185958498.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322162522500.jpg","num":"18","city":"温州","type":"1","uid":"8"},
	{"name":"宋灿","url1":"http://img.hairbobo.com/uploadimg/15/12/02/151202155628638.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322150743607.jpg","num":"18","city":"宁波","type":"1","uid":"9"},
	{"name":"高木_13062699585","url1":"http://img.hairbobo.com/uploadimg/16/01/13/160113012704773.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/21/p170321235154611.jpg","num":"17","city":"昆明","type":"1","uid":"10"},	
	{"name":"安妮_老师","url1":"http://img.hairbobo.com/uploadimg/16/08/27/160827203248787.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322232729366.jpg","num":"17","city":"郴州","type":"0","uid":"11"},
	{"name":"风格发型设计师阿康","url1":"http://img.hairbobo.com/uploadimg/16/03/08/160308113303053.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/23/p170323095018111.jpg","num":"16","city":"石家庄","type":"1","uid":"12"},
	{"name":"造型师_周舟","url1":"http://img.hairbobo.com/uploadimg/15/10/31/151031112507459.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/23/p170323113537608.jpg","num":"16","city":"湖州","type":"1","uid":"13"},
	{"name":"2046","url1":"http://img.hairbobo.com/uploadimg/16/08/14/160814225310555.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322074117478.jpg","num":"16","city":"北京","type":"1","uid":"14"},
	{"name":"2046","url1":"http://img.hairbobo.com/uploadimg/16/08/14/160814225310555.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322073319463.jpg","num":"15","city":"北京","type":"1","uid":"15"},
	{"name":"2046","url1":"http://img.hairbobo.com/uploadimg/16/08/14/160814225310555.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322073639002.jpg","num":"15","city":"北京","type":"1","uid":"16"},
	{"name":"2046","url1":"http://img.hairbobo.com/uploadimg/16/08/14/160814225310555.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322074029383.jpg","num":"15","city":"北京","type":"1","uid":"17"},
		{"name":"唐伟","url1":"http://img.hairbobo.com/uploadimg/15/12/29/151229152246587.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322102900660.jpg","num":"15","city":"遂宁","type":"1","uid":"18"},
	{"name":"MJ明星沙龙","url1":"http://img.hairbobo.com/uploadimg/16/10/06/161006210736680.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/23/p170323132800615.jpg","num":"15","city":"宁波","type":"1","uid":"19"},
	{"name":"2046","url1":"http://img.hairbobo.com/uploadimg/16/08/14/160814225310555.jpg","url2":"http://img.hairbobo.com/uploadimg/17/03/22/p170322073022902.jpg","num":"14","city":"北京","type":"1","uid":"20"}
	],
  url:'../../image/head.jpg',
  latitude:'',
  longitude:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
	lookBigPicture: function (e) {
    // console.log(e);
    //图片url 对应wxml中data-url="{{item.url}}"
    var url = e.currentTarget.dataset.url;
    // console.log(url)
    //获取图片高度 对应wxml中data-height="{{item.height}}"
    // var height = e.currentTarget.dataset.height;
    //获取图片高度 对应wxml中data-width="{{item.width}}"
    // var width = e.currentTarget.dataset.width;
    // 传参方式向GET请求
    // wx.navigateTo({
    //   url: detail + '?' + 'url=' + url,
    //   success: function (res) {
    //     console.log(res)
    //   },
    //   fail: function (err) {
    //     console.log(err)
    //   },
    // })

    wx.previewImage({
      current: url, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: [url],
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
   linknews:function(){
              console.log(1)
                  wx.chooseAddress({
                success: function (res) {
                  console.log(res.userName)
                  console.log(res.postalCode)
                  console.log(res.provinceName)
                  console.log(res.cityName)
                  console.log(res.countyName)
                  console.log(res.detailInfo)
                  console.log(res.nationalCode)
                  console.log(res.telNumber)
              }
})
            },
    addpic:function(){
       var _this = this;
        wx.chooseImage({
          count: 1, // 最多可以选择的图片张数，默认9
          sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
          sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
          success: function(res){
            // success
            var tempFilePaths = res.tempFilePaths
             _this.setData({  
              url: tempFilePaths  
        }) 
          },
          fail: function() {},
          complete: function() {}
        })
        },
        showmap:function(){
           var _this = this;
          wx.getLocation({
            type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
            success: function(res){
              var latitude = res.latitude
              var longitude = res.longitude
              var speed = res.speed
              var accuracy = res.accuracy
              // console.log(res)
              // success
                _this.setData({  
               latitude:latitude,
               longitude:longitude 
            //      wx.openLocation({
            // latitude: latitude,
            // longitude: longitude,
            // scale: 15
            //  })
         }) 
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
//               wx.getSystemInfo({
//   success: function(res) {
//     console.log(res.model)
//     console.log(res.pixelRatio)
//     console.log(res.windowWidth)
//     console.log(res.windowHeight)
//     console.log(res.language)
//     console.log(res.version)
//     console.log(res.platform)
//   }
// })
        }

})
