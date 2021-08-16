<script lang="ts">
  export let nickname: string = '';
  export let icon: string = '';
  export let isMobile: boolean = false;
  export let isComputer: boolean = false;

  const getFlagClass = (flag: boolean) => (flag ? 'active' : '');
  $: mobileClass = getFlagClass(isMobile);
  $: computerClass = getFlagClass(isComputer);
</script>

<div>
  <div class="user-icon">
    <img src={icon} alt={nickname} />
  </div>
  <div class="info">
    <div class="nickname">
      <span>{nickname}</span>
    </div>
  </div>
  <div class="icon">
    <i class="material-icons {mobileClass}">phone_iphone</i>
    <i class="material-icons {computerClass}">computer</i>
  </div>
</div>

<style lang="scss">
  .user-icon {
    width: 30px;
    height: 30px;
    overflow: hidden;
    float: left;
    border-radius: 30px;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .info {
    width: calc(100%- 70px);
    height: 30px;
    float: left;
    padding-left: 5px;

    div {
      width: auto;
      float: left;
      padding-top: 8px;
    }
  }

  .icon {
    width: 20%;
    height: 30px;
    float: right;

    i {
      font-size: 16px;
      padding-top: 7px;
      float: right;
    }
  }
</style>
