import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from './stores/auth'
let token = "";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login-register',
    name: 'loginRegister',
    component: () => import(/* webpackChunkName: "login" */ './views/LoginRegister.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  // 而不是去检查每条路由记录
  if (to.meta.requiresAuth) {
    // 此路由需要授权，请检查是否已登录
    if (!token && localStorage.getItem("AuthorizationToken")) {
      let store = useStore();
      store.setToken(localStorage.getItem("AuthorizationToken"));
      store.setUser(JSON.parse(localStorage.getItem("user")));
      token = store.token;
    }
    // 如果没有，则重定向到登录页面
    if (!token)
      return {
        path: '/login-register',
        // 保存我们所在的位置，以便以后再来
        query: { redirect: to.fullPath },
      }
  }
})
export default router