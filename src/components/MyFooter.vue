<template>
	<footer class="footer">
		<ul class="nav d-flex justify-content-center border-bottom gap-3">
			<li v-for="(item, index) in menuItems" :key="index">
				<router-link :to="{ path: item.link }" class="nav-link px-2 text-dark ">{{ item.title
					}}</router-link>
			</li>
			<!-- <li class="nav-item">
						<a
							href="/"
							class="nav-link px-2 text-dark"
							>Главная</a
						>
					</li>
					<li class="nav-item">
						<a
							href="moreinfo"
							class="nav-link px-2 text-dark"
							>О нас</a
						>
					</li>
					<li class="nav-item">
						<a
							href="allproject"
							class="nav-link px-2 text-dark"
							>Список проектов</a
						>
					</li>
					<li class="nav-item">
						<a
							href="allcontact"
							class="nav-link px-2 text-dark"
							>Контакты</a
						>
					</li>
					<li class="nav-item" v-if="is_logged">
						<a
							href="mark"
							class="nav-link px-2 text-dark"
							>Оцененные проекты</a
						>
					</li>
					<li class="nav-item" v-if="is_logged">
						<a 
							href="cabinet"
							class="nav-link px-2 text-dark"
							>Личный кабинет</a
						>
					</li>
					<li class="nav-item" >
						<a
							href="login"
							class="nav-link px-2 text-dark"
							>Войти</a
						>
					</li> -->

			<div class="text-end d-flex gap-2">
				<!-- <button class="nav-link px-2 text-dark text-decoration-none fa-not-equal" v-show="is_logged" @click=" $router.push({ name: 'mark' })">Оцененные
					проекты</button> -->
                    <!-- <button type="button" class="btn btn-white  btn-outline-white" v-show="is_logged"
                        @click=" $router.push({ name: 'mark' })">Оцененные проекты</button>
				<button type="button" class="btn btn-white  btn-outline-white" v-show="is_logged"
					@click=" $router.push({ name: 'cabinet' })">Личный кабинет</button>

				<button type="button" class="btn me-2  " :class="is_logged ? ' btn-white' : ' btn-white'"
					@click="loginButtonHandler()">
					{{ is_logged ? 'Выйти' : 'Войти' }}
				</button> -->

			</div>


		</ul>
		<p class="text-center text-dark">
			<slot></slot>
		</p>
	</footer>
</template>
<script>
export default {
	name: 'MyFooter',
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
		// 	return this.$store.getters.getLogged
		// },
		// my_token() {
		// 	return this.$store.getters.getToken
		// }
	},
	methods: {
		// loginButtonHandler() {
		// 	if (this.is_logged) {
		// 		this.$store.dispatch('logout')
		// 			.then(() => this.$router.push({ path: '/' }))
		// 	} else {
		// 		this.$router.push('/login')
		// 	}
		// }
	}
}
</script>