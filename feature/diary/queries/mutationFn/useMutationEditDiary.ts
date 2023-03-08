import { useMutation } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationEditDiary = () => {
    const { mutate } = useMutation(apiKeys.editDiary, {
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

export default useMutationEditDiary;
