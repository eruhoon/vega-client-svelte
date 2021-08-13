<script lang="ts">
  export let props: any[]; //remove any
</script>

<div class="chat-user-list">
  <div class="cu-list-title">
    <h4>채팅 접속자</h4>
    <span>
      <i class="material-icons"> person_pin </i>
      <p>{props.length}명</p>
    </span>
  </div>
  <div class="cu-entry">
    {#each props as userProp}
      <chat-user-entry prop={userProp} />
    {/each}
  </div>
</div>
