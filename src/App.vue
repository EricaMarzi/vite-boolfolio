<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import PostsList from './components/posts/PostsList.vue';
const endpoint = 'http://localhost:8000/api/posts/'

export default {
  name: 'Portfolio',
  data: () => ({
    posts: [],
    isLoading: false
  }),
  components: { AppHeader, PostsList },
  methods: {
    fetchPosts() {
      this.isLoading = true;
      axios.get(endpoint).then(res => {
        this.posts = res.data;
      }).catch(err => {
        console.error(err);
      }).then(() => {
        this.isLoading = false;
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
    <AppLoader v-if="isLoading" />
    <PostsList v-else :posts="posts" />
  </main>


</template>

<style lang='scss'>
/* style here */
</style>