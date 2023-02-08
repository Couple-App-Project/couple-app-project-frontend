import instance from 'utils/api';

const apiKeys = {
    getCoupleCalenders: async (date: string) =>
        await instance.get(`/calendars`, { params: { month: date } }),

    getCalendarDetail: async (calendarId: any) => {
        if (typeof calendarId !== 'undefined') {
            return await instance.get(`/calendars/${calendarId}`);
        }
    },

    postNewCalendar: async (calendarInfo: object) =>
        await instance.post('/calendars', calendarInfo),

    rewriteCalendar: async (calendarInfo: {calendarInfo:object, calendarId: any}) =>
        await instance.put(`/calendars/${calendarInfo.calendarId}`, calendarInfo.calendarInfo),
};

export default apiKeys;
