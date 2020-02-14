// components/MovieItem/MovieItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     data:{
       type:String
     },
     index:{
       type:Number
     }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
       handleClick(){
         var index = this.properties.index;
         this.triggerEvent("toggle",{index})
       }
  }
})
