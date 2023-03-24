import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

const useQueryCoupleCode = () => {
    return useQuery(queryKeys.userCoupleCode, apiKeys.getCoupleCode, {
        select: (data) => data.data.data,
    });
};

export default useQueryCoupleCode;
