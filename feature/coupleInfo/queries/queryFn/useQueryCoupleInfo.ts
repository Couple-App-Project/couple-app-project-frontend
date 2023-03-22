import { useQuery } from 'react-query';
import queryKeys from '../queryKeys';
import apiKeys from '../apiKeys';

const useQueryCoupleInfo = () => {
    return useQuery(queryKeys.coupleInfo, apiKeys.getCoupleInfo);
};

export default useQueryCoupleInfo;
