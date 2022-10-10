import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import colors from 'vuetify/lib/util/colors'


import VueApexCharts from 'vue-apexcharts'
import './assets/tailwind.css'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)


import Vue2Editor from "vue2-editor";

Vue.use(Vue2Editor);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
