<script lang="ts">
  import { fade } from 'svelte/transition';

  export let icon: string;
  export let title: string;
</script>

<header transition:fade={{ delay: 150, duration: 400 }}>
  {#if icon}
    <!-- svelte-ignore a11y-missing-attribute -->
    <img class="icon" src={icon} />
  {/if}
  <div class="title">{title}</div>
</header>

<style lang="scss">
  header {
    $icon-size: 70px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100px;

    background: -moz-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.75) 74%,
      rgba(0, 0, 0, 0.9) 100%
    );
    background: -webkit-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.75) 74%,
      rgba(0, 0, 0, 0.9) 100%
    );
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.75) 74%,
      rgba(0, 0, 0, 0.9) 100%
    );

    .icon {
      position: absolute;
      left: 10px;
      top: 10px;
      width: $icon-size;
      height: $icon-size;
    }

    .title {
      position: absolute;
      left: calc(20px + #{$icon-size});
      top: 10px;
      width: calc(100% - #{$icon-size} - 30px);
      color: #ffffff;
    }
  }
</style>
