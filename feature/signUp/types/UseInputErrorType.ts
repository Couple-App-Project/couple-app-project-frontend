import type { UseInputErrorStateType } from './UseInputErrorStateType';

type UseInputErrorType = [
    UseInputErrorStateType,
    (e: React.ChangeEvent<HTMLInputElement>, pwd?: string) => void,
];

export type { UseInputErrorType };
