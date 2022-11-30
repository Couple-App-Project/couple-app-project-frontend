import axios from 'axios';

const apiKeys = {
    createUser: async (userInfo: object) => await axios.post(``, userInfo),
    checkUserEmail: async (email: string) => await axios.post(``, email),
};

export default apiKeys;
