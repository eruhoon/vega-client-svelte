<div class="side-bar">
  <ul>
    <li class="main">
      <i class="far fa-comments" />
      <span>채팅</span>
    </li>
    <li class="main">
      <i class="fas fa-book" />
      <span>메모</span>
    </li>
    <li class="main">
      <i class="fas fa-images" />
      <span>이미지 갤러리</span>
    </li>
    <li class="main">
      <i class="fas fa-broadcast-tower" />
      <span>방송추가</span>
    </li>
  </ul>
</div>

<style lang="scss">
  .side-bar {
    overflow-y: auto;
    max-height: 100%;
    background-color: #2a2f38;
    color: #ffffff;
    z-index: 10;
    height: 100%;

    box-shadow: 2px 0px 2px 1px rgb(0 0 0 / 20%),
      2px 0px 3px 1px rgb(0 0 0 / 20%), 2px 0px 3px 0px rgb(0 0 0 / 20%);
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    height: 30px;
    list-style-type: none;
    padding: 5px 10px;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

    span {
      padding-left: 10px;
      width: calc(100% - 40px);
      max-width: calc(100% - 40px);
    }
  }
</style>
