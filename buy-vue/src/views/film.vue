<template>
    <div>
        
           <van-loading type="spinner" color="#1989fa" v-if="this.$store.state.isLoading" class="loading" />
       
     
    <film-item :data="data"></film-item>
    </div>
</template>

<script>
    export default {
        name:"film",
        data(){
            return{
                    data:[]
            }
        },
        mounted() {
            var id = this.$route.params.id
            var url = `https://douban.uieee.com/v2/movie/subject/${id}`
            this.axios.get(url).then(res=>{
                console.log(res.data)
                this.data=res.data
            })
        },
       
    }
</script>

<style  scoped>
 .loading{
     position: fixed;
     left:50%;
     top:50%;
   transform: translate(-50%,-50%)
 }
</style>