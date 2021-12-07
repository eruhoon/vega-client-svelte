<script lang="ts">
  export let file: File | null = null;

  $: base64Promise = readData(file);
  $: fileSize = parseSize(file);
  $: fileType = parseType(file);

  function parseSize(file: File): string {
    return file ? `${Math.round((file.size / 1024) * 10) / 10} KB` : '- KB';
  }

  function parseType(file: File): string {
    return file ? file.type.split('/')[1].toUpperCase() : 'PNG';
  }

  async function readData(file: File): Promise<string | null> {
    return new Promise((resolve) => {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = (_) => {
        if (typeof fileReader.result === 'string') {
          const base64 = fileReader.result;
          resolve(base64);
        }
      };
      fileReader.readAsDataURL(file);
    });
  }
</script>

<div class="photo-upload-view">
  <div class="photo-img-box">
    <!-- svelte-ignore a11y-missing-attribute -->
    {#await base64Promise then value}
      <img src={value} />
    {/await}
  </div>
  <div class="photo-info-box">
    <h4>{file?.name}</h4>
    <p>{fileSize} / {fileType}</p>
  </div>
  <div class="photo-state">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="/assets/image/photo/loader-large.gif" />
  </div>
</div>

<style lang="scss">
  .photo-upload-view {
    width: 350px;
    height: 50px;
    padding: 5px;
    position: fixed;
    bottom: 80px;
    right: 10px;
    background-color: #ffffff;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

    .photo-img-box {
      width: 50px;
      height: 50px;
      text-align: right;
      float: left;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .photo-info-box {
      width: calc(100% - 120px);
      height: 30px;
      padding: 10px;
      float: left;

      * {
        padding: 0%;
        margin: 0%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      h4 {
        width: 100%;
        height: auto;
        font-size: 14px;
        line-height: 16px;
        font-weight: normal;
        color: #424242;
      }
      p {
        width: 100%;
        height: auto;
        font-size: 12px;
        line-height: 14px;
        font-weight: lighter;
        color: #616161;
      }
    }
  }
</style>
