import axios from "axios";

const API_KEY = "rPu7JUOrP02bqKvhpUksO6oYAhf1IpTDZLY3uga7";
const API_END_POINT = 'https://syu9710g.korconnect.io/Vue-Movie-Project/';

const headers = {"x-api-key": API_KEY};

export const getMovie = async (title, page) => {
    return await axios.get(`${API_END_POINT}?apikey=${API_KEY}&s=${title}&page=${page}`, {
        headers,
    });
};

export const getMovieDetail = async (id, plot = 'short') => {
    return await axios.get(`${API_END_POINT}?apikey=${API_KEY}&i=${id}&plot=${plot}`, {
        headers,
    });
};