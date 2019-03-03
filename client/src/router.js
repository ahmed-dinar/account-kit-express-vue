import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';

const base = process.env.NODE_ENV === 'production' ? '/client/' : '/';

const routes = [
  { path: `/`, component: Home },
  { path: `/login`, component: Login }
];

const router = new VueRouter({
  base,
  mode: 'history',
  routes
});

export default router;