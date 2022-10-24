import { createRouter, createWebHistory } from 'vue-router'

let token = localStorage.getItem("token") || "";

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
  if (to.meta.requiresAuth && !token) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login-register',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    }
  }
})
export default router