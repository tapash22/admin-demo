import Vue from 'vue'
import Vuex from 'vuex'
import counterModule from './modules/counter/index';
import todeModule from './modules/todos/index';
import empModule from './modules/employe/index';

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    counter: counterModule,
    todos: todeModule,
    emp:empModule
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {

  },
})
