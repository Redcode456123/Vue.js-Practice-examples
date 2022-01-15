import Vue from "vue";
import App from "./App";
import store from "./store/index";
import router from './router'
import vuetify from 'vuetify/lib'

export const UrlResolver = require('relative-url-resolver');

import BTabs from 'bootstrap-vue'


import datePicker from "vue-bootstrap-datetimepicker";
Vue.use(BTabs)

import VueCardFormat from 'vue-credit-card-validation';

import Vuelidate from 'vuelidate'
Vue.use(datePicker);
Vue.use(Vuelidate)
Vue.use(VueCardFormat);
import VueImg from 'v-img';

Vue.use(VueImg);
// Vue.use(useVuelidate);
Vue.use(vuetify)
// Vue.use(UrlResolver)
const opts = {}

new Vue({
    store,
    router,
    opts,

    data: {
        // return: {
        //     validations: {}
        // }
    },

    created() {
        store.dispatch('fetchProducts').then(_ => {
        }).catch((error) => console.log(error))
    },
    render: h => h(App)
}).$mount("#app");


