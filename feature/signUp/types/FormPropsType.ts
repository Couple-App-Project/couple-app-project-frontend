import type { UserInfoStateType } from './UserInfoState';
import type { FieldFocusStateType } from './FieldFocusStateType';
import type { UseInputErrorStateType } from './UseInputErrorStateType';

interface FormPropsType {
    userInfo: UserInfoStateType;
    onChangeInfo: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
    fieldFocus: FieldFocusStateType;
    focusHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
    fieldErr: UseInputErrorStateType;
    errorHandler: (
        e: React.ChangeEvent<HTMLInputElement>,
        password?: string | undefined,
    ) => void;
    checkHandler: () => void;
    isEmail: boolean;
    sendSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type { FormPropsType };
