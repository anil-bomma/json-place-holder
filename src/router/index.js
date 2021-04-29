import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/post/:id', // lazy loading route
    name: 'Post',
    component: () =>
        import(/* webpackChunkName: "term" */ "../components/Post.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
