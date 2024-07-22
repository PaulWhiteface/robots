import { createRouter, createWebHistory } from 'vue-router';

import MainLk from '../components/MainLk.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLk,
    }
  ]
})

export default router;