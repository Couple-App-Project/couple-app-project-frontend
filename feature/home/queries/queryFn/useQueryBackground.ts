import { useQuery } from 'react-query';
import apiKeys from '../apiKeys';
import queryKeys from '../queryKeys';

const useQueryBackground = () => {
    return useQuery(queryKeys.getBackgroundImage(), () =>
        apiKeys.getBackgroundImage(),
    );
};

export default useQueryBackground;
