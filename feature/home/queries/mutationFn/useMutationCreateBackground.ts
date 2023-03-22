// import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationCreateBackground = () => {
    // const router = useRouter();
    const { mutate } = useMutation(apiKeys.changeBackgroundImage, {
        onSuccess: () => {
            console.log('성공~');
            // router.push('');
        },
    });

    return mutate;
};

export default useMutationCreateBackground;
