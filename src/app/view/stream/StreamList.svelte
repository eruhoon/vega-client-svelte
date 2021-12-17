<script lang="ts">
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

  StreamService.locals.subscribe((v) => (entries = v));
  StreamService.externals.subscribe((it) => (externals = it));
</script>

<div class="stream-list">
  {#each entries as b}
    <div class="stream-item">
      <StreamEntry stream={b} />
    </div>
  {/each}
  {#each favorites as favorite}
    <div class="stream-item">
      <StreamEntry stream={favorite} />
    </div>
  {/each}
</div>

<style lang="scss">
  .stream-list {
    height: 100%;
    width: 100%;
    padding-left: 4px;
    padding-right: 8px;

    background: #2a2f38;
    border: 1px solid #1f2226;

    box-shadow: 2px 0px 5px 1px rgb(0 0 0 / 40%),
      1px 0px 5px 0px rgb(0 0 0 / 30%), 1px 0px 5px 0px rgb(0 0 0 / 30%);
  }
  .stream-item {
    display: inline-block;
  }
</style>
