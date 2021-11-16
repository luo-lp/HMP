<!--
 * @Author: your name
 * @Date: 2021-07-19 14:47:35
 * @LastEditTime: 2021-11-16 09:51:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HMP\src\views\demo.vue
-->
<template>
  <div class="bg">
    <div class="ball">
      <animationView />
    </div>
    <div class="login">
      <span>L&nbsp;&nbsp;gin</span>
      <div class="o top">
        <span class="t">o</span>
      </div>
      <div class="o bottom">
        <span class="b">o</span>
      </div>
      <div class="loginBox">
        <loginBox />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { login } from "@/api/index";
import animationView from "@/views/Login/animationView.vue";
import loginBox from "@/views/Login/loginBox.vue";
// import { Request } from '@/utils/request';
@Options({
  components: { animationView, loginBox },
  data() {
    return {
      loginForm: {
        userId: "",
        userPassWord: "",
      },
    };
  },
  mounted() {
    login({}).then((res) => {
      console.log("[ res ]", res.data);
    });
    // Request.axiosInstance({
    //   url: '/api',
    //   method: 'get',
    //   data: {}
    // })
    // axios.get('/api')
  },
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.ball {
  width: 100%;
  height: 70%;
}
.bg {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;
  font-size: 60px;
  padding-left: 5vw;
  padding-top: 5vw;
  box-sizing: border-box;
  .o {
    position: absolute;
    // top: 80%;
    left: calc(-250% + 15px);
    height: 30px;
    overflow: hidden;
    width: 30%;
    animation: oFrames 1s ease forwards 2s;
    -webkit-animation: oFrames 1s ease forwards 2s;
    -moz-animation: oFrames 1s ease forwards 2s;
    -o-animation: oFrames 1s ease forwards 2s;
    -ms-animation: oFrames 1s ease forwards 2s;
  }
  .top {
    top: 10px;
    .t {
      position: absolute;
      left: 0;
      top: 7px;
      animation: toptomKeyFrames 2.5s ease forwards;
      -webkit-animation: toptomKeyFrames 2.5s ease forwards;
      -moz-animation: toptomKeyFrames 2.5s ease forwards;
      -o-animation: toptomKeyFrames 2.5s ease forwards;
      -ms-animation: toptomKeyFrames 2.5s ease forwards;
    }
  }
  .bottom {
    top: 40px;
    .b {
      position: absolute;
      left: 0;
      bottom: 18px;
      //   15
      filter: blur(0.2px);
      animation: bottomKeyFrames 2.5s ease forwards;
      -webkit-animation: bottomKeyFrames 2.5s ease forwards;
      -moz-animation: bottomKeyFrames 2.5s ease forwards;
      -o-animation: bottomKeyFrames 2.5s ease forwards;
      -ms-animation: bottomKeyFrames 2.5s ease forwards;
    }
  }
  .login {
    position: absolute;
    top: calc(20% - 25px);
    right: 20%;
    > span {
      color: rgba(255, 255, 255, 0);
      animation: login 3s ease forwards 3s;
      -webkit-animation: login 3s ease forwards 3s;
      -moz-animation: login 3s ease forwards 3s;
      -o-animation: login 3s ease forwards 3s;
      -ms-animation: login 3s ease forwards 3s;
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -10px;
      border-bottom: 3px solid #fff;
      filter: blur(1px);
      box-shadow: 2px 2px 2px #fff;
      width: 0%;
      animation: loginAfter 1s ease forwards 3s;
      -webkit-animation: loginAfter 1s ease forwards 3s;
      -moz-animation: loginAfter 1s ease forwards 3s;
      -o-animation: loginAfter 1s ease forwards 3s;
      -ms-animation: loginAfter 1s ease forwards 3s;
    }
    .loginBox {
      height: 200px;
      width: 250%;
      position: absolute;
      top: 80px;
      padding: 0 5px;
      box-sizing: border-box;
      opacity: 0;
      animation: loginBox 3s ease forwards 3s;
      -webkit-animation: loginBox 3s ease forwards 3s;
      -moz-animation: loginBox 3s ease forwards 3s;
      -o-animation: loginBox 3s ease forwards 3s;
      -ms-animation: loginBox 3s ease forwards 3s;
    }
  }
  .ball {
    opacity: 0;
    animation: ball 3s ease forwards 3s;
    -webkit-animation: ball 3s ease forwards 3s;
    -moz-animation: ball 3s ease forwards 3s;
    -o-animation: ball 3s ease forwards 3s;
    -ms-animation: ball 3s ease forwards 3s;
  }
}
@keyframes ball {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes loginBox {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes oFrames {
  0% {
    left: calc(-250% + 15px);
    // top: -15px;
  }
  80% {
    left: calc(11% + 15px);
    // top: -15px;
  }
  100% {
    left: calc(11% + 15px);
    // top: 5px;
  }
}
@keyframes loginAfter {
  0% {
    width: 0%;
  }
  100% {
    width: 250%;
  }
}
@keyframes login {
  0% {
    color: rgba(255, 255, 255, 0.1);
  }
  100% {
    color: rgba(255, 255, 255, 0.8);
    // color: #03e9f4;
    // filter: blur(1px);
  }
}
@keyframes bottomKeyFrames {
  0% {
    bottom: 18px;
  }
  50% {
    bottom: 3px;
    left: 0px;
    filter: blur(0.1px);
  }
  99.9% {
    bottom: 3px;
    filter: blur(0.1px);
  }
  100% {
    bottom: 3px;
    filter: blur(1px);
  }
}

@keyframes toptomKeyFrames {
  0% {
    top: 7px;
  }
  50% {
    top: -8px;
    left: 0px;
    filter: blur(0.1px);
  }
  99.9% {
    top: -8px;
    filter: blur(0.1px);
  }
  100% {
    top: -8px;
    filter: blur(1px);
  }
}
</style>
