import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./app";
import router from "./js/router";
import './scss/main.scss';

Vue.use(VueRouter);

const app = new Vue({
  router: router,
  el: '#app',
  render: h => h(App),
});
