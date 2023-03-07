import instance from 'utils/api';
import imgInstance from 'utils/imgInstance';

const apiKeys = {
    createDiary: async (data: FormData) =>
        await imgInstance.post('/diaries', data),
    editDiary: async ({ diaryId, data }: { diaryId: number; data: FormData }) =>
        await imgInstance.put(`/diaries/${diaryId}`, data),
    getDiaryDetail: async (calendarId: number) =>
        await instance.get(`/diaries/${calendarId}`),
};

export default apiKeys;
