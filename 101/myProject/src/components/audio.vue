<template>
	<div id="app">
    <img :src="pic">
	</div>
</template>

<script>
  import pic from './logo.png'
	export default {
		name : 'audioTest',
		data(){
			return {
        pic:pic,
			}
		}
	}
</script>

<style>

</style>
