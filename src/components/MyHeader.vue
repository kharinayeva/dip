<template>
    <header class="p-3 text-bg-dark">
        <div class="container">
            <!-- <div class=""> 
                <img src="../assets/img/BINLOGO.png" alt="" width="36" height="36"></div> -->
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <!-- <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img src="/img/BINLOGO.png" alt="" width="36" height="36">
                </a> -->
                <!-- <img src="../assets/img/BINLOGO.png" alt="" width="36" height="36"> -->

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li v-for="(item, index) in menuItems" :key="index">
                        <router-link :to="{ path: item.link }" class="nav-link px-2 text-white">{{ item.title
                            }}</router-link>
                    </li>
                </ul>

                <!-- <div class="text-end d-flex gap-2">
                    <button type="button" class="btn btn-dark" v-show="is_logged"
                        @click=" $router.push({ name: 'mark' })">Оцененные проекты</button>
                    <button type="button" class="btn btn-primary" v-show="is_logged"
                        @click=" $router.push({ name: 'cabinet' })">Личный кабинет</button>

                    <button type="button" class="btn me-2" :class="is_logged ? 'btn-danger' : 'btn-primary'"
                        @click="loginButtonHandler()">
                        {{ is_logged ? 'Выйти' : 'Войти' }}
                    </button>

                </div> -->
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'MyHeader',
    data() {
        return {
            menuItems: [
                { 'link': '/', 'title': 'Главная' },
                { 'link': '/about', 'title': 'О нас' },
                { 'link': '/instruction', 'title': 'Инструкция' },
                { 'link': '/support', 'title': 'Поддержка' },
                // { 'link': '/mark', 'title': 'Оцененные проекты' },
                // { 'link': '/cabinet', 'title': 'Личный кабинет' },
            ]
        }
    },
    computed: {
        // is_logged() {
        //     return this.$store.getters.getLogged
        // },
    },
    methods: {
        // loginButtonHandler() {
        //     if (this.is_logged) {
        //         this.$store.dispatch('logout')
        //             .then(() => this.$router.push({ path: '/' }))
        //     } else {
        //         this.$router.push('/login')
        //     }
        // }
    }
}
</script>