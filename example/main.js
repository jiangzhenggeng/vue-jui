import './inline/flexible.min'
import Vue from 'vue'
import VuejUI from '../src'

Vue.use(VuejUI)
import App from './app.vue'

new Vue({
  el: '#app',
  render: _ => _(App)
})