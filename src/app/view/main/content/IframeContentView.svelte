<script lang="ts">
  export let src: string;
</script>

<iframe title="content" {src} />

<style lang="scss">
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
