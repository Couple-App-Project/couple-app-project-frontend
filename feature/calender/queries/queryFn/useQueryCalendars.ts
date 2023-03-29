import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import calendersState from 'recoil/calendersState';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

/**
 * 해당 년.월에 대한 일정 목록 조회 Fn
 * @param month 'yy-mm'
 * @returns query Fn
 */
const useQueryCalenders = (month: string) => {
    const setCalenders = useSetRecoilState(calendersState);
    return useQuery(
        queryKeys.calendar(month),
        () => apiKeys.getCalendar({ month }),
        {
            enabled: !!month,
            onError: (err) => {
                console.log(err);
            },
            onSuccess: (data) => {
                setCalenders(data.data.data);
            },
        },
    );
};

export default useQueryCalenders;
