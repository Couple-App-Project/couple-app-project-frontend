import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';

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
