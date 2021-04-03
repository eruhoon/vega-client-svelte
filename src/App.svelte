<script lang="ts">
  import LoginPage from './app/view/login/LoginPage.svelte';
  import MainPage from './app/view/main/MainPage.svelte';

  export let name: string;
</script>

<main>
  <LoginPage />
  <!-- <MainPage /> -->
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
