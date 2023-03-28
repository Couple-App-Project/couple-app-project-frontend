import type { CalendarParamsType } from '../types';

const queryKeys = {
    calendar: (month: string) => ['calendar', month],
    calendarDetail: () => ['calendarDetail'],
    calenderSearch: (search: CalendarParamsType) => ['calenderSearch', search],
};

export default queryKeys;
