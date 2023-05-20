import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';

/**
 * 커플 연결 Fn
 * @returns mutation Fn
 */
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
