import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

const useQueryCalenders = (date: string) => {
    return useQuery(queryKeys.coupleCalender(date), () =>
        apiKeys.getCoupleCalenders(date),
    );
};

export default useQueryCalenders;
