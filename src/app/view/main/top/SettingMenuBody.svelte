<script lang="ts">
  export let name: string;
  export let icon: string;
</script>

<div class="icon">
  <i class={icon} />
</div>
<p>{name}</p>

<style lang="scss">
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
</style>
