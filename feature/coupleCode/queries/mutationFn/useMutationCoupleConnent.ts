import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';
import { useRouter } from 'next/router';

const useMutationCoupleConnent = () => {
    const router = useRouter();

    const { mutate } = useMutation(apiKeys.createCoupleConnect, {
        onMutate: (variable) => {
            console.log('onMutate', variable);
        },
        onError: (error, variable, context) => {
            console.log('error', variable, context);
        },
        onSuccess: (data, variables, context) => {
            console.log('success', data, variables, context);
            router.push('/home');
        },
        onSettled: () => {
            console.log('end');
        },
    });

    return mutate;
};

export default useMutationCoupleConnent;
