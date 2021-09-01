<script lang="ts">
  import { SessionService } from './app/model/session/SessionService';
  import ToastList from './app/view/common/ToastList.svelte';
  import LoginPage from './app/view/login/LoginPage.svelte';
  import MainPage from './app/view/main/MainPage.svelte';

  let userHash: string | null = null;

  SessionService.subscribePrivateKey((v) => (userHash = v));
</script>

<main>
  {#if userHash !== null && userHash.length > 0}
    <MainPage privateKey={userHash} />
  {:else}
    <LoginPage />
  {/if}
  <div class="toast-layer">
    <ToastList />
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>
