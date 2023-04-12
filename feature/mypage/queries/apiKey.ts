import instance from 'utils/api';

export const apiKeys = {
    logout: async () => await instance.get('/auth/logout'),
    deleteAccount: async () => await instance.delete('/users'),
};
