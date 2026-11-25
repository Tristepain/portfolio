import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import MyProjects from './components/MyProjects.vue'
import Home from './components/Home.vue'
import PixelArt from './components/PixelArt.vue'
import MyContacts from './components/MyContacts.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/myProjects',
    name: 'MyProjects',
    component: MyProjects
  },
  {
    path: '/myProjects/pixelArt',
    name: 'PixelArt',
    component: PixelArt
  },
  {
    path: '/myContacts',
    name: 'MyContacts',
    component: MyContacts
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

createApp(App).use(router).mount('#app')
