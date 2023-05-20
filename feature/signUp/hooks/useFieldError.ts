import React, { useState } from 'react';
import type {
    UseFieldErrorStateType,
    IsErrorType,
    UseFieldErrorType,
} from '../types';
import { emailCheck, passwordCheck } from '../modules/variables/regExp';

/**
 * 회원가입 error check custom hook
 * @param initialValue  사용자 이메일, 비밀번호, 비밀번호 확인
 * @returns [각 input error boolen, error Fn]
 */
const useFieldError = (
    initialValue: UseFieldErrorStateType,
): UseFieldErrorType => {
    const [fieldErr, setFieldErr] = useState(initialValue);

    const isError: IsErrorType = {
        email: (value: string): void => {
            if (!emailCheck(value)) {
                setFieldErr((prev) => {
                    return { ...prev, email: true };
                });
            } else {
                setFieldErr((prev) => {
                    return { ...prev, email: false };
                });
            }
        },
        password: (value: string): void => {
            if (!passwordCheck(value)) {
                setFieldErr((prev) => {
                    return { ...prev, password: true };
                });
            } else {
                setFieldErr((prev) => {
                    return { ...prev, password: false };
                });
            }
        },
        pwdConfirm: (value: string, password?: string): void => {
            if (password !== value) {
                setFieldErr((prev) => {
                    return { ...prev, pwdConfirm: true };
                });
            } else {
                setFieldErr((prev) => {
                    return { ...prev, pwdConfirm: false };
                });
            }
        },
    };

    const errorHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        password?: string,
    ) => {
        isError[e.target.name](e.target.value, password);
    };

    return [fieldErr, errorHandler];
};

export default useFieldError;
