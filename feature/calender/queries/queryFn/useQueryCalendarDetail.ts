import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';
import { useRouter } from 'next/router';

const useQueryCalenderDetail = () => {
    const router = useRouter()
    const {calendarId} = router.query
    // console.log(typeof calendarId)

    return useQuery(queryKeys.calendarDetail(), () =>
        apiKeys.getCalendarDetail(calendarId), {
            enabled: typeof calendarId === 'string',
        }
    );
};

export default useQueryCalenderDetail;