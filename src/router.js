import { createRouter, createWebHistory } from 'vue-router'
import FilmPage from './views/FilmPage.vue'

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            name: 'film',
            path: '/film',
            component: FilmPage
        }
    ]
})