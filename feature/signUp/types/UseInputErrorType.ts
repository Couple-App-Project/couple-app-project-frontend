import type { UseInputErrorStateType } from './UseInputErrorStateType';

type UseInputErrorType = [
    UseInputErrorStateType,
    (e: React.ChangeEvent<HTMLInputElement>, password?: string) => void,
];

export type { UseInputErrorType };
