import { createRouter, createWebHistory } from 'vue-router';

import MainLk from '../components/MainLk.vue';
import ProfileLk from '../components/ProfileLk.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLk,
    },
    {
      path: '/profile',
      component: ProfileLk,
    }
  ]
})

export default router;