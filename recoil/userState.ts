import { atom, selector } from 'recoil';

const loginState = atom<boolean>({
    key: 'loginState',
    default: false,
});

export { loginState };
