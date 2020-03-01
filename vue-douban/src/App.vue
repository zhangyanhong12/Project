<template>
  <div id="app">
    <MovieItem :data="item" v-for="item of movies" :key="item.id"></MovieItem>
  </div>
</template>   
<script>
import MovieItem from './components/MovieItem'
import axios from 'axios-jsonp-pro';
export default {
  name:"app",
  data(){
    return {
      movies:[]
    }
  },
  methods:{
   
  },
  components:{
    MovieItem
  },
  mounted(){
    var url = "https://douban.uieee.com/v2/movie/top250";
    axios.jsonp(url).then(res=>{
      this.movies=res.subjects;
    })
  }
}
</script>
<style>

</style>
