import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import FinevoInView from '@/views/FinevoInView.vue';
import TodoApp from '@/example/todo/TodoApp.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/finevo-in',
    name: 'finevo-in',
    component: FinevoInView,
  },
  {
    path: '/test',
    name: 'test',
    component: TodoApp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
  linkExactActiveClass: 'router-active',
});

export default router;
