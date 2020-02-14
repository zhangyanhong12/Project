// components/MoviesItem/MoviesItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object
    }
  },
  data: {

  },
  methods: {
      handleClick(){
        var id = this.properties.data.id;
        // console.log(id)
        wx.navigateTo({
          url: '/pages/movie-detail/movie-detail?id='+id,
         
        })
      }
  }
})
