<template>
  <section class="">
    welcome to test
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData () {
    console.log('asyncData')
  }
}
</script>

<style>
  
</style>
