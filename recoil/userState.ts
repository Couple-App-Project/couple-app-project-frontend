import { atom, selector } from 'recoil';

const loginState = atom<boolean>({
    key: 'loginState',
    default: false,
});

const userInfoState = atom<{
    anniversary: string;
    backgroundColor: string;
    myBirthday: string;
    myEmail: string;
    myNickname: string;
    myTodayComment: string;
    specialPlace: null;
    yourBirthday: string;
    yourNickname: string;
    yourTodayComment: string;
}>({
    key: 'userInfoState',
    default: {
        anniversary: '',
        backgroundColor: '',
        myBirthday: '',
        myEmail: '',
        myNickname: '',
        myTodayComment: '',
        specialPlace: null,
        yourBirthday: '',
        yourNickname: '',
        yourTodayComment: '',
    },
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
