<template>
  <div class="qb-loading">
    <img src="./assets/loading.gif">
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.qb-loading{

}
</style>
