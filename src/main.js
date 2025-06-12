// import router from './router/main'
import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import MainView from './views/MainView.vue'
import CatalogView from './views/CatalogView.vue'

const routes = [
    {
        path: "/",
        name: "main",
        component: MainView,
    },
    {
        path: "/catalog",
        name: "catalog",
        component: CatalogView,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

const app = createApp(App)
app.use(router)

app.mount('#app')
