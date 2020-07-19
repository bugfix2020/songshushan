import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index';

import("@/assets/css/base/border.css");
import("@/assets/css/base/reset.css");
require("@/plugins/element");
// require("@/plugins/antDesign");

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
