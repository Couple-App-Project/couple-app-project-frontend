import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationCreateDiary = () => {
    const { mutate } = useMutation(apiKeys.createDiary, {
        onMutate(variables) {
            console.log(variables);
        },
        onError(error, variables, context) {
            console.log(error);
        },
        onSuccess(data, variables, context) {
            console.log(data);
        },
    });

    return mutate;
};

export default useMutationCreateDiary;
