import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ChampionsView from '@/views/ChampionsView.vue';
import ItemsView from '@/views/ItemsView.vue';
import TeamBuilderView from '@/views/TeamBuilderView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/champions',
      name: 'champions',
      component: ChampionsView
    },
    {
      path: '/items',
      name: 'items',
      component: ItemsView
    },
    {
      path: '/team-builder',
      name: 'team-builder',
      component: TeamBuilderView
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ],
  linkActiveClass: 'router-link--active',
  linkExactActiveClass: 'router-link--exact-active'
});

export default router;
