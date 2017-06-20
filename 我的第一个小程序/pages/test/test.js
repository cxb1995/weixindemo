// Page({
//   data: {
//     array: ['美国', '中国', '巴西', '日本'],
//     objectArray: [
//       {
//         id: 0,
//         name: '美国'
//       },
//       {
//         id: 1,
//         name: '中国'
//       },
//       {
//         id: 2,
//         name: '巴西'
//       },
//       {
//         id: 3,
//         name: '日本'
//       }
//     ],
//     index: 0,
//     date: '2016-09-01',
//     time: '12:01'
//   },
//   bindPickerChange: function(e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       index: e.detail.value
//     })
//   },
//   bindDateChange: function(e) {
//     this.setData({
//       date: e.detail.value
//     })
//   },
//   bindTimeChange: function(e) {
//     this.setData({
//       time: e.detail.value
//     })
//   }
// })


// Page({
//   data: {
//     markers: [{
//       iconPath: "/resources/others.png",
//       id: 0,
//       latitude: 23.099994,
//       longitude: 113.324520,
//       width: 50,
//       height: 50
//     }],
//     polyline: [{
//       points: [{
//         longitude: 113.3245211,
//         latitude: 23.10229
//       }, {
//         longitude: 113.324520,
//         latitude: 23.21229
//       }],
//       color:"#FF0000DD",
//       width: 2,
//       dottedLine: true
//     }],
//     controls: [{
//       id: 1,
//       iconPath: '/resources/location.png',
//       position: {
//         left: 0,
//         top: 300 - 50,
//         width: 50,
//         height: 50
//       },
//       clickable: true
//     }]
//   },
//   regionchange(e) {
//     console.log(e.type)
//   },
//   markertap(e) {
//     console.log(e.markerId)
//   },
//   controltap(e) {
//     console.log(e.controlId)
//   }
// })

// Page({
//   data:{
//     url: 'head.jpg',
//     height: 0,
//     width: 0
//   },
//   onLoad:function(options){
//     // 页面初始化 options为页面跳转所带来的参数
//     // console.log(options)

//     // console.log(options.url)
//     // this.setData({
//     //   url: options.url,
//     //   height: options.height,
//     //   width: options.width,
//     //   loadingHidden: true

//     // })
//   },
//   onReady:function(){
//     // 页面渲染完成
//   },
//   onShow:function(){
//     // 页面显示
//   },
//   onHide:function(){
//     // 页面隐藏
//   },
//   onUnload:function(){
//     // 页面关闭
//   }
// })


// Page({
//   data: {
//     objectArray: [
//       {id: 5, unique: 'unique_5'},
//       {id: 4, unique: 'unique_4'},
//       {id: 3, unique: 'unique_3'},
//       {id: 2, unique: 'unique_2'},
//       {id: 1, unique: 'unique_1'},
//       {id: 0, unique: 'unique_0'},
//     ],
//     numberArray: [1, 2, 3, 4]
//   },
//   switch: function(e) {
//     const length = this.data.objectArray.length
//     for (let i = 0; i < length; ++i) {
//       const x = Math.floor(Math.random() * length)
//       const y = Math.floor(Math.random() * length)
//       const temp = this.data.objectArray[x]
//       this.data.objectArray[x] = this.data.objectArray[y]
//       this.data.objectArray[y] = temp
//     }
//     this.setData({
//       objectArray: this.data.objectArray
//     })
//   },
//   addToFront: function(e) {
//     const length = this.data.objectArray.length
//     this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
//     this.setData({
//       objectArray: this.data.objectArray
//     })
//   },
//   addNumberToFront: function(e){
//     this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
//     this.setData({
//       numberArray: this.data.numberArray
//     })
//   }
// })

Page({
  data: {
    x: 0,
    y: 0
  },
  tap: function(e) {
    this.setData({
      x: 30,
      y: 30
    });
  }
})


