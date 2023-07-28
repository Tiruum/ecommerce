import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: {
            products: Object
        }
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/ProductOverview.vue'),
        props: {
            product: Object
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router