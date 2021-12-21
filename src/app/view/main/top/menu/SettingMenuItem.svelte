<script lang="ts">
  export let hoverable = true;
  export let menuClick = () => {};
</script>

<div class="item" class:hover={hoverable} on:click={menuClick}>
  <slot name="body" />
</div>

<style lang="scss">
  .item {
    display: flex;
    justify-items: center;
    position: relative;
    width: 100%;
    border-bottom: 1px solid var(--primary-hoverground-color);
    min-height: 45px;

    &:last-child {
      border-bottom: 0px;
    }

    &.hover:hover {
      background-color: var(--primary-hoverground-color);
    }

    &.hover {
      cursor: pointer;
    }
  }
</style>
