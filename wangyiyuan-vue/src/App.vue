<template>
  <div id="app">
    <HelloWorld :name="item" v-for="item of playlist" :key="item.id"></HelloWorld>
  </div>
</template>
<script>
import axios from 'axios-jsonp-pro'
import HelloWorld  from './components/HelloWorld'
export default {
  name: 'app',
  data(){
   return {
     playlist:[]
   }
  },
  components:{
    HelloWorld
  },
   mounted(){
  var url = "https://music.aityp.com/top/playlist?cat=华语";
  axios({
    url,
    method:"get",
  }).then(res=>{
   this.playlist = res.data.playlists
  
  })
}
}
</script>
<style>
#app{
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   margin-left:150px;
   margin-right:150px;
}
</style>

