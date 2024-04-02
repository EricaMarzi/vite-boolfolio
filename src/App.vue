<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
const endpoint = 'http://localhost:8000/api/posts/'

export default {
  name: 'Portfolio',
  components: { AppHeader, HomePage },
}
</script>

<template>

  <AppHeader />
  <!-- <HomePage /> -->
  <main class="container">
    <RouterView />
  </main>

</template>

<style lang='scss'>
/* style here */
</style>