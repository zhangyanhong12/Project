<template>
    <div class="wrapper">
      <div class="content">
          <div  :class="{item:isActive}" class="active">
             <p class="iconfont i" @click="handleBack" >&#xe619;</p>
             <p class="name">{{data.original_title}}</p>
          </div>
         
          <img :src="data.images.small" alt="" class="img">
          <div class="nav">
              <div class="flex">
                  <div class="title">{{data.original_title}}</div>
                  <div class="average">{{data.rating.average}}
                      <span>分</span>
                  </div>
              </div>
              <div class="text">
                <p class="genres">{{data.genres}}</p>
              <p class="pubdates">{{data.pubdate}}上映</p>
              <div class="left">
                  <span>{{data.countries}}</span> |
                  <span>{{data.durations}}</span>
              </div>
              <p>{{data.summary | format()}}</p>
              </div>
             
          </div>
      </div>
      <div class="casts">
          <p class="actors">演职人员</p>
          <div class="top">
                    <div class="actor"  >
              <div class="wrap" v-for="item of (data.casts)" :key="item.id">
                      <img :src="item.avatars.small" alt="">
                     <p>{{item.name}}</p>
        
              </div>
          </div>
         
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name:"filmitem",
        props:{
            data:{
                type:Object,
                
            }
        },
        data(){
            return{
                isActive:false
            }
        },
        methods:{
            handleBack(){
                this.$router.back()
            },
              handle(){
              var height = document.documentElement.scrollTop;
              if(height>220){
                this.isActive=true
              }else{
                this.isActive=false
              }
             
            }
        },
        mounted() {
              window.addEventListener("scroll",this.handle)
         
        },
    }
</script>

<style  scoped>
.active{
    position: absolute;
    top: 0px;
    left: 5px;   
}
.active .name{
   display: none;
}
.i{
    width: 20px;
    height: 25px;
    z-index:10;
    background: #8E9EA3;
    line-height: 25px;
    border-radius: 100%;
    padding-left: 5px;
    opacity: .7;
}
  .item{
    position: fixed;
    top:0;
    height: 50px;
    background: #fff;
    width: 10rem;
    color:#333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 10rem; */
    font-size: 14px;
  } 
  .item .name{
      display: block;
     position: absolute;
     left:50%;
     top:50%;
     transform: translate(-50%,-110%);
     z-index: 100;
  }
  .item .i{
      width:5rem;
      background: #fff;
  }
.wrapper{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    width:100%;
    min-height: 100%;
    z-index: 100
}
.top{
    overflow-x: auto;
    overflow-y: hidden;
    
}
.casts{
    height: 900px;
}
.actor{
            display: grid;
            grid-template-columns: repeat(4,5fr);
            gap: 10px;
}
.wrap p{
    /* padding-top: 10px; */
    font-size: 12px;
    color: #191a1b;
   
}
.body{
   background:  #F4F4F4;
}
.wrap img{
   width: 85px;
   height: 120px;
}
.img{
    width:100%;
    height: 220px;
}
.flex{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.title{
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    width:300px;
  
}
.average{
        color: #ffb232;
        font-size: 18px;
}
.nav,.casts{
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;
}
.average span{
    font-size: 10px;
}
.text{
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
    
}
.actors{
        color: #191a1b;
        font-size: 16px;
}

</style>