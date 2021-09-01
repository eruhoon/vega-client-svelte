<script lang="ts">
  export let icon: string;
  export let onClick = () => {};
</script>

<button class="btn" on:click={onClick}>
  <i class={icon} />
</button>

<style lang="scss">
  .btn {
    width: 40px;
    height: 40px;
    border-radius: 0%;
    border: 0px;
    color: #ffffff;
    background: transparent;
    margin: 5px;
    cursor: pointer;
    i {
      font-size: 18px;
    }
  }
</style>
