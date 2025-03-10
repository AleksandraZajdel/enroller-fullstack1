import Vue from 'vue';
import App from './App.vue';
import VueResource from "vue-resource"; //do komunikacji z backendem

Vue.use(VueResource);
Vue.http.options.root = '/api';

new Vue({
    el: '#app',
    render: h => h(App),
});