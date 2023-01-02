import { QueryClient, dehydrate } from 'react-query';
import queryKeys from '../queryKeys';
import apiKeys from '../apiKeys';

const usePrefetchCoupleCode = () => {
    async () => {
        const queryClient = new QueryClient();

        await queryClient.prefetchQuery(
            queryKeys.userCoupleCode,
            apiKeys.getCoupleCode,
        );

        return {
            props: {
                dehydratedState: dehydrate(queryClient),
            },
        };
    };
};

export default usePrefetchCoupleCode;
