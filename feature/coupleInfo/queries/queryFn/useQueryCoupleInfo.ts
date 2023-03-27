import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

const useQueryCoupleInfo = () => {
    return useQuery(queryKeys.coupleInfo, apiKeys.getCoupleInfo);
};

export default useQueryCoupleInfo;
