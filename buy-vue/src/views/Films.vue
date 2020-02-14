<template>
  <div class="home" >
    
    <div :class="{item:isActive}"> 
      
       <div class="btn" @click="toggle">
        <span>{{this.$store.state.city}}</span>
       <span class="iconfont i">&#xe797;</span>
       </div>
       <span class="movie">电影</span>
     </div>
    <div class="img" >
         <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index" @click="handleClick(index)">
            <img :src="image"  class="p" />
       </van-swipe-item>
     </van-swipe> 
    </div>
    <div class="title" :class="{active:isActive}">
      <router-link to="/films/nowPlaying">正在热映</router-link>
      <router-link to="/films/comingSoon">即将上映</router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

import {ImagePreview} from 'vant'
export default {
  name: 'films',
   data(){
            return{
                images:[
                  require('@/assets/images/01.jpg'),
                  require('@/assets/images/02.jpg'),
                  require('@/assets/images/03.jpg'),
                  require('@/assets/images/04.jpg'),
                ],
               isActive:false
            }
        },
    methods:{
            handleClick(index){     //点击事件，点击查看大图
                const instance=ImagePreview({
                  images:this.images,
                  asyncClose:true,
                  startPosition:index,
                  onClose(){
                      instance.close()
                  }
              });
            },
            handle(){
              var height = document.documentElement.scrollTop;
              if(height>200){
                this.isActive=true
              }else{
                this.isActive=false
              }
             
            },
            toggle(){
              this.$router.push(`/city`)
            }
        },
        mounted(){
          window.addEventListener("scroll",this.handle)
         
        }
}
</script>
<style scoped>
.movie{
  display: none;
}
.item .movie{
  display: block;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 16px;
}
  .title{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
   
  }
  .item {
    position: fixed;
    top:0;
    height: 50px;
    background: #fff;
    width: 100%;
     color:#333;
     /* border-bottom:1px solid #eee; */
     width: 10rem;
     z-index:200
  }
  .item .btn{
     background: #fff;
     color:#333;
  }
  .active{
     position: fixed;
     top:50px;
    background: #fff;
    width:10rem;
    height: 50px;  
    z-index: 100
   
  }
  .title a {
  color: #333;

}

.title a.router-link-exact-active {
 color: #ff5f16;
}
.img{
  width:100%;
  height: 200px;
  
}
img{
  width:100%;
  height: 200px;


}
.btn{
    position: absolute;
    /* width: 50px; */
    top: 5px;
    left: 5px;
    height: 35px;
    z-index:10;
    background: rgba(0,0,0,.2);
    line-height: 35px;
    border-radius: 15px;
    padding-left: 10px;
    color: #fff;
}
.btn span{
  font-size: 13px;
  margin-right: 5px;
}
</style>
