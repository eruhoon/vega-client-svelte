<script lang="ts">
  import { WindowService } from '../../service/WindowService';

  export let title: string;
  export let icon: string;

  export const close = () => {
    WindowService.closeModal();
  };
</script>

<div class="modal">
  <div class="title">
    <div class="icon">
      <i class={icon} />
    </div>
    <h3>{title}</h3>
  </div>
  <div class="body">
    <slot name="body" />
  </div>
  <button class="modal-close" on:click={close}>
    <i class="fas fa-times" />
  </button>
</div>

<style lang="scss">
  // 모달 박스 시작
  .modal {
    position: relative;
    width: 500px;
    height: auto;
    //height: 725px;
    max-width: 100%;
    max-height: calc(100% - 100px);
    background: var(--primary-background-color);
    color: var(--primary-foreground-color);
    border-radius: 2px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06);

    z-index: 100;

    .title {
      width: calc(100% - 30px);
      height: auto;
      padding: 5px 15px;
      display: flex;
      margin-bottom: 15px;
      .icon {
        width: 46px;
        height: 46px;
        color: var(--primary-foreground-color);
        margin: 0%;
        text-align: center;
        i {
          font-size: 24px;
          padding: 11px 11px;
        }
      }
      h3 {
        margin: 0%;
        width: auto;
        color: var(--primary-foreground-color);
        padding: 14px 10px;
        padding-right: 0px;
        font-size: 20px;
        height: auto;
      }
    }
    .body {
      overflow-y: auto;

      * {
        padding: 0%;
        margin: 0%;
      }
    }
  }
  .modal-close {
    width: 58px;
    height: 58px;
    position: absolute;
    top: 0%;
    right: 0%;

    background-color: var(--primary-hoverground-color);
    border: 1px solid var(--primary-hoverground-color);
    border-radius: 0%;
    text-align: center;

    i {
      font-size: 24px;
      line-height: 42px;
      padding-left: 2px;
      color: var(--primary-foreground-color);
    }

    &:hover {
      background-color: var(--primary-activeground-color);
      border: 1px solid var(--primary-activeground-color);

      i {
        color: var(--primary-activeground-font-color);
      }
    }

    &:active {
      background-color: var(--primary-activeground-color);
      border: 1px solid var(--primary-activeground-color);

      i {
        color: var(--primary-activeground-font-color);
      }
    }
  }

  @media (min-width: 320px) and (max-width: 500px) {
    .modal {
      width: 100%;
      height: calc(100% - 50px) !important;
      max-height: calc(100% - 50px) !important;
      position: fixed;
      top: 50px;
      .body {
        height: calc(100vh - 73px);
      }
    }
  }
</style>
