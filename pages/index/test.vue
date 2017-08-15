<template>
  <section class="">
    welcome to test
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
import axios from 'axios';
export default {
  components: {
    Logo
  },
  async asyncData () {
    console.log('asyncDa21312321ta')
    axios.get('http://127.0.0.1:3001/testApi')
  }
}
</script>

<style>
  
</style>
