import { useQuery } from 'react-query';
import type { CalendarParamsType } from '../../types';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

/**
 * 검색 Fn
 * @param data keyword, 일정 종류(데이트, 기념일 또는 전체)
 * @returns query Fn
 */
const useQueryCalendarSearch = (data: CalendarParamsType) => {
    return useQuery(
        queryKeys.calenderSearch(data),
        () => apiKeys.getCalendar(data),
        {
            enabled: !!data.keyword,
            select: (data) => data.data.data,
        },
    );
};

export default useQueryCalendarSearch;
