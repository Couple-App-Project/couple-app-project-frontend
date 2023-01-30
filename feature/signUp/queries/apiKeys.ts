import instance from 'utils/api';

const apiKeys = {
    createUser: async (userData: object) =>
        await instance.post('/users', userData),
    checkEmail: async (email: string) =>
        await instance.get(`/auth/exist/${email}`),
};

export default apiKeys;
