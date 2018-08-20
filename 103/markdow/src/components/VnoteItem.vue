<template>
  <li>
    <h3>{{data.title}}</h3>
    <h5>{{data.content}}</h5>
  </li>
</template>

<script>
  export default {
    name:'VnoteItem',
    data(){
          return {

          }
    },
    props:{
        data:Object,
    },
  }
</script>

<style scoped>

</style>
