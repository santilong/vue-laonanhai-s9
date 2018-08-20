<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Panel title</h3>
          </div>
          <div class="panel-body">
            <!--笔记列表-->
            <VnoteShow></VnoteShow>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-body">
            <Vmark></Vmark>
          </div>
        </div>
        <!--markdown-->
      </div>
    </div>
  </div>
</template>

<script>
  import Vmark from './Vmark.vue'
  import VnoteShow from './VnoteShow.vue'
  export default {
    name:'Vnote',
    data(){
        return {
          noteLists:[
            {'id':1,title:'今天很辛苦',content:'你说啥来'},
            {'id':2,title:'今天很辛苦2',content:'你说啥来2'},
            {'id':3,title:'今天很辛苦3',content:'你说啥来3'},
          ]
        }
    },
    components:{
      Vmark,
      VnoteShow
    }
  }
</script>

<style scoped>

</style>
