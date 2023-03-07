import imgInstance from 'utils/imgInstance';

const apiKeys = {
    createDiary: async (data: FormData) =>
        await imgInstance.post('/diaries', data),
};

export default apiKeys;
