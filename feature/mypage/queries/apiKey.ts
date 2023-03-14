import instance from 'utils/api';

export const apiKeys = {
    getCoupleInfo: async () => await instance.get('/couples/info'),
    logout: async () => await instance.get('/auth/logout'),
};
