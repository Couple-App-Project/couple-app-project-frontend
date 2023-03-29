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
