import { useMutation } from 'react-query';
import { apis } from '../apiKey';
import { useQueryClient } from 'react-query';

const useMutationSetting = () => {
    const queryClient = useQueryClient()

    const { mutate } = useMutation(apis.getCoupleInfo, {
        onSuccess: async (response: any) => {
            queryClient.setQueryData('couple-info', ()=>response.data)
        },
        onError: async (error:any) => {
            console.log(error)
        },
        // onSettled: async () => {
        //     console.log('실행은 됨')
        // }
    });

    return mutate;
};

export default useMutationSetting;
