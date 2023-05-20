import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';

/**
 * 회원가입 Fn
 * @returns mutation Fn
 */
const useMutationSignUp = () => {
    const router = useRouter();

    const { mutate } = useMutation(apiKeys.createUser, {
        onError: (err) => {
            console.log(err);
        },
        onSuccess: (data) => {
            const accessToken = data.data.data.accessToken;
            sessionStorage.setItem('access', accessToken);
            router.push('/couplecode');
        },
    });

    return mutate;
};

export default useMutationSignUp;
