import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import apiKeys from '../apiKeys';

const useMutationEditDiary = (calendarId: any) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(apiKeys.editDiary, {
        onSuccess: ({ data }) => {
            queryClient.setQueryData(
                ['diaryDetail', calendarId],
                data.updatedDiary,
            );
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ['diaryDetail', calendarId],
                refetchActive: false,
            });
            router.push(`/diary/detail/${calendarId}`);
        },
    });

    return mutate;
};

export default useMutationEditDiary;
