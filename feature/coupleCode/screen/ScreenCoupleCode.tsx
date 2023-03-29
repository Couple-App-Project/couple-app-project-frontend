import React from 'react';
import useInput from 'hooks/useInput';
import StepLayout from 'layouts/StepLayout';
import { CoupleCodeForm } from '../components';
import { useMutationCoupleConnent } from '../queries/mutationFn';
import { useQueryCoupleCode } from '../queries/queryFn';

const ScreenCoupleCode = () => {
    const { data } = useQueryCoupleCode();

    const [inviteCode, onChangeCode] = useInput('');

    /**
     * 커플 연결
     */
    const coupleConnentMutation = useMutationCoupleConnent();

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
