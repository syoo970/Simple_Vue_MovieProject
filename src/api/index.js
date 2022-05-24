import axios from "axios";

export const getMovie = async (title, page) => {
    return await axios.post(`https://qzwoyfe1n0.execute-api.ap-northeast-2.amazonaws.com/Prod`, {
        callType: 'search',
        title,
        page
    });
};

export const getMovieDetail = async (id, plot = 'short') => {
    return await axios.post(`https://2ho8m87pm5.execute-api.ap-northeast-2.amazonaws.com/Prod`,{
        callType: 'detail',
        id,
        plot
    });
};