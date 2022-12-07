import instance from 'utils/api';
import { LoginForm } from 'types/interface';

export const apis = {
    login: (loginForm: LoginForm) =>
        instance.post('/auth/login', { loginForm }),
};
