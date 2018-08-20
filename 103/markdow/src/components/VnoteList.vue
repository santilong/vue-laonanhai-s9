<template>
  <ul>
    <VnoteItem v-for="(item,index) in getallData" :key="item.id" :data="item"></VnoteItem>

  </ul>
</template>

<script>
  import VnoteItem from './VnoteItem.vue'
  export default {
    name:'VnoteList',
    data(){
          return {

          }
    },
    components:{
        VnoteItem
    },
    computed:{
        getallData(){
            return this.$store.state.AllList
        }
    }
  }
</script>

<style scoped>

</style>
