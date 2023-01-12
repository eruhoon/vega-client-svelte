<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let hash: string = '';
  export let nickname: string = '';
  export let icon: string = '';

  const dispatch = createEventDispatcher<{ onentryclick: string }>();

  function onEntryClick() {
    dispatch('onentryclick', hash);
  }
</script>

<div class="chat-user-entry" on:click={onEntryClick}>
  <div class="user-icon">
    <img src={icon} alt={nickname} />
  </div>
  <div class="info">
    <div class="nickname">
      <p>{nickname}</p>
    </div>
  </div>
  <div class="icon">
    <slot />
  </div>
</div>

<style lang="scss">
  .chat-user-entry {
    display: block;
    width: calc(100% - 10px);
    height: 30px;
    padding: 5px;
    font-size: 14px;
    line-height: 20px;
    border-bottom: 1px solid var(--primary-hoverground-color);

    &:last-child {
      border-bottom: 0px;
    }

    .user-icon {
      width: 30px;
      height: 30px;
      overflow: hidden;
      float: left;
      border-radius: 30px;

      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
      }
    }

    .info {
      width: calc(100% - 90px);
      height: 30px;
      float: left;
      padding-left: 8px;

      div {
        width: 100%;
        float: left;
        padding-top: 8px;

        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    .icon {
      width: 50px;
      height: 30px;
      float: right;
    }
  }
</style>
