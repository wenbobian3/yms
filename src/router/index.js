import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import anmimte from '../components/home/anmimte.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: anmimte
        },
        {
            path: '/home',
            component: home
        }
    ]
})