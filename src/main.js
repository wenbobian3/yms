// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import vuex from './vuex/module.js'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// Vue.use(Vuex)
Vue.use(mint)
import store from './vuex/index.js';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})