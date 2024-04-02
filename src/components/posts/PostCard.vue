<script>
export default {
    name: 'PostCard',
    props: { post: Object }
}
</script>

<template>
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5>{{ post.title }}</h5>
            <div class="badge rounded-pill text-bg-success">
                {{ post.category.label }}</div>
        </div>

        <div class="card-body clearfix">
            <img v-if="post.image" :src="post.image" :alt="post.title" class="img-fluid float-start me-2">
            <p class="card-text">{{ post.content.slice(0, 800) }}...</p>
        </div>


        <div class="card-footer d-flex justify-content-between">

            <div class="d-flex gap-3">
                <!--Tag non ancora presenti nella chiamata api-->
                <!-- <div>
                    <div class="badge rounded-pill text-bg-success">
                        {{ post.category.tag }}</div>
                    </div> -->
                <!--da formattare quando metti i componenti-->
                <div> Pubblicato il {{ post.created_at }}</div>
            </div>

            <a href="#" class="btn btn-bg-custom">Continua a leggere</a>
        </div>
    </div>
</template>

<style lang='scss' scoped>
img {
    width: 200px;
}

.btn-bg-custom {
    background-color: #00b6b3;
    color: white;
    font-weight: 600;
}
</style>