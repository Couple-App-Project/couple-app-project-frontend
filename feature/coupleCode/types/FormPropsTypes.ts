import { AxiosResponse } from 'axios';

interface FormPropsType {
    data: AxiosResponse<any, any> | undefined;
    inviteCode: string;
    onChangeCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlerCopy: () => void;
    createCoupleConnet: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type { FormPropsType };
