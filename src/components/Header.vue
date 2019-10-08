<template>
  <div class="header-nav">
    <div class="nav-block"></div>
    <div class="header">
      <div class="box">
        <slot name="left"><van-icon name="arrow-left" @click="goBack" /></slot>
        <p>{{title}}</p>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  mounted() {
    // 获取时间状态栏高度
    let tabBarHeight = Number(JSON.parse(localStorage.getItem("tabBarHeight")));
    document.querySelector(".header").style.top = `${tabBarHeight}px`;
    document.querySelector(".nav-block").style.height = `${tabBarHeight}px`;
    document.querySelector(".content").style.paddingTop = `${document.querySelector(".nav-block").offsetHeight + document.querySelector(".header").offsetHeight}px`;
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.header-nav{
  .header {
    height: 88px;
    background-color: #EF9052;
    color: #fff;
    border-bottom: 1px solid #eee;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
    display: flex;
    align-items: center;
    padding: 0 25px;
    .box {
      display: flex;
      align-items: center;
      width: 100%;
      i.van-icon-arrow-left {
        display: flex;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 24px;
        margin-top: -25px;
        width: 50px;
        height: 50px;
        font-size: 36px;
        color: #fff;
      }
      p {
        width: 100%;
        text-align: center;
        font-size: 36px;
        color: #fff;
      }
      span {
        position: absolute;
        top: 50%;
        right: 24px;
        margin-top: -25px;
        font-size: 30px;
        // padding: 0px 0;
        color: #fff;
      }
    }
  }
}
</style>
