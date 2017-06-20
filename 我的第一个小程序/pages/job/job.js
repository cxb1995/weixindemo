Page({
  data:{
    jobdata:[
        {content:"PE salon的招聘信息：招聘：督导20名，总监20名，发型师20名，技师20名，美容师20名。寻找和品牌一起发展的同道中人，吃苦耐劳，品行端正。欢迎来电或来店咨询。电话18301922187 微信同号。店地址：上海市徐汇区罗秀路222号近龙川路。工资待遇超乎你想象，只要你实力够，工资不怕高。你就来吧！",uidimg:"http://bobosquad.qiniudn.com/201692316196160.jpg",nename:"凌风",address:"上海",time:"2017-06-08"},
         {content:"PE salon的招聘信息：招聘：督导20名，总监20名，发型师20名，技师20名，美容师20名。寻找和品牌一起发展的同道中人，吃苦耐劳，品行端正。欢迎来电或来店咨询。电话18301922187 微信同号。店地址：上海市徐汇区罗秀路222号近龙川路。工资待遇超乎你想象，只要你实力够，工资不怕高。你就来吧！",uidimg:"http://bobosquad.qiniudn.com/201692316196160.jpg",nename:"凌风",address:"上海",time:"2017-06-08"},
          {content:"PE salon的招聘信息：招聘：督导20名，总监20名，发型师20名，技师20名，美容师20名。寻找和品牌一起发展的同道中人，吃苦耐劳，品行端正。欢迎来电或来店咨询。电话18301922187 微信同号。店地址：上海市徐汇区罗秀路222号近龙川路。工资待遇超乎你想象，只要你实力够，工资不怕高。你就来吧！",uidimg:"http://bobosquad.qiniudn.com/201692316196160.jpg",nename:"凌风",address:"上海",time:"2017-06-08"},
           {content:"PE salon的招聘信息：招聘：督导20名，总监20名，发型师20名，技师20名，美容师20名。寻找和品牌一起发展的同道中人，吃苦耐劳，品行端正。欢迎来电或来店咨询。电话18301922187 微信同号。店地址：上海市徐汇区罗秀路222号近龙川路。工资待遇超乎你想象，只要你实力够，工资不怕高。你就来吧！",uidimg:"http://bobosquad.qiniudn.com/201692316196160.jpg",nename:"凌风",address:"上海",time:"2017-06-08"},
            {content:"PE salon的招聘信息：招聘：督导20名，总监20名，发型师20名，技师20名，美容师20名。寻找和品牌一起发展的同道中人，吃苦耐劳，品行端正。欢迎来电或来店咨询。电话18301922187 微信同号。店地址：上海市徐汇区罗秀路222号近龙川路。工资待遇超乎你想象，只要你实力够，工资不怕高。你就来吧！",uidimg:"http://bobosquad.qiniudn.com/201692316196160.jpg",nename:"凌风",address:"上海",time:"2017-06-08"},
             {content:"PE salon的招聘信息：招聘：督导20名，总监20名，发型师20名，技师20名，美容师20名。寻找和品牌一起发展的同道中人，吃苦耐劳，品行端正。欢迎来电或来店咨询。电话18301922187 微信同号。店地址：上海市徐汇区罗秀路222号近龙川路。工资待遇超乎你想象，只要你实力够，工资不怕高。你就来吧！",uidimg:"http://bobosquad.qiniudn.com/201692316196160.jpg",nename:"凌风",address:"上海",time:"2017-06-08"}
    ]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log(options)
      console.log(options.uid)
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  getindex:function(e){
      var id=e.target.dataset.index
      console.log(id)
  }
})