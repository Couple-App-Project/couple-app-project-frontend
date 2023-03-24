import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { GetServerSideProps } from 'next';
import useInput from 'hooks/useInput';
import StepLayout from 'layouts/StepLayout';
import { CoupleCodeForm } from '../components';
import apiKeys from '../queries/apiKeys';
import { useMutationCoupleConnent } from '../queries/mutationFn';
import { useQueryCoupleCode } from '../queries/queryFn';
import queryKeys from '../queries/queryKeys';

const ScreenCoupleCode = () => {
    const { data } = useQueryCoupleCode();
    const coupleConnentMutation = useMutationCoupleConnent();

    const [inviteCode, onChangeCode] = useInput('');

    const createCoupleConnet = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        coupleConnentMutation(inviteCode);
    };

    return (
        <StepLayout
            title="커플 코드"
            disabled={inviteCode !== '' ? false : true}
        >
            <CoupleCodeForm
                userCode={data?.userCode}
                inviteCode={inviteCode}
                onChangeCode={onChangeCode}
                createCoupleConnet={createCoupleConnet}
            />
        </StepLayout>
    );
};

export default ScreenCoupleCode;

// export const getServerSideProps: GetServerSideProps = async () => {
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
// };
