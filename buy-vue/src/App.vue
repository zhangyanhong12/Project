<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"app",

    
}
</script>
<style scoped>
#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */

}

#nav{
  text-align: center;
  position: fixed;
  left:50%;
  transform: translateX(-50%);
  height: 40px;
  width: 100%;
  z-index: 100;
  background: #fff;
  bottom: 0;
  font-size: 13px;
   border-top: 1px solid #ededed;
   line-height: 40px;
}

#nav a {
  color: #797d82;
}

#nav a.router-link-exact-active {
 color: #ff5f16;
}
</style>
