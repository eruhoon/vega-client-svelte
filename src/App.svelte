<script lang="ts">
  import { onMount } from 'svelte';
  import { MyStatus } from './app/model/status/MyStatus';

  import LoginPage from './app/view/login/LoginPage.svelte';
  import MainPage from './app/view/main/MainPage.svelte';

  let userHash: string | null = null;

  onMount(() => {
    // console.log(userHash);
    // console.log(userHash !== null && userHash.length > 0);

    userHash = sessionStorage.getItem('privateKey') || null;
  });

  const onLogin = (e: CustomEvent<string>) => {
    const hash = e.detail;
    userHash = hash;
    MyStatus.privateKey = hash;
    sessionStorage.setItem('privateKey', hash);
  };
</script>

<main>
  {#if userHash !== null && userHash.length > 0}
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
