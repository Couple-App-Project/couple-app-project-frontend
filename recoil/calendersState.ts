import { atom } from 'recoil';
import { CalendersStateType } from 'types/CalendersStateType';

const calendersState = atom<CalendersStateType[]>({
    key: 'calendersState',
    default: [],
});

export default calendersState;
