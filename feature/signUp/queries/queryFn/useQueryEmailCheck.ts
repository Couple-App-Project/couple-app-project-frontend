import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKerys';

const useQueryEmailCheck = (email: string) => {
    return useQuery(
        queryKeys.userEmailCheck(email),
        () => apiKeys.checkEmail(email),
        {
            enabled: false,
            onError: (err: any) => {
                alert(err.response.data.message);
            },
            onSuccess: (data) => {
                alert(data.data.data.message);
            },
        },
    );
};

export default useQueryEmailCheck;
