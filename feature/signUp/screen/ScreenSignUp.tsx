import React, { useState } from 'react';
import useInputError from '../hooks/useInputError';
import { useMutationSignUp } from '../queries/mutationFn';
import StepLayout from 'layouts/StepLayout';
import { SignUpForm } from '../components';
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

    const { data, refetch } = useQueryEmailCheck(userInfo.email);

    const checkHandler = () => {
        refetch();
    };

    const createSignUp = useMutationSignUp();

    const [fieldFocus, setFieldFocus] = useState({
        email: false,
        password: false,
        pwdConfirm: false,
    });

    const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        setFieldFocus((prev) => {
            return {
                ...prev,
                [e.target.name]: true,
            };
        });
    };

    const [fieldErr, errorHandler] = useInputError({
        email: false,
        password: false,
        pwdConfirm: false,
    });

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
                !data?.data.success
                    ? true
                    : false
            }
        >
            <SignUpForm
                userInfo={userInfo}
                onChangeInfo={onChangeInfo}
                fieldFocus={fieldFocus}
                focusHandler={focusHandler}
                fieldErr={fieldErr}
                errorHandler={errorHandler}
                checkHandler={checkHandler}
                isEmail={data?.data.success}
                sendSignUp={sendSignUp}
            />
        </StepLayout>
    );
};

export default ScreenSignUp;
