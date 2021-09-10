<script lang="ts">
  export let body: string;
  let icon: string;
  let nickname: string;
  let content: string;
  $: {
    const json = JSON.parse(body);
    icon = json.icon;
    nickname = json.nickname;
    content = json.content;
  }
</script>

<div class="root">
  <img class="icon" src={icon} alt="{nickname} 아이콘" />
  <div class="content">
    <div>{nickname}</div>
    <div>{content}</div>
  </div>
</div>

<style lang="scss">
  .root {
    width: 100%;
    display: flex;
    align-items: center;
    .icon {
      width: 50px;
      height: 50px;
    }
  }
</style>
