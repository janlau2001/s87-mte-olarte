import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Workouts from '../pages/Workouts.vue'
import AddWorkouts from '../pages/AddWorkouts.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/workouts' },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/workouts', component: Workouts, meta: { auth: true } },
    { path: '/addWorkouts', component: AddWorkouts, meta: { auth: true } },
  ],
})

router.beforeEach((to) => {
  const loggedIn = !!localStorage.getItem('token')
  if (to.meta.auth && !loggedIn) return '/login'
  if ((to.path === '/login' || to.path === '/register') && loggedIn) return '/workouts'
})

export default router
