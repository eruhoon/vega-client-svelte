<script lang="ts">
  export let prop = {
    nickname: '',
    icon: '',
    level: '',
    env: {
      mobile: false,
      computer: false,
    },
  };

  const getFlagClass = (flag: boolean) => (flag ? 'active' : '');
  $: mobileClass = getFlagClass(prop.env.mobile);
  $: computerClass = getFlagClass(prop.env.computer);
</script>

<div>
  <div class="user-icon">
    <img src={prop.icon} alt="" />
  </div>
  <div class="info">
    <div class="nickname">
      <span>{prop.nickname} /</span>
    </div>
    <div class="level">
      <span>Lv.{prop.level}</span>
    </div>
  </div>
  <div class="icon">
    <i class="material-icons {mobileClass}">phone_iphone</i>
    <i class="material-icons {computerClass}">computer</i>
  </div>
</div>
