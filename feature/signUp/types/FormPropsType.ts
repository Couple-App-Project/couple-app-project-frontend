import type { UserInfoStateType, UseFieldErrorStateType } from './index';

interface FormPropsType {
    userInfo: UserInfoStateType;
    onChangeInfo: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
    fieldErr: UseFieldErrorStateType;
    errorHandler: (
        e: React.ChangeEvent<HTMLInputElement>,
        password?: string | undefined,
    ) => void;
    checkHandler: () => void;
    isEmail: boolean;
    sendSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type { FormPropsType };
