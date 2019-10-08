<template>
  <div class="about">
    <h1>This is an about page</h1>
    <NumberKeyBoard />
  </div>
</template>
<script>
// @ is an alias to /src
import NumberKeyBoard from '@components/NumberKeyBoard'
export default {
  name: 'about',
  components: {
    NumberKeyBoard
  },
  mounted () {
   // 
  }
}
</script>