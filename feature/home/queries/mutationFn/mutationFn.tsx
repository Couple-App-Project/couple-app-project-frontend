import { useMutation } from 'react-query';
import { apis } from '../apiKey';
import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { userInfoState } from 'recoil/userState';

const useMutationHome = () => {
    const queryClient = useQueryClient();
    const setUserInfo = useSetRecoilState(userInfoState);

    const { mutate } = useMutation(apis.getCoupleInfo, {
        onSuccess: async (response: any) => {
            queryClient.setQueryData('couple-info', () => response?.data?.data);
            setUserInfo(response.data.data);
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

export default useMutationHome;
