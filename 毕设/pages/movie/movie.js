// pages/movie/movie.js
const movie = require("../../model/movie")
Page({

  data: {
     subjects:[],
     indicatorColor:"rgba(11, 44, 66, .6)",
     indicatorDots:true,
     active:"#C20C2C",
     autoplay: true,
     arr:['正在热映','即将上映','TOP250']
  },

  onLoad:async function (options) {
     var hot = await movie.getInTheaters();
     var subjects = hot.data.subjects.slice(0,4)
     console.log(subjects)
     this.setData({
       subjects
     })
  },
    Toggle(e){
      var {index}=e.detail;
      wx.navigateTo({
        url: '/pages/movies/movies?index='+index,
      
      })
    }
 
})