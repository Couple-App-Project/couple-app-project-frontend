import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationDeleteDiary = () => {
    const { mutate } = useMutation(apiKeys.deleteDiary, {
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

export default useMutationDeleteDiary;
