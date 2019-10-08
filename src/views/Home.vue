<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import api from '@api/api.js'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    api.baidu.then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
