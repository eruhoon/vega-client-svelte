<script lang="ts">
  import InlineSVG from 'svelte-inline-svg';

  export let imageSrc: string;
</script>

<!-- svelte-ignore a11y-missing-attribute -->

<div>
  <InlineSVG src={imageSrc} />
</div>

<style lang="scss">
  div {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    border-left: 1px solid #1f2226;
  }
</style>
