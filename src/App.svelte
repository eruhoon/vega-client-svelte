<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing';
  import EmbedRoute from './app/view/route/EmbedRoute.svelte';
  import MainRoute from './app/view/route/MainRoute.svelte';
  export let url = '';
</script>

<Router {url}>
  <Route path="/"><MainRoute /></Route>
  <Route paht="/embed"><EmbedRoute /></Route>
</Router>
