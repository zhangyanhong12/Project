<template>
  <div id="app">
   <MusicItem v-for="item of album" :key="item.id" ></MusicItem>
  </div>
</template>

<script>
import MusicItem from './components/MusicItem'
import axios from 'axios-jsonp-pro'
export default {
  name: 'app',
  data(){
    return{
          album:[]
    }
  },
 mounted(){
   var url="https://music.aityp.com/program/recommend?limit=30";
   axios({
    url,
    method:"get"
   }).then(res=>{
     this.album = res.data.programs;
     
   })
   
 },
 components:{
   MusicItem
 }
}
</script>

<style>

</style>
