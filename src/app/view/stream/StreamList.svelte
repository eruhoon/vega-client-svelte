<script lang="ts">
  import type { StreamInfo } from '../../model/stream/StreamInfo';
  import { FavoriteService } from '../../service/FavoriteService';
  import { OptionService } from '../../service/OptionService';
  import { StreamService } from '../../service/StreamService';
  import ChristmasEventItem from '../main/bottom/ChristmasEventItem.svelte';
  import StreamEntry from './StreamEntry.svelte';

  let entries: StreamInfo[] = [];
  let externals: StreamInfo[] = [];
  let favorites: StreamInfo[];
  let rightAlign: boolean = false;

  $: favorites = externals.filter((it) => {
    const { platform, keyid: keyId } = it;
    return FavoriteService.isFavorite(platform, keyId);
  });

  StreamService.locals.subscribe((v) => (entries = v));
  StreamService.externals.subscribe((it) => (externals = it));
  OptionService.enableCheckerRightAlign.subscribe((it) => {
    rightAlign = it;
    console.log(it);
  });
</script>

<div class="stream-list" class:right-align={rightAlign}>
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
  <ChristmasEventItem />
</div>

<style lang="scss">
  .stream-list {
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    background: var(--primary-background-color);
    border: 1px solid var(--primary-hoverground-color);

    box-shadow: var(--primary-box-shadow);

    &.right-align {
      justify-content: flex-end;
    }
  }

  .stream-item {
    display: inline-block;
    margin: 0;

    &:first-child {
      margin-inline-start: 2.5px;
    }

    &:last-child {
      margin-inline-end: 2.5px;
    }
  }
</style>
