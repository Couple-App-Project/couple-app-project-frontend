import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationCoupleInfo = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.editCoupleInfo, {
        onMutate: (variables) => {
            console.log(variables);
        },
        onError: (error, variables, context) => {
            console.log(error, variables, context);
        },
        onSuccess: (data, variables, context) => {
            console.log(data, variables, context);

            if (router.pathname === '/coupleinfo') {
                router.push('/home');
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries(['coupleInfo']);
        },
    });

    return mutate;
};

export default useMutationCoupleInfo;
