<template>
  <div class="app">
    <h3>{{msg}}</h3>
     <Vheader></Vheader>
    <audioTest></audioTest>
    <!--<Vcontent></Vcontent>-->
    <Vfooter></Vfooter>
  </div>
</template>

<script>
  //1、导入
  import Vheader from './components/Vheader.vue'
  import Vcontent from './components/Vcontent.vue'
  import Vfooter from './components/Vfooter.vue'
  import audioTest from './components/audio.vue'

  export default {
    name : 'test',
    data(){
      return {
        msg:'test页面'
      }
    },
    //2、注册
    components:{
      Vheader,
      Vcontent:Vcontent,
      Vfooter,
      audioTest
    }
  }
</script>

<<style>

</style>
