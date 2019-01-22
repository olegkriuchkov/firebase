import config from './config';
import axios from 'axios';

const http = axios.create({
    baseURL: config.apiUrl
});

export default http;