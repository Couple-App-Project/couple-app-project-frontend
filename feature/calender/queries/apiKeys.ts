import instance from 'utils/api';

const apiKeys = {
    getCoupleCalenders: async (date: string) =>
        await instance.get('/calenders'),
    
    postNewCalendar: async (calendarInfo: object) =>
        await instance.post('/calenders', calendarInfo)
};

export default apiKeys;