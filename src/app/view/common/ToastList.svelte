<script lang="ts">
  import type { Toast } from '../../model/toast/Toast';
  import { ToastService } from '../../model/toast/ToastService';

  let toasts: Toast[] = [];
  ToastService.toasts.subscribe((it) => (toasts = it));
</script>

<div class="root">
  {#each toasts as toast (toast.hash)}
    <div class="toast">{toast.text}</div>
  {/each}
</div>

<style lang="scss">
  .root {
    position: fixed;
    flex-direction: column;
    display: flex;
    bottom: 50px;
    left: 0;
    width: 100%;
    pointer-events: none;
  }
  .toast {
    min-width: 250px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    left: 50%;
    bottom: 30px;
    font-size: 17px;

    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s forwards;
    animation: fadein 0.5s, fadeout 0.5s 2.5s forwards;
  }

  @-webkit-keyframes fadein {
    from {
      -webkit-transform: translate(0, 100px);
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      -webkit-transform: translate(0, 100px);
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      opacity: 1;
    }

    to {
      -webkit-transform: translate(0, -30px);
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }

    to {
      -webkit-transform: translate(0, -30px);
      opacity: 0;
    }
  }
</style>
