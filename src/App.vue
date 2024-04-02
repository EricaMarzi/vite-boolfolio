<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import PostsList from './components/posts/PostsList.vue';
const endpoint = 'http://localhost:8000/api/posts/'

export default {
  name: 'Portfolio',
  data: () => ({ posts: [] }),
  components: { AppHeader, PostsList },
  methods: {
    fetchPosts() {
      axios.get(endpoint).then(res => {
        this.posts = res.data;
      })
    }
  },
  created() {
    this.fetchPosts();
  }
}
</script>

<template>

  <AppHeader />

  <main class="container">
    <PostsList :posts="posts" />
  </main>


</template>

<style lang='scss'>
/* style here */
</style>