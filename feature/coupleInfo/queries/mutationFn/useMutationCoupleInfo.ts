import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationCoupleInfo = () => {
    const router = useRouter();

    const { mutate } = useMutation(apiKeys.createCoupleInfo, {
        onMutate: (variables) => {
            console.log(variables);
        },
        onError: (error, variables, context) => {
            console.log(error, variables, context);
        },
        onSuccess: (data, variables, context) => {
            console.log(data, variables, context);
            router.push('/home');
        },
    });

    return mutate;
};

export default useMutationCoupleInfo;