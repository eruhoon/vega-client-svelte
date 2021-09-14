<script lang="ts">
  import type { StreamInfo } from '../../../../model/stream/StreamInfo';
  import SideBarStreamEntry from './SideBarStreamEntry.svelte';

  export let title: string;
  export let streams: StreamInfo[] = [];
  export let selected = false;
  $: size = streams.length;
</script>

<h3 on:click={(_) => (selected = !selected)}>
  {title} <small>({size})</small>
</h3>
<ul class="stream" class:selected>
  {#each streams as stream}
    <SideBarStreamEntry {stream} />
  {/each}
</ul>

<style lang="scss">
  h3 {
    font-size: 12px;
    padding: 7.5px 10px;
    margin: 0;
    cursor: pointer;
  }
  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
    width: 100%;
    height: 0;
    opacity: 0;
    transition: none;
    -webkit-transition: none;

    &.selected {
      height: auto;
      opacity: 1;
      transition: opacity 0.2s, height 0.2s 0.2s;
      -webkit-transition: opacity 0.2s, height 0.2s 0.2s;
    }
  }
</style>
