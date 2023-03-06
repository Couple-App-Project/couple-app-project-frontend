import imgInstance from 'utils/imgInstance';

const apiKeys = {
    createDiary: async (data: {
        calendarId: any;
        title: string;
        content: string;
        files: any;
    }) => await imgInstance.post('/diaries', data),
};

export default apiKeys;
