<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let icon: string;
</script>

<div class="root">
  <!-- svelte-ignore a11y-missing-attribute -->
  <img class="icon" src={icon} on:click={() => dispatch('iconclick')} />
</div>

<style lang="scss">
  $menu-icon-size: 60px;
  $menu-icon-size-5px: 65px;
  $background-color: var(--primary-background-color);

  .root {
    position: relative;
    display: inline-block;
    width: $menu-icon-size - 5px;
    height: $menu-icon-size;

    .icon {
      width: $menu-icon-size - 10px;
      height: $menu-icon-size - 10px;
      padding: 5px 2.5px;
      border-radius: 2px;
      opacity: 0.5;
    }

    .detail {
      $width: 240px;
      position: absolute;
      display: none;
      align-items: center;
      left: 5px;
      right: auto;
      bottom: $menu-icon-size + 0px;
      width: $width;
      height: 120px;
      border-radius: 2px;
      background: dark($background-color, 10%);
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      border-radius: 0px;
      overflow: hidden;
      box-shadow: var(--primary-box-shadow);

      &.thumbnail {
        height: 195px;
      }

      &.right-align {
        left: auto;
        right: 5px;
      }

      .thumbnail {
        width: $width;
        max-height: 135px;
        padding-bottom: 65px;
      }

      .bridge {
        width: auto;
        height: auto;
        position: absolute;
        right: 5px;
        top: 5px;
        button {
          width: 32px;
          height: 32px;
          border: 0px;
          border-radius: 20px;
          margin: 2px;
          padding: 0%;
          color: var(--primary-foreground-color);
          background-color: var(--primary-background-color);

          &:hover {
            background-color: var(--primary-activeground-color);
            color: var(--primary-activeground-font-color);
          }

          i {
            font-size: 12px;
          }
        }
      }

      .wrapper {
        width: 100%;
        height: 60px;

        position: absolute;
        left: 0px;
        bottom: 0px;
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(transparent),
          to(rgba(0, 0, 0, 0.75))
        );
        background: var(--primary-background-color);

        .text {
          width: calc(100% - 10px);
          margin-left: 10px;
          margin-top: 10px;

          .title {
            width: calc(100% - 90px);
            text-align: left;
            color: var(--primary-foreground-color);
            font-size: 18px;
            font-weight: bold;
            margin: 0%;
            padding: 0%;
            opacity: 1;
            padding-bottom: 5px;
            float: left;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .viewer {
            max-width: 70px;
            height: 20px;
            margin-right: 5px;
            color: var(--primary-foreground-color);
            font-size: 12px;
            float: right;
            display: flex;
            align-items: center;
            -webkit-align-items: center;
            span {
              font-size: 14px;
              line-height: 20px;
            }
            i {
              padding-left: 5px;
              font-size: 14px;
              line-height: 20px;
            }
          }
        }

        .description {
          width: calc(100% - 20px);
          text-align: left;
          color: #eee;
          font-size: 9px;
          overflow: hidden;
          padding: 0%;
          margin-left: 10px;
        }
      }
    }

    &:hover {
      .icon {
        opacity: 1;
      }

      .detail {
        display: flex;
      }
    }
  }
</style>
