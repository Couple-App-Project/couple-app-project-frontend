import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

/**
 * 사용자 커플 코드 Fn
 * @returns query Fn
 */
const useQueryCoupleCode = () => {
    return useQuery(queryKeys.userCoupleCode, apiKeys.getCoupleCode, {
        select: (data) => data.data.data,
    });
};

export default useQueryCoupleCode;
