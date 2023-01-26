<script lang="ts">
  import { onMount } from 'svelte';
  import type { StreamInfo } from '../../model/stream/StreamInfo';
  import { FavoriteService } from '../../service/FavoriteService';
  import { StreamService } from '../../service/StreamService';
  import StreamEntry from './StreamEntry.svelte';

  let entries: StreamInfo[] = [];
  let externals: StreamInfo[] = [];
  let favorites: StreamInfo[];

  $: favorites = externals.filter((it) => {
    const { platform, keyid: keyId } = it;
    return FavoriteService.isFavorite(platform, keyId);
  });
  $: lck = externals.find((it) => it.platform === 'lck');
  $: locals = entries.filter((it) => it.platform === 'local');
  $: notLocals = entries.filter((it) => it.platform !== 'local');

  onMount(() => {
    StreamService.locals.subscribe((v) => (entries = v));
    StreamService.externals.subscribe((it) => (externals = it));
  });
</script>

{#each locals as stream}
  <StreamEntry {stream} />
{/each}
{#each notLocals as stream}
  <StreamEntry {stream} />
{/each}
{#each favorites as favorite}
  <StreamEntry stream={favorite} />
{/each}
{#if lck}
  <StreamEntry stream={lck} />
{/if}
