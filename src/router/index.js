import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentsView from '../views/StudentsView.vue'
import ClassView from '../views/ClassView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/danh_sach_lop',
    name: 'lop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/ClassView.vue')
    component: ClassView
  },
  {
    path: '/danh_sach_hoc_sinh',
    name: 'hoc_sinh',
    component: StudentsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
