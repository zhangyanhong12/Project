const movie = require("../../model/movie")
Page({

 
  data: {
     movies:[],
     title:""
  },

  onLoad:async function (options) {
           var index = options.index;
           wx.showLoading({
            title:"数据正在加载中"
          })
           if(index==0){
             var res =await movie.getInTheaters()
             var title = res.data.title
            //  console.log(title)
            var movies= res.data.subjects
            // console.log(movies)
            this.setData({
              movies,
              title
            })
            
           }
           if(index==1){
             var res = await movie.getComingSoon()
             var movies = res.data.subjects
             var title = res.data.title
             this.setData({
              movies,
              title
            })
           }
           if(index==2){
             var res = await movie.getTop250()
             var title = res.data.title
             var movies = res.data.subjects
             this.setData({
               movies,
               title
             })
           }
           wx.hideLoading()
  },

  
})