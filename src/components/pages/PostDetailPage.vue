<script>
import axios from 'axios';
import { store } from '../../data/store';
import PostCard from '../posts/PostCard.vue';
const endpoint = 'http://localhost:8000/api/posts/'
export default {
    name: 'PostDetailPage',
    components: { PostCard },
    data: () => ({
        store,
        post: null,
    }),
    methods: {
        getPost() {
            store.isLoading = true;
            axios.get(endpoint + this.$route.params.slug)
                .then(res => { this.post = res.data; })
                .catch(err => { console.error(err.message) })
                .then(() => { store.isLoading = false })
        }
    },
    created() {
        this.getPost();
    }
}
</script>

<template>
    <PostCard v-if="!store.isLoading && post" :post="post" :isDetail="true" class="mt-5" />
</template>

<style lang='scss' scoped>
/* style here */
</style>