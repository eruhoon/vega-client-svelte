<script lang="ts">
  import LoginPage from './app/view/login/LoginPage.svelte';
  import MainPage from './app/view/main/MainPage.svelte';

  let userHash: string | null = null;

  const onLogin = (e: CustomEvent<string>) => {
    const hash = e.detail;
    userHash = hash;
  };
</script>

<main>
  {#if userHash !== null}
    <MainPage />
  {:else}
    <LoginPage on:login={onLogin} />
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>
