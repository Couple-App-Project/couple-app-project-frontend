import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';
import { useRouter } from 'next/router';

const useMutationCoupleConnent = () => {
    const router = useRouter();

    const { mutate } = useMutation(apiKeys.createCoupleConnect, {
        onError: (err: any) => {
            alert(err.response.data.message);
        },
        onSuccess: (data) => {
            alert(data.data.data.message);
            if (!data.data.data.status) {
                router.push('/coupleinfo');
            }
        },
    });

    return mutate;
};

export default useMutationCoupleConnent;
