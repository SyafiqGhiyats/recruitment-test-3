import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VTooltip from 'v-tooltip'
import "./styles/main.scss";


Vue.config.productionTip = false;
Vue.use(VTooltip)
console.dir(VTooltip.options)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
