<script lang="ts">
  import PushEntry from './PushItem.svelte';
  import type { PushEntryParam } from './PushEntryParam';
  import { PushListService } from './PushListService';
  import { onMount } from 'svelte';

  let params: PushEntryParam[] = [];

  onMount(() => {
    console.log('readAll');
    PushListService.readAll();
  });

  PushListService.params.subscribe((it) => (params = it));
</script>

<div class="nt-list">
  {#if params.length === 0}
    <div class="nt-no-entry">
      <i class="fas fa-eye-slash" />
      <p>알림이 없습니다.</p>
    </div>
  {:else}
    {#each params as param (param.hash)}
      <PushEntry {param} />
    {/each}
  {/if}
</div>

<style lang="scss">
  .nt-no-entry {
    width: 370px;
    height: 50px;

    border: 1px solid #e0e0e0;
    border-radius: 5px;

    background: linear-gradient(145deg, #ffffff, #fefefe);
    box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
      0 1px 3px 1px rgba(60, 64, 67, 0.16);

    padding: 10px 15px;

    i {
      width: 50px;
      height: 50px;
      font-size: 28px;
      text-align: center;
      line-height: 50px;
      color: #616161;
      float: left;
    }

    p {
      width: calc(100% - 60px);
      height: 50px;
      float: right;

      padding: 0%;
      margin: 0%;

      color: #616161;

      font-size: 14px;
      line-height: 46px;
    }
  }

  @media screen and (max-width: 768px) {
    .nt-no-entry {
      width: calc(100% - 32px);
      height: 50px;
    }
  }
</style>
