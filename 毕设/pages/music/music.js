const music = require('../../model/music')
Page({

  data: {
   musics:{}
  },
  onLoad:async function (options) {
    var musics={};
    var getHot = await music.getHot()
    // console.log(getHot)
    var getPlaylist = await music.getPlaylist()
    var getDj = await music.getDj()
    musics.getHot={}
    musics.getHot.title="热门歌曲"
    musics.getHot.data = getHot.data.playlists.slice(0,3)
    musics.getHot.subTitle="getHot"

    musics.getPlaylist={}
    musics.getPlaylist.title = "最新音乐"
    musics.getPlaylist.data = getPlaylist.data.playlists.slice(0,3)
    musics.getPlaylist.subTitle = "getPlaylist"

    musics.getDj={}
    musics.getDj.title="主播电台"
    var result = getDj.data.result;
    var sub=[]
    result.forEach(item=>{
      var obj={}
      obj.name = item.name;
      obj.coverImgUrl = item.picUrl;
      obj.playCount = item.program.listenerCount;
      obj.id=item.id
      sub.push(obj)
    })
    musics.getDj.data=sub.slice(0,3)
    musics.getDj.subTitle="getDj"
    this.setData({
      musics
    })
  },
handleClick(e){
  var {url,title}=e.currentTarget.dataset
  wx.navigateTo({
    url: '/pages/musics/musics?url='+url+'&title='+title
  })
}
  
})