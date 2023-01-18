import instance from 'utils/api';

const apiKeys = {
    getCoupleCalenders: async (date: string) =>
        await instance.get(`/calenders`),
};

export default apiKeys;
