import { createRouter, createWebHistory } from 'vue-router';

import myHome from './views/myHome.vue'
import myContact from './views/myContact.vue'
import myAbout from './views/myAbout.vue'
import myPortfolio from './views/myPortfolio.vue'

const routes = [
    { path: '/', name: 'home', component: myHome },
    { path: '/about', name: 'about', component: myAbout },
    { path: '/portfolio', name: 'portfolio', component: myPortfolio },
    { path: '/contact', name: 'contact', component: myContact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;