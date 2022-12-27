import React, { useState } from 'react';
import styled from 'styled-components';
import useInputError from '../hooks/useInputError';
import { useMutationSignUp } from '../queries/mutationFn';
import { SignUpForm } from '../components';

const ScreenSignUp = () => {
    const createSignUp = useMutationSignUp();

    const [userInfo, setUserInfo] = useState({
        email: '',
        pwd: '',
        pwdConfirm: '',
        name: '',
        birthDay: '',
        gender: '',
    });

    console.log(userInfo);

    const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const [fieldFocus, setFieldFocus] = useState({
        email: false,
        pwd: false,
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
        pwd: false,
        pwdConfirm: false,
    });

    const sendSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            Object.values(fieldErr).includes(true) ||
            userInfo.name === '' ||
            userInfo.birthDay === ''
        ) {
            alert('올바른 값을 입력해 주세요!');
        } else {
            const { pwdConfirm, ...userData } = userInfo;
            createSignUp(userData);
        }
    };

    return (
        <SignUpWrapper>
            <SignUpForm
                userInfo={userInfo}
                onChangeInfo={onChangeInfo}
                fieldFocus={fieldFocus}
                focusHandler={focusHandler}
                fieldErr={fieldErr}
                errorHandler={errorHandler}
                sendSignUp={sendSignUp}
            />
        </SignUpWrapper>
    );
};

export default ScreenSignUp;

const SignUpWrapper = styled.div``;
