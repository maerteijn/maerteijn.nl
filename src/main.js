import Vue from 'vue';
import App from "./app";

import './scss/main.scss';

const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
