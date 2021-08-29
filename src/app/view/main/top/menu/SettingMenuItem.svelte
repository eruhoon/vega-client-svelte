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
    border-bottom: 1px solid #1f2226;
    min-height: 45px;

    &:last-child {
      border-bottom: 0px;
    }

    &.hover:hover {
      background-color: #1f2226;
    }

    &.hover {
      cursor: pointer;
    }
  }
</style>
