import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

const useQueryDiary = () => {
    return useQuery(queryKeys.diary(), () => apiKeys.getDiaries());
};

export default useQueryDiary;
