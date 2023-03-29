import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';

/**
 * 다이어리 생성 Fn
 * @returns mutation Fn
 */
const useMutationCreateDiary = () => {
    const router = useRouter();

    const { mutate } = useMutation(apiKeys.createDiary, {
        onSuccess: () => {
            router.push('/diary');
        },
    });

    return mutate;
};

export default useMutationCreateDiary;
