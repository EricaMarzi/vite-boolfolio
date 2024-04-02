import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import PostDetailPage from '../components/pages/PostDetailPage.vue';

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/posts/:id', component: PostDetailPage, name: 'post-detail' },
        { path: '/contact-us', component: ContactUsPage, name: 'contact-us' },
    ]
});

export { router }