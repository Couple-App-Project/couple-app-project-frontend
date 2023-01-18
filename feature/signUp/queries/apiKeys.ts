import instance from 'utils/api';

const apiKeys = {
    createUser: async (userData: object) =>
        await instance.post('/users', userData),
};

export default apiKeys;
