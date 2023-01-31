import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';
import { useRouter } from 'next/router';

const useMutationPostCalendar = () => {
    const router = useRouter();

    const { mutate } = useMutation(apiKeys.postNewCalendar, {
        onSuccess: (response, variables) => {
            console.log('success', response, variables);
            router.push('/calendar')
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

export default useMutationPostCalendar;
