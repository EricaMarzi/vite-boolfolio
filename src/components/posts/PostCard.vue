<script>
export default {
    name: 'PostCard',
    props: { post: Object, isDetail: Boolean },
    computed: {
        abstract() {
            const abstract = this.post.content.slice(0, 800);
            return abstract + '...';
        },
        pubblicationDate() {
            const date = new Date(this.post.created_at);

            let minutes = date.getMinutes();
            let hours = date.getHours();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;
            if (minutes < 10) minutes = '0' + minutes;
            if (hours < 10) hours = '0' + hours;

            return `${day}/${month}/${year} alle ${hours}:${minutes}`
        }
    }
}
</script>

<template>
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5>{{ post.title }}</h5>
            <div class="badge rounded-pill pill-bg-custom">
                {{ post.category ? post.category.label : '' }}</div>
        </div>

        <div class="card-body clearfix">
            <img v-if="post.image" :src="post.image" :alt="post.title" class="img-fluid float-start me-2">
            <p class="card-text">{{ isDetail ? post.content : abstract }}</p>
        </div>


        <div class="card-footer d-flex justify-content-between align-items-center">

            <div class="d-flex gap-3 ">
                <!--Tag?-->
                <div>
                    <div class="badge rounded-pill text-bg-success">
                        {{ post.tags ? post.tags.label : '' }}</div>
                </div>

                <small> Pubblicato il {{ pubblicationDate }}</small>
            </div>

            <RouterLink v-if="!isDetail" :to="`/posts/${post.id}`" class="btn btn-bg-custom">Continua a leggere
            </RouterLink>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.pill-bg-custom {
    background-color: #00e87e;
    color: white;
}

img {
    width: 200px;
}

.btn-bg-custom {
    background-color: #00b6b3;
    color: white;
    font-weight: 600;
}
</style>