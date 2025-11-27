import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Booking from '../views/Booking.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/booking', component: Booking }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
