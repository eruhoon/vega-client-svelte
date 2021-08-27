<label class="switch">
  <input type="checkbox" />
  <span class="slider round" />
</label>

<style lang="scss">
  .switch {
    width: 50px;
    height: 30px;
    position: relative;
    display: inline-block;
    margin: 8px 5px 8px auto;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #1c2027;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    input:checked + .slider {
      background-color: #ebebeb;
    }
    input:focus + .slider {
      box-shadow: 0 0 1px #ebebeb;
    }
    input:checked + .slider:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }
    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }
    .slider.round:before {
      border-radius: 50%;
    }
  }
</style>
