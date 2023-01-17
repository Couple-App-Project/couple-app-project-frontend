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

    const handlerCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(`${data?.data.data.userCode}`)
                .then(() => alert('코드가 클립보드에 복사되었습니다.'))
                .catch(() => alert('복사를 다시 시도해주세요.'));
        } else {
            alert('공유하기가 지원되지 않는 환경입니다.');
        }
    };

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
                handlerCopy={handlerCopy}
                createCoupleConnet={createCoupleConnet}
            />
        </CoupleCodeWrapper>
    );
};

export default ScreenCoupleCode;

const CoupleCodeWrapper = styled.div``;
