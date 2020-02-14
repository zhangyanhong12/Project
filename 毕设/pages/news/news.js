const news = require("../../model/news")
Page({
  data: {
        data:[]
  },
  onLoad:async function (options) {
    var res = await news.getNews()
    var data=res.data.data
    this.setData({
      data
    })
    console.log(data)
  },

})