<script>
import axios from 'axios';
import { store } from '../../data/store';
import PostsList from '../posts/PostsList.vue';
import AppAlert from '../AppAlert.vue';
const endpoint = 'http://localhost:8000/api/posts/'

export default {
    name: 'Portfolio',
    data: () => ({
        store,
        posts: [],
        isLoading: false,
        isAlertOpen: false
    }),
    components: { PostsList, AppAlert },
    methods: {
        fetchPosts() {
            store.isLoading = true;
            axios.get(endpoint).then(res => {
                this.posts = res.data;
            }).catch(err => {
                console.error(err);
                this.isAlertOpen = true;
            }).then(() => {
                store.isLoading = false;
            })
        }
    },
    created() {
        this.fetchPosts();
    }
}
</script>

<template>

    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" />
    <!-- <AppLoader v-if="isLoading" /> -->
    <PostsList v-if="!store.isLoading" :posts="posts" />

</template>

<style lang='scss'>
/* style here */
</style>