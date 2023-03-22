import instance from 'utils/api';

const apiKeys = {
    getCoupleInfo: async () => await instance.get('/couples/info'),
    editCoupleInfo: async (coupleData: {
        anniversary?: string;
        nickname?: string;
        todayComment?: string;
        backgroundColor?: string;
    }) => await instance.post(`/couples/info`, coupleData),
};

export default apiKeys;
