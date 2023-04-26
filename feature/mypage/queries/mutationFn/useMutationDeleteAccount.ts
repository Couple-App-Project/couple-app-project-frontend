import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { apiKeys } from '../apiKey';

const useMutationDeleteAccount = () => {
    const router = useRouter();

    const { mutate } = useMutation(apiKeys.deleteAccount, {
        onSuccess: async () => {
            sessionStorage.removeItem('access');
            sessionStorage.removeItem('refresh');
            router.push('/login');
        },
        onError: async (error: any) => {
            sessionStorage.removeItem('access');
            sessionStorage.removeItem('refresh');
            router.push('/login');
        },
    });

    return mutate;
};

export default useMutationDeleteAccount;
