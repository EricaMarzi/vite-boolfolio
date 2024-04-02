<script>
export default {
    name: 'AppAlert',
    prop: { show: Boolean },
    emits: ['close']
}
</script>

<template>
    <div v-if="show" class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
        <div class="d-flex align-items-center gap-3 justify-content-center">
            <h3>Errore del server</h3>
            <i class="fa-regular fa-face-sad-tear fa-2xl"></i>
        </div>
        <button type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template>

<style lang='scss' scoped>
/* style here */
</style>