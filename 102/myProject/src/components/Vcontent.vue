<template>
	<div class="content">
	  <ul>
      <li v-for="item in cityArr">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
	export default {
		name:'Vcontent',
		data(){
			return {

			}
		},
    props:{
		    cityArr:Array
    }
	}
</script>

<style scoped>
	h3 {
		color:blue;
	}
</style>
