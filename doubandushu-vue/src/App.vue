<template>
  <div id="app">
  <div class="container" v-for="item of books" :key="item.id">
    <div class="photo">
      <img :src="item.images.small" alt="">
    </div>
    <div class="text">
      <p>{{item.title}}</p>
      <p>{{item.rating.average}}({{item.rating.numRaters}}人评价)</p>
      <p>{{item.author}}/{{item.translator}}/{{item.publisher}}/{{item.pubdate}}/{{item.price}}</p>
    </div>
  </div>
  
  </div>
</template>

<script>
import axios from 'axios-jsonp-pro'

export default {
  name: 'app',
  data(){
    return{
      books:[]
    }
  },
 mounted(){
  var url = "https://douban.uieee.com/v2/book/search?q=你的名字"
  axios.jsonp(url).then(res=>{
    this.books = res.books
    console.log(this.books)
  })
 }
}

</script>

<style>
 .photo{
  float: left;
  width: 200px;
  height:250px;
}
.text{
  height:250px;
  
}
.p{
  font-size:12px;
  margin-left:20px;
 
} 
.photo img{
  width:200px;
  height:250px;
}
</style>
