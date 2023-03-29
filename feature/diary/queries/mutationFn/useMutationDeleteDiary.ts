import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import apiKeys from '../apiKeys';

/**
 * 캘린더 삭제 Fn
 * @param calendarId 캘린더 id
 * @returns mutation Fn
 */
const useMutationDeleteDiary = (calendarId: number) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.deleteDiary, {
        onSuccess: (data) => {
            queryClient.setQueryData(
                ['diaryDetail', calendarId],
                (oldData: any) => {
                    return { ...oldData, ...data };
                },
            );
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ['diaryDetail', calendarId],
                refetchActive: false,
            });
            queryClient.invalidateQueries(['diary']);
            router.push('/diary');
        },
    });

    return mutate;
};

export default useMutationDeleteDiary;
