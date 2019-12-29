import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const signinToken = localStorage.getItem('signinToken');
  if (signinToken) {
      next();
  } else {
      if (to.path !== '/signin' && to.path !== '/signup')
          next('/signin');
      else
          next();
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
