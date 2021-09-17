<script lang="ts">
  import type { ChatReactionItemParam as Param } from './ChatReactionItemParam';

  export let param: Param;
  $: title = makeTitle(param);

  function makeTitle(param: Param) {
    const { users } = param;
    const { length } = users;
    const [{ nickname }] = users;
    return length > 1 ? `${nickname} 외 ${length - 1}명` : nickname;
  }
</script>

<div class="reaction-item">
  {#if param.value === 'thumb-up'}
    <span>👍</span>
  {:else}
    <span>👎</span>
  {/if}
  <div class="reaction-item-title">
    <span> {title} </span>
  </div>
</div>

<style lang="scss">
  .reaction-item {
    position: relative;
    display: inline-block;
    cursor: default;

    .reaction-item-title {
      position: absolute;
      left: 0;
      bottom: 20px;
      display: none;
      width: 150px;
      min-height: 20px;

      span {
        color: white;
        padding: 5px;
        border-radius: 10px;
        font-size: 12px;
        line-height: 20px;
      }
    }
    &:hover {
      .reaction-item-title {
        display: inline-block;
      }
    }
  }
</style>
