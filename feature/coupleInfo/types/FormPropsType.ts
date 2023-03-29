interface FormPropsType {
    coupleData: { anniversary: string; nickname: string };
    onChangeCoupleInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    createCoupleInfo: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type { FormPropsType };
