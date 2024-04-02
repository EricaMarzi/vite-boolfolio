<script>
import axios from 'axios';
import AppLoader from '../AppLoader.vue';
import PostCard from '../posts/PostCard.vue';
const endpoint = 'http://localhost:8000/api/posts/'
export default {
    name: 'PostDetailPage',
    components: { PostCard, AppLoader },
    data: () => ({
        post: null,
        isLoading: false
    }),
    methods: {
        getPost() {
            this.isLoading = true;
            axios.get(endpoint + this.$route.params.id)
                .then(res => { this.post = res.data; })
                .catch(err => { console.error(err.message) })
                .then(() => { this.isLoading = false })
        }
    },
    created() {
        this.getPost();
    }
}
</script>

<template>
    <h2 class="mt-5">Dettaglio post</h2>
    <AppLoader v-if="isLoading && !post" />
    <PostCard v-if="!isLoading && post" :post="post" :isDetail="true" />
</template>

<style lang='scss' scoped>
/* style here */
</style>