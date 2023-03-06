import axios from 'axios';

const imgInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_KEY,
});

imgInstance.interceptors.request.use(
    (config) => {
        const accessToken = sessionStorage.getItem('access');
        if (accessToken) {
            config.headers!['Authorization'] = `Bearer ${accessToken}`;
        } else {
            config.headers!['Authorization'] = null;
        }
        config.headers!['Content-Type'] = 'multipart/form-data';
        return config;
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    },
);

export default imgInstance;
