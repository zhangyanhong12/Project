<template>
    <div class="container">
       <div>
         <img :src="name.coverImgUrl"/>
         <p>{{name.name}}</p>
       </div>
     </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 props:{
   name:{
     type:Object
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container img{
  width:240px;
  height:300px;
}
.container div{
  width:240px;
   margin-bottom: 50px;
  box-shadow: 0 0 10px rgb(114, 114, 114);
  border: 1px solid rgb(94, 91, 91);
}
.container p {
  text-align: center;
}
</style>
