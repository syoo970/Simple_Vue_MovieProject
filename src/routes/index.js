import {createRouter, createWebHistory} from 'vue-router';
import Home from '~/views/Home';
import MovieList from '~/views/MovieList';
import NotFound from '~/views/NotFound';

const routes = [
    { path: '/', component: Home },
    { path: '/:name/:page', name:'movielist', component: MovieList },
    { path: '/:pathMatch(.*)*', component: NotFound }
];

export default createRouter({
    history: createWebHistory(),
    routes
});