import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

/**
 * 커플 정보 (기념일, 홈 배경 색상, 커플 애칭, 커플 생일, 커플 이메일, 오늘의 한마디) 조회 Fn
 * @returns query Fn
 */
const useQueryCoupleInfo = () => {
    return useQuery(queryKeys.coupleInfo, apiKeys.getCoupleInfo, {
        onSuccess: ({ data }) => {
            window.localStorage.setItem(
                'coupleInfo',
                JSON.stringify(data.data),
            );
        },
    });
};

export default useQueryCoupleInfo;
