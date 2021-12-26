<script lang="ts">
  import InlineSvg from '../../../../view-framework/InlineSvg.svelte';

  export let imageSrc: string;
</script>

<!-- svelte-ignore a11y-missing-attribute -->

<div>
  <InlineSvg src={imageSrc} />
</div>

<style lang="scss">
  div {
    width: 31px;
    height: 31px;
    padding: 7px;
    position: absolute;
    top: 0;
    right: 0;
    border-left: 1px solid var(--primary-hoverground-color);
    fill: var(--primary-foreground-color);
  }
</style>
