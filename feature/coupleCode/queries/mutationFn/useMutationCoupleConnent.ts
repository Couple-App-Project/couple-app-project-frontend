import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';
import { useRouter } from 'next/router';

const useMutationCoupleConnent = () => {
    const router = useRouter();

    const { mutate } = useMutation(apiKeys.createCoupleConnect, {
        onError: (err: any) => {
            alert(err.response.data.message);
        },
        onSuccess: (data, variables, context) => {
            alert(data.data.data.message);
            router.push('/coupleinfo');
        },
    });

    return mutate;
};

export default useMutationCoupleConnent;
