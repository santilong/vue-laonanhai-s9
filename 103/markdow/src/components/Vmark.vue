<template>
  <div>
    <div class="panel-heading">
      请输入文章标题：<input type="text" name="" v-model="titleHandler"/>
      <button class="btn btn-success" @click="addOneNote">提交</button>
    </div>
    <div class="marked">
      <textarea class="editor" v-model="markdownHandler"></textarea>
      <div class="show" v-html="markedStr" ref="t"></div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Marked from 'marked'
  export default {
    name: 'Vmarked',
    data(){
      return {

      }
    },
    methods: {
      addOneNote(){
          var json = {
            title: this.titleHandler,
            markdown: this.markdownHandler,
            content: this.$refs.t.innerText
          };
          console.log(json);
        this.$store.dispatch('addOneNote',json)
      }
    },
    computed: {
      markedStr: function () {
        return Marked(this.markdownHandler)
      },
      titleHandler:{
        set:function (newvalue) {
            this.$store.state.note.title = newvalue
          },
        get:function () {
          return this.$store.state.note.title
        }
      },
      markdownHandler:{
         set:function (newvalue) {
            this.$store.state.note.markdown = newvalue
          },
        get:function () {
          return this.$store.state.note.markdown
        }
      }
    }
  }
</script>

<style scoped>
  .marked {
    width: 800px;
    height: 400px;
    margin: 0 auto;
  }

  .editor, .show {
    width: 395px;
    float: left;
    border: 1px solid black;
    height: 400px;
  }
</style>
