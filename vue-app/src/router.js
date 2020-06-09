import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter from './components/counter.vue';
import NotFound from './components/not-found.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Counter',
        component: Counter,
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
