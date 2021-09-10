<script lang="ts">
  export let name: string;
  export let icon: string;
  export let id: string;
  export let backgroundColor: string;
  export let onClick = () => {};
  export let onContextMenu = () => {};

  $: style = backgroundColor ? `background: ${backgroundColor}` : null;
</script>

<div
  class="stream-pack"
  on:click={onClick}
  on:contextmenu|preventDefault={onContextMenu}
  {style}
>
  <img class="icon" src={icon} alt={name} />
  <div class="logo" />
  <div class="name">
    {name} <span>({id})</span>
  </div>
</div>

<style lang="scss">
  .stream-pack {
    position: relative;
    width: auto;
    max-width: 400px;
    height: 50px;
    background: #0545b1;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    cursor: pointer;
  }

  .icon {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 25px;
  }
  .logo {
    position: absolute;
    background: url('/../assets/image/stream/afreeca.png') center no-repeat;
    background-size: 100%;
    top: 15px;
    left: 50px;
    width: 20px;
    height: 20px;
  }
  .name {
    position: absolute;
    top: 15px;
    left: 75px;
    width: calc(100% - 100px);
    height: 20px;
    font-size: 14px;
    color: white;
    line-height: 20px;

    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;

    span {
      font-size: 12px;
    }
  }
</style>
