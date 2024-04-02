<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
const endpoint = 'http://localhost:8000/api/posts/'

export default {
  name: 'Portfolio',
  data: () => ({ posts: [] }),
  components: { AppHeader },
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
  <!-- <header>
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
  </header> -->
  <AppHeader />


  <!--MAIN-->
  <main class="container">
    <h1 class="my-5">I nostri post</h1>
    <div class="row">
      <div v-if="posts.length">
        <div class="card mb-4 " v-for="post in posts" :key="post.id">
          <h5 class="card-header">{{ post.title }}</h5>
          <div class="card-body clearfix">
            <img v-if="post.image" :src="post.image" :alt="post.title" class="img-fluid float-start me-2">
            <p class="card-text">{{ post.content.slice(0, 400) }}</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <!--da formattare quando metti i componenti-->
            <div> Pubblicato il {{ post.created_at }}</div>

            <!-- <div>{{ post.category.label }}</div> -->

            <a href="#" class="btn btn-primary">Continua a leggere</a>
          </div>
        </div>
      </div>
      <h2 v-else>Non ci sono post</h2>
    </div>
  </main>


</template>

<style lang='scss'>
/* style here */
</style>