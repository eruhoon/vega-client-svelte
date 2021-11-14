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
    width: 31px;
    height: 31px;
    padding: 7px;
    position: absolute;
    top: 0;
    right: 0;
    border-left: 1px solid #1f2226;
    fill: #ffffff;
  }
</style>
