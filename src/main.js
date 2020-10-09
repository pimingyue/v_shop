// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import './plugin/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

axios.interceptors.request.use(config => {
    // Do something before request is sent
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config;
}, error => {
    return Promise.reject(error);
});

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})