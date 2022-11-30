import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationSignUp = () => {
    const { mutate } = useMutation(apiKeys.createUser, {
        onMutate: (variable) => {
            console.log('onMutate', variable);
        },
        onError: (error, variable, context) => {
            console.log('error', variable, context);
        },
        onSuccess: (data, variables, context) => {
            console.log('success', data, variables, context);
        },
        onSettled: () => {
            console.log('end');
        },
    });

    return mutate;
};

export default useMutationSignUp;
