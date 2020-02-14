const read =require("../../model/read")
Page({

  data: {
    shortTitle:"",
    book:[],
   
  },

  onLoad:async function (options) {
        var res = await read.getRead()
        var shortTitle=res.data.ranking.shortTitle
      
        var books=res.data.ranking.books;
        var book=[]
       books.forEach(item=>{
         var obj = {}
         var reg=/^.{7}/;
         obj.img = unescape(item.cover).replace(reg,"");
         console.log(obj.img)
         obj.title = item.title;
         obj.shortIntro=item.shortIntro;
         obj.author=item.author;
         obj.majorCate=item.majorCate;
         obj.latelyFollower=item.latelyFollower
         book.push(obj)
       })
        this.setData({
          shortTitle,
          book
        })
        console.log(book)
        wx.setNavigationBarTitle({
          title:shortTitle,
        })
  },

 
})