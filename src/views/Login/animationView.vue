<!--
 * @Author: your name
 * @Date: 2021-07-21 10:13:34
 * @LastEditTime: 2021-11-16 10:36:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HMP\src\views\Login\animate.vue
-->
<template>
  <div class="left_box">
    <div ref="three" id="three" class="three" style="width:100%; height:100%"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default {
  mounted() {
    /**
     * 创建场景对象Scene
     */
    var scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
    var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    var material = new THREE.MeshLambertMaterial({
      color: 0x0000ff,
    }); //材质对象Material
    var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中
    /**
     * 光源设置
     */
    //点光源
    var point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    console.log('[ document.getElementById("three") ]', document.getElementById("three").offsetWidth)
    var width = document.getElementById("three").offsetWidth; //窗口宽度
    var height = document.getElementById("three").offsetHeight; //窗口高度
    var k = width / height; //窗口宽高比
    var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    // document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
    document.getElementById("three").appendChild(renderer.domElement)
    //执行渲染操作   指定场景、相机作为参数
    let T0 = new Date(); //上次时间
    function render() {
      let T1 = new Date(); //本次时间
      let t = T1 - T0; //时间差
      T0 = T1; //把本次时间赋值给上次时间
      requestAnimationFrame(render);
      renderer.render(scene, camera); //执行渲染操作
      mesh.rotateY(0.001 * t); //旋转角速度0.001弧度每毫秒
    }
    render();
    // function render() {
    //     renderer.render(scene, camera); //执行渲染操作
    // }
    // render();
    // var controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象
    // controls.addEventListener('change', render); //监听鼠标、键盘事件
  },
};
</script>

<style lang="less" scoped>
.left_box {
  width: 60%;
  height: 100%;
  border: 1px solid #fff;
  .three{
    width: 100%;
    height: 100%;
  }
}
</style>