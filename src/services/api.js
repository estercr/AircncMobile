import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.53.48.134:3333',
});

export default api;