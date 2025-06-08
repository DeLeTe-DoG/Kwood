import { createRouter, createMemoryHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import CatalogView from '@/views/CatalogView.vue'

const routes = [
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogView,
    },
    {
        path: '/',
        name: 'main',
        component: MainView,
    },
]
const router = createRouter({
    routes,
    history: createMemoryHistory()
})

export default router