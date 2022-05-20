import { createStore } from "vuex";
import { getMovie } from "~/api";

export default createStore({
    state() {
        return {
            movies: [],
            searchTitle: '',
            currentPage: 1,
        };
    },
    mutations: {
        updateMovieList(state, newMovieList) {
            if(!Array.isArray(newMovieList)) return;
            state.movies = [...newMovieList];
        },
        updateCurrentPage(state, newPage) {
            state.currentPage = newPage;
        },
        updateSearchTitle(state, newTitle) {
            state.searchTitle = newTitle;
        }
    },
    actions: {
        async searchMovie({ commit }, { title, page } ) {
            commit('updateSearchTitle', title);
            const res = await getMovie(title, page);
            if (res.data.Response === 'True') commit('updateMovieList', res.data.Search);
            else commit('updateMovieList', []);
        },
        async moveMoviePage({ commit, state }, { direction }) {
            commit('updateCurrentPage', direction === 'next' ? state.currentPage + 1 : state.currentPage - 1); //currentPageUpdate
            const res = await getMovie(state.searchTitle, state.currentPage);
            commit('updateMovieList', res.data.Search);
        }
    }
});