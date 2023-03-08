import React from 'react';
import StepLayout from 'layouts/StepLayout';
import { CoupleCodeForm } from '../components';
import { useQueryCoupleCode } from '../queries/queryFn';
import { useMutationCoupleConnent } from '../queries/mutationFn';
import useInput from 'hooks/useInput';

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
                userCode={data?.data.data.userCode}
                inviteCode={inviteCode}
                onChangeCode={onChangeCode}
                createCoupleConnet={createCoupleConnet}
            />
        </StepLayout>
    );
};

export default ScreenCoupleCode;
