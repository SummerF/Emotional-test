import Vue from "vue";
import App from "./App.vue";
import './assets/styles/reset.css'
import './assets/styles/border.css'
import store from "./store";
import 'babel-polyfill'
import './plugins/element.js'

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
