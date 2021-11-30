import MainRoute from './MainRoute.svelte';
import EmbedRoute from './EmbedRoute.svelte';

const routes = [
  {
    name: '/',
    component: MainRoute,
  },
  {
    name: '/embed',
    component: EmbedRoute,
  },
];

export { routes };
