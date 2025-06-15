// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import MapPage from '../components/MapPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/sobre',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/mapa',
    name: 'Map',
    component: MapPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;