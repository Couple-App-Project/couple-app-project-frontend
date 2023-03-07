import instance from 'utils/api';
import imgInstance from 'utils/imgInstance';

const apiKeys = {
    createDiary: async (data: FormData) =>
        await imgInstance.post('/diaries', data),
    edi
    getDiaryDetail: async (calendarId: number) =>
        await instance.get(`/diaries/${calendarId}`),
};

export default apiKeys;
