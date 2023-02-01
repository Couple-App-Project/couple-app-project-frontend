import axios from 'axios';
import router from 'next/router';


let accessToken:string|null = ''
let refreshToken:string|null = ''
if (typeof window !== 'undefined') {
    accessToken = sessionStorage.getItem('access')
    refreshToken = sessionStorage.getItem('refresh')
}
let instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_KEY,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
});

const sessionExpired = () => {
    sessionStorage.removeItem('access')
    sessionStorage.removeItem('refresh')

    alert('세션이 만료되었습니다. 다시 로그인 해주세요')
    router.push('/login')
}

// @ts-ignore
instance.interceptors.request.use(function (config) {
    // TODO: token 저장 위치 논의
    const accessToken = sessionStorage.getItem('access');
    const refreshToken = sessionStorage.getItem('refresh');

    if (accessToken!==null) {
        config.headers = {Authorization: `Bearer ${accessToken}`}
    } 
    else if (refreshToken!==null) {
        axios.get('/auth/reissue', {
            baseURL: process.env.NEXT_PUBLIC_API_KEY,
            headers: {
                Authorization: `Bearer ${refreshToken}`,
            }
        })
        .then((response: any) => {
            sessionStorage.setItem('access', response.data.data.accessToken);
            config.headers = {Authorization:`Bearer ${response.data.data.accessToken}`}
        })
        .catch(()=>{
            sessionExpired()
        })
    }
    return config;
});


instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            if (refreshToken === null) {
                refreshToken = sessionStorage.getItem('refresh');
            }
            axios.get('/auth/reissue', {
                baseURL: process.env.NEXT_PUBLIC_API_KEY,
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                }
            })
            .then((response: any) => {
                sessionStorage.setItem('access', response.data.data.accessToken);
                error.config.headers.Authorization = `Bearer ${sessionStorage.getItem('access')}`
                // response.accessToken으로 요청 다시 보내기
                return axios.request(error.config);
            })
            .catch((error) => {
                sessionExpired()
            })
            .then(()=>{
                window.location.reload()
            })
        }
    }
);

export default instance;
