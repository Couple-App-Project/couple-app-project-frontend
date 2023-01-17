interface FormPropsType {
    userCode: string;
    inviteCode: string;
    onChangeCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
    createCoupleConnet: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type { FormPropsType };
