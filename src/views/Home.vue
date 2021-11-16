<!--
 * @Author: your name
 * @Date: 2021-06-21 17:08:12
 * @LastEditTime: 2021-11-16 09:45:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HMP\src\views\Home.vue
-->
<template>
  <div class="login">
    <!-- <animation /> -->
    <demo />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { login } from "@/api/index";
import demo from "@/views/demo.vue";
// import { Request } from '@/utils/request';
@Options({
  components: { demo },
  data() {
    return {
      form: {
        userId: "",
        userPassWord: "",
      },
    };
  },
  methods: {
    handleButtom(submit: any) {
      let params = submit === "submit" ? this.form : {};
      login(params).then((res) => {
        console.log("[ res ]", res);
      });
      // Request.axiosInstance({
      //   url: '/api',
      //   method: 'get',
      //   data: {}
      // })
      // axios.get('/api')
    },
  },
})
export default class Home extends Vue {}
</script>
<style lang="less" scpoed>
.el-button {
  width: 92% !important;
}
.login {
  .main {
    // background: url(../assets/login.jpg) no-repeat center center fixed;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -ms-filter: blur(2px);
    -o-filter: blur(2px);
    filter: blur(2px);
    width: 100vw;
    height: 100vh;
    position: fixed;
  }
  .box {
    text-align: center;
    color: #000;
    margin: 0 auto;
    width: 500px;
    height: 230px;
    // height: 300px;
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    left: 50%;
    top: 30%;
    margin-left: -250px;
    border-radius: 15px;
    box-shadow: 5px 5px 50px rgb(45, 44, 44);
    .head_portrait {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: rgb(250, 255, 243);
      border-radius: 50%;
      box-shadow: 2px 2px 2px #ccc;
      cursor: pointer;
    }
    .hp_1 {
      top: 0;
      left: 0;
    }
    .hp_2 {
      top: 0;
      right: 0;
    }
    .hp_3 {
      bottom: 0;
      left: 0;
    }
    .hp_4 {
      bottom: 0;
      right: 0;
    }
    .buttom {
      color: #ff5722;
      animation: buttom 1.5s ease-in-out infinite alternate;
      font-size: 50px;
      cursor: pointer;
      font-family: serif;
      font-weight: 800;
      position: absolute;
      left: 50%;
      margin-left: -65px;
      top: -120px;
    }
  }
}
@keyframes buttom {
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff5722,
      0 0 70px #ff5722, 0 0 80px #ff5722, 0 0 100px #ff5722, 0 0 150px #ff5722;
  }
  from {
    filter: brightness(110%);
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff5722,
      0 0 35px #ff5722, 0 0 40px #ff5722, 0 0 50px #ff5722, 0 0 75px #ff5722;
  }
}
</style>
