import instance from 'utils/api';

const apiKeys = {
    getDiaries: async () => await instance.get(`/diaries`),
};

export default apiKeys;
