import Vue from 'vue'
import Router from 'vue-router'
import Gantt from '../components/Gantt.vue'
import File from '../components/File.vue'
import Index from '../components/Index.vue'
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'
import Redirect from '../components/Redirect.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Index,
            children: [
                {
                    path: '/',
                    name: 'file',
                    component: File
                },
                {
                    path: '/signin',
                    name: 'signin',
                    component: Signin
                },
                {
                    path: '/signup',
                    name: 'signup',
                    component: Signup
                },
                {
                    path: '/gantt',
                    name: 'gantt',
                    component: Gantt
                },
            ],
        },
        {
            path: '/redirect',
            name: 'redirect',
            component: Redirect,
        },
        {
            path: '*',
            name: 'other',
            redirect: '/',
        },
    ],
});