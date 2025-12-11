import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Receptek from '../pages/Receptek.vue'
import ReceptDetails from '../pages/ReceptDetails.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/receptek', name: 'receptek', component: Receptek },
  { path: '/receptek/:id', name: 'recept', component: ReceptDetails }
]

export default createRouter({
  history: createWebHistory(),
  routes
})