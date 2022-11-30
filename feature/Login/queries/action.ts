import { apis } from './apiKey';
import { useRecoilState } from 'recoil';
import { userInfoState } from 'recoil/userState';
import { LoginForm } from 'types/interface';

const login = (loginForm: LoginForm) => {
    apis.login(loginForm)
        .then((response) => {
            const [userInfo, setUserInfo] = useRecoilState(userInfoState);
            setUserInfo(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

const userAction = {
    login,
};

export default userAction;
