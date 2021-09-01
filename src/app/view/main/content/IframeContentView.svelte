<script lang="ts">
  export let src: string;
  export let allowfullscreen: boolean = false;
</script>

<iframe title="content" {src} {allowfullscreen} />

<style lang="scss">
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
