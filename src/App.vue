<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/posts/'

export default {
  name: 'Portfolio',
  data: () => ({ posts: [] }),

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

  <!--HEADER-->
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>


  <!--MAIN-->
  <main class="container">
    <h1>I nostri post</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h4>{{ post.title }}</h4>
      </li>
    </ul>

  </main>


</template>

<style lang='scss' scoped>
/* style here */
</style>