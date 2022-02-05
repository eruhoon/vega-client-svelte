<script lang="ts">
  import { SessionService } from '../../service/SessionService';
  import ToastList from '../common/ToastList.svelte';
  import LoginPage from '../login/LoginPage.svelte';
  import MainPage from '../main/MainPage.svelte';

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

  .toast-layer {
    position: fixed;
    width: 0;
    height: 0;
    z-index: 100;
  }
</style>
