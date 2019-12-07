import Vue from 'vue'
import Router from 'vue-router'
import Gantt from '../components/Gantt.vue'
import File from '../components/File.vue'
import Index from '../components/Index.vue'
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '首頁',
            component: Index,
            children:[
                {
                    path: '/signin',
                    name: '登入頁面',
                    component: Signin
                },
                {
                    path: '/signup',
                    name: '註冊頁面',
                    component: Signup
                },
                {
                    path: '/gantt',
                    name: '甘特頁面',
                    component: Gantt
                },
                {
                    path: '/file',
                    name: '檔案頁面',
                    component: File
                },
            ],
        },
        
    ]
})