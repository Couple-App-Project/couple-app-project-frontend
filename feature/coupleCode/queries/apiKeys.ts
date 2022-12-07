import axios from 'axios';

const apiKeys = {
    getCoupleCode: async () => await axios.get(``),
    createCoupleConnect: async (inviteCode: string | number) =>
        await axios.post(``, inviteCode),
};

export default apiKeys;
