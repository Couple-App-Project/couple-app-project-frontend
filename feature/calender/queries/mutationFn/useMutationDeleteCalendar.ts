import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';
import { useRouter } from 'next/router';

const useMutationDeleteCalendar = () => {
    const router = useRouter();

    const { mutate } = useMutation(apiKeys.deleteCalendar, {
        onSuccess: (response, variables) => {
            // console.log('success', response, variables);
            router.push('/calendar');
        },
        onError: (error, variable) => {
            console.log('error', error, variable);
        },
    });

    return mutate;
};

export default useMutationDeleteCalendar;
