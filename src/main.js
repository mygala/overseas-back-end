// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/'
import VueResource from 'vue-resource'
import i18n from 'vue-i18n'

Vue.use(Vuex);
Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    i18n: i18n,
    components: {App},
    template: '<App/>'
});