// import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationCreateBackground = () => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.changeBackgroundImage, {
        onSuccess: () => {
            queryClient.invalidateQueries(['background']);
        },
    });

    return mutate;
};

export default useMutationCreateBackground;
