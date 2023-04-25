import instance from 'utils/api';
import type { CoupleDataType } from '../types';

const apiKeys = {
    getCoupleInfo: async () => await instance.get('/couples/info'),
    editCoupleInfo: async (coupleData: CoupleDataType) =>
        await instance.post('/couples/info', coupleData),
};

export default apiKeys;
