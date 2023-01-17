import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

const useQueryCalenders = (month: string) => {
    return useQuery(queryKeys.coupleCalender(month), () =>
        apiKeys.getCoupleCalenders(month),
    );
};

export default useQueryCalenders;
