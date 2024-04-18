<template v-slot:footer-year>
    <div class="overflow-hidden">
        <MyHeader />
        <main>
            <router-view></router-view>
        </main>
        <MyFooter>
            {{ getFullYear }}  
        </MyFooter>
    </div>
</template>

<script>
import MyFooter from '../components/MyFooter.vue'
import MyHeader from '../components/MyHeader.vue'
export default {
    name: 'MyLayout',
    components: {
        MyFooter,
        MyHeader,
    },
    data() {
        return {
            Year: ''
        }
    },
    computed: {
        getFullYear() {
            return new Date().getFullYear()
        },

    },
}

</script>