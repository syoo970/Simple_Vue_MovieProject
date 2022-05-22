import axios from "axios";

const API_KEY = '7035c60c';
const API_END_POINT = 'http://www.omdbapi.com/';

export const getMovie = async (title, page) => {
    return await axios.get(`${API_END_POINT}`, { params: { apikey: API_KEY, s: title, page } });
};

export const getMovieDetail = async (id, plot = 'short') => {
    return await axios.get(`${API_END_POINT}?apikey=${API_KEY}&i=${id}&plot=${plot}`);
};