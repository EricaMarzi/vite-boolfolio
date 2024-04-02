<script>
export default {
    name: 'PostsList',
    props: { posts: Array }
}
</script>

<template>
    <h1 class="my-5 title">I nostri post</h1>
    <div class="row">
        <div v-if="posts.length">
            <div class="card mb-4 " v-for="post in posts" :key="post.id">
                <h5 class="card-header">{{ post.title }}</h5>
                <div class="card-body clearfix">
                    <img v-if="post.image" :src="post.image" :alt="post.title" class="img-fluid float-start me-2">
                    <p class="card-text">{{ post.content.slice(0, 800) }}...</p>
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
</template>

<style lang='scss' scoped>
.title {
    color: #00b6b3;
}

img {
    width: 200px;
}
</style>