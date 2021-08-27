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
    // padding: 15px 10px;

    p {
      margin: 0%;
      padding: 0%;
      color: #ffffff;
      padding: 14px 10px;
      padding-right: 0px;
    }

    .icon {
      width: 32px;
      height: 46px;
      color: #ffffff;
      margin: 0%;
      text-align: center;
      i {
        font-size: 20px;
        padding: 13px 7px;
      }
    }

    &:last-child {
      border-bottom: 0px;
    }

    &.button-attached {
      button {
        width: 50px;
        height: 50px;
        background: transparent;
        border: none;
        cursor: pointer;
        margin: 10px 0px;

        position: absolute;
        top: 0;
        right: 0;
      }
    }

    &.image-attached {
      img {
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 45px;
        border-left: 1px solid #1f2226;
      }
    }

    &.hover:hover {
      background-color: #1f2226;
    }

    &.hover {
      cursor: pointer;
    }
  }
</style>
