<script lang="ts">
  import VegaPopupWindow from '../../view-framework/window/VegaPopupWindow.svelte';
  import type { IframePopupContent } from './IframePopupContent';
  import { PopupContentService } from './PopupContentService';

  export let content: IframePopupContent;
  $: src = content.src;
  $: title = src.title;
  $: link = src.link;
  const allowfullscreen = true;

  let windowWidth: number;
  let windowHeight: number;

  function onExit() {
    PopupContentService.removeContent(content);
  }
</script>

<VegaPopupWindow {title} on:oncloseclick={onExit}>
  <iframe class="content" src={link} {allowfullscreen} {title} />
</VegaPopupWindow>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<style lang="scss">
  iframe.content {
    width: 100%;
    height: 100%;
    border: 0px;
    background: var(--primary-hoverground-color);
  }
</style>
