import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import apiKeys from '../apiKeys';

/**
 * 다이어리 수정 Fn
 * @param calendarId 캘린더 id
 * @returns mutation Fn
 */
const useMutationEditDiary = (calendarId: number) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.editDiary, {
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
            router.push(`/diary/detail/${calendarId}`);
        },
    });

    return mutate;
};

export default useMutationEditDiary;
