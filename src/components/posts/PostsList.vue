<script>
import PostCard from './PostCard.vue';
export default {
    name: 'PostsList',
    components: { PostCard },
    props: { posts: Array }
}
</script>

<template>

    <h1 class="my-3 title">I nostri post</h1>
    <!-- <div class="row">
        <div class="col-4"> -->
    <div v-if="posts.length" class="d-flex f-container">
        <PostCard v-for="post in   posts  " :key="post.id" :post="post" :isDetail="false" />
    </div>
    <h2 v-else>Non ci sono post pubblicati</h2>
    <!-- </div>
    </div> -->
</template>

<style lang='scss' scoped>
.title {
    font-size: 72px;
    background: -webkit-linear-gradient(#00b6b3, #00e87e);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}


.f-container {
    display: flex;
    margin: 0 -1rem;
    flex-wrap: wrap;
}
</style>