import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import colors from 'vuetify/lib/util/colors'

import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';

import VueApexCharts from 'vue-apexcharts'
import './assets/tailwind.css'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.component('Datepicker', VueDatepickerUi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
