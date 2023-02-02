// axios configuration
import axios from 'axios';
import { BASE_API_URL } from '../../enviroment';


const instance = axios.create({
    baseURL: BASE_API_URL,
});

instance.interceptors.request.use((config) => {
    // config.x = y;
    // token => localStorage..
    config.headers["Authorization"] = "Bearer token";
    return config;
})

instance.interceptors.response.use((response) => {
    if (response.status == 401) {
        // TODO: logout yap..
    }
    return response;
}, (error) => {
    return Promise.reject(error);
})

export default instance;