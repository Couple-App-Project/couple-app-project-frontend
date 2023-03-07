import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

const useQueryDiaryDetail = (calendarId: number) => {
    return useQuery(
        queryKeys.diaryDetail(calendarId),
        () => apiKeys.getDiaryDetail(calendarId),
        {
            enabled: !!calendarId,
            select: (data) => data.data.data[0],
        },
    );
};

export default useQueryDiaryDetail;
