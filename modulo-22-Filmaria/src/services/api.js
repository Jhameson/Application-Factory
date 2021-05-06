//  api
//  base url => https://sujeitoprogramador.com/
//  todos os filmes => r-api/?api=filmes/
//  filme com id =>r-api/?api=filmes/123 

import axios from 'axios';

const api =axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;
