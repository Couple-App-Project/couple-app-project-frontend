import { useQuery } from 'react-query';
import queryKeys from '../queryKeys';
import apiKeys from '../apiKeys';
import type { CalendarParamsType } from 'feature/calender/types/CalendarParamsType';

const useQueryCalendarSearch = (data: CalendarParamsType) => {
    return useQuery(
        queryKeys.calenderSearch(data),
        () => apiKeys.getCalendar(data),
        {
            enabled: !!data.keyword,
        },
    );
};

export default useQueryCalendarSearch;
