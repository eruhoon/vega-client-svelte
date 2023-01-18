<script lang="ts">
  import { get } from 'svelte/store';
  import type { Content } from '../../../model/window/Content';
  import { WindowService } from '../../../service/WindowService';
  import DonationPage from '../../donation/DonationPage.svelte';
  import MemoContentView from '../../memo/MemoContentView.svelte';
  import PhotoContentView from '../../photo/PhotoContentView.svelte';
  import HlsContentView from './HlsContentView.svelte';
  import IframeContentView from './IframeContentView.svelte';
  import LocalStreamContentView from './LocalStreamContentView.svelte';
  import TotoroStreamContentView from './TotoroStreamContentView.svelte';
  import TwitchContentView from './TwitchContentView.svelte';

  let content: Content | null = get(WindowService.content);

  WindowService.content.subscribe((v) => (content = v));
</script>

<div class="content">
  {#if content}
    {#if content.type === 'iframe'}
      <IframeContentView src={content.src} />
    {:else if content.type === 'local-stream'}
      <LocalStreamContentView src={content.src} />
    {:else if content.type === 'totoro-stream'}
      <TotoroStreamContentView src={content.src} />
    {:else if content.type === 'twitch-stream'}
      <TwitchContentView src={content.src} />
    {:else if content.type === 'photo'}
      <PhotoContentView />
    {:else if content.type === 'memo'}
      <MemoContentView />
    {:else if content.type === 'donation'}
      <DonationPage />
    {:else if content.type === 'hls'}
      <HlsContentView title="HLS Viewer" url={content.src} />
    {/if}
  {/if}
</div>

<style lang="scss">
  .content {
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
  }
</style>
