import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import apiKeys from '../apiKeys';

/**
 * 커플 정보 변경 Fn
 * @returns mutation Fn
 */
const useMutationCoupleInfo = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.editCoupleInfo, {
        onError: (error) => {
            console.log(error);
        },
        onSuccess: (data) => {
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
