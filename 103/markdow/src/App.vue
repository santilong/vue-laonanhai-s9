<template>
  <div id="app">
    <Vheader></Vheader>
    <router-view/>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Vheader from './components/Vheader.vue'
  import $ from 'jquery'
export default {
  name: 'App',
  components:{
      Vheader
  },
  created(){

  },
  mounted(){
//    以下ajax中的this非Vue对象
//    let _this = this
//    $.ajax({
//      url:'http://127.0.0.1:8888/api/components/',
//      type:'get',
//      success:function(data) {
//        _this.$store.state.AllList = data
//      }
//    })
    //调用actions
    this.$store.dispatch('getAllData')
  }
}
</script>

<style>

</style>
