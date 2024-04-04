<script>
export default {
    name: 'PostCard',
    props: { post: Object, isDetail: Boolean },
    computed: {
        abstract() {
            const abstract = this.post.content.slice(0, 450);
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
    <!--Serve dinamicizzare la classe per cambiare la width da 400px a 100%-->
    <div class="f-item" :class="isDetail ? detail : index">
        <!-- <div class="body"> -->
        <!--Card Header-->
        <div class="header d-flex justify-content-between align-items-center">
            <h5>{{ post.title }}</h5>
            <div class="badge rounded-pill pill-bg-custom">
                {{ post.category ? post.category.label : '' }}</div>
        </div>

        <!--Card Main-->
        <div class="main clearfix">
            <img v-if="post.image" :src="post.image" :alt="post.title" class="img-fluid float-start me-2">
            <p class="card-text">{{ isDetail ? post.content : abstract }}</p>
        </div>

        <!--Card Footer-->
        <div class="footer">
            <div class="p-2 text-center">
                <!--Tag da implementare e spostare-->
                <!-- <div>
                    <div class="badge rounded-pill text-bg-success">
                        {{ post.tags ? post.tags.label : '' }}</div>
                </div> -->
                <small> Pubblicato il {{ pubblicationDate }}</small>
            </div>
            <!--Rotta singolo post-->
            <RouterLink v-if="!isDetail" :to="`/posts/${post.slug}`" class="btn btn-bg-custom more">Continua a leggere
            </RouterLink>
        </div>
        <!-- </div> -->
    </div>

</template>

<style lang='scss' scoped>
.index {
    width: 400px;
}

.detail {
    width: 100%;
}

.f-item {
    position: relative;
    height: fit-content;
    width: 400px;

    margin: 1rem;
    flex-basis: calc(100% / 3 - 2rem);


    border-style: solid;
    border-width: 2px;
    border-image: linear-gradient(45deg, #00b6b3, #00e87e) 1;


    .header {
        padding: 10px 20px;
        border-bottom: 1px solid lightgray;
    }

    .main {
        min-height: 470px;
        padding: 10px;
        margin-top: 10px;
        text-align: justify;
        border-bottom: 1px solid lightgray;
    }

    .footer {
        padding: 0 5px;

        .more {
            width: 100%;
            margin-bottom: 20px;
        }
    }
}

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