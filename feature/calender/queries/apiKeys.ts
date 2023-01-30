import instance from 'utils/api';

const apiKeys = {
    getCoupleCalenders: async (date: string) =>
        await instance.get(`/calendars`, { params: { month: date } }),
};

export default apiKeys;
