import type { UseFieldErrorStateType } from './UseFieldErrorStateType';

type UseFieldErrorType = [
    UseFieldErrorStateType,
    (e: React.ChangeEvent<HTMLInputElement>, password?: string) => void,
];

export type { UseFieldErrorType };
