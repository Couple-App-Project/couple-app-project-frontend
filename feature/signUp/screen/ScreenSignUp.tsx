import React, { useState } from 'react';
import StepLayout from 'layouts/StepLayout';
import { SignUpForm } from '../components';
import useFieldError from '../hooks/useFieldError';
import { useMutationSignUp } from '../queries/mutationFn';
import { useQueryEmailCheck } from '../queries/queryFn';

const ScreenSignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        pwdConfirm: '',
        name: '',
        gender: '',
        birthDay: '',
    });

    const onChangeInfo = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setUserInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    /**
     * err custom hook
     */
    const [fieldErr, errorHandler] = useFieldError({
        email: false,
        password: false,
        pwdConfirm: false,
    });

    /**
     * 이메일 중복 확인
     */
    const { data, refetch } = useQueryEmailCheck(userInfo.email);

    const checkHandler = () => {
        refetch();
    };

    /**
     * 회원가입
     */
    const createSignUp = useMutationSignUp();

    const sendSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { pwdConfirm, ...userData } = userInfo;
        createSignUp(userData);
    };

    return (
        <StepLayout
            title="회원가입"
            disabled={
                Object.values(fieldErr).includes(true) ||
                Object.values(userInfo).includes('') ||
                !data.success
                    ? true
                    : false
            }
        >
            <SignUpForm
                userInfo={userInfo}
                onChangeInfo={onChangeInfo}
                fieldErr={fieldErr}
                errorHandler={errorHandler}
                checkHandler={checkHandler}
                isEmail={data?.success}
                sendSignUp={sendSignUp}
            />
        </StepLayout>
    );
};

export default ScreenSignUp;
