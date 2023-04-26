import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

const useQueryUpcoming = () => {
    return useQuery(queryKeys.getUpcomingSchedule(), () =>
        apiKeys.getUpcomingSchedule(),
    );
};

export default useQueryUpcoming;
