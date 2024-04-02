<script>
import AppHeader from './components/AppHeader.vue';
const endpoint = 'http://localhost:8000/api/posts/'

export default {
  name: 'Portfolio',
  components: { AppHeader },
}
</script>

<template>

  <AppHeader />
  <main class="container">
    <RouterView />
  </main>

</template>

<style lang='scss'>
/* style here */
</style>