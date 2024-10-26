import axios from 'axios';
import config from '../config';

console.log({BASE_URL: config.BASE_URL});
const axiosInstance = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
