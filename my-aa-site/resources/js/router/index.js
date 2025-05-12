import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import SectionPage from '../components/SectionPage.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/:section', name: 'Section', component: SectionPage, props: true },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
