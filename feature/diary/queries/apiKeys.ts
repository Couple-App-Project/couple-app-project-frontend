import instance from 'utils/api';
import imgInstance from 'utils/imgInstance';

const apiKeys = {
    getDiaries: async () => await instance.get(`/diaries`),
    createDiary: async (data: FormData) =>
        await imgInstance.post('/diaries', data),
    editDiary: async ({ diaryId, data }: { diaryId: number; data: FormData }) =>
        await imgInstance.put(`/diaries/${diaryId}`, data),
    deleteDiary: async (diaryId: number) =>
        await instance.delete(`/diaries/${diaryId}`),
    getDiaryDetail: async (calendarId: number) =>
        await instance.get(`/diaries/${calendarId}`),
    toggleDiaryLabel: async (diaryId: number) =>
        await instance.put(`/diaries/label/${diaryId}`),
};

export default apiKeys;
