import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

/**
 * 캘린더 상세 조회 Fn
 * @param calendarId 해당 캘린더 id
 * @returns query Fn
 */
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
