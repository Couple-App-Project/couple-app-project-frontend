import { useQuery } from 'react-query';
import queryKeys from '../queryKeys';
import apiKeys from '../apiKeys';

const useQueryCoupleCode = () => {
    return useQuery(queryKeys.userCoupleCode, apiKeys.getCoupleCode);
};

export default useQueryCoupleCode;
