const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

exports.handler = async (event) => {
    const options = event;
    let res = { status: 200, response: '' };
    
    if (options.callType === 'search') 
    await axios.get(`${process.env.API_END_POINT}`, { params: { apikey: process.env.API_KEY, s: options.title, page: options.page } }).then(function(result) {
        res = { status: 200, response: result.data }; }).catch(function() {res = { status: 500, response:'error!'};});
    else await axios.get(`${process.env.API_END_POINT}?apikey=${process.env.API_KEY}&i=${options.id}&plot=${options.plot}`).then(function(result) {
        res = { status: 200, response: result.data }; }).catch(function() {res = { status: 500, response:'error!'};});
    return res;
};