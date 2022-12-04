import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { apis } from '../apiKey';

const useMutationLogin = () => {
    // const queryClient = useQueryClient();

    const mutation = useMutation(apis.login, {
        onSuccess: (data: any) => {
            console.log(data, data.accessToken);
            // TODO: userData 스토어 저장
            // data.userData
            sessionStorage.setItem('access', data.accessToken);
            sessionStorage.setItem('refresh', data.refreshToken);
            // queryClient.invalidateQueries({ queryKey: ['login'] });
        },
    });

    return mutation;
};

export default useMutationLogin;
