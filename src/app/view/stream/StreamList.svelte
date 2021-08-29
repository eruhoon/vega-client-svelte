<script>
  import StreamEntry from './StreamEntry.svelte';
</script>

<div class="stream-list">
  <StreamEntry
    description="description"
    icon="https://i.imgur.com/eSHBOji.jpg"
    thumbnail="https://i.imgur.com/OBx8TXr.jpg"
    title="대충 방송"
    viewer="4"
  />
  <StreamEntry
    description="description"
    icon="https://i.imgur.com/4OQwLiW.png"
    thumbnail="https://i.imgur.com/4OQwLiW.png"
    title="대충 방송2"
    viewer="4"
  />
  <StreamEntry
    description="description"
    icon="https://i.imgur.com/XjsUghQ.gif"
    thumbnail="https://i.imgur.com/OBx8TXr.jpg"
    title="대충 방송"
    viewer="4"
  />
</div>

<style lang="scss">
  .stream-list {
    position: absolute;
    bottom: 5px;
    left: 5px;
    height: auto;
    width: auto;
    margin-left: -2px;

    background: #2a2f38;
    border: 1px solid #1f2226;

    box-shadow: 2px 0px 5px 1px rgb(0 0 0 / 40%),
      1px 0px 5px 0px rgb(0 0 0 / 30%), 1px 0px 5px 0px rgb(0 0 0 / 30%);
  }
</style>
