import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { apis } from '../apiKey';
import { statusType } from 'utils/enum';

const useMutationLogin = () => {
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: apis.login,
        onSuccess: async (response: any) => {
            sessionStorage.setItem('access', response.data.access_token);
            router.push('/home');
        },
        onError: async (error:any) => {
            if(error.response.status === statusType.unauthorized) alert('잘못된 이메일 혹은 비밀번호를 입력하셨습니다')
        },
        // onSettled: async () => {
        //     console.log('실행은 됨')
        // }
    });

    return mutation;
};

export default useMutationLogin;
