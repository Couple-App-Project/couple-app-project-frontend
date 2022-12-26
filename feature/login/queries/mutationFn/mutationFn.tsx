import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { apis } from '../apiKey';
import { useRouter } from 'next/router';

const useMutationLogin = () => {
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: apis.login,
        onSuccess: async (response: any) => {
            sessionStorage.setItem('access', response.data.access_token);
            router.push('/home');
        },
        onError: async () => {
            console.log('error')
        },
        onSettled: async () => {
            console.log('실행은 됨')
        }
    });

    return mutation;
};

export default useMutationLogin;
