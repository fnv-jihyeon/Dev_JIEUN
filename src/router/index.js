import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TodoApp from '@/example/TodoApp.vue';
import MarkdownEditor from '@/example/MarkdownEditor.vue';
import ModalTransitions from '@/example/modal/ModalTransitions.vue';
import SvgGraph from '@/example/graph/SvgGraph.vue';
import AttributeBindings from '@/example/AttributeBindings.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoApp,
  },
  {
    path: '/markdownEditor',
    name: 'markdownEditor',
    component: MarkdownEditor,
  },
  {
    path: '/modal',
    name: 'modal',
    component: ModalTransitions,
  },
  {
    path: '/graph',
    name: 'graph',
    component: SvgGraph,
  },
  {
    path: '/binding',
    name: 'binding',
    component: AttributeBindings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
