import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';
import { useRouter } from 'next/router';

const useMutationSignUp = () => {
    const router = useRouter();

    const { mutate } = useMutation(apiKeys.createUser, {
        onMutate: (variable) => {
            console.log('onMutate', variable);
        },
        onError: (error, variable, context) => {
            console.log('error', variable, context);
        },
        onSuccess: (data, variables, context) => {
            console.log('success', data, variables, context);
            const accessToken = data.data.access_token;
            localStorage.setItem('accessToken', accessToken);
            router.push('/couplecode');
        },
        onSettled: () => {
            console.log('end');
        },
    });

    return mutate;
};

export default useMutationSignUp;
