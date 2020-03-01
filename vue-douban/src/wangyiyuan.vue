<template>
    <div id="wangyiyuan">
      
    </div>
</template>
<script>
import axios from 'axios-jsonp-pro'
import MovieItem from './components/MovieItem'
export default {
    name:"wangyiyuan",
    data(){
    return{
        playlist:[]
    }
    },
    mounted() {
       var url = "https://music.aityp.com/top/playlist?cat=华语";
       axios({
           url,
           method:"get"
       }).then(res=>{
            this.playlist = res.data.playlists
       })
    },
}
</script>
<style>
    
</style>