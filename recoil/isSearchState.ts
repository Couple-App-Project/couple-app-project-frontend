import { atom } from 'recoil';

const isSearchState = atom({
    key: 'isSearchState',
    default: '',
});

export default isSearchState;
