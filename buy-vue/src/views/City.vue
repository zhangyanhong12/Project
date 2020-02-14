<template>
    <div>
        <div class="fix">
            <div class="center" @click="back">
                 <span class="iconfont">&#xe61a;</span>
                  <span class="index">当前城市-</span>
            </div>
         <div class="inp">
            <input type="text" placeholder="输入城市名或者拼音"  v-model="keyword">
         </div>
            <div class="search-content" v-show="keyword" ref="search">
        <ul>
            <router-link to="/films/nowPlaying" v-for="item of list" :key="item.id" @click="handleCity(item.name)">
            <li class="search-item border-bottom" >{{item.name}}</li>
            </router-link>
           
           <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
    </div>
        </div>
         <div class="hotcity">
               <p class="name">热门城市</p>
            <router-link to="/films/nowPlaying" v-for="item of hotCities" :key="item.id" @click.native="handleCity(item.name)" >
             <span class="city">
                 {{item.name}}
               </span>
             </router-link>
         </div>
            <van-index-bar>
             <div v-for="(value,index) of cities" :key="index">
                 <van-index-anchor :index="index" />
                 <router-link to="/films/nowPlaying" @click.native="handleCity(val.name)" v-for="(val,i) of value" :key="i">
                  <van-cell    :title="val.name" />
                 </router-link>  
             </div>      
        </van-index-bar>
    </div>
</template>

<script>

    export default {
        name:"city",
        data(){
            return{
                hotCities:[],
                cities:[],
                keyword:"",
                list:[],
                timer:null
            }
        },
        mounted() {
            //    this.scroll=new Bscroll(this.$refs.search)
             this.axios.get("/api/city").then(res=>{
            console.log(res.data.data.cities)
            this.hotCities=res.data.data.hotCities
            this.cities=res.data.data.cities
          })
        
        },
        methods:{
            handleCity(city){
                console.log(city)
                this.$store.dispatch("changeCity",city)
            },
            back(){
                this.$router.back()
            },
            enter(){
                console.log(this.keyword);
                // this.axios.get("/api/city").then(res=>{

                // })
            }
        },
        watch:{
              keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return
            }
            this.timer=setTimeout(() => {
                const result=[]
              
                for (let i in this.cities){
                    //console.log(i)
                   this.cities[i].forEach((value) => {
                       if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                           result.push(value)
                       }
                   });
                }
                //console.log(result)
                this.list=result
            }, 100);
 
         }
        },
        computed:{
          hasNoData(){
              return !this.list.length
          }
      }
    }
</script>

<style  scoped>
.hotcity{
    margin-top:100px;
}
.fix{
    position: fixed;
    top:0;
    left: 0;
    background: #fff;
    font-size: 14px;
    width: 10rem;
}
.center{
  height: 35px;
  position: relative;
  padding-top:5px;
  padding-left: 10px;
}
.iconfont{
    font-size: 28px; 
}
.index{
   position: absolute;
   top:50%;
   left: 50%;
   transform: translate(-50%,-50%);
   font-size:16px;
}
.inp{
    padding: 9.5px 15px;
    background-color: #f4f4f4;
    height: 35px;
    width:10rem;
}
.inp input{
    border-radius: 3px;
    height: 25px;
    border: none;
    width:8rem;
    padding-left: 30px;
    font-size: 12px;
}
.hotcity .name{
    font-size: 13px;
    color: #797d82;
    margin-bottom: 10px;
    margin-left: 10px;
}
.city{
    font-size: 16px;
    color:#333;
    height: 30px;
    background-color: #f4f4f4;
    width:2.5rem;
    margin-left: 20px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    margin-bottom: 20px;
}
</style>