import axios from 'axios';

const apiKeys = {
    createUser: async (userData: object) =>
        await axios.post(process.env.NEXT_PUBLIC_API_KEY + 'users', userData),
};

export default apiKeys;
