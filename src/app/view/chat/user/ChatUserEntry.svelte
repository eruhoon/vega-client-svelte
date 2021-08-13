<script lang="ts">
  import type { ChatUserEntryProp } from './ChatUserEntryProp';

  export let prop: ChatUserEntryProp = {
    nickname: '',
    icon: '',
    flag: {
      mobile: false,
      computer: false,
    },
  };

  const getFlagClass = (flag: boolean) => (flag ? 'active' : '');
  $: mobileClass = getFlagClass(prop.flag.mobile);
  $: computerClass = getFlagClass(prop.flag.computer);
</script>

<div>
  <div class="user-icon">
    <img src={prop.icon} alt="" />
  </div>
  <div class="info">
    <div class="nickname">
      <span>{prop.nickname} /</span>
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
