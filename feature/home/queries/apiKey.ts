import instance from 'utils/api';

export const apis = {
    getCoupleInfo: async () => await instance.get('/couples/info'),
    writeTodayComment: async (comment: string) =>
        await instance.patch('/users/todaycomment', comment),
};
