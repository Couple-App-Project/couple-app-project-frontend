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

imgInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        if (err.response.status === 401) {
            const originalConfig = err.config;
            const refreshToken = sessionStorage.getItem('refresh');
            try {
                const data = await axios.get('/auth/reissue', {
                    baseURL: process.env.NEXT_PUBLIC_API_KEY,
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                    },
                });

                sessionStorage.setItem('access', data.data.data.accessToken);

                originalConfig.headers[
                    'Authorization'
                ] = `Bearer ${data.data.data.accessToken}`;

                return imgInstance.request(originalConfig);
            } catch (err) {
                alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
                window.location.href = '/login';
            }
            return Promise.reject(err);
        }
        return Promise.reject(err);
    },
);

export default imgInstance;
