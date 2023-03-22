import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

const useQueryCalendarDiary = (calendarId: any) => {
    return useQuery(
        queryKeys.calendarDiary(Number(calendarId)),
        () => apiKeys.getCalendarDiaries(Number(calendarId)),
        {
            enabled: typeof calendarId === 'string',
        },
    );
};

export default useQueryCalendarDiary;
