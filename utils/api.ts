import axios from 'axios';
import router from 'next/router';

const instance = axios.create({
    baseURL: '',
    // headers: {
    //     Authorization: `Bearer ${sessionStorage.getItem('access')}`,
    // },
});

// TODO: api token 나오게 되면 추가
// const getAccessToken = instance.get('/api주소');

// @ts-ignore
// instance.interceptors.request.use(function (response) {
//     // TODO: token 저장 위치 논의
//     const refreshToken = sessionStorage.getItem('refresh');

//     if (refreshToken === undefined) {
//         return;
//         // TODO: 만료 여부 구하는 조건문 수정
//     } else if (refreshToken === '만료기간 다 됐으면!') {
//         alert('세션이 만료되었습니다. 다시 로그인해주세요');
//         router.push('/login');
//     }

//     return response;
// });

// instance.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         if (error.status === 401) {
//             getAccessToken
//                 .then((response: any) => {
//                     sessionStorage.setItem('access', response.accessToken);

//                     // response.accessToken으로 요청 다시 보내기
//                     const config = error.config;
//                     return axios.request(config);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         }
//     }
// );

export default instance;
