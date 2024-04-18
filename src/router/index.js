import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage'
import MyLayout from '../pages/MyLayout'
import AboutPage from '../pages/AboutPage'
import InstructionPage from '../pages/InstructionPage'
import SupportPage from '../pages/SupportPage'





export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'myLayout',
            component: MyLayout,
            children: [
                {
                    path: '',
                    name: 'mainPage',
                    component: MainPage
                },
                {
                    path: 'about',
                    name: 'about',
                    component: AboutPage
                },
                {
                    path: 'instruction',
                    name: 'instruction',
                    component: InstructionPage
                },
                {
                    path: 'support',
                    name: 'support',
                    component: SupportPage
                }
            ]
        }
    ]
}
)