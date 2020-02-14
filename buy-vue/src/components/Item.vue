<template>
  <div class="container">
           
    <router-link :to="'/film/'+data.id">
         <div class="item">
      <div class="img">
          <img :src="data.images.small" alt="">
      </div>
     <div class="content">
        <p class="name">{{data.title}}</p>
        <p class="label">主演：
          <span v-for="item of (data.casts)" :key="item.id">{{item.name}}</span>
        </p>
        <p class="label">上映日期：{{data.mainland_pubdate}}</p>
     </div>
      <div >
        <p class="buy">预购</p>
      </div>
    
    
    
    </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name:"item",
    props:{
      data:{
        type:Object
      }
    },
    // methods:{
    //   handleClick(id){
    //     this.$router.push(`/film?id=${id}`)
    //   }
    // }
  }
</script>

<style  scoped>
.img {
   width: 66px;
   height: 99px;
   border-radius: 2px;
   margin-right: 10px;
}
.img img{
   width: 66px;
   height: 99px;
}
.item{
  border-bottom: 1px solid #ededed;
  color: #ededed;
  padding: 15px 5px 15px 15px;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buy{
  width: 50px;
  height: 25px;
  line-height: 25px;
  color: #ffb232;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  border:1px solid #ffb232;
}
.content{
  width:230px;
 
}
.name{
    color: #191a1b;
    font-size: 16px;
    height: 22px;
    line-height: 22px;
}
.label{
    font-size: 13px;
    margin-top: 4px;
    color: #797d82;
}
</style>