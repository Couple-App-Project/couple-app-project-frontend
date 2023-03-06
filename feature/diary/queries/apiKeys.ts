import imgInstance from 'utils/imgInstance';

const apiKeys = {
    createDiary: async (data) => await imgInstance.post('/diaries', data),
};

export default apiKeys;
