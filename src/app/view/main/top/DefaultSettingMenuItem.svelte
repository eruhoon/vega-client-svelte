<script lang="ts">
  import SettingMenuItem from './SettingMenuItem.svelte';

  export let menuClick = () => {};
  export let name: string;
  export let icon: string;
</script>

<SettingMenuItem {menuClick}>
  <svelte:fragment slot="body">
    <div class="icon">
      <i class={icon} />
    </div>
    <p>{name}</p>
    <slot name="extra" />
  </svelte:fragment>
</SettingMenuItem>

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
