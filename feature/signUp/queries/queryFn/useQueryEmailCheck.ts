import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKerys';

/**
 * 이메일 중복 확인 Fn
 * @param email 사용자 이메일
 * @returns query Fn
 */
const useQueryEmailCheck = (email: string) => {
    return useQuery(
        queryKeys.userCheckEmail(email),
        () => apiKeys.checkEmail(email),
        {
            retry: false,
            enabled: false,
            onSuccess: (data: any) => {
                alert(data.data.message);
            },
            onError: (err: any) => {
                alert(err.response.data.message);
            },
            select: (data) => data.data,
        },
    );
};

export default useQueryEmailCheck;
