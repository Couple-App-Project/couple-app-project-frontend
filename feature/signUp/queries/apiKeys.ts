import axios from 'axios';

const apiKeys = {
    createUser: async (userInfo: object) => await axios.post(``, userInfo),
};

export default apiKeys;
