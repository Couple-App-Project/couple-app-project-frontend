import type { CalendarParamsType } from '../types/CalendarParamsType';

const queryKeys = {
    calendar: (month: string) => ['calendar', month],
    calendarDetail: () => ['calendarDetail'],
    calenderSearch: (search: CalendarParamsType) => ['calenderSearch', search],
};

export default queryKeys;
