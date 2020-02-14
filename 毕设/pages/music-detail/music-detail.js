// pages/music-detail/music-detail.js
const music = require("../../model/music")
Page({

  /**
   * 页面的初始数据
   */
  data: {
     musics:[],
     isPlay:false,
     playId:""
  },

 onShow(){ 
  var playState = wx.getStorageSync('playState');
  var playId = wx.getStorageSync('playId') 
  if(playState!=null){
    this.setData({
      isPlay:playState
    })
  }
  this.setData({
    playId
  })
 },
  onLoad:async function (options) {
    var {id}=options;
    var pic = unescape(options.pic)
    var res = await music.getDetail(id)
    console.log(res)
    var tracks = res.data.playlist.tracks;
    var musics=[]
    tracks.forEach(item=>{
      var obj={};
      obj.name = item.name;
      obj.picUrl=item.al.picUrl;
      obj.pic=pic;
      obj.id=item.id
      musics.push(obj)
    })
    this.setData({
      musics
    })
  },
  handlePlay(e){
     var {id,name}=e.currentTarget.dataset
     var pic = escape(e.currentTarget.dataset.pic);
     wx.navigateTo({
       url: '/pages/play/play?id='+id+'&name='+name+'&pic='+pic,
     
     })
  }
})