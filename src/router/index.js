import { createRouter, createWebHistory } from 'vue-router'

import MealDetails from '@/components/MealDetails.vue';
import RandomMeal from '@/components/RandomMeal.vue';
import SearchByName from '@/components/SearchByName.vue';
import SearchByIngredient from "@/components/SearchByIngredient.vue";
import SearchByCategory from "@/components/SearchByCategory.vue";
import SearchByZone from "@/components/SearchByZone.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/name',
        name: 'SearchByName',
        component: SearchByName
    },
    {
        path: '/random',
        name: 'RandomMeal',
        component: RandomMeal
    },
    {
        path: '/category',
        name: 'category',
        component: SearchByCategory
    },
    {
        path: '/ingredient',
        name: 'SearchByIngredient',
        component: SearchByIngredient
    },
    {
        path: '/zone',
        name: 'zone',
        component: SearchByZone
    },
    {
        path: '/meal/:id',
        name: 'meal',
        component: MealDetails
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
