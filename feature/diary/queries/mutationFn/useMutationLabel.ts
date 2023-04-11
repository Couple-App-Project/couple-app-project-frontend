import { useMutation, useQueryClient } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationLabel = () => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.toggleDiaryLabel, {
        onSettled() {
            queryClient.invalidateQueries(['diary']);
            queryClient.invalidateQueries(['diaryDetail']);
        },
    });

    return mutate;
};

export default useMutationLabel;
