import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import anmimte from '../components/home/anmimte.vue'
import find from '../components/find/find.vue'
import story from '../components/story/story.vue'
import personal from '../components/personal/personal.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: anmimte
        },
        {
            path: '/home',
            component: home
        }, {
            path: '/find',
            component: find
        }, {
            path: '/story',
            component: story
        }, {
            path: '/personal',
            component: personal
        }
    ]
})