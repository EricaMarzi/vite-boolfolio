<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-white border-bottom">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/img/portfolio.png" alt="Logo" class="logo-portfolio">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link active fw-bold" aria-current="page" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link active fw-bold" aria-current="page" to="/contact-us">Contattaci
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang='scss' scoped>
.logo-portfolio {
    width: 200px;
    margin-left: 20px;
}
</style>