<template>
  <div id="root">
  <h2 class="title">我的购物车</h2>
  <table>
    <thead>
      <tr>
       <th>选择</th>
       <th>商品</th>
       <th>数量</th>
       <th>价格</th>
       <th>单价</th>
       <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of products" :key="item.id">
        <td>
          <van-checkbox v-model="item.isSelected"></van-checkbox>
        </td>
        <td>
          <img :src="item.productCover" alt="">
          <span>{{item.productName}}</span>
        </td>
        <td>
          <van-stepper v-model="item.productCount" min="1" max="10" />
        </td>
        <td>
          <span>{{item.productPrice*item.productCount}}</span>
        </td>
        <td>
          <span>{{item.productPrice}}</span>
        </td>
        <td>
          <van-button type="danger" @click="handleDelete(item)">删除</van-button>
        </td>
      </tr>
    </tbody>
  </table>
  <van-submit-bar
  :price="sum()"
  button-text="提交订单" >
  <van-checkbox v-model="checkAll">全选</van-checkbox>
  </van-submit-bar>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'App',
 
  data() {
    return {
     products:[]
    };
  },
  methods: {
      sum(){
      var total=0;
     this.products.forEach(item=>{
       if(item.isSelected){
             total=total+item['productCount']*item['productPrice']
       }
     })
     return total*100;
    },
    // handleChange(id,e){
    //   var products=this.products
    //     products.forEach(item=>{
    //                  if(item.id=id){
    //                    item.isSelected=!item.isSelected
    //                  }
    //     })
    //   var checked=products.every(item=>item.isSelected)
    // },
    // handleClick(e){
    //   var checked=!this.checked
    //   this.products.map(item=>(item.isSelected=!checked))
    // },
      handleDelete(item){
              /*  return this.products.splice(index,1) */
              console.log(item)
              var products=this.products.filter(value=>value!==item);
              this.products=products
            }
  },
  computed:{
    checkAll:{
      get() {
        return this.products.every(item => item.isSelected);
      },
      set(val) {
        //给checkbox赋值的时候触发
        this.products.forEach(item => (item.isSelected = val));
      }
    },
      
  },
  mounted(){
    var url="http://yapi.demo.qunar.com/mock/34622/"
    this.axios.get(url).then(res=>{
      console.log(res.data)
      this.products=res.data
    })
  }
};
</script>

<style scoped>
  table >>> .van-checkbox {
  margin-left: 20px;
}
table {
  background: #fff;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #666;
  border-radius: 15px;
  margin: 0 auto;
  /* display: block; */
  text-align: center;
}
table img {
  width: 100px;
}
table th {
  text-align: center;
}
.about>.van-submit-bar{
  padding:0 20px;
}
.about>>>.van-checkbox__icon .van-icon {
    border-color:#FF6700 !important;
}
table >>> .van-stepper .van-stepper__input {
  width: 40px !important;
}
thead {
  background: #333;
  color: #fff;
  line-height: 50px;
}
tbody tr {
  line-height: 100px;
}
</style>
