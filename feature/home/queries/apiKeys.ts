import instance from 'utils/api';
import imgInstance from 'utils/imgInstance';

const apiKeys = {
    getBackgroundImage: async () =>
        await imgInstance.get('/couples/background-image'),
    changeBackgroundImage: async (data: FormData) =>
        await imgInstance.post('/couples/background-image', data),
};

export default apiKeys;
