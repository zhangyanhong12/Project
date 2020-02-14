<template>
    <div> 
        <van-loading type="spinner" color="#1989fa" v-if="this.$store.state.isLoading"  class="loading" />
         <item v-for="item of movie" :key="item.id" :data="item">
             
         </item>
    </div>
</template>

<script>
    export default {
        name:"comingplaying",
        data(){
            return{
                movie:[]
            }
        },
        mounted() {
            var url="http://douban.uieee.com/v2/movie/coming_soon"
            this.axios.get(url).then(res=>{
                  this.movie= res.data.subjects;
            })
        },
    }
</script>

<style  scoped>
 .loading{
     position: fixed;
     left:50%;
     transform: translateX(-50%)
 }
</style>