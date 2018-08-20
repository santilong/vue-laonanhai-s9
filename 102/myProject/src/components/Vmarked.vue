<template>
	<div class="marked">
    <textarea class="editor" v-model="text"></textarea>
    <div class="show" v-html="markedStr"></div>
  </div>
</template>

<script>
  import Marked from 'marked'
	export default {
		name:'Vmarked',
		data(){
			return {
        text:''
			}
		},
    computed:{
		    markedStr:function () {
          return Marked(this.text)
        }
    }
	}
</script>

<style scoped>
	.marked {
    width:1200px;
    height: 600px;
    margin: 0 auto;
  }
  .editor,.show {
    width:598px;
    float: left;
    border: 1px solid black;
    height: 600px;
  }
</style>
