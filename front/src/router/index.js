import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Article from '../views/Article/Article.vue';
import Create from '../views/Article/Create.vue';
import Update from '../views/Article/Update.vue';
import Login from '../views/Auth/Login.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/article/:slug',
        name: 'article',
        component: Article
    },
    {
        path: '/article',
        name: 'articleCreate',
        component: Create
    },
    {
        path: '/article/update/:slug',
        name: 'articleUpdate',
        component: Update
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;