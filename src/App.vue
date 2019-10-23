<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="less">
@import "./assets/css/normalize.css";
#app {
  text-align: center;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  // background-color: #efefef;
  width: 100vw;
  height: 100vh;
}
</style>
