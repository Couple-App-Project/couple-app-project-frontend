import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import apiKeys from '../apiKeys';

/**
 * 다이어리 생성 Fn
 * @returns mutation Fn
 */
const useMutationCreateDiary = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.createDiary, {
        onSuccess: () => {
            queryClient.invalidateQueries(['diary']);
            router.push('/diary');
        },
    });

    return mutate;
};

export default useMutationCreateDiary;
