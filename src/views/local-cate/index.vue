<template>
  <div class="home">
    <div class="header">
      <div class="header_nav"></div>
      <div class="header_bar">
        头部
      </div>
    </div>
    <div class="header_block"></div>
    <div>
      <Loading class="loading" v-show="loadstate"></Loading>
      <div v-show="!loadstate">
        <p v-for="(i,index) in 101" :key="index">{{info}}</p>
        <Toast></Toast>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from '@components/loading/loading'
import Toast from '@components/toast/toast'
export default {
  data () {
    return {
      info: '本地美食',
      loadstate: true
    }
  },
  components: {
    Loading,
    Toast
  },
  mounted () {
    this.loadstate = true
    setTimeout(() => {
      this.loadstate = false
    }, 2500)
  }
}
</script>
<style lang="less" scoped>
.home {
  .header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: lightgoldenrodyellow;
    .header_nav {
      height: 12px;
    }
    .header_bar {
      border-bottom: 2px solid #e3e3e3;
      height: 46px;
      line-height: 46px;
      text-align: center;
    }
  }
  .header_block {
    height: 60px;
  }
  .loading{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -57px;
    margin-top: -57px;
  }
}
</style>
