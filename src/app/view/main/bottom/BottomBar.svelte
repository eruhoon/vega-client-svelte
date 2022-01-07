<script lang="ts">
  import { onMount } from 'svelte';
  import { OptionService } from '../../../service/OptionService';
  import StreamList from '../../stream/StreamList.svelte';
  import HappyNewYearEventItem from './HappyNewYearEventItem.svelte';

  let rightAlign: boolean = false;

  onMount(() => {
    OptionService.enableCheckerRightAlign.subscribe((it) => {
      rightAlign = it;
    });
  });
</script>

<div class="bottom-bar" class:right-align={rightAlign}>
  <StreamList />
  <HappyNewYearEventItem />
</div>

<style lang="scss">
  .bottom-bar {
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
</style>
