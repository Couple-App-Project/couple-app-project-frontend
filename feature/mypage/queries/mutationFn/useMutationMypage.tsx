import { useMutation } from 'react-query';
import { apiKeys } from '../apiKey';
import { useQueryClient } from 'react-query';

const useMutationMypage = () => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.getCoupleInfo, {
        onSuccess: async (response: any) => {
            queryClient.setQueryData('couple-info', () => response.data.data);
        },
        onError: async (error: any) => {
            console.log(error);
        },
        // onSettled: async () => {
        //     console.log('실행은 됨')
        // }
    });

    return mutate;
};

export default useMutationMypage;
