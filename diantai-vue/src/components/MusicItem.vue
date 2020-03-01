<template>
  <div class="item">
    <div class="pic">
    <img :src="data.coverUrl" alt="">
    </div>
     <div class="name">{{data.name}}</div>
     <div class="radio">{{data.radio.name}}</div>
     <div>播放{{item.listenerCount}}</div>
     <div>{{data.radio.category}}</div>
  </div>
</template>
<script>
export default {
  name:"MusicItem",
  props:{
    data:{
      type:Object
    }
  }
}
</script>
<style >
  .pic img{
    width:70px;
    height: 70px;
    flex:1;
  }
  .item{
    display: flex;
    font-size: 14px;
    margin-top:15px;
  }
  .item div{
    margin-right: 15px;
    display: flex;
    align-items: center;
  }
  .name{
    flex: 4;
  }
  .radio{
    flex: 2;
  }
</style>