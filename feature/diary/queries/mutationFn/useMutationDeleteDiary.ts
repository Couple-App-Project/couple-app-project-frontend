import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationDeleteDiary = (calendarId: any) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.deleteDiary, {
        onSuccess: () => {
            queryClient.setQueryData(['diary'], ({ data }: any) => {
                data.data.filter(
                    (diary: any) => diary.calendarId !== Number(calendarId),
                );
            });
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ['diaryDetail', calendarId],
                refetchActive: false,
            });
            router.push('/diary');
        },
    });

    return mutate;
};

export default useMutationDeleteDiary;
