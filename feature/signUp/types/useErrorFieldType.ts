import type { FieldErrState } from './fieldErrtype';

export type UseErrField = [
    FieldErrState,
    (e: React.ChangeEvent<HTMLInputElement>, pwd: string) => void,
];
