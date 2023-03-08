import { useMutation } from 'react-query';
import { apis } from '../apiKey';
import { useRouter } from 'next/router';

const useMutationComment = () => {
    const router = useRouter();

    const { mutate } = useMutation(apis.writeTodayComment, {
        onSuccess: (response, variables) => {
            console.log('success', response, variables);
            // router.push('');
        },
        onError: (error, variable) => {
            console.log('error', error, variable);
        },
        // onSettled: () => {
        //     console.log('실행은 됨')
        // },
    });

    return mutate;
};

export default useMutationComment;
