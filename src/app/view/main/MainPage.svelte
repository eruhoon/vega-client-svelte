<script lang="ts">
  import ToastList from '../common/ToastList.svelte';
  import TopBar from './TopBar.svelte';
</script>

<main>
  <nav class="top-bar-section">
    <TopBar />
  </nav>
  <div class="main-section">
    <div class="chat-list-view">
      <chat-page />
    </div>
  </div>
  <ToastList />
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
  }

  .main-section {
    position: absolute;
    left: 0;
    top: $top-bar-height;
    display: block;
    width: 100%;
    height: calc(100% - #{$top-bar-height});

    $default-chat-width: 300px;
    .chat-list-view {
      position: absolute;
      top: 0;
      right: 0;
      width: $default-chat-width;
      height: 100%;
      background: #424242;
      border-right: 1px solid #616161;
      border-left: 1px solid #616161;

      chat-page {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
