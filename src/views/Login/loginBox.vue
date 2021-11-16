<!--
 * @Author: your name
 * @Date: 2021-07-21 10:13:34
 * @LastEditTime: 2021-07-21 10:15:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HMP\src\views\Login\animate.vue
-->
<template>
  <div class="loginForm">
    <div class="loginForm_item">
      <input type="text" name="" required="" maxlength="13" />
      <label>Username</label>
      <!-- <label>账号</label> -->
    </div>
    <div class="loginForm_item">
      <input type="password" name="" required="" maxlength="13" />
      <label>Password</label>
      <!-- <label>密码</label> -->
    </div>
    <div class="buttonGroup">
      <span>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        Submit
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      loginForm: {
        userId: "",
        userPassWord: "",
      },
    };
  },
})
export default class Home extends Vue {}
</script>

<style lang="less" scope>
.loginForm,
.loginForm_item {
  position: relative;
  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
    margin: 0;
  }
  label {
    position: absolute;
    top: 35px;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }
  input:focus ~ label,
  input:valid ~ label {
    top: 10px;
    left: 0;
    color: #03e9f4;
    font-size: 13px;
  }
}

.buttonGroup {
  display: flex;
  span {
    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select:none;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;
    &:hover {
      background: #03e9f4;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 100px #03e9f4;
    }
    i {
      position: absolute;
      display: block;
      &:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #03e9f4);
        animation: btn-anim1 1s linear infinite;
      }
      @keyframes btn-anim1 {
        0% {
          left: -100%;
        }
        50%,
        100% {
          left: 100%;
        }
      }
      &:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #03e9f4);
        animation: btn-anim2 1s linear infinite;
        animation-delay: 0.25s;
      }
      @keyframes btn-anim2 {
        0% {
          top: -100%;
        }
        50%,
        100% {
          top: 100%;
        }
      }
      &:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #03e9f4);
        animation: btn-anim3 1s linear infinite;
        animation-delay: 0.5s;
      }
      @keyframes btn-anim3 {
        0% {
          right: -100%;
        }
        50%,
        100% {
          right: 100%;
        }
      }
      &:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #03e9f4);
        animation: btn-anim4 1s linear infinite;
        animation-delay: 0.75s;
      }
      @keyframes btn-anim4 {
        0% {
          bottom: -100%;
        }
        50%,
        100% {
          bottom: 100%;
        }
      }
    }
  }
}
</style>