import React from 'react';
import styled from 'styled-components';
import { QueryClient, dehydrate } from 'react-query';
import queryKeys from '../queries/queryKeys';
import apiKeys from '../queries/apiKeys';
import { CoupleCodeForm } from '../components';
import { useQueryCoupleCode } from '../queries/queryFn';
import { useMutationCoupleConnent } from '../queries/mutationFn';
import useInput from 'hooks/useInput';

// export async function getStaticProps() {
//     const queryClient = new QueryClient();

//     await queryClient.prefetchQuery(
//         queryKeys.userCoupleCode,
//         apiKeys.getCoupleCode,
//     );

//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient),
//         },
//     };
// }

const ScreenCoupleCode = () => {
    const { data } = useQueryCoupleCode();
    const coupleConnentMutation = useMutationCoupleConnent();

    const [inviteCode, onChangeCode] = useInput('');

    const createCoupleConnet = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        coupleConnentMutation(inviteCode);
    };

    return (
        <CoupleCodeWrapper>
            <CoupleCodeForm
                userCode={data?.data.data.userCode}
                inviteCode={inviteCode}
                onChangeCode={onChangeCode}
                createCoupleConnet={createCoupleConnet}
            />
        </CoupleCodeWrapper>
    );
};

export default ScreenCoupleCode;

const CoupleCodeWrapper = styled.div``;
