<script lang="ts">
  import { WindowService } from '../../model/window/WindowService';

  const close = () => {
    WindowService.streamSettingModalShow.set(false);
  };
</script>

<div class="click-blocker" />
<div class="bg" />
<div class="modal-wrapper">
  <button class="modal-close" on:click={close}>
    <i class="material-icons"> close </i>
  </button>
</div>

<style lang="scss">
  .modal-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .modal-close {
      width: 40px;
      height: 40px;
      position: absolute;
      top: calc(0% - 15px);
      right: calc(0% - 15px);

      background-color: #fafafa;
      border: 1px solid #f5f5f5;
      border-radius: 50%;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

      text-align: center;

      i {
        font-size: 24px;
        line-height: 42px;
        padding-left: 2px;
        color: #424242;
      }

      &:hover {
        background-color: #ff4081;
        border: 1px solid #ff4081;

        i {
          color: #ffffff;
        }
      }

      &:active {
        background-color: #e91e63;
        border-color: #e91e63;

        i {
          color: #ffffff;
        }
      }
    }
  }

  .click-blocker {
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.8;
    z-index: 100;
  }
</style>
