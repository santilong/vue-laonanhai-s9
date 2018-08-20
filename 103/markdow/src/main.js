// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import $ from "jquery";

import router from "./router";
import Vuex from "vuex";
Vue.config.productionTip = false;

import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    AllList: [],
    note: {
      title: '',
      content: '',
      markdown: ''
    }
  },
  //mutations为修改state中数据的唯一途径，但是mutations是同步操作，可能出现问题，
  //因此我们将逻辑放入异步的actions中操作，mutation只修改数据；
  mutations: {
    GETALLDATA(state, newdata){
      state.AllList = newdata
    },
    ADDONENOTE(state, newdata){
      state.AllList = newdata

    }
  },
  actions: {
    getAllData(context){
      axios.get('http://127.0.0.1:8888/api/components/').then(function (response) {
            context.commit('GETALLDATA', response.data)
        }).catch(function (error) {
            console.log(error);
        })
    },
    addOneNote(context, json){
      $.ajax({
        url: 'http://127.0.0.1:8888/api/components/create/',
        type: 'post',
        data: json,
        success: function (data) {
          context.commit('ADDONENOTE', data)
        }
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
