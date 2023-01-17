import axios from 'axios';

const apiKeys = {
    getCoupleCalenders: async (month: string) =>
        await axios.get(`${process.env.NEXT_PUBLIC_API_KEY}calenders`),
};

export default apiKeys;
