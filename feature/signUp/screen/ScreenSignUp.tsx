import React, { useState } from 'react';
import styled from 'styled-components';
import useInputError from '../hooks/useInputError';
import { useMutationSignUp } from '../queries/mutationFn';
import StepLayout from 'layouts/StepLayout';
import { SignUpForm } from '../components';

const ScreenSignUp = () => {
    const createSignUp = useMutationSignUp();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        pwdConfirm: '',
        name: '',
        birthDay: '',
        gender: 'M',
    });

    const onChangeInfo = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setUserInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

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
            type="submit"
            disabled={
                Object.values(fieldErr).includes(true) ||
                userInfo.name === '' ||
                userInfo.birthDay === ''
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
                sendSignUp={sendSignUp}
            />
        </StepLayout>
    );
};

export default ScreenSignUp;
