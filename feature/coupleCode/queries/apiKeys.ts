import instance from 'utils/api';

const apiKeys = {
    getCoupleCode: async () => await instance.get(`/couples`),
    createCoupleConnect: async (inviteCode: string) =>
        await instance.post(`/couples`, inviteCode),
};

export default apiKeys;
