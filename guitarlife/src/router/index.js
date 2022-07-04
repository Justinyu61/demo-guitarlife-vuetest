import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'
import Forget from '../views/forget/Forget'
import Register from '../views/register/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
      next()
    }
  },  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
      next()
    }
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget,
    // beforeEnter (to, from, next) {
    //   const { isLogin } = localStorage
    //   isLogin ? next({ name: 'Home' }) : next()
    //   next()
    // }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// to -> 當路由要做跳轉的時候,要跳到哪個頁面信息
// from -> 從哪裡跳過來的信息
// router.beforeEach -> 每次做路由之前都會先跑這個方法
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register' || name === 'Forget');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
