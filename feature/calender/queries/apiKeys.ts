import instance from 'utils/api';
import type { CalendarParamsType } from '../types';

const apiKeys = {
    getCalendar: async (data: CalendarParamsType) =>
        await instance.get(`/calendars`, {
            params: {
                month: data.month,
                keyword: data.keyword,
                type: data.type,
            },
        }),

    getCalendarDetail: async (calendarId: any) => {
        if (typeof calendarId !== 'undefined') {
            return await instance.get(`/calendars/${calendarId}`);
        }
    },

    postNewCalendar: async (calendarInfo: object) =>
        await instance.post('/calendars', calendarInfo),

    rewriteCalendar: async (calendarInfo: {
        calendarInfo: object;
        calendarId: any;
    }) =>
        await instance.put(
            `/calendars/${calendarInfo.calendarId}`,
            calendarInfo.calendarInfo,
        ),

    deleteCalendar: async (calendarId: any) => {
        if (typeof calendarId !== 'undefined') {
            return await instance.delete(`/calendars/${calendarId}`);
        }
    },
};

export default apiKeys;
