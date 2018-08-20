<template>
  <div>
    <div>
      <!--<Vheader></Vheader>-->
      <!--<Vcontent :cityArr="citys"></Vcontent>-->
      <!--<Vfooter v-on:addZhuang = 'addcity'></Vfooter>-->
      <!--<Vmarked></Vmarked>-->
      <router-link to="/">Vheader</router-link>
      <router-link to="/citys">Vcontent</router-link>
      <router-link to="/addCity">Vfooter</router-link>
      <router-link to="/marked">Vmarked</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//  import Vheader from './components/Vheader.vue'
//  import Vcontent from './components/Vcontent.vue'
//  import Vfooter from './components/Vfooter.vue'
//  import Vmarked from './components/Vmarked.vue'
  export default {
      name:'app',
      data(){
          return {
              msg:'666',
              citys:['成华区','高新区','金牛区']
          }
      },
//      components:{
//          Vheader:Vheader,
//          Vcontent,
//          Vfooter,
//          Vmarked
//      },
      methods:{
          addcity(str){
              this.citys.unshift(str)
          }
      }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>
