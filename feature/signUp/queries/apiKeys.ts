import instance from 'utils/api';
import type { UserInfoStateType } from '../types/UserInfoStateType';

const apiKeys = {
    createUser: async (userData: UserInfoStateType) =>
        await instance.post('/users', userData),
    checkEmail: async (email: string) =>
        await instance.get(`/auth/exist/${email}`),
};

export default apiKeys;
