import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { apis } from '../apiKey';

const useMutationLogin = () => {
    const mutation = useMutation({
        mutationFn: apis.login,
        onSuccess: async (data: any) => {
            // TODO: userData 스토어 저장
            // data.userData
            console.log('success',data)
            // sessionStorage.setItem('access', data.accessToken);
            // sessionStorage.setItem('refresh', data.refreshToken);
            // queryClient.invalidateQueries({ queryKey: ['login'] });
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
