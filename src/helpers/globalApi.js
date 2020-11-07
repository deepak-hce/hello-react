const axios = require('axios');
const baseUrl = 'http://localhost:3000/api/v1/';
const util = require('./util');

// Request Interceptor

axios.interceptors.request.use(function (config) {
    config.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


// Response Interceptor
axios.interceptors.response.use(function (response) {

    response = response.data;

    return response;
  }, function (error) {
    util.notify('danger', error.response.data.Comment);
    return Promise.reject(error);
  })



export function get(endPoint) {
    return axios.get(`${baseUrl}${endPoint}`)
}

export function get1(endPoint) {
    return axios.get(`${endPoint}`);
}



export function post(endPoint ,body) {
    return axios.post(`${baseUrl}${endPoint}`, JSON.stringify(body));
}

export function post1(endPoint ,body) {
    return axios.post(`${endPoint}`, JSON.stringify(body));
}