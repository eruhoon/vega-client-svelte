<script lang="ts">
  import TopBar from './TopBar.svelte';
</script>

<main>
  <nav class="top-bar-section">
    <TopBar />
  </nav>
</main>

<style lang="scss">
  $top-bar-height: 50px;

  nav.top-bar-section {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: $top-bar-height;
    margin: 0;
    background: #212121;
    border-bottom: 1px solid #424242;

    z-index: 90;
  }
</style>
