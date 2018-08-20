<template>
	<div class="footer">
		<button @click="addCun">添加一个村</button>
	</div>
</template>

<script>
	export default {
		name:'Vfooter',
		data(){
			return {

			}
		},
    methods:{
		    addCun() {
          this.$emit('addZhuang','武侯区')
        }
    }
	}
</script>

<style scoped>
	h3 {
		color:green;
	}
</style>
