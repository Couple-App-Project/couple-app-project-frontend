import React, { useState } from 'react';
import type { UseInputErrorType } from '../types/UseInputErrorType';
import type { UseInputErrorStateType } from '../types/UseInputErrorStateType';
import type { IsErrorType } from '../types/IsErrorType';
import { emailCheck, pwdCheck } from '../modules/variables/regExp';

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
        pwd: (value: string): void => {
            if (!pwdCheck(value)) {
                setFieldErr((prev) => {
                    return { ...prev, pwd: true };
                });
            } else {
                setFieldErr((prev) => {
                    return { ...prev, pwd: false };
                });
            }
        },
        pwdConfirm: (value: string, pwd?: string): void => {
            if (pwd !== value) {
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
        pwd?: string,
    ) => {
        isError[e.target.name](e.target.value, pwd);
    };

    return [fieldErr, errorHandler];
};

export default useInputError;
