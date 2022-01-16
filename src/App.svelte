<script lang="ts">
  import { Route, Router } from 'svelte-routing';
  import ChatRoute from './app/view/route/ChatRoute.svelte';
  import EmbedRoute from './app/view/route/EmbedRoute.svelte';
  import MainRoute from './app/view/route/MainRoute.svelte';
  import ObsChatRoute from './app/view/route/ObsChatRoute.svelte';
  export let url = '';
</script>

<Router {url}>
  <Route path="/"><MainRoute /></Route>
  <Route path="/embed"><EmbedRoute /></Route>
  <Route path="/chat"><ChatRoute /></Route>
  <Route path="/obs/chat"><ObsChatRoute /></Route>
</Router>
