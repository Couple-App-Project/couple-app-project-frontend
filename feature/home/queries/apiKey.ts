import instance from 'utils/api';

export const apis = {
    getCoupleInfo: async () => await instance.get('/couples/info'),
};
