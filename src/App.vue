<template>
  <div id="app">
    <h1>Jcheez's Zi Char</h1>
    
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import QuantityCounter from "./components/QuantityCounter.vue"
//import PageContent from "./components/PageContent.vue"
//import Basket from "./components/Basket.vue"


export default {
  name: 'App',
  data() {
    return {

    }
    
  },
  components: {
    //'PgContent':PageContent,
    //"Basket":Basket
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 50px;
  color: white;
  background-color: skyblue;
  line-height: 80px;
  margin:0px;
  margin-top:-50px;
}
</style>
