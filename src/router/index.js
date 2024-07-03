import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
];

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

export default router;
