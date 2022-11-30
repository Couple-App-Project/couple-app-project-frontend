import { atom, selector } from 'recoil';

const loginState = atom<boolean>({
    key: 'loginState',
    default: false,
});

const userInfoState = atom<object>({
    key: 'userInfoState',
    default: {},
});

// const currentUserInfoState = selector({
//     key: 'CurrentUserName',
//     get: async ({get}) => {
//       const response = await myDBQuery({
//         userID: get(userInfoState),
//       });
//       return response;
//     },
//   });

// const userState = {
//     loginState,
//     userInfoState,
//     // currentUserInfoState,
// };

export { loginState, userInfoState };
