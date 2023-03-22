import { useMutation, useQueryClient } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationLabel = () => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.toggleDiaryLabel, {
        // onMutate(variables) {
        //     console.log(variables);
        // },
        // onError(error, variables, context) {
        //     console.log(error);
        // },
        // onSuccess(data, variables, context) {
        //     console.log(data);
        // },
        onSettled() {
            queryClient.invalidateQueries(['diary']);
        },
    });

    return mutate;
};

export default useMutationLabel;
