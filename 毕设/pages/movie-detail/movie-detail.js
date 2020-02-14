const movie = require("../../model/movie")
Page({

  data: {
         movie:[],
         x:true
  },

  onLoad:async function (options) {
     var id = options.id;
     console.log(id)
    var res = await movie.getDetail(id)
    console.log(res)
    this.setData({
      movie:res.data
    })
  },

 
})