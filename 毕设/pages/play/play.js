// pages/play/play.js
const music = require("../../model/music");
const audio = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    pic:"",
    isPlay:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    var {id,name}=options;
    var pic= unescape(options.pic)
    var res = await music.getPlay(id)
    var url = res.data.data[0].url;
    audio.title=name;
    audio.src=url;
    wx.setStorageSync('playState', true)
    wx.setStorageSync('playId',id)
    this.setData({
      name,pic
    })
     audio.onPlay(()=>{
       this.setData({
         isPlay:true
       })
       wx.setStorageSync('playState', true)
     })
     audio.onPause(()=>{
       this.setData({
         isPlay:false
       })
       wx.setStorageSync('playState', false)
     })
  },
  handleClick(){
    if(this.data.isPlay){
      this.setData({
        isPlay:!this.data.isPlay
     
      
      })
      wx.setStorageSync('playState',  false)
      audio.pause()
    }else{
      this.setData({
        isPlay:this.data.isPlay
      })
      wx.setStorageSync('playState', true)
      audio.play()
    }
  }
})