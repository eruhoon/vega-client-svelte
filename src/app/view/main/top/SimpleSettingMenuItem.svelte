<script lang="ts">
  import SettingMenuBody from './SettingMenuBody.svelte';
  import SettingMenuItem from './SettingMenuItem.svelte';

  export let menuClick = () => {};
  export let name: string;
  export let icon: string;
</script>

<SettingMenuItem {menuClick}>
  <SettingMenuBody slot="body" {name} {icon} />
</SettingMenuItem>
