const music = require("../../model/music")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    offset:0,
     musics:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    var {url,title}=options;
    console.log(url)
   wx.showLoading({
     title:"数据正在加载中"
   })
   switch(url){
     case "getHot":
       var res = await music.getHot(this.data.offset)
       var {playlists}=res.data
      //  console.log(playlists)
      this.setData({
        musics:playlists
      })
      wx.setNavigationBarTitle({
        title,
      })
      break;
      case "getPlaylist":
        var res = await music.getPlaylist()
        var {playlists}=res.data
        this.setData({
          musics:playlists
        })
        wx.setNavigationBarTitle({
          title,   
        })
        break;
        case "getDj":
            var res = await music.getDj()
            console.log(res)
              var musics=[]
            var result = res.data.result
            result.forEach(item=>{
              var obj = {}
              obj.name = item.name;
              obj.coverImgUrl=item.picUrl;
              obj.playCount = item.program.listenerCount;
              obj.id =item.id
              musics.push(obj)
            })
            this.setData({
              musics
            })
            wx.setNavigationBarTitle({
              title,
              
            })
            break;
   }
   wx.hideLoading()
  },
 onReachBottom(){
   var offset=this.data.offset;
   offset=offset+30;
   music.getHot(offset).then(res=>{
     console.log(res)
   })
 }
})