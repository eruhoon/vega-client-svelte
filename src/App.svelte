<script lang="ts">
  import { Route, Router } from 'svelte-routing';
  import { WindowService } from './app/service/WindowService';
  import ChatRoute from './app/view/route/ChatRoute.svelte';
  import EmbedRoute from './app/view/route/EmbedRoute.svelte';
  import MainRoute from './app/view/route/MainRoute.svelte';
  import ObsChatRoute from './app/view/route/ObsChatRoute.svelte';
  export let url = '';

  let keyCount = 0;
  const MaxKeyCount = 3;

  document.onkeyup = (e: KeyboardEvent) => {
    if (e.code === 'ShiftRight') {
      keyCount++;
      if (keyCount === MaxKeyCount) {
        WindowService.openModal('test-command');
      }
    } else {
      keyCount = 0;
    }
  };
</script>

<Router {url}>
  <Route path="/"><MainRoute /></Route>
  <Route path="/embed"><EmbedRoute /></Route>
  <Route path="/chat"><ChatRoute /></Route>
  <Route path="/obs/chat"><ObsChatRoute /></Route>
</Router>
