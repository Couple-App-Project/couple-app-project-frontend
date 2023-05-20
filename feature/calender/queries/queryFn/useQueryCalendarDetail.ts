import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

const useQueryCalenderDetail = () => {
    const router = useRouter();
    const { calendarId } = router.query;

    return useQuery(
        queryKeys.calendarDetail(),
        () => apiKeys.getCalendarDetail(calendarId),
        {
            enabled: typeof calendarId === 'string' && calendarId !== '0',
        },
    );
};

export default useQueryCalenderDetail;
