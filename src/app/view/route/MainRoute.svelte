<script lang="ts">
  import { SessionService } from '../../model/session/SessionService';
  import { MobileUtils } from '../../util/mobile/MobileUtils';
  import ToastList from '../common/ToastList.svelte';
  import LoginPage from '../login/LoginPage.svelte';
  import MainPage from '../main/MainPage.svelte';
  import MobileMainPage from '../main/MobileMainPage.svelte';

  let userHash: string | null = null;

  SessionService.subscribePrivateKey((v) => (userHash = v));
</script>

<main>
  {#if userHash !== null && userHash.length > 0}
    {#if MobileUtils.isMobile()}
      <MobileMainPage privateKey={userHash} />
    {:else}
      <MainPage privateKey={userHash} />
    {/if}
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
