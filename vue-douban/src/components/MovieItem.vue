<template>
    
      <div class="MovieItem">
       <div>
            <img :src="data.images.small" alt="">
            <p>{{data.title}}</p>
     </div>
    </div>
</template>
<script>
export default {
    name:"MovieItem",
    props:{
        data:{
            type:Object
        }
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
.MovieItem img{
  width:240px;
  height:300px;
}
.MovieItem div{
  width:240px;
   margin-bottom: 50px;
  box-shadow: 0 0 10px rgb(114, 114, 114);
  border: 1px solid rgb(94, 91, 91);
}
.MovieItem p {
  text-align: center;
}
</style>