import React, { useState } from 'react';
import type { UseInputErrorType } from '../types/UseInputErrorType';
import type { UseInputErrorStateType } from '../types/UseInputErrorStateType';
import type { IsErrorType } from '../types/IsErrorType';
import { emailCheck, passwordCheck } from '../modules/variables/regExp';

const useInputError = (
    initialValue: UseInputErrorStateType,
): UseInputErrorType => {
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

export default useInputError;
