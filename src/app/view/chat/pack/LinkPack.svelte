<script lang="ts">
  export let body: string;
  const json = JSON.parse(body);

  let thumbnail: string = '';
  let title: string = '';
  let link: string = '';

  title = json.info.title;
  thumbnail = json.info.thumbnail;
  link = json.uri;
</script>

<div class="root" class:thumbnail-attched={thumbnail}>
  {#if thumbnail}
    <img class="thumbnail" alt="thumbnail" src={thumbnail} />
  {/if}
  <div class="info">
    <div class="title">{title}</div>
    <div class="link">{link}</div>
  </div>
</div>

<style lang="scss">
  @mixin truncate {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .root {
    display: flex;
    position: relative;
    width: 100%;
    height: 60px;
    margin: 3px 0 3px 0;
    font-size: 12px;
    line-height: 15px;
    word-break: break-all;
    justify-content: center;

    &.thumbnail-attched {
      height: 150px;
    }

    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      content: '';
      background: #333333;
      opacity: 0.75;
      border: 1px solid #666666;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    .title {
      position: absolute;
      bottom: 35px;
      left: 10px;
      width: calc(100% - 20px);
      height: 20px;
      padding: 0 5px;
      border-bottom: solid 1px #aaa;
      font-size: 15px;
      line-height: 20px;
      color: #e8e8e8;
      @include truncate;
    }

    .link {
      position: absolute;
      bottom: 3px;
      left: 15px;
      width: calc(100% - 55px);
      height: 30px;
      font-size: 12px;
      color: #e8e8e8;
      overflow: hidden;
    }

    .thumbnail {
      max-width: 100%;
      max-height: 100%;
      opacity: 0.3;
    }
  }
</style>
